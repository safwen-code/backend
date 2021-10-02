import React, { useReducer } from "react";
import axios from "axios";
import ThingContext from "./ThingContext";
import ThingReducer from "./ThingReducer";
import {
  SET_LOADING,
  GET_THINGS,
  EDITE_THING,
  DELET_THING,
  ADD_THING,
} from "./Types";

const ThingState = (props) => {
  const initialState = {
    things: [],
    thing: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(ThingReducer, initialState);

  // setLoading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //getallThing
  const GetAllThings = async () => {
    try {
      setLoading(true);
      const config = {
        Headers: { "Content-type": "application/json" },
      };
      const res = await axios.get("/thing/alldoc", config);
      console.log("la res de getAlldoc", res.data.thing);
      dispatch({ type: GET_THINGS, payload: res.data.thing });
    } catch (err) {
      console.error(err.msg);
    }
  };

  //add thing
  const AddThing = async ({ data, history }) => {
    try {
      const res = await axios.post("/thing/add", data);
      console.log("add Thing", res.data);
      dispatch({ type: ADD_THING, payload: res.data });
      history.push("/home");
    } catch (err) {
      console.error(err.msg);
    }
  };

  //delete Thing
  const deleteThing = async (_id) => {
    try {
      const res = await axios.delete(`/thing//delete/${_id}`);
      console.log("res to delet thing", res.data);
      dispatch({ type: DELET_THING, payload: res.data });
    } catch (err) {
      console.error(err.msg);
    }
  };
  //return the ProviderContext
  return (
    <ThingContext.Provider
      value={{
        loading: state.loading,
        things: state.things,
        GetAllThings,
        setLoading,
        AddThing,
        deleteThing,
      }}
    >
      {props.children}
    </ThingContext.Provider>
  );
};

export default ThingState;
