import React from "react";
import Person from "./Person";

function NamesList() {
  const names = ['Bruce', 'Clark','Danie']
    // return (
    //   <div>
    //       {
    //          names.map(name => <h1>{name}</h1>)
    //       }
    //   </div>
    // )

   

  const namesList= names.map((name, index) => <h1 key ={index}>{index} {name}</h1>);
  return <div>{namesList}</div>


//   const persons =[
//     {
//         id : 1,
//         name : "Madhu",
//         age : 18,
//         skill : 'Java'
//     },
//     {
//         id : 2,
//         name : "Madhu",
//         age : 18,
//         skill : 'Java'
//     },
//     {
//         id : 3,
//         name : "Madhu",
//         age : 18,
//         skill : 'Java'
//     }
//   ]

//   const personsList = persons.map(person => <Person  key={person.id} person={person} />)

//   return(
//     <div>{personsList}</div>
//   )

}

export default NamesList;
