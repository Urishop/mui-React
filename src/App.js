import React from "react";
import Form from "./component/Form";
import ImaList from "./component/RasmList";
import Navbar from "./component/Navbar";
import Gridlar from "./component/Gridlar";
import SignIn from "./login/SignIn";

const linkArray = ['Products','Services','Overwiev', 'ContactUs'];


function App() {
  return (
    <div >
       {/* <Form /> */}
       <Navbar links={linkArray}/>
       <ImaList />
       <Gridlar />
       <SignIn />
    </div>
  );
}

export default App;
