// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // import React, { use } from "react";
// // // import Welcome from "./components/Welcome";
// // // import Header from "./components/Header";
// // // import Footer from "./components/Footer"
// // // import Auth from "./components/Auth";
// // // import Test from"./components/Test"
// // // import Hello from "./components/Hello";
// // // import Control from "./components/Control";
// // // import EventHandler from "./components/EventHandler";
// // // import MyForm from "./components/MyForm";
// // // import {Routes,Route,Link} from 'react-router-dom';
// // // import { useNavigate } from "react-router-dom";
// // // import MyNewHook from "./components/MyNewHook";
// // // import Card from "./components/Card";
// // // import GetData from "./components/GetData";
// // // import Head from "./components/Head";
// // // import Curd from "./components/Curd";
// // // import UseLocalStorage from "./components/UseLocalStorage";
// // // import TodoApp from "./components/RESTAPI/TodoApp";
// // // import Comp1 from "./components/Comp1";
// // // import { ThemeProvider,useTheme } from './UseContext/ThemeContext';


// // import { CounterProvider } from "./UseContext/CounterContext";
// // import CounterContext from "./UseContext/CounterContext";
// // import { useContext } from "react";


// // // function App(){
// // //   const Navigate=useNavigate()
// // //   const handleNavigate=()=>{
// // //    Navigate("/")
// // //   }
// // //   const ToggleTheme=()=>{
// // //     const {theme,ToggleTheme}=useTheme()
// // //   }
// // //   return(
// // //     <>
// // //     <h2> The Current Theme is:{theme}</h2>
// // //     <button onClick={ToggleTheme}>Toogle</button>
// // //    {/* <Header/> */}
// // //    {/* function ClickButton() {
// // //   const handleClick = () => {
// // //     alert('Button clicked!');
// // //   };

// // //   return <button onClick={handleClick}>Click Me</button>;
// // // } */}

// // //     {/* <Welcome/>
// // //     <Footer />
// // //     <Auth />
// // //     <Test name ="Gray Matter"/>
// // //     <Hello/> */}
// // //     {/* <Link to ="/Welcome"> Welcome</Link><br/>
// // //     <Link to ="/Header"> Header</Link> <br/>
// // //     <Link to ="/Footer"> Footer</Link> */}
// // //     {/* <MyNewHook/> */}
// // //     {/* <Card/>
// // //     <GetData/>
// // //     <Head/>}
// // //     {/* <UseLocalStorage/> */}
// // //     {/* <Curd/>  */}

// // //     {/* <TodoApp/> */}
// // //     {/* <Comp1/> */}


  
// // //     <Routes>
// // //       <Route path="/Header" element ={< Header />}/>

// // //       <Route path='/Welcome' element ={<Welcome/>}/>

// // //       <Route path='/Footer' element ={<Footer/>}/>

// // //     </Routes>
// // //     <br/>
// // //     <br/>
// // //     {/* <button onClick={handleNavigate}>Navigate to Page</button> */}
// // //     </>
// // //   )
// // // }
// // // import { Form } from "react-bootstrap";

// // // const ThemeToggle=()=>{
// // //   const{theme,toggleTheme}=useTheme()




// // //   return(
// // //     <>
// // //     <h2>The current Theme is:{theme} </h2>
// // //     <button onClick={toggleTheme}>ToggleTheme</button>
// // //     </>
// // //   )
// // // }
// // // const Helloo=()=>{
// // //   const{theme,toggleTheme}=useTheme();
// // //   return(
// // //     <>
// // //      <h3>The current Theme is:{ theme} </h3>
// // //     <button onClick={toggleTheme}>ToggleTheme</button></>
     
// // //   )
    
// // // }
// // const CounterApp=()=>{
// //   const{count,IncrementCount,DecrementCount,ResetCount}=useContext(CounterContext);
// //   return(
// //     <div>
// //       <h1>
// //         Counter App
// //       </h1>
// //       <h2>
// //         Count:{count}
// //         <button onClick={IncrementCount}>Increment</button>
// //         <button onClick={DecrementCount}>Decrement</button>
// //         <button onClick={ResetCount}>Reset</button>
// //       </h2>
// //     </div>
// //   )
// // }

// // const App=()=>{
// //   return(
// //     // <ThemeProvider>
// //     //   <Helloo/>
// //     //   <ThemeToggle/>
// //     // </ThemeProvider>
// //     <CounterProvider>
// //       <CounterApp/>
// //     </CounterProvider>
// //   )
// // }

// // export default App;

// import React from "react";
// import { ItemProvider } from "./UseContext/ItemContext";
// import AddItemForm from "./UseContext/AddItemForm";
// import ItemList from "./UseContext/ItemList";

// const App = () => {
//   return (
//     <ItemProvider>
//       <div style={{ padding: "20px" }}>
//         <h2>Item Manager</h2>
//         <AddItemForm />
//         <ItemList />
//       </div>
//     </ItemProvider>
//   );
// };

// export default App;

import { useContext } from "react";
import { CartProvider } from "./UseContext/CartContext";
import CartApp from "./UseContext/CartApp";
const App = () => (
  <CartProvider>
    <CartApp />
  </CartProvider>
);

export default App;