import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {
    useEffect(() => {
        getGifs(category);
    }, []) //Si dejo las dependencias vacías, significa que el hook solo se va a disparar la primera vez que se crea y se construye este componente

    return (
        <>
            <h3>{category}</h3>
            <p>Hola mundo</p>
        </>
    )
}
