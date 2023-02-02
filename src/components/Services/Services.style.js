import styled from "styled-components";

export const ServicesWrapper = styled.section`
  margin: 70px 60px;
  padding: 0px;
  text-align: center;
`;

export const TitleServicesWrapper = styled.div`
  font-size: 40px;
  display: inline-block;
  position: relative;
  /* margin: 50px; */

  @media (max-width: 890px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
  // @media (max-width: 400px) {
  //   font-size: 10px;
  // }

  &::after {
    content: "";
    height: 3.5px;
    width: 100px;
    background: #212529;
    position: absolute;
    margin: auto;
    bottom: -15px;
    left: 0;
    right: 0;

    @media (max-width: 890px) {
      height: 2px;
      width: 50px;
      bottom: -10px;
    }

    @media (max-width: 400px) {
      height: 1px;
      width: 25px;
      bottom: -5px;
    }
  }
`;

export const GridContainerWrapper = styled.div`
  background-color: #f7f7f7;
  width: auto;
  font-size: 20px;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-template-rows: repeat(2, minmax(200px, -1fr));
  margin-top: 50px;
  padding: 30px;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 300px) {
    margin: 30px -40px !important;
  }

  @media (max-width: 550px) {
    // grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    // grid-template-rows: repeat(minmax(150px, 1fr));
    // grid-template-rows: repeat(2, minmax(200px, 0fr));
  }

  @media (max-width: 350px) {
    background: #ffff;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
  }
  @media (max-width: 530px) {
    padding: 0px !important;
  }

  @media (max-width: 470px) {
    margin: 0px;
    margin-top: 30px;
    // grid-template-rows: repeat(minmax(150px, 1fr)) !important;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const ServiceBoxWrapper = styled.div`
  max-height:200px;
  // min-width:100%;
  border: 1px solid #eee;
  border-radius: 20px;
  /* margin: 15px; */
  opacity: 100%;
  text-align: center;

    @media (max-width: 350px) {
      // padding: 0 auto !important;
      max-width: 60% !important;
      max-height: 50px !important;

    }

    @media (max-width: 400px) {
      max-height: 100px !important;
    }

    // @media (max-width: 470px) {
    //   min-height: 92px;
    //   max-width: 150px;
    // }

    @media (max-width: 530px) {
        max-height: 150px;
        max-width: 70%;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
      }

    @media (max-width: 550px) {
      max-height: 120px;
    }

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      @media (min-width: 950px) and (max-width: 1360px) {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      // color: #ffffff;
    }


`;

export const Imagewrapper = styled.img`
  max-height: 200px;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;

  // @media (max-width: 550px) {
  //   min-height: 150px;
  // }

  @media (max-width: 400px) {
    min-height: 100px;
  }
  @media (max-width: 530px) {
    min-height: 80px;
    margin: auto;
  }
  @media (min-width: 950px) and (max-width: 1360px) {
    min-height: 150px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  .icon {
    font-size: 2.5em;
    color: #ffffff;

    @media (max-width: 530px) {
      font-size: 1.5em !important;
      margin: -10px 0 5px 0;
    }

    @media (min-width: 1600px) {
      font-size: 3.5em;
    }
  }

  .service-text {
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    align-items: center;

    @media (max-width: 530px) {
      font-size: 10px !important;
    }

    @media (min-width: 1600px) {
      font-size: 30px;
    }
  }
`;

// #services {
//   margin: 70px 60px;
//   padding: 0px;
//   text-align: center;
// }

// .title-services {
//   font-size: 48px;
//   display: inline-block;
//   position: relative;
//   /* margin: 50px; */
// }

// .title-services::after {
//   content: "";
//   height: 3.5px;
//   width: 100px;
//   background: #212529;
//   position: absolute;
//   margin: auto;
//   bottom: -15px;
//   left: 0;
//   right: 0;
// }

// .grid-container {
//   background-color: #f7f7f7;
//   width: auto;
//   font-size: 20px;
//   text-align: left;
//   display: grid;
//   grid-template-columns: repeat(3, minmax(250px, 1fr));
//   grid-template-rows: repeat(2, minmax(250px, 1fr));
//   margin-top: 50px;
//   padding: 30px;
//   column-gap: 50px;
//   row-gap: 10px;
// }

// .servicesbox img {
//   min-height: 250px;
//   max-width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 20px;
// }

// .servicesbox {
//   border: 1px solid #eee;
//   border-radius: 20px;
//   /* margin: 15px; */
//   opacity: 100%;
//   text-align: center;
// }

// .servicesbox .content {
//   position: relative;
//   margin: 0 auto;
//   bottom: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1;
// }

// .servicesbox .icon {
//   font-size: 2.5em;
//   color: #ffffff;
// }

// .service-text {
//   color: #ffffff;
//   font-size: 18px;
//   text-align: center;
//   align-items: center;
// }
