
class Test extends Soo {
    css() {
        return `:host {
                    display:grid;
                }
                #form {
                    display:grid;
                    width:400px;
                }
                button {
                    margin-top:10px;
                    background:green;
                    color:white;
                    cursor:pointer;
                    padding:10px 5px;
                }
             `;
    }

    installed() {
        this.shadowRoot.querySelector("form").onsubmit = (event) => {
            event.preventDefault();

            const inputs = this.shadowRoot.querySelector("slot").assignedNodes({ "flatten": true }).map((node) => {
                if (node.nodeType === 1) {
                    return { "name": node.attributes.name.value, value: node.value }
                }
            }).filter(entry => entry);
            this.fireGlobal("submit-form", inputs);
        }
    }



    render() {
        return HTML`
                    <form id="form">
                        <h3>This is your dynamic form</h3>
                        <slot></slot>
                        <button type="submit">Submit</button>
                    </from>
                   `
    }
}

customElements.define("slot-example", Test);
