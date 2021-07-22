// Deck of Cards: Design the data structures for a generic deck of cards.
// Explain how you would subclass the data structures to implement blackjack.

class Card {
    constructor(rank, suit, hidden){
        switch(rank){
            case'2':
            case'3':
            case'4':
            case'5':
            case'6':
            case'7':
            case'8':
            case'9':
            case'10':
            case'J':
            case'Q':
            case'K':
            case'A':
                this.rank = rank;
                break;
            default:
                throw new Error('Invalid Rank');
        }
        switch(suit){
            case 'SPADES':
            case 'HEARTS':
            case 'DIAMONDS':
            case 'CLUBS':
                this.suit = suit;
                break;
            default:
                throw new Error('Invalid Suit');
        }
        this.hidden = hidden;
    }
}


class Deck {
    constructor(){
        if(!this._instance){
            this.buildDeck();
            Deck._instance = this;
        }
        return Deck._instance;
    }
    
    buildDeck(){
        this.cards = [];
        for (let i=2; i<=14; i++){
            for (let j=0; j<=3; j++){
                let rank = ''
                if(i<11){
                    rank=''+i;
                } else {
                    switch(i){
                        case 11:
                            rank = 'J';
                            break;
                        case 12:
                            rank = 'Q';
                            break;
                        case 13:
                            rank = 'K';
                            break;
                        case 14:
                            rank = 'A';
                            break;
                        default:
                            break;
                    }
                }
                let suit='';
                switch(j){
                    case 0:
                        suit = 'SPADES';
                        break;
                    case 1:
                        suit = 'HEARTS';
                        break;
                    case 2:
                        suit = 'DIAMONDS';
                        break;
                    case 3:
                        suit = 'CLUBS';
                        break;
                    default:
                        break;
                }
                try{
                    this.cards.push(new Card(rank, suit, false));
                } catch(err){
                    console.log(`There was an error ${err.message}`)
                }
            }
        }
    }
}

const deck = new Deck();
const deck2 = new Deck();
Object.freeze(deck);

class User {
    constructor(){
        this.hand = [];
        this.handVal = 0;
    }

    pickCard(card){
        this.hand.push(card);
        this.updateHandVal(card);
    }

    showHand(){
        for(let card in hand){
            card.hidden = false;
        }
        console.log(this.hand);
    }

    updateHandVal(card){
        let cardVal;
        if(parseInt(card.rank)!==NaN){
            cardVal = parseInt(card.rank);
        } else if(card.rank === 'A'){
            if(count<=10){
                cardVal=11;
            } else {
                cardVal=1;
            }
        } else {
            cardVal = 10;
        }
        this.handVal+=cardVal;
    }

    emptyHand(){
        this.hand = [];
        this.handVal = 0;
    }
}

class Dealer extends User{
    constructor(hand){
        super(hand);
    }

}

class Player extends User{
    constructor(hand){
        super(hand);
    }
}

exports.DeckSingleton = deck;