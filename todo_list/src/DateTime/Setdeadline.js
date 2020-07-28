import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers'

const SetDeadline = (props) => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                clearable={props.clearable}
                placeholder={props.placeholder}
                disabled={!props.input}
                disablePast
                value={props.selectedDate}
                onChange={props.handleDateChange}
                invalidDateMessage = ''
                invalidLabel= ''
                maxDateMessage= ''
                minDateMessage='' />
        </MuiPickersUtilsProvider>
    )
}

export default SetDeadline;

