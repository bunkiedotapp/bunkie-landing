import { createFileRoute } from "@tanstack/react-router";

// Built from the request host so it stays correct before and after a custom domain is set.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const fwd = url.hostname === "localhost" ? request.headers.get("x-forwarded-host") : null;
        const origin = fwd ? `https://${fwd}` : url.origin;
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${origin}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
