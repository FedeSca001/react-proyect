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
            <img src="img" alt="img" />
            <h3>Restorant Name:</h3>
            <p>All Foods</p>
        </div>
    );
}

export default CardComponent;