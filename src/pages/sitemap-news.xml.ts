import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>https://joanmarqueno.vercel.app/</loc>
    <news:news>
      <news:publication>
        <news:name>Joan Marqueño Portfolio</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${new Date().toISOString()}</news:publication_date>
      <news:title>Joan Marqueño - Desarrollador Full Stack</news:title>
      <news:keywords>desarrollador, full stack, python, typescript, azure ai, microservicios</news:keywords>
    </news:news>
  </url>
</urlset>`;

  return new Response(newsSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};