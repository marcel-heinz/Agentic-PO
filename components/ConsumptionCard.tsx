import { ConsumptionSummary, formatNumber } from "@/lib/mock-data";

function DeltaBadge({
  value,
  direction,
}: {
  value: number;
  direction: "mehr" | "weniger";
}) {
  const isMore = direction === "mehr";
  return (
    <span
      className={`inline-flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded-full ${
        isMore
          ? "bg-red-50 text-red-700"
          : "bg-green-50 text-green-700"
      }`}
    >
      {isMore ? "↑" : "↓"} {formatNumber(value)} kWh {direction}
    </span>
  );
}

export default function ConsumptionCard({
  data,
}: {
  data: ConsumptionSummary;
}) {
  const borderColor =
    data.category === "heizung" ? "border-l-heating-500" : "border-l-water-500";

  return (
    <div
      className={`bg-surface-card rounded-xl border border-border border-l-4 ${borderColor} p-5 shadow-sm`}
    >
      <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide">
        {data.label}
      </h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-bold">
          {formatNumber(data.currentMonth.value)}
        </span>
        <span className="text-text-secondary text-sm">kWh</span>
      </div>
      <p className="text-sm text-text-muted">{data.currentMonth.period}</p>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-text-muted">Vormonat</p>
          <p className="font-medium">
            {formatNumber(data.previousMonth.value)} kWh
          </p>
          <p className="text-text-muted text-xs">{data.previousMonth.period}</p>
        </div>
        <div>
          <p className="text-text-muted">Vorjahr</p>
          <p className="font-medium">
            {formatNumber(data.previousYear.value)} kWh
          </p>
          <p className="text-text-muted text-xs">{data.previousYear.period}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <DeltaBadge
          value={data.deltaVsPreviousYear.value}
          direction={data.deltaVsPreviousYear.direction}
        />
        <DeltaBadge
          value={data.deltaVsAverage.value}
          direction={data.deltaVsAverage.direction}
        />
      </div>
    </div>
  );
}
