import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { calculateEstimate, formatKES, type EstimateInput } from "@/utils/estimate";
import Button from "@/components/ui/Button";

const PROPERTY_TYPES: EstimateInput["propertyType"][] = ["House", "Apartment", "Office", "Shop"];
const URGENCY_LEVELS: EstimateInput["urgency"][] = ["Standard", "Priority", "Emergency"];

export default function EstimateCalculator() {
  const [input, setInput] = useState<EstimateInput>({
    propertyType: "House",
    rooms: 3,
    carpetSize: 0,
    sofas: 0,
    urgency: "Standard",
  });

  const { low, high } = calculateEstimate(input);

  return (
    <div className="rounded-3xl border border-accent bg-white p-6 shadow-card md:p-8">
      <p className="eyebrow">Instant Estimator</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-secondary">Get a price range in seconds</h3>
      <p className="mt-2 text-sm text-secondary/60">
        This gives an approximate range only — your exact price is confirmed after we review the full request.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Property Type</p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setInput((s) => ({ ...s, propertyType: type }))}
                className={`rounded-xl border px-2 py-2.5 text-xs font-medium transition-colors ${
                  input.propertyType === type
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-accent text-secondary/60 hover:border-primary/40"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="rooms" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">
            Rooms: {input.rooms}
          </label>
          <input
            id="rooms"
            type="range"
            min={1}
            max={10}
            value={input.rooms}
            onChange={(e) => setInput((s) => ({ ...s, rooms: Number(e.target.value) }))}
            className="mt-2 w-full accent-primary"
          />
        </div>

        <div>
          <label htmlFor="carpet" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">
            Carpet Size (m²): {input.carpetSize}
          </label>
          <input
            id="carpet"
            type="range"
            min={0}
            max={80}
            step={5}
            value={input.carpetSize}
            onChange={(e) => setInput((s) => ({ ...s, carpetSize: Number(e.target.value) }))}
            className="mt-2 w-full accent-primary"
          />
        </div>

        <div>
          <label htmlFor="sofas" className="text-xs font-semibold uppercase tracking-wide text-secondary/50">
            Number of Sofas: {input.sofas}
          </label>
          <input
            id="sofas"
            type="range"
            min={0}
            max={10}
            value={input.sofas}
            onChange={(e) => setInput((s) => ({ ...s, sofas: Number(e.target.value) }))}
            className="mt-2 w-full accent-primary"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary/50">Urgency</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {URGENCY_LEVELS.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setInput((s) => ({ ...s, urgency: level }))}
                className={`rounded-xl border px-2 py-2.5 text-xs font-medium transition-colors ${
                  input.urgency === level
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-accent text-secondary/60 hover:border-primary/40"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        key={`${low}-${high}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 rounded-2xl bg-secondary p-6 text-center"
      >
        <p className="text-xs uppercase tracking-wide text-white/50">Estimated Price Range</p>
        <p className="mt-2 font-display text-3xl font-semibold text-white">
          {formatKES(low)} – {formatKES(high)}
        </p>
      </motion.div>

      <Button to="/request-quote" className="mt-6 w-full" icon={<FiArrowRight />}>
        Confirm This Quote
      </Button>
    </div>
  );
}
