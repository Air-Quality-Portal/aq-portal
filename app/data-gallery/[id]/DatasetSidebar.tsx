import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";

import { ThemeTag } from "@/app/components";
import { makeContentTypeTag } from "@/app/site-config/content.helpers";
import type { Category, ContentType, Theme } from "@/app/site-config/types";

type RelatedItem = {
  id: string;
  title: string;
  href: string;
  themes: Theme[];
  contentType: ContentType;
};

function MetaGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="margin-bottom-3">
      <p className="text-bold font-body-sm margin-top-0 margin-bottom-1">{label}</p>
      <div className="display-flex flex-wrap">{children}</div>
    </div>
  );
}

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

      <div className="border-bottom border-base-lighter margin-bottom-3">
        <MetaGroup label="Type">
          <div className="margin-right-1 margin-bottom-1">
            <Tag color="primary-lighter" textColor="primary-dark">
              Dataset
            </Tag>
          </div>
        </MetaGroup>

        {themes.length > 0 && (
          <MetaGroup label="Theme">
            {themes.map((theme) => (
              <div key={theme} className="margin-right-1 margin-bottom-1">
                <ThemeTag theme={theme} />
              </div>
            ))}
          </MetaGroup>
        )}

        {categories.length > 0 && (
          <MetaGroup label="Hazard">
            {categories.map((category) => (
              <div key={category} className="margin-right-1 margin-bottom-1">
                <Tag color="primary-lighter" textColor="primary-dark">
                  {category}
                </Tag>
              </div>
            ))}
          </MetaGroup>
        )}
      </div>

      {relatedContent.length > 0 && (
        <div>
          <p className="text-bold font-body-sm margin-top-0 margin-bottom-3">Related Content</p>
          {relatedContent.map((item) => (
            <div key={item.id} className="margin-bottom-3">
              <Link href={item.href} className="text-no-underline">
                <p className="font-heading-md text-bold text-primary-dark margin-top-0 margin-bottom-1">
                  {item.title}
                </p>
              </Link>
              <div className="display-flex flex-wrap">
                {item.themes.slice(0, 1).map((theme) => (
                  <div key={theme} className="margin-right-1 margin-bottom-1">
                    <ThemeTag theme={theme} />
                  </div>
                ))}
                <div className="margin-right-1 margin-bottom-1">
                  {makeContentTypeTag(item.contentType)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
