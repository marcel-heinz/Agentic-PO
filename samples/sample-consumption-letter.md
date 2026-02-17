# Sample Consumption Letter

This is a representative example of a monthly "Verbrauchsinformation" (consumption information) letter that a tenant in Germany might receive. In the real product, this would be a photographed or scanned paper letter.

---

```
═══════════════════════════════════════════════════════════════════
             VERBRAUCHSINFORMATION - WARMWASSER
             Abrechnungszeitraum: Januar 2026
═══════════════════════════════════════════════════════════════════

Mieter:        Marcel Heinz
Wohnung:       Musterstraße 42, Whg. 3, 80331 München
Ablesung:      01.02.2026
Nächste Abl.:  01.03.2026

───────────────────────────────────────────────────────────────────
WARMWASSERVERBRAUCH
───────────────────────────────────────────────────────────────────
Zähler-Nr:           WW-2024-0042
Zählerstand alt:     145,7 m³    (01.01.2026)
Zählerstand neu:     148,1 m³    (01.02.2026)
──────────────────────────────────
Verbrauch aktuell:     2,4 m³

───────────────────────────────────────────────────────────────────
VERGLEICHSWERTE
───────────────────────────────────────────────────────────────────

                     Ihr Verbrauch    Vorjahreszeitraum    Gebäudedurchschnitt
Warmwasser (m³):         2,4              2,1                   1,8
Kosten (geschätzt):     18,72 €          16,38 €               14,04 €

Veränderung zum Vorjahr: +14,3%
Einordnung:              ■■■■■■■□□□  ERHÖHT

───────────────────────────────────────────────────────────────────
KOSTENAUFSTELLUNG (vorläufig)
───────────────────────────────────────────────────────────────────
Grundkosten (30%):                    4,20 €
Verbrauchskosten (70%):             14,52 €
                                   ─────────
Geschätzte Gesamtkosten:            18,72 €

Preis pro m³:                        7,80 €/m³

───────────────────────────────────────────────────────────────────
HINWEISE
───────────────────────────────────────────────────────────────────
* Die Verbrauchsinformation dient der monatlichen Übersicht
  gemäß §6a Heizkostenverordnung.
* Die angegebenen Kosten sind vorläufig und werden mit der
  jährlichen Heizkostenabrechnung endgültig abgerechnet.
* VE = Verbrauchseinheiten, HKV = Heizkostenverteiler
* Gebäudedurchschnitt: Durchschnitt aller Wohneinheiten (42 WE)
* Bei Fragen: hausverwaltung@muster.de

Erstellt am: 05.02.2026
Nächste Information: ca. 05.03.2026

═══════════════════════════════════════════════════════════════════
```

---

## What a Good Extraction Should Produce

```json
{
  "billing_period": {
    "month": "January",
    "year": 2026,
    "start_date": "2026-01-01",
    "end_date": "2026-02-01"
  },
  "meter": {
    "meter_id": "WW-2024-0042",
    "reading_start": 145.7,
    "reading_end": 148.1,
    "unit": "m³"
  },
  "consumption": {
    "value": 2.4,
    "unit": "m³",
    "previous_year_same_period": 2.1,
    "building_average": 1.8,
    "change_vs_previous_year_pct": 14.3,
    "rating": "ERHÖHT"
  },
  "cost": {
    "estimated_total": 18.72,
    "base_cost": 4.20,
    "usage_cost": 14.52,
    "price_per_unit": 7.80,
    "currency": "EUR"
  },
  "metadata": {
    "tenant": "Marcel Heinz",
    "address": "Musterstraße 42, Whg. 3, 80331 München",
    "building_units": 42,
    "next_reading_date": "2026-03-01",
    "document_created": "2026-02-05"
  }
}
```
