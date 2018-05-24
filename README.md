# tv-table

A ready-to-use table component

```bash
// install
npm i -S @thevelops/tv-table
```
## How to
```javascript

const head = [
    { "id": "name", "label": "NOME" },
    { "id": "tel", "label": "TELEFONE" }
];
const body = [
    {
        "id": "1",
        "name": "John Smith",
        "tel": "123"
    },
    {
        "id": "2",
        "name": "Smith Johnson",
        "tel": "456"
    }
];

<Table withCheckBox headItems={head}>
    {
        body.map(({ id, name, tel, icon }) => {
            return <TableRow key={id} id={id} data={[ name, tel ]} />;
        })
    }
</Table>
```


## Components
- [Table](#table)
- [Table Row](#table-row)

## Docs
### Table
```javascript
import Table from "tv-buttons/dist/Table";
```

**Field** | **Type** | **Description**
--- | :---: | ---
headItems | array | (required) array of [head items](head-items) objects
headOptions | array | array of [head options](head-options) objects
className | string |
withCheckBox | bool | default: false

#### Head Items

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
label | string |
onClick | func |

#### Head Options

**Field** | **Type** | **Description**
--- | :---: | ---
className | string |
onChange | func | onChange method for the check box. Required when _withCheckBox_ is _true_.
checked | bool | checked state for the check box. Required when _withCheckBox_ is _true_.

### Table Row
```javascript
import TableRow from "tv-buttons/dist/TableRow";
```

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
data | array | (required)
className | string |
onClick | func |

## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).