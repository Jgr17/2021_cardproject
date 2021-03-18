//This function starts the game as the page is loaded
function start_game() {

    let Colours = ["R", "G", "B"];
    let Values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let Deck = createDeck(Colours, Values);
    Shuffle(Deck);
    ShowDeck(Deck,0);
}

//This function creates a deck of 30 cards with colours r,g,b and values 1 to 10
function createDeck(Colours, Values){
    let Decktemp = [];
    for(let i = 0;i<Colours.length;i++){
        for(let x = 0;x<Values.length;x++){
            let Card = {Colour: Colours[i],Value: Values[x]};
            Decktemp.push(Card);
        }
    }
    return Decktemp;
}

//This function shuffles the Deck of 30 cards
function Shuffle(Deck){
    debugger;
    for (let i =0;i<Deck.length-1;i++){
        let randomindex = Math.floor(Math.random()*i)
        let temp = Deck[i];
        Deck[i] = Deck[randomindex];
        Deck[randomindex] = temp;
    }
    return Deck;
}

//This function will show the card in the top of deck
/*
function ShowDeck(Deck){
    document.getElementById("deck").innerHTML = Deck[0].Colour + Deck[0].Value;

}
*/

function pickCards(Deck) {
    let playerOneDeck = [];
    let playerTwoDeck = [];
    let i = 1 ;
    while (i<Deck.length){
        if(Deck[i-1].Colour==Deck[i].Colour){
            if (Deck[i-1].Value)
        }
    }
    
}
//test
