# 💍 Saray & Michael — Taller y Diseñador de Tarjetas Nupciales Circulares (5cm x 5cm)

Aplicación interactiva y generador vectorial de tarjetas de recuerdo nupciales circulares de **5cm x 5cm (50mm x 50mm)** para la boda de **Saray & Michael**, inspiradas en la estética botánica en acuarela de la novia.

---

## ✨ Características y Requisitos Cumplidos

- **Formato Circular 5.0 cm x 5.0 cm**: Proporción matemática real de 50mm Ø para troquelado redondo o corte con plotter/tijeras troqueladoras.
- **Sin Pareja**: Adaptación sofisticada que prescinde de la caricatura para dar protagonismo a la flora botánica y tipografía nupcial.
- **Flora en Acuarela**: Rosas blush, peonías, flores marfil, ramas de eucalipto en tonos salvia y espigas doradas con bayas.
- **Textos en Español Totalmente Editables**:
  - Nombres: `Saray & Michael` (con personalización independiente de la unión `&` o `y`).
  - Encabezado: `Gracias por`
  - Palabra destacada en cursiva: `acompañarnos`
  - Mensaje emotivo: `Tu presencia hizo este día aún más especial.`
  - Fecha del enlace: `24 · Noviembre · 2026`
- **Tipografías Seleccionables en Cada Elemento**:
  - Caligráficas: *Alex Brush*, *Great Vibes*, *Pinyon Script*, *Allura*, *Parisienne*, *Dancing Script*, *MonteCarlo*.
  - Serifas Clásicas & Editoriales: *Cormorant Garamond*, *Cinzel*, *Playfair Display*, *Prata*, *Marcellus*, *Italiana*.
  - Sans limpias: *Montserrat*, *Jost*.
- **Zona para Perforación / Tagpin**:
  - Guía visual de zona segura de corte (4mm de margen).
  - Perforación de 3.5mm conmutables (para troqueladora o alicate perforador).
  - Simulación de pasador metálico / pin dorado con cinta de seda.
- **Exportación en Múltiples Formatos**:
  - **SVG**: Vectorial puro, escalable al infinito, compatible con imprentas, Illustrator y Cricut/plotters.
  - **PNG (300 DPI)**: Alta resolución (~2360 x 2360 px) listo para impresión fotográfica.
  - **JPEG (300 DPI)**: Con fondo calibrado para laboratorios de impresión.
- **Historial y Catálogo de Variaciones**:
  - Guarda cualquier ajuste como una nueva variación.
  - Catálogo interactivo con miniaturas, opción de recargar, duplicar o exportar.
  - Copias físicas estáticas en la carpeta `designs/`.
- **Copia de Seguridad en GitHub**:
  - Repositorio público sincronizado en `alexisgnzalez/wedding-card-maker`.

---

## 📂 Variaciones Incluidas en `designs/`

1. [`01-crescent-blush.svg`](designs/01-crescent-blush.svg): **Media Luna Rosas & Eucalipto (Inspiración Original)** — Fiel a la curvatura lateral de la foto de referencia con balance óptico central.
2. [`02-full-wreath.svg`](designs/02-full-wreath.svg): **Corona Botánica Completa** — Guirnalda circular 360° que enmarca los nombres.
3. [`03-twin-bouquets.svg`](designs/03-twin-bouquets.svg): **Doble Ramillete & Anillo Dorado** — Líneas geométricas en pan de oro con flores en esquinas opuestas.
4. [`04-arch-garden.svg`](designs/04-arch-garden.svg): **Arco Botánico Superior** — Corona floral superior con hojas de eucalipto en caída.
5. [`05-minimal-crest.svg`](designs/05-minimal-crest.svg): **Elegancia Minimalista & Monograma** — Laurel dorado sobrio y estética editorial contemporánea.

---

## 🚀 Cómo Ejecutar la Aplicación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en vivo
npm run dev

# Generar archivos SVG estáticos en la carpeta designs/
node generate-svgs.js

# Construir versión para producción
npm run build
```

Abre en tu navegador: `http://localhost:5173/`
