import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../actions";

const AddMessage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <section id="new-message" style={{display: "flex", alignItems: "center"}}>
      <span style={{ paddingRight: "5px", whiteSpace: "nowrap" }}>You &gt;</span>
      <input
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          height: "auto",
          fontFamily: "Press Start 2P",
          fontSize: "17px",
          paddingBottom: "2.7px"
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(addMessage(inputValue, "Me"));
            setInputValue("");
          }
        }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </section>
  );
};

export default AddMessage;
