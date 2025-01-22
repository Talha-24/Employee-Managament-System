import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

import App from "./App";//Import means received
import AuthContext from "./Components/Context API/AuthContext";

// import "./style.css";
let root=createRoot(document.querySelector("#root"));
root.render(
    
 <AuthContext>
<App/>
</AuthContext>

)
  
  
 