import React from "react";
import "./App.css";
import Search from "./components/Search";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeriesDetails from "./components/SeriesDetails";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/tvseries/:id" element={<SeriesDetails />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
