import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SITE_NAME = "iWrite";
const DEFAULT_DESCRIPTION = "A public minimalist blog template.";
const DEFAULT_OG_IMAGE_PATH = "";

const normalizePath = (path = "") => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

const isAbsoluteUrl = value => /^https?:\/\//i.test(value || "");

const getSiteUrl = () => {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
};

const resolveAbsoluteUrl = (candidate, siteUrl) => {
  if (!candidate) return "";
  if (isAbsoluteUrl(candidate)) return candidate;
  if (!siteUrl) return candidate;
  const path = candidate.startsWith("/") ? candidate : `/${candidate}`;
  return `${siteUrl}${path}`;
};

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = "",
  type = "website",
  image,
  imageAlt,
  canonicalPath,
  noIndex = false,
  publishedTime,
  updatedTime,
  structuredData,
  children
}) {
  const { pathname } = useLocation();
  const siteUrl = getSiteUrl();
  const path = normalizePath(canonicalPath || pathname);
  const canonical = siteUrl ? `${siteUrl}${path}` : "";
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const socialImage = resolveAbsoluteUrl(image || DEFAULT_OG_IMAGE_PATH, siteUrl);
  const robotsContent = noIndex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
  const twitterHandle = import.meta.env.VITE_TWITTER_HANDLE || "";
  const structuredDataItems = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {socialImage && <meta property="og:image" content={socialImage} />}
      {socialImage && <meta property="og:image:alt" content={imageAlt || `${SITE_NAME} preview`} />}

      <meta name="twitter:card" content={socialImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {socialImage && <meta name="twitter:image" content={socialImage} />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {updatedTime && <meta property="article:modified_time" content={updatedTime} />}

      {structuredDataItems.map((entry, index) => (
        <script key={`ld-json-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}

      {children}
    </Helmet>
  );
}
