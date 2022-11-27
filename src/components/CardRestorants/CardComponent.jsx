import './CardRestorant.css';
import React, { useState } from "react";

function CardComponent (){
    const [item, setItem] = useState([]);
    const addItem = ()=>{
        setItem([...item, {
                id: item.length,
                name: `Juan carlos ${item.length}`,
        }]);
    }
    return (
        <div className='contenedor-card'>
            <button onClick={addItem}>Add item</button>
            <ul>{
                item.map(elem => (
                    <li key={elem.id}>{elem.name}</li>
                ))
            }</ul>
        </div>
    );
}

export default CardComponent;