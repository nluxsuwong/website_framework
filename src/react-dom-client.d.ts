declare module 'react-dom/client' {
    import { ReactElement } from 'react';
    import { Root } from 'react-dom';
  
    function createRoot(container: Element | DocumentFragment, options?: { hydrate?: boolean }): Root;
  
    export { createRoot };
  }
  