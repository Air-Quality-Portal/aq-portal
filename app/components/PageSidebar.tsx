import type { ReactNode } from "react";

import {
  type Category1,
  type Category2,
  type Category3,
  CONTENT_SIDEBAR_CONTENT_TYPES,
  type ContentType,
} from "@/app/site-config/types";

export function PageSidebar({
  contentType,
  category1 = [],
  category2 = [],
  category3 = [],
}: {
  contentType: ContentType;
  category1?: Category1[];
  category2?: Category2[];
  category3?: Category3[];
}) {
  if (!CONTENT_SIDEBAR_CONTENT_TYPES.includes(contentType)) return null;

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
