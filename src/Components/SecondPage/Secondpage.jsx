import React from "react";
import "./secondpage.css";
import "survey-react";
import * as Survey from "survey-react";
import json from "./json";


function Secondpage() {
 
  return (
  <div className="returnpage">
<Survey.Survey json = {json}

/>
  </div>

  )
}

export default Secondpage;
