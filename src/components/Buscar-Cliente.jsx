import React from 'react';

export default class BuscarCliente extends React.Component {

    constructor(props) {
        super(props);
        this.cambioOpcion = this.cambioOpcion.bind(this);
    }

    tipos = [
        {id: 0, nombre: 'Por Cliente Único', estatus: false },
        {id: 1, nombre: 'Por nombre', estatus: false },
        {id: 2, nombre: 'Cotización anónima', estatus: true },
    ];

    cambioOpcion(e) {
        
        this.tipos.forEach(element => {
            element.estatus = false;
        });
        e.estatus = true;
        console.log(this.tipos)
    }

    render() {
        return <div>
            <div className="contenedor-buscador u-bg-b">
                <div className="tipo-busqueda">
                    <div className="titulo-busqueda">Busqueda Cliente</div>
                    <div className="busqueda-por">
                        {
                            this.tipos.map(element => {
                            return (
                                <div key={element.id} className={ element.estatus ? 'busqueda-activa' : '' } onClick={() => this.cambioOpcion(element)}>{element.nombre}</div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}
