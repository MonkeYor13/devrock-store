import React from "react";
import iconCarrito from '../assets/statics/carrito.png'
import iconVolver from '../assets/statics/volver.png'
export default function Header() {
  return (
    <>
      <a href="carrito.html">
        <img src= {iconCarrito} alt="" className="carritou" />
      </a>
      <a href="">
        <img src={iconVolver} alt="" className="volver" />
      </a>
      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
