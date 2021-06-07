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

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


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
            alertaCredito: false
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
        this.setState({alertaCredito: true});
    };
    
    handleCloseAlertaCredito = () => {
        this.setState({alertaCredito: false});
    };
    
    handleChange = (event) => {
        // setValue(event.target.value);
        this.setState({compartir: event.target.value});
    };

    render() {
        return <div>
            <div className="contenedor-cotizador">
                <div className="titulo">Generar presupuesto</div>
                <div className="bg-gris u-mt-1" style={{padding: "21px"}}>
                    <div className="u-flex-between u-fz-18 u-txt-medium">
                        <div>Presupuesto: 8444871</div>
                        <div className="u-link">Salir</div>
                    </div>
                    <div className="u-fz-18">Enganche a pagar: $1,000</div>
                    <div className="productos">
                        <table className="tabla-basica u-mt-1">
                            <tr>
                                <th>Cantidad</th>
                                <th className="u-txt-left">SKU</th>
                                <th className="u-txt-left">Producto</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                                <th>Pago puntual</th>
                                <th>Total</th>
                            </tr>
                            {
                                this.state.productos.map(producto => {
                                    return (
                                        <tr key={producto.id}>
                                            <th>{producto.cantidad}</th>
                                            <th className="u-txt-left">{producto.sku}</th>
                                            <th className="u-txt-left">{producto.producto}</th>
                                            <th>{producto.precio}</th>
                                            <th>{producto.descuento}</th>
                                            <th>{producto.pagoPuntual}</th>
                                            <th className="u-txt-right">{producto.total}</th>
                                        </tr>
                                    )
                                })
                            }
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
                        <div className="u-fz-16 u-txt-medium u-desac">
                            <input type="radio" name="grupo1" id="radio1"/>
                            <label htmlFor="radio1" className="radio-wrapper">
                                <div className="borde-input">
                                    <div className="radio-circulo"></div>
                                </div>
                                <img src={whatsapp} alt="logo" className="logo-radio"/>
                                <span className="radio-label">WhatsApp</span>
                            </label>
                        </div>
                        <div className="u-fz-16 u-txt-medium u-desac">
                            <input type="radio" name="grupo1" id="radio2"/>
                            <label htmlFor="radio2" className="radio-wrapper">
                                <div className="borde-input">
                                    <div className="radio-circulo"></div>
                                </div>
                                <img src={sms} alt="logo" className="logo-radio"/>
                                <span className="radio-label">SMS</span>
                            </label>
                        </div>
                        <div className="u-fz-16 u-txt-medium u-desac">
                            <input type="radio" name="grupo1" id="radio3"/>
                            <label htmlFor="radio3" className="radio-wrapper">
                                <div className="borde-input">
                                    <div className="radio-circulo"></div>
                                </div>
                                <img src={mail} alt="logo" className="logo-radio"/>
                                <span className="radio-label">Correo</span>
                            </label>
                        </div>
                        <div className="u-fz-16 u-txt-medium">
                            <input type="radio" name="grupo1" id="radio4"/>
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
                        <Button variant="contained" className="btn-primario" style={{width: "172px"}} disableElevation onClick={this.handleClickOpenConfirmacionImpresion}>
                            Enviar
                            <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                        </Button>
                    </div>
                </div>
            </Dialog>

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
        </div>
    }
}

