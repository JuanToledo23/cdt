import React from 'react';
import flecha from '../assets/img/icons/flecha.svg'
import menuHamburguesa from '../assets/img/icons/menu_hamburguesa.svg'
import userPic from '../assets/img/88838.jpg';

export default class Header extends React.Component {
    render() {
        return <div>
            <div className="shadow u-bg-b">
                <div className="u-flex-between contenedor-header u-flex-center-y">
                    <div className="controles">
                        <img src={menuHamburguesa} alt="Menu" className="menu-hamburguesa"/>
                        <img src={flecha} alt="logo" className="flecha-izquierda"/>
                        <img src={flecha} alt="logo" className="flecha-derecha"/>
                    </div>
                    <div className="titulo-header">
                        <span className="verde">C</span>
                        <span className="rojo">D</span>
                        <span className="verde">T</span>
                    </div>
                    <div className="u-flex-between">
                        <div className="informacion">
                            <div><span className="texto-nombre">Daniel Rivera Campos</span><span className="texto-asesor">Asesor</span></div>
                            <div className="texto-sucursal">Sucursal 7447</div>
                            <div className="texto-fecha">Miércoles 18 de noviembre del 2020</div>
                        </div>
                        <div className="user-pic" style={{ backgroundImage: `url(${userPic})` }}></div>
                    </div>
                </div>
                <div className="contenedor-titulo u-flex-center-y">
                    <div>Busqueda de cliente</div>
                </div>
            </div>
        </div>
    }
}
