# Instagram de Chuzado: cómo se lleva

## Objetivo ahora mismo
La app ya está publicada en Google Play. Objetivo: **descargas en Play** y, después, ventas de Premium (14,99 € pago único).
Llamada a la acción por defecto: «Gratis en Google Play, enlace en la bio».

## Bio (máx. 150 caracteres)
```
Cuaderno de gym para Android 🏋️
Sin cuentas, sin suscripción, sin anuncios.
Gratis en Google Play 👇
```
Nombre visible: `Chuzado · app de gym`. Categoría: Aplicación. Foto de perfil: `Recursos/01_Logo/logo_lima_fondo_negro_1024.png`.
Enlace de la bio: https://play.google.com/store/apps/details?id=com.chuzado.chuzado

## Voz
- Tuteo, español de España, jerga de gimnasio real (press banca, multipower, jalón, series, al fallo).
- Habla una persona que hace la app y entrena, no una marca. Primera persona: «escríbeme», «la hago yo».
- Frases cortas. Datos concretos (números, kilos, series) mejor que adjetivos.
- Prohibido: rayas largas (—), «revoluciona», «lleva tu entrenamiento al siguiente nivel», «descubre», «potencia», emojis en cada línea, más de 5 hashtags.
- Nunca prometer resultados físicos ni dar consejo médico. Las cifras de ciencia van con «orientativo».

## Pilares (rotan)
| Pilar | Qué es | Peso |
|---|---|---|
| Ciencia de gym útil | Series por músculo, RPE/RIR, progresión, descargas. Contenido para guardar. | 40 % |
| La app enseñando algo | Una función concreta con captura real resolviendo un problema. | 30 % |
| Manifiesto / indie | Sin cuentas, sin suscripción, tus datos son tuyos, la hago yo solo. | 15 % |
| Comunidad | Preguntas a los seguidores, novedades hechas por lo que pide la gente. | 15 % |

## Calendario
- 3 publicaciones por semana: **lunes, miércoles y viernes a las 19:30** (hora de ir o volver del gym).
- Formato 1080×1350 (carrusel). Reels 1080×1920.
- Cada carrusel: portada con gancho → 4–6 diapositivas → cierre con llamada a la acción.

## Hashtags (elegir 3–5 por post)
`#gimnasio #gym #hipertrofia #entrenamiento #fuerza #musculacion #gymespaña #powerlifting #culturismo #appdegym`

## Cómo se generan las imágenes
`node render.mjs` lee `posts.js` y crea `salida/<post>/01.png, 02.png…` con `plantilla.html` (Chrome o Chromium headless; ruta en la variable CHROME si no es la de Windows). Todo lo que usan las plantillas está en `assets/`, la carpeta no depende de nada de fuera.
Para añadir posts: nuevos objetos en `posts.js` y volver a ejecutar.
