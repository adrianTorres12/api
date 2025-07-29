exports.handler = async (event, context) => {
  const frases = [
    '"Cree en ti mismo y todo será posible ✨"',
    '"Cada día es una nueva oportunidad para empezar 💡"',
    '"Lo que hoy parece difícil, mañana será tu orgullo 🚀"',
    '"Hazlo con pasión o no lo hagas 🔥"',
    '"Sigue adelante sin importar qué 💥"',
    '"Tu esfuerzo será recompensado 🌟"',
    '"Nunca te rindas, los grandes logros toman tiempo 💪"',
    '"Cree, lucha, insiste y nunca te rindas ⚔️"',
    '"Lo imposible solo tarda un poco más ⏳"'
  ];
  const frase = frases[Math.floor(Math.random() * frases.length)];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // para permitir acceso desde cualquier sitio
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ frase })
  };
};
