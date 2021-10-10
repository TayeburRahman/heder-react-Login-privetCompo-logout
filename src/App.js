import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Header from "./Component/Home/Header/Header";
import AughProvider from "./Context/AughProvider";
import Shipping from "./Component/Shipping/Shipping";
import PrivetRoute from "./Component/PrivetRoute/PrivetRoute";
import PlaseOders from "./Component/PlaceOder/PlaseOders";
 


function App() {
  return (
    <div className="App">
      <AughProvider>
      <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/spping">
            <Shipping></Shipping>
            </PrivetRoute>
            <PrivetRoute path="/oder">
            <PlaseOders></PlaseOders>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AughProvider>
    </div>
  );
}

export default App;
