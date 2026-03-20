# Database Schema — OHP / KennisKuur
## Platform: Supabase (PostgreSQL)

---

## Tabellen

### `profiles`
Uitbreiding op Supabase Auth `auth.users`. Aangemaakt via trigger bij registratie.

| Kolom | Type | Beschrijving |
|---|---|---|
| `id` | uuid (FK → auth.users) | Primaire sleutel |
| `email` | text | E-mailadres |
| `full_name` | text | Volledige naam |
| `created_at` | timestamptz | Aanmaakdatum |
| `subscription_level` | int (1-4) | Huidig abonnementsniveau |
| `subscription_start` | timestamptz | Startdatum abonnement |
| `mollie_customer_id` | text | Mollie klant-ID (voor SEPA-mandaat) |

---

### `subscriptions`
Abonnementsgeschiedenis per lid.

| Kolom | Type | Beschrijving |
|---|---|---|
| `id` | uuid | Primaire sleutel |
| `user_id` | uuid (FK → profiles) | Lid |
| `level` | int (1-4) | Level |
| `status` | text | `active`, `cancelled`, `past_due` |
| `mollie_subscription_id` | text | Mollie subscription ID |
| `mollie_mandate_id` | text | SEPA-mandaat ID |
| `started_at` | timestamptz | Startdatum |
| `cancelled_at` | timestamptz | Opzegdatum (nullable) |
| `amount` | numeric | Bedrag per maand |

**Level definitie:**
- Level 1: €9,87/mnd — Nieuwsbrief + Archief
- Level 2: €14,87/mnd — + Community + Bonus content
- Level 3: €29,87/mnd — + Exclusieve edities + Live Q&A + Nascholing
- Level 4: VIP (op aanvraag) — + Kwartaalconsult

---

### `publications`
KennisKuur edities.

| Kolom | Type | Beschrijving |
|---|---|---|
| `id` | uuid | Primaire sleutel |
| `edition_number` | int | Editienummer (bijv. 41) |
| `title` | text | Titel van de editie |
| `slug` | text | URL-slug |
| `summary` | text | Korte samenvatting (zichtbaar voor iedereen) |
| `content` | text | Volledige inhoud (Markdown/MDX) |
| `pdf_url` | text | Supabase Storage URL van de PDF |
| `pillar` | text | Content pillar (`zonlicht`, `hormonen`, `biologie`, `leefstijl`, `vruchtbaarheid`, `voeding`) |
| `min_level` | int | Minimaal vereist abonnementsniveau |
| `published_at` | timestamptz | Publicatiedatum |
| `is_public` | boolean | Gratis toegankelijk (voor leadgeneratie) |
| `cover_image_url` | text | URL van de cover afbeelding |

**Toegangslogica via Row Level Security (RLS):**
- `is_public = true` → iedereen
- `min_level = 1` → alle leden
- `min_level = 2` → Level 2+
- `min_level = 3` → Level 3+

---

### `orders`
Boekbestellingen (webshop).

| Kolom | Type | Beschrijving |
|---|---|---|
| `id` | uuid | Primaire sleutel |
| `user_id` | uuid (FK → profiles, nullable) | Besteller (optioneel, ook gastbestellingen) |
| `email` | text | E-mailadres besteller |
| `full_name` | text | Naam besteller |
| `address` | jsonb | Afleveradres |
| `product` | text | Product (`boek_carnivoor`, etc.) |
| `quantity` | int | Aantal |
| `amount` | numeric | Totaalbedrag |
| `status` | text | `pending`, `paid`, `shipped`, `completed` |
| `mollie_payment_id` | text | Mollie betaling ID |
| `fulfillment_id` | text | ID bij het fulfillment center |
| `fulfillment_status` | text | Status vanuit fulfillment center |
| `created_at` | timestamptz | Bestelmoment |
| `shipped_at` | timestamptz | Verzenddatum (nullable) |

---

### `email_subscribers`
Gratis e-mailinschrijvingen (lead magnet, nog geen betaald lid).

| Kolom | Type | Beschrijving |
|---|---|---|
| `id` | uuid | Primaire sleutel |
| `email` | text (unique) | E-mailadres |
| `source` | text | Herkomst (`leadmagnet`, `instagram`, `homepage`) |
| `created_at` | timestamptz | Inschrijfdatum |
| `converted_at` | timestamptz | Moment van conversie naar betaald lid (nullable) |

---

## Row Level Security (RLS) Samenvatting

| Tabel | Lezen | Schrijven |
|---|---|---|
| `profiles` | Eigen profiel | Eigen profiel |
| `subscriptions` | Eigen abonnementen | Alleen via server (service role) |
| `publications` | Op basis van `min_level` + eigen level | Alleen admins |
| `orders` | Eigen bestellingen | Alleen via server |
| `email_subscribers` | — | Iedereen (insert only) |

---

### `testimonials`
Testimonials beheerd via de admin-backend door Philip.

| Kolom | Type | Beschrijving |
|---|---|---|
| `id` | uuid | Primaire sleutel |
| `image_url` | text | Publieke URL vanuit Supabase Storage bucket `testimonials` |
| `is_featured` | boolean | Featured (altijd bovenaan) of regular |
| `sort_order` | int | Handmatige volgorde binnen featured/regular groep |
| `created_at` | timestamptz | Uploaddatum |

**RLS:** Publiek lezen, schrijven alleen via service role (admin API routes).
**Migratie:** `supabase/migrations/20260319_testimonials.sql`

---

## Supabase Storage Buckets

| Bucket | Toegang | Gebruik |
|---|---|---|
| `publications-pdf` | Privé (via signed URLs) | KennisKuur PDF's per editie |
| `publication-covers` | Publiek | Cover afbeeldingen |
| `site-assets` | Publiek | Logo's, hero-afbeeldingen |
| `testimonials` | Publiek | Testimonial screenshots (upload via admin) |

---

## Migratie bestaande leden

Bestaande 400+ leden komen uit WooCommerce:
1. Export uit WooCommerce: naam, e-mail, inschrijfdatum, Mollie klant-ID, mandaat-ID
2. Import in `profiles` + `subscriptions` via Supabase admin script
3. Alle bestaande leden krijgen Level 1 tenzij anders bepaald
4. Wachtwoord-reset e-mail via Supabase Auth (`sendPasswordResetEmail`)

---

## Tech Stack Integraties

```
Next.js (frontend + API routes)
    ↕
Supabase (auth + database + storage)
    ↕
Mollie (betalingen + SEPA-mandaten)
    ↕
Fulfillment Center API (boekverzending)
```
