import { getMetadataFields, getMetadataValueLines } from "@/app/_utilities/content.helpers";
import type { DatasetMetadata } from "@/app/site-config/types";

export function PageSidebar({ metadata = {} }: { metadata?: DatasetMetadata }) {
  return (
    <aside className="border-left-1px border-base-lighter padding-left-4">
      {getMetadataFields(metadata).map(([key, entry]) => (
        <div key={key} className="margin-bottom-3">
          <p className="font-mono-2xs text-base text-uppercase margin-top-0 margin-bottom-1">
            {entry.label}
          </p>
          {getMetadataValueLines(entry).map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: items are static and never reorder
            <p key={i} className="font-body-sm line-height-sans-5 margin-y-05">
              {item}
            </p>
          ))}
        </div>
      ))}
    </aside>
  );
}
