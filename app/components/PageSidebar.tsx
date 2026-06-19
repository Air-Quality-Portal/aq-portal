import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";

import {
  type Category,
  CONTENT_SIDEBAR_CONTENT_TYPES,
  type ContentType,
} from "@/app/site-config/types";

export function PageSidebar({
  contentType,
  categories,
  relatedContent = [],
}: {
  contentType: ContentType;
  categories: Category[];
  relatedContent?: RelatedItem[];
}) {
  // TODO: update to include inpage navigation
  return (
    <aside>
      {
        // Begin section on themes, categories, related content
        CONTENT_SIDEBAR_CONTENT_TYPES.includes(contentType) && (
          <div className="bg-base-lightest padding-4 margin-bottom-4">
            {contentType === "dataset" && (
              <div className="margin-bottom-3">
                <button type="button" className="usa-button width-full">
                  View Data
                </button>
              </div>
            )}

            <div className="border-top border-base-lighter padding-top-3 margin-bottom-3">
              <MetaGroup label="Type">
                <div className="margin-right-1 margin-bottom-1">
                  <Tag color="primary-lighter" textColor="primary-dark">
                    {contentType}
                  </Tag>
                </div>
              </MetaGroup>

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
              <div className="border-top border-base-lighter padding-top-3">
                <p className="text-bold font-body-sm margin-top-0 margin-bottom-3">
                  Related Content
                </p>
                {relatedContent.map((item) => (
                  <RelatedContentItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )
      }
    </aside>
  );
}

type RelatedItem = {
  id: string;
  title: string;
  href: string;
  categories: Category[];
};

function MetaGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="margin-bottom-3">
      <p className="text-bold font-body-sm margin-top-0 margin-bottom-1">{label}</p>
      <div className="display-flex flex-wrap">{children}</div>
    </div>
  );
}

function RelatedContentItem({ item }: { item: RelatedItem }) {
  return (
    <div className="margin-bottom-3">
      <Link href={item.href} className="text-no-underline">
        <p className="font-heading-md text-bold text-primary-dark margin-top-0 margin-bottom-1">
          {item.title}
        </p>
      </Link>
      <div className="display-flex flex-wrap">
        {item.categories.map((category) => (
          <div key={category} className="margin-right-1 margin-bottom-1">
            <Tag color="primary-lighter" textColor="primary-dark">
              {category}
            </Tag>
          </div>
        ))}
      </div>
    </div>
  );
}
