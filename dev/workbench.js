import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import TableExample from "../examples/TableExample";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="test-area">
                <TableExample />
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));