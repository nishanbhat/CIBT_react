import React from "react";
import {
  EventWrapper,
  EventTitleWrapper,
  OwlCarouselWrapper,
} from "./Events.style";

export default function Events() {
  return (
    <EventWrapper>
      <EventTitleWrapper>
        <b>Events</b>
      </EventTitleWrapper>
      <div class="view">
        <a href="">
          <u>View All</u>
        </a>
      </div>
      <OwlCarouselWrapper className="owl-carousel owl-carousel-2">
        <div class="item">
          <div class="thumbnail">
            <img
              src="http://localhost:3000/assets/imgs/event1.jpg"
              alt="thumbnail"
            />
          </div>
          <div class="caption">
            <p>
              <a href="">
                <b>Project Success Celebration</b>
              </a>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="thumbnail">
            <img
              src="http://localhost:3000/assets/imgs/event2.jpg"
              alt="thumbnail"
            />
          </div>
          <div class="caption">
            <p>
              <a href="">
                <b>Company Program</b>
              </a>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="thumbnail">
            <img
              src="http://localhost:3000/assets/imgs/event3.jpg"
              alt="thumbnail"
            />
          </div>
          <div class="caption">
            <p>
              <a href="">
                <b>New Year Eve</b>
              </a>
            </p>
            {/* <p>
              <a href="">
                <i class="fa-solid fa-eye"></i>
              </a>
            </p> */}
          </div>
        </div>
        <div class="item">
          <div class="thumbnail">
            <img
              src="http://localhost:3000/assets/imgs/event4.jpg"
              alt="thumbnail"
            />
          </div>
          <div class="caption">
            <p>
              <a href="">
                <b>Joint Company Gathering</b>
              </a>
            </p>
            {/* <p>
              <a href="">
                <i class="fa-solid fa-eye"></i>
              </a>
            </p> */}
          </div>
        </div>
      </OwlCarouselWrapper>
    </EventWrapper>
  );
}
