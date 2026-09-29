import useContadorGuardado from "../hooks/useContadorGuardado";

function ContadorDeVisitas() {
  const { contador, sumar } = useContadorGuardado("visitas");

  return (
    <div>
      <h2>Contador de visitas</h2>
      <p>Visitas: {contador}</p>

      <button onClick={sumar}>
        Sumar visita
      </button>
    </div>
  );
}

export default ContadorDeVisitas;