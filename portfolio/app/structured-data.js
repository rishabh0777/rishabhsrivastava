export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rishabh Srivastava",
    alternateName: "Rishabh Srivastava Portfolio",
    url: "https://rishabhsrivastava.vercel.app/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}