import react from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import TaskList from "./TaskList";


const App = () => {
  return (
    <div>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
};

export default App;
