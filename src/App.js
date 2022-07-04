import "./App.css";
import Content from "./component/Content";
import Header from "./component/Header";
import MeetingRoom from "./component/MeetingRoom";
import SideBar from "./component/SideBar";
import SideBarRight from "./component/SideBarRight";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content />
      <SideBarRight />
    </div>
  );
}

export default App;
