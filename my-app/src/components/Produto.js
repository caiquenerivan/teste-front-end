import React,{useState} from 'react';
import '../style/produto.scss';
import Modal from './Modal';
import botaoPesquisa from '../imgs/botao-pesquisa.png'

function Produto(props){
    const [isModalVisible, setIsModalVisible] = useState(false);

    let visible = false;
    let tamanho = props.price.length-2;


    const cents = props.price.substr(-2);
    const reais = props.price.substr(0, tamanho);

    const preco = `${reais},${cents}`;



    function getModal(){
        setIsModalVisible(true);
    }


    function toggleDisplay(){
        var x = document.getElementById("botao-inativo");
        if (!visible) {
            x.style.display = "block";
            visible = true;
        } else {
            x.style.display = "none";
            visible = false;
        }
    }

    return(
        
        <div>
            <div id="produtoVenda" onMouseOver={toggleDisplay} onMouseOut={toggleDisplay}>
                <a href="#">
                    <img src={props.img} alt={props.title}/>
                    <div id="botao-inativo" display="none">
                        <button onClick={getModal} id="pesquisar"><img src={botaoPesquisa} alt="botao pesquisar"/><p>QUICK VIEW</p></button>
                    </div>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <h2>R$ {preco}</h2>       
                </a>
                
            </div>
                {isModalVisible?<Modal title={props.title} img={props.img} desc={props.desc} price={preco}/>:null}
        </div>

    );
}

export default Produto; 