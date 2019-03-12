import { State, NgxsOnInit, StateContext, Action, Selector } from '@ngxs/store';
    import { CardsService } from '../cards.service';
    import { GetCardsAction, GetCardAction ,RemoveCardAction, AddCardAction, EditCardAction } from './cards.actions';
    import { tap } from 'rxjs/operators';
    import { CardModel } from '../cards.model';
    
    export interface CardsStateModel {
        Cards: CardModel[];
        Card: CardModel;
    }
    
    
    @State<CardsStateModel>({
        name: 'CardsST',
        defaults: {
            Cards: [],
            Card: null
        }
    })
    
    export class CardsState implements NgxsOnInit {
        constructor(
            private _service: CardsService
        ) {}
    
        @Selector()
        static Cards(state: CardsStateModel) { return state.Cards; }

        @Selector()
        static Card(state: CardStateModel) { return state.Card; }
        
        ngxsOnInit( { dispatch }: StateContext<CardsStateModel>) {
            dispatch(new GetCardsAction());
        }
    
        @Action(GetCardsAction)
        get({getState, setState}: StateContext<CardsStateModel>, { pagination }: GetCardsActions) {
            return this._service.getCards(pagination).pipe(tap((res) => {
                const { records: Cards } = res;
                const state = getState();
                setState({
                    ...state.Cards,
                    Cards
                });
            }));
        }
    
        @Action(RemoveCardAction)
        remove( {getState, patchState}: StateContext<CardsStateModel>, { id }: RemoveCardAction) {
            return this._service.removeCard(String(id)).pipe(tap( (res: {success: boolean}) => {
                if (res.success) {
                    const state = getState();
                    state.Cards = state.Cards.filter(record => record['id'] !== id);
                    patchState({
                        Cards: state.Cards
                    });
                }
            }));
        }
    
        @Action(AddCardAction)
        add( {getState, patchState}: StateContext<CardsStateModel>, { card }: AddCardAction) {
            return this._service.addCard(card).pipe(tap(res => {
                const state = getState();
                patchState({
                    Cards: [...state.Cards, res['record']]
                });
            }));
        }
    
        @Action(EditCardAction)
        edit( {getState, patchState}: StateContext<CardstateModel>, { Card }: EditCardAction) {
            return this._service.edit(Card).pipe(tap(res => {
                const state = getState();
                state.Cards = state.Cards.filter((admin) => admin.id !== Card.id);
    
                patchState({
                    Cards: [...state.Cards, Card]
                });
            }));
        }
    }
    