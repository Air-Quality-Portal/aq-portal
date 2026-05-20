import { Card } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export type PageMastheadProps = {
  image: {
    alt: string;
    src: string;
  };
  title: string;
  description: string;
};

export const PageMasthead = ({ image, title, description }: PageMastheadProps) => {
  const cardProps = {
    image: <Image {...image} sizes="100vw" fill priority />,
    title: <h1 className="font-mono-3xl text-bold text-white text-uppercase margin-0">{title}</h1>,
    description,
    colorMode: "brand" as const,
    isMastHead: true,
  };

  return (
    <div className="display-flex minh-masthead">
      <Card {...cardProps} />
    </div>
  );
};
