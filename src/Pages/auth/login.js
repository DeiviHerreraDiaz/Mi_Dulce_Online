import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3040/Tienda";
const cookies = new Cookies();

const Login = () => {
  const [form, setForm] = useState({
    Nombre: '',
    Password: ''
  });

 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const iniciarSesion = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          Nombre: form.Nombre,
          Password: form.Password
        }
      });

      console.log("Datos enviados:", form);
      console.log("Respuesta del servidor:", response.data);

      if (response.data.length > 0) {
        var respuesta = response.data[0];
        cookies.set('id', respuesta.id, { path: "/" });
        cookies.set('Nombre', respuesta.Nombre, { path: "/" });
        cookies.set('Password', respuesta.Password, { path: "/" });

        alert(`Bienvenido ${respuesta.Nombre}`);

        window.location.href = "/home";
      } else {
        alert('El usuario o la contraseña no son correctos');
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log('id' + cookies.get('id'));
  console.log('nombre' + cookies.get('Nombre'));
  console.log('Contraseña' + cookies.get('Password'));

  return (
    <div className="register-page">
      <div className="login-box">

        

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">¡Bienvenido! Inicia sesión para empezar</p>

            <form>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="Nombre" name="Nombre" onChange={handleChange} placeholder="Usuario" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="password" className="form-control" id="Password" name="Password" onChange={handleChange} placeholder="Contraseña" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <p className="mb-0">
                    <Link to={"/register"} >Registro Tienda</Link>
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-secondary btn-block" onClick={iniciarSesion}>Iniciar</button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
