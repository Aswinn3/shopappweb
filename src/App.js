import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"/>
      <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
