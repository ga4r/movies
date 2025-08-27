import "./App.scss";
import FirstScreen from "./components/FirstScreen/FirstScreen.jsx";
import Main from "./components/Main/Main.jsx";
function App() {
  return (
    <>

      <div className="contentWrapper">
        <FirstScreen />
        <Main showBanner />
    </div>
    </>
  );
}

export default App;
