import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type PageClosingCtaProps = {
  heading: string;
  description: string;
  label: string;
  href: string;
  download?: boolean;
};

const PageClosingCta = ({ heading, description, label, href, download = false }: PageClosingCtaProps) => (
  <section className="page-closing-cta" aria-label="Next step">
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
    {download ? (
      <a href={href} download>
        {label} <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    ) : (
      <Link to={href}>
        {label} <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    )}
  </section>
);

export default PageClosingCta;
