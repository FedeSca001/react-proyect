import './CardRestorant.css'

function CardComponent (props){
    return (
        <div className='contenedor-card'>
            <img src={props.avatar} alt="img" />
            <h3>Restorant Name:{props.name}</h3>
            <p>All Foods</p>
        </div>
    );
}

export default CardComponent;