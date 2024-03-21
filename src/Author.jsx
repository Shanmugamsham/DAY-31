import React from 'react';
import './App.css'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from "yup"


const myvalidationSchema=yup.object().shape({
author: yup.string().required("Name is Required"),
dataofbirth: yup.string().required("Date of birth is Required"),
biography:yup.string().required("Biography is Required")

});
const Author = () => {
    return (
         <Formik initialValues={{
         author: "",
         dataofbirth: "",
         biography: ""

         }}
         validationSchema={myvalidationSchema}
         onSubmit={values=>console.log(values)}>

            {formikprops=>{
                const {values}=formikprops
                return(
                    <Form>
                        <div className='bg-user'>
            <div className='container'>
                <div className='row'>
                 <div className='col-12'>

                    <h4 className='userform'>Author Record</h4>

                    <div className='card-user '>
                    <label htmlFor="authorname" className="form-label mt-5">Author name</label>
                      <Field type="text" name="author" className="form-control " id="authorname" placeholder="Enter your name...."/>
                      <ErrorMessage component="p" name='author' className='err'/>
                      
                      <label htmlFor="uthordatabirth" className="form-label">Data  of  birth</label>
                      <Field type="text" name="dataofbirth" className="form-control" id="authordatabirth" placeholder="Enter your brithdate...."/>
                      <ErrorMessage component="p" name='dataofbirth' className='err'/>
                      <label htmlFor="authorbiography" className="form-label">Biography</label>
                      <Field type="text" name="biography" className="form-control" id="authorbiography" placeholder="Enter your short biography...."/>
                      <ErrorMessage component="p" name='biography' className='err'/>
                       <button type="submit" className='btns'>Sumbit</button>
                       <button type="reset" className='btnr'>Delete</button>
               
                   </div>
                    </div>
                </div>
            </div>
           
        </div>


                    </Form>
                )
            }}
         
        </Formik>
    );
};

export default Author;