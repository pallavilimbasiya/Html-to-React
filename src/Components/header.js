
import { Link } from 'react-router-dom'
export const Header = () => {
    
	 //  resposive menu
	 function myFunction() {
		// alert('hello');  
		var x = document.getElementById("menu");
		if (x.style.display === "block") {
		  x.style.display = "none";
		} else {
		  x.style.display = "block";
		}

		// var x = document.getElementsByClassName("menu");
		// Array.from(x).forEach((x) => {
		//   if (x.style.display === "none") {
		// 	x.style.display = "block";
		//   } else {
		// 	x.style.display = "none";
		//   }
		// })
	  }
    return (
        <header id="header" className="header wow fadeInDown"> 
		<div className="container">
			<div className="header-wrapper">
				<div id="logo" className="logo">
					<Link to='/'><img src="images/logo.png" alt="Safe Pools" /></Link>
				</div>
				<div id="menu" className="menu">
					<ul>
                        <li className="active"><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/test'>Test</Link></li>
                        <li><Link to='/test'>Book</Link></li>
						<li><Link to='/test'>FAQs</Link></li>
						<li><Link to='/test'>Blog</Link></li>
						<li><Link to='/test'>Contact</Link></li>
					</ul>
				</div>
				<div className="contact-details">
					<ul>
						<li> <a href="mailto:info@safepoolsaustralia.com.au"><span>info@safepoolsaustralia.com.au</span></a></li>
						<li> <a href="tel:1800176657"><span>1800 176 657</span></a></li>
					</ul>
				</div>
				{/* <a href="javascript:void(0);" className="icon" onClick={myFunction}><i className="fa fa-bars"></i></a> */}
				{/* <a href={undefined} className="icon" onClick={myFunction}><i className="fa fa-bars"></i></a> */}
				<a href="#" className="icon" onClick={myFunction}><i className="fa fa-bars"></i></a>
				{/* <a href="javascript:void(0);" className="icon" onClick= { ()=> { alert('hello');alert('pallavi');}}><i className="fa fa-bars"></i></a> */}
			</div>
		</div>
	</header>
    )
}

// export default header
