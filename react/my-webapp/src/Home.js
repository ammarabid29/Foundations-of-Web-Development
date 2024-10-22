import { useState } from "react";


const Home = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={increaseCount}>Click to Increase</button>
            <p>Count is: {count}</p>
            <button onClick={decreaseCount}>Click to Decrease</button>
        </div>
    );
}

export default Home;