import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: https://movieandtvshow.vercel.app/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
