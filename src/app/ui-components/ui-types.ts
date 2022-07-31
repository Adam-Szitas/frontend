export type ButtonTypes = 'BUTTON' | 'SUBMIT' | 'ADD' | 'DELETE' | 'UPDATE' | 'NEXT' | 'NAVBUTTON' | 'ICON';

export type TargetPageType = 'NEW_PAGE' | 'THIS_PAGE';

export type OrientationCustomType = 'LEFT' | 'RIGHT' | 'CENTER';

export interface DropButtons {
    button: DropButton;
}
export interface DropButton {
    text: string;
    type: ButtonTypes;
    trigger: (arg0: string) => string;
}

export type DirectionType = 'COLUMN' | 'ROW';
