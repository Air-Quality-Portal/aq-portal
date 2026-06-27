import type { ReactNode } from "react";

import type { Category1, Category2, Category3 } from "@/app/site-config/types";

export function PageSidebar({
  category1 = [],
  category2 = [],
  category3 = [],
}: {
  category1?: Category1[];
  category2?: Category2[];
  category3?: Category3[];
}) {
  return (
    <aside>
      <MetaGroup label="Data Provider">{category1.join(", ") || "-"}</MetaGroup>
      <MetaGroup label="Instrument Type">{category2.join(", ") || "-"}</MetaGroup>
      <MetaGroup label="Instrument Subtype">{category3.join(", ") || "-"}</MetaGroup>
    </aside>
  );
}

function MetaGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="margin-bottom-3">
      <p className="font-mono-3xs text-base text-uppercase margin-top-0 margin-bottom-05">
        {label}
      </p>
      <p className="font-body-md margin-0">{children}</p>
    </div>
  );
}
