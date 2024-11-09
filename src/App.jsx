import Content from "./Components/Content";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Content />
        </div>
      </main>
    </div>
  );
};

export default App;
