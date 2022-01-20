import React from 'react';
import guitarras from '../imgs/guitarras.png';
import microfones from '../imgs/microfones.png';
import mesaSom from '../imgs/mesa-de-som.png';
import teclados from '../imgs/teclados.png';
import violao from '../imgs/violao.png';
import baterias from '../imgs/baterias.png';
import '../style/informacoes.scss';

import '../style/header.scss';


function Informacoes(){
    return(
        <div className="infos">
            <div className="instrumentos">
                <div className="inst">
                    <img src={guitarras} alt="guitarras"/>
                    <p>GUITARRAS</p>
                </div>
                <div className="inst">
                    <img src={microfones} alt="guitarras"/>
                    <p>MICROFONES</p>
                </div>
                <div className="inst">
                    <img src={mesaSom} alt="guitarras"/>
                    <p>MESA DE SOM</p>
                </div>
                <div className="inst">
                    <img src={teclados} alt="guitarras"/>
                    <p>TECLADOS</p>
                </div>
                <div className="inst">
                    <img src={violao} alt="guitarras"/>
                    <p>VIOLÃO</p>
                </div>
                <div className="inst">
                    <img src={baterias} alt="guitarras"/>
                    <p>BATERIAS</p>
                </div>
            </div>

            <div className="novidades">
                <div className="novidade1">
                    
                </div>
                <div className="novidade2">
                    
                </div>
            </div>


        </div>
    )
}

export default Informacoes; 