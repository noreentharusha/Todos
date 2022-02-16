import React, { useState } from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { TiEdit } from "react-icons/ti";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import "./Todo.css";

function Todo({ text, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  const [formats, setFormats] = React.useState(() => [""]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
    <div className="todos">
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText primary={text} secondary="Deadline ⏰" />
        </ListItem>
      </List>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setEdit({ id: text.id, value: text.name })}
        className="edit-icon"
      >
        Update
      </Button>
      <ToggleButtonGroup
        value={formats}
        exclusive
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="Start" aria-label="Start">
          Start
        </ToggleButton>
        <ToggleButton value="In Progress" aria-label="In Progress">
          In Progress
        </ToggleButton>
        <ToggleButton value="Done" aria-label="Done">
          Done
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Todo;
