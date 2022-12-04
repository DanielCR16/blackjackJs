
import _ from 'underscore';
import '../../style.css';

import {crearDeck,pedirCarta,valorCarta,crearCarta} from './useCases'

/*
*2C = two of clubs
*2D = two of diamonds 
*2H= two of hearts 
*2S = two of spades 


*/
const miModulo=(()=>{
  'use strict'
  
      let deck        =[];
      const tipos     =['C','D','H','S'],
            especiales= ['A','J','Q','K'];
      //let puntosJugador=0,
        //  puntosComputadora=0;
  
        let puntosJugadores=[];
      //referencias HTML
      const btnPedir =document.querySelector('#btnPedir'),
            btnDetener=document.querySelector('#btnDetener'),
            btnNuevo=document.querySelector('#btnNuevo');
  
      const divCartas = document.querySelectorAll('.divCartas'),
            smalls = document.querySelectorAll('small');
      
      //esta funcion inicializa el juego 
      const inicializarJuego=(numJugadores =2)=>{
        
          deck = crearDeck(tipos,especiales);
          puntosJugadores=[];
          for(let i=0;i<numJugadores;i++){
              puntosJugadores.push(0);
          }
          smalls.forEach(element=>element.innerText=0);
          divCartas.forEach(element=>element.innerHTML='');
           btnDetener.disabled=false;
           btnPedir.disabled=false;
           console.clear();
      }

  
  
     
    
   
      const determinarGanador=()=>{
          const [puntosMinimos,puntosComputadora]=puntosJugadores
          setTimeout(()=>{
              if(puntosComputadora === puntosMinimos){
                  alert('Nadie gana :C')
              }else if(puntosMinimos > 21) {
                  alert('Computadora gana :C')
              }else if(puntosComputadora>21) {
                  alert('Jugador gana')
              }else {
                  alert('Computadora gana')
              }
          },200);
      }
      //turno: 0 = primer jugar y ultimo sera la CPU
  const acumularPuntos=(carta,turno)=>{
      puntosJugadores[turno]=puntosJugadores[turno]+valorCarta(carta);
              smalls[turno].innerText=puntosJugadores[turno];
          return puntosJugadores[turno];
          }
      
      //turno de la computadora
      const turnoComputadora =(puntosMinimos)=>{
          let puntosComputadora=0;
          do {
              const carta = pedirCarta(deck);
              puntosComputadora=  acumularPuntos(carta,puntosJugadores.length -1);
              crearCarta(carta,puntosJugadores.length -1,divCartas);
          
          } while((puntosComputadora <puntosMinimos) && (puntosMinimos<=21));
          determinarGanador();
      
      }
      //Eventos
      btnPedir.addEventListener('click',()=> {
      const carta = pedirCarta(deck);
      const puntosJugador= acumularPuntos(carta,0);
         crearCarta(carta,0,divCartas);
  
          if(puntosJugador>21){
              console.warn('PERDISTE');
              turnoComputadora(puntosJugador);
              btnDetener.disabled=true;
              btnPedir.disabled=true;
          }else if (puntosJugador ===21){
              console.warn('21,Genial!!!');
              btnPedir.disabled=true;
              btnDetener.disabled=true;
              turnoComputadora(puntosJugador);
          }
      });
      btnDetener.addEventListener('click',()=>{
          turnoComputadora(puntosJugadores[0]);
          btnPedir.disabled=true;
          btnDetener.disabled=true;
      });
  
  
      btnNuevo.addEventListener('click',()=>{ 
          inicializarJuego();
      });
  
      return {
          nuevoJuego:inicializarJuego
      }
  
  })();
  
