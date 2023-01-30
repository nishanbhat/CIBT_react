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
      <OwlCarouselWrapper>
        <div class="item">
          <div class="thumbnail">
            <img
              src="http://localhost:3000/assets/imgs/event1.jpg"
              alt="thumbnail"
            />
          </div>
          <div class="caption">
            <p>
              <b>Project Success Celebration</b>
            </p>
            <p>
              <a href="">View</a>
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
              <b>Company Program</b>
            </p>
            <p>
              <a href="">View</a>
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
              <b>New Year Eve</b>
            </p>
            <p>
              <a href="">View</a>
            </p>
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
              <b>Joint Company Gathering</b>
            </p>
            <p>
              <a href="">View</a>
            </p>
          </div>
        </div>
      </OwlCarouselWrapper>
    </EventWrapper>
  );
}
