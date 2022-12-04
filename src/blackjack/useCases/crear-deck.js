    
    import _ from 'underscore';
    //esta funcion crea un nuevo deck

    /**
     * Esta funcion crea un nuevo deck
     * @param {Array<String>} tiposDeCarta 
     * @param {Array<String>} tiposEspeciales 
     * @returns {Array<String>} regresa un nuevo deck de cartas
     */
    export const crearDeck =(tiposDeCarta,tiposEspeciales)=>{
        if(!tiposDeCarta || tiposDeCarta.length ===0) throw new Error('Tipos de carta es obligatorio');
        if(!tiposEspeciales || tiposEspeciales.length ===0) throw new Error('Tipos Especiales es obligatorio');
        
        let deck=[];
        for(let i=2;i<=10;i++){
            for(let tipo of tiposDeCarta){
                deck.push(i+tipo);
            }
            
        }
        for(let esp of tiposEspeciales ){
            for(let tipo of tiposDeCarta){
                deck.push(esp+tipo)
            }
        }
        //console.log(deck);
        return _.shuffle(deck);
    }
    //export default crearDeck;