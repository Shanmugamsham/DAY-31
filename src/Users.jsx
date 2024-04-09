import React, { useState } from 'react';
import './App.css'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from "yup"

const myvalidationSchema=yup.object().shape({
    Title: yup.string().required("Title is required"),
    Author: yup.string().required("Author name is required"),
    ISBN_number:yup.string().required("ISBN_number is required"),
    publication_date:yup.string().required("publication_date is required")
    
    });

const Users = () => {
     const[data,setdata]=useState([])
     console.log(data);
    return (
        <Formik initialValues={{
            Title: "",
            Author: "",
            ISBN_number: "",
            publication_date: "",
   
   
            }}
            validationSchema={myvalidationSchema}
            onSubmit={values=>setdata([...data,values])}>
   
               {formikprops=>{
                   const {values}=formikprops
                   return(
                    <div>
                       <Form>
                           <div className='bg-user'>
               <div className='container'>
                   <div className='row'>
                    <div className='col-12'>
   
                       <h4 className='userform'>Book Record</h4>
   
                       <div className='card-user '>
                       <label htmlFor="Tital" className="form-label mt-5">Title :</label>
                       <Field type="text" name='Title'className="form-control" id="Tital" placeholder="Enter your Title...."/>
                       <ErrorMessage component="p" name='Title' className='err'/>
                         
                      <label htmlFor="Author" className="form-label">Author Name :</label>
                      <Field type="text" name='Author'className="form-control" id="Author" placeholder="Enter Author...."/>
                     <ErrorMessage component="p" name='Author' className='err'/>

                     <label htmlFor="ISBN_number" className="form-label">ISBN Number :</label>
                      <Field type="number" name='ISBN_number' className="form-control" id="ISBN_number" placeholder="Enter ISBN Number...."/>
                      <ErrorMessage component="p" name='ISBN_number' className='err'/>
                       
                            
                         <label htmlFor="publication_date" className="form-label">Publication Date :</label>
                      <Field type="text" name='publication_date'className="form-control" id="publication_date" placeholder="Enter Publication Date...."/>
                      <ErrorMessage component="p" name='publication_date' className='err'/>
                    

                          <button type="submit" className='btns'>Sumbit</button>
                          <button type="reset" className='btnr'>Delete</button>
                  
                      </div>
                       </div>
                   </div>
               </div>
              
           </div>
   
   
                       </Form>


                       <div>
                    {data.map((d,index)=>(
                     <div  className="container card-6" key={index}>
        
                              <h3 className='m-3 p-2'> Title :{d.Title}</h3>
                              <h4 className='m-3 p-2'>Author Name :{d.Author}</h4>
                              <h4 className='m-3 p-2'>ISBN Number:{d.ISBN_number}</h4>
                              <h4 className='m-3 p-2'>Publication Date:{d.publication_date}</h4>
                     </div>
                    )) }
                    </div>
                       </div>
                   )
               }}
            
           </Formik>
       );

};

export default Users;

