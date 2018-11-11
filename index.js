import { cssToDom } from "./helpers/dom.js";
import "./node_modules/kelbas/index.js";

export default class Soo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.cssApplied = false;
  }

  async connectedCallback() {

    if (this.css) {
      this.shadowRoot.appendChild(cssToDom(this.css()));
      this.cssApplied = true;
    }
    this.install.apply(this);

    if (this.render) {
      const element = await this.render();
      this.shadowRoot.appendChild(element.container);
    }

    this.installed();
  }

  disconnectedCallback() {
    this.uninstall();
  }

  fire(name, data) {
    this.dispatchEvent(new CustomEvent(name, { detail: data }));
  }

  fireGlobal(name, data) {
    document.dispatchEvent(new CustomEvent(name, { detail: data }));
  }

  updateDom(content) {
    const index = this.cssApplied ? 1 : 0;
    this.shadowRoot.children[index].replaceWith(content);
  }

  async update() {
    this.beforeUpdate();
    this.beforeRender();

    if (this.render) {
      const element = await this.render();
      this.updateDom(element.container);
    }

    this.afterUpdate();
  }

  install() { }

  installed() { }

  uninstall() { }

  beforeUpdate() { }

  afterUpdate() { }

  beforeRender() { }
}

window.Soo = Soo;
