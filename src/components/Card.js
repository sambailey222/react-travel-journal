import Data from '../data.js'
import Pin from '../pin.png'

export default function Card() {
    
    console.log(Data);
    console.log(Data[0].imageUrl);
    return (
    <div className="card">
        <div className="column--left">
            <img src={Data[0].imageUrl} className="card--image"></img>
        </div>
        <div className="column--right">
            <img src={Pin} />
            <span className='card--location'>{Data[0].location}</span>
            <a className="card--map" href={Data[0].googleMapsUrl} target="_blank">View on Google Maps</a>
            <h1>Journal Entry</h1>
            <p className="card--dates">{Data[0].startDate} - {Data[0].endDate}</p>
            <p className="card--desc">{Data[0].description}</p>
         </div>
    </div>
    );
}