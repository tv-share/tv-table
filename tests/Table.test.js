import React from 'react';
import renderer from 'react-test-renderer';

import Table from "../src/Table/Table";
import samples from "./Table.sample";
import TableRow from '../src/TableRow/TableRow';

console.log("samples", samples);

const fn = () => { };

const { headItems, bodyItems } = samples;

it('renders correctely - without checkbox', () => {
	const component = renderer.create(
		<Table headItems={headItems} >
            {
                bodyItems.map(({ id, name, tel }) => {
                    return <TableRow key={id} id={id} data={{ name, tel }} />;
                })
            }
        </Table>
	);

	expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctely - with checkbox', () => {
	const component = renderer.create(
		<Table withCheckBox headItems={headItems} >
            {
                bodyItems.map(({ id, name, tel }) => {
                    return <TableRow key={id} id={id} data={{ name, tel }} />;
                })
            }
        </Table>
	);

	expect(component.toJSON()).toMatchSnapshot();
});