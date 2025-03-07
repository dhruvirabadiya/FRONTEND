import React from 'react'
import { useState } from 'react'

const Form = () => {
    //method-1
    // const [text, setText] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const initialState = {
        firstName: '',
        email: '',
        password: ''
    }
    //method-2
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formdata', formData);

    }

    return (
        <div>
            <h1 className='headText'>This is Form Component</h1>
            <form onSubmit={handleSubmit}>
                FirstName:<input type='text' name='firstName' id='text' className='border' onChange={handleChange} />
                Email:<input type='email' name='email' id='email' className='border' onChange={handleChange} />
                Password:<input type='password' name='password' id='password' className='border' onChange={handleChange} />
                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form