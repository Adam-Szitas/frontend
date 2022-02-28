export type ButtonTypes = 'SUBMIT' | 'ADD' | 'DELETE' | 'UPDATE' | 'NEXT' | 'NAVBUTTON';

export interface DropButtons {
  button: DropButton;
}
export interface DropButton {
  text: string;
  type: ButtonTypes;
  trigger: (arg0: string) => string;
}
