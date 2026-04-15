# Components architecture

Este directorio centraliza la UI en módulos `html + ts`.

## Convenciones

- Cada componente vive en su carpeta con:
  - `*.html` (estructura de markup)
  - `*.ts` (render y lógica del componente)
  - `index.ts` (API pública del componente cuando aplica)
- `shared/` contiene utilidades transversales de renderizado (`escapeHtml`, `renderTemplate`).
- `section-blocks/` agrupa subcomponentes de bloques reutilizables por tipo.
- `src/components/index.ts` expone la API pública consumida por `src/main.ts`.

## Escalabilidad

- Para nuevos bloques de contenido, crear carpeta en `section-blocks/` con su `html + ts` y registrar en `renderSectionBlocks.ts`.
- Evitar manipulación de DOM fuera de componentes de interacción (`content/updateContentPanel.ts`, `topbar/initSectionNavigation.ts`).
- Mantener imports externos vía barrels (`index.ts`) para evitar acoplamiento a rutas internas.
