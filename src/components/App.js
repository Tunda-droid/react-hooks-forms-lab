import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleSearchChange(newSearchValue) {
    setSearch(newSearchValue);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        onItemFormSubmit={handleAddItem}
        search={search}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
