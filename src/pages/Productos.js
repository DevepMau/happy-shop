import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Productos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/productos')
          .then(response => {
            setProductos(response.data);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      }, []);

  return (
    <Box>
        <h2>Productos</h2>
        <ul>
            {productos.map(producto => (
                <li key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                    <img src={producto.iimage} alt={producto.nombre} />
                </li>
            ))}
        </ul>
    </Box>
  )
}