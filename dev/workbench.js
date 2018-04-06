import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Table from "../src/Table";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            HEAD_ITEMS: [
                {
                    label: "Nome".toUpperCase()
                },
                {
                    label: "Telefone".toUpperCase()
                },
                {
                    label: "Icone".toUpperCase()
                }
            ]
        };
    }

    render() {
        return (
            <section className="test-area">
                <Table withCheckBox head={this.state.HEAD_ITEMS} />
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

