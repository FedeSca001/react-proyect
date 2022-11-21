import './CardRestorant.css'

function CardComponent (){
    let restorants = [];
    const getData = async () => {
        const url =
        "https://62630e3ac430dc560d2b8a72.mockapi.io/restorants";
        const r = await fetch(url);
        restorants = await r.json();
        console.log(restorants[0]);
    };
    getData();
    return (
        <div className='contenedor-card'>
            <h3>Restorant Name: {restorants[0].id !== true ? restorants[0].id : ''}</h3>
        </div>
    );
}

export default CardComponent;