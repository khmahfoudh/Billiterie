// resources/js/app.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/login";
import Events from "./components/Events";
import Register from "./components/register";
const App = () => {
  const page = document.getElementById("app").getAttribute("data-page");

  if (page === "events") {
    return <Events />;
  } 
  if (page === "register") {
    return <Register />;
  } 

  return <Login />;
};

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
