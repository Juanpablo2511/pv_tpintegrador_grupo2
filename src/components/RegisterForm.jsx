import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';

export default function RegisterForm() {
    const navigate=useNavigate();
    const [formData,setFormData] = useState ({name:'' , email: '',password: '', confirmPassword: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name,email,password,confirmPassword} = formData;

        if(password.length < 6 ) return toast.error('La contraseña debeb tener al menos 6 caracteres');
        if(password !== confirmPassword) return toast.error('Las contraseñas no coinciden');

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        if (existingUsers.some ( user => user.email === email)) return toast.error('Este correo esta registrado');

        existingUsers.push ({ name , email ,  password});
        localStorage.setItem('users' , JSON.stringify(existingUsers));

        toast.success('Registro exitoso. Redirigiendo al login...');
        setTimeout (() =>{
          navigate('/login');
        }, 2500)
        
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="card p-5 shadow-lg rounded-3" style={{width:'100%' ,  maxWidth:'450px'}}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary mb-2">Crear Cuenta</h2>
                    <p className="text-muted">Únete a nuestra comunidad</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <FaUser className="text-muted" />
                            </span>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Nombre completo" 
                                onChange={handleChange} 
                                className="form-control border-start-0" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <FaEnvelope className="text-muted" />
                            </span>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Correo electrónico" 
                                onChange={handleChange} 
                                className="form-control border-start-0" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <FaLock className="text-muted" />
                            </span>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Contraseña" 
                                onChange={handleChange} 
                                className="form-control border-start-0" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <FaLock className="text-muted" />
                            </span>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                placeholder="Confirmar contraseña" 
                                onChange={handleChange} 
                                className="form-control border-start-0" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="d-grid gap-2 mb-3">
                        <button type="submit" className="btn btn-primary btn-lg">
                            <FaUserPlus className="me-2" />
                            Registrarse
                        </button>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-muted mb-0">¿Ya tienes cuenta?</p>
                        <button 
                            type="button" 
                            className="btn btn-link text-decoration-none" 
                            onClick={() => navigate('/login')}
                        >
                            Inicia sesión aquí
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}