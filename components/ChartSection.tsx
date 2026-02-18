"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { heizung, warmwasser, formatNumber } from "@/lib/mock-data";
import type { MonthlyConsumption } from "@/lib/mock-data";

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface-card border border-border rounded-lg px-3 py-2 text-sm shadow-md">
      <p className="font-medium">{label}</p>
      <p className="text-text-secondary">{formatNumber(payload[0].value)} kWh</p>
    </div>
  );
}

function ConsumptionChart({
  data,
  color,
  label,
}: {
  data: MonthlyConsumption[];
  color: string;
  label: string;
}) {
  return (
    <div>
      <h3 className="text-sm font-medium text-text-secondary mb-4">{label}</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#a3a3a3" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#a3a3a3" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v: number) => formatNumber(v)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function ChartSection() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-6">
        Dein Verbrauch der letzten 13 Monate
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ConsumptionChart
          data={heizung.monthly}
          color="#f97316"
          label="Wärme für Heizung (kWh)"
        />
        <ConsumptionChart
          data={warmwasser.monthly}
          color="#3b82f6"
          label="Wärme für Warmwasser (kWh)"
        />
      </div>
    </section>
  );
}
