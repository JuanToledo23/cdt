import React from 'react';

import ir from '../assets/img/icons/ir.svg';
import user_heart from '../assets/img/icons/user_heart.svg';
import cliente from '../assets/img/cliente.png';
import mask from '../assets/img/icons/mask.svg';

import Button from '@material-ui/core/Button';

export default class DatosCliente extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <div>
            <div className="u-flex-between" style={{paddingTop: "120px"}}>
                <div className="u-flex-between">
                    <div className="u-fz-24 u-txt-medium">Mi cliente</div>
                </div>
                <Button variant="contained" className="btn-secundario" style={{width: "160px"}} disableElevation>
                    Cambiar cliente
                    <img src={ir} alt="flecha" className="logo-ir"/>
                </Button>
            </div>
            <div className="u-flex-between u-txt-medium u-mt-1">
                <div className="u-flex" style={{height: "75px"}}>
                    <div className="u-position-r" style={{width: "90px"}}>
                        <img src={user_heart} className="user-heart"/>
                        <img src={cliente} className="img-cliente"/>
                        <img src={mask} className="img-mask"/>
                    </div>
                    <div className="u-flex-column u-justify-between">
                        <div className="u-fz-18">Griselda Daniela Garcia Espinoza</div>
                        <div className="u-fz-12">Línea de crédito: <span className="u-txt-verde">Liberada</span></div>
                        <div className="u-fz-10">Cliente Único 0101 2124 10294</div>
                    </div>
                </div>
                <div className="u-flex" style={{height: "75px", marginRight: "180px"}}>
                    <div className="u-flex-column u-justify-between"  style={{marginRight: "80px"}}>
                        <div className="u-fz-14">Capacidades de pago</div>
                        <div className="u-flex-between u-fz-12" style={{width: "170px"}}>
                            <div>Total</div>
                            <div>$500</div>
                        </div>
                        <div className="u-flex-between u-fz-12" style={{width: "170px"}}>
                            <div>Utilizada</div>
                            <div>$0</div>
                        </div>
                        <div className="u-flex-between u-fz-12" style={{width: "170px"}}>
                            <div>Disponible</div>
                            <div>$500</div>
                        </div>
                    </div>
                    <div className="u-flex-column u-justify-between">
                        <div className="u-fz-14">Disponible para consumo</div>
                        <div className="u-flex-between u-fz-12" style={{width: "170px"}}>
                            <div>Hogar</div>
                            <div className="u-txt-verde">$529</div>
                        </div>
                        <div className="u-flex-between u-fz-12" style={{width: "170px"}}>
                            <div>Movilidad</div>
                            <div className="u-txt-verde">$900</div>
                        </div>
                        <div className="u-flex-between u-fz-12" style={{width: "170px"}}>
                            <div>Conectividad</div>
                            <div className="u-txt-verde">$550</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
}

