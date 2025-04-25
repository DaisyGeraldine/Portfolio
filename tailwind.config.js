/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#503878',       // Color base de tu marca (más serio y profesional)
        secondary: '#B8A8E8',     // Lavanda suave (ligero y amigable)
        accent: '#FFD700',        // Amarillo dorado para detalles destacados
        background: '#FEFAFC',    // Fondo claro (neutro y elegante)
        dark: '#180850',          // Morado profundo (para contraste o textos fuertes)
        soft: '#BEACED',          // Tono suave para componentes o hover

        // Si quieres uno más para equilibrio:
        muted: '#9F93B4',         // Intermedio entre lavanda y gris
      },
    },
  },
  plugins: [],
}

