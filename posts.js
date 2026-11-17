// Publicaciones de Instagram de Chuzado. <em> = palabra en lima.
// Tipos de diapositiva: cover, text, rows, shot, cta.
// ponytail: también se carga con require() desde render.mjs (CommonJS + global).
var SHOTS = 'assets/pantallas/';

var POSTS = [
{
  id: '01-reel-presentacion', fecha: '2026-11-18 19:30', tipo: 'reel',
  video: 'assets/Chuzado_promo.mp4',
  caption:
`Esto es Chuzado. Una app para apuntar tus entrenos en el gym, que hago yo solo.

Sin cuentas. Sin suscripción. Sin anuncios. Abres y entrenas.

Ya está en Google Play, gratis. Enlace en la bio.

#gimnasio #gym #entrenamiento #appdegym`,
},
{
  id: '02-calcula-tu-1rm', fecha: '2026-11-20 19:30', tipo: 'carrusel',
  slides: [
    { t: 'cover', k: 'FUERZA', h: 'Calcula tu <em>1RM</em> sin jugártela', p: 'No hace falta probar tu máximo para saberlo.' },
    { t: 'text', n: '1RM', h: 'Qué es', p: 'El peso máximo que mueves <b>una sola vez</b> con buena técnica.<br><br>Sirve para medir tu fuerza y calcular porcentajes.' },
    { t: 'text', n: '01', h: 'El problema', p: 'Probarlo de verdad cansa mucho, necesita calentar bien y un compañero que te asista.<br><br>Y no hace falta.' },
    { t: 'text', n: '=', h: 'La fórmula de Epley', p: '<b>1RM ≈ peso × (1 + reps / 30)</b><br><br>Funciona mejor con series de 10 reps o menos, cerca del fallo.' },
    { t: 'rows', h: 'Ejemplo: 80 kg', head: ['Reps', '1RM estimado'], rows: [
      ['3', '88 kg'], ['5', '93 kg'], ['8', '101 kg'], ['10', '107 kg'] ],
      note: 'Es una estimación. Cuantas más reps, más se aleja.' },
    { t: 'shot', img: '07_records.png', h: 'Chuzado lo calcula solo', p: 'Cada serie que apuntas actualiza tu 1RM estimado y tus récords.' },
    { t: 'cta', h: '¿Cuál es tu 1RM en <em>banca</em>?', p: 'Calcúlalo y déjalo en comentarios.' },
  ],
  caption:
`No necesitas probar tu máximo para saber tu 1RM.

Fórmula de Epley:
1RM ≈ peso × (1 + reps / 30)

80 kg × 8 reps ≈ 101 kg.

Funciona mejor con series de 10 o menos. Chuzado lo calcula solo con cada serie que apuntas. Está en Google Play, enlace en la bio.

#fuerza #gym #powerlifting #gimnasio #pressbanca`,
},
{
  id: '03-series-por-musculo', fecha: '2026-11-23 19:30', tipo: 'carrusel',
  slides: [
    { t: 'cover', k: 'CIENCIA DE GYM', h: '¿Cuántas <em>series por músculo</em> a la semana?', p: 'Los 3 números que deberías conocer.' },
    { t: 'text', n: 'MEV', h: 'El mínimo efectivo', p: 'Por debajo, mantienes pero apenas creces.<br><br>Pecho: unas <b>10 series</b> a la semana.' },
    { t: 'text', n: 'MAV', h: 'El punto dulce', p: 'Donde más se progresa. Aquí quieres pasar casi todo el bloque.<br><br>Pecho: hasta <b>16 series</b>.' },
    { t: 'text', n: 'MRV', h: 'El techo', p: 'Lo máximo de lo que te recuperas. Si lo pasas semana tras semana, toca descarga.<br><br>Pecho: unas <b>22 series</b>.' },
    { t: 'rows', h: 'Tabla para guardar', head: ['Músculo', 'MEV', 'MAV', 'MRV'], rows: [
      ['Pecho', 10, 16, 22], ['Espalda', 10, 18, 25], ['Hombro', 8, 18, 26], ['Bíceps', 8, 16, 22], ['Tríceps', 8, 14, 20],
      ['Cuádriceps', 8, 16, 20], ['Isquios', 6, 12, 16], ['Glúteo', 4, 12, 16], ['Gemelos', 8, 16, 22], ['Core', 6, 16, 25] ],
      note: 'Series de trabajo por semana. Orientativo (modelo de Israetel / RP).' },
    { t: 'text', n: '!', h: 'Cómo contarlas', p: 'Solo series de trabajo, cerca del fallo (0 a 3 en reserva).<br><br>Si el músculo trabaja de secundario, cuenta <b>media serie</b>. Un press banca = 1 de pecho y 0,5 de tríceps.' },
    { t: 'shot', img: '05_musculos.png', h: 'Chuzado las cuenta solo', p: 'Ves cada músculo en verde, ámbar o rojo según la semana.' },
    { t: 'cta', h: '<em>Guárdalo</em> para tu próxima rutina', p: 'Y dime en comentarios cuántas haces de pecho.' },
  ],
  caption:
`¿Cuántas series por músculo a la semana? Depende, pero hay 3 números que ayudan mucho:

MEV: el mínimo para crecer
MAV: donde más se progresa
MRV: lo máximo que recuperas

En la 5ª diapositiva tienes la tabla entera. Guárdala.

Son rangos orientativos. Si llevas años entrenando o estás en déficit, ajusta.

#hipertrofia #gimnasio #entrenamiento #musculacion #gym`,
},
{
  id: '04-rpe-rir', fecha: '2026-11-25 19:30', tipo: 'carrusel',
  slides: [
    { t: 'cover', k: 'RPE Y RIR', h: '¿Cuánto te quedaba en el <em>depósito</em>?', p: 'Dos siglas que te ahorran estancarte.' },
    { t: 'text', n: 'RIR', h: 'Repeticiones en reserva', p: 'Las reps que podías haber hecho con buena técnica.<br><br>Terminas con 8 y podías llegar a 10: <b>RIR 2</b>.' },
    { t: 'text', n: 'RPE', h: 'Esfuerzo del 1 al 10', p: 'Lo mismo, contado al revés.<br><br><b>RPE ≈ 10 − RIR</b>. RPE 10 es que no salía ni una más.' },
    { t: 'rows', h: 'La escala', head: ['RIR', 'RPE', 'Cómo se siente'], rows: [
      ['0', '10', 'Fallo. No sale otra'], ['1', '9', 'Una más, muy justa'], ['2', '8', 'Dos limpias'], ['3', '7', 'Con margen'], ['4+', '≤6', 'Calentamiento'] ] },
    { t: 'text', n: '→', h: 'Para crecer', p: 'Casi todas las series de trabajo entre <b>RIR 0 y 3</b>.<br><br>Muy lejos del fallo, el estímulo cae. Siempre al fallo, la fatiga te come la semana.' },
    { t: 'shot', img: '02_sesion.png', h: 'Apúntalo en cada serie', p: 'Chuzado guarda el RPE o el RIR junto al peso y las reps.' },
    { t: 'cta', h: '¿Entrenas al <em>fallo</em> o con reserva?', p: 'Cuéntamelo en comentarios.' },
  ],
  caption:
`RPE y RIR explicado en 30 segundos.

RIR = reps que te quedaban.
RPE = esfuerzo del 1 al 10.
RPE ≈ 10 − RIR.

Para ganar músculo, la mayoría de series de trabajo entre 0 y 3 en reserva. Apuntarlo te dice si de verdad apretaste o te quedaste corto.

#hipertrofia #gym #fuerza #entrenamiento`,
},
{
  id: '05-que-peso-hoy', fecha: '2026-11-27 19:30', tipo: 'carrusel',
  slides: [
    { t: 'cover', k: 'SOBRECARGA PROGRESIVA', h: '¿Qué peso te <em>toca hoy</em>?', p: 'Si no lo sabes, no estás progresando. Estás repitiendo.' },
    { t: 'text', n: '01', h: 'El problema', p: 'Llegas al banco y no recuerdas si la semana pasada hiciste 80×8 o 82,5×6.<br><br>Así es muy difícil mejorar.' },
    { t: 'text', n: '02', h: 'Doble progresión', p: 'Elige un rango, por ejemplo <b>6 a 10 reps</b>.<br><br>Con el mismo peso, sube reps hasta llegar a 10 en todas las series.' },
    { t: 'text', n: '03', h: 'Luego, sube el peso', p: 'Cuando lo consigues, añade <b>2,5 kg</b> y vuelves a la parte baja del rango.<br><br>Y vuelta a empezar.' },
    { t: 'rows', h: 'Ejemplo real: press banca', head: ['Semana', 'Peso', 'Reps'], rows: [
      ['1', '80 kg', '7 · 7 · 6'], ['2', '80 kg', '8 · 8 · 7'], ['3', '80 kg', '10 · 9 · 9'], ['4', '80 kg', '10 · 10 · 10'], ['5', '82,5 kg', '7 · 7 · 6'] ] },
    { t: 'shot', img: '02_sesion.png', h: 'La columna ANT', p: 'Ves lo que hiciste la última vez al lado de cada serie y qué intentar hoy.' },
    { t: 'cta', h: 'Apunta. <em>Supera.</em> Repite.', p: 'Guárdalo y pruébalo esta semana.' },
  ],
  caption:
`La forma más simple de progresar sin pensar: doble progresión.

1. Elige un rango (6 a 10 reps).
2. Sube reps con el mismo peso hasta el tope en todas las series.
3. Sube 2,5 kg y vuelve abajo.

La clave es saber qué hiciste la última vez. Por eso lo apuntamos todo.

#sobrecargaprogresiva #gym #fuerza #gimnasio`,
},
{
  id: '06-sin-cuentas', fecha: '2026-11-30 19:30', tipo: 'carrusel',
  slides: [
    { t: 'cover', k: 'CHUZADO', h: 'Sin cuentas. Sin suscripción. <em>Sin anuncios.</em>', p: 'Una app de gym como las de antes.' },
    { t: 'text', n: '01', h: 'Sin cuentas', p: 'Abres la app y entrenas.<br><br>Ni email, ni contraseña, ni verificar nada.' },
    { t: 'text', n: '02', h: 'Tus datos, en tu móvil', p: 'Todo se guarda solo en tu teléfono. Copias en JSON o CSV cuando quieras.<br><br>Y te traes tu historial de <b>Strong o Hevy</b>.' },
    { t: 'text', n: '03', h: 'Gratis de verdad', p: '<b>4 rutinas</b> y todo el registro de entrenos, gratis y sin un solo anuncio.' },
    { t: 'text', n: '04', h: 'Premium: 14,99 € una vez', p: 'Rutinas ilimitadas y todas las estadísticas.<br><br>Pagas una vez y es tuyo. Sin renovaciones.' },
    { t: 'shot', img: '04_estadisticas.png', h: 'Lo que desbloqueas', p: 'Volumen, fuerza, equilibrio muscular y constancia.' },
    { t: 'cta', h: 'Gratis en <em>Google Play</em>', p: 'Enlace en la bio.' },
  ],
  caption:
`Estoy harto de apps de gym que te piden cuenta, te meten anuncios entre series y cobran cada mes.

Chuzado:
· sin cuentas
· tus datos solo en tu móvil
· gratis con 4 rutinas
· Premium 14,99 € una vez y para siempre

Está en Google Play. Enlace en la bio.

#gym #gimnasio #appdegym #entrenamiento`,
},
{
  id: '07-racha', fecha: '2026-12-02 19:30', tipo: 'carrusel',
  slides: [
    { t: 'cover', k: 'CONSTANCIA', h: 'Tu racha no se rompe por <em>un día de descanso</em>', p: 'Descansar también es entrenar.' },
    { t: 'text', n: '01', h: 'Las rachas de siempre castigan', p: 'Faltas un día y vuelves a cero.<br><br>Eso te empuja a entrenar reventado o a dejarlo cuando se rompe.' },
    { t: 'text', n: '02', h: 'En Chuzado, 3 días', p: 'La racha solo se rompe si pasan <b>3 días seguidos</b> sin entrenar.<br><br>Puedes descansar como toca.' },
    { t: 'text', n: '03', h: 'Lo que cuenta', p: 'Cuentan las <b>sesiones</b> que haces, no los días del calendario.<br><br>Cada entreno suma.' },
    { t: 'shot', img: '01_inicio.png', h: 'Tu semana de un vistazo', p: 'Racha, volumen y lo que toca hoy.' },
    { t: 'cta', h: '¿Cuántos días <em>descansas</em> a la semana?', p: 'Te leo en comentarios.' },
  ],
  caption:
`Una racha que se rompe por descansar un día es una mala racha.

En Chuzado solo se pierde si pasan 3 días seguidos sin entrenar. Así puedes recuperar sin perder lo que llevas.

¿Cuántos días descansas tú?

#constancia #gym #gimnasio #entrenamiento`,
},
];

if (typeof module !== 'undefined') module.exports = { POSTS, SHOTS };
