import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Views/Navigation/Navigation";
import Content from "./Views/Content";
import { useEffect, useState } from "react";
import classNames from "./Utils/classNames";
import "./App.css";
import { useDispatch } from "react-redux";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "./Redux/actions/actionCreator";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaLoadQuestions(process.env.REACT_APP_ALL_QUESTION));
  }, [dispatch]);

  useEffect(() => {
    dispatch(sagaAuthCheck(process.env.REACT_APP_MAIN));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          userNavigation={userNavigation}
          classNames={classNames}
        />
        <Content
          classNames
          userNavigation={userNavigation}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
