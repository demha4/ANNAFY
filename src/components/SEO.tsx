import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const currentUrl = canonical || `${origin}${window.location.pathname}`;
    const imageUrl = ogImage || `${origin}/og-image.svg`;

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    const ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    const ogImageTag = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    const twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    const twitterImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;

    if (metaDescription) metaDescription.setAttribute('content', description);
    if (canonicalLink) canonicalLink.href = currentUrl;
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImageTag) ogImageTag.setAttribute('content', imageUrl);
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterImage) twitterImage.setAttribute('content', imageUrl);

    window.scrollTo(0, 0);
  }, [title, description, canonical, ogImage]);

  return null;
}
