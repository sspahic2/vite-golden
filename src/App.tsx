// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import './App.css';
// import HomePage from './components/HomePage/HomePage';



// function App() {

//   return (

//     <Router>
//       <HomePage />
//     </Router>

//   )
// }

// export default App



import { store } from './redux/ReduxStore';



import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './main';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;


