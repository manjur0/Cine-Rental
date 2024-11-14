import { useState } from "react";
import MovieList from "./Components/cine/MovieList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { MovieContext } from "./Context";

const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <div>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </div>
  );
};

export default App;
