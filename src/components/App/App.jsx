import "./App.css";
import {Header} from "../Header/Header";
import {Home} from "../Home/Home";
import {useState} from "react";
import {Footer} from "../Footer/Footer";

function App() {

    const offersList = [
        {id: 1, name: "STARTER", price: 9, priceYear: 99, orders: 30},
        {id: 2, name: "BUSINESS", price: 24, priceYear: 249, orders: 100}
    ];

    const [offers, setOffers] = useState([...offersList]);

    return (
        <div className="App">
            <Header/>
            <Home offers={offers} setOffers={setOffers}/>
            <Footer />
        </div>
    );
}

export default App;
