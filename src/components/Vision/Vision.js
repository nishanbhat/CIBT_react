import React from "react";
import { VisionWrapper,TitleVisionWrapper,TxtWrapper,LftWrapper,RgtWrapper } from "./Vision.style";

export default function Vision() {
  return (
    <VisionWrapper>
      <TitleVisionWrapper>
        <b>Our Vision</b>
      </TitleVisionWrapper>
      <TxtWrapper>
        <LftWrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
          tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor
          sit amet.Veniam quis notru exercit.Lorem ipsum dolor sit amet
          consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis
          notru exercit ation Lorem ipsum dolor sit amet.Veniam quis notru
          exercit.Lorem ipsum dolor sit amet consectetur adipisicing elitsed
          eiusmod tempor enim minim veniam quis notru exercit ation Lorem ipsum
          dolor sit amet.Veniam quis notru exercit.
        </LftWrapper>
        <RgtWrapper>
          <img
            src="http://localhost:3000/assets/imgs/Rectangle 34.jpg"
            alt="image showing vision"
          />
        </RgtWrapper>
      </TxtWrapper>
    </VisionWrapper>
  );
}
