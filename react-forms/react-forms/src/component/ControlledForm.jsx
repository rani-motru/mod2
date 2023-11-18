import { useState } from "react";

function ControlledForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age: 0,
    })

    // handleChange function
    const handleChange = event => {
        // dynamically update the state using the event object
        // this function always looks the same
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        // prevent page refresh
        event.preventDefault()
        // do what you want with the form data
        console.log(form)
    }
    return (
        <div>
            <h2>Controlled Form will go here</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="write name here"
                />
                <input
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="write email address here"
                />
<input
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    name="age"
                    placeholder="write age here"
                />
                <input type="submit" value="Submit Form" />
            </form>

            <h3>I can display form data here</h3>
            <h4>name: {form.name}</h4>
            <h4>age: {form.age}</h4>
        </div>
    )
}

export default ControlledForm;