import { useRef } from "react";// we use this in uncontrolled form.

function UncontrolledForm () {
// ref to get input values
const nameInput = useRef(null);
const ageInput = useRef(null);

const handleSubmit = event => {
  // prevent page refresh
  event.preventDefault()
  // do what you want with the form data
  console.log({
    name: nameInput.current.value,
    age: ageInput.current.value,
  })
}
return (
        <div>
        <h2>Uncontrolled Form goes here</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                ref={nameInput} 
                placeholder="write name here" 
            />
            <input 
                type="number"
                ref={ageInput}
                placeholder="write age here"
            />
            <input type="submit" value="Submit Form" />
        </form>
        </div>


    )
}

export default UncontrolledForm;