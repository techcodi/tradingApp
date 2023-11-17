import "./App.css";
import Welcome from "./components/Login-SignUp/Welcome/Welcome";
import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";

function App() {
  const [loading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <div className="wlc-anim">
        {loading ? (
          <DotLoader
            color={"white"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Welcome />
        )}
      </div>
    </div>
  );
}

export default App;
