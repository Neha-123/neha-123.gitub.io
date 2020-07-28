import React, { useState } from 'react';
import { Select, FormControl, InputLabel, Input, MenuItem } from '@material-ui/core';

const SelectCustom = (props) => {
    const names = ['Recent Added', 'Upcoming Deadline', 'Task Completed', 'Pending task'];
    const [personName, setPersonName] = React.useState('Recent Added');

    const handleChange = (event) => {
        setPersonName(event.target.value);
        props.setOrder(event.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel >Sort</InputLabel>
                <Select
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
                </Select>
        </FormControl>
    )
}

export default SelectCustom;