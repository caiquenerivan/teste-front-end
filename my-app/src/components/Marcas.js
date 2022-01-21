import React from 'react';
import akg from '../imgs/akg.png';
import boss from '../imgs/boss.png';
import roland from '../imgs/roland.png';
import shure from '../imgs/shure.png';
import sobre  from '../imgs/sobre.png';
import '../style/marcas.scss';



function Marcas(){
    return(
        <div className="sectionMarcas">
          
            <h1>AS <span>MELHORES</span> MARCAS</h1>
            <p>it is a long established fact that a reader will be destracted by the readable</p>
            <div className="logoImgs">
                <img src={akg} alt="AKG"/>
                <img src={boss} alt="boss"/>
                <img src={roland} alt="roland"/>
                <img src={shure} alt="shure"/>

            </div>

            <div className="sobre">
                <h1>SOBRE NÓS</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. </p>
            </div>

            <div className="commentCard">
                <div className="autor">
                    <img src={sobre} alt="Foto do autor do comentário"/>
                    <div className="nomeAutor">
                        <h2>Felipe Salmim</h2>
                        <h3>Designer</h3>
                    </div>
                    <div className="comentario">
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marcas; 