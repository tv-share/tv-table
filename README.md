# tv-table

A ready-to-use table component
```bash
// install
npm i -S @thevelops/tv-table
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
--- | :---: | ---
id | string | (required)
label | string |
onClick | func |

#### Head Options
className | string |
onChange | func | onChange method for the check box. Required when _withCheckBox_ is _true_.
checked | bool | checked state for the check box. Required when _withCheckBox_ is _true_.

### Table Row
--- | :---: | ---
id | string | (required)
data | array | (required)
className | string |
onClick | func |

## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).