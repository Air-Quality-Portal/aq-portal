"use client";

import { useEffect, useState } from "react";

import type {
  CardAdapterKey,
  CardTextOnlySection,
  SectionClientCardTextOnlyProps,
} from "@/app/site-config/types";
import { CARD_ADAPTERS } from "../_utilities/adapter_registry";
import { ContentHeading } from "./ContentHeading";
import { Section } from "./Section";
import { SectionCardTextOnly } from "./SectionCardTextOnly";

export function SectionClientCardTextOnly<Adapter extends CardAdapterKey>({
  adapter,
  source,
}: SectionClientCardTextOnlyProps<Adapter>) {
  const [adaptedSection, setAdaptedSection] = useState<CardTextOnlySection | null>(null);

  useEffect(() => {
    const registryEntry = CARD_ADAPTERS[adapter];
    setAdaptedSection(registryEntry.adapt(source, { now: new Date() }));
  }, [source, adapter]);

  if (adaptedSection) return <SectionCardTextOnly section={adaptedSection} />;

  return (
    <Section isMultiColumnLayout>
      {source.heading && (
        <ContentHeading heading={source.heading} headingLevel={source.headingLevel ?? "h3"} />
      )}
      {source.lead && <p className="text-base">{source.lead}</p>}
      <p role="status" className="text-base margin-bottom-0">
        {CARD_ADAPTERS[adapter].loadingMessage}
      </p>
    </Section>
  );
}
