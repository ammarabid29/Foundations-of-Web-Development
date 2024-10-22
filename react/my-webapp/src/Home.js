
const Home = () => {
    return (
        <div className="Home">
            <Library Title="CSS" Author="David" Description="Beginers to Advance Level" Date="2004"></Library>
            <Library Title="Java" Author="Varner" Description="A Complete Guide" Date="2008"></Library>
        </div>
    );
}



const Library = (props) => {
    return (
        <div className="Card">
            <h2>{props.Title}</h2> <hr />
            <h3>{props.Author}</h3> <hr />
            <p>{props.Description}</p> <br /><hr />
            <p>{props.Date}</p><hr />
        </div>
    );
}

export default Home;