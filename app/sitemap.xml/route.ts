import { NextRequest, NextResponse } from "next/server";
import { allMovies, trendingShows } from "@/lib/data";

export function GET(request: NextRequest) {
  const baseUrl = "https://movieandtvshow.vercel.app";
  const lastMod = new Date().toISOString();

  const staticRoutes = [
    { loc: baseUrl, changefreq: "daily", priority: "1.0" },
    { loc: `${baseUrl}/movies`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/tv-shows`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/reviews`, changefreq: "weekly", priority: "0.8" },
    { loc: `${baseUrl}/hidden-gems`, changefreq: "weekly", priority: "0.8" },
  ];

  const movieRoutes = allMovies.map((movie) => ({
    loc: `${baseUrl}/movie/${movie.id}`,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const showRoutes = trendingShows.map((show) => ({
    loc: `${baseUrl}/tv-show/${show.id}`,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const allRoutes = [...staticRoutes, ...movieRoutes, ...showRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${route.loc}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`.trim();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
