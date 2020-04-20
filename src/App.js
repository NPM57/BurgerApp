import React from 'react';
import Layout from './hoc/Auxiliary/Auxiliary';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  return (
     <Layout>
       <BurgerBuilder></BurgerBuilder>
     </Layout>
  );
}

export default App;
