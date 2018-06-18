import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Table from "../src/Table";
import TableRow from "../src/TableRow";

import "../src/Table/style.styl";
import "../src/TableRow/style.styl"

class TableExample extends React.Component {

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
            BODY_ITEMS,
            SELECTED_ROWS: []
        };
    }

    getItems() {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                id: Math.floor(Math.random() * 1000).toString(),
                name: faker.name.findName(),
                tel: faker.phone.phoneNumber(),
                icon: "ícone"
            });
        }

        return items;
    }

    handleCheckboxChange(e) {
        const { id } = e.currentTarget;
        const selected = this.state.SELECTED_ROWS.map(r => r);
        if (selected.includes(id)) {
            selected.splice(selected.indexOf(id), 1);
        } else {
            selected.push(id);
        }

        this.setState({ SELECTED_ROWS: selected });
    }

    render() {
        return (
            <section className="test-area">
                <Table withCheckBox headItems={this.state.HEAD_ITEMS}>
                    {
                        this.state.BODY_ITEMS.map(({ id, name, tel, icon }) => {
                            return <TableRow
                                data={[name, tel, icon]}
                                checkboxOptions={{ checked: this.state.SELECTED_ROWS.includes(id), onChange: this.handleCheckboxChange.bind(this) }}
                                onClick={this.handleCheckboxChange.bind(this)}
                                id={id}
                                key={id} />;
                        })
                    }
                </Table>
            </section>
        )
    }
}

export default TableExample;