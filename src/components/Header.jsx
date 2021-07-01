import React from 'react';
import flecha from '../assets/img/icons/flecha.svg'
import menuHamburguesa from '../assets/img/icons/menu_hamburguesa.svg'
import userPic from '../assets/img/88838.jpg';
import { makeStyles } from '@material-ui/core/styles';


/* const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
    },
},
})); */

function handleClick(event) {
event.preventDefault();
console.info('You clicked a breadcrumb.');
}   

export default class Header extends React.Component {
    
    render() {
/*         const classes = useStyles(); */
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
            </div>
        </div>
    }
}
