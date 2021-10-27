import React from 'react'
import Dropdown from './components/Dropdown';
// import Accordion from './components/Accordion'
import Search from './components/Search';
// import Counter from './components/Counter';

const items = [
    {
        title: "What is React",
        content: "React is a JS FT framework "
    },
    {
        title: "Why use React",
        content: "React is a fav JS framework among engs  "
    },
    {
        title: "How do you use React",
        content: "React is used by creating components  "
    }
];

const App =  () => {
    return(
        <div>
            {/* <Accordion items = {items}/> */}
            {/* <Counter /> */}
            {/* <Search/> */}
            <Dropdown/>
        </div>
    )
}

export default App