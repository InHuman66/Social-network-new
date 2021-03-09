// import { Dispatch } from "redux"

const initialState = {

}
type ActionsType = any
type InitialStateType = typeof initialState


export const headerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}

// export const exampleTC = () => (dispatch: Dispatch) => {
//
// }
// export const exampleAC = (error: string | null) => ({ type: '', error } as const)