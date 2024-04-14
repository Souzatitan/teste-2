import React, { useState } from "react";
import Logo from "../img/Logo.png";
import { Link } from 'react-router-dom';
import Sign from "../img/back-sign-croped.png"
import BackButton from "./BackButton";

function Login() {
    return(
        
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
            <BackButton/>
            <div className="Logo" >
            <img src={Logo} style={{ width: '150px', height: '120px' }} /> 
            </div>
            
                <form>
                    <h3 className='text-center'>Entrar</h3>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <input type="checkbox" className='custom-control custom-checkbox'id="check"/>
                        <label htmlFor="check" className='custom-input-label ms-2'>
                        Renember me
                        </label>
                        
                    </div>
                    
                    <div className='reset'>
                   
                    <Link to="/reset" className='ms-2'>Esqueci a Senha</Link>
                    
                    </div>
                    <p className='text-end mt-2'>
                    <Link to="/signin" className='ms-2'>Entrar</Link>    
                    <Link to="/signup" className='ms-2'>Cadastre-se</Link>
                    
                    
                     
                    </p>
                
                </form>
            </div>

        </div>
    )
}
export default Login;
