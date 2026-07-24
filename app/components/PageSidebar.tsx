import type { DatasetMetadata } from "@/app/site-config/types";

export function PageSidebar({ metadata = {} }: { metadata?: DatasetMetadata }) {
  return (
    <aside>
      {Object.entries(metadata).map(([key, { label, value }]) => (
        <div key={key} className="margin-bottom-3">
          <p className="font-mono-3xs text-base text-uppercase margin-top-0 margin-bottom-05">
            {label}
          </p>
          {value.map((item) => (
            <p key={item} className="font-body-md margin-0">
              {item}
            </p>
          ))}
        </div>
      ))}
    </aside>
  );
}
