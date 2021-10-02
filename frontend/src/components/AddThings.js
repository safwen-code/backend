import React,{useState,useRef, useContext} from "react";
import {  withRouter } from "react-router-dom";
import { Form , Button } from "react-bootstrap";
import ThingContext from "../Context/ThingContext";
const AddThings = ({history}) => {
  
    const [Thing, setThing] = useState({
        titel: "",
        description: "",
        imageUrl: "",
        userId: "",
        price: "",
      });
      const forma = useRef(null);
      const { titel, description, price, userId, imageUrl } = Thing;

      const thingContext = useContext(ThingContext)
      const {AddThing} = thingContext

      const onsubmit = async (e) => {
        e.preventDefault();
        console.log("Thing", Thing);
        const data = new FormData(forma.current);
        console.log('the data ' , data)
        AddThing({data,history})
      };
      return (
        <Form ref={forma}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titel</Form.Label>
            <Form.Control
              type="text"
              placeholder="titel"
              name="titel"
              defaultValue={titel}
              onChange={(e) => setThing({ ...Thing, titel: e.target.value })}
            />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>descrption</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              defaultValue={description}
              onChange={(e) => setThing({ ...Thing, description: e.target.value })}
            />
          </Form.Group>
    
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control
              type="file"
              multiple
              name="imageUrl"
              defaultValue={imageUrl}
              onChange={(e) => setThing({ ...Thing, imageUrl: e.target.files[0] })}
            />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserId</Form.Label>
            <Form.Control
              type="text"
              placeholder="titel"
              name="userId"
              defaultValue={userId}
              onChange={(e) => setThing({ ...Thing, userId: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>price</Form.Label>
            <Form.Control
              type="text"
              placeholder="titel"
              name="price"
              defaultValue={price}
              onChange={(e) => setThing({ ...Thing, price: e.target.value })}
            />
          </Form.Group>
    
          <Button variant="primary" type="submit" onClick={(e) => onsubmit(e)}>
            Add Thing
          </Button>
        </Form>
      );
};

export default withRouter(AddThings)  ;
