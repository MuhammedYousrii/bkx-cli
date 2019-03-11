import { Injectable } from '@angular/core';
    import { ApiService } from '@services/apis.service';
    import { CardModel } from './Cards.model';
    
    @Injectable({
      providedIn: 'root'
    })
    export class CardsService {
    
      private _route = 'admin/cards';
      constructor(
        private _APIS: ApiService
      ) { }
    
      public getCards() {
        return this._APIS.get(this._route);
      }

      public getCard(id) {
        return this._APIS.getWithId(id);
      }
    
      public addCard(card: CardModel) {
        return this._APIS.post(this._route, card);
      }
    
      public editCard(card: CardModel) {
        return this._APIS.edit(this._route, card);
      }
    
      public removeCard(id: string) {
        return this._APIS.remove(this._route, id);
      }
    
    }
    