import React from 'react';
import Mycarousel from './Mycarousel';
// import './Mycarousel.css';

const Home = () => {
  return (
    <>
    <section className="header-banner home-banner">
		<div className="overlay"></div>
		<div className="container">
			<div className="header-banner-wrapper">
				<div className="header-title">
					<p className="wow fadeInUp" data-wow-delay="0.1s">Lorem ipsum dolor sit</p>
						<h1 className="wow fadeInUp" data-wow-delay="0.3s">Banner Text</h1>
					<div className="btn wow fadeInUp" data-wow-delay="0.5s"><a href="#">Read More</a></div>
				</div>
			</div>
		</div>
	</section> 

	{/* <section className="product_slider"> */}
		{/* <div className="product_container"> */}
			<Mycarousel />
		{/* </div> */}
	{/* </section> */}

  {/* <Mycarousel /> */}

	<section className="aboutus-section section-padding">
		<div className="container">
			<div className="aboutus-wrapper">
				<div className="aboutus-left wow fadeInUp">
					<div className="aboutus-overlay"></div>
					<a data-fancybox data-width="740" data-height="460" href="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" >
						<img src="images/about-us.jpg" alt="About Safe Pools" />
						<i className="fa fa-play-circle"></i>
					</a>
				</div>
				<div className="aboutus-right">
					<div className="page-title">
						<h2 className="wow fadeInUp" data-wow-delay="0.1s">About Us</h2>
					</div>
					<p className="wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore magna aliqua.</p>
					<div className="btn wow fadeInUp" data-wow-delay="0.3s"><a href="#">Read More</a></div>
				</div>
			</div>
		</div>
	</section>

	{/* <marquee behavior="scroll" loop="20" scrollamount="20" vspace={200} >Here is some scrolling text... right to left! Here is some scrolling text... right to left! Here is some scrolling text... right to left! Here is some scrolling text... right to left! Here is some scrolling text... right to left!</marquee> */}
	<section className="why-choose-section section-padding">
		<div className="container">
			<div className="why-choose-wrapper">
				<div className="why-choose-left wow fadeInLeft">
					<div className="page-title">
						<h2 className="wow fadeInUp" data-wow-delay="0.1s">why choose us ?</h2>
					</div>
					<p className="wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore magna aliqua.</p>
					<div className="btn wow fadeInUp" data-wow-delay="0.3s"><a href="#">Read More</a></div>
				</div>
				<div className="why-choose-right">
					<div className="why-choose-img-wrapper">
						<div className="why-choose-img wow fadeInUp" data-wow-delay="0.1s">
							<span>1</span>
							<a href="#">SERVICE</a>
						</div>
						<div className="why-choose-img wow fadeInUp" data-wow-delay="0.3s">
							<span>2</span>
							<a href="#">SERVICE</a>
						</div>
						<div className="why-choose-img wow fadeInUp" data-wow-delay="0.5s">
							<span>3</span>
							<a href="#">SERVICE</a>
						</div>
						<div className="why-choose-img wow fadeInUp" data-wow-delay="0.7s">
							<span>4</span>
							<a href="#">SERVICE</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section className="testimonial-section section-padding">
		<div className="testimonial-overlay"></div>
		<div className="container">
			<div className="testimonial-wrapper">
				<div className="page-title">
					<h2 className="wow fadeInDown">TESTIMONIAL</h2>
				</div>

				<div className="swiper myTestimonial wow fadeInUp">
			
				  <div className="swiper-wrapper">

				  
				    <div className="swiper-slide">
					   <div className="client-box">
				   			<img src="images/client.jpg" />
				   			<h3>Client Name</h3>
				   			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					   </div>
					</div>

					
				    <div className="swiper-slide">
					   <div className="client-box">
				   			<img src="images/client.jpg" />
				   			<h3>Client Name</h3>
				   			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					   </div>
					</div>

			
				    <div className="swiper-slide">
					   <div className="client-box">
				   			<img src="images/client.jpg" />
				   			<h3>Client Name</h3>
				   			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					   </div>
					</div>

				  </div>
	
				  <div className="swiper-pagination testimonial-pagination"></div>
				</div>


			</div>
		</div>
	</section>




	<section className="articles-section section-padding">
		<div className="articles-overlay"></div>
		<div className="container">
			<div className="articles-wrapper">
				<div className="page-title">
					<h2 className="wow fadeInDown">Our articles</h2>
				</div>
				<div className="articles-box-wrapper">
					<div className="articles-box wow fadeInUp" data-wow-delay="0.1s" >
						<img src="images/articles-one.jpg" alt="Articles of Safe Pools" />
						<div className="articles-card">
							<h3>TITLE 1</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>
					<div className="articles-box wow fadeInUp" data-wow-delay="0.3s">
						<img src="images/articles-two.jpg" alt="Articles of Safe Pools" />
						<div className="articles-card">
							<h3>TITLE 2</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>
					<div className="articles-box wow fadeInUp" data-wow-delay="0.5s">
						<img src="images/articles-three.jpg" alt="Articles of Safe Pools" />
						<div className="articles-card">
							<h3>TITLE 3</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>
				</div>
				<div className="btn wow fadeInUp" data-wow-delay="0.5s"><a href="#">Read More</a></div>
				
			</div>
		</div>
	</section>
	


	<section className="contact-section section-padding">
		<div className="container">
			<div className="contact-wrapper">
				<div className="contact-left">
					<div className="page-title">
						<h2 className="wow fadeInUp">Contact Us</h2>
					</div>
					<p className="wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<ul className="social-icon wow fadeInUp" data-wow-delay="0.4s">
						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa fa-instagram"></i></a></li>
					</ul>
				</div>
				<div className="contact-right wow fadeInUp" data-wow-delay="0.1s">
					<form className="contact-form">
						<div className="input-group wow fadeInUp" data-wow-delay="0.3s">
							<input type="text" placeholder="Name" required />
						</div>
						<div className="input-group wow fadeInUp" data-wow-delay="0.5s">
							<input type="text" placeholder="Email" required/>
						</div>
						<div className="input-group wow fadeInUp" data-wow-delay="0.7s">
							<textarea type="text" placeholder="Message" rows="5" required></textarea>
						</div>
						<button type="submit" className="btn wow fadeInUp" data-wow-delay="0.8s">SEND</button>
					</form>
				</div>
			</div>
		</div>
	</section>



	
	<section className="partner-section section-padding">
		<div className="container">
			<div className="partner-wrapper">
				<div className="page-title">
					<h2 className="wow fadeInDown">Partner Logo</h2>
				</div>

				<div className="swiper myPartner wow fadeInUp">
				  <div className="swiper-wrapper">

				  
				    <div className="swiper-slide">
					   <div className="partner-logo">
				   			<img src="images/partner-logo.png" alt="Partner" />
					   </div>
					</div>

				    <div className="swiper-slide">
					   <div className="partner-logo">
				   			<img src="images/partner-logo.png" alt="Partner" />
					   </div>
					</div>

				
				    <div className="swiper-slide">
					   <div className="partner-logo">
				   			<img src="images/partner-logo.png" alt="Partner" />
					   </div>
					</div>

				
				    <div className="swiper-slide">
					   <div className="partner-logo">
				   			<img src="images/partner-logo.png" alt="Partner" />
					   </div>
					</div>

				
				    <div className="swiper-slide">
					   <div className="partner-logo">
				   			<img src="images/partner-logo.png" alt="Partner" />
					   </div>
					</div>

				  </div>
				
				  <div className="swiper-pagination partner-pagination"></div>
				</div>
			</div>
		</div>
	</section>




	<section className="footer-top-section wow fadeIn">
		<div className="container">
			<div className="footer-top-wrapper">
				<div className="footer-top-desc wow fadeInUp">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div className="footer-top-btn wow fadeInUp" data-wow-delay="0.2s">
					<div className="btn"><a href="#">Read More</a></div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Home
