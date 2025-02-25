import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";


function App() {
  const [query, setQuery] = useState("")

  const handleSearched = (e) => {
    setQuery(e.target.value)
  }

  return <>
    <header className="max-w-[1440px] w-11/12 mx-auto">
    <Header handleSearched={handleSearched}></Header>
    <Banner></Banner>
    </header>

    <main className="max-w-[1440px] w-11/12 mx-auto mt-7">
    <RecipeContainer query={query} handleSearched={handleSearched}></RecipeContainer>

    </main>

    <Footer></Footer>

  </>;
}

export default App;
