import React, { Component } from 'react';
import Link from "next/link";

class H1FeaturesSection extends Component {
	render() {
		return (
			<div className="features-area pt-110 pb-90" style={{ backgroundImage: `url(${"assets/img/bg/bg1.jpg"})` }}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt="shape" />
								</div>
								<h1>Our Brands</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="features-wrapper text-center mb-30">
								<div className="features-img cat1">
									<img src={require("../../../public/assets/img/logo/laherencia/laherencia.png")} alt="features" />
								</div>
								<div className="features-text ">
									<h4>La Herencia Spices</h4>
									<p className="text-slider">
										La Herencia Spices provides a wide variety of spices packed and ready for use. Perfect for sauces, meats and adds a unique flavor to all recipes!

									</p>
									<Link href="/ShopHerencia" as="/ShopHerencia" >
										<a>View Products <i className="dripicons-arrow-thin-right"></i></a>
									</Link>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-4 col-lg-4 col-md-6">
							<div className="features-wrapper text-center mb-30">
								<div className="features-img">
									<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/Claudio.png")} alt="features" />
								</div>
								<div className="features-text">
									<h4>Claudio's Tea Herbs</h4>
									<p className="text-slider">

										Providing a healthy option of Herbs, popularized in America, Mexico, and Latin America Countries!
										<br />
										<br />
									</p>

									<Link href="/ShopClaudio" as="/ShopClaudio" >
										<a>View Products <i className="dripicons-arrow-thin-right"></i></a>
									</Link>
								</div>
							</div>
						</div> */}
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="features-wrapper text-center mb-30">
								<div className="features-img">
									<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/Bersys.png")} alt="features" />
								</div>
								<div className="features-text">
									<h4>Bersy's Snack</h4>
									<p className="text-slider">
										Choose from Bersy’s Snacks’ diverse catalog of snacks to satisfy your tastebuds. Offering choices from marshmallows to chili-covered snacks!
									</p>

									<Link href="/ShopBersys" as="/ShopBersys" >
										<a>View Products <i className="dripicons-arrow-thin-right"></i></a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		);
	}
}

export default H1FeaturesSection;