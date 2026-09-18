import { formatPollutants } from "@/app/_utilities/pollutants.helpers";

export function ContentLead({ lead }: { lead?: string }) {
  if (!lead) return null;

  return <p className="text-base margin-bottom-2">{formatPollutants(lead)}</p>;
}
