import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Movies 2025 - Watch Movies & TV Shows",
  description: "Browse and discover movies and TV shows",
}
const uwatchfreeSchema = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Movies 2025™ - Online. Stream. Download. ",
    url: "https://movies2025.vercel.app/",
    image: ["https://movies2025.vercel.app/favicon.ico"],
    logo: {
      "@type": "ImageObject",
      url: "https://movies2025.vercel.app/logo.png",
      width: 280,
      height: 80,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://movies2025.vercel.app/",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://movies2025.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
]);

const rankMathSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://gravatar.com/drtrailer2022",
      name: "Dr Trailer",
      url: "https://gravatar.com/drtrailer2022",
      image: {
        "@type": "ImageObject",
        "@id": "https://gravatar.com/drtrailer2022",
        url: "https://gravatar.com/drtrailer2022",
        caption: "Dr Trailer",
        inLanguage: "en-US",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://movies2025.vercel.app/#organization",
      name: "Movies 2025™ - Online. Stream. Download. ",
      url: "https://movies2025.vercel.app",
    },
    {
      "@type": "WebSite",
      "@id": "https://movies2025.vercel.app/#website",
      url: "https://movies2025.vercel.app",
      name: "Movies 2025™ - Online. Stream. Download. ",
      publisher: {
        "@type": "Organization",
        "@id": "https://movies2025.vercel.app/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://movies2025.vercel.app/#webpage",
      url: "https://movies2025.vercel.app/",
      name: "Movie",
      datePublished: "2024-01-13T13:00:00+00:00",
      dateModified: "2024-01-13T13:13:00+00:00",
      about: {
        "@type": "Person",
        "@id": "https://gravatar.com/drtrailer2022",
        name: "Dr Trailer",
        url: "https://gravatar.com/drtrailer2022",
        image: {
          "@type": "ImageObject",
          "@id": "https://gravatar.com/drtrailer2022",
          url: "https://gravatar.com/drtrailer2022",
          caption: "Dr Trailer",
          inLanguage: "en-US",
        },
      },
      isPartOf: {
        "@id": "https://movies2025.vercel.app/#website",
      },
      inLanguage: "en-US",
      mainEntity: [
        {
          "@type": "Article",
          "@id": "https://movies2025.vercel.app/",
          url: "https://movies2025.vercel.app/",
          headline: "Movies 2025™ - Online. Stream. Download. ",
          datePublished: "2024-01-13T13:00:00+00:00",
          dateModified: "2024-01-13T13:13:00+00:00",
          author: {
            "@type": "Person",
            "@id": "https://gravatar.com/drtrailer2022",
            name: "Dr Trailer",
            url: "https://gravatar.com/drtrailer2022",
            image: {
              "@type": "ImageObject",
              "@id": "https://gravatar.com/drtrailer2022",
              url: "https://gravatar.com/drtrailer2022",
              caption: "Dr Trailer",
              inLanguage: "en-US",
            },
          },
          publisher: {
            "@type": "Organization",
            "@id": "https://movies2025.vercel.app/#organization",
            name: "Movies 2025™ - Online. Stream. Download. ",
            url: "https://movies2025.vercel.app",
          },
        },
        {
          "@type": "Article",
          "@id": "https://movies2025.vercel.app/",
          url: "https://movies2025.vercel.app/",
          headline: "Movies 2025™ - Online. Stream. Download. ",
          datePublished: "2024-01-13T13:00:00+00:00",
          dateModified: "2024-01-13T13:13:00+00:00",
          author: {
            "@type": "Person",
            "@id": "https://gravatar.com/drtrailer2022",
            name: "Dr Trailer",
            url: "https://gravatar.com/drtrailer2022",
            image: {
              "@type": "ImageObject",
              "@id": "https://gravatar.com/drtrailer2022",
              url: "https://gravatar.com/drtrailer2022",
              caption: "Dr Trailer",
              inLanguage: "en-US",
            },
          },
          publisher: {
            "@type": "Organization",
            "@id": "https://movies2025.vercel.app/#organization",
            name: "Movies 2025™ - Online. Stream. Download. ",
            url: "https://movies2025.vercel.app",
          },
        },
        {
          "@type": "Article",
          "@id": "https://movies2025.vercel.app/",
          url: "https://movies2025.vercel.app/",
          headline: "Movies 2025™ - Online. Stream. Download. ",
          datePublished: "2024-01-13T13:00:00+00:00",
          dateModified: "2024-01-13T13:13:00+00:00",
          author: {
            "@type": "Person",
            "@id": "https://gravatar.com/drtrailer2022",
            name: "Dr Trailer",
            url: "https://gravatar.com/drtrailer2022",
            image: {
              "@type": "ImageObject",
              "@id": "https://gravatar.com/drtrailer2022",
              url: "https://gravatar.com/drtrailer2022",
              caption: "Dr Trailer",
              inLanguage: "en-US",
            },
          },
        },
      ],
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="flex h-screen">
          <Head>

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="googlebot" content="index,follow" />
            <meta name="revisit-after" content="1 days" />
            <meta name="referrer" content="origin" />
            <meta
              name="robots"
              content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />
            <link
              rel="sitemap"
              type="application/xml"
              title="Sitemap"
              href="https://movies2025.vercel.app/sitemap.xml"
            />
            <meta name="keywords" content="movies, tvshow, free movies, free tvshow, watch movie online, watch tvshows online, free movie streaming, free tvshow streaming, download free" />
            <link rel="canonical" href="https://movies2025.vercel.app" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content=" Movies 2025™ - Online. Stream. Download. "
            />
            <meta property="og:url" content="https://movies2025.vercel.app" />
            <meta
              property="og:site_name"
              content=" Movies 2025™ - Online. Stream. Download. "
            />
            <meta
              property="og:image"
              content="https://movies2025.vercel.app/og_image.jpg"
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/jpg" />
            <meta
              name="application-name"
              content=" Movies 2025™ - Online. Stream. Download. "
            />
            <meta
              property="article:modified_time"
              content="2024-01-01T13:13:13+00:00"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content=" Movies 2025™ - Online. Stream. Download."
            />
            <meta
              name="twitter:description"
              content="Stream HD movies and TV series for free on Movies 2025™. Explore, stream, and download."
            />
            <meta
              name="twitter:image"
              content="https://movies2025.vercel.app/og_image.jpg"
            />
            <meta
              name="google-site-verification"
              content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
            />

            <meta
              name="facebook-domain-verification"
              content="du918bycikmo1jw78wcl9ih6ziphd7"
            />
            <meta
              name="dailymotion-domain-verification"
              content="dm3bs67ukdegz9qik"
            />
          
          </Head>
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: rankMathSchema }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
            />
          <Sidebar />
          <GoogleAnalytics measurementId="G-YJK4QW21B1" />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>

  )
}

