import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

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
        <div className="d-flex justify-content-center aligh-items-center vh-100 bg-light">
            <div className="card p-4 shadow rounded" style={{width:'100%' ,  maxWidth:'400px'}}>
                <form onSubmit={handleSubmit} className="container mt-4">
                  <h2 className="text-center mb-3">Registro</h2>
                  <input type="name" name="name" placeholder="Nombre" onChange={handleChange} className="form-control mb-2" required />
                  <input type="email" name="email" placeholder="Correo electronico" onChange={handleChange} className="form-control mb-2" required />
                  <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} className="form-control mb-2" required />
                  <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" onChange={handleChange} className="form-control mb-2" required />
                  <button type="submit" className='btn btn-primary'>Registrarse</button>
                </form>
            </div>
        </div>

    )
}