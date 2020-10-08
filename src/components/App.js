import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {



        //Goa(India),Amsterdam(Netherlands),New York(USA),Darjeeling(India),Tokyo(Japan),Lonavala(India)

        const cities = [`Goa(India)`,`Darjeeling(India)`,`Lonavala(India)`,`Amsterdam(Netherlands)`,`New York(USA)`,`Tokyo(Japan)`];


        return(
           <>
           <ol>
        {cities.map((city,index) => <li key="location"{city}>{city}</li>)}
//write your code here
            </ol>
	</>
        )
    }
}


export default App;
