import React, { Component } from 'react';

class TableHead extends Component {

    renderItems() {
        const { items } = this.props;
        return items.map(({ label }) => {
            return <th key={label}>{label}</th>
        });
    }

    renderCheckBoxes() {
        if(this.props.withCheckBox) {
            return (
                <th className="tv-checkbox">
                    <input type="checkbox" />
                </th>
            );
        }
    }


    render() {
        const { withCheckBox } = this.props;
        return (
            <thead className="tv-thead">
                <tr>
                    {this.renderCheckBoxes()}
                    {this.renderItems()}
                </tr>
            </thead>
        );
    }
}

export default TableHead;