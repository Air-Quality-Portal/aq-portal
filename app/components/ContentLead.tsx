export function ContentLead({ lead }: { lead?: string }) {
  if (!lead) return null;

  return <p className="text-base margin-top-0 margin-bottom-3">{lead}</p>;
}
