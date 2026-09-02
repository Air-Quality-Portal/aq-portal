type SiteTitleProps = {
  /**
   * Color of the "4US" half. Varies by surface: dark on the light header,
   * near-white on the dark footer.
   */
  usColor: string;
};

export function SiteTitle({ usColor }: SiteTitleProps) {
  return (
    <span className="site-title">
      AIR
      <span style={{ color: usColor }}>4US</span>
    </span>
  );
}
