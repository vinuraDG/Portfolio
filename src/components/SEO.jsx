import { Helmet } from "react-helmet-async";

const SITE = "https://www.vinuradeelaka.me";

const SEO = ({ title, description, path = "/", image = "/og-image.png" }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${SITE}${path}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${SITE}${path}`} />
    <meta property="og:image" content={`${SITE}${image}`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${SITE}${image}`} />
  </Helmet>
);

export default SEO;