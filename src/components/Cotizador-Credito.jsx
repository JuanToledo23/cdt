import React from 'react';
import { Link } from "react-router-dom";

import ir from '../assets/img/icons/ir.svg';
import flecha_arriba from '../assets/img/icons/flecha_arriba.svg';
import ir_blanco from '../assets/img/icons/ir_blanco.svg';
import agregar from '../assets/img/icons/agregar.svg';
import restar from '../assets/img/icons/restar.svg';
import eliminar from '../assets/img/icons/eliminar.svg';

import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';


export default class CotizadorCredito extends React.Component {

    constructor(props) {
        super(props);
        this.cambioSemanas = this.cambioSemanas.bind(this);
        this.state = {
            semanas: [
                { id: 0, semanas: 13, estatus: false },
                { id: 1, semanas: 20, estatus: false },
                { id: 2, semanas: 39, estatus: false },
                { id: 3, semanas: 52, estatus: false },
                { id: 4, semanas: 60, estatus: false },
                { id: 5, semanas: 80, estatus: false },
                { id: 6, semanas: 100, estatus: false },
                { id: 7, semanas: 110, estatus: false },
                { id: 8, semanas: 120, estatus: false },
            ],
            periocidad: '',
            listaProductos: [
                { id: 0, nombre: 'LED 60 VIZIO SMART E60. C3', sku: '1003487', precio: '3,999', ahorro: '20', pagoSemanal: '55', cantidad: 1 },
                { id: 1, nombre: 'DVD', sku: '100544131', precio: '1,500', ahorro: '', pagoSemanal: '35', cantidad: 2 },
            ],
            dialogSeguro: false,
            tipoPlanSeguro: ''
        }
    }

    handleClickOpen = () => {
        this.setState({dialogSeguro: true});
    };
    
    handleClose = (e) => {
        this.setState({dialogSeguro: false});
    };
    handleRadiosDialog = (e) => {
        switch (e.target.id) {
            case 'radio1':
                    this.setState({tipoPlanSeguro: '10'});
                break;
            case 'radio2':
                    this.setState({tipoPlanSeguro: '15'});
                break;
            case 'radio3':
                    this.setState({tipoPlanSeguro: '20'});
                break;
            case 'radio4':
                    this.setState({tipoPlanSeguro: '25'});
                break;
            case 'radio5':
                    this.setState({tipoPlanSeguro: '30'});
                break;
        
            default:
                break;
        }
    };
    adquirirSeguro = () => {
        this.state.listaProductos.push(
            { id: this.state.listaProductos.length + 1, nombre: 'Seguro Vidamax', sku: '1005441', precio: this.state.tipoPlanSeguro, ahorro: '', pagoSemanal: this.state.tipoPlanSeguro, cantidad: 1 }
        );
        this.setState({listaProductos: this.state.listaProductos});
    };

    cambioSemanas(e) {
        this.state.semanas.forEach(element => {
            element.estatus = false;
        });
        e.estatus = true;
        this.setState({semanas: this.state.semanas})
    }

    handleChange = (event) => {
        this.setState({periocidad: event.target.value})
    };

    sumar(producto) {
        producto.cantidad++;
        this.setState({listaProductos: this.state.listaProductos});
    }
    
    restar(producto) {
        if(producto.cantidad !== 0){
            producto.cantidad--;
            this.setState({listaProductos: this.state.listaProductos});
        }
    }

    eliminarProducto(producto) {
        this.state.listaProductos.splice(this.state.listaProductos.indexOf(producto), 1);
        this.setState({listaProductos: this.state.listaProductos});
    }

