// import logo from "./logo.svg";
import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p> Hey Vinit</p>
//         <button>Click Me</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        // { name: "Frankenstein", id: "asc1" },
        // { name: "Dracula", id: "asc2" },
        // { name: "Zombie", id: "asc3" },
      ],
      searchField:''
    };
  }

  // it is life cycle method because that access to our class component
  // we are fetching from this URL, by taking a response and converting into JSON format
  // & by taking users from URL then setting state to monsters array
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
    // .then(rsponse => console.log(response));
  }

  render() 
  {
    return (
      <div className="App">
          <input type="search" 
            placeholder="Search Monsters" 
            onChange={e => {this.setState({searchField: e.target.value});
            console.log(this.state);}
          } />
          
          <CardList monsters={this.state.monsters} />      
      </div>
    );
  }
}

export default App;
