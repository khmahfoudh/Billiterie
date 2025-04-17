// resources/js/app.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/login";
import Events from "./components/Events";
import Register from "./components/register";
import Ticket from "./components/ticket";
const App = () => {
  const page = document.getElementById("app").getAttribute("data-page");

  if (page === "events") {
    return <Events />;
  } 
  if (page === "register") {
    return <Register />;
  } 
  if (page === "ticket") {
    return <Ticket />;
  } 

  return <Login />;
};

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
