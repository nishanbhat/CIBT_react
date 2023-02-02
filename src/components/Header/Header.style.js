import styled from "styled-components";

export const HeaderWrappper = styled.section`
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 60px;
  font-size: 64px;
  color: #87523d;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1200px) {
  .CIBT-logo img {
    width: 200px !important;
  }

  @media (max-width: 270px) {
  .CIBT-logo img {
    width: 50px !important;
  }
}

@media (max-width: 470px) {
  .CIBT-logo img {
    width: 100px !important;
  }
}
`;

export const NavBarWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0px;
    padding-left: 0px;
    float: right;
    // width: 100%;

    @media (max-width: 1055px) {
      display: none;
    }

    @media (max-width: 1200px) {
      font-size: 12px !important;
    }

    @media (max-width: 1464px) {
      font-size: 15px;
    }

  a {
    text-decoration: none;
    color: #87523d;
    width: 155px;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* margin-left: -30px; */
     display: flex;

    @media (max-width: 1464px) {
      width: 120px;
    }

    @media (max-width: 1200px) {
      width: 100px !important;
    }

    &:hover {
      background: #87523d;
      color: #ffffff;
      padding: 7px;
      border-radius: 7px;
      width: 155px;
      text-align: center;
      border: 1px solid #fff;

      @media (max-width: 1200px) {
        padding: 7px;
        width: 100px;
      }

      @media (max-width: 1464px) {
        padding: 10px;
        width: 120px; 
      }
    }

  li {
    list-style: none;
    padding: 7px;
  }
}

  .enroll-now {
  display: flex;

    @media (max-width: 1464px) {
     li {
      display: none ;
      }
    }
    
    @media (max-width: 1200px) {
      i {
        margin-top: -5 px !important;
        // font-size: 25px !important;
      }
    }
  }

`;

export const BurgerMenuWrapper = styled.div`
  display: none;
  border-radius: 7px;
  margin-right: 113px;
  margin-top: -45px;

  &:hover .nav-item a {
    display: block;
    }
  }

  // @media (max-width: 350px) {
  //   &:hover .CIBT-logo img{
  //     display: none;
  //   }
  // }

  @media (max-width: 470px) {
    i {
      font-size: 20px !important;
      margin-bottom: 20px !important;
    }
  }

  @media (max-width: 1055px) {
    display: block;
    margin-right: 0 !important;
  }
`;

export const NavItemWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-top: -40px;
  padding-left: 0px;
  position: relative;
  background: rgb(255, 255, 255);
  width: 100%;
  // height: 100vh;
  z-index: 10;
  display: block;

  @media (max-width: 400px) {
      font-size: 10px !important;
  }

  a {
    text-decoration: none;
    color: #87523d;
    width: 120%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 10px 5px 10px 5px;
    display: none;
    border-radius: 7px;

    &:hover {
      color: #fff;
      background: #87523d;
    }
  }

  li {
    list-style: none;
    padding: 7px;
  }
`;

// export const BurgerMenuWrapper = styled.div`
//   /* display: flex; */
//   align-items: center;
//   justify-content: center;
//   font-size: 15px;
//   font-weight: bold;
//   text-align: center;
//   margin-top: -30px;
//   padding-left: 0px;
//   position: relative;
//   background: rgb(255, 255, 255);
//   // width: 100%;
//   z-index: 10;
//   display: none;
//   // border-radius: 7px;

//   &:hover > ul > a {
//     display: block;
//   }

//   @media (max-width: 1055px) {
//     display: block;
//     margin-right: 0 !important;
//   }
// `;

// export const NavItemWrapper = styled.ul`
//   > a {
//     text-decoration: none;
//     color: #87523d;
//     width: 100%;
//     display: flex;
//     text-align: center;
//     align-items: center;
//     justify-content: center;
//     padding: 10px 5px 10px 5px;
//     /* display: flex; */

//     display: none;
//     border-radius: 7px;

//     &:hover {
//       color: #fff;
//       background: #87523d;
//     }

//     > li {
//       list-style: none;
//       padding: 7px;
//     }
//   }
// `;

// /* ------------------media queries------------- */

// @media (max-width: 1055px) {
//   .burger-menu {
//     display: block;
//     margin-right: 0 !important;
//   }

//   #navbar {
//     display: none;
//   }
// }

// @media (max-width: 1464px) {
//   #navbar {
//     font-size: 15px;
//   }

//   #navbar a {
//     width: 120px;
//   }

//   #navbar a:hover {
//     padding: 10px;
//     /* width: 120px; */
//   }

//   .enroll-now li {
//     display: none;
//   }
//   .enroll-now i {
//     font-size: 40px !important;
//   }
// }

// @media (max-width: 1200px) {
//   .CIBT-logo img {
//     width: 200px !important;
//   }
//   #navbar {
//     font-size: 12px;
//   }
//   #navbar a {
//     width: 100px;
//   }
//   #navbar a:hover {
//     padding: 7px;

//     width: 100px;
//   }
//   .fa-solid fa-phone-volume {
//     font-size: 7px;
//     margin-top: -2px;
//   }
// }

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

// @media (max-width: 270px) {
//   .CIBT-logo img {
//     width: 50px !important;
//   }
// }

// @media (max-width: 470px) {
//   .CIBT-logo img {
//     width: 100px !important;
//   }}
