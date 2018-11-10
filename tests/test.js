const test = require("tape");
const Soo = require("../build/soo.min.js");

class Test extends Soo {
  install() {
    this.data = { liked: false, name: "Like me!" };
  }

  likeIt() {
    this.data.liked = true;
    this.update();
  }

  css() {
    return `:host {
              padding:5px;
            }
            button {
                background:green;
                padding:10px 5px;
                outline:none;
                cursor:pointer;
            }`;
  }

  render() {
    if (this.data.liked) {
      return HTML`<span>Liked</span>`;
    }
    return HTML`<button onclick="${this.likeIt.bind(this)}">${
      this.data.name
      }</button>`;
  }
}

customElements.define("like-button", Test);


test("Should create component", t => {

  const element = document.createElement("like-button");
  document.body.appendChild(element);
  const component_selector = document.querySelector("like-button");
  t.equal(component_selector.tagName, "LIKE-BUTTON");
  t.equal(component_selector.shadowRoot.children.length, 2);
  t.pass("component created correctly");
  t.end();
});