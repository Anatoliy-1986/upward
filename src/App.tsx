import React from 'react';
import GlobalStyles from "./GlobalStyles";
import About from "./components/About/index";
import Summaries from "./components/Summaries/index";
import Transform from "./components/Transform/index";


const App: React.FunctionComponent = () => {
  return (
    <>
     <GlobalStyles />
    <About />
    <Summaries />
    <Transform />
    </>
  );
}

export default App;
