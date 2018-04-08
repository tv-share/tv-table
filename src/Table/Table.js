import React, { Component } from 'react';
import PropTypes from "prop-types";

import TableHead from "./TableHead";

class Table extends Component {
    render() {
        const { withCheckBox, className, headItems, headOptions } = this.props;
        return (
            <table className={`tv-table${className ? ` ${className}` : ""}`}>
                <TableHead withCheckBox={withCheckBox} items={headItems} options={headOptions} />
                <tbody>
                    {this.props.children.map(child => {
                        return React.cloneElement(child, { withCheckBox });
                    })}
                </tbody>
            </table>
        );
    }
}

Table.defaultProps = {
    children: [],
    withCheckBox: false
};

Table.propTypes = {
    headItems: PropTypes.array.isRequired,
    headOptions: PropTypes.object,
    className: PropTypes.string,
    withCheckBox: PropTypes.bool
};

export default Table;