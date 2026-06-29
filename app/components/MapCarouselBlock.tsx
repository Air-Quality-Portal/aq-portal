"use client";

import { Link } from "@teamimpact/veda-ui-blocks";
import { Icon } from "@trussworks/react-uswds";
import NextLink from "next/link";
import { type ComponentProps, useState } from "react";
import { Section } from "@/app/components";
import type { MapCarouselBlockProps } from "@/app/site-config/types";
import { StacSingleLayerBlock } from "./blocks";
import { SectionHeading } from "./SectionHeading";

export const MapCarouselBlock = ({
  maps = [],
  heading,
  href,
  linkLabel,
}: MapCarouselBlockProps) => {
  const count = maps.length;
  const [activeIndex, setActiveIndex] = useState(0);

  if (count === 0) return null;

  const goTo = (index: number) => setActiveIndex(((index % count) + count) % count);
  const activeItem = maps[activeIndex];

  return (
    <Section>
      <SectionHeading linkLabel={linkLabel} href={href} sectionDescriptor="visualize">
        {heading}
      </SectionHeading>

      <div className="position-relative overflow-hidden ">
        <div
          className="display-flex"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 400ms ease",
          }}
        >
          {maps.map((map, index) => (
            <div
              key={map.heading ?? index}
              className="width-full"
              style={{ flex: "0 0 100%" }}
              aria-hidden={index !== activeIndex}
            >
              <StacSingleLayerBlock block={map} />
            </div>
          ))}
        </div>

        {count > 1 && (
          <div className="position-absolute left-0 right-0 bottom-2 display-flex flex-justify-center z-top">
            <div
              className="display-flex flex-align-center radius-pill padding-1"
              style={{
                backgroundColor: "rgba(13, 13, 13, 0.7)",
                backdropFilter: "blur(4px)",
                padding: "0.25rem 0.75rem",
                gap: "0.75rem",
              }}
            >
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous layer"
                className="usa-button usa-button--unstyled display-flex flex-align-center padding-0"
                style={{ color: "white" }}
              >
                <Icon.ArrowBack size={3} />
              </button>
              <span
                className="font-body-sm"
                style={{ color: "white", fontVariantNumeric: "tabular-nums" }}
                aria-live="polite"
              >
                {activeIndex + 1}/{count}
              </span>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next layer"
                className="usa-button usa-button--unstyled display-flex flex-align-center padding-0"
                style={{ color: "white" }}
              >
                <Icon.ArrowForward size={3} />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="display-flex flex-row padding-top-2">
        <div className="flex-1">
          {activeItem.heading && (
            <p className="font-body-lg text-primary margin-top-1 ">{activeItem.heading}</p>
          )}
          {activeItem.caption && (
            <p className="font-body-sm  text-base-dark line-height-body-4">{activeItem.caption}</p>
          )}
        </div>
        <div className="flex-1 display-flex flex-align-start flex-justify-end">
          <Link
            as={NextLink}
            href={activeItem.href as ComponentProps<typeof NextLink>["href"]}
            variant="button"
            size="md"
          >
            {activeItem.linkLabel ?? "Open Visualization Tool"}
          </Link>
        </div>
      </div>
    </Section>
  );
};
