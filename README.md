# api
# 📋 API de Frases Motivacionales – ToolJet

Una aplicación sencilla creada con [ToolJet](https://tooljet.com) que genera frases motivacionales aleatorias y permite copiarlas al portapapeles con un solo clic. Ideal para integrarse en dashboards, pantallas públicas, apps internas o simplemente para levantar el ánimo del día.

---

## 🚀 Funcionalidades

- 🎲 Muestra una frase motivacional aleatoria al hacer clic en un botón.
- 📋 Permite copiar la frase al portapapeles fácilmente.
- 🌐 Puede hacerse pública para que cualquiera la visite.
- 📱 Compatible con móviles y escritorios.

---

## 🛠️ Cómo funciona

### 1. JavaScript Query: `getFraseAleatoria`

Este query genera frases aleatorias desde un array estático:

```javascript
const frases = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día. 💪",
  "Cree en ti y todo será posible. ✨",
  "Tu actitud determina tu altitud. 🚀",
  "No cuentes los días, haz que los días cuenten. 📆",
  "La disciplina es el puente entre metas y logros. 🌉",
  "Persiste, incluso cuando sea difícil. 🔥",
  "Nunca es tarde para ser quien podrías haber sido. 🕰️",
  "La acción es la clave fundamental del éxito. 🗝️",
  "Cambia tus pensamientos y cambiarás tu mundo. 🌍",
  "Hazlo con pasión o no lo hagas. ❤️",
  "Los sueños no funcionan a menos que tú trabajes por ellos. 💼",
  "Cada día es una nueva oportunidad para mejorar. 🌅",
  "El único límite eres tú mismo. 🧠",
  "Confía en el proceso. ⏳",
  "Haz que suceda. 💥",
  "Eres más fuerte de lo que piensas. 🦁",
  "Aprende de ayer, vive para hoy, sueña para mañana. 🌠",
  "Todo gran logro comienza con la decisión de intentarlo. 🎯",
  "Nunca te rindas. Lo mejor está por venir. 🌈",
  "Hazlo ahora. A veces 'después' se convierte en 'nunca'. ⏰"
];

const aleatoria = frases[Math.floor(Math.random() * frases.length)];
return { frase: aleatoria };
