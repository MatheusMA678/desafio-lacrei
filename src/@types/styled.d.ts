import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      green: string;
      lightGreen: string;
      black: string;
      darkGray: string;
      gray: string;
    };
  }
}
