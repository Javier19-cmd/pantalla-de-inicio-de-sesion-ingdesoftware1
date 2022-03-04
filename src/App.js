import React, { Component } from 'react'; //Se importa react y un componente.
import logo from './logo.svg';
import './App.css';

class App extends Component {
   render(){
     return (
       <div className="App">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Supermercado.jpg" /> {/*Imágen*/}
          <svg> {/*Rectángulo blanco*/}
            <rect/>
          </svg>
          <p className="Bienvenido">¡Bienvenido de vuelta!</p>
          <p className="Cred">Ingresa tus credenciales</p>
          <input className="Input1"/> {/*Input del email*/}
          <p className="User">Ingrese el email</p> {/*Texto para pedir el email*/}
          <input className="Input2" type="password"/> {/*Input de la contraseña*/}
          <p className="Pas">Ingrese la contraseña</p> {/*Texto para pedir la contraseña*/}
          <a className="Olvido" href="https://cybmeta.com/cambiar-el-color-del-texto-seleccionado-con-css">¿Olvidó la contraseña?</a> {/*Texto de que olvidó la contraseña*/}
          <button className="Inicio"/>
          <p className = "Inic">Iniciar sesión</p>
       </div>
     );
   }
}

export default App;
