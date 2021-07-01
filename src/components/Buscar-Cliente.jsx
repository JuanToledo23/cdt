// import MaterialUIPickers from './ui-material/MaterialUIPickers';

import React from 'react';
import 'date-fns';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from "react-router-dom";

import buscar from '../assets/img/icons/buscar.svg';
import agregar from '../assets/img/icons/agregar.svg';
import check from '../assets/img/icons/check.svg';
import cerrar from '../assets/img/icons/cerrar.svg';
import ir from '../assets/img/icons/ir.svg';
import ir_blanco from '../assets/img/icons/ir_blanco.svg';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DatosGlobales from './context/ContextData';
import DatosCliente from './Datos-Cliente';

export default class BuscarCliente extends React.Component {

    constructor(props) {
        super(props);
        this.cambioOpcion = this.cambioOpcion.bind(this);
        this.state = {
            tipos: [
                {id: 0, nombre: 'Por Cliente Único', estatus: true },
                {id: 1, nombre: 'Por nombre', estatus: false },
                {id: 2, nombre: 'Cotización anónima', estatus: false },
            ],
            clienteUnicoRFC: '',
            clientes: [
                { id: 0, nombre: 'Griselda Daniela García Espinoza', numCliente: '0101 2124 10291', rfc: 'GRGE8701103K1' },
                { id: 1, nombre: 'Laura Lucía Villa Castro', numCliente: '0101 2124 10292', rfc: 'LLVC8701103K1' },
                { id: 2, nombre: 'Ernesto García Seoane', numCliente: '0101 2124 10293', rfc: 'EGS8701103K1' },
                { id: 3, nombre: 'Griselda Daniela García Espinoza', numCliente: '0101 2124 10291', rfc: 'GRGE8701103K1' },
                { id: 4, nombre: 'Laura Lucía Villa Castro', numCliente: '0101 2124 10292', rfc: 'LLVC8701103K1' },
                { id: 5, nombre: 'Ernesto García Seoane', numCliente: '0101 2124 10293', rfc: 'EGS8701103K1' },
            ],
            clientesFiltrados: [],
            mostrarResultados: false,
            noHayResultados: false,
            esRFC: false,
            informacionNombre: '',
            informacionApellidoPaterno: '',
            informacionApellidoMaterno: '',
            informacionFecha: null,
            btnBuscarCliente: true,
            clienteNoEncontrado: false,
            primerClick: true,
            descripcionSKU: '',
            productos: [
                { id: 0, nombre: 'LED 60 VIZIO SMART E60.C3', sku: '1003487'},
                { id: 1, nombre: 'LED 50 VIZIO SMART E50.C3', sku: '1003486' },
                { id: 2, nombre: 'LED 50 VIZIO SMART E50.C3', sku: '1003486' },
            ],
            productosFiltrados: [],
            mostrarResultadosProductos: false,
            dialogAgregadoCorrectamente: false
        }
    }

    cambioOpcion(e) {
        this.state.tipos.forEach(element => {
            element.estatus = false;
        });
        e.estatus = true;
        this.setState({tipos: this.state.tipos})
    }

    inputClienteRFC = (e) => { 
        this.setState({clienteUnicoRFC: e.target.value.toUpperCase()}, () => { this.updateFilter() });
    }

    updateFilter() {

        // Si el primer caracter es numerico
        if (this.state.clienteUnicoRFC.charAt(0).match(/^[0-9]+$/)){
            this.setState({esRFC: false});
        } 
        // El primer caracter no es numerico
        else {
            this.setState({esRFC: true});
        }

        // SI hay un cliente uinico o RFC escrito
        if(this.state.clienteUnicoRFC) {
    
            this.setState({clientesFiltrados: this.state.clientes.filter(cliente => {
                    if (!this.state.clienteUnicoRFC) return true;
                    if (cliente.numCliente.includes(this.state.clienteUnicoRFC) || cliente.rfc.includes(this.state.clienteUnicoRFC)) {
                        return true;
                    }
                    return false;
                })
            }, () => {
                // SI existe algun resultado del filtrado
                if(this.state.clientesFiltrados.length) {
                    this.setState({
                        mostrarResultados: true,
                        noHayResultados: false
                    });
                } 
                // NO existe algun resultado del filtrado
                else {
                    this.setState({mostrarResultados: false, noHayResultados: true});
                }
            });
        } 
        // NO hay un cliente uinico o RFC escrito
        else {
            this.setState({
                mostrarResultados: false,
                noHayResultados: false,
                esRFC: false
            });
        }
    }

    handleDateChange = (date) => {
        this.setState({informacionFecha: date}, () => { this.validarPorNombre() });
    };

