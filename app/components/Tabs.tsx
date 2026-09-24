"use client";

import { useRef } from "react";
import "../styles/tabs.css";

export type TabOption<Value extends string> = {
  value: Value;
  label: string;
  count?: number;
};

export function Tabs<Value extends string>({
  id,
  panelId,
  ariaLabel,
  options,
  activeTab,
  onTabChange,
}: {
  id: string;
  panelId: string;
  ariaLabel: string;
  options: TabOption<Value>[];
  activeTab: Value;
  onTabChange: (value: Value) => void;
}) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = options.findIndex(({ value }) => value === activeTab);

  const selectByIndex = (index: number) => {
    const option = options[index];
    if (!option) return;

    onTabChange(option.value);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (activeIndex + 1) % options.length;
    if (event.key === "ArrowLeft") nextIndex = (activeIndex - 1 + options.length) % options.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = options.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectByIndex(nextIndex);
  };

  return (
    <div className="aq-tabs" role="tablist" aria-label={ariaLabel}>
      {options.map(({ value, label, count }, index) => {
        const isActive = activeTab === value;

        return (
          <button
            key={value}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${id}-${value}-tab`}
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            className={`aq-tabs__tab ${isActive ? "aq-tabs__tab--active" : ""}`}
            onClick={() => onTabChange(value)}
            onKeyDown={handleKeyDown}
          >
            <span>{label}</span>
            {count !== undefined && <span className="aq-tabs__count">{count}</span>}
          </button>
        );
      })}
    </div>
  );
}
