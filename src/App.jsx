 
 
import MainPageNavBar from "./components/MainPage/MainPageNavBar";
import MainPageRouting from "./components/MainPage/MainPageRouting";
import './styles/app-styles.css' 
 
function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <MainPageNavBar />
      <MainPageRouting />  
         
    </div>
  );
}

export default App;

