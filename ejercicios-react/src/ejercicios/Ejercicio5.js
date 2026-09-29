/*
1. ¿Qué está pasando?

El componente se renderiza.
El useEffect se ejecuta porque no tiene array de dependencias.
El efecto pide los datos al servidor.
Cuando llegan los datos, se ejecuta setDatos.
setDatos cambia el estado.
Al cambiar el estado, el componente se vuelve a renderizar.
Como el useEffect no tiene array de dependencias, vuelve a ejecutarse.
Vuelve a pedir los datos.
Vuelve a ejecutar setDatos.
Y el ciclo se repite.

2. ¿Por qué se congela la pestaña?

Porque se genera un ciclo continuo de efectos,
peticiones, cambios de estado y renders.
El navegador tiene que trabajar constantemente
y puede terminar consumiendo muchos recursos.

3. ¿Qué array de dependencias necesita?

Si los datos se tienen que pedir solamente
cuando el componente se monta, necesita un array vacío:

useEffect(() => {
  // pedir datos
}, []);

El array vacío hace que el efecto se ejecute
una vez al montar el componente.

4. ¿Qué le contestás si quiere que siempre esté actualizado?

Que no tiene que ejecutar el efecto después de cada render.

Si necesita actualizar los datos periódicamente,
puede usar un intervalo o una estrategia de actualización
controlada y limpiar el intervalo cuando el componente
se desmonte.
*/