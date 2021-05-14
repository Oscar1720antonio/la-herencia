import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default class SPProductSectionBersys extends Component {
	render() {
		return (
			<div className="product-area pos-relative pt-110 pb-120 fix">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-5 col-md-6 col-sm-7">
							<div className="product-showing">
								<p>Showing 1–22 of 32 results</p>
							</div>
						</div>
						<div className="col-xl-6 col-md-6 col-sm-5">
							<div className="pro-filter mb-40 f-right">
								<form action="#">
									<select name="pro-filter" id="pro-filter">
										<option value="1">Shop By</option>
										<option value="2">Top Sales </option>
										<option value="3">New Product </option>
										<option value="4">A to Z Product </option>
									</select>
								</form>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/product1.png")} alt="product" /></a>
									</Link>

									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Chicharron de Harina Picante </a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$14.40</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/product2.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Chicharron de Harina</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$14.40</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/04.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Cacahuates con Chile & Ajo</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/product4.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Garbanzos Enchilados</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/05.png")} alt="product" /></a>
									</Link>

									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Chickpeas Salty</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/06.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Bombones</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/04.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Botana Mix</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/10.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Churritos Mexicanos</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/10.png")} alt="product" /></a>
									</Link>

									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Churritos Mexicanos</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/12.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Natural Pistachos</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/10.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Roasted Peanuts</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
										<a><img src={require("../../../public/assets/img/product/12.png")} alt="image" /></a>
									</Link>
									<div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div>
								</div>
								<div className="product-text">
									<h4>
										<Link href="/shop-details" as="/shop-details" >
											<a>Cacahuates con Chile</a>
										</Link>
									</h4>
									<div className="pro-rating">
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
										<i><FontAwesomeIcon icon={['far', 'star']} /></i>
									</div>
									<div className="pro-price">
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="basic-pagination basic-pagination-2 text-center mt-20">
								<ul>
									<li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
									<li><a href="#">01</a></li>
									<li><a href="#">02</a></li>
									<li><a href="#">03</a></li>
									<li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
									<li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
