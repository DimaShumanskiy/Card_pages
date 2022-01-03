const initialState: InitialStateType = {}
type InitialStateType = {}

type ActionsType = {type: "a"}

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'a':
            return state
        default:
            return {...state}
    }
}