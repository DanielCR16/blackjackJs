

/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {HTMLElement} divCartas 
 */

export const crearCarta =(carta,turno,divCartas)=>{
    if(!carta) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartas[turno].append(imgCarta);
}