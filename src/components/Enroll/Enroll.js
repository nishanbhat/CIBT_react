import React from "react";
import { EnrollWrapper,ButtonWrapper } from "./Enroll.Style";

export default function Enroll() {
  return (
    <EnrollWrapper>
      <div class="body">
        <div class="text">Enroll now and get access to unlimited courses</div>
        <div class="btn">
          <a href="" target="_blank">
            <ButtonWrapper type="button" class="button">
              <b>ENROLL NOW</b>
            </ButtonWrapper>
          </a>
        </div>
      </div>
    </EnrollWrapper>
  );
}
