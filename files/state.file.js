const names = require('../helpers/namesFormatter.helper');

module.exports = function stateFile(name, singleName) {
    const {upperName, lowerName, lowerSingle, capSingle, capName} = names(name, singleName);


    return `import { State, NgxsOnInit, StateContext, Action, Selector } from '@ngxs/store';
    import { ${upperName}Service } from '../model/${lowerName}.service';
    import { Get${capName}Action, Get${capSingle}Action ,Remove${capSingle}Action, Add${capSingle}Action, Edit${capSingle}Action } from './${lowerName}.actions';
    import { tap } from 'rxjs/operators';
    import { ${capSingle}Model } from '../model/${lowerName}.model';
    
    export interface ${capName}StateModel {
        ${capName}: ${capSingle}Model[];
        ${capSingle}: ${capSingle}Model;
    }
    
    
    @State<${capName}StateModel>({
        name: '${capName}ST',
        defaults: {
            ${capName}: [],
            ${capSingle}: null
        }
    })
    
    export class ${capName}State implements NgxsOnInit {
        constructor(
            private _service: ${capName}Service
        ) {}
    
        @Selector()
        static ${capName}(state: ${capName}StateModel) { return state.${capName}; }

        @Selector()
        static ${capSingle}(state: ${capSingle}StateModel) { return state.${capSingle}; }
        
        ngxsOnInit( { dispatch }: StateContext<${capName}StateModel>) {
            dispatch(new Get${capName}Action());
        }
    
        @Action(Get${capName}Action)
        get({getState, setState}: StateContext<${capName}StateModel>, { pagination }: Get${capName}Actions) {
            return this._service.get${capName}(pagination).pipe(tap((res) => {
                const { records: ${capName} } = res;
                const state = getState();
                setState({
                    ...state.${capName},
                    ${capName}
                });
            }));
        }
    
        @Action(Remove${capSingle}Action)
        remove( {getState, patchState}: StateContext<${capName}StateModel>, { id }: Remove${capSingle}Action) {
            return this._service.remove${capSingle}(String(id)).pipe(tap( (res: {success: boolean}) => {
                if (res.success) {
                    const state = getState();
                    state.${capName} = state.${capName}.filter(record => record['id'] !== id);
                    patchState({
                        ${capName}: state.${capName}
                    });
                }
            }));
        }
    
        @Action(Add${capSingle}Action)
        add( {getState, patchState}: StateContext<${capName}StateModel>, { ${lowerSingle} }: Add${capSingle}Action) {
            return this._service.add${capSingle}(${lowerSingle}).pipe(tap(res => {
                const state = getState();
                patchState({
                    ${capName}: [...state.${capName}, res['record']]
                });
            }));
        }
    
        @Action(Edit${capSingle}Action)
        edit( {getState, patchState}: StateContext<${capName}tateModel>, { ${capSingle} }: Edit${capSingle}Action) {
            return this._service.edit(${capSingle}).pipe(tap(res => {
                const state = getState();
                state.${capName} = state.${capName}.filter((admin) => admin.id !== ${capSingle}.id);
    
                patchState({
                    ${capName}: [...state.${capName}, ${capSingle}]
                });
            }));
        }
    }
    `
}