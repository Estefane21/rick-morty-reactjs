import React from 'react';
import './styles.css';

function MainSection(){
    return(
        <div className="main-container">
            <div className="main-data-container">
            <h1>RICK AND MORTY</h1>
            <p>O brilhante cientista beberrão Rick sequestra Morty, seu neto aborrescente, para viver loucuras em outros mundos e dimensões alternativas.</p>
            
            <button type="submite">Veja Mais</button>
        </div>
            <img src="https://www.proibidoler.com/wp-content/uploads/2020/07/critica-resenha-analise-rick-and-morty-3.jpg"
            alt="rick-morty-img"
            />
           
        </div>
    );
}
export default MainSection;