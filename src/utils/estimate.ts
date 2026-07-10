export interface EstimateInput {
  propertyType: "House" | "Apartment" | "Office" | "Shop";
  rooms: number;
  carpetSize: number; // in square metres, 0 if none
  sofas: number;
  urgency: "Standard" | "Priority" | "Emergency";
}

const BASE_BY_TYPE: Record<EstimateInput["propertyType"], number> = {
  House: 3500,
  Apartment: 2800,
  Office: 4000,
  Shop: 3200,
};

const URGENCY_MULTIPLIER: Record<EstimateInput["urgency"], number> = {
  Standard: 1,
  Priority: 1.15,
  Emergency: 1.35,
};

/** Produces an approximate price range in KES. This is an estimate only —
 * final pricing is confirmed after a walk-through or photo review. */
export function calculateEstimate(input: EstimateInput): { low: number; high: number } {
  const base = BASE_BY_TYPE[input.propertyType];
  const roomCost = Math.max(0, input.rooms - 1) * 900;
  const carpetCost = input.carpetSize * 250;
  const sofaCost = input.sofas * 800;

  const subtotal = base + roomCost + carpetCost + sofaCost;
  const withUrgency = subtotal * URGENCY_MULTIPLIER[input.urgency];

  const low = Math.round((withUrgency * 0.9) / 50) * 50;
  const high = Math.round((withUrgency * 1.15) / 50) * 50;

  return { low, high };
}

export function formatKES(amount: number): string {
  return `KES ${amount.toLocaleString("en-KE")}`;
}
