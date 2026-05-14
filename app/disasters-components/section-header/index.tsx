export const SectionHeader = ({ headline }: { headline: string }) => {
  return (
    <h2
      className="font-sans-2xl padding-bottom-2 margin-0 text-primary-dark"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {headline}
    </h2>
  );
};
