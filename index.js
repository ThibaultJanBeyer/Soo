import { cssToDom } from "./helpers/dom.js";
import "./node_modules/kelbas/index.js";

export default class Soo extends HTMLElement {
  constructor() {
    super();
    if (!this.noShadow) this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.container = this.noShadow ? this : this.shadowRoot;

    if (this.css) this.container.appendChild(cssToDom(this.css()));

    this.install.apply(this);
    this.beforeRender();

    if (this.render) {
      const element = await this.render();
      this.container.appendChild(element.container);
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
    this.container.lastChild.replaceWith(content);
  }

  async update() {
    this.beforeUpdate();

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
