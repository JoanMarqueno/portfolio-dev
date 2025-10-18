# 📝 Notas para completar el Portfolio

## 🖼️ Imágenes pendientes

Necesitas añadir las siguientes imágenes en la carpeta `public/projects/`:

1. **mysticme.webp**: Captura de pantalla de la aplicación MysticMe
   - Puedes hacer una captura del sitio web https://mysticme.vercel.app/
   - O una captura de la app en Google Play
   - Recomendado: 1200x800px en formato WebP

2. **kadomasajes.webp**: Captura de pantalla del sitio Kado Masajes
   - Hacer captura de https://kadomasajes.com
   - Recomendado: 1200x800px en formato WebP

### Cómo crear las imágenes WebP:

```bash
# Usando ImageMagick o cualquier conversor online
# Ejemplo con screenshot-desktop:
npx screenshot-desktop https://mysticme.vercel.app/ public/projects/mysticme.webp
npx screenshot-desktop https://kadomasajes.com public/projects/kadomasajes.webp
```

O usar herramientas online:
- https://www.screenshotmachine.com/
- https://convertio.co/ (para convertir a WebP)

## 📸 Foto de perfil

Actualmente estoy usando tu foto de GitHub:
```
https://avatars.githubusercontent.com/u/117987662?v=4
```

Si quieres usar una foto diferente:
1. Guarda tu foto en `public/me.png` o `public/me.webp`
2. Actualiza las referencias en:
   - `src/components/Hero.astro` (línea 14)
   - `src/components/AboutMe.astro` (línea 30)

## 🎨 Personalización adicional

### Colores
Si quieres cambiar los colores del tema, edita:
- `tailwind.config.mjs` para colores personalizados
- Los colores actuales usan el esquema amarillo (#FBBF24) para destacados

### Secciones adicionales
Puedes añadir más secciones editando `src/pages/index.astro`:
- Educación
- Certificaciones
- Blog
- Testimonios

### Iconos de redes sociales
Los iconos actuales son:
- LinkedIn
- GitHub
- Email

Puedes añadir más en `src/components/Hero.astro` copiando el patrón de `SocialPill`

## 🚀 Despliegue

### Opciones recomendadas:

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **GitHub Pages**
   - Añadir workflow en `.github/workflows/deploy.yml`

## ✅ Checklist antes de desplegar

- [ ] Añadir imágenes de proyectos (mysticme.webp, kadomasajes.webp)
- [ ] Revisar todos los enlaces (LinkedIn, GitHub, Email)
- [ ] Probar en modo oscuro y claro
- [ ] Verificar responsive en móvil, tablet y desktop
- [ ] Actualizar el `site` en `astro.config.mjs` con tu dominio real
- [ ] Revisar SEO (title, description) en cada página
- [ ] Añadir Google Analytics (opcional)

## 🐛 Solución de problemas comunes

### Las imágenes no se ven
- Verifica que las rutas en `src/components/Projects.astro` coincidan con las imágenes en `public/projects/`
- Recuerda que las rutas empiezan con `/projects/` (sin `public`)

### Los estilos no se aplican
- Ejecuta `npm run build` para ver errores de Tailwind
- Verifica que todas las clases CSS sean válidas

### Errores de TypeScript
- Ejecuta `npm run build` para ver todos los errores
- Asegúrate de que `tsconfig.json` tenga los paths correctos

## 📧 Contacto

Si necesitas ayuda, puedes contactar a:
- joan.marquenyo@gmail.com

---

¡Buena suerte con tu portfolio! 🚀

