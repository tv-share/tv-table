import React, { Component } from "react";
import PropTypes from "prop-types";

class TableHead extends Component {

	renderItems() {
		const { items } = this.props;
		return items.map(({ label, id, onClick }) => {
			return <th id={id} onClick={onClick} key={id}>{label}</th>;
		});
	}

	renderCheckBox() {
		const { withCheckBox, options: { onChange, checked } } = this.props;
		if(withCheckBox) {
			return (
				<th className="tv-checkbox">
					<input onChange={onChange} checked={checked} type="checkbox" />
				</th>
			);
		}
	}

	render() {
		const { withCheckBox, options: { className } } = this.props;
		return (
			<thead className={`tv-thead${className ? ` ${className}` : ""}`}>
				<tr>
					{this.renderCheckBox()}
					{this.renderItems()}
				</tr>
			</thead>
		);
	}
}

TableHead.defaultProps = {
	items: [],
	options: {}
};

TableHead.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string,
		onClick: PropTypes.func
	})).isRequired,
	options: PropTypes.shape({
		className: PropTypes.string,
		onChange: PropTypes.func,
		checked: PropTypes.bool
	}),
	className: PropTypes.string,
	withCheckBox: PropTypes.bool
};

export default TableHead;