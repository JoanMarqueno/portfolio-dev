import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://joanmarqueno.vercel.app/</loc>
    <image:image>
      <image:loc>https://joanmarqueno.vercel.app/foto.jpeg</image:loc>
      <image:title>Joan Marqueño - Desarrollador Full Stack</image:title>
      <image:caption>Joan Marqueño, Desarrollador Full Stack especializado en Python, TypeScript y Azure AI</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new Response(imageSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
