import { useEffect, useState } from "react";

function useContadorGuardado(clave) {
  const [contador, setContador] = useState(() => {
    const guardado = localStorage.getItem(clave);

    if (guardado === null) {
      return 0;
    }

    return Number(guardado);
  });

  useEffect(() => {
    localStorage.setItem(clave, String(contador));
  }, [contador, clave]);

  const sumar = () => {
    setContador(contador + 1);
  };

  return {
    contador,
    sumar,
  };
}

export default useContadorGuardado;