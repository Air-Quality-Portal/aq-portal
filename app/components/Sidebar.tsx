"use client";

import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import { Button } from "@trussworks/react-uswds";
import type { ReactNode } from "react";
import { ThemeTag } from "@/app/components";
import type { Category, ContentType, Theme } from "@/app/site-config/types";

type RelatedItem = {
  id: string;
  title: string;
  href: string;
  themes: Theme[];
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
        {item.themes.map((theme) => (
          <div key={theme} className="margin-right-1 margin-bottom-1">
            <ThemeTag theme={theme} />
          </div>
        ))}
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

export function Sidebar({
  themes,
  categories,
  relatedContent = [],
  contentType,
  datasetUrl,
}: {
  themes: Theme[];
  categories: Category[];
  relatedContent?: RelatedItem[];
  contentType?: ContentType;
  datasetUrl?: string;
}) {
  const hasMeta = Boolean(contentType) || themes.length > 0 || categories.length > 0;
  const hasDatasetUrl = Boolean(datasetUrl);

  const onViewDataClick = () => {
    if (!datasetUrl) return;

    window.location.assign(datasetUrl);
  };

  return (
    <aside className="bg-base-lightest padding-4 margin-bottom-4 ">
      {hasDatasetUrl && (
        <div className="padding-bottom-3 border-bottom border-base-lighter">
          <Button type="button" className="usa-button width-full" onClick={onViewDataClick}>
            View Data
          </Button>
        </div>
      )}

      {hasMeta && (
        <div className="padding-top-3 border-bottom border-base-lighter">
          {contentType && (
            <MetaGroup label="Type">
              <div className="margin-right-1 margin-bottom-1">
                <Tag color="primary-lighter" textColor="primary-dark">
                  {contentType}
                </Tag>
              </div>
            </MetaGroup>
          )}

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
      )}

      {relatedContent.length > 0 && (
        <div className=" padding-top-3">
          <p className="text-bold font-body-sm margin-top-0 margin-bottom-3">Related Content</p>
          {relatedContent.map((item) => (
            <RelatedContentItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </aside>
  );
}
