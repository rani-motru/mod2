// const Component = () => {
//     // an array of dogs
//     const dogs = [
//       { name: "Sparky", age: 5 },
//       { name: "Spot", age: 5 },
//       { name: "Ralph", age: 5 },
//       { name: "Fido", age: 5 },
//     ]
//     // map over the dogs array and create an array of JSX for each dog
//     const dogJSX = dogs.map(dog => {
//       // we return JSX for each dog in the array which we store in the dog variable, essentially we are looping over dog of dogs
//       return (
//         <div>
//           <h1>{dog.name}</h1>
//           <h2>{dog.age}</h2>
//         </div>
//       )
//     })
  
//     // the component returns JSX that uses the dogJSX array
//     return <div>{dogJSX}</div>
//   }

function DogArray() {
    //an array of Dogs
    const dogs = [
              { name: "Sparky", age: 5 },// this is an element of an array dogs.
              { name: "Spot", age: 5 },
              { name: "Ralph", age: 5 },
              { name: "Fido", age: 5 },
            ]
  //map over the dogs array and create an array of jsx for each dog.
  // like having a for loop  for the length of dogs.
  // but instead of using dog[i] we named a dog variable and that's what we're using instead.          
  const dogJSX =dogs.map(dog =>{
    //we return  JSX for each dog in the array which we store in the dog variable,essentially we are looping dogs over dogs
  return (
    <div>
        <h1>{dog.name}</h1>
        <h2>{dog.age}</h2>
    </div>
  )
})
// the component returns JSX that uses the dogJSX array
//     return <div>{dogJSX}</div>
//   } 
return (

    <div>{dogJSX}</div>

)
}
export default DogArray