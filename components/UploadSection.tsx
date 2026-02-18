"use client";

import { useCallback, useRef, useState } from "react";
import ConsumptionCard from "@/components/ConsumptionCard";
import {
  heizung,
  warmwasser,
  plainLanguageSummary,
} from "@/lib/mock-data";

type Phase = "idle" | "processing" | "complete";

const steps = [
  "Bild wird verarbeitet…",
  "Text wird erkannt…",
  "Daten werden extrahiert…",
];

export default function UploadSection() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const startProcessing = useCallback((name: string) => {
    setFileName(name);
    setPhase("processing");
    setStepIndex(0);

    // Step through the 3 processing messages
    setTimeout(() => setStepIndex(1), 800);
    setTimeout(() => setStepIndex(2), 1600);
    setTimeout(() => setPhase("complete"), 2500);
  }, []);

  const handleFile = useCallback(
    (file: File | undefined) => {
      if (!file) return;
      startProcessing(file.name);
    },
    [startProcessing]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFile(e.dataTransfer.files[0]);
    },
    [handleFile]
  );

  const reset = () => {
    setPhase("idle");
    setStepIndex(0);
    setFileName(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  if (phase === "idle") {
    return (
      <section className="max-w-xl mx-auto">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-heating-500 bg-heating-50"
              : "border-border hover:border-text-muted"
          }`}
        >
          <div className="text-4xl mb-3">📄</div>
          <p className="font-medium">
            Verbrauchsabrechnung hier ablegen
          </p>
          <p className="text-sm text-text-muted mt-1">
            oder klicken, um eine Datei auszuwählen
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      </section>
    );
  }

  if (phase === "processing") {
    return (
      <section className="max-w-xl mx-auto text-center py-12">
        <div className="inline-flex items-center gap-3">
          <div className="h-5 w-5 rounded-full border-2 border-heating-500 border-t-transparent animate-spin" />
          <span className="text-lg font-medium">{steps[stepIndex]}</span>
        </div>
        {fileName && (
          <p className="text-sm text-text-muted mt-3">{fileName}</p>
        )}
      </section>
    );
  }

  // phase === "complete"
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-4">
        <ConsumptionCard data={heizung} />
        <ConsumptionCard data={warmwasser} />
      </div>

      <div className="mt-6 bg-surface-card rounded-xl border border-border p-5 shadow-sm">
        <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-3">
          Zusammenfassung
        </h3>
        <p className="text-text-primary whitespace-pre-line leading-relaxed">
          {plainLanguageSummary}
        </p>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={reset}
          className="px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-surface-card transition-colors cursor-pointer"
        >
          Neue Analyse
        </button>
      </div>
    </section>
  );
}
