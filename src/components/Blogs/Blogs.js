import React from "react";
import {
  BlogBoxDivWrapper,
  ViewWrapper,
  BlogTitleWrapper,
  BlogBoxTitleWrapper,
  BlogBoxWrapper,
  BlogScrollButtomWrapper,
  BlogSliderWrapper,
  BlogWrapper,
  InputFiveWrapper,
  InputSixWrapper,
} from "./Blogs.style";

export default function Blogs() {
  return (
    <BlogWrapper>
      <BlogTitleWrapper>
        <b>Blogs</b>
      </BlogTitleWrapper>
      <InputFiveWrapper type="radio" name="dot" id="five" />
      <InputSixWrapper type="radio" name="dot" id="six" />

      <ViewWrapper>
        <a href="">
          <u>View All</u>
        </a>
      </ViewWrapper>
      <BlogSliderWrapper className="blog-slider">
        <BlogBoxDivWrapper>
          <BlogBoxWrapper>
            <div class="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>Binary Search</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Gauri Shankhar
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
          <BlogBoxWrapper>
            <div class="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>Linux OS</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Shikhar Shrestha
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
          <BlogBoxWrapper>
            <div class="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>Ecommerce Websites in Nepal</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Anil Gurung
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
          <BlogBoxWrapper>
            <div class="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>AI/ML</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Prajwol Ghimire
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
        </BlogBoxDivWrapper>
        <BlogBoxDivWrapper>
          <BlogBoxWrapper>
            <div className="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>Binary Search</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Gauri Shankhar
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
          <BlogBoxWrapper>
            <div class="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>Linux OS</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Shikhar Shrestha
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
          <BlogBoxWrapper>
            <div class="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>Ecommerce Websites in Nepal</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Anil Gurung
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
          <BlogBoxWrapper>
            <div className="blog-thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/blog.jpg"
                alt="thumbnail"
              />
            </div>
            <BlogBoxTitleWrapper>
              <p>
                <b>AI/ML</b>
              </p>
              <p
                style={{
                  color: "#646567",
                  fontSize: "13px ",
                }}
              >
                By Prajwol Ghimire
              </p>
            </BlogBoxTitleWrapper>
          </BlogBoxWrapper>
        </BlogBoxDivWrapper>
      </BlogSliderWrapper>
      <BlogScrollButtomWrapper className="blog-scroll-button">
        <label htmlFor="five" className=" active five"></label>
        <label htmlFor="six" className="six"></label>
      </BlogScrollButtomWrapper>
    </BlogWrapper>
  );
}
