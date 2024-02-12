//TYPES, son los tipos de ordenes que le vamos a dar y las podemos llamar como  queramos

const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGARME_CARRITO = "AGREGARME_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

//le pasamos los 2 parametros
export default function Reducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case LISTAME_PRODUCTOS:
      return { ...state, productos: payload };
      case AGREGARME_CARRITO:
        return { ...state, carrito: state.productos.filter((ite)=> ite.id == payload.id) }; 
  }
}
