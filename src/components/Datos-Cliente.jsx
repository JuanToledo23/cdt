import React from 'react';

import ir from '../assets/img/icons/ir.svg';
import ir_blanco from '../assets/img/icons/ir_blanco.svg';
import cerrar from '../assets/img/icons/cerrar.svg';

import Button from '@material-ui/core/Button';


export default class DatosCliente extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <div>
            <div className="u-flex-between" style={{paddingTop: "130px"}}>
                <div className="u-flex-between">
                    <div className="u-fz-24 u-txt-medium">Mi cliente</div>
                </div>
                <Button variant="contained" className="btn-secundario" style={{width: "160px"}} disableElevation>
                    Cambiar cliente
                    <img src={ir} alt="flecha" className="logo-ir"/>
                </Button>
            </div>
            <div className="u-flex-between u-txt-medium">
                <div className="u-flex">
                    <div></div>
                    <div className="u-flex-column">
                        <div>Griselda Daniela Garcia Espinoza</div>
                        <div>Línea de crédito: <span className="u-txt-verde">Liberada</span></div>
                        <div>Cliente Único 0101 2124 10294</div>
                    </div>
                </div>
                <div className="u-flex">
                    <div>
                        <div>Capacidades de pago</div>
                        <div className="u-flex-between" style={{width: "150px"}}>
                            <div>Total</div>
                            <div>$500</div>
                        </div>
                        <div className="u-flex-between" style={{width: "150px"}}>
                            <div>Utilizada</div>
                            <div>$0</div>
                        </div>
                        <div className="u-flex-between" style={{width: "150px"}}>
                            <div>Disponible</div>
                            <div>$500</div>
                        </div>
                    </div>
                    <div>
                        <div>Disponible para consumo</div>
                        <div className="u-flex-between" style={{width: "150px"}}>
                            <div>Hogar</div>
                            <div className="u-txt-verde">$529</div>
                        </div>
                        <div className="u-flex-between" style={{width: "150px"}}>
                            <div>Movilidad</div>
                            <div className="u-txt-verde">$900</div>
                        </div>
                        <div className="u-flex-between" style={{width: "150px"}}>
                            <div>Conectividad</div>
                            <div className="u-txt-verde">$550</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

