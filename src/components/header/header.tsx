// import { useState } from 'react';
import Navbar from "./navbar";
import Searchbar from "./searchbar";

const Header = () => {
  return (
    <section>
      <header>
        <Navbar></Navbar>
        <Searchbar className="1"></Searchbar>
      </header>
    </section>
  );
};

export default Header;
