// import { useRef } from "react"

// const Component = props => {
//   // create a new ref, we'll assign it in our JSX
//   const inputRef = useRef(null)

//   const handleClick = () => {
//     //log the inputs elements value
//     console.log(inputRef.current.value)
//   }

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

import { useRef } from 'react';

function UseRefExample (props) {
    // create a new ref, we'll assign it in our JSX
    // initializing it to null
    const inputRef = useRef(null);

    const handleClick = () => {
        //log the inputs elements value
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default UseRefExample