import "./App.css";
import { Chat } from "./Components/Chat";
import MainRoutes from "./pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <Chat />
    </div>
  );
}

export default App;
