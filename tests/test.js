const test = require("tape");
const Soo = require("../build/soo.min.js");

class Test extends Soo {
  install() {
    this.data = { name: false };
  }

  css() {
    return `h2 {
              color:green;
            }`;
  }

  render() {
    return HTML`<h2>${this.data.name}</h2>`;
  }
}
customElements.define("test-element", Test);

test("Should create component", t => {
  const element = document.createElement("test-element");
  document.body.appendChild(element);
  const component_selector = document.querySelector("test-element");
  t.equal(component_selector.tagName, "TEST-ELEMENT");
  t.pass("component created correctly");
  t.end();
});

test.onFinish(window.__close__);
