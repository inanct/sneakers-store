import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import "./contact.css"
import axios from 'axios'
import {  SiInstagram, SiFacebook, SiTwitter } from "react-icons/si";

const BASE_URL = process.env.REACT_APP_API_URL

const Contact = () => {
    const formik = useFormik({
        initialValues:{
            fullName:"",
            email:"",
            message:"",
        },
        validationSchema: Yup.object ({
            fullName:Yup.string().min(2, "Must be at least 2 characters").required("Name cannot be empty"),
            email:Yup.string().email("Please enter a valid email").required("Mail cannot be empty"),
            message:Yup.string().min(10, "Must be at least 10 characters").required("Message cannot be empty") 

        }),
        onSubmit: async (values) => {
            console.log(values)
            const dto = {
                fullName:values.fullName,
                email:values.email,
                message:values.message,
            } 
             try {
        const response = await axios.post(`${BASE_URL}/project/sneakersapp`, dto)
        alert (JSON.stringify(response.data) );
      } catch (error) {
        alert("Error")
        
      }
        }
       
    }) 
  return (
    <div className="container">
        <form noValidate onSubmit={formik.handleSubmit}>
            <div onSubmit={formik.handleSubmit}>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='Entry fullname'
            {...formik.getFieldProps("fullName")}
            />
            {formik.errors.fullName && formik.touched.fullName && <p style={{color:"red"}} > {formik.errors.fullName} </p>}
            </div>
            
            <div className='email' onSubmit={formik.handleSubmit}>
                 <label htmlFor="">Email</label>
            <input  type="email" placeholder='Entry email'
            {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email && <p style={{color:"red"}}> {formik.errors.email} </p>}

            </div>

            <div className='message-contact' onSubmit={formik.handleSubmit}>
            <label htmlFor="">Message</label>
            <input className='message' type="text" placeholder='Entry message'
            {...formik.getFieldProps("message")}
            />
            {formik.errors.message && formik.touched.message && <p style={{color:"red"}} > {formik.errors.message} </p>}
            </div>
            <button className='contact-button'  type='submit'>Send</button>
             <div className="social-contact">
                <i><SiInstagram /></i>
                <i><SiFacebook /></i>
                <i><SiTwitter /></i>
            </div>
        </form>
    </div>
  )
}

export default Contact