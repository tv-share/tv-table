import React, { Component } from "react";
import PropTypes from "prop-types";

class TableRow extends Component {

	renderCheckBox() {
		if(this.props.withCheckBox) {
            if(!this.props.checkboxOptions) throw new Error("Parameter 'checkboxOptions' is required when 'withCheckBox' is true.");
            const { id, checkboxOptions: { selected, onChange }} = this.props;

			return (
				<td className="tv-checkbox">
					<input id={id} checked={selected} onChange={onChange} type="checkbox" />
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
					data.map(d => {
						return <td key={d}>{d}</td>;
					})
				}
			</tr>
		);
	}
}

TableRow.defaultProps = {
	data: []
};

TableRow.propTypes = {
	id: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
	withCheckBox: PropTypes.bool
};

export default TableRow;