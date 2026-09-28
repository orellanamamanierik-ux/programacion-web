function Perfil({ nombre, rol, lenguajes }) {
  return (
    <>
      <h1>{nombre}</h1>
      <p>{rol}</p>

      <ul>
        {lenguajes.map((lenguaje) => (
          <li key={lenguaje}>{lenguaje}</li>
        ))}
      </ul>
    </>
  )
}

export default Perfil