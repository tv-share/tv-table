import React, { Component } from 'react';

import TableHead from "../TableHead";

class Table extends Component {
    render() {
        const { head, withCheckBox } = this.props;
        return (
            <table className="tv-table">
                <TableHead withCheckBox={withCheckBox} items={head} />
            </table>
        );
    }
}

export default Table;