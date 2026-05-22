import { Tag } from "@teamimpact/veda-ui-blocks";

import { ThemeTag } from "@/app/components";
import type { Category, Theme } from "@/app/site-config/types";

export function DatasetSidebar({
  themes,
  categories,
}: {
  themes: Theme[];
  categories: Category[];
}) {
  return (
    <aside className="bg-base-lightest padding-4 margin-bottom-4">
      {themes.length > 0 && (
        <div className="margin-bottom-3">
          <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Theme</p>
          <div className="display-flex flex-wrap grid-gap-sm">
            {themes.map((theme) => (
              <div key={theme} className="margin-right-1 margin-bottom-1">
                <ThemeTag theme={theme} />
              </div>
            ))}
          </div>
        </div>
      )}
      {categories.length > 0 && (
        <div className="margin-bottom-3">
          <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Hazard</p>
          <div className="display-flex flex-wrap">
            {categories.map((category) => (
              <div key={category} className="margin-right-1 margin-bottom-1">
                <Tag color="primary-lighter" textColor="primary-dark">
                  {category}
                </Tag>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
