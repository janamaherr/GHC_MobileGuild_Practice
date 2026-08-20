// Task: Use Copilot to generate TypeScript interfaces for this SDUI schema.
export type SDUIScreenType = 'Screen';
export type SDUIButtonType = 'Button';
export type SDUITextType = 'Text';

export interface SDUIScreenSchema {
  type: SDUIScreenType;
  components: SDUIComponent[];
}

export interface SDUIButtonComponent {
  type: SDUIButtonType;
  text: string;
  action: string;
}

export interface SDUITextComponent {
  type: SDUITextType;
  value: string;
}

export type SDUIComponent = SDUIButtonComponent | SDUITextComponent;

export const schema: SDUIScreenSchema = {
  type: "Screen",
  components: [
    { type: "Button", text: "Click Me", action: "onPress" },
    { type: "Text", value: "Hello World" }
  ]
};