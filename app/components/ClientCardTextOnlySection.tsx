"use client";

import { useEffect, useState } from "react";
import { makeWorkshopCardSection } from "@/app/site-config/content.helpers";
import type { CardTextOnlySection, WorkshopSection } from "@/app/site-config/types";
import { ContentHeading } from "./ContentHeading";
import { Section } from "./Section";
import { SectionCardTextOnly } from "./SectionCardTextOnly";

export function ClientCardTextOnlySection({ section }: { section: WorkshopSection }) {
  const [classifiedSection, setClassifiedSection] = useState<CardTextOnlySection | null>(null);

  useEffect(() => {
    const now = new Date();
    setClassifiedSection(makeWorkshopCardSection(section, { now }));
  }, [section]);

  if (classifiedSection) return <SectionCardTextOnly section={classifiedSection} />;

  return (
    <Section isMultiColumnLayout>
      {section.heading && (
        <ContentHeading heading={section.heading} headingLevel={section.headingLevel ?? "h3"} />
      )}
      {section.lead && <p className="text-base">{section.lead}</p>}
      <p role="status" className="text-base margin-bottom-0">
        Loading workshops…
      </p>
    </Section>
  );
}
