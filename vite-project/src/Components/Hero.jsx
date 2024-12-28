import Amazonlogo from "../assets/amazon.svg";
import Flipkartlogo from "../assets/flipkart.svg";
import ShoeImage from "../assets/shoeimage.svg";

const HeroSection = () =>{
    return(
        <main className="Hero container">
            <div className="Hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</p>

                <div className="Hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div className="Shopping">
                    <p>Also available on</p>
                </div>

                <div className="Amazon-image">
                    <img src = {Amazonlogo} alt="amazon-logo"/>
                    <img src = {Flipkartlogo} alt="amazon-logo"/>
                </div>

                



            </div>
            <div className="Hero-image">
                    <img src = {ShoeImage} alt="Shoe-image"/>

            </div>
        </main>
    )
}

export default HeroSection;