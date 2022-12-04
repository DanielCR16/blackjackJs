

//ESTA FUNCION PERMITE TOMAR UNA CARTA
/**
 * 
 * @param {Array<String>} deck es uun arreglo de string
 * @returns {String} retorna la carta del deck
 */
 export const pedirCarta=(deck)=>{
    if(!deck||deck.length===0){
        throw 'No hay cartar en el deck';
    }
    return deck.pop();
}