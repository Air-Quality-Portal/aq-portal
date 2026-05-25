import { Tag } from "@teamimpact/veda-ui-blocks";

import { ThemeTag } from "@/app/components";
import type { Category, ContentType, Theme } from "@/app/site-config/types";

type RelatedItem = {
  id: string;
  title: string;
  href: string;
  themes: Theme[];
  contentType: ContentType;
};

export function DatasetSidebar({
  themes,
  categories,
  relatedContent = [],
}: {
  themes: Theme[];
  categories: Category[];
  relatedContent?: RelatedItem[];
}) {
  return (
    <aside className="bg-base-lightest padding-4 margin-bottom-4">
      <div className="margin-bottom-3">
        <button type="button" className="usa-button width-full">
          View Data
        </button>
      </div>

      <div className="border-bottom border-base-lighter padding-bottom-3 margin-bottom-3">
        <div className="margin-bottom-2">
          <p className="text-bold font-body-sm margin-top-0 margin-bottom-1">Type</p>
          <Tag color="primary-lighter" textColor="primary-dark">
            Dataset
          </Tag>
        </div>

        {themes.length > 0 && (
          <div className="margin-bottom-2">
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
          <div>
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
      </div>

      {relatedContent.length > 0 && (
        <div>
          <p className="text-bold font-body-sm margin-top-0 margin-bottom-3">Related Content</p>
          {relatedContent.map((item) => (
            <div key={item.id} className="margin-bottom-3">
              <a href={item.href} className="text-no-underline">
                <p className="font-heading-md text-bold text-primary-dark margin-top-0 margin-bottom-1">
                  {item.title}
                </p>
              </a>
              <div className="display-flex flex-wrap">
                {item.themes.slice(0, 1).map((theme) => (
                  <div key={theme} className="margin-right-1 margin-bottom-1">
                    <ThemeTag theme={theme} />
                  </div>
                ))}
                <div className="margin-right-1 margin-bottom-1">
                  <Tag color="primary-lighter" textColor="primary-dark">
                    {item.contentType}
                  </Tag>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
