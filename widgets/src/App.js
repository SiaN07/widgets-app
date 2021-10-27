import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Accordion from './components/Accordion'
import Search from "./components/Search";
import Counter from './components/Counter';
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React",
    content: "React is a JS FT framework ",
  },
  {
    title: "Why use React",
    content: "React is a fav JS framework among engs  ",
  },
  {
    title: "How do you use React",
    content: "React is used by creating components  ",
  },
];

const options = [
  {
    label: "The color red", 
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];



const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (

    <div>
      <Header />
      <Route path = "/">
        <Accordion items = {items} />
      </Route>
      <Route path = "/list">
        <Search />
      </Route>
      <Route path = "/dropdown">
        <Dropdown 
          label = 'Select a Color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}  
        />
        <p style = {{color: `${selected.value}`}}>This text is {selected.value} </p>
      </Route>
      <Route path = "/translate">
        <Translate />
      </Route>
      <Route path = "/counter">
        <Counter />
      </Route>
    </div>
  );
};

export default App;
