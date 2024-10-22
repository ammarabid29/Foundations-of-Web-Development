import { useState } from "react";


const Home = () => {

    const [name, setName] = useState("Ammar");

    const handleClick = () => {
        setName("Abid");
    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;