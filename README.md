# Soo

![gzip size](http://img.badgesize.io/https://unpkg.com/soo.js/build/soo.min.js?compression=gzip)

### Why ?

* Make custom elements with easy API
* Library size gziped 1KB
* No bundling needed, for virtual-dom or anything else, so if using modern browsers, just plug and create.
* Has same API as [omi](https://github.com/Tencent/omi) but is great alternative if you want to create custom elements without *JSX*, *virtual DOM* and *store*.


----
### install

`npm install soo.js`

or add to index.html 
```HTML
<script src="https://unpkg.com/soo.js"></script>
```

----
### Examples

Check live examples [here](https://tonis2.github.io/Soo/example/index.html)

Example files [here](https://github.com/tonis2/Soo/tree/master/example)

----

Basic example
```js
import Soo from "soo.js";

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
    return HTML`<button onclick="${this.likeIt.bind(this)}">${this.data.name}</button>`;
  }
}

customElements.define("like-button", Test);
```
Async example 
```js

class Test extends Soo {
    getData() {
        return fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(json => Promise.resolve(json))
    }
  
    css() {
      return `:host {
                display:grid;
              }
              #users-container {
                  display:grid;
                  width:400px;
              }
              .users-list {
                  display:grid;
                  grid-row-gap:3px;
                  margin:5px 0;
                  background:teal;
                  padding:10px;
                  color:white;
              }
              .name {
                  text-decoration:underline;
              }
             `;
    }
  
    async render() {
        const data = await this.getData();

        return HTML`
                    <section id="users-container">
                        <h3>Users list</h3>
                        ${data.map(item => `<div class="users-list">
                                                <span class="name">Name: ${item.name}</span>
                                                <span class="emai">Email: ${item.email}</span>
                                            </div>`).join("")}
                    </section>
                   `
    }
  }
  
  customElements.define("async-example", Test);
  
```
