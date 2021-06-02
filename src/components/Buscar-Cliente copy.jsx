import React from 'react';
import buscar from '../assets/img/icons/buscar.svg';

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
            clienteRFC: '',
            clientes: [
                { id: 0, nombre: 'Griselda Daniela García Espinoza', numCliente: '0101 2124 10291', rfc: 'GRGE8701103K1' },
                { id: 1, nombre: 'Laura Lucía Villa Castro', numCliente: '0101 2124 10292', rfc: 'LLVC8701103K1' },
                { id: 2, nombre: 'Ernesto García Seoane', numCliente: '0101 2124 10293', rfc: 'EGS8701103K1' },
                { id: 3, nombre: 'Griselda Daniela García Espinoza', numCliente: '0101 2124 10291', rfc: 'GRGE8701103K1' },
                { id: 4, nombre: 'Laura Lucía Villa Castro', numCliente: '0101 2124 10292', rfc: 'LLVC8701103K1' },
                { id: 5, nombre: 'Ernesto García Seoane', numCliente: '0101 2124 10293', rfc: 'EGS8701103K1' },
            ]
        }
    }

    cambioOpcion(e) {
        this.state.tipos.forEach(element => {
            element.estatus = false;
        });
        e.estatus = true;
        this.setState({tipos: this.state.tipos})
    }

    handleChange = (e) =>{ 
        this.setState({clienteRFC: e.target.value});
    }

    render() {
        return <div>
            <div className="contenedor-buscador u-bg-b">
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
                    <div className="input-label mt-85">Ingresa los datos de tu cliente</div>
                </div>
                <div className="buscador-contenido">
                    <div className="input">
                        <div className="input-bracket input-bracket__buscar input-bracket--100">
                            <img src={buscar} alt="logo"/>
                            <input type="text" className="input-bracket__principal" placeholder="Cliente único o RFC" value={this.state.name} onChange={this.handleChange}/>
                        </div> 
                    </div>
                </div>
                <div className="pad-extra u-fz-18" style={{marginTop: "28px"}}>Resultados relacionados tu búsqueda</div>
                <div style={{marginTop: "17px"}} className="scroll-buscador">
                    {
                        this.state.clientes.filter(cliente => {
                            if (!this.state.clienteRFC) return true;
                            if (cliente.numCliente.includes(this.state.clienteRFC) || cliente.rfc.includes(this.state.clienteRFC)) {
                                return true;
                            }
                            return false;
                        }).map(cliente => (
                            <div key={cliente.id} className="contenedor-cliente pad-extra-cliente u-fz-16">
                                <div>{cliente.nombre}</div>
                                <div className="u-txt-verde">{cliente.numCliente}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    }
}
