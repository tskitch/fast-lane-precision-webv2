"use client";

import { useId, useState } from "react";

type Tab = { id: string; label: string; content: React.ReactNode };

export function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist" aria-label={label}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${tab.id}`}
            className={`tab-trigger ${active === i ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={active !== i}
          className="tab-panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
