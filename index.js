import { cssToDom } from "./helpers/dom.js";
import "./node_modules/kelbas/index.js";

class Soo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.cssApplied = false;
  }

  connectedCallback() {
    if (this.css) {
      this.shadowRoot.appendChild(cssToDom(this.css()));
      this.cssApplied = true;
    }
    this.install.apply(this);
    this.shadowRoot.appendChild(this.render().container);
    this.installed();
  }

  disconnectedCallback() {
    this.uninstall();
  }

  fire(name, data) {
    this.dispatchEvent(new CustomEvent(name, { detail: data }));
  }

  updateDom(content) {
    const index = this.cssApplied ? 1 : 0;
    this.shadowRoot.children[index].replaceWith(content);
  }

  update() {
    this.beforeUpdate();
    this.beforeRender();
    this.updateDom(this.render().container);
    this.afterUpdate();
  }

  install() {}

  installed() {}

  uninstall() {}

  beforeUpdate() {}

  afterUpdate() {}

  beforeRender() {}
}

window.soo = Soo;
export default Soo;
