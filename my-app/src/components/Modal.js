import React from 'react';
import '../style/modal.scss';


function Modal(props){
    function closeModal(){

    }


    return(
        
  
        <div className="modal">
            <div className="container">
                
                <div className="content">
                    <div className="imagem">
                        <img src={props.img} alt={props.title}/>
                    </div>
                    <div className="info">
                        <h2>{props.title}</h2>
                        <h1>{props.preco}</h1>
                        <p>{props.desc}</p>
                        <h3>{`Veja mais detalhes do produto >`}</h3>
                    </div>
                </div>
                <button id="close" onClick={closeModal}>x</button>
            </div>
        </div>


    );
}

export default Modal; 