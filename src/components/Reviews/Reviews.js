import React from 'react'
import { ReviewWrapper,TitleReviewWrapper,TxtWrapper,LftWrapper,RgtWrapper,ArrowLeftWrapper,ArrowRightWrapper,ViewWrapper } from './Reviews.style'

export default function Reviews() {
  return (
 <ReviewWrapper>
        <TitleReviewWrapper>
            <b>Reviews</b>
        </TitleReviewWrapper>
        <ArrowRightWrapper>
            <i class="fa-solid fa-chevron-right"></i>
        </ArrowRightWrapper>
        <ArrowLeftWrapper>
            <i class="fa-solid fa-chevron-left"></i>
        </ArrowLeftWrapper>
        <TxtWrapper>
            <LftWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
                    tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor
                    sit amet.Veniam quis notru exercit.
            </LftWrapper>
            <RgtWrapper>
                <img src="http://localhost:3000/assets/imgs/review.png" alt="profile picture of reviewer"/>
            </RgtWrapper>
        </TxtWrapper>
        <ViewWrapper>
            <a href="">
                <u>View All</u>
            </a>
        </ViewWrapper>
    </ReviewWrapper>  )
}
