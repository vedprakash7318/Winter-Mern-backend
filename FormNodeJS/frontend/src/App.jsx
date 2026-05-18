import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    phone: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/register', formData)
      setFormData({
        name: '',
        email: "",
        phone: "",
        password: ""
      })
      console.log(res );
      
    } catch (error) {
      console.log(error);
      alert("eror")
    }

  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='name'
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          name='email'
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        /> <br /> <br />
        <input
          type="text"
          name='phone'
          placeholder="Enter your number"
          value={formData.phone}
          onChange={handleChange}
        /> <br /> <br />
        <input
          type="password"
          name='password'
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
