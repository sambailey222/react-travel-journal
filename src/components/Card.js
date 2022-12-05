import Data from '../data.js'
import Pin from '../pin.png'

export default function Card(props) {
    
    console.log(props);
    let displayValue = 'block';
    if (props.id === 0) {
        displayValue = 'none';
    } 

    return (
    <div className="cardContainer">
        <hr className="spacer" style={{display: displayValue}}></hr>
        <div className="card">
            <div className="column--left">
                <img src={props.item.imageUrl} className="card--image"></img>
            </div>
            <div className="column--right">
                <img src={Pin} />
                <span className='card--location'>{props.item.location}</span>
                <a className="card--map" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <p className="card--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--desc">{props.item.description}</p>
            </div>
        </div>
    </div>
    );
}