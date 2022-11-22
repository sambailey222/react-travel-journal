import Data from '../data.js'
import Pin from '../pin.png'

export default function Card() {
    
    console.log(Data);
    console.log(Data[0].imageUrl);
    return (
    <div>
        <img src={Data[0].imageUrl} className="card--image"></img>
        <img src={Pin} />
        <span className='location'>{Data[0].location}</span>
        <a href={Data[0].googleMapsUrl} target="_blank">View on Google Maps</a>
        <h1>Journal Entry</h1>
    </div>
    );
}