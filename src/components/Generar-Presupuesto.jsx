import React from 'react';

import ir from '../assets/img/icons/ir.svg';
import ir_blanco from '../assets/img/icons/ir_blanco.svg';
import cerrar from '../assets/img/icons/cerrar.svg';
import mail from '../assets/img/icons/mail.svg';
import print from '../assets/img/icons/print.svg';
import sms from '../assets/img/icons/sms.svg';
import whatsapp from '../assets/img/icons/whatsapp.svg';
import imprimiendo from '../assets/img/icons/imprimiendo.svg';
import aviso from '../assets/img/icons/aviso.svg';
import lapiz from '../assets/img/icons/lapiz.svg';
import check from '../assets/img/icons/check.svg';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';

import DatosGlobales from './context/ContextData';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from "react-router-dom";

export default class GenerarPresupuesto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: [
                { id: 0, cantidad: 1, sku: 1005441, producto: 'Pantalla  LED', precio: '$4,999', descuento: '$1,000', pagoPuntual: '$47', total: '$3,999' },
                { id: 1, cantidad: 1, sku: 100544131, producto: 'DVD', precio: '$1,500', descuento: '$0', pagoPuntual: '$35', total: '$1,500' },
                { id: 2, cantidad: 1, sku: 100544132, producto: 'Barra Sonido', precio: '$1,100', descuento: '$0', pagoPuntual: '$22', total: '$1,100' },
                { id: 3, cantidad: 1, sku: 10054413, producto: 'Cable HDMI', precio: '$300', descuento: '$0', pagoPuntual: '$20', total: '$30' },
                { id: 4, cantidad: 3, sku: 10054410, producto: 'Seguro Vidamax', precio: '$30', descuento: '$0', pagoPuntual: '$30', total: '$30' },
            ],
            compartir: '',
            compartirPresupuesto: false,
            confirmacionImpresion: false,
            alertaCredito: false,
            tipoCompartir: '',
            dialogWhatsApp: false,
            check1: false,
            check2: false,
            check3: false,
            dialogSMS: false,
            dialogCorreo: false,
            envioExitoso: false
        }
    }

    handleClickOpenCompartirPresupuesto = () => {
        this.setState({compartirPresupuesto: true});
    };
    
    handleCloseCompartirPresupuesto = () => {
        this.setState({compartirPresupuesto: false});
    };

    handleClickOpenConfirmacionImpresion = () => {
        this.setState({compartirPresupuesto: false});
        this.setState({confirmacionImpresion: true});
    };
    
    handleCloseConfirmacionImpresion = () => {
        this.setState({confirmacionImpresion: false});
    };

    handleClickOpenAlertaCredito = () => {
        this.setState({confirmacionImpresion: false});
        /* this.setState({alertaCredito: true}); */
        this.setState({envioExitoso: true});
    };
    
    handleCloseAlertaCredito = () => {
        this.setState({alertaCredito: false});
    };
    handleClosedialogWhatsApp = () => {
        this.setState({dialogWhatsApp: false});
    };
    handleClosedialogSMS = () => {
        this.setState({dialogSMS: false});
    };
    handleClosedialogCorreo = () => {
        this.setState({dialogCorreo: false});
    };
    handleClosedialogEvioExitoso= () => {
        this.setState({envioExitoso: false});
    };
    
    handleChange = (event) => {
        this.setState({compartir: event.target.value});
    };

    handleClickOpenTieneCredito = () => {
        this.setState({compartirPresupuesto: false});
        switch (this.state.tipoCompartir) {
            case 'whatsapp':
                this.setState({dialogWhatsApp: true});
                break;
            case 'sms':
                this.setState({dialogSMS: true});
                break;
            case 'correo':
                this.setState({dialogCorreo: true});
                break;
            case 'imprimir':
                this.setState({compartirPresupuesto: false});
                this.setState({confirmacionImpresion: true});
                break;
        
            default:
                break;
        }
        // console.log('tiene credito');
    }

    handleRadiosDialog = (e) => {
        switch (e.target.id) {
            case 'radio1':
                    this.setState({tipoCompartir: 'whatsapp'});
                break;
            case 'radio2':
                    this.setState({tipoCompartir: 'sms'});
                break;
            case 'radio3':
                    this.setState({tipoCompartir: 'correo'});
                break;
            case 'radio4':
                    this.setState({tipoCompartir: 'imprimir'});
                break;
        
            default:
                break;
        }
    };

    handleChangeCheck1 = (event) => {
        this.setState({check1: event.target.checked});
    };
    handleChangeCheck2 = (event) => {
        this.setState({check2: event.target.checked});
    };
    handleChangeCheck3 = (event) => {
        this.setState({check3: event.target.checked});
    };

    render() {
        return <div>
                    <div className="contenedor-titulo u-flex-center-y contenedor-b">
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            <Link color="inherit" to={'/'}>
                            Busqueda de cliente
                            </Link>
                            <Link color="inherit" to={'/cotizador-credito'}>
                            Cotizador
                            </Link>
                            <Typography color="textPrimary">Generar presupuesto</Typography>
                        </Breadcrumbs>
                    </div>
            <DatosGlobales.Consumer>
            {data => (
            <div className="contenedor-cotizador">
                <div className="titulo">Generar presupuesto</div>
                <div className="bg-gris u-mt-1" style={{padding: "21px"}}>
                    <div className="u-flex-between u-fz-18 u-txt-medium">
                        <div>Presupuesto: 8444871</div>
                        <div className="u-flex u-align-center">
                            <div className="u-link" style={{marginTop: "5px", marginRight: "8px"}}>Salir</div>
                            <img src={ir} alt="flecha" className="logo-ir"/>
                        </div>
                    </div>
                    <div className="u-fz-18">Enganche a pagar: $1,000</div>
                    <div className="productos">
                        <table className="tabla-basica u-mt-1">
                            <thead>
                                <tr>
                                    <th>Cantidad</th>
                                    <th className="u-txt-left">SKU</th>
                                    <th className="u-txt-left">Producto</th>
                                    <th>Precio</th>
                                    <th>Descuento</th>
                                    <th>Pago puntual</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.productos.map(producto => {
                                        return (
                                            <tr key={producto.id}>
                                                <td>{producto.cantidad}</td>
                                                <td className="u-txt-left">{producto.sku}</td>
                                                <td className="u-txt-left">{producto.producto}</td>
                                                <td>{producto.precio}</td>
                                                <td>{producto.descuento}</td>
                                                <td>{producto.pagoPuntual}</td>
                                                <td className="u-txt-right">{producto.total}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="u-flex-end" style={{padding: "0px 30px", marginTop: "10px"}}>
                            <div className="u-txt-right">
                                Pago puntual: <br/>
                                $132
                            </div>
                            <div className="u-txt-right" style={{width: "168px"}}>
                                Total: <br/>
                                $6,929
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-flex-end u-mt-1">
                    <Button variant="contained" className="btn-primario" style={{width: "234px"}} disableElevation onClick={this.handleClickOpenCompartirPresupuesto}>
                        Enviar presupuesto
                        <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                    </Button>
                </div>
            </div>
            )}
            </DatosGlobales.Consumer>
            <DatosGlobales.Consumer>
            {data => (
            <Dialog
                open={this.state.compartirPresupuesto}
                onClose={this.handleCloseCompartirPresupuesto}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialog-contenido" style={{width: "700px"}}>
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleCloseCompartirPresupuesto}/>
                    </div>
                    <div className="dialog-titulo">
                        <div style={{width: "450px"}}>Compartir Presupuesto</div>
                        <div className="linea-titulo"></div>
                    </div>
                    <div className="u-fz-16 u-txt-medium u-mt-2">Confirma con Griselda García el medio digital para recibir su presupuesto.</div>

                    <div className="u-flex-between u-mt-2">
                        <div className={`u-fz-16 u-txt-medium ${ !data.tieneCredito ? 'u-desac' : ''}`}>
                            <input type="radio" name="grupo1" id="radio1" onChange={this.handleRadiosDialog}/>
                            <label htmlFor="radio1" className="radio-wrapper">
                                <div className="borde-input">
                                    <div className="radio-circulo"></div>
                                </div>
                                <img src={whatsapp} alt="logo" className="logo-radio"/>
                                <span className="radio-label">WhatsApp</span>
                            </label>
                        </div>
                        <div className={`u-fz-16 u-txt-medium ${ !data.tieneCredito ? 'u-desac' : ''}`}>
                            <input type="radio" name="grupo1" id="radio2" onChange={this.handleRadiosDialog}/>
                            <label htmlFor="radio2" className="radio-wrapper">
                                <div className="borde-input">
                                    <div className="radio-circulo"></div>
                                </div>
                                <img src={sms} alt="logo" className="logo-radio"/>
                                <span className="radio-label">SMS</span>
                            </label>
                        </div>
                        <div className={`u-fz-16 u-txt-medium ${ !data.tieneCredito ? 'u-desac' : ''}`}>
                            <input type="radio" name="grupo1" id="radio3" onChange={this.handleRadiosDialog}/>
                            <label htmlFor="radio3" className="radio-wrapper">
                                <div className="borde-input">
                                    <div className="radio-circulo"></div>
                                </div>
                                <img src={mail} alt="logo" className="logo-radio"/>
                                <span className="radio-label">Correo</span>
                            </label>
                        </div>
                        <div className="u-fz-16 u-txt-medium">
                            <input type="radio" name="grupo1" id="radio4" onChange={this.handleRadiosDialog}/>
                            <label htmlFor="radio4" className="radio-wrapper">
                                <div className="borde-input">
                                    <div className="radio-circulo"></div>
                                </div>
                                <img src={print} alt="logo" className="logo-radio"/>
                                <span className="radio-label">Imprimir</span>
                            </label>
                        </div>
                    </div>

                    <div className="u-flex-end u-mt-4">
                        { !data.tieneCredito ? <Button variant="contained" className="btn-primario" style={{width: "172px"}} disableElevation onClick={this.handleClickOpenConfirmacionImpresion}>
                            Enviar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button> : null }
                        { data.tieneCredito ? <Button variant="contained" className="btn-primario" style={{width: "172px"}} disableElevation onClick={this.handleClickOpenTieneCredito}>
                            Enviar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button> : null }
                    </div>
                </div>
            </Dialog>
            )}
            </DatosGlobales.Consumer>
            <DatosGlobales.Consumer>
            {data => (
            <Dialog
                open={this.state.confirmacionImpresion}
                onClose={this.handleCloseConfirmacionImpresion}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialog-contenido" style={{width: "515px"}}>
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleClose}/>
                    </div>
                    <div className="dialog-titulo">
                        <div style={{width: "730px"}}>Confirmación de impresión</div>
                        <div className="linea-titulo"></div>
                    </div>
                    <div className="u-flex-column-center u-align-center u-mt-2">
                        <img src={imprimiendo} className="logo-principal-dialog"/>
                        <div className="u-mt-4 u-txt-center u-fz-22 u-txt-medium">¿Los documentos se <br/> imprimieron correctamente?</div>
                    </div>
                    <div className="u-flex-between u-mt-4">
                        <Button variant="contained" className="btn-secundario" style={{width: "189px"}} disableElevation onClick={this.handleCloseConfirmacionImpresion}>
                            No, reimprimir
                            <img src={ir} alt="flecha" className="logo-ir"/>
                        </Button>
                        <Button variant="contained" className="btn-primario" style={{width: "189px"}} disableElevation onClick={this.handleClickOpenAlertaCredito}>
                            Sí, continuar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>
            </Dialog>
             )}
             </DatosGlobales.Consumer>
             <DatosGlobales.Consumer>
            {data => (
            <Dialog
                open={this.state.alertaCredito}
                onClose={this.handleCloseAlertaCredito}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialog-contenido" style={{width: "515px"}}>
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleClose}/>
                    </div>
                    <div className="u-flex-column-center u-align-center u-mt-2">
                        <img src={aviso} className="logo-principal-dialog"/>
                        <div className="u-mt-3 u-txt-center u-fz-22 u-txt-medium">
                        Para poder realizar ésta compra es <br/> necesario que tu cliente cuente con <br/> línea de crédito.
                        </div>
                    </div>
                    <div className="u-flex-between u-mt-4">
                        <Button variant="contained" className="btn-secundario" style={{width: "189px"}} disableElevation onClick={this.handleCloseAlertaCredito}>
                            Cerrar
                            <img src={ir} alt="flecha" className="logo-ir"/>
                        </Button>
                        <Button variant="contained" className="btn-primario" style={{width: "189px"}} disableElevation onClick={this.handleCloseAlertaCredito}>
                            Originación de crédito
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>
            </Dialog>
            )}
            </DatosGlobales.Consumer>
            
            <Dialog
                open={this.state.dialogWhatsApp}
                onClose={this.handleClosedialogWhatsApp}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialog-contenido" style={{width: "740px"}}>
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleClosedialogWhatsApp}/>
                    </div>
                    <div className="dialog-titulo">
                        <div style={{width: "530px"}}>Compartido por WhatsApp</div>
                        <div className="linea-titulo"></div>
                    </div>
                    <div className="row u-mt-1">
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Nombre"/>
                                </div> 
                            </div>
                            <div className="u-fz-14 u-txt-medium" style={{marginTop: "8px"}}>Nombre</div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Apellido paterno"/>
                                </div> 
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "8px"}}>
                                <Checkbox
                                    checked={this.state.check1}
                                    onChange={this.handleChangeCheck1}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Solo apellido paterno</div>
                            </div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Apellido materno"/>
                                </div> 
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "8px"}}>
                                <Checkbox
                                    checked={this.state.check2}
                                    onChange={this.handleChangeCheck2}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Solo apellido materno</div>
                            </div>
                        </div>
                    </div>
                    <div className="row u-mt-2">
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Teléfono celular"/>
                                </div> 
                            </div>
                            <div className="u-fz-14 u-txt-medium" style={{marginTop: "8px"}}>Teléfono celular (10 dígitos)</div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div>
                                <img src={lapiz} className="logo-lapiz" />
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "12px"}}>
                                <Checkbox
                                    checked={this.state.check3}
                                    onChange={this.handleChangeCheck3}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Contacto secundario</div>
                            </div>
                        </div>
                    </div>
                    <div className="u-flex-end u-mt-4">
                        <div className="u-link">Enviar por otro medio</div>
                        <Button variant="contained" className="btn-primario u-ml-2" style={{width: "189px"}} disableElevation>
                            Enviar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>
            </Dialog>

            <Dialog
                open={this.state.dialogSMS}
                onClose={this.handleClosedialogSMS}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialog-contenido" style={{width: "740px"}}>
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleClosedialogSMS}/>
                    </div>
                    <div className="dialog-titulo">
                        <div style={{width: "530px"}}>Compartido por SMS</div>
                        <div className="linea-titulo"></div>
                    </div>
                    <div className="row u-mt-1">
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Nombre"/>
                                </div> 
                            </div>
                            <div className="u-fz-14 u-txt-medium" style={{marginTop: "8px"}}>Nombre</div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Apellido paterno"/>
                                </div> 
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "8px"}}>
                                <Checkbox
                                    checked={this.state.check1}
                                    onChange={this.handleChangeCheck1}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Solo apellido paterno</div>
                            </div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Apellido materno"/>
                                </div> 
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "8px"}}>
                                <Checkbox
                                    checked={this.state.check2}
                                    onChange={this.handleChangeCheck2}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Solo apellido materno</div>
                            </div>
                        </div>
                    </div>
                    <div className="row u-mt-2">
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Teléfono celular"/>
                                </div> 
                            </div>
                            <div className="u-fz-14 u-txt-medium" style={{marginTop: "8px"}}>Teléfono celular (10 dígitos)</div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div>
                                <img src={lapiz} className="logo-lapiz" />
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "12px"}}>
                                <Checkbox
                                    checked={this.state.check3}
                                    onChange={this.handleChangeCheck3}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Contacto secundario</div>
                            </div>
                        </div>
                    </div>
                    <div className="u-flex-end u-mt-4">
                        <div className="u-link">Enviar por otro medio</div>
                        <Button variant="contained" className="btn-primario u-ml-2" style={{width: "189px"}} disableElevation>
                            Enviar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>
            </Dialog>

            <Dialog
                open={this.state.dialogCorreo}
                onClose={this.handleClosedialogCorreo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialog-contenido" style={{width: "740px"}}>
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleClosedialogCorreo}/>
                    </div>
                    <div className="dialog-titulo">
                        <div style={{width: "800px"}}>Compartido por correo electrónico</div>
                        <div className="linea-titulo"></div>
                    </div>
                    <div className="row u-mt-1">
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Nombre"/>
                                </div> 
                            </div>
                            <div className="u-fz-14 u-txt-medium" style={{marginTop: "8px"}}>Nombre</div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Apellido paterno"/>
                                </div> 
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "8px"}}>
                                <Checkbox
                                    checked={this.state.check1}
                                    onChange={this.handleChangeCheck1}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Solo apellido paterno</div>
                            </div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Apellido materno"/>
                                </div> 
                            </div>
                            <div className="u-flex u-align-center" style={{marginTop: "8px"}}>
                                <Checkbox
                                    checked={this.state.check2}
                                    onChange={this.handleChangeCheck2}
                                    className="custom-check"
                                />
                                <div className="u-fz-14 u-txt-medium">Solo apellido materno</div>
                            </div>
                        </div>
                    </div>
                    <div className="row u-mt-2">
                        <div className="col-8" style={{padding: "10px"}}>
                            <div className="input">
                                <div className="input-bracket input-bracket--100">
                                    <input type="text" className="input-bracket__input-2" placeholder="Correo electrónico"/>
                                </div> 
                            </div>
                            <div className="u-fz-14 u-txt-medium" style={{marginTop: "8px"}}>ej.nombre@correo.com</div>
                        </div>
                        <div className="col-4" style={{padding: "10px"}}>
                            <div>
                                <img src={lapiz} className="logo-lapiz" />
                            </div>

                        </div>
                    </div>
                    <div className="u-flex-end u-mt-4">
                        <div className="u-link">Enviar por otro medio</div>
                        <Button variant="contained" className="btn-primario u-ml-2" style={{width: "189px"}} disableElevation>
                            Enviar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>
            </Dialog>

            <Dialog
                open={this.state.envioExitoso}
                onClose={this.handleClosedialogEvioExitoso}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialog-contenido" style={{width: "515px"}}>
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleClosedialogEvioExitoso}/>
                    </div>
                    <div className="u-flex-column-center u-align-center u-mt-1">
                        <img src={check} className="logo-principal-dialog"/>
                        <strong className="u-mt-4 u-txt-center u-fz-22 u-txt-medium">Envío de presupuesto exitoso</strong>
                        <br/><br/>
                        <div>El presupuesto <strong>8444871</strong> fue enviado correctamente.</div>
                    </div>
                    <div className="u-flex-center u-mt-4">
                        <div className="u-link u-cursor-pointer u-mr-2" onClick={this.handleClosedialogEvioExitoso}>Enviar por otro medio</div>
                        <Button variant="contained" className="btn-primario" style={{width: "189px"}} disableElevation onClick={this.handleClosedialogEvioExitoso}>
                            Continuar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    }
}

