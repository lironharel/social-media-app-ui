import Home from "./pages/home/Home";
import Timeline from "./pages/timeline/Timeline";
import './app.css'
import { useState } from "react";
import Login from "./pages/login/Login";

function App() {
  const [route, setRoute] = useState('login')

  return (
    <div>
      {route === 'timeline' 
      ? <Timeline setRoute={setRoute} />
      : route === 'home'
      ? <Home setRoute={setRoute} />
      : route === 'login' || route === 'register'
      ? <Login route={route} setRoute={setRoute} />
      : <h1>Route not developed</h1>
      }
    </div>
  );
}

export default App;
