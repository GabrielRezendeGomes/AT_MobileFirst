import React from "react";
import  NavBar  from "./navBar";
import VideoCarousel from './VideoCarousel.jsx';
import Card from "./Card.Component";
import "./Card.css";
import { ThemeProvider } from './ThemeContext'; 
import Login from "./Login.Component"

function App(){

  const videoList = [
    'src\\assets\\video1.mp4',
    'src\\assets\\Video2.mp4',
    'src\\assets\\Video3.mp4',
    "src\\assets\\Video4.mp4",
    'src\\assets\\Video5.mp4',
    'src\\assets\\Video6.mp4'
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
            
            image="src\assets\harry-potter1.jpg" 
            title="Harry potter e a pedra filosofal"
            description="A primeira aventura do jovem Harry potter."
            price="19.99"
        
          />

          <Card 
            
            image="src\assets\harry-potter2.jpg" 
            title="Harry potter e a câmara secreta"
            description="A segunda aventura do jovem Harry potter."
            price="19.99"
        
          />

          <Card 
            
            image="src\assets\harry-potter3.jpg" 
            title="Harry potter e o prisioneiro de azkaban"
            description="A terceira aventura do jovem Harry potter."
            price="19.99"
        
          />

          <Card 
            
            image="src\assets\harry-potter4.jpg" 
            title="Harry potter e o cálice de fogo"
            description="A quarta aventura do jovem Harry potter."
            price="19.99"
        
          />
          
          <Card 
            
            image="src\assets\harry-potter5.jpg" 
            title="Harry potter e a ordem da fênix"
            description="A quinta aventura do jovem Harry potter."
            price="19.99"
        
          />
          
          <Card 
            
            image="src\assets\harry-potter6.jpg" 
            title="Harry potter e o enigma do príncipe"
            description="A sexta aventura do jovem Harry potter."
            price="19.99"
        
          />

        </div>
      </section>
    </main>
    <footer id="contact" className="rodape" style={{backgroundColor:'#00008B'}}>
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