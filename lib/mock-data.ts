export type MonthlyConsumption = {
  month: string; // e.g. "Dez 24"
  value: number; // kWh
};

export type ConsumptionSummary = {
  category: "heizung" | "warmwasser";
  label: string;
  currentMonth: { period: string; value: number };
  previousMonth: { period: string; value: number };
  previousYear: { period: string; value: number };
  deltaVsPreviousYear: { value: number; direction: "mehr" | "weniger" };
  deltaVsAverage: { value: number; direction: "mehr" | "weniger" };
  monthly: MonthlyConsumption[];
};

export type PropertyInfo = {
  liegenschaftNr: string;
  strasse: string;
  ort: string;
  nutzerNr: string;
  lage: string;
  nutzername: string;
};

export const propertyInfo: PropertyInfo = {
  liegenschaftNr: "100-D-04129-101679",
  strasse: "Magdalenenstr. 6",
  ort: "04129 Leipzig",
  nutzerNr: "0009-002",
  lage: "DGR",
  nutzername: "Jane Doe, John Doe",
};

export const heizung: ConsumptionSummary = {
  category: "heizung",
  label: "Wärme für Heizung",
  currentMonth: { period: "Dezember 2025", value: 553.7 },
  previousMonth: { period: "November 2025", value: 393.7 },
  previousYear: { period: "Dezember 2024", value: 424.9 },
  deltaVsPreviousYear: { value: 128.8, direction: "mehr" },
  deltaVsAverage: { value: 148.7, direction: "mehr" },
  monthly: [
    { month: "Dez 24", value: 424.9 },
    { month: "Jan 25", value: 499.1 },
    { month: "Feb 25", value: 536.6 },
    { month: "Mär 25", value: 337.2 },
    { month: "Apr 25", value: 89.5 },
    { month: "Mai 25", value: 0.1 },
    { month: "Jun 25", value: 0.1 },
    { month: "Jul 25", value: 0.1 },
    { month: "Aug 25", value: 0.0 },
    { month: "Sep 25", value: 16.8 },
    { month: "Okt 25", value: 217.1 },
    { month: "Nov 25", value: 393.7 },
    { month: "Dez 25", value: 553.7 },
  ],
};

export const warmwasser: ConsumptionSummary = {
  category: "warmwasser",
  label: "Wärme für Warmwasser",
  currentMonth: { period: "Dezember 2025", value: 96.2 },
  previousMonth: { period: "November 2025", value: 86.2 },
  previousYear: { period: "Dezember 2024", value: 161.8 },
  deltaVsPreviousYear: { value: 65.6, direction: "weniger" },
  deltaVsAverage: { value: 32.4, direction: "mehr" },
  monthly: [
    { month: "Dez 24", value: 161.8 },
    { month: "Jan 25", value: 119.9 },
    { month: "Feb 25", value: 84.5 },
    { month: "Mär 25", value: 107.7 },
    { month: "Apr 25", value: 82.3 },
    { month: "Mai 25", value: 82.6 },
    { month: "Jun 25", value: 79.4 },
    { month: "Jul 25", value: 91.9 },
    { month: "Aug 25", value: 79.5 },
    { month: "Sep 25", value: 91.9 },
    { month: "Okt 25", value: 76.0 },
    { month: "Nov 25", value: 86.2 },
    { month: "Dez 25", value: 96.2 },
  ],
};

export const plainLanguageSummary = `Dein Heizungsverbrauch im Dezember 2025 lag bei 553,7 kWh — das sind 128,8 kWh mehr als im gleichen Monat letztes Jahr und 148,7 kWh über dem Gebäudedurchschnitt. Der Anstieg gegenüber November (393,7 kWh) ist saisonal normal, aber der Vergleich zum Vorjahr zeigt einen deutlich höheren Verbrauch.

Beim Warmwasser sieht es besser aus: Mit 96,2 kWh hast du 65,6 kWh weniger verbraucht als im Dezember 2024. Allerdings liegst du 32,4 kWh über dem Gebäudedurchschnitt.

Tipp: Der Heizungsverbrauch ist auffällig hoch. Prüfe, ob die Heizkörper frei stehen und die Thermostate richtig eingestellt sind.`;

export function formatNumber(n: number): string {
  return n.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}
