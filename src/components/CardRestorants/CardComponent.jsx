import './CardRestorant.css'

function CardComponent (props){
    console.log(props.objects);
    return (
        <div className='contenedor-card'>
            <img alt="img" />
            <h3>Restorant Name:</h3>
            <p>All Foods</p>
        </div>
    );
}

export default CardComponent;