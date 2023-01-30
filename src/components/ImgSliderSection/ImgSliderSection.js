import React from "react";
import * as $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function ImgSliderSection() {
  // $(document).ready(function () {
  //   console.log("component ready");
  //   $(".owl-carousel-1").owlCarousel({
  //     loop: true,
  //     // nav:true,
  //     // dots:true,
  //     items: 1,
  //     autoplay: true,
  //     autoplayTimeout: 5000,
  //     autoplayHoverPause: true,
  //     smartSpeed: 1200,
  //         responsive:{0:{items:1},
  //     600:{items:2},1000:{items:2}}
  //   });
  // });

  return (
    <section id="img-slider-section">
      <div class="owl-carousel owl-carousel-1">
        <div class="item">
          <img src="http://localhost:3000/assets/imgs/tech-world.jpg" />

          <div class="caption">
            <strong>Learning never Exhausts the mind.</strong>
          </div>
        </div>
        <div class="item">
          <img src="http://localhost:3000/assets/imgs/app-buz.jpg" />
          <div class="caption">
            <strong>There is no FAILURE only FEEDBACK.</strong>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card-box">
          <div class="icon">
            <i class="fa-solid fa-book"></i>
          </div>
          <div class="title">
            <b>Excellent Courses</b>
          </div>
          <div class="view">
            <b>View</b>
          </div>
        </div>
        <div class="card-box">
          <div class="icon">
            <i class="fa-solid fa-video"></i>
          </div>
          <div class="title">
            <b>Videos</b>
          </div>
          <div class="view">
            <b>View</b>
          </div>
        </div>
        <div class="card-box">
          <div class="icon">
            <i class="fa-solid fa-person-chalkboard"></i>
          </div>
          <div class="title">
            <b>Best Teachers</b>
          </div>
          <div class="view">
            <b>View</b>
          </div>
        </div>
      </div>
    </section>
  );
}
