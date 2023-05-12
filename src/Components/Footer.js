import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="footer-section section-padding">
		<div className="container">
			<div className="footer-wrapper">
				<div className="footer-desc wow fadeInUp">
					<a href="#"><img src="images/footer-logo.png" alt="Safe Pools" /></a>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="footer-quicklinks wow fadeInUp" data-wow-delay="0.3s">
					<h3>QUICK LINKS</h3>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Book</a></li>
						<li><a href="#">Contact Us</a></li>
					</ul>
				</div>
				<div className="footer-legal wow fadeInUp" data-wow-delay="0.5s">
					<h3>LEGAL</h3>
					<ul>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Support</a></li>
						<li><a href="#">Faqs</a></li>
					</ul>
				</div>
				<div className="footer-contactus wow fadeInUp" data-wow-delay="0.7s">
					<h3>CONTACT US</h3>
					<ul>
						<li className="email"><i className="fa fa-envelope"></i><a href="mailto:abcd@gmail.com">abcd@gmail.com</a></li>
						<li className="phone"><i className="fa fa-phone"></i><a href="tal:1234567890">1234567890</a></li>
					</ul>
					<ul className="social-icon">
						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa fa-instagram"></i></a></li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom wow fadeInUp" data-wow-delay="0.5s">
				<p>Copyright &#169; 2021 by SafePools. All Rights Reserved.</p>
			</div>
		</div>
		
	</footer>
   </>
  )
}

export default Footer
