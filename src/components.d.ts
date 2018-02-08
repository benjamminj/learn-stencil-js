/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  MyComponent as SlickButton
} from './components/slick-button/slick-button';

declare global {
  interface HTMLSlickButtonElement extends SlickButton, HTMLElement {
  }
  var HTMLSlickButtonElement: {
    prototype: HTMLSlickButtonElement;
    new (): HTMLSlickButtonElement;
  };
  interface HTMLElementTagNameMap {
    "slick-button": HTMLSlickButtonElement;
  }
  interface ElementTagNameMap {
    "slick-button": HTMLSlickButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "slick-button": JSXElements.SlickButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SlickButtonAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }