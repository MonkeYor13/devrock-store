import axios from "axios";
import Contexto from "./Contexto";
import { useReducer } from "react";



//----creamos todas nuestras accion que vamos a exportar para poder usar en cualquier otro componente----
export default function UsarContexto(props) {
  const { children } = props;
  
  const [state, dispatch]= useReducer(Reducer, estadoInicial)

  //1.creamos nuestro estado inicial
  const estadoInicial = {
    productos: [],
    carrito: [],
  };

  //2.creamosnuestra lista de productos
  const listameProductos = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    setEstado(res.data);
    console.log(res.data);
  };

  //3.creamos agregar al carrito
  const agregarCarrito = (item) => {
    console.log('agremos carrito', item)
  };

  //4.creamos eliminar del carrito
  const eliminarCarrito = () => {};

  return (
    //--- usamos el context y agregamos le provider para proveer las accciones y tambien los la rutas lo agregamos---
    <Contexto.Provider
      value={{
        productos: estado,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
