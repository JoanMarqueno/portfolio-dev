import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://joanmarqueno.vercel.app/</loc>
    <video:video>
      <video:thumbnail_loc>https://joanmarqueno.vercel.app/foto.jpeg</video:thumbnail_loc>
      <video:title>Joan Marqueño - Desarrollador Full Stack</video:title>
      <video:description>Desarrollador Full Stack especializado en Python, TypeScript y Azure AI</video:description>
      <video:content_loc>https://joanmarqueno.vercel.app/</video:content_loc>
      <video:player_loc allow_embed="yes" autoplay="ap=1">https://joanmarqueno.vercel.app/</video:player_loc>
      <video:duration>60</video:duration>
      <video:publication_date>${new Date().toISOString()}</video:publication_date>
      <video:category>Technology</video:category>
      <video:family_friendly>yes</video:family_friendly>
      <video:restriction relationship="allow">ES</video:restriction>
      <video:price currency="EUR">0</video:price>
      <video:requires_subscription>no</video:requires_subscription>
      <video:uploader info="https://joanmarqueno.vercel.app/">Joan Marqueño</video:uploader>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`;

  return new Response(videoSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
