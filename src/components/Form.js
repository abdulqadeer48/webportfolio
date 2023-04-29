import "./FormStyle.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>First Name</label>
        <input type="text"></input>
        <label>Last Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="text"></input>
        <label>Your Message</label>
        <textarea rows="6" placeholder="Type your message here..."/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form