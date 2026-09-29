import useContadorGuardado from "../hooks/useContadorGuardado";

function ContadorDeCafes() {
  const { contador, sumar } = useContadorGuardado("cafes");

  return (
    <div>
      <h2>Contador de cafés</h2>
      <p>Cafés: {contador}</p>

      <button onClick={sumar}>
        Sumar café
      </button>
    </div>
  );
}

export default ContadorDeCafes;