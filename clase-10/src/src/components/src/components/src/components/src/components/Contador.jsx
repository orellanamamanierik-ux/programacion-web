import { useState } from "react"

function Contador() {
  const [contador, setContador] = useState(0)

  function sumar() {
    setContador(contador + 1)
  }

  function restar() {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  function reiniciar() {
    setContador(0)
  }

  return (
    <div>
      <p>Conteo: {contador}</p>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default Contador