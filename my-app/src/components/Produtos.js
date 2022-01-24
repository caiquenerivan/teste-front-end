import React, {useState, useEffect} from 'react';
import '../style/produtos.scss';
import '../produtos.json';
import imagem from '../imgs/bateria.png';

import Produto from './Produto';

import axios from 'axios';

const baseURL = "http://econverse.digital/teste-front-end/junior";

function Produtos(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/ninja-som/lista-produtos/produtos.json`).then((data)=>{
            setItems(data);
            console.log(data);
        })
        console.log(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return(
        <div className="sectionProdutos">
            
            <h1>INSTRUMENTOS <span>DESTAQUE</span></h1>
            <p>it is a long established fact that a reader will be destracted by the readable</p>
            
            <div className="vendaProdutos">
                <Produto title="BATERIA" desc="Many desktop publishing packages and web page editors now" price="2000056" img={imagem}/>
            </div>

        </div>
    )
}

export default Produtos; 