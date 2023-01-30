import React from "react";
import {VideosWrapper,VideoTitleWrapper,VideoSliderWrapper,VideoBoxDivWrapper,VideoBoxWrapper,VideoScrollButtonWrapper,InputThreeWrapper,InputFourWrapper} from "./Videos.style";

export default function Videos() {
  return (
    <VideosWrapper>
      <VideoTitleWrapper>
        <b>Have you watched pre-recorded Class Videos ?</b>
      </VideoTitleWrapper>
      <InputThreeWrapper type="radio" name="dot" id="three" />
      <InputFourWrapper type="radio" name="dot" id="four" />
      <div className="view">
        <a href="">
          <u>View All</u>
        </a>
      </div>
      <VideoSliderWrapper className="video-slider">
        <VideoBoxDivWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>
                Array Sum Python Programming (For Loop, While Loop and
                Recursive)
              </b>
            </div>
          </VideoBoxWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>
                Heroku Cloud Java App Deployment with GitHub (Git, Servlet,
                Spring & Spring Boot)
              </b>
            </div>
          </VideoBoxWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>Introduction to Flask Python Based Light Framework</b>
            </div>
          </VideoBoxWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>Digital Marketing Essentials (Types and Overview)</b>
            </div>
          </VideoBoxWrapper>
        </VideoBoxDivWrapper>
        <VideoBoxDivWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>
                Array Sum Python Programming (For Loop, While Loop and
                Recursive)
              </b>
            </div>
          </VideoBoxWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>
                Heroku Cloud Java App Deployment with GitHub (Git, Servlet,
                Spring & Spring Boot)
              </b>
            </div>
          </VideoBoxWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>Introduction to Flask Python Based Light Framework</b>
            </div>
          </VideoBoxWrapper>
          <VideoBoxWrapper>
            <div className="video-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/maxresdefault (1).jpg"
                alt="thumbnail"
              />
            </div>
            <div className="video-box-title">
              <b>Digital Marketing Essentials (Types and Overview)</b>
            </div>
          </VideoBoxWrapper>
        </VideoBoxDivWrapper>
      </VideoSliderWrapper>
      <VideoScrollButtonWrapper className="video-scroll-button">
        <label for="three" className=" active three"></label>
        <label for="four" className="four"></label>
      </VideoScrollButtonWrapper>
    </VideosWrapper>
  );
}