    handlePorNombre = (e) => {
        switch (e.target.id) {
            case 'nombre':
                this.setState({informacionNombre: e.target.value}, () => { this.validarPorNombre() });
                break;
            case 'apellidoPaterno':
                this.setState({informacionApellidoPaterno: e.target.value}, () => { this.validarPorNombre() });
                break;
            case 'apellidoMaterno':
                this.setState({informacionApellidoMaterno: e.target.value}, () => { this.validarPorNombre() });
                break;
        
            default:
                
                break;
        }
    }

    validarPorNombre() {
        if(!this.state.informacionNombre || !this.state.informacionApellidoPaterno || !this.state.informacionApellidoMaterno || !this.state.informacionFecha) {
            this.setState({btnBuscarCliente: true});
        } else {
            this.setState({btnBuscarCliente: false});
        }
    }

    buscarCliente() {
        if(this.state.primerClick) {
            this.setState({clienteNoEncontrado: true});
            this.setState({primerClick: false});
        } else {
            console.log('segundo');
        }
    }

    inputDescripcionSKU = (e) => { 
        this.setState({descripcionSKU: e.target.value.toUpperCase()}, () => { this.updateFilterDescripcionSKU() });
    }

    updateFilterDescripcionSKU() {

        // SI hay un producto uinico o RFC escrito
        if(this.state.descripcionSKU) {
    
            this.setState({productosFiltrados: this.state.productos.filter(producto => {
                    if (!this.state.descripcionSKU) return true;
                    if (producto.nombre.includes(this.state.descripcionSKU) || producto.sku.includes(this.state.descripcionSKU)) {
                        return true;
                    }
                    return false;
                })
            }, () => {
                // SI existe algun resultado del filtrado
                if(this.state.productosFiltrados.length) {
                    this.setState({
                        mostrarResultadosProductos: true,
                    });
                } 
                // NO existe algun resultado del filtrado
                else {
                    this.setState({mostrarResultadosProductos: false});
                }
            });
        } 
        // NO hay un producto uinico o RFC escrito
        else {
            this.setState({
                mostrarResultadosProductos: false,
            });
        }
    }

    handleClickOpen = () => {
        this.setState({dialogAgregadoCorrectamente: true});
    };
    
    handleClose = () => {
        this.setState({dialogAgregadoCorrectamente: false});
    };

