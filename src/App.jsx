import React from "react";
import  NavBar  from "./navBar";
import VideoCarousel from './VideoCarousel.jsx';
import Card from "./Card.Component";
import "./Card.css";
import { ThemeProvider } from './ThemeContext'; 
import Login from "./Login.Component"
import foto1 from "./assets/harry-potter1.jpg";
import foto2 from "./assets/harry-potter2.jpg";
import foto3 from "./assets/harry-potter3.jpg";
import foto4 from "./assets/harry-potter4.jpg";
import foto5 from "./assets/harry-potter5.jpg";
import foto6 from "./assets/harry-potter6.jpg";

import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";
import video5 from "./assets/video5.mp4";
import video6 from "./assets/video6.mp4";

function App(){

  const videoList = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6
  ];

  return(
    <ThemeProvider>
    <header><NavBar /> </header>
    <main>
      <div className="Videos-Carrosel">
        <VideoCarousel videos={videoList}/>
      </div>
      <section>
        <div className="card-container" id="comprar">
          <Card 
            
            image={foto1}
            title="Harry potter e a pedra filosofal"
            description="A primeira aventura do jovem Harry potter."
            price="19.99"
        
          />

          <Card 
            
            image={foto2} 
            title="Harry potter e a câmara secreta"
            description="A segunda aventura do jovem Harry potter."
            price="19.99"
        
          />

          <Card 
            
            image={foto3}
            title="Harry potter e o prisioneiro de azkaban"
            description="A terceira aventura do jovem Harry potter."
            price="19.99"
        
          />

          <Card 
            
            image={foto4} 
            title="Harry potter e o cálice de fogo"
            description="A quarta aventura do jovem Harry potter."
            price="19.99"
        
          />
          
          <Card 
            
            image={foto5}
            title="Harry potter e a ordem da fênix"
            description="A quinta aventura do jovem Harry potter."
            price="19.99"
        
          />
          
          <Card 
            
            image={foto6} 
            title="Harry potter e o enigma do príncipe"
            description="A sexta aventura do jovem Harry potter."
            price="19.99"
        
          />

        </div>
      </section>
    </main>
    <footer id="contacts" className="rodape" style={{backgroundColor:'#00008B'}}>
      <div className="cadastro">
        <Login/>
      </div>
      <div id="endereço">
        <h2>Contatos</h2>
        <ul>
          <li>telefone: (21)8888-8888</li>
          <li>instagram: @livros</li>
        </ul>
        <h2>Endereço</h2>
        <p>Rua Almirante pererira junior 89</p>
      </div>
      
    </footer>
    </ThemeProvider>
    
  )

}

export default App;