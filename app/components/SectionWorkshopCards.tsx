"use client";

import { useEffect, useId, useState } from "react";
import { makeWorkshopCardSections } from "@/app/_utilities/content.helpers";
import type { CardTextOnlySection, WorkshopSection, WorkshopStatus } from "@/app/site-config/types";
import { ContentHeading } from "./ContentHeading";
import { Section } from "./Section";
import { SectionCardTextOnly } from "./SectionCardTextOnly";
import styles from "./SectionWorkshopCards.module.css";
import { type TabOption, Tabs } from "./Tabs";

const INITIAL_VISIBLE_CARD_COUNT = 3;
type WorkshopCardSections = Record<WorkshopStatus, CardTextOnlySection>;

export function SectionWorkshopCards({ section }: { section: WorkshopSection }) {
  const [sections, setSections] = useState<WorkshopCardSections | null>(null);
  const [activeTab, setActiveTab] = useState<WorkshopStatus>("upcoming");
  const [showAll, setShowAll] = useState(false);
  const tabsId = useId();
  const panelId = `${tabsId}-panel`;

  useEffect(() => {
    const workshopSections = makeWorkshopCardSections(section);

    setSections(workshopSections);
    setActiveTab(
      workshopSections.upcoming.items.length === 0 && workshopSections.past.items.length > 0
        ? "past"
        : "upcoming",
    );
    setShowAll(false);
  }, [section]);

  if (!sections) {
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

  const handleTabChange = (tab: WorkshopStatus) => {
    setActiveTab(tab);
    setShowAll(false);
  };
  const activeSection = sections[activeTab];
  const visibleSection = {
    ...activeSection,
    items: showAll ? activeSection.items : activeSection.items.slice(0, INITIAL_VISIBLE_CARD_COUNT),
  };

  const tabOptions: TabOption<WorkshopStatus>[] = [
    { value: "upcoming", label: "Upcoming", count: sections.upcoming.items.length },
    { value: "past", label: "Past", count: sections.past.items.length },
  ];

  return (
    <SectionCardTextOnly
      section={visibleSection}
      beforeCards={
        <Tabs
          id={tabsId}
          panelId={panelId}
          ariaLabel="Filter workshops by date"
          options={tabOptions}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      }
      cardsContainerProps={{
        id: panelId,
        role: "tabpanel",
        "aria-labelledby": `${tabsId}-${activeTab}-tab`,
      }}
    >
      {activeSection.items.length > INITIAL_VISIBLE_CARD_COUNT && (
        <div className={styles.showAll}>
          <button
            type="button"
            className="usa-button usa-button--outline"
            aria-expanded={showAll}
            onClick={() => setShowAll((isShowingAll) => !isShowingAll)}
          >
            {showAll ? "Show less" : `Show all ${activeSection.items.length} ${activeTab}`}
          </button>
        </div>
      )}
      {activeSection.items.length === 0 && (
        <p className="text-center">
          No {activeTab} {activeSection.heading?.toLocaleLowerCase()} items to show
        </p>
      )}
    </SectionCardTextOnly>
  );
}
