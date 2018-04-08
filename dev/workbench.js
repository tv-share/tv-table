import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Table from "../src/Table";
import TableRow from "../src/TableRow";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        const HEAD_ITEMS = [
            { id: "name", label: "Nome".toUpperCase() },
            { id: "tel", label: "Telefone".toUpperCase() },
            { id: "icon", label: "Icone".toUpperCase() }
        ];
        
        const BODY_ITEMS = this.getItems();

        this.state = {
            HEAD_ITEMS,  
            BODY_ITEMS
        };
    }

    getItems() {
        const items = [];
        for(let i = 0; i < 10; i++) {
            items.push({
                id: Math.floor(Math.random() * 1000).toString(), 
                name: faker.name.findName(),
                tel: faker.phone.phoneNumber(),
                icon: "ícone"
            });
        }

        return items;
    }

    render() {
        return (
            <section className="test-area">
                <Table withCheckBox headItems={this.state.HEAD_ITEMS}>
                    {
                        this.state.BODY_ITEMS.map(({ id, name, tel, icon }) => {
                            return <TableRow key={id} id={id} data={{ name, tel, icon }} />;
                        })
                    }
                </Table>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

