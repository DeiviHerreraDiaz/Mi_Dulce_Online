import React, {useState} from "react";
import {Link, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios'


function Compra(props) {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedProductId = queryParams.get("productId");

    const [inputData, setInputData] = useState({
        Nombre: '',
        Apellido: '',
        Correo: '',
        Telefono: '',
        Región: '',
        Dirección: '', 
        id_producto: selectedProductId,
    })

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            await axios.post('http://localhost:3040/Venta', inputData);
            alert('Muchas gracias por su confianza con nuestros servicios, muy pronto estara su pedido');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return(
                <div className="register-page">
                <div className="register-box">
                    <div className="register-logo">
                        <Link to={"#"}><b>Realizar Compra</b></Link>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Ingresa tus datos</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row mb-3">
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" id="Nombre" name="Nombre" onChange={e => setInputData({ ...inputData, Nombre: e.target.value })} placeholder="Nombre" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>

                      
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" id="Apellido" name="Apellido" onChange={e => setInputData({ ...inputData, Apellido: e.target.value })} placeholder="Apellido" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group col-md-6 ">
                                        <input type="email" className="form-control" id="Correo" name="Correo" onChange={e => setInputData({ ...inputData, Correo: e.target.value })} placeholder="Correo" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="input-group col-md-6">
                                        <input type="number" className="form-control" id="Telefono" name="Telefono" onChange={e => setInputData({ ...inputData, Telefono: e.target.value })} placeholder="Telefono" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-mobile" aria-hidden="true"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" id="Región" name="Región" onChange={e => setInputData({ ...inputData, Región: e.target.value })} placeholder="Región" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-mobile" aria-hidden="true"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" id="Dirección" onChange={e => setInputData({ ...inputData, Dirección: e.target.value })} name="Dirección" placeholder="Dirección" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-mobile" aria-hidden="true"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="row">
                                    <div className="col-7">
                                        <Link to={"/"} className="text-center">Atrás</Link>
                                    </div>
                            {/* /.col */}
                                    <div className="col-5">
                                        <button type="submit" className="btn btn-secondary btn-block">Comprar</button>
                                    </div>
                            {/* /.col */}
                                </div>
                            </form>
                        
                        </div>
                        {/* /.form-box */}
                    </div>{/* /.card */}
                </div>
            </div>
    )
}

export default Compra