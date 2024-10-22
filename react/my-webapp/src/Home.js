
const Home = () => {
    return (
        <div className="Home">
            <h2>Homepage</h2><hr />
            <ExampleTwo Name="Ammar" Age="22" Job="Front-End"/>
            <ExampleTwo Name="Abid" Age="55" Job="Teacher"/>
            <ExampleTwo Name="Shahzaib" Age="23" Job="Lawyer"/>
        </div>
    );
}

const ExampleTwo = (props) => {
    return (
        <div>
            <h3>Name: {props.Name}</h3>
            <h3>Age: {props.Age}</h3>
            <h3>Job: {props.Job}</h3><hr />
        </div>
    );
}

// const Example = () => {
//     return (
//    // Hard-Coded Data 
//       <div>
//         <div>
//           <h3>Name: Ammar</h3>
//           <h3>Age: 22</h3>
//           <h3>Job: Front-End</h3><hr />
//         </div>
//         <div>
//           <h3>Name: Abid</h3>
//           <h3>Age: 55</h3>
//           <h3>Job: Teacher</h3><hr />
//         </div>
//         <div>
//           <h3>Name: Shahzaib</h3>
//           <h3>Age: 23</h3>
//           <h3>Job: Lawyer</h3><hr />
//         </div>
//       </div>
//     );
// }

export default Home;