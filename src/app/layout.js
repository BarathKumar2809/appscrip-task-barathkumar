import './globals.css';

export const metadata = {
  title: "Appscrip Store",
  description: "A simple product list made with Next.js and plain CSS by Barath Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Appscrip Store",
              url: "https://your-live-site-url.com", // Replace with your real deployment URL
              description: "A frontend store UI built with Next.js and plain CSS by Barath Kumar",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
