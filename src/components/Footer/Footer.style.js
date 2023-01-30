
import styled from "styled-components";

export const FooterWrapper = styled.section`
  background: #87523d;
  color: #fff;
  padding: 60px;
  width: 100%;
  /* height: 455px; */
`;


export const FooterBodyWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  &:after {
    content: "";
    height: 1px;
    /* width: 1400px; */
    background: #cfcfce;
    position: absolute;
    margin: 60px;
    margin-top: 345px;
    left: 0;
    right: 0;

    @media (max-width: 890px) {
      margin-top: 255px !important;
    }
  }

  @media (max-width: 500px) {
    display: inline-block;
  }

  @media (max-width: 890px) {
    .quicklinks {
      width: 10%;
    }
    .contacts {
      width: 30%;
    }
  }

  @media (max-width: 500px) {
    .quicklinks {
      width: 100%;
      margin-top: 30px;

      .title-quicklinks {
        font-size: 15px;
      }
    }
    .contacts {
      width: 100%;

      .title-contacts {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 700px) {
    .quicklinks {
      width: 20%;
    }
  }
`;

export const LogoWrapper = styled.div`
img {
  width: 100%;
}
@media (max-width:500px)
{
    width: 70%;
  }

@media (max-width:890px){
  width: 30%;
  }
`;

export const CopyRightWrapper = styled.div`
  padding: 10px;
  position: absolute;
  left: 10px;
  margin-left: 40px;
  margin-right: 40px;
  /* margin-top: 70px; */
  font-size: 12px;
  color: #cfcfce;
  /* text-decoration: overline; */

  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const QuicklinksListWrapper = styled.ul`
  list-style: none;
  font-size: 14px;
  padding: 0px;

  @media (max-width:890px){
    font-size: 10px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }

 a {
  text-decoration: none;
  color: #cfcfce;
  padding: 0.2px;

 &:hover {
  color: #000000;
}
}

`;

export const ContactsListWrapper = styled.div`

  display: flex;
  padding: 01px;
  font-size: 14px;
  color: #cfcfce;

  @media (max-width:890px){  
    font-size: 10px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }

  &:hover {
    color: #000000;
  }

  a {
  color: #cfcfce;
  text-decoration: none;

    &:hover {
      color: #000000;
    }
  }
`;

export const ListTextWrapper = styled.div`
  padding: 1px;
  margin: 15px;
  margin-left: 0px;

  @media (max-width:890px){
    padding: 13px;
    margin: 0px;
    margin-left: -20px;
  }

`;
export const ListIconWrapper = styled.div`
  list-style: none;
  color: #cfcfce;
  padding: 1px;
  margin: 13px;
  margin-left: 0px;
  font-size: 18px;

    @media (max-width:890px){
    font-size: 10px;
  }
  

&:hover {
  color: #000000;
}
`;

export const FooterIconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 14px;
  margin-left: 0;

  @media (max-width: 500px) {
    font-size: 20px;
    margin: 10px;
    margin-left: -20px;
  }


 a {
  color: #cfcfce;

  &:hover {
  color: rgb(0, 0, 0);
}
}`;


export const ContactsDivWrapper = styled.div`
  margin: 7px;
  margin-left: 0;

`;



