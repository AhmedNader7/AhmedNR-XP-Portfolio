import { useUI } from "./context/UIControl";
import DeskTop from "./DeskTop/DeskTop";
import RestartScreen from "./RestartScreen/RestartScreen";

function App() {
  const { isRestartTrue } = useUI();
  return <>{isRestartTrue ? <RestartScreen /> : <DeskTop />}</>;
}

export default App;
