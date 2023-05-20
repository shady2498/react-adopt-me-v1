import React from "react";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext.js";

import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    // replace <SearchParams /> and <h1>Adopt Me!</h1>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );

  // creates element - first it creates div and then inside div it creates h1 heading with adopt me text
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "Luna",
  //     breed: "idk",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "sda",
  //     breed: "idk2",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "csds",
  //     breed: "idk3",
  //   }),
  // ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
// App is the component
root.render(<App />);
