import styled from "styled-components";

export const ImageSliderWrapper = styled.div`
  position: relative;
`;

export const OwlCarouselWrapper = styled.div`
  .item {
    height: 100vh;
    /* 100% of viewport height */
    background-position: center;
    background-size: cover;
    position: relative;
    /* add this to position the caption */

    img {
      max-width: 100%; /* set the width to 100% */
      height: 100%; /* set the height to 100% */
      object-fit: cover; /* cover the entire slide */
    }
  }

  .caption {
    position: absolute;
    /* position the caption */
    top: 50%;
    /* place the caption at the bottom */
    transform: translateY(-50%);
    /* move the caption up by half its own height */
    left: 0;
    right: 0;
    padding: 1em;
    /* background: rgba(0, 0, 0, 0.5); */
    /* make the background semi-transparent */
    color: white;
    /* text color */
    text-align: center;
    /* center the text */
    font-size: 72px;

    @media (max-width: 890px) {
      font-size: 36px;
    }
  }

  owl-theme .item {
    width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;
  position: absolute;
  top: 65%;
  // left: 50%;/
  width: 100%;

  .view {
    background: #87523d;
    color: #fff;
    padding: 4px;
    border-radius: 7px;
    opacity: 100%;

    @media (max-width: 800px) {
      font-size: 10px;
      padding: 0px;
    }
    @media (max-width: 455px) {
      font-size: 7px;
    }
    @media (max-width: 320px) {
      font-size: 5px;
    }
  }

  .icon {
    color: #87523d;
    font-size: 2.5em;

    @media (max-width: 800px) {
      font-size: 1em;
    }
    @media (max-width: 320px) {
      display: none;
    }
  }

  .title {
    font-size: 20px;
    margin: 10px;

    @media (max-width: 800px) {
      font-size: 10px;
      margin: 2px;
    }

    @media (max-width: 455px) {
      font-size: 7px;
    }
    @media (max-width: 320px) {
      font-size: 5px;
      margin: 3px;
    }
  }
`;

export const CardBoxWrapper = styled.div`
  background: #bbbdc4;
  height: 160px;
  width: 264px;
  padding: 20px;
  // position: absolute; 
  top: 70%;
  border-radius: 7px;
  opacity: 70%;
  text-align: center;
  z-index: 10;

  @media (max-width: 800px) {
    height: 80px;
    width: 132px;
    padding: 20px;
    margin: 10px;
  }

  @media (max-width: 455px) {
    height: 60px;
    width: 100px;
    padding: 10px;
    margin: 10px;
  }

  @media (max-width: 320px) {
    height: 40px;
    width: 70px;
    padding: 10px;
    margin: 10px;
  }

  &:hover {
    opacity: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

// .owl - carousel - 1 .item {
//   height: 100vh;
//   /* 100% of viewport height */
//   background-position: center;
//   background-size: cover;
//   position: relative;
//   /* add this to position the caption */
// }

// .owl-carousel-1 .owl-item img {
//   max-width: 100%; /* set the width to 100% */
//   height: 100%; /* set the height to 100% */
//   object-fit: cover; /* cover the entire slide */
// }

// .owl-carousel-1 .caption {
//   position: absolute;
//   /* position the caption */
//   top: 50%;
//   /* place the caption at the bottom */
//   transform: translateY(-50%);
//   /* move the caption up by half its own height */
//   left: 0;
//   right: 0;
//   padding: 1em;
//   /* background: rgba(0, 0, 0, 0.5); */
//   /* make the background semi-transparent */
//   color: white;
//   /* text color */
//   text-align: center;
//   /* center the text */
//   font-size: 72px;
// }

// .cards {
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   z-index: 10;
// }

// .card-box {
//   background: #bbbdc4;
//   height: 160px;
//   width: 264px;
//   padding: 20px;
//   /* position: relative; */
//   top: 70%;
//   border-radius: 7px;
//   opacity: 70%;
//   text-align: center;
//   z-index: 10;
// }

// .card-box:hover {
//   opacity: 100%;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// }

// .cards .view {
//   background: #87523d;
//   color: #fff;
//   padding: 4px;
//   border-radius: 7px;
//   opacity: 100%;
// }

// .cards .icon {
//   color: #87523d;
//   font-size: 2.5em;
// }

// .cards .title {
//   font-size: 20px;
// }

// .owl-carousel-1 owl-theme .item {
//   width: 100%;
// }

/* ----------media queries----------------------- */

// @media (max-width: 800px) {
//   .cards {
//     display: grid;
//   }
//   .card-box {
//     height: 80px;
//     width: 132px;
//     padding: 20px;
//     margin: 10px;
//   }

//   .cards .icon {
//     font-size: 1em;
//   }

//   .cards .title {
//     font-size: 10px;
//   }
//   .cards .view {
//     font-size: 10px;
//     padding: 0px;
//   }
// }

// @media (max-width: 890px) {
//   .owl-carousel-1 .caption {
//     font-size: 36px;
//   }
// }
