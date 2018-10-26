import Soo from "../build/soo.esm.js";

class Test extends Soo {
  install() {
    this.data = { liked: false };
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
    return HTML`<button onclick="${this.likeIt.bind(this)}">Like me!</button>`;
  }
}

customElements.define("like-button", Test);
