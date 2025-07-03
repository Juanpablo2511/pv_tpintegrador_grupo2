import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../userSlice.jsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

export default function LoginForm() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [formData , setFormData]= useState({email: '',password: ''});

    const handleChange = (e)=> {
        setFormData({...formData , [e.target.name]: e.target.value});

    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const { email,password} = formData;

        const storedUsers=JSON.parse ( localStorage.getItem('users')) || [];
        const user = storedUsers.find (u => u.email === email && u.password === password);

        if(user){
            dispatch(login({email: user.email, name: user.name}));
            toast.success(`Bienvenido, ${user.name}`);
            navigate('/');
        
        }else {
            toast.error('Credenciales invalidas')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="card p-5 shadow-lg rounded-3" style={{width:'100%' ,  maxWidth:'450px'}}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary mb-2">Iniciar Sesión</h2>
                    <p className="text-muted">Accede a tu cuenta</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <FaEnvelope className="text-muted" />
                            </span>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Correo Electrónico" 
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
                                name="password" 
                                placeholder="Contraseña" 
                                onChange={handleChange} 
                                className="form-control border-start-0" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="d-grid gap-2 mb-3">
                        <button type="submit" className="btn btn-primary btn-lg">
                            <FaSignInAlt className="me-2" />
                            Iniciar Sesión
                        </button>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-muted mb-0">¿No tienes cuenta?</p>
                        <button 
                            type="button" 
                            className="btn btn-link text-decoration-none" 
                            onClick={() => navigate('/register')}
                        >
                            Regístrate aquí
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}
