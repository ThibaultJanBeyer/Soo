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

  async render() {
    if (this.data.liked) {
      return HTML`<span>Liked</span>`;
    }
    return HTML`<button onclick="${this.likeIt.bind(this)}">${
      this.data.name
      }</button>`;
  }
}

customElements.define("like-button", Test);


test("Should create component", async t => {
  const element = document.createElement("like-button");
  document.body.appendChild(element);

  element.render().then(() => {
    t.equal(element.tagName, "LIKE-BUTTON", "Element has correct tag");
    t.equal(element.shadowRoot.children.length, 2, "Elements created");
    t.equal(element.shadowRoot.children[1].innerHTML, "Like me!", "Element has correct body");

    element.shadowRoot.querySelector("button").click()

    element.render().then(() => {
      t.equal(element.shadowRoot.children[1].innerHTML, "Liked", "Element clicked and body updated");
      t.pass("Component created correctly");
      t.end();
    })
  })
});