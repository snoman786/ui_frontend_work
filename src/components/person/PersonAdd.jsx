import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

export default function PersonAdd(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing(2),
          "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "300px",
            color: "springgreen",
          },
          "& .MuiButtonBase-root": {
            margin: theme.spacing(2),
            color: "springgreen",
          },
        },
      }));
   
    const classes = useStyles();
  return (
    <div>
      <h2 className="text-center">Add Person</h2>
      <form className={classes.root}>
        <div style={{ color: "red", fontSize: 20 }}>{props.error}</div>
        <TextField
          label="Id"
          variant="filled"
          value={props.id}
          onChange={(e) => props.setId(e.target.value)}
        />
        <TextField
          label="Name"
          variant="filled"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
        <TextField
          label="Age"
          variant="filled"
          value={props.age}
          onChange={(e) => props.setAge(e.target.value)}
        />
        <Button
          startIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          size="small"
          onClick={props.savePerson}
        >
          Add
        </Button>
      </form>
    </div>
  );
}
