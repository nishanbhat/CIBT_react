import React from "react";
import
  {
  ImageSliderWrapper,
  OwlCarouselWrapper,
  CardsWrapper,
  CardBoxWrapper,
} from "./ImgSliderSection.style";

export default function ImgSliderSection() {
  return (
    <ImageSliderWrapper>
      <OwlCarouselWrapper className="owl-carousel owl-carousel-1">
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
      </OwlCarouselWrapper>
      <CardsWrapper>
        <CardBoxWrapper>
          <div class="icon">
            <i class="fa-solid fa-book"></i>
          </div>
          <div class="title">
            <b>Excellent Courses</b>
          </div>
          <div class="view">
            <b>View</b>
          </div>
        </CardBoxWrapper>
        <CardBoxWrapper>
          <div class="icon">
            <i class="fa-solid fa-video"></i>
          </div>
          <div class="title">
            <b>Videos</b>
          </div>
          <div class="view">
            <b>View</b>
          </div>
        </CardBoxWrapper>
        <CardBoxWrapper>
          <div class="icon">
            <i class="fa-solid fa-person-chalkboard"></i>
          </div>
          <div class="title">
            <b>Best Teachers</b>
          </div>
          <div class="view">
            <b>View</b>
          </div>
        </CardBoxWrapper>
      </CardsWrapper>
    </ImageSliderWrapper>
  );
}
