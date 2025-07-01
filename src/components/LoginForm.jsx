import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../userSlice.jsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
            dispatch(login({email:user.email}));
            toast.success(`Bienvenido, ${user.email}`);
            navigate('/');
        
        }else {
            toast.error('Credenciales invalidas')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{  background: '#ffffff' }}>
            <div className="card p-4 shadow rounded" style={{width:'100%' ,  maxWidth:'400px' , minHeight:'70vh'}}>
                <form onSubmit={handleSubmit} className='container mt-4'>
                 <h2 className="text-center mb-3">Iniciar Sesión</h2>
                 <input type="email" name="email" placeholder="Correo Electronico" onChange={handleChange} className="form-control mb-2" required />
                 <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} className="form-control mb-2" required />
                 <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                 <button type="button" className="btn btn-primary" onClick={() => navigate('/register')}>Registro</button>
                </form>
            </div>
        </div>
    )
    
}