    render() {
        return <div>
                <DatosGlobales.Consumer>
                    {data => (
                        <div>
                            {data.tieneCredito ? 
                            <DatosCliente /> : null}
                            {!data.tieneCredito ? <div className="contenedor-espacio-160"></div> : null}
                            <div className="contenedor-buscador u-bg-b">
                                {!data.tieneCredito ? 
                                <div className="tipo-busqueda">
                                    <div className="titulo-busqueda">Busqueda Cliente</div>
                                    <div className="busqueda-por">
                                        {
                                            this.state.tipos.map(element => {
                                            return (
                                                <div key={element.id} className={ element.estatus ? 'busqueda-activa' : '' } onClick={() => this.cambioOpcion(element)}>{element.nombre}</div>
                                            )
                                            })
                                        }
                                    </div>
                                </div> : null}
                                
                                { this.state.tipos[0].estatus && !data.tieneCredito ? <div>
                                    <div className="input-label pad-extra mt-85">Ingresa los datos de tu cliente</div>
                                    <div className="buscador-contenido">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input">
                                                    <div className="input-bracket input-bracket__buscar input-bracket--100">
                                                        <img src={buscar} alt="logo"/>
                                                        <input type="text" className="input-bracket__principal" placeholder="Cliente único o RFC" onChange={this.inputClienteRFC}/>
                                                    </div> 
                                                </div>
                                                { this.state.esRFC ? <div className={`u-txt-rojo pad-extra u-fz-18 ${this.state.clienteUnicoRFC.length === 12 || this.state.clienteUnicoRFC.length === 13 ? 'u-txt-verde' : ''}`} style={{marginTop: "10px"}}>El RFC debe contener 12 o 13 caracteres</div> : null}
                                                { this.state.mostrarResultados ? <div>
                                                    <div className="pad-extra u-fz-18" style={{marginTop: "28px"}}>Resultados relacionados tu búsqueda</div>
                                                    <div style={{marginTop: "17px"}} className="scroll-buscador">
                                                        {
                                                            this.state.clientesFiltrados.map(cliente => {
                                                                return (
                                                                    <div key={cliente.id} className="contenedor-cliente pad-extra-cliente u-fz-16">
                                                                        <div>{cliente.nombre}</div>
                                                                        <div className="u-txt-verde">{cliente.numCliente}</div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div> : null}
                                                { this.state.noHayResultados ? <div>
                                                    <div className="pad-extra u-txt-rojo u-fz-18" style={{marginTop: "60px"}}>Cliente no encontrado</div> 
                                                </div> : null }
                                            </div>
                                        </div>
                                    </div>
                                </div> : null }

                                { this.state.tipos[1].estatus && !data.tieneCredito ? <div>
                                    <div className="input-label pad-extra mt-85">Ingresa los datos de tu cliente</div>
                                    <div className="buscador-contenido">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="input">
                                                    <div className="input-bracket input-bracket--100">
                                                        <input type="text" className="input-bracket__input" placeholder="Nombre (s)" id="nombre" onChange={this.handlePorNombre}/>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row input-mt">
                                            <div className="col-6">
                                                <div className="input">
                                                    <div className="input-bracket input-bracket--100">
                                                        <input type="text" className="input-bracket__input" placeholder="Apellido Paterno" id="apellidoPaterno" onChange={this.handlePorNombre}/>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="input">
                                                    <div className="input-bracket input-bracket--100">
                                                        <input type="text" className="input-bracket__input" placeholder="Apellido Materno" id="apellidoMaterno" onChange={this.handlePorNombre}/>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row input-mt">
                                            <div className="col-6">
                                                <div className="input">
                                                    <div className="input-bracket input-bracket--100">
                                                        {/* <MaterialUIPickers /> */}
                                                            <KeyboardDatePicker
                                                                disableToolbar
                                                                variant="inline"
                                                                format="dd - MM - yyyy"
                                                                margin="normal"
                                                                id="fecha"
                                                                value={this.state.informacionFecha}
                                                                onChange={this.handleDateChange}
                                                                autoOk
                                                                className="custom-datepicker"
                                                                placeholder="Fecha de nacimiento"
                                                            />
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                {this.state.clienteNoEncontrado ? <div className="u-txt-rojo u-fz-18" style={{paddingLeft:"33px"}}>Cliente no encontrado</div> : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="u-flex-end">
                                        <Button variant="contained" className={`btn-primario ${this.state.btnBuscarCliente ? 'u-desac' : ''}`} 
                                        style={{marginRight: "30px"}} disableElevation onClick={() => this.buscarCliente()}>Buscar cliente</Button>
                                    </div>
                                </div> : null }

                                { this.state.tipos[2].estatus || data.tieneCredito ? <div>
                                    <div className="input-label pad-extra mt-85">Ingresa una descripción o el SKU del producto</div>
                                    <div className="buscador-contenido">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input">
                                                    <div className="input-bracket input-bracket__buscar input-bracket--100">
                                                        <img src={buscar} alt="logo"/>
                                                        <input type="text" className="input-bracket__principal" placeholder="Buscar por descripción o SKU" onChange={this.inputDescripcionSKU}/>
                                                    </div> 
                                                </div>
                                                { this.state.mostrarResultadosProductos ? <div>
                                                    <div className="pad-extra u-fz-18" style={{marginTop: "28px"}}>Productos relacionados con tu búsqueda</div>
                                                    <div style={{marginTop: "17px"}} className="scroll-buscador">
                                                        {
                                                            this.state.productosFiltrados.map(cliente => {
                                                                return (
                                                                    <div key={cliente.id} className="contenedor-cliente pad-extra-cliente u-fz-16">
                                                                        <div>{cliente.nombre}</div>
                                                                        <div>{cliente.sku}</div>
                                                                        <div>
                                                                            <img src={agregar} alt="Agregar" className="icono-resultados" onClick={this.handleClickOpen}/>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div> : null}
                                            </div>
                                        </div>
                                    </div>
                                </div> : null }
                            </div>
                        </div>
                    )}
                </DatosGlobales.Consumer>
            <Dialog
                open={this.state.dialogAgregadoCorrectamente}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
                <div className="dialog-contenido">
                    <div className="u-flex-end">
                        <img src={cerrar} className="logo-cerrar" onClick={this.handleClose}/>
                    </div>
                    <div className="u-flex-center u-mt-1">
                        <img src={check} className="logo-dialog"/>
                    </div>
                    <div className="u-txt-center u-mt-1 u-fz-22 contenido-dialog" style={{width: "400px"}}>
                        LED 60 VIZIO SMART E60.C3 agregado exitosamente a su lista de compra
                    </div>
                    <div className="u-flex-between u-pad-actions u-mt-4">
                        <Button variant="contained" className="btn-secundario" style={{width: "189px"}} disableElevation onClick={this.handleClose}>
                            Buscar otro artículo
                            <img src={ir} alt="flecha" className="logo-ir"/>
                        </Button>
                        <Link to={'/cotizador-credito'}>
                            <Button variant="contained" className="btn-primario" style={{width: "189px"}} disableElevation onClick={this.handleClose}>
                                Presupuesto
                                <img src={ir_blanco} alt="flecha" className="logo-ir"/>
                            </Button>
                        </Link>
                    </div>
                </div>

            </Dialog>
        </div>
    }
}

