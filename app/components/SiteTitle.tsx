type SiteTitleProps = {
  color1?: string;
  color2?: string;
};

export const SiteTitle = ({
  color1 = "var(--color-primary-theme-color-primary-dark, #1A4480)",
  color2 = "var(--color-accent-cool-theme-color-accent-cool, #00BDE3)",
}: SiteTitleProps) => {
  return (
    <a href="/" className="site-title">
      <span className="site-title__text">
        <span className="site-title__air" style={{ color: color1 }}>
          AIR
        </span>
        <span className="site-title__us" style={{ color: color2 }}>
          4US
        </span>
      </span>
    </a>
  );
};
