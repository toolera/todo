export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "My Tasks - Todo App",
    "description": "A clean, responsive todo app to help you stay organized and productive. No registration required - all data saved locally on your device.",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Add and manage tasks",
      "Mark tasks as complete",
      "Filter tasks by status",
      "Local data storage",
      "Mobile-responsive design",
      "No registration required"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}