import type { ReactNode } from "react";

import {
  CATEGORY_MAP,
  type Category1,
  type Category2,
  type Category3,
} from "@/app/site-config/types";

export function PageSidebar({
  category1 = [],
  category2 = [],
  category3 = [],
}: {
  category1?: Category1[];
  category2?: Category2[];
  category3?: Category3[];
}) {
  const groups = [
    { label: CATEGORY_MAP.category1.label, values: category1 },
    { label: CATEGORY_MAP.category2.label, values: category2 },
    { label: CATEGORY_MAP.category3.label, values: category3 },
  ];

  return (
    <aside>
      {groups.map(({ label, values }) => (
        <MetaGroup key={label} label={label}>
          {values.join(", ") || "-"}
        </MetaGroup>
      ))}
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
