import logo from "../assets/brand_logo.svg";
const Navigation = () =>{
    return(
        <nav className="container">
            
            <div className="logo" >
             <img src = {logo} alt="brand logo"/>
             </div>        
            <ul>
                <li href = "#">Menu</li>
                <li href = "#">Location</li>
                <li href = "#">About</li>
                <li href = "#">contact</li>
            </ul>

            <button>Login</button>
            
        </nav>
    )
}

export default Navigation;