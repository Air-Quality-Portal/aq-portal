"use client";

import Image from "next/image";
import { useState } from "react";

type ImageComparisonProps = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
  sizes?: string;
};

export const ImageComparison = ({
  before,
  after,
  className = "height-card-lg",
  sizes = "100vw",
}: ImageComparisonProps) => {
  const [position, setPosition] = useState(50);

  return (
    <div className={`position-relative overflow-hidden ${className}`}>
      {/* after image — base layer */}
      <Image src={after.src} alt={after.alt} fill sizes={sizes} style={{ objectFit: "cover" }} />

      {/* before image — clipped to left of divider */}
      <div
        className="position-absolute top-0 left-0 right-0 bottom-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes={sizes}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* divider line */}
      <div
        aria-hidden="true"
        className="position-absolute top-0 bottom-0 bg-white"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          width: "2px",
          pointerEvents: "none",
        }}
      />

      {/* handle */}
      <div
        aria-hidden="true"
        className="position-absolute circle-5 bg-white display-flex flex-align-center flex-justify-center shadow-2"
        style={{
          left: `${position}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <title>Drag to compare</title>
          <path
            d="M8 1L1 7L8 13"
            stroke="#1b1b1b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1L19 7L12 13"
            stroke="#1b1b1b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* invisible range input — handles drag, touch, and keyboard */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Compare before and after images"
        className="position-absolute"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          cursor: "col-resize",
          margin: 0,
        }}
      />
    </div>
  );
};
