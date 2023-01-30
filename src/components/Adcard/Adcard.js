import React from "react";
import { AdcardWrapper, LftWrapper, RgtWrapper } from "./Adcard.style";

export default function Adcard() {
  return (
    <AdcardWrapper>
      <LftWrapper>
        <div class="lrg">
          <b>Creators Institute of Business & Technology</b>
        </div>
        <div class="sml">Center for Learners</div>
      </LftWrapper>
      <RgtWrapper>
        <img
          src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
          alt="CIBT logo"
        />
      </RgtWrapper>
    </AdcardWrapper>
  );
}
