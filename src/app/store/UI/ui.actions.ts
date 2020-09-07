import { Action } from '@ngrx/store';

export const UIActionsTypes = {
    Text_notes: '[UI] textNotes',
};

export class notesChangedAction implements Action {
    type = UIActionsTypes.Text_notes;
    constructor( public description: any) { console.log(this.description);}
}


export type UIActions =
    | notesChangedAction;
