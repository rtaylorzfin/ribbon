import { useState } from 'react';
import { DEFAULT_TABLE_STATE } from '../components/data-table';

export default function useTableState(tableState, setTableState) {
    console.log('a');
    if ((tableState && !setTableState) || (!tableState && setTableState)) {
        console.log('b');
        if (process.env.NODE_ENV === 'development') {
            console.warn('Table state must either be controlled (by setting tableState and onTableStateChange) or uncontrolled (by setting neither)');
        }
    }
    console.log('c');
    console.log('useState');
    console.log(useState);

    const [controlledTableState, setControlledTableState] = useState(DEFAULT_TABLE_STATE);
    console.log('d');
    tableState = tableState || controlledTableState;
    console.log('e');
    setTableState = setTableState || setControlledTableState;
    console.log('f');

    return [tableState, setTableState];
}
