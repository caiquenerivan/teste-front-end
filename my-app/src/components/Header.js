import React from 'react';
import logo from '../imgs/ninja-som.png';
import whatsapp from '../imgs/whatsapp-white.svg';
import person from '../imgs/person.svg';
import bag from '../imgs/bagwhite.svg';
import lock from '../imgs/lock.svg';
import truck from '../imgs/truck.svg';
import percentage from '../imgs/percentage.svg';
import '../style/header.scss';


let quantidade = 0;

function Header(){
    return(
        <div className="pageInicial">
            <div className="nav">
                <div className="infoCompras">
                    <img src={lock} alt="compra segura"></img>
                    <p>COMPRA 100%</p>
                </div>
                <div className="infoCompras">
                    <p>1 TROCA GRÁTIS</p>
                </div>
                <div className="infoCompras">
                    <img src={percentage} alt="compra segura"></img>
                    <p>5X SEM JUROS</p>
                </div>
                <div className="infoCompras">
                    <img src={truck } alt="entrega"></img>
                    <p>Entregas em todo o Brasil </p>
                </div>
            </div>


            <div className="navPesquisa">
                <img src={logo} alt="logo" className="logo"/>
                <input type="search" placeholder="BUSQUE AQUI..." className="barraBusca" />
                <div className="navInfos">
                    <img src={whatsapp} alt="whatsapp" height="50px" className="changeColor"/>
                    <p>(11) 99999-9999</p>
                </div>
                <div className="navInfos">
                    <img src={person} alt="person" height="50px" />
                    <p>OLÁ, VISITANTE<br/>
                    MINHA CONTA</p>
                </div>
                <div className="carrinho">
                    <img src={bag} alt="bolsa de compras" height="50px" />
                    <p>SEU CARRINHO</p>
                    <p>{quantidade} item (s)</p>
                </div>
            </div>


            <div className="main"> 
                <div className="container">
                    <h2>NOVOS PRODUTOS</h2>
                    <h1>
                        INSTRUMENTOS <br/> <span>PROFISSIONAIS</span>
                    </h1>
                    <h3>CONFIRA</h3>
                </div>
            </div>


        </div>
    )
}

export default Header; 