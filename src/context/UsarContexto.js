import React from 'react'
import Contexto from './Contexto'
import axios from 'axios';
import { useState } from 'react';

export default function UsarContexto(props) {
    const {children}= props;
    const [estado, setEstado] = useState([]);

//1.creamos nuestro estado inicial 
    const estadoInicial = {
        productos: [], 
        carrito: [],
    };
//2.creamosnuestra lista de productos
    const listameProductos= async()=>{
        const res = await axios.get("https://devrockstore-default-rtdb.firebaseio.com/productos.json");
        setEstado(res.data);
        console.log(res.data);
    };
//3.creamos agregar al carrito
    const agregarCarrito= ()=>{};
//4.creamos eliminar del carrito
    const eliminarCarrito= ()=>{};

    return (
    <Contexto.Provider value={
        {
            productos: estado,
            // carrito: estadoInicial.carrito,
            listameProductos,
            agregarCarrito,
            eliminarCarrito
        }
    }>
        {children}
    </Contexto.Provider>
  )
}
