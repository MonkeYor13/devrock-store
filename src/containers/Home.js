import React, {useContext, useEffect} from 'react'
import Context from '../context/Contexto'
import '../assets/css/Home.css'
import Item from '../components/Item'


export default function Home() {
  useEffect(() => {
    listameProductos();
  }, [])
  
  const {listameProductos, productos} = useContext(Context);
  return (
    <>
    <div className="container">
      <div className="wraper">
        <div className="home">
            {/* <Item></Item> */}
            {
              productos.map((item)=>(
                <Item {...item}></Item>
              ))
            }
        </div>
      </div>
    </div>
    </>
  )
}

