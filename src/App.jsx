import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center p-8">
      <header className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4">🛜 Wi-Fi 7 🛜<br />Una Realidad </h1>
        <p className="text-xl">Ya no hay Margen para Errores.</p>
        <p className="text-lg mt-4 text-gray-600">Bienvenido a una Red Diseñada por Ingenieros. <br /><br />Estable, Rápida y Sin Pretextos.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold">✅ Estabilidad Garantizada ✅</h2>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">🚀 Super Velocidad 🚀</h2>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">👨‍💻 Soporte Profesional 👨‍💻</h2>
        </div>
      </section>
      <div className="text-center text-2xl font-medium mb-16">
        “Diseño de Red Profesional para Areas Industriales.”
      </div>
      <footer className="mt-20 text-sm text-gray-500"> <br />
        Conectividad Sin Interrupciones.
      </footer>
    </div>
  )
}

export default App
