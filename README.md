# tv-table

A ready-to-use table component

```bash
// install
npm i -S @thevelops/tv-table
```
## How to
Example [here]("./examples/TableExample.js").


## Components
- [Table](#table)
- [Table Row](#table-row)

## Docs
### Table
```javascript
import Table from "@thevelops/tv-table/dist/Table";
```

```javascript
@import "path/to/node_modules/@thevelops/tv-table/dist/Table/style";
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
import TableRow from "@thevelops/tv-table/dist/TableRow";
```

```javascript
@import "path/to/node_modules/@thevelops/tv-table/dist/TableRow/style";
```

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
data | array | (required)
className | string |
onClick | func |
checkboxOptions | object | required when _withCheckBox_ is _true_

**Field** | **Type** | **Description**
--- | :---: | ---
selected | bool | required
onChange | func | required


## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).