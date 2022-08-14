import React from "react";
import { Button } from "react-bootstrap";

const field = () => {
    return (
        <div>
            <div className="field">
<label>Name</label>
<input type="text" naem="name" placeholder="Name"></input>
            </div>
            <div className="field">
<label>Email</label>
<input type="text" naem="name" placeholder="Name"></input>
            </div>
        <Button className="danger">Add</Button>
        </div>
    )
};

export default field;