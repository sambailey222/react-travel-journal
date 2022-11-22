import world from '../world.png';

export default function Navbar() {
    return (
    <nav className="navbar">
        
            <img className="nav--image"src={world} alt='world-image'/>
            <h1 className="nav--title">my travel journal.</h1>
        
    </nav>
    );
}