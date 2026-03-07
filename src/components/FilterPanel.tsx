import React from "react";
import { ChevronDown } from "lucide-react";
import type { Platform } from "../types/platform";

interface FilterPanelProps {
  platforms: Platform[];
  setPlatforms: React.Dispatch<React.SetStateAction<Platform[]>>;

  followersRange: string | null;
  setFollowersRange: React.Dispatch<React.SetStateAction<string | null>>;

  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;

  engagement: string[];
  setEngagement: React.Dispatch<React.SetStateAction<string[]>>;

  resultCount?: number; 
  onClose?: () => void; 
}

export default function FilterPanel({
  platforms,
  setPlatforms,
  followersRange,
  setFollowersRange,
  price,
  setPrice,
  engagement,
  setEngagement,
  resultCount,
  onClose,
}: FilterPanelProps) {
  const toggleValue = <T,>(
    arr: T[],
    value: T,
    setter: (v: T[]) => void
  ) => {
    setter(
      arr.includes(value)
        ? arr.filter((x) => x !== value)
        : [...arr, value]
    );
  };

  const clearAll = () => {
    setPlatforms([]);
    setFollowersRange(null);
    setPrice(50000);
    setEngagement([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Filters</h3>
        <button
          onClick={clearAll}
          className="text-sm text-blue-600 hover:text-red-500 font-medium transition cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/* Platform */}
      <FilterSection title="Platform">
        {(["Instagram", "YouTube","YouTube NonMonetised" , "Facebook", "Facebook NonMonetised"] as Platform[]).map((p) => (
          <Checkbox
            key={p}
            label={p}
            checked={platforms.includes(p)}
            onChange={() =>
              setPlatforms((prev) =>
                prev.includes(p)
                  ? prev.filter((x) => x !== p)
                  : [...prev, p]
              )
            }
          />
        ))}
      </FilterSection>

      {/* Followers */}
      <FilterSection title="Followers">
        {[
          "Under 10K",
          "10K – 50K",
          "50K – 100K",
          "100K – 500K",
          "500K+",
        ].map((f) => (
          <Radio
            key={f}
            label={f}
            checked={followersRange === f}
            onChange={(value: string | null) =>
              setFollowersRange(value)
            }
          />
        ))}
      </FilterSection>

      {/* Price */}
      <FilterSection title="Price Range">
        <div className="flex justify-between text-sm mb-2">
          <span>$0</span>
          <span className="text-blue-600 font-semibold">
            ${price.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={50000}
          step={500}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </FilterSection>

      {/* Engagement */}
      <FilterSection title="Engagement Rate">
        <Checkbox
          label="High (> 5%)"
          checked={engagement.includes("high")}
          onChange={() =>
            toggleValue(engagement, "high", setEngagement)
          }
        />
        <Checkbox
          label="Medium (2% – 5%)"
          checked={engagement.includes("medium")}
          onChange={() =>
            toggleValue(engagement, "medium", setEngagement)
          }
        />
        <Checkbox
          label="Low (< 2%)"
          checked={engagement.includes("low")}
          onChange={() =>
            toggleValue(engagement, "low", setEngagement)
          }
        />
      </FilterSection>

      {/* Optional Mobile Button */}
      {resultCount !== undefined && onClose && (
        <button
          onClick={onClose}
          className="w-full mt-8 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg"
        >
          Show {resultCount} Results
        </button>
      )}
    </div>
  );
}

/* ================= Sub Components ================= */

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pt-6 space-y-4">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="flex justify-between items-center">
        <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
          {title}
        </p>
        <ChevronDown size={14} className="text-gray-400" />
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: any) {
  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />
      {label}
    </label>
  );
}

function Radio({ label, checked, onChange }: any) {
  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer">
      <input
        type="radio"
        checked={checked}
        onChange={() =>
          checked ? onChange(null) : onChange(label)
        }
      />
      {label}
    </label>
  );
}