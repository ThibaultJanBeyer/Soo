
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
                  background:red;
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

  Test.prototype.noShadow = true;
  
  customElements.define("no-shadow", Test);
  