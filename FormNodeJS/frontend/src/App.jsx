import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    phone: "",
    password: ""
  })

  const [students, setStudents] = useState([])

  //get data 

  const getStudents = async () => {
    try {
      const res = await axios.get('http://localhost:3000/get-data')
      setStudents(res.data.data)

    } catch (error) {
      console.log(error);

    }
  }

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
      getStudents()
      console.log(res);

    } catch (error) {
      console.log(error);
      alert("eror")
    }

  }
  const deleteStudents = async (id) => {
    try {
      
      await axios.delete(`http://localhost:3000/delete/${id}`)
      alert("Data Deleted")
      getStudents()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStudents()
  }, [])
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
        <br /> <br />

      </form>

      <h2>All Data</h2>

      <table border='1' cellPadding='10' cellSpacing='0'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Password</th>
          <th>Delete</th>
        </tr>
        <tbody>
          {
            students.map((students, index) => (
              <tr key={index}>
                <td>{students.name}</td>
                <td>{students.email}</td>
                <td>{students.phone}</td>
                <td>{students.password}</td>
                <td><button onClick={() => deleteStudents(students._id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default App