    render() {
        return <div>
            <div className="contenedor-cotizador">
                <div className="u-flex-end">
                    <Button variant="contained" className="btn-secundario" style={{width: "189px"}} disableElevation onClick={this.handleClose}>
                        Cambiar cliente
                        <img src={ir} className="logo-ir"/>
                    </Button>
                </div>
                <div className="titulo">Cotizador crédito</div>
                <div className="u-flex u-justify-between">
                    <div style={{width:"70%", marginRight:"1%"}}>
                        <div className="contenido-gris">
                            <div className="semanas">
                                <div className="u-flex-between">
                                    <div className="u-circulo u-flex-center u-cursor-pointer">
                                        <img src={flecha_arriba} className="logo-acordion"/>
                                    </div>
                                    <div className="titulo-contenido ">¿En cuántas semanas se lleva el crédito?</div>
                                    <div className="u-link u-cursor-pointer">Limpiar</div>
                                </div>
                            </div>
                            <div className="u-flex-center u-mt-1">
                                <div className="u-flex-between" style={{width: "461px"}}>
                                    {
                                        this.state.semanas.map(semana => {
                                            return (
                                                <div key={semana.id} className={`u-circulo-semanas u-flex-center u-cursor-pointer ${semana.estatus ? 'semana-activa' : ''}`} onClick={() => this.cambioSemanas(semana)}>{semana.semanas}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="periocidadAjustar u-flex-between u-mt-2">
                                <div className="periocidad">
                                    <div className="u-flex-center u-fz-18 u-txt-medium">Periodicidad:</div>
                                    <div className="input">
                                        <div className="input-bracket input-bracket--100">
                                            {/* <input type="text" className="input-bracket__cotizador" placeholder=""/> */}
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.periocidad}
                                            onChange={this.handleChange}
                                            className="cotizador-select"
                                            >
                                                <MenuItem value={10}>Semanal</MenuItem>
                                                <MenuItem value={20}>Quincenal</MenuItem>
                                                <MenuItem value={30}>Mensual</MenuItem>
                                            </Select>
                                        </div> 
                                    </div>
                                </div>
                                <div className="ajustar">
                                    <div className="u-flex-center u-fz-18 u-txt-medium">Ajustar el enganche:</div>
                                    <div className="u-flex-baseline">
                                        <div className="input">  
                                            <div className="input-bracket input-bracket--100">
                                                <input type="text" className="input-bracket__cotizador" placeholder="" defaultValue="$1,000"/>
                                            </div> 
                                        </div>
                                        <div style={{padding: "0px 20px"}}>ó</div>
                                        <div className="input">
                                            <div className="input-bracket input-bracket--100">
                                                <input type="text" className="input-bracket__cotizador" placeholder="" defaultValue="10%"/>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="u-flex-between u-mt-1">
                            <div className="u-fz-22 u-txt-medium" style={{paddingLeft: "26px"}}>Resumen de venta</div>
                            <Button variant="contained" className="btn-primario" style={{width: "189px"}} disableElevation onClick={this.handleClickOpen}>
                                Agregar seguro
                                <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                            </Button>
                        </div>
                        <div className="resumen-venta u-mt-1">
                            <div className="titulos-resumen">
                                <div>Descripción</div>
                                <div>Precio</div>
                                <div>Cantidad</div>
                            </div>
                            <div className="lista-productos">
                                {
                                    this.state.listaProductos.map(producto => {
                                        return (
                                            <div key={producto.id} className="producto">
                                                <div className="u-txt-medium u-fz-15">
                                                    <div>{producto.nombre}</div>
                                                    <div>SKU: {producto.sku}</div>
                                                </div>
                                                <div>
                                                    <div className="u-fz-16 strong2">${producto.precio}</div>
                                                    { producto.ahorro ? <div className="texto-ahorro ">Ahorro del {producto.ahorro}%</div> : null}
                                                    <div className="texto-acredito strong2" style={{marginTop: "10px"}}>A Crédito</div>
                                                    <div className="u-fz-16">${producto.pagoSemanal} semanales</div>
                                                </div>
                                                <div>
                                                    <div className="u-flex-center ">
                                                        <div className="contador-cantidad u-flex-center">
                                                            <img src={restar} alt="flecha" className="icono-restar" onClick={() => this.restar(producto)}/>
                                                            <div style={{padding:"0px 12px"}}>{producto.cantidad}</div>
                                                            <img src={agregar} alt="flecha" className="icono-sumar" onClick={() => this.sumar(producto)}/>
                                                        </div>
                                                        <div style={{paddingLeft:"30px"}}>
                                                            <img src={eliminar} alt="Eliminar" className="icono-eliminar" onClick={() => this.eliminarProducto(producto)}/>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="subtotal u-flex-end">
                                <strong className="texto-subtotal u-fz-18">
                                    Subtotal:
                                </strong>
                                <span className="u-fz-18" style={{marginLeft: "20px"}}>$5,529</span>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"30%"}}>
                        <div className="detalle-pago u-txt-medium">
                            <div className="u-flex-center u-fz-16 bg-gris">Detalles de pago</div>
                            <div className="u-flex-between pad-14">
                                <span>Total de artículos</span>
                                <span>3</span>
                            </div>
                            <div className="u-flex-between pad-14 bg-gris">
                                <span>Crédito</span>
                                <span></span>
                            </div>
                            <div className="u-flex-between pad-26">
                                <span>Pago normal</span>
                                <span>$173</span>
                            </div>
                            <div className="u-flex-between pad-26 bg-verde">
                                <span>Pago puntual</span>
                                <span>$132</span>
                            </div>
                            <div className="u-flex-between pad-26">
                                <span>Pago digital</span>
                                <span>$125</span>
                            </div>
                            <div className="u-flex-between pad-26">
                                <span>Plazo</span>
                                <span>52 semanas</span>
                            </div>
                            <div className="u-flex-between pad-26 bg-gris">
                                <span>Enganche requerido</span>
                                <span>$1,000</span>
                            </div>
                            <div className="u-flex-between pad-26">
                                <span>Total venta</span>
                                <span>$5,529</span>
                            </div>
                            <div className="u-flex-center pad-19">
                                <Link to={'/generar-presupuesto'}>
                                    <Button variant="contained" className="btn-primario" style={{width: "234px"}} disableElevation>
                                        Generación de presupuesto
                                        <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                open={this.state.dialogSeguro}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
                <div className="dialog-contenido">
                    <div className="u-mt-1 contenido-dialog" style={{width: "750px"}}>
                        <div className="u-fz-23 u-txt-center u-txt-medium">Seguro Nuevo Vidamax</div>
                        <div className="u-txt-center u-mt-1 u-fz-18">
                            Elige el plan que más se adecue a tus necesidades.
                        </div>
                        <div className="u-mt-1 u-fz-18 u-txt-medium">
                            En este momento tu cliente puede adquirir el <span className="u-txt-limon">Seguro Nuevo Vidamax</span> <strong>para proteger a su familia</strong> en caso de que llegue a faltar. Comunícale las coberturas que incluye y selecciona el plan que se ajuste a sus necesidades.
                        </div>
                    </div>
                    <div className="u-mt-1 u-fz-20 u-txt-medium tipo-plan">
                        <strong>Tipo de plan</strong>
                    </div>
                    <div className="u-mt-1 contenido-dialog" style={{width: "750px"}}>
                        <div className="u-flex-between u-mt-2">
                            <div className="u-fz-16 u-txt-medium">
                                <input type="radio" name="grupo1" id="radio1" onChange={this.handleRadiosDialog}/>
                                <label htmlFor="radio1" className="radio-wrapper">
                                    <div className="borde-input">
                                        <div className="radio-circulo-2"></div>
                                    </div>
                                    <strong className="radio-label">$10</strong>
                                </label>
                            </div>
                            <div className="u-fz-16 u-txt-medium">
                                <input type="radio" name="grupo1" id="radio2" onChange={this.handleRadiosDialog}/>
                                <label htmlFor="radio2" className="radio-wrapper">
                                    <div className="borde-input">
                                        <div className="radio-circulo-2"></div>
                                    </div>
                                    <strong className="radio-label">$15</strong>
                                </label>
                            </div>
                            <div className="u-fz-16 u-txt-medium">
                                <input type="radio" name="grupo1" id="radio3" onChange={this.handleRadiosDialog}/>
                                <label htmlFor="radio3" className="radio-wrapper">
                                    <div className="borde-input">
                                        <div className="radio-circulo-2"></div>
                                    </div>
                                    <strong className="radio-label">$20</strong>
                                </label>
                            </div>
                            <div className="u-fz-16 u-txt-medium">
                                <input type="radio" name="grupo1" id="radio4" onChange={this.handleRadiosDialog}/>
                                <label htmlFor="radio4" className="radio-wrapper">
                                    <div className="borde-input">
                                        <div className="radio-circulo-2"></div>
                                    </div>
                                    <strong className="radio-label">$25</strong>
                                </label>
                            </div>
                            <div className="u-fz-16 u-txt-medium">
                                <input type="radio" name="grupo1" id="radio5" onChange={this.handleRadiosDialog}/>
                                <label htmlFor="radio5" className="radio-wrapper">
                                    <div className="borde-input">
                                        <div className="radio-circulo-2"></div>
                                    </div>
                                    <strong className="radio-label">$30</strong>
                                </label>
                            </div>
                        </div>
                        <div className="contenido-gris u-mt-2">
                            <div className="u-fz-19">En caso de fallecimiento, tu plan cubre:</div>
                            <div className="u-fz-18 u-mt-2 u-position-r" style={{padding: "0px 87px"}}>
                                <div className="list-dot"></div>
                                <strong>Servicio funcionario sin costo:</strong>
                                <div>Asesoría jurídica testamentaria vía telefónica, gestión de trámites, recolección y arreglo estético del cuerpo, sala de velación, inhumación o cremación de tanatología.</div>
                            </div>
                            <div className="u-fz-18 u-mt-2 u-position-r" style={{padding: "0px 87px"}}>
                                <div className="list-dot"></div>
                                <strong>Beneficio económico para su familia, el cual se duplicará en caso de fallecimiento accidental.</strong>
                            </div>
                            <div className="u-fz-18 u-mt-2 u-position-r" style={{padding: "0px 87px"}}>
                                <div className="list-dot"></div>
                                <strong>El pago de la deuda de la línea de Crédito con Banco Azteca.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="u-mt-1 u-fz-20 u-txt-medium tipo-plan">
                        <strong>Beneficiario económico para su familia:</strong>
                    </div>
                    <div className="u-mt-1 contenido-dialog u-flex-center" style={{width: "750px"}}>
                        <div className="contenedor-muerte u-fz-17">Muerte natural: <strong>$20,000</strong></div>
                        <div className="contenedor-muerte u-fz-17 u-ml-2">Muerte accidental: <strong>$40,000</strong></div>
                    </div>
                    <div className="u-flex-center u-pad-actions u-mt-2">
                        <div className="u-link">No gracias</div>
                        <Button variant="contained" className="btn-primario u-ml-2" style={{width: "189px"}} disableElevation onClick={this.adquirirSeguro}>
                            Adquirir Seguro
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>

            </Dialog>
        </div>
    }
}

