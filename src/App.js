import './App.css';
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	// Routes,
// 	Route
//   } from "react-router-dom";
// import { Router, Routes, Route } from "react-router-dom";
// import Mycarousel from './Components/Mycarousel';
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";
  import Test from './Components/test';
import About from './Components/about';
import {Header} from './Components/header';
import Footer from './Components/Footer';
import Home from './Components/home';

function App() {
	// function myprev() {
	// 	// var r = document.querySelectorAll(".prev");
    // // for (var j = 0, prelength = r.length; j < prelength; j++) {
    //   // alert(i);
    //   // r[j].onclick = function () {
    //     var bca = document.querySelector("li.active");
    //     if (bca) {

    //       // var itemspre = document.querySelectorAll("li");
    //       // var lastchildpre = itemspre.children[0];
    //       // alert(itemspre.innerHTML);
    //       // if (bca !== itemspre) {
    //         bca.classList.remove("active");
          
    //       // }
    //       bca.previousElementSibling?.classList?.add('active');
    //     }
       
    //   // };
	// }
	// function mynext() {
	// 	 // var a = document.querySelectorAll(".next");
    // // for (var i = 0, length = a.length; i < length; i++) {
    //   // alert(a.length);
    //   // a[i].onclick = function () {
    //     var b = document.querySelector("li.active");
    //     if (b) {
    //       // var items = document.querySelectorAll("li");
    //       // // alert(items.length);
    //       // var lastchild = items[items.length - 1];
    //       // // alert(lastchild);
    //       // if (b !== lastchild) {
    //         b.classList.remove("active");
           
    //       // }
	// 	//   b.nextElementSibling.classList.add('active');
    //       b.nextElementSibling?.classList?.add('active');
    //     }

    //   // };
	// }


	 //  resposive menu
	//  function myFunction() {
	// 	// alert('hello');  
	// 	var x = document.getElementById("menu");
	// 	if (x.style.display === "block") {
	// 	  x.style.display = "none";
	// 	} else {
	// 	  x.style.display = "block";
	// 	}

	// 	// var x = document.getElementsByClassName("menu");
	// 	// Array.from(x).forEach((x) => {
	// 	//   if (x.style.display === "none") {
	// 	// 	x.style.display = "block";
	// 	//   } else {
	// 	// 	x.style.display = "none";
	// 	//   }
	// 	// })
	//   }
	  

  return (
    

<>





{/* <Router>
	<header/>

        <Switch>
		<Route exact path="/test">
            <test />
          </Route>
          <Route exact path="/about">
            <about />
          </Route>

        </Switch>

      </Router> */}
	  <Router>
	  <Header/>
      <Routes>
	  <Route path='/' element={<Home/>} />
		<Route path='/about' element={<About/>} />
      <Route path='/test' element={<Test/>} />
    
      </Routes>
      <Footer />
      </Router>






</>




  );
  
}

export default App;
