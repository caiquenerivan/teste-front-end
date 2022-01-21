import React from 'react';
import pagto1 from '../imgs/pagto1.png';
import pagto2 from '../imgs/pagto2.png';
import pagto3 from '../imgs/pagto3.png';
import pagto4 from '../imgs/pagto4.png';
import pagto5 from '../imgs/pagto5.png';
import pagto6 from '../imgs/pagto6.png';
import pagto7 from '../imgs/pagto7.png';
import econverse from '../imgs/econverse.png';
import vtex from '../imgs/vtex.png';
import '../style/footer.scss';



function Footer(){
    return(
        <div className="sectionFooter">

            <div className="informacoes">
                <div>
                    <h2>INSTITUCIONAL</h2>
                    <h3>QUEM SOMOS</h3>
                    <h3>NOSSAS LOJAS</h3>
                    <br/>
                    <br/>
                    <h2>INSTITUCIONAL</h2>
                    <h3>QUEM SOMOS</h3>
                    <h3>NOSSAS LOJAS</h3>
                </div>

                <div>
                    <h2>AJUDA E SUPORTE</h2>
                    <h3>POLÍTICA DE PRIVACIDADE</h3>
                    <h3>POLÍTICA DE TROCAS</h3>
                    <h3>PRAZOS DE ENTREGAS</h3>
                    <h3>TERMOS DE USO</h3>
                </div>

                <div className="pagamentos ">
                    <h2>FORMAS DE PAGAMENTO</h2>

                    <div className="formaPagamento">
                        <img src={pagto1} alt="visa"/>
                        <img src={pagto2} alt="mastercard"/>
                        <img src={pagto3} alt="american express"/>
                        <img src={pagto4} alt="diners club"/>
                        <img src={pagto5} alt="boleto"/>
                    </div>
                    <h2>SEGURANÇA</h2>
                    <div className="formaPagamento">
                        <img src={pagto6} alt="visa"/>
                        <img src={pagto7} alt="mastercard"/>
                    </div>
                </div>

                <div className="newsletter">
                    <h2>ASSINE NOSSO <span>NEWSLETTER</span> E RECEBA NOVIDADES E PROMOCÕES</h2>

                    <div className="inputs">
                        <input type="text" placeholder="SEU NOME"></input>
                        <input type="email" placeholder="SEU E-MAIL"></input>
                        <input type="button" value="ENVIAR" className="botao"></input>
                    </div>

                </div>



            </div>

            <div className="fimPagina">

                <p>NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15</p>
                
                <div className="criado">
                    <img src={econverse} alt="econverse"/>
                    <img src={vtex} alt="vtex" className="vtex"/>
                </div>

            </div>


        </div>
    )
}

export default Footer; 