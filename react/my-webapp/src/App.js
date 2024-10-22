import './App.css';

function App() {
  const title = "Welcome to new Web App";
  const visits = 50;
  // const employee = { name: "Ammar", age: 22 };
  const link = 'http://www.google.com'

  return (
    <div className="App" >
      <div className="content"></div>
      <h1>{title}</h1>
      <p>Visited {visits} times</p>
      {/* <p>{employee}</p> //error  */}
      <p>{10}</p>
      <p>{"Hello Coder"}</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Google Site</a>
    </div>
  );
}

export default App;
