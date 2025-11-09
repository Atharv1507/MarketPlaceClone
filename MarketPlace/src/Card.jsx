import "./Card.css"

function Card(prop){
   return (<div className="CardContainer">
        <div className="Card">
            <div className="head">
                <h2>Item name</h2>
            </div>            
                <img src={prop.img} alt="this is image" />
            <div className="details">
                <h3>Price:{prop.price}</h3>
                <h3>Seller:{prop.owner}</h3>
            </div>
            <button className="contact">Contact Owner</button>
        </div>
        <div className="Card">
            <div className="head">
                <h2>Item name</h2>
            </div>            
                <img src={prop.img} alt="this is image" />
            <div className="details">
                <h3>Price:{prop.price}</h3>
                <h3>Seller:{prop.owner}</h3>
            </div>
            <button className="contact">Contact Owner</button>
        </div>
        <div className="Card">
            <div className="head">
                <h2>Item name</h2>
            </div>            
                <img src={prop.img} alt="this is image" />
            <div className="details">
                <h3>Price:{prop.price}</h3>
                <h3>Seller:{prop.owner}</h3>
            </div>
            <button className="contact">Contact Owner</button>
        </div>
        <div className="Card">
            <div className="head">
                <h2>Item name</h2>
            </div>            
                <img src={prop.img} alt="this is image" />
            <div className="details">
                <h3>Price:{prop.price}</h3>
                <h3>Seller:{prop.owner}</h3>
            </div>
            <button className="contact">Contact Owner</button>
        </div>
    </div>)
}

export default Card