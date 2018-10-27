const test = require("tape");
const Soo = require("../build/soo.min.js");
const example = require("./example.js");


test("Should create component", t => {
  const element = document.createElement("like-button");
  document.body.appendChild(element);
  const component_selector = document.querySelector("like-button");
  t.equal(component_selector.tagName, "LIKE-BUTTON");
  t.equal(component_selector.shadowRoot.children.length, 2);
  t.pass("component created correctly");
  t.end();
});

test.onFinish(window.__close__);
