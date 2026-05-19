import Link from "next/link";

interface PageStatusProps {
  label?: string;
  heading: string;
  description?: string;
}

/** Centered page message with optional label, heading, description, and home link. */
export function PageStatus({ label, heading, description }: PageStatusProps) {
  return (
    <div className="flex-1 display-flex flex-column flex-align-center flex-justify-center text-center padding-y-6 padding-x-4">
      {label && <p className="font-heading-3xl text-bold margin-bottom-1">{label}</p>}
      <h1 className={`font-heading-2xl ${description ? "margin-bottom-2" : "margin-bottom-6"}`}>
        {heading}
      </h1>
      {description && <p className="font-body-md text-base margin-bottom-6">{description}</p>}
      <Link href="/" className="usa-button">
        Return to home page
      </Link>
    </div>
  );
}
