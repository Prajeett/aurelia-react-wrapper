import { customElement, bindable, INode } from 'aurelia';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@customElement({ name: 'react-wrapper', template: '<template></template>' })
export class ReactWrapper {
  @bindable public reactComponents: React.FunctionComponent[]; // Changed to an array of components
  private root: ReactDOM.Root | null = null;

  constructor(@INode private element: Element) {}

  public binding(): void {
    if (!this.root) {
      this.root = ReactDOM.createRoot(this.element);
    }
    
    // Render each component in the array
    const components = this.reactComponents.map((Component, index) => 
      React.createElement(Component, { key: index })
    );

    this.root.render(React.createElement(React.Fragment, null, ...components));
  }

  public unbinding(): void {
    if (this.root) {
      this.root.unmount();
    }
  }
}
