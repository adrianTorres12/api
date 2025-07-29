# ✨ InspireAPI

Esta es una API sencilla que devuelve frases motivacionales al azar. Fue desarrollada con **Netlify Functions (serverless)** y puede ser consumida por cualquier sitio web, app o herramienta como ToolJet.

---

## 🚀 Enlace en Producción

Puedes acceder a la API desde:

```
https://tranquil-squirrel-1e32c5.netlify.app/.netlify/functions/frase
```

Cada vez que haces una petición, devuelve una frase aleatoria como esta:

```json
{
  "frase": "Hazlo con pasión o no lo hagas 🔥"
}
```

---

## 📁 Estructura del Proyecto

```
motivacion-api/
├── netlify.toml          # Configuración de Netlify
├── functions/
│   └── frase.js          # Función serverless que responde con frases
└── index.html            # (Opcional) Interfaz para probar la API
```

---

## 📦 Ejecutar localmente (opcional)

1. Clona el repositorio:

```bash
[git clone https://github.com/tu-usuario/motivacion-api.git](https://github.com/adrianTorres12/api.git)
cd motivacion-api
```

2. Instala Netlify CLI:

```bash
npm install -g netlify-cli
```

3. Ejecuta:

```bash
netlify dev
```

La API estará disponible en:  
`http://localhost:8888/.netlify/functions/frase`

---

## 🧪 Cómo usar la API desde JavaScript

```js
fetch("https://tranquil-squirrel-1e32c5.netlify.app/.netlify/functions/frase")
  .then(res => res.json())
  .then(data => {
    console.log(data.frase);
  });
```

---

## ✨ Frases incluidas

La API devuelve frases como estas:

- "Cree en ti mismo y todo será posible ✨"
- "Cada día es una nueva oportunidad para empezar 💡"
- "Hazlo con pasión o no lo hagas 🔥"
- "Tu esfuerzo será recompensado 🌟"
- "Nunca te rindas, los grandes logros toman tiempo 💪"
- "Lo imposible solo tarda un poco más ⏳"
- "Sigue adelante, incluso cuando sea difícil 💥"
- "Tu actitud determina tu dirección 🧭"
- "Convierte los obstáculos en escalones hacia el éxito 🧗‍♂️"

Puedes modificar o añadir más frases directamente en el archivo `frase.js`.

---


## 📄 Licencia

MIT © 2025 — Desarrollado con ❤️ por Adrián Torres y Josué Solís
