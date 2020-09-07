import { UIState } from './ui.state';
import { UIActions, UIActionsTypes } from './ui.actions';

export const appInitialState: UIState = {
    description:''
};

export function uiReducer(state = appInitialState, action: UIActions): UIState {

    switch (action.type) {

        case UIActionsTypes.Text_notes: {
            console.log(action.description)
            return Object.assign(state, {
                ...state,
                description:action.description
            });
        }

        default: {
            return state;
        }
    }
}
