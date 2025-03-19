import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import MetaData from "./Metadata";



const Contactform = () => {


    return (
    <>
     
    <div className="card h-100 contactData">
      <div className="card-body">
        <h5 className="card-title text-center">Make an Enquiry</h5>
        <div className='underline mx-auto mb-5' ></div>
        <div className="mb-3">
        <div className='row'>
        <div className='col-md-6'>
  <label htmlFor="name" className="form-label">Name</label>
  <input type="name" className="form-control" id="name" name='name' minLength = {5} required/>
</div>
<div className='col-md-6'>
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"/>
</div>
</div>
</div>

<div className="mb-3">
        <div className='row'>
        <div className='col-md-6'>
  <label htmlFor="mobile" className="form-label">Mobile</label>
  <input type="mobile" className="form-control" id="mobile" name='mobile' minLength = {10} required/>
</div>
<div className='col-md-6'>
  <label htmlFor="subject" className="form-label">Subject</label>
  <input type="subject" className="form-control" id="subject" name='subject' minLength = {5} required/>
</div>
</div>
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea className="form-control" id="message" rows="3" name='message'  minLength = {5} required></textarea>
</div>
        <button type='submit' className="btn" style={{backgroundColor:"#f76c2f",color:"white"}}>Submit</button>
      </div>
    </div>
  


    </>
  )
}

export default Contactform