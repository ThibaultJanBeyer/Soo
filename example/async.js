
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
  