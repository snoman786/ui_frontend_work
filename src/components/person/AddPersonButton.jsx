import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import { PlayCircleFilledWhite } from '@material-ui/icons';

const style = {
    color: 'purple',
    margin: '10px'
}

const useStyles = makeStyles({
    button: {
        display: 'block',
        margin: 'auto',
        alignItems: 'center',
    },
});

const AddPerson = (props) => {
    const classes = useStyles();
    return (
        <Button startIcon={<SaveIcon />} className={classes.button} variant="contained" color="primary" size="small"
        onClick= {() => props.clicked()}>Add Person</Button>)
}

export default AddPerson;