import React from 'react';
import '../style/modal.scss';


function Modal(props){

    const handleOutsideClick =(e)=>{
        if(e.target.id === "modal") props.onClose();
    };

    return(
        
  
        <div id="modal" className="modal" onClick={handleOutsideClick}>
            <div className="container" >
                
                <div className="content">
                    <div className="imagem">
                        <img src={props.img} alt={props.title}/>
                    </div>
                    <div className="info">
                        <h2>{props.title}</h2>
                        <h1>R$ {props.price}</h1>
                        <p>{props.desc}</p>
                        <h3>{`Veja mais detalhes do produto`} <span>{` >`}</span></h3>
                        <button id="adicionar">Adicionar ao carrinho</button>
                    </div>
                </div>
                <button id="close" onClick={props.onClose}>x</button>
            </div>
        </div>


    );
}

export default Modal; 