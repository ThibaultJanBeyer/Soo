import { cssToDom } from "./helpers/dom.js";
import "./node_modules/kelbas/index.js";

class Soo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.css && this.shadowRoot.appendChild(cssToDom(this.css()));
    this.install.apply(this);
    this.updateDom(this.render());
  }

  disconnectedCallback() {
    this.uninstall();
  }

  fire(name, data) {
    this.dispatchEvent(new CustomEvent(name, { detail: data }));
  }

  updateDom(content) {
    if (this.shadowRoot.children.length === 1) {
      this.shadowRoot.appendChild(content.container);
    } else {
      this.shadowRoot.children[1].replaceWith(content.container);
    }
  }

  update() {
    this.beforeUpdate();
    this.beforeRender();
    this.updateDom(this.render());
    this.afterUpdate();
  }

  install() {}

  installed() {}

  uninstall() {}

  beforeUpdate() {}

  afterUpdate() {}

  beforeRender() {}
}

export default Soo;
