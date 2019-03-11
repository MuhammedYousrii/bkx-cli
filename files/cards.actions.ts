import { CardModel } from '../model/cards.model';

    export class GetCardsAction {
        static readonly type = '[CARDS API] get cards';
        constructor(public pagination: {
            keywords: string,
            page: number,
            itemsPerPage: number
        }){}
    }

    export class GetCardAction {
        static readonly type = '[CARDS API] get Card';
        constructor (public card: CardModel) {} 
    }
    
    export class RemoveCardAction {
        static readonly type = '[CARDS API] remove card';
        constructor(public id: number) {}
    }
    
    export class AddCardAction {
        static readonly type = '[CARDS APIS] add card';
        constructor (public card: CardModel) {}
    }
    
    export class EditCardAction {
        static readonly type = '[CARDS APIS] edit card';
        constructor (public card: CardModel) {}
    }
    