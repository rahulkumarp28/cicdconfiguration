import './signup.css'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
//   MDBCheckbox,
//   MDBIcon
}
from 'mdb-react-ui-kit';


function Signup() {

    const navigate=useNavigate();
    const [user,setUser]=useState({
        Username:'',
        DOB:'',
        firstName:'',
        lastName:'',
        mobile:'',
        email:'',
        password:''
    });
    const handleChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value});
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(user);
        axios.post('http://localhost:9094/api/v1.0/userProfile/add',{user})
             .then((response)=>{
                console.log(response.data);

                 navigate('/loginpage');
             })
             .catch((error)=>{
                console.error(error.response.data);
             });
    }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Find Beautiful <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>Image For Your Creativity</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Every day, we bring you a stunning image from the vast expanse of the universe, 
          curated from various astronomical sources. Whether it's a breathtaking snapshot of distant galaxies, 
          a mesmerizing view of a planetary nebula, or a close-up of a celestial body within our own solar system, 
          each picture tells a unique story about the wonders of the cosmos.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
          <form className='register' onSubmit={handleSubmit}>
            <MDBCardBody className='p-5' >
                <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Username'  name="Username" type='text' value={user.Username} onChange={handleChange} required/>
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='DOB' name="DOB" type='date' value={user.DOB} onChange={handleChange} required/>
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' name="firstName" type='text' value={user.firstName} onChange={handleChange} required/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' name="lastName" type='text' value={user.lastName} onChange={handleChange} required/>
                </MDBCol>
              </MDBRow>

              
              
              <MDBInput wrapperClass='mb-4' label='Mobile' name="mobile" type='number' value={user.mobile} onChange={handleChange} required/>
              <MDBInput wrapperClass='mb-4' label='Email' name="email" type='email' value={user.email} onChange={handleChange} required/>
              <MDBInput wrapperClass='mb-4' label='Password' name="password" type='password' value={user.password} onChange={handleChange} required/>

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}
              {/* <Link to="/loginpage"> */}
                 <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
              {/* </Link> */}
              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */}

            </MDBCardBody>
            </form>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;
























// import React from 'react'

// export default function signup() {
//   const styles = {
//     backgroundColor: '#eee'
//   };
//   const styles1 = {
//     borderRadius: '25px'
//   };
//   return (
    
//       <section class="vh-100" style = {styles}>
//   <div class="container h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-lg-12 col-xl-11">
//         <div class="card text-black" style={styles1}>
//           <div class="card-body p-md-5">
//             <div class="row justify-content-center">
//               <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

//                 <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//                 <form class="mx-1 mx-md-4">

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-user fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="text" id="form3Example1c" class="form-control" />
//                       <label class="form-label" for="form3Example1c">Your Name</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="email" id="form3Example3c" class="form-control" />
//                       <label class="form-label" for="form3Example3c">Your Email</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4c" class="form-control" />
//                       <label class="form-label" for="form3Example4c">Password</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-key fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4cd" class="form-control" />
//                       <label class="form-label" for="form3Example4cd">Repeat your password</label>
//                     </div>
//                   </div>

//                   <div class="form-check d-flex justify-content-center mb-5">
//                     <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                     <label class="form-check-label" for="form2Example3">
//                       I agree all statements in <a href="#!">Terms of service</a>
//                     </label>
//                   </div>

//                   <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                     <button type="button" class="btn btn-primary btn-lg">Register</button>
//                   </div>

//                 </form>

//               </div>
//               <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" />

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
   
//   )
// }
