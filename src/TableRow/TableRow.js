import React, { Component } from 'react';
import PropTypes from "prop-types";

class TableRow extends Component {

    renderCheckBox() {
        if(this.props.withCheckBox) {
            return (
                <td className="tv-checkbox">
                    <input type="checkbox" />
                </td>
            );
        }
    }

    render() {
        const { id, data, withCheckBox, className, onClick } = this.props;
        return (
            <tr onClick={onClick} id={id} className={`tv-row${withCheckBox ? " -pointer" : ""}${className ? ` ${className}` : ""}`}>
                {this.renderCheckBox()}
                {
                    Object.keys(data).map(k => {
                        return <td>{data[k]}</td>
                    })
                }
            </tr>
        );
    }
}

TableRow.defaultProps = {
    data: {}
};

TableRow.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    withCheckBox: PropTypes.bool
};

export default TableRow;