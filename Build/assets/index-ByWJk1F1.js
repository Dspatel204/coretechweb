function g7(e,n){for(var l=0;l<n.length;l++){const o=n[l];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const c=Object.getOwnPropertyDescriptor(o,s);c&&Object.defineProperty(e,s,c.get?c:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}})();/*! For license information please see mobile-app-bundle.js.LICENSE.txt */(()=>{var e,n,l={6535:(c,a,f)=>{f.d(a,{A:()=>K});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v),A=f(4417),M=f.n(A),_=new URL(f(4276),f.b),U=new URL(f(1379),f.b),$=new URL(f(7155),f.b),b=S()(y()),w=M()(_),N=M()(U),z=M()($);b.push([c.id,`@font-face {
    font-family: "poppins";
    src: url(${w}) format("truetype");
}

@font-face {
    font-family: "poppinsLight";
    src: url(${N}) format("truetype");
}


@font-face {
    font-family: "port";
    src: url(${z}) format("truetype");
}

.footerParent {
    padding: 3em 7em;
    box-shadow: 0px 0px 10px 0px #0000001A inset;
    background: #D9D9D9;
    background-image: linear-gradient(to bottom right, transparent, transparent 74%, rgba(0, 0, 0, 0.2) 86%, #848199), linear-gradient(to top left, transparent, transparent 75%, rgba(0, 0, 0, 0.2) 88%, #848199);
}



.footerDarkBg {
    background: #1D142D;
    background-image: linear-gradient(to bottom right, transparent, transparent 75%, #1D142D 88%, #84819986), linear-gradient(to top left, transparent, transparent 75%, #1D142D 88%, #84819981);
}

.topContainer {
    display: flex;
    column-gap: 3em;
}

.leftCol {
    flex: 35;
}

.middleCol {
    flex: 31;
}

.rightCol {
    flex: 34;
}

.middleCol h2 {

    margin-left: 17px;
}

.middleCol img {
    width: 12px;
    margin-right: 5px;
}

.middleCol span {
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #4B4A4A;
    cursor: pointer;
}

.middleCol p {
    margin-bottom: 0 !important;
}


.footerServicesTop {
    margin-bottom: 3em;
}


.rightCol img {
    width: 21px;
}

.footerCols h2 {
    font-family: poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0.03em;

}

.leftCol p {
    font-family: poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #4B4A4A;

}

.logoAndText img {
    width: 220px;
}

.logoAndText {
    position: relative;
    margin-bottom: 2em;
}

.logoAndText span {
    font-family: port;
    font-size: 14px;
    font-weight: 500;
    line-height: 14.99px;
    letter-spacing: 0.05em;
    position: absolute;
    left: 76px;
    bottom: 8px;
}

.phoneNo span,
.fax span,
.email span {
    font-family: poppins;
    font-size: 15px;
    font-weight: 500;
    line-height: 22.5px;
    color: #4B4A4A;
    margin-left: 20px;
}

.phoneNo,
.fax,
.email {
    padding-bottom: 15px;
    border-bottom: 2px dashed #4B4A4A;
    margin-bottom: 15px;
}

.email {
    border-bottom: none;
}

.copyrightSocialIconContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    align-items: center;
}

.socialIconContainer {
    display: flex;
    column-gap: 20px;
    justify-content: flex-end;
    align-items: center;
}

.copyright {
    flex: 80;
    font-family: poppins;
    font-size: 11px;
    font-weight: 300;
    line-height: 16.5px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #4B4A4A;

}

.socialIconContainer {
    flex: 20
}

.leftCol .grayClr,
.middleCol .grayClr,
.phoneNo .grayClr,
.fax .grayClr,
.email .grayClr,
.copyrightSocialIconContainer .copyrightGray,
.rightCol .grayClrTagline {
    color: #B8B6B6;
}

@media screen and (max-width: 1350px) {
    .footerParent {
        padding: 3em 4em;
    }
}

@media screen and (max-width: 1150px) {
    .footerParent {
        padding: 3em 3em;
    }

    .topContainer {
        gap: 2em;
    }

    .logoAndText span {
        font-size: 13px;
        letter-spacing: 0.02em;
        left: 76px;
        bottom: 8px;
    }

}

@media screen and (max-width: 993px) {
    .logoAndText span {
        left: 76px;
        bottom: -5px;
    }
}

@media screen and (max-width: 950px) {
    .footerParent {
        padding: 3em 2em;
    }

    .topContainer {
        gap: 1.5em;
    }

    .logoAndText img {
        width: 160px;
    }

    .leftCol p {
        font-size: 12px;
        line-height: 18px;
    }

    .footerServicesTop {
        margin-bottom: 1em;
    }

    .middleCol span {
        font-size: 13px;
        line-height: 17px;
    }

    .phoneNo span,
    .fax span,
    .email span {
        font-size: 13px;
        line-height: 17.5px;
        margin-left: 15px;
    }

    .leftCol {
        flex: 40;
    }

    .middleCol {
        flex: 20;
    }

    .rightCol {
        flex: 30;
    }

    .logoAndText span {
        left: 58px;
        bottom: 3px;
    }
}

@media screen and (max-width: 909px) {
    .logoAndText span {
        left: 58px;
        bottom: -10px;
    }
}`,""]);const K=b},2485:(c,a,f)=>{f.d(a,{A:()=>A});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v)()(y());S.push([c.id,`
.white {
  color: #ffffff !important;
}

.black {
  color: #000000 !important;
}
.Logo {
  height: 56px;
  margin-right: 9em;
}

.navbarBg {
  /* position: relative; */
  background: hsla(0, 0%, 100%, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-family: poppins;
  font-size: 17px;
  font-weight: 400;
  line-height: 28.5px;
  padding: 0 4em;
  width: 100%;
}
.sticky-top {
  position: fixed ;
  top: 0;
  z-index: 100000000; /* Adjust z-index as needed */
}
.navbarBgLight{
    box-shadow: 0px 4px 23px 0px #0000001A;

}

.active {
  color: #927dfa !important;
  font-size: 18px;
  font-weight: 600;
}


.space{
    gap: 20px;
}
.theme{
    margin-left: 3em;
    cursor: pointer;
}
.theme img{
    margin-right: 5px;
}
.navTransparent .navbar-toggler-icon {
  outline: none;
}
.navTransparent .navbar-toggler:focus {
    outline: none ;
  }

  .nav-link:hover{
    color: #927dfa !important;
  }
  
/* .navTransparent .navbar-toggler-icon {
    background-image: url("../../assets/images/hamburger.png");
    font-weight: bolder;
    font-size: larger;
    border-radius: 5px;
  } */

@media screen and (max-width: 1080px) {
    .navbarBg {
        font-size: 17px;
        padding: 0 1em;
      }
    .space{
        gap: 10px;
    }
    
}
@media screen and (max-width: 1150px) {
    .Logo {
        margin-right: 5em;
      }
    
}
@media screen and (max-width: 900px) {
    .Logo {
        margin-right: 3em;
      }
    
}
@media screen and (max-width: 768px) {
    .navbarBg {
        font-size: 17px;
        padding-left: 1em;
      }
    .space{
        gap: 0px;
    }
}`,""]);const A=S},2825:(c,a,f)=>{f.d(a,{A:()=>A});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v)()(y());S.push([c.id,`.scroll-up-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background: hsla(0, 0%, 100%, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #fff;
  cursor: pointer;
  display: none;
  border-radius: 10px;
}

.scroll-up-button-dark{
  background: hsla(0, 0%, 3%, 0.404);
}

.scroll-up-button.visible {
  display: block;
}
`,""]);const A=S},7568:(c,a,f)=>{f.d(a,{A:()=>A});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v)()(y());S.push([c.id,`/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

@font-face {
  font-family: "poppins";
  src: url("../../assets//fonts/Poppins/Poppins-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "koho";
  src: url("../../assets//fonts/KoHo//KoHo-Bold.ttf") format("truetype");
}

body {
  position: relative;
  overflow: hidden;
  overflow-y: scroll;
}

.dark-bg {
  background-image: url("./assets/images/dark-bg.png");
  background-size: cover;
}

.light-bg {
  background-image: url("./assets/images/light-bg.png");
  background-size: cover;
} */
`,""]);const A=S},5879:(c,a,f)=>{f.d(a,{A:()=>K});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v),A=f(4417),M=f.n(A),_=new URL(f(4276),f.b),U=new URL(f(1379),f.b),$=new URL(f(4076),f.b),b=S()(y()),w=M()(_),N=M()(U),z=M()($);b.push([c.id,`@font-face {
    font-family: "poppins";
    src: url(${w}) format("truetype");
}

@font-face {
    font-family: "poppinsLight";
    src: url(${N}) format("truetype");
}


@font-face {
    font-family: "koho";
    src: url(${z}) format("truetype");
}

.aboutContainer {
    margin: 14em 5em 6em 5em;
}


.aboutUsLandingContainer {
    display: flex;
    gap: 4em;
    margin-bottom: 10em;
}

.aboutUsLandingImg img {
    width: 649px;
}

.aboutUsLandingImg .contactImg {
    width: 573px;
}

.aboutUsLandingText h1 {
    font-family: koho;
    font-size: 95px;
    font-weight: 700;
    line-height: 130px;
    letter-spacing: 0.03em;
    color: #6C42F8;
    margin-bottom: 0.2em;
}

.aboutUsLandingText .borderFont {
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #6C42F8;
}

.aboutUsLandingText p {
    font-family: poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #2B2424;
}

.darkColor {
    color: #E1E0E0 !important;
}

.pricipleHexagonParent {
    display: flex;
    flex-wrap: wrap;
    /* gap: 2em; */
    justify-content: space-around;
    padding-bottom: 5em;
    margin-bottom: 10em;
}

.pricipleHeading,
.ourTeamHeading {
    display: flex;
    justify-content: center;
}

.pricipleHeading h1,
.ourTeamHeading h1 {
    border-bottom: 2px dashed #6C42F8;
    font-family: koho;
    font-size: 50px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0.03em;
    color: #8B68FF;
    margin-bottom: 1em;
}

/* .priciplehexagon {
    width: 350px;
    height: 250px;
    position: relative;

}

.priciplehexagon,
.priciplehexagon:before,
.priciplehexagon:after {
    background: white;
    box-shadow: 0px 0px 15px 0px rgba(87, 86, 86, 0.8);
    transition: transform 0.3s ease
}

.priciplehexagon:after {
    box-shadow: 8px -8px 15px -3px rgba(87, 86, 86, 0.8);
}

.priciplehexagon:hover:before {
    box-shadow: 0px 0px 15px 0px #927DFA;
}

.priciplehexagon:hover {
    box-shadow: 0px 0px 15px 0px #927DFA;
    transform: scale(1.05);

}

.priciplehexagon:hover:after {
    box-shadow: 8px -8px 15px -3px #927DFA;
}



.priciplehexagon:before,
.priciplehexagon:after {
    content: "";
    position: absolute;
    left: 71px;
    width: 208px;
    height: 200px;
    transform: rotate(145deg) skew(21.5deg);
}

.priciplehexagon:before {
    top: -99px;
}

.priciplehexagon:after {
    top: 149px;
}

.priciplehexagon p {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    z-index: 1;
    align-items: center;
    padding: 0 10px;
}

.priciplehexagon.dark-mode,
.priciplehexagon.dark-mode:before,
.priciplehexagon.dark-mode:after {
    background: #F0ECEC1A !important;
    box-shadow: 0px 0px 15px 0px #FFFFFF59 inset, 0px 7px 10px 0px #00000040 !important;
}

.priciplehexagon.dark-mode p {
    background-color: #F0ECEC1A;
}


.innovationLogo {
    width: 131px;
    height: 92px;
}

.expertiseLogo {
    width: 95px;
    height: 95px;
}

.clientsLogo {
    width: 109px;
    height: 92px;
}

.priciplehexagon p img {
    position: absolute;
    top: -70px;
} */


.ourTeamContainer {
    padding-bottom: 6em;
}

.teamImagesParent {
    position: relative;
    display: flex;
    justify-content: center;
}

.ourTeamContainer .ourTeamHeading h1 {
    margin-bottom: 1em;
}


.teamTopImagesFlex,
.teamMiddleFlex {
    display: flex;
}

.teamTopImagesFlex {
    gap: 4em;
    align-items: flex-end;
}

.teamMiddleFlex {
    align-items: center;
    margin: 20px auto;
    gap: 2em;
}

.teamBottom {
    align-items: flex-start;
}

.ourTeamContainer img {
    border-radius: 10px;
    object-fit: cover;
    object-position: center top;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
}

.teamMember img:hover {
    box-shadow: 0px 4px 15px 0px #927DFA;
    transform: scale(1.05);
}

.imgTransform {
    box-shadow: 0px 4px 15px 0px #927DFA;
    transform: scale(1.05)
}

.firstMember,
.seventhMember {
    flex: 40;
    text-align: end;
}

.secondMember,
.sixthMember {
    flex: 20;
}

.thirdMember,
.fifthMember {
    flex: 40;
}

.firstMember img {
    width: 163.34px;
    height: 119.96px;
}

.secondMember img {
    width: 232.06px;
    height: 170.44px;

}

.thirdMember img {
    width: 163.34px;
    height: 119.96px;
}

.fourthMember img {
    width: 232.06px;
    height: 170.44px;
}

.fifthMember img {
    width: 163.34px;
    height: 119.96px;
}

.sixthMember img {
    width: 232.06px;
    height: 170.44px;

}

.seventhMember img {
    width: 163.34px;
    height: 119.96px;

}

.eightMember img {
    width: 232.06px;
    height: 170.44px;
}

.aboutMember {
    /* width: 594px;
height: 170.44px; */
    border-radius: 20px;
    background: #FFFFFF1A;
    box-shadow: 0px 0px 15px 0px #927dfa9d inset;
    padding: 20px 3em 30px;
    text-align: center;
}

.changeShadow {
    box-shadow: 0px 0px 15px 0px #FFFFFF80 inset !important;
}

.aboutMember .memberName {
    display: flex;
    justify-content: center;
}

.aboutMember .memberName h2 {
    border-bottom: 2px dashed #6C42F8;
    font-family: poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.03em;
}

.aboutMember h6 {
    font-family: poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #2B2424;
    text-align: center;
}

.aboutMember p {
    font-family: poppins;
    font-size: 13px;
    font-weight: lighter;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #2B2424;
}

.teamInfoDarkClr {
    color: #E1E0E0 !important;
    font-family: poppins;
    font-size: 13px;
    font-weight: lighter;
    line-height: 20px;
    letter-spacing: 0.03em;
}

/* ------------------ */
.innovationLogo {
    width: 131px;
    height: 92px;
}

.expertiseLogo {
    width: 95px;
    height: 95px;
}

.clientsLogo {
    width: 109px;
    height: 92px;
}

.leftHexagon {
    position: relative;
    /* height: 500px; */
    /* width: 50.33%; */
    box-sizing: border-box;

}

.hexagonContent {
    position: absolute;
    top: 3em;
    text-align: center;
    padding: 0 2em;
}

.hexagonContent p h2 {
    font-family: poppins;
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0.03em;
    margin: 5px auto 10px;
    color: #20242A;
}



.hexagonContent p span {
    font-family: poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #5A5252;
}

.pricipletextDark {
    color: #E1E0E0 !important;
}


@media screen and (max-width: 1350px) {
    .aboutContainer {
        margin: 12em 4em 6em 4em;
    }

    .aboutUsLandingContainer {
        gap: 3em;
    }

    .aboutUsLandingImg img {
        width: 540px;
    }

    .aboutUsLandingImg .contactImg {
        width: 540px;
    }

    .priciplehexagon {
        width: 300px;
        height: 220px;
    }

    .priciplehexagon:before,
    .priciplehexagon:after {
        left: 61px;
        width: 178.5px;
        height: 172px;
        transform: rotate(145deg) skew(21.5deg);
    }

    .priciplehexagon:before {
        top: -87px;
    }

    .priciplehexagon:after {
        top: 134px;
    }

    .priciplehexagon p h2 {
        font-size: 25px;
        line-height: 35px;
        letter-spacing: 0.02em;
        margin: 20px auto 10px;
    }

    .priciplehexagon p span {
        font-size: 15px;
        line-height: 18px;
    }
}

@media screen and (max-width: 1250px) {
    .imgHexagon img {
        width: 300px;
    }

    .innovationLogo {
        width: 101px;
        height: 82px;
    }

    .expertiseLogo {
        width: 75px;
        height: 85px;
    }

    .clientsLogo {
        width: 89px;
        height: 82px;
    }

    .hexagonContent {
        top: 3em;
        padding: 0 1em;
    }

    .hexagonContent p h2 {
        font-size: 22px;
        line-height: 35px;
        margin: 5px auto 5px;
    }

    .hexagonContent p span {
        font-size: 14px;
        line-height: 14px;
    }

}

@media screen and (max-width: 1251px) {
    .aboutUsLandingImg .contactImg {
        width: 450px;
    }
}

@media screen and (max-width: 1151px) {
    .aboutContainer {
        margin: 12em 3em 6em 3em;
    }

    .aboutUsLandingContainer {
        gap: 2em;
    }

    .aboutUsLandingImg img {
        width: 450px;
    }

    .aboutUsLandingText h1 {
        font-size: 80px;
        line-height: 100px;
        letter-spacing: 0.02em;
        margin-bottom: 0.1em;
    }

    .aboutUsLandingText p {
        font-size: 18px;
        line-height: 25px;
    }

    .aboutMember {
        padding: 20px 1.5em;
    }

    .aboutMember p {
        letter-spacing: 0.02em;
        line-height: 17px;
    }

}

@media screen and (max-width: 1060px) {
    .priciplehexagon p img {
        top: -59px;
    }

    .innovationLogo {
        width: 101px;
        height: 82px;
    }

    .expertiseLogo {
        width: 75px;
        height: 75px;
    }

    .clientsLogo {
        width: 89px;
        height: 68px;
    }

    .priciplehexagon {
        width: 230px;
        height: 220px;
    }

    .priciplehexagon:before,
    .priciplehexagon:after {
        left: 48px;
        width: 134.5px;
        height: 134px;
        transform: rotate(145deg) skew(21.5deg);
    }

    .priciplehexagon:before {
        top: -67px;
    }

    .priciplehexagon:after {
        top: 152px;
    }

    .priciplehexagon p h2 {
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.02em;
        margin: 20px auto 10px;
    }

    .priciplehexagon p span {
        font-size: 13px;
        line-height: 16px;
    }

    .priciplehexagon p {
        padding: 0 5px;
    }

    .aboutMember {
        padding: 10px 0.8em;
    }

    .teamTopImagesFlex {
        gap: 2em;
    }

    .teamMiddleFlex {
        gap: 1em;
    }

    .secondMember img,
    .sixthMember img {
        width: 200.06px;
        height: 143.44px;
    }

    .fourthMember img,
    .eightMember img {
        width: 200.06px;
        height: 164.44px;
    }

    .aboutMember .memberName h2 {

        font-size: 15px;
        line-height: 25px;
    }

    .imgHexagon img {
        width: 250px;
    }

    .innovationLogo {
        width: 97px;
        height: 61px;
    }

    .expertiseLogo {
        width: 70px;
        height: 61px;
    }

    .clientsLogo {
        width: 85px;
        height: 61px;
    }

    .hexagonContent {
        top: 2em;
        padding: 0 0.5em;
    }

    .hexagonContent p h2 {
        font-size: 20px;
        line-height: 20px;
        margin: 5px auto 5px;
    }

    .hexagonContent p span {
        font-size: 12px;
        line-height: 12px;
    }
}


@media screen and (max-width: 980px) {
    .aboutUsLandingImg .contactImg {
        width: 350px;
    }
}

@media screen and (max-width: 921px) {
    .aboutContainer {
        margin: 9em 1.5em 6em 1.5em;
    }

    .aboutUsLandingContainer {
        gap: 1.1em;
    }

    .aboutUsLandingImg img {
        width: 350px;
    }

    .aboutUsLandingText h1 {
        font-size: 70px;
        line-height: 90px;
        letter-spacing: 0.02em;
        margin-bottom: 0.1em;
    }

    .aboutUsLandingText p {
        font-size: 16px;
        line-height: 22px;
    }

    .imgHexagon img {
        width: 220px;
    }

    .innovationLogo {
        width: 87px;
        height: 51px;
    }

    .expertiseLogo {
        width: 60px;
        height: 51px;
    }

    .clientsLogo {
        width: 75px;
        height: 51px;
    }

    .hexagonContent {
        top: 2em;
        padding: 0 0.5em;
    }

    .hexagonContent p h2 {
        font-size: 18px;
        line-height: 20px;
        margin: 5px auto 5px;
    }

    .hexagonContent p span {
        font-size: 10px;
        line-height: 10px;
    }

}

@media screen and (max-width:600px) {
    .aboutUsLandingImg img {
        width: 200px;
    }

    .pricipleHeading,
    .ourTeamHeading {
        width: 100%;
        flex-direction: column;
    }

    .aboutUsLandingText {
        width: 30%;
    }

    .aboutUsLandingText h1 {
        width: 100%;
        font-size: 40px;
    }

    .light-bg {
        width: 100%;
    }

    .pricipleHexagonParent {
        width: 50%;
    }

    .aboutContainer {
        width: 160%;
    }

    .hexagonContent p span {
        font-size: 9px;
    }

    .ourTeamContainer .ourTeamHeading h1 {
        width: 65%;
    }

    .footerParent {
        padding: 20px;
    }

    .ourTeamContainer {
        width: 100%;
        flex-direction: column;
    }

    .teamTopImagesFlex {
        width: 100%;
        flex-direction: column;
    }

    .teamMiddleFlex {
        flex-direction: column;
    }

    .teamTopImagesFlex {
        flex-direction: column;
    }
}

@media screen and (max-width:480px) {}

@media screen and (max-width:320px) {}`,""]);const K=b},687:(c,a,f)=>{f.d(a,{A:()=>se});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v),A=f(4417),M=f.n(A),_=new URL(f(4276),f.b),U=new URL(f(1379),f.b),$=new URL(f(4076),f.b),b=new URL(f(993),f.b),w=S()(y()),N=M()(_),z=M()(U),K=M()($),ie=M()(b);w.push([c.id,`@font-face {
    font-family: "poppins";
    src: url(${N}) format("truetype");
}

@font-face {
    font-family: "poppinsLight";
    src: url(${z}) format("truetype");
}


@font-face {
    font-family: "koho";
    src: url(${K}) format("truetype");
}

@font-face {
    font-family: "Oswald";
    src: url(${ie}) format("truetype");
}

.contactContainer {
    margin: 14em 7em 12em 7em;
}


.formSection {

    border-radius: 17.79px;
    background: #0000000D;
    box-shadow: 0px 25.42px 38.13px 0px #666AF521, 0px 0px 20px 0px #0000004D inset;
    padding: 3em 4em;
    display: flex;
    gap: 6em;
    margin-bottom: 4em;
}

.formMapSectionParent {
    position: relative;
}

.formSocialIcons {
    position: absolute;
    top: 19em;
    right: -2.6em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 63.55px;
    height: 217.33px;
    border-radius: 0px 12.71px 63.55px 0px;
    background: #8B68FF;
    font-size: 24px;
}

.formSocialIcons i {
    color: #FFFFFF;

}

.containerDarkShadow {
    box-shadow: 0px 25.42px 38.13px 0px #666AF521, 0px 0px 20px 0px #FFFFFF4D inset;
    background: #FFFFFF0D;
}

.formLeftPart h1 {
    font-family: Oswald;
    font-size: 30.5px;
    font-weight: 600;
    line-height: 45.2px;
    letter-spacing: 0.08em;
    color: #8B68FF;
}

.formLeftPart p {
    font-family: poppins;
    font-size: 15.25px;
    font-weight: 400;
    line-height: 22.88px;
    letter-spacing: 0.08em;
    color: #000000;
    margin-bottom: 3.5em;
}

.formLeftPart input,
textarea {
    padding: 20px 30px;
    margin-bottom: 2em;
}

.formLeftPart input,
textarea {
    width: 100%;
    /* height: 63.55px; */
    border-radius: 10px;
    border: 1px solid #A598D1;
    outline: none;
    background: transparent;
}

.formLeftPart input::placeholder,
textarea::placeholder {
    font-family: poppins;
    font-size: 15.25px;
    font-weight: 400;
    line-height: 22.88px;
    letter-spacing: 0.08em;
    color: #898686;
}

.textarea {
    height: 190px;
    text-align: start;
}

.formLeftPart button {
    width: 100%;
    padding: 0.5em 0;
    border-radius: 10px;
    background: #8B68FF;
    border: none;
    color: white;
    font-family: poppins;
    font-size: 25.42px;
    font-weight: 500;
    line-height: 38.13px;
    letter-spacing: 0.08em;
}

.formImg {
    margin: 4em auto 3em auto;
}

.logoDetailFlex {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 1.5em;
}

.circle {
    width: 38.13px;
    height: 38.13px;
    border: 1.27px solid #8B68FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle img {
    width: 19px;
}

.logoDetailFlex .details {
    font-family: poppins;
    font-size: 17.79px;
    font-weight: 400;
    line-height: 26.69px;
    letter-spacing: 0.08em;
    color: #000000;
}

.mapSection {
    box-shadow: 0px 0px 20px 0px #00000066;
    border-radius: 20px;
}

@media screen and (max-width: 1350px) {
    .formSection {
        padding: 3em 3em;
        gap: 5em;
    }
}

@media screen and (max-width: 1177px) {
    .contactContainer {
        margin: 14em 5em 12em 5em;
    }

    .formSection {
        padding: 3em 3em;
        gap: 3em;
    }

    .formImg {
        width: 380px;
        margin: 6em auto 3em auto;
    }
}

@media screen and (max-width: 1020px) {
    .formSection {
        padding: 3em 2em;
        gap: 2em;
    }

    .formImg {
        width: 350px;
        margin: 8em auto 3em auto;
    }
}

@media screen and (max-width: 950px) {
    .contactContainer {
        margin: 14em 3.4em 12em 3.4em;
    }

    .formSection {
        padding: 3em 1.5em;
        gap: 1em;
    }

    .formImg {
        width: 290px;
        margin: 5em auto 3em auto;
    }

    .formLeftPart h1 {
        font-size: 25.5px;
        line-height: 35.2px;
    }

    .formLeftPart p {
        font-size: 14.25px;
        line-height: 20.88px;
        letter-spacing: 0.05em;
        margin-bottom: 2.5em;
    }

    .formLeftPart input,
    textarea {
        padding: 15px 20px;
        margin-bottom: 1.5em;
    }


    .formLeftPart input::placeholder,
    textarea::placeholder {
        font-size: 14.25px;
        line-height: 20.88px;
        letter-spacing: 0.05em;
    }

    .textarea {
        height: 150px;
    }

    .formLeftPart button {
        font-size: 20.42px;
        line-height: 35.13px;
    }

    .logoDetailFlex .details {
        font-size: 14.79px;
        line-height: 20.69px;
    }

    .formSocialIcons {
        position: absolute;
        top: 18em;
        right: -2.3em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 45.55px;
        height: 217.33px;
        border-radius: 0px 12.71px 63.55px 0px;
        background: #8B68FF;
        font-size: 20px;
    }
}

@media screen and (max-width:600px) {

    .contactContainer {
        width: 145%;
    }
    .aboutUsLandingContainer{
        width: 100%;
    }

    .formMapSectionParent {
        width: 100%;
    }

    .formSection {
        width: 100%;
    }
}`,""]);const se=w},1719:(c,a,f)=>{f.d(a,{A:()=>N});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v),A=f(4417),M=f.n(A),_=new URL(f(5972),f.b),U=new URL(f(319),f.b),$=S()(y()),b=M()(_),w=M()(U);$.push([c.id,`/* @font-face {
    font-family: "poppins";
    src: url("../../assets//fonts/Poppins/Poppins-Medium.ttf") format("truetype");
}

@font-face {
    font-family: "poppinsLight";
    src: url("../../assets//fonts/Poppins/Poppins-Light.ttf") format("truetype");
}


@font-face {
    font-family: "koho";
    src: url("../../assets//fonts/KoHo//KoHo-Bold.ttf") format("truetype");
}

.poppinsLight {
    font-family: poppinsLight !important;
}

.homeContainer {
    background: url("./assets/images/dark-bg.png") !important;
    height: 100vh;
    background-size: cover;
    position: relative;
} */

.landingPageContent {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 18em;
    margin-left: 5em;
    margin-top: 5em;
}

/* .landingPageText {
    margin-left: 5em;
} */

.landingPageContent .landingPageText h1 {
    font-family: koho;
    font-size: 55px;
    font-weight: 700;
    line-height: 76px;
    margin-top: 2em;
}

.landingPageContent .landingPageText p {
    font-family: poppins;
    font-size: 25px;
    font-weight: 400;
    line-height: 37.5px;
    color: #8B68FF;
    margin-bottom: 2em;
}

.landingPageContent .landingPageText button {
    padding: 13px 35px 13px 35px;
    border-radius: 10px;
    background: #8B68FF;
    color: white;
    font-family: poppinsLight;
    font-size: 17px;
    font-weight: 400;
    line-height: 25.5px;
    border: none;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);
}

.landingPageContent .landingPageText button,
.whoAreWeText button {
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.landingPageContent .landingPageText button:after,
.whoAreWeText button:after {
    content: '>>';
    position: absolute;
    opacity: 0;
    top: 14px;
    right: -0.3em;
    font-size: 20px;
    transition: 0.5s;
}

.whoAreWeText button:after {
    top: 12px;
}

.landingPageContent .landingPageText button:hover,
.whoAreWeText button:hover {
    padding-left: 25px;
}

.landingPageContent .landingPageText button:hover:after,
.whoAreWeText button:hover:after {
    opacity: 1;
    right: 10px;
}

.landingPageContent img {
    width: 680px;
    margin-top: 6em;
}

.whoAreWeSection {
    display: flex;
    gap: 1.5em;
    margin: 0 5em;
    padding-bottom: 5em;
}

.whoAreWeImg {
    margin-top: 2em;
}

.whoAreWeImg img {
    margin-top: 1em;
    width: 530px;
}

.whoAreWeText h2 {
    font-family: poppins;
    font-size: 25px;
    line-height: 37.5px;
    letter-spacing: 0.05em;
    color: black;
}

.whoAreWeText h1 {
    font-family: koho;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.05em;
    color: #6C42F8;
    width: max-content;
    border-bottom: 2px dashed #6C42F8;
    margin-bottom: 1em;
    padding-bottom: 7px;
}

.whoAreWeText p {
    font-family: poppins;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.03em;
    color: #2B2424;
    margin-bottom: 2em;
}

.whoAreWeText button {
    box-shadow: 0px 4px 10px 0px #927DFA80;
    padding: 13px 35px 13px 35px;
    border-radius: 10px;
    border: 1px solid #8B68FF;
    font-family: poppins;
    font-size: 17px;
    letter-spacing: 0.03em;
    color: #2B2424;
    transition: all 0.5s;
    cursor: pointer;
    /* box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7); */
}

.bgTransparent {
    background: transparent;
}

.servicesContainer {
    margin: 12em auto;
    text-align: center;
}

.servicesHeading {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.servicesHeading h1 {
    font-family: koho;
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.05em;
    color: #6C42F8;
    border-bottom: 2px dashed #6C42F8;
    width: max-content;
    padding-bottom: 5px;
}

.servicesHeading p {
    font-family: poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0.03em;

}

.hexagonTop {
    display: flex;
}

/* .hexagon{
    height: 292px;
    width: 295px;
    background-color: #6C42F8;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
} */

/* Icon.css */
.icon {
    fill: #00000080;
    transition: fill 0.3s;
    position: absolute;
    /*  top: -46px;
    right: 43%; */
}



.honeycomb {
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    transform: translateY(80px);
}

.honeycomb-cell {
    -webkit-box-flex: 0;
    flex: 0 1 250px;
    max-width: 250px;
    height: 137.5px;
    margin: 65.4px 12.5px 25px;
    position: relative;
    padding: 0.5em;
    text-align: center;
    z-index: 1;
    box-shadow: 0px 0px 15px 0 rgba(0, 0, 0, 0.1);
    /* overflow: hidden; */
    transition: transform 0.3s ease
}

.honeycomb-cell:hover {
    transform: scale(1.05);
    /* Adjust the scale factor for the zoom effect */
}

.honeycomb-cell_img {
    object-fit: cover;
    object-position: center;
    /* filter: grayscale(100%); */
    background: #6b6a6a88;

}

.honeycomb-cell_title {
    height: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    text-transform: uppercase;
    color: #000;
    transition: opacity 350ms;
    z-index: 1000;
}


.honeycomb-cell_title h2 {
    font-family: poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.03em;
    margin-top: 15px;
}

.honeycomb-cell_title p {
    font-family: poppins;
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px;
    color: #4B4A4A;
    background: transparent;
    /* background: #ffffff7c; */

}

.honeycomb-cell::before,
.honeycomb-cell::after {
    content: '';
}

.honeycomb-cell::before,
.honeycomb-cell::after,
.honeycomb-cell_img {
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
    display: block;
    position: absolute;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
}

.honeycomb-cell::before {
    background: url(${b});
    background: #6b6a6a88;
    transform: scale(1.055);
    z-index: -100;
}

.honeycomb-cell-client::before {
    background: transparent !important;
}

.honeycomb-cell-dark::before {
    background: hsla(0, 0%, 100%, 0.18);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transform: scale(1.055);
    /* z-index: -10000; */
}

.honeycomb-cell::after {
    background: #727272;
    background: #ffffff7c;
    opacity: 0.8;
    transition: opacity 350ms;
    -webkit-transition: opacity 350ms;
}

.honeycomb-cell-dark::after {
    background: none;
    opacity: 0.7;
    transition: opacity 350ms;
    -webkit-transition: opacity 350ms;
}

.honeycomb-cell:hover .honeycomb-cell_title {
    /* opacity: 0; */
}

.honeycomb-cell:hover .honeycomb-cell_img {
    /* filter: grayscale(0%); */
    background: #6b6a6a88;

}

.honeycomb-cell:hover::before {
    /* background: #fc5130; */
    z-index: -1;
    background: url(${w});
    background: #927dfa4b;
    object-fit: cover;
}

.honeycomb-cell:hover .icon {
    fill: #4c3aa5;
    /* Color on hover */
}

.honeycomb-cell-dark:hover .icon {
    fill: #ffffff;
    /* Color on hover */
}

.honeycomb-cell:hover::after,
.transform::after {
    z-index: -10;
}

.honeycomb_Hidden {
    display: none;
    opacity: 0;
    width: 250px;
    margin: 0 12.5px;
}

.projectContainer {
    display: flex;
    gap: 5em;
    margin: 20em 7em;
}

.projectContainer .projectText {
    flex: 50;
    margin-top: 3em;
}

.projectContainer .happyUserCounts {
    flex: 50;
}

.projectText h1 {
    font-family: koho;
    font-size: 50px;
    font-weight: 600;
    line-height: 60px;
    color: #6C42F8;
    margin-bottom: 20px;
}

.projectText p {
    font-family: poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.03em;
    color: #4B4A4A;
}

.projectHexagon {
    margin-top: 30px;
    width: 510px;
    height: 450px;
    background: #927dfa63;
    /* background: hsla(0, 0%, 100%, 0.18); */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    rotate: 90deg;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* .projectHexagon h1:first-of-type , .projectHexagon p:first-of-type{
    rotate: -90deg;
} */
.happyUserCounts {
    position: relative;
}

.countsUsers {
    position: absolute;
    top: 204px;
    left: 146px;
    text-align: center;
}

.countsUsers h1 {
    font-family: poppins;
    font-size: 51.2px;
    font-weight: 600;
    line-height: 48.64px;
    letter-spacing: 0.03em;
    background: linear-gradient(90deg, #DB0E89 0%, #960D15 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.countsUsers p {
    font-family: poppins;
    font-size: 32px;
    font-weight: 500;
    line-height: 48.64px;
    letter-spacing: 0.03em;
    text-align: center;
    color: #4B4A4A;
}

.countsDownloads {
    margin-top: 30px;
    width: 213px;
    height: 190px;
    background: #FFFFFF26;
    position: relative;
    display: flex;
    position: absolute;
    top: 9px;
    left: -75px;
    justify-content: center;
    align-items: center;
    rotate: 90deg;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background: hsla(0, 0%, 100%, 0.18);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    /* -webkit-backdrop-filter: blur(5px); 
    backdrop-filter: blur(5px); */
}


.countsProducts {
    top: 9px;
    left: 372px;
}

.countsRatings {
    top: 354px;
    left: 150px;
}

.countsDownloads .downloads {
    rotate: -90deg;
    text-align: center;
}

.countsDownloads .downloads h1 {
    font-family: poppins;
    font-size: 51.2px;
    font-weight: 700;
    line-height: 44.8px;
    letter-spacing: 0.03em;
    background: linear-gradient(180deg, #F86E01 0%, #924101 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.countsProducts .products h1 {
    background: linear-gradient(180deg, #019FF8 0%, #2AD6ED 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.countsRatings .ratings h1 {
    background: linear-gradient(180deg, #6E01F8 0%, #920183 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.countsDownloads .downloads p {
    font-family: poppins;
    font-size: 22px;
    font-weight: 500;
    line-height: 44.8px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #6A6868;
}

/* Methodology */
.methodologyContainer {
    text-align: center;
}

.methodologyTitle {
    display: flex;
    justify-content: center;
}

.methodologyContainer .methodologyTitle h1 {
    font-family: koho;
    font-size: 50px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0.05em;
    color: #8B68FF;
    border-bottom: 2px dashed #8B68FF;
    width: max-content;
    margin-bottom: 2em;
}

.cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5em;
}

.cardContainer .cards {
    position: relative;
    width: calc(25% - 15px);
    margin-bottom: 6em;
    background-color: #f0f0f0;
    padding: 6em 20px 5em 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 15px 0px #00000059 inset, 0px 7px 10px 0px #00000040;
    background: #F0ECEC1A;
    border-radius: 20px;
    transition: transform 0.3s ease
}

.cardContainer .cards:hover {
    transform: scale(1.05);
    /* Adjust the scale factor for the zoom effect */
}

.transform {
    transform: scale(1.05);
}

.zIndex {
    z-index: -10 !important;
}

.transform {
    transform: scale(1.05);
}


.cardContainer .cards .cardImg {
    position: absolute;
    top: -17%;
    left: 50%;
    transform: translateX(-50%);
}

.cardContainer .cards h2 {
    font-family: poppins;
    font-size: 25px;
    font-weight: bold;
    height: 60px;
    letter-spacing: 0.05em;
    margin-bottom: 1em;
    text-align: center;
}

.cardContainer .cards p {
    font-family: poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #4b4a4a;
    text-align: center;
}


/* @media (max-width: 768px) {
    .cardContainer .cards {
      width: calc(100% - 30px);
    }
  } */

.darkModeCards {
    background: #F0ECEC1A;
    box-shadow: 0px 0px 15px 0px #FFFFFF59 inset,
        0px 7px 10px 0px #00000040 !important;
}

.darkModeCards p {
    color: #B7B0B0 !important;

}

.whyUsContainer {
    margin: 5em auto;
}

.whyUsTitle,
.testimonialTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.whyUsTitle p,
.testimonialContainer .testimonialTitle p {
    font-family: poppins;
    font-size: 25px;
    font-weight: 500;
    line-height: 37.5px;
    letter-spacing: 0.05em;
}

.whyUsTitle h1,
.testimonialContainer .testimonialTitle h1,
.getInTouchCointainer h1 {
    font-family: koho;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.05em;
    color: #6C42F8;
    border-bottom: 2px dashed #6C42F8;
    margin-bottom: 2em;
}

.coreTechFlexParent {
    display: flex;
    padding: 0 15vw;
    column-gap: 3.2em;
    position: relative;
}

.coreTechFlexParent .ddd {
    text-align: center;
}

.ddd h2 {
    font-family: poppins;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0.05em;
    margin: 20px auto;
}

.ddd p {
    font-family: poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #4B4A4A;
}

.hrLine {
    position: absolute;
    width: 55vw;
    z-index: -1;
    border-bottom: 2px dashed #6C42F8;
    top: 21%;
    left: 20%;
}

.textColor {
    color: #B7B0B0 !important;

}

.testimonialContainer {
    text-align: center;
}

.testimonialContainer .doubleQuotes {
    margin: 9em 10em 0 10em;
    font-family: poppins;
    text-align: center;
}

.doubleQuotes img {
    margin-bottom: 20px;
}

.doubleQuotes p {

    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    letter-spacing: 0.04em;
    color: #4B4A4A;
}

.doubleQuotes h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: #6C42F8;

}

.doubleQuotes h5 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #4B4A4A;

}

.testimonialTitle h1 {
    margin-bottom: 0 !important;
}

.getInTouchCointainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 10vw 12em 10vw;
}

.getInTouchCointainer h1 {
    margin-bottom: 1em;
}

.getInTouchCointainer p {
    font-family: poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.03em;
    text-align: center;
    color: #4B4A4A;
    margin-bottom: 2em;
}

.getInTouchCointainer button {

    padding: 13px 35px 13px 35px;
    border-radius: 10px;
    border: 1px solid #927DFA;
    font-family: poppins;
    font-size: 17px;
    font-weight: 500;
    line-height: 25.5px;
}

.contactBtn {
    padding: 13px 35px 13px 35px;
    border-radius: 10px;
    border: 1px solid #927DFA;
    font-family: poppins;
    font-size: 17px;
    font-weight: 500;
    line-height: 25.5px;
    cursor: pointer;
    background: transparent;
    /* border: 1px solid #91C9FF; */
    outline: none;
    transition: 1s ease-in-out;
}

.contactBtn svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
}

.contactBtn:hover {
    transition: 1s ease-in-out;
    background: #6C42F8;
    border: 1px solid #2904a18c;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);

}

.contactBtn:hover svg {
    stroke-dashoffset: -480;
}

.contactBtn span {
    /* color: white; */
    font-size: 18px;
    font-weight: 100;
}

.greyClr {
    color: #d3d0d0 !important;
}

/****** Responsive services hexagon *******/

@media (max-width: 550px) {
    .honeycomb-cell {
        margin: 81.25px 25px;
    }
}


@media (min-width: 550px) and (max-width: 825px) {
    .honeycomb-cell:nth-child(3n) {
        margin-right: calc(50% - 125px);
        margin-left: calc(50% - 125px);
    }

    .honeycomb_Hidden:nth-child(3n + 5) {
        display: block;
    }
}


@media (min-width: 825px) and (max-width: 1100px) {

    .honeycomb-cell:nth-child(5n + 4) {
        margin-left: calc(50% - 275px);
    }

    .honeycomb-cell:nth-child(5n + 5) {
        margin-right: calc(50% - 275px);
    }

    .honeycomb_Hidden:nth-child(5n),
    .honeycomb_Hidden:nth-child(5n + 3) {
        display: block;
    }
}

@media (min-width: 1100px) {
    .honeycomb-cell:nth-child(7n + 5) {
        margin-left: calc(50% - 400px);
    }

    .honeycomb-cell:nth-child(7n + 7),
    .honeycomb-cell:nth-child(7n + 5):nth-last-child(2) {
        margin-right: calc(50% - 400px);
    }

    .honeycomb_Hidden:nth-child(7n + 7),
    .honeycomb_Hidden:nth-child(7n + 9),
    .honeycomb_Hidden:nth-child(7n + 11) {
        display: block;
    }
}



@media screen and (max-width: 1350px) {
    .landingPageContent .landingPageText h1 {
        font-size: 53px;
    }

    .landingPageContent img {
        width: 600px;
    }

    .landingPageContent {
        margin-left: 0em;
    }

    .whoAreWeSection {
        margin: 0 4em;
    }

    .projectContainer {
        gap: 4em;
        margin: 20em 5em;
    }

    .projectContainer .projectText {
        margin-top: 3em;
    }

    .projectText h1 {
        font-size: 45px;
        line-height: 50px;
        margin-bottom: 20px;
    }

    .projectHexagon {
        width: 410px;
        height: 350px;
    }

    .countsUsers {
        top: 170px;
        left: 115px;
    }

    .countsUsers h1 {
        font-size: 41.2px;
        line-height: 45.64px;
    }

    .countsUsers p {
        font-size: 25px;
        line-height: 38.64px;
    }

    .countsDownloads {
        width: 180px;
        height: 160px;
        left: -59px;
    }

    .countsProducts {
        left: 288px;
    }

    .countsRatings {
        top: 300px;
        left: 115px;
    }

    .countsDownloads .downloads h1 {
        font-size: 41.2px;
        line-height: 41.8px;

    }

    .countsDownloads .downloads p {
        font-size: 18px;
        line-height: 20.8px;
    }

    .cardContainer .cards {
        width: calc(33.33% - 15px);
    }
}

@media screen and (max-width: 1160px) {

    .landingPageContent img {
        width: 525px;
        margin-top: 4em;
    }

    .landingPageContent {
        margin-left: 3em;
    }

    .whoAreWeSection {
        margin: 0 3em;
    }

    .whoAreWeText p {
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.03em;
    }

    .projectContainer {
        margin: 20em 2em;
    }

    .projectText h1 {
        font-size: 40px;
    }

    .projectHexagon {
        width: 380px;
        height: 320px;
    }

    .countsUsers {
        top: 170px;
        left: 115px;
    }

    .countsUsers h1 {
        font-size: 32.2px;
        line-height: 35.64px;
    }

    .countsUsers p {
        font-size: 22px;
        line-height: 25.64px;
    }

    .countsDownloads {
        width: 150px;
        height: 130px;
        left: -45px;
    }

    .countsProducts {
        left: 274px;
    }

    .countsRatings {
        top: 270px;
        left: 115px;
    }

    .countsDownloads .downloads h1 {
        font-size: 32.2px;
        line-height: 35.8px;

    }

    .countsDownloads .downloads p {
        font-size: 16px;
        line-height: 18.8px;
    }

    .hrLine {
        top: 18%;
        left: 20%;
    }
}

@media screen and (max-width: 1080px) {

    .landingPageContent .landingPageText h1 {
        font-size: 45px;
        line-height: 60px;
    }

    .landingPageContent img {
        width: 500px;
    }

    .landingPageContent .landingPageText p {
        font-size: 20px;
    }

    .whoAreWeSection {
        gap: 1em;
        margin: 0 2em;
    }

    .whoAreWeImg img {
        margin-top: 1em;
        width: 430px;
    }

    .whoAreWeText h2 {
        line-height: 25px;
    }

    .whoAreWeText h1 {
        font-size: 35px;
        line-height: 40px;
        letter-spacing: 0.04em;
        margin-bottom: 0.7em;
    }

    .whoAreWeText p {
        font-size: 17px;
        line-height: 28px;
        letter-spacing: 0.03em;
        margin-bottom: 1.5em;
    }

    .whoAreWeText button {
        padding: 10px 30px;
    }

    .servicesHeading h1 {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 0.04em;
    }

    .servicesHeading p {
        font-size: 16px;
        line-height: 30px;
    }

    .cardContainer .cards {
        width: calc(50% - 15px);
    }

    .coreTechFlexParent {
        padding: 0 8vw;
        column-gap: 1em;
    }

    .ddd h2 {
        font-size: 30px;
        line-height: 50px;
    }

    .ddd p {
        font-size: 14px;
        line-height: 20px;
    }

    .ddd img {
        width: 120px;
    }

    .hrLine {
        top: 17%;
        left: 20%;
    }

    .methodologyContainer .methodologyTitle h1 {
        font-size: 40px;
        line-height: 55px;
    }

    .whyUsTitle h1,
    .testimonialContainer .testimonialTitle h1 {
        font-size: 35px;
        line-height: 45px;
    }

    .getInTouchCointainer p {
        font-size: 18px;
        line-height: 25px;
    }
}

@media screen and (max-width: 900px) {


    .landingPageContent .landingPageText h1 {
        font-size: 40px;
        line-height: 60px;

    }

    .landingPageContent img {
        width: 415px;
        margin-top: 3em;
    }

    .landingPageContent .landingPageText p {
        font-size: 16px;
    }

    .whoAreWeSection {
        margin: 0 1.5em;
    }

    .whoAreWeImg img {
        margin-top: 1em;
        width: 350px;
    }

    .whoAreWeText h2 {
        font-size: 22px;
        line-height: 25px;
    }

    .whoAreWeText h1 {
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 0.03em;
    }

    .whoAreWeText p {
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 1.5em;
    }

    .projectText h1 {
        font-size: 35px;
        line-height: 40px;
    }

    .projectText p {

        font-size: 18px;
        line-height: 25px;
    }

    .projectHexagon {
        width: 300px;
        height: 270px;
    }

    .countsUsers {
        top: 145px;
        left: 83px;
    }

    .countsUsers h1 {
        font-size: 25.2px;
        line-height: 30.64px;
    }

    .countsUsers p {
        font-size: 20px;
        line-height: 22.64px;
    }

    .countsDownloads {
        width: 130px;
        height: 115px;
        left: -50px;
    }

    .countsProducts {
        left: 220px;
    }

    .countsRatings {
        top: 220px;
        left: 86px;
    }

    .countsDownloads .downloads h1 {
        font-size: 25.2px;
        line-height: 30.8px;

    }

    .countsDownloads .downloads p {
        font-size: 15px;
        line-height: 16.8px;
    }
}

@media screen and (max-width:768px) {
    .homeContainer {
        width: 100%;
    }

    .navbarBg {
        width: 100%;
    }
}

@media screen and (max-width:600px) {
    .homeContainer {
        width: 168%;
    }

    #landingPageContent {
        width: 150%;
    }

    #whoAreWeSection {
        width: 160%;
    }

    .navbarBg {
        width: 100%;
    }

    .whoAreWeSection {
        width: 100%;
    }

    .servicesContainer {
        width: 160%;
    }

    #projectSection {
        width: 168%;
    }

    #methodologySection {
        width: 168%;
    }

    #whyUsSection {
        width: 168%;
    }

    #testimonialSection {
        width: 168%;
    }

    #getInTouchSection {
        width: 168%;
    }

    .footerParent {
        width: 168%;
    }
}

@media screen and (max-width:480px) {
    .light-bg {
        width: 100%;
    }

    .navbarBg {
        width: 100%;
    }

    .homeContainer {
        width: 100%;
    }

    #landingPageContent {
        width: 182%;
    }

    .landingPageContent .landingPageText h1 {
        font-size: 35px;
    }

    .landingPageContent {
        margin-bottom: 10em;
    }

    .whoAreWeText h2,
    .whoAreWeText h1,
    .whoAreWeText p {
        width: 100%;
    }

    .servicesContainer {
        width: 180%;
    }

    .cardContainer {
        width: 110%;
        padding: 0 3em;
    }

    .whyUsContainer {
        width: 100%;
        transform: translateX(20px);
    }

    #testimonialSection {
        width: 180%;
    }

    .getInTouchCointainer {
        width: 110%;
    }

    .footerParent {
        width: 182%;
    }
}

@media screen and (max-width:320px) {
    .homeContainer {
        width: 100%;
    }

    #landingPageContent {
        width: 185%;
    }

    .landingPageContent img {
        width: 280px;
    }

    .whoAreWeImg img {
        width: 280px;
    }

    .whoAreWeSection {
        width: 110%;
    }

    .whoAreWeText h2,
    .whoAreWeText h1,
    .whoAreWeText p {
        width: 100%;
    }

    .servicesContainer {
        width: 185%;
    }

    .projectText h1 {
        font-size: 30px;
        line-height: 30px;
    }

    .projectText p {
        font-size: 15px;
        width: 100%;
        line-height: 20px;
    }

    .footerParent {
        width: 185%;
    }
}`,""]);const N=$},2419:(c,a,f)=>{f.d(a,{A:()=>K});var h=f(1601),y=f.n(h),v=f(6314),S=f.n(v),A=f(4417),M=f.n(A),_=new URL(f(4276),f.b),U=new URL(f(1379),f.b),$=new URL(f(4076),f.b),b=S()(y()),w=M()(_),N=M()(U),z=M()($);b.push([c.id,`@font-face {
    font-family: "poppins";
    src: url(${w}) format("truetype");
}

@font-face {
    font-family: "poppinsLight";
    src: url(${N}) format("truetype");
}


@font-face {
    font-family: "koho";
    src: url(${z}) format("truetype");
}


.filterBtnsParent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5em;
    margin-bottom: 5em;
}

.filterbtn {
    padding: 18px 30px 18px 30px;
    border-radius: 20px 20px 0px 20px;
    border: 1px 0px 0px 0px;
    border: 1px solid #927DFA;
    font-family: poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.03em;

}

.allbtn {
    padding: 18px 30px 18px 30px;
    border-radius: 20px 20px 0px 20px;
    background: #6C42F8;
    color: white;
    border: none;
    margin-right: 3em;
}

.portfolioCardsParent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 7em;
}

.portfolioCard {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
    position: relative;
    transition: transform 0.3s ease;
}

.portfoliocardImg {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    position: relative;
}

.portfolioCard img {
    width: inherit;
    height: inherit;
    /* object-fit: cover; */
    /* height: auto; */
    border-radius: 20px;
}

.portfolioInfo {
    width: 223px;
    height: 80px;
    border-radius: 20px 20px 0px 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px 0px #00000040;
    text-align: center;
    position: absolute;
    bottom: -3em;
    left: 50%;
    padding-top: 10px;
    transform: translateX(-50%);
}

.portfolioInfo p {
    font-family: poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 0 !important;
}

.applicationIcon {
    fill: #393939
}

.portfolioCard:hover {
    transform: scale(1.05);
    /* Zoom in a little on hover */
}

.portfolioCard:hover .applicationIcon {
    fill: #6C42F8
}

.portfolioCard:hover .portfolioInfo {
    box-shadow: 0px 0px 10px 0px #927DFA;
}

.portfolioCard:hover .portfoliocardImg img {
    box-shadow: 0px 0px 20px 0px #927DFA;
    border: 2px solid #927DFA;
}

@media screen and (max-width: 1080px) {
    .filterBtnsParent {
        gap: 1.5em;
        margin-bottom: 3.5em;
    }

    .filterbtn {
        padding: 14px 25px;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
    }

    .allbtn {
        padding: 14px 25px;
        margin-right: 2em;
    }

    .portfolioInfo {
        width: 183px;
        height: 70px;
    }

    .portfolioInfo p {
        font-size: 18px;
        line-height: 25px;
    }

    .applicationIcon {
        height: 22px !important;
        width: 22px !important;
    }
}

@media screen and (max-width: 900px) {

    .filterbtn {
        padding: 14px 25px;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
    }

    .allbtn {
        margin-right: 1em;
    }
}

@media screen and (max-width:600px) {
    .ourPortFolioParent {
        width: 100%;
    }
}`,""]);const K=b},6314:c=>{c.exports=function(a){var f=[];return f.toString=function(){return this.map(function(h){var y="",v=h[5]!==void 0;return h[4]&&(y+="@supports (".concat(h[4],") {")),h[2]&&(y+="@media ".concat(h[2]," {")),v&&(y+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),y+=a(h),v&&(y+="}"),h[2]&&(y+="}"),h[4]&&(y+="}"),y}).join("")},f.i=function(h,y,v,S,A){typeof h=="string"&&(h=[[null,h,void 0]]);var M={};if(v)for(var _=0;_<this.length;_++){var U=this[_][0];U!=null&&(M[U]=!0)}for(var $=0;$<h.length;$++){var b=[].concat(h[$]);v&&M[b[0]]||(A!==void 0&&(b[5]===void 0||(b[1]="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {").concat(b[1],"}")),b[5]=A),y&&(b[2]&&(b[1]="@media ".concat(b[2]," {").concat(b[1],"}")),b[2]=y),S&&(b[4]?(b[1]="@supports (".concat(b[4],") {").concat(b[1],"}"),b[4]=S):b[4]="".concat(S)),f.push(b))}},f}},4417:c=>{c.exports=function(a,f){return f||(f={}),a&&(a=String(a.__esModule?a.default:a),/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),f.hash&&(a+=f.hash),/["'() \t\n]|(%20)/.test(a)||f.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):a)}},1601:c=>{c.exports=function(a){return a[1]}},2551:(c,a,f)=>{var h=f(6540),y=f(9982);function v(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S=new Set,A={};function M(t,r){_(t,r),_(t+"Capture",r)}function _(t,r){for(A[t]=r,t=0;t<r.length;t++)S.add(r[t])}var U=!(typeof window>"u"||window.document===void 0||window.document.createElement===void 0),$=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},N={};function z(t,r,i,u,d,p,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=g}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){K[t]=new z(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];K[r]=new z(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){K[t]=new z(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){K[t]=new z(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){K[t]=new z(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){K[t]=new z(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){K[t]=new z(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){K[t]=new z(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){K[t]=new z(t,5,!1,t.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function se(t){return t[1].toUpperCase()}function de(t,r,i,u){var d=K.hasOwnProperty(r)?K[r]:null;(d!==null?d.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(function(p,g,C,k){if(g==null||function(T,R,V,B){if(V!==null&&V.type===0)return!1;switch(typeof R){case"function":case"symbol":return!0;case"boolean":return!B&&(V!==null?!V.acceptsBooleans:(T=T.toLowerCase().slice(0,5))!=="data-"&&T!=="aria-");default:return!1}}(p,g,C,k))return!0;if(k)return!1;if(C!==null)switch(C.type){case 3:return!g;case 4:return g===!1;case 5:return isNaN(g);case 6:return isNaN(g)||1>g}return!1}(r,i,d,u)&&(i=null),u||d===null?function(p){return!!$.call(N,p)||!$.call(w,p)&&(b.test(p)?N[p]=!0:(w[p]=!0,!1))}(r)&&(i===null?t.removeAttribute(r):t.setAttribute(r,""+i)):d.mustUseProperty?t[d.propertyName]=i===null?d.type!==3&&"":i:(r=d.attributeName,u=d.attributeNamespace,i===null?t.removeAttribute(r):(i=(d=d.type)===3||d===4&&i===!0?"":""+i,u?t.setAttributeNS(u,r,i):t.setAttribute(r,i))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(ie,se);K[r]=new z(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(ie,se);K[r]=new z(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(ie,se);K[r]=new z(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){K[t]=new z(t,1,!1,t.toLowerCase(),null,!1,!1)}),K.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){K[t]=new z(t,1,!1,t.toLowerCase(),null,!0,!0)});var Te=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Ge=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),Cn=Symbol.for("react.strict_mode"),Bn=Symbol.for("react.profiler"),Hn=Symbol.for("react.provider"),Dn=Symbol.for("react.context"),Vn=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),Jn=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:typeof(t=Jn&&t[Jn]||t["@@iterator"])=="function"?t:null}var Y,q=Object.assign;function he(t){if(Y===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);Y=r&&r[1]||""}return`
`+Y+t}var xe=!1;function He(t,r){if(!t||xe)return"";xe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var u=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){u=T}t.call(r.prototype)}else{try{throw Error()}catch(T){u=T}t()}}catch(T){if(T&&u&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),p=u.stack.split(`
`),g=d.length-1,C=p.length-1;1<=g&&0<=C&&d[g]!==p[C];)C--;for(;1<=g&&0<=C;g--,C--)if(d[g]!==p[C]){if(g!==1||C!==1)do if(g--,0>--C||d[g]!==p[C]){var k=`
`+d[g].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=g&&0<=C);break}}}finally{xe=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?he(t):""}function Ve(t){switch(t.tag){case 5:return he(t.type);case 16:return he("Lazy");case 13:return he("Suspense");case 19:return he("SuspenseList");case 0:case 2:case 15:return He(t.type,!1);case 11:return He(t.type.render,!1);case 1:return He(t.type,!0);default:return""}}function Fe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ln:return"Fragment";case Ge:return"Portal";case Bn:return"Profiler";case Cn:return"StrictMode";case le:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dn:return(t.displayName||"Context")+".Consumer";case Hn:return(t._context.displayName||"Context")+".Provider";case Vn:var r=t.render;return(t=t.displayName)||(t=(t=r.displayName||r.name||"")!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ae:return(r=t.displayName||null)!==null?r:Fe(t.type)||"Memo";case ke:r=t._payload,t=t._init;try{return Fe(t(r))}catch{}}return null}function Ue(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=(t=r.render).displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fe(r);case 8:return r===Cn?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function je(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":case"object":return t;default:return""}}function ql(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ur(t){t._valueTracker||(t._valueTracker=function(r){var i=ql(r)?"checked":"value",u=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),d=""+r[i];if(!r.hasOwnProperty(i)&&u!==void 0&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,g=u.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return p.call(this)},set:function(C){d=""+C,g.call(this,C)}}),Object.defineProperty(r,i,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(C){d=""+C},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}(t))}function $r(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var i=r.getValue(),u="";return t&&(u=ql(t)?t.checked?"true":"false":t.value),(t=u)!==i&&(r.setValue(t),!0)}function ea(t){if((t=t||(typeof document<"u"?document:void 0))===void 0)return null;try{return t.activeElement||t.body}catch{return t.body}}function io(t,r){var i=r.checked;return q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function na(t,r){var i=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;i=je(r.value!=null?r.value:i),t._wrapperState={initialChecked:u,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Zs(t,r){(r=r.checked)!=null&&de(t,"checked",r,!1)}function oo(t,r){Zs(t,r);var i=je(r.value),u=r.type;if(i!=null)u==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(u==="submit"||u==="reset")return void t.removeAttribute("value");r.hasOwnProperty("value")?so(t,r.type,i):r.hasOwnProperty("defaultValue")&&so(t,r.type,je(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Ys(t,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,i||r===t.value||(t.value=r),t.defaultValue=r}(i=t.name)!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function so(t,r,i){r==="number"&&ea(t.ownerDocument)===t||(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var ta=Array.isArray;function Ar(t,r,i,u){if(t=t.options,r){r={};for(var d=0;d<i.length;d++)r["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=r.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&u&&(t[i].defaultSelected=!0)}else{for(i=""+je(i),r=null,d=0;d<t.length;d++){if(t[d].value===i)return t[d].selected=!0,void(u&&(t[d].defaultSelected=!0));r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function Jr(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(v(91));return q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uo(t,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(v(92));if(ta(i)){if(1<i.length)throw Error(v(93));i=i[0]}r=i}r==null&&(r=""),i=r}t._wrapperState={initialValue:je(i)}}function co(t,r){var i=je(r.value),u=je(r.defaultValue);i!=null&&((i=""+i)!==t.value&&(t.value=i),r.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),u!=null&&(t.defaultValue=""+u)}function qr(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Gs(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function po(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Gs(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ra,el,fo=(el=function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for((ra=ra||document.createElement("div")).innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}},typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,u){MSApp.execUnsafeLocalFunction(function(){return el(t,r)})}:el);function la(t,r){if(r){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3)return void(i.nodeValue=r)}t.textContent=r}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I1=["Webkit","ms","Moz","O"];function mo(t,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||aa.hasOwnProperty(t)&&aa[t]?(""+r).trim():r+"px"}function Ks(t,r){for(var i in t=t.style,r)if(r.hasOwnProperty(i)){var u=i.indexOf("--")===0,d=mo(i,r[i],u);i==="float"&&(i="cssFloat"),u?t.setProperty(i,d):t[i]=d}}Object.keys(aa).forEach(function(t){I1.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),aa[r]=aa[t]})});var z1=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(t,r){if(r){if(z1[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(v(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(v(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(v(61))}if(r.style!=null&&typeof r.style!="object")throw Error(v(62))}}function cr(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function ia(t){return(t=t.target||t.srcElement||window).correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wa=null,tl=null,qn=null;function Xs(t){if(t=Oo(t)){if(typeof Wa!="function")throw Error(v(280));var r=t.stateNode;r&&(r=bu(r),Wa(t.stateNode,t.type,r))}}function Gt(t){tl?qn?qn.push(t):qn=[t]:tl=t}function $s(){if(tl){var t=tl,r=qn;if(qn=tl=null,Xs(t),r)for(t=0;t<r.length;t++)Xs(r[t])}}function Kt(t,r){return t(r)}function Js(){}var Mt=!1;function qs(t,r,i){if(Mt)return t(r,i);Mt=!0;try{return Kt(t,r,i)}finally{Mt=!1,(tl!==null||qn!==null)&&(Js(),$s())}}function st(t,r){var i=t.stateNode;if(i===null)return null;var u=bu(i);if(u===null)return null;i=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(u=!((t=t.type)==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(v(231,r,typeof i));return i}var go=!1;if(U)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){go=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{go=!1}function Qa(t,r,i,u,d,p,g,C,k){var T=Array.prototype.slice.call(arguments,3);try{r.apply(i,T)}catch(R){this.onError(R)}}var It=!1,Nr=null,Xt=!1,Za=null,eu={onError:function(t){It=!0,Nr=t}};function R1(t,r,i,u,d,p,g,C,k){It=!1,Nr=null,Qa.apply(eu,arguments)}function Lr(t){var r=t,i=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do 4098&(r=t).flags&&(i=r.return),t=r.return;while(t)}return r.tag===3?i:null}function vo(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate)!==null&&(r=t.memoizedState),r!==null)return r.dehydrated}return null}function $t(t){if(Lr(t)!==t)throw Error(v(188))}function nu(t){return(t=function(r){var i=r.alternate;if(!i){if((i=Lr(r))===null)throw Error(v(188));return i!==r?null:r}for(var u=r,d=i;;){var p=u.return;if(p===null)break;var g=p.alternate;if(g===null){if((d=p.return)!==null){u=d;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===u)return $t(p),r;if(g===d)return $t(p),i;g=g.sibling}throw Error(v(188))}if(u.return!==d.return)u=p,d=g;else{for(var C=!1,k=p.child;k;){if(k===u){C=!0,u=p,d=g;break}if(k===d){C=!0,d=p,u=g;break}k=k.sibling}if(!C){for(k=g.child;k;){if(k===u){C=!0,u=g,d=p;break}if(k===d){C=!0,d=g,u=p;break}k=k.sibling}if(!C)throw Error(v(189))}}if(u.alternate!==d)throw Error(v(190))}if(u.tag!==3)throw Error(v(188));return u.stateNode.current===u?r:i}(t))!==null?oa(t):null}function oa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=oa(t);if(r!==null)return r;t=t.sibling}return null}var tu=y.unstable_scheduleCallback,ru=y.unstable_cancelCallback,_1=y.unstable_shouldYield,O1=y.unstable_requestPaint,cn=y.unstable_now,F1=y.unstable_getCurrentPriorityLevel,yo=y.unstable_ImmediatePriority,lu=y.unstable_UserBlockingPriority,xo=y.unstable_NormalPriority,U1=y.unstable_LowPriority,au=y.unstable_IdlePriority,Ya=null,zt=null,Wn=Math.clz32?Math.clz32:function(t){return(t>>>=0)===0?32:31-(wo(t)/Co|0)|0},wo=Math.log,Co=Math.LN2,sa=64,ua=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&t;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&t;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,r){var i=t.pendingLanes;if(i===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes,g=268435455&i;if(g!==0){var C=g&~d;C!==0?u=ca(C):(p&=g)!=0&&(u=ca(p))}else(g=i&~d)!=0?u=ca(g):p!==0&&(u=ca(p));if(u===0)return 0;if(r!==0&&r!==u&&!(r&d)&&((d=u&-u)>=(p=r&-r)||d===16&&4194240&p))return r;if(4&u&&(u|=16&i),(r=t.entangledLanes)!==0)for(t=t.entanglements,r&=u;0<r;)d=1<<(i=31-Wn(r)),u|=t[i],r&=~d;return u}function Ga(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;default:return-1}}function dr(t){return(t=-1073741825&t.pendingLanes)!=0?t:1073741824&t?1073741824:0}function jr(){var t=sa;return!(4194240&(sa<<=1))&&(sa=64),t}function pr(t){for(var r=[],i=0;31>i;i++)r.push(t);return r}function da(t,r,i){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),(t=t.eventTimes)[r=31-Wn(r)]=i}function bo(t,r){var i=t.entangledLanes|=r;for(t=t.entanglements;i;){var u=31-Wn(i),d=1<<u;d&r|t[u]&r&&(t[u]|=r),i&=~d}}var We=0;function iu(t){return 1<(t&=-t)?4<t?268435455&t?16:536870912:4:1}var ou,Eo,su,uu,cu,ko=!1,Ka=[],xt=null,wt=null,et=null,ll=new Map,al=new Map,fr=[],Xa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function So(t,r){switch(t){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":et=null;break;case"pointerover":case"pointerout":ll.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(r.pointerId)}}function mr(t,r,i,u,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:i,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Oo(r))!==null&&Eo(r),t):(t.eventSystemFlags|=u,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function Ao(t){var r=ya(t.target);if(r!==null){var i=Lr(r);if(i!==null){if((r=i.tag)===13){if((r=vo(i))!==null)return t.blockedOn=r,void cu(t.priority,function(){su(i)})}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated)return void(t.blockedOn=i.tag===3?i.stateNode.containerInfo:null)}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var i=No(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(i!==null)return(r=Oo(i))!==null&&Eo(r),t.blockedOn=i,!1;var u=new(i=t.nativeEvent).constructor(i.type,i);nl=u,i.target.dispatchEvent(u),nl=null,r.shift()}return!0}function du(t,r,i){$a(t)&&i.delete(r)}function B1(){ko=!1,xt!==null&&$a(xt)&&(xt=null),wt!==null&&$a(wt)&&(wt=null),et!==null&&$a(et)&&(et=null),ll.forEach(du),al.forEach(du)}function il(t,r){t.blockedOn===r&&(t.blockedOn=null,ko||(ko=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,B1)))}function ol(t){function r(d){return il(d,t)}if(0<Ka.length){il(Ka[0],t);for(var i=1;i<Ka.length;i++){var u=Ka[i];u.blockedOn===t&&(u.blockedOn=null)}}for(xt!==null&&il(xt,t),wt!==null&&il(wt,t),et!==null&&il(et,t),ll.forEach(r),al.forEach(r),i=0;i<fr.length;i++)(u=fr[i]).blockedOn===t&&(u.blockedOn=null);for(;0<fr.length&&(i=fr[0]).blockedOn===null;)Ao(i),i.blockedOn===null&&fr.shift()}var Pr=Te.ReactCurrentBatchConfig,Ja=!0;function qa(t,r,i,u){var d=We,p=Pr.transition;Pr.transition=null;try{We=1,pa(t,r,i,u)}finally{We=d,Pr.transition=p}}function sl(t,r,i,u){var d=We,p=Pr.transition;Pr.transition=null;try{We=4,pa(t,r,i,u)}finally{We=d,Pr.transition=p}}function pa(t,r,i,u){if(Ja){var d=No(t,r,i,u);if(d===null)J1(t,r,u,ul,i),So(t,u);else if(function(g,C,k,T,R){switch(C){case"focusin":return xt=mr(xt,g,C,k,T,R),!0;case"dragenter":return wt=mr(wt,g,C,k,T,R),!0;case"mouseover":return et=mr(et,g,C,k,T,R),!0;case"pointerover":var V=R.pointerId;return ll.set(V,mr(ll.get(V)||null,g,C,k,T,R)),!0;case"gotpointercapture":return V=R.pointerId,al.set(V,mr(al.get(V)||null,g,C,k,T,R)),!0}return!1}(d,t,r,i,u))u.stopPropagation();else if(So(t,u),4&r&&-1<Xa.indexOf(t)){for(;d!==null;){var p=Oo(d);if(p!==null&&ou(p),(p=No(t,r,i,u))===null&&J1(t,r,u,ul,i),p===d)break;d=p}d!==null&&u.stopPropagation()}else J1(t,r,u,null,i)}}var ul=null;function No(t,r,i,u){if(ul=null,(t=ya(t=ia(u)))!==null)if((r=Lr(t))===null)t=null;else if((i=r.tag)===13){if((t=vo(r))!==null)return t;t=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ul=t,null}function pu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F1()){case yo:return 1;case lu:return 4;case xo:case U1:return 16;case au:return 536870912;default:return 16}default:return 16}}var Tr=null,Lo=null,fa=null;function fu(){if(fa)return fa;var t,r,i=Lo,u=i.length,d="value"in Tr?Tr.value:Tr.textContent,p=d.length;for(t=0;t<u&&i[t]===d[t];t++);var g=u-t;for(r=1;r<=g&&i[u-r]===d[p-r];r++);return fa=d.slice(t,1<r?1-r:void 0)}function ma(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode)===0&&r===13&&(t=13):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ei(){return!0}function ha(){return!1}function bn(t){function r(i,u,d,p,g){for(var C in this._reactName=i,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=g,this.currentTarget=null,t)t.hasOwnProperty(C)&&(i=t[C],this[C]=i?i(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ei:ha,this.isPropagationStopped=ha,this}return q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),r}var jo,ga,cl,dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=bn(dl),Rt=q({},dl,{view:0,detail:0}),H1=bn(Rt),ni=q({},Rt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Z,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cl&&(cl&&t.type==="mousemove"?(jo=t.screenX-cl.screenX,ga=t.screenY-cl.screenY):ga=jo=0,cl=t),jo)},movementY:function(t){return"movementY"in t?t.movementY:ga}}),mu=bn(ni),D1=bn(q({},ni,{dataTransfer:0})),Po=bn(q({},Rt,{relatedTarget:0})),V1=bn(q({},dl,{animationName:0,elapsedTime:0,pseudoElement:0})),W1=q({},dl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ti=bn(W1),Mr=bn(q({},dl,{data:0})),x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):!!(t=E[t])&&!!r[t]}function Z(){return I}var J=q({},Rt,{key:function(t){if(t.key){var r=x[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ma(t))===13?"Enter":String.fromCharCode(t):t.type==="keydown"||t.type==="keyup"?L[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Z,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),te=bn(J),W=bn(q({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),H=bn(q({},Rt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Z})),O=bn(q({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0})),oe=q({},ni,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ae=bn(oe),me=[9,13,27,32],ye=U&&"CompositionEvent"in window,be=null;U&&"documentMode"in document&&(be=document.documentMode);var Se=U&&"TextEvent"in window&&!be,ge=U&&(!ye||be&&8<be&&11>=be),we=" ",Ee=!1;function Ne(t,r){switch(t){case"keyup":return me.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function De(t){return typeof(t=t.detail)=="object"&&"data"in t?t.data:null}var Xe=!1,$e={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hn(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!$e[t.type]:r==="textarea"}function Rn(t,r,i,u){Gt(u),0<(r=xu(r,"onChange")).length&&(i=new pl("onChange","change",null,i,u),t.push({event:i,listeners:r}))}var Je=null,Me=null;function ze(t){Yp(t,0)}function Qe(t){if($r(si(t)))return t}function an(t,r){if(t==="change")return r}var Sn=!1;if(U){var An;if(U){var Ir="oninput"in document;if(!Ir){var va=document.createElement("div");va.setAttribute("oninput","return;"),Ir=typeof va.oninput=="function"}An=Ir}else An=!1;Sn=An&&(!document.documentMode||9<document.documentMode)}function ri(){Je&&(Je.detachEvent("onpropertychange",fl),Me=Je=null)}function fl(t){if(t.propertyName==="value"&&Qe(Me)){var r=[];Rn(r,Me,t,ia(t)),qs(ze,r)}}function hu(t,r,i){t==="focusin"?(ri(),Me=i,(Je=r).attachEvent("onpropertychange",fl)):t==="focusout"&&ri()}function T8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qe(Me)}function M8(t,r){if(t==="click")return Qe(r)}function I8(t,r){if(t==="input"||t==="change")return Qe(r)}var Jt=typeof Object.is=="function"?Object.is:function(t,r){return t===r&&(t!==0||1/t==1/r)||t!=t&&r!=r};function To(t,r){if(Jt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var i=Object.keys(t),u=Object.keys(r);if(i.length!==u.length)return!1;for(u=0;u<i.length;u++){var d=i[u];if(!$.call(r,d)||!Jt(t[d],r[d]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,r){var i,u=zp(t);for(t=0;u;){if(u.nodeType===3){if(i=t+u.textContent.length,t<=r&&i>=r)return{node:u,offset:r-t};t=i}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=zp(u)}}function _p(t,r){return!(!t||!r)&&(t===r||(!t||t.nodeType!==3)&&(r&&r.nodeType===3?_p(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}function Op(){for(var t=window,r=ea();r instanceof t.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(!i)break;r=ea((t=r.contentWindow).document)}return r}function Q1(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function z8(t){var r=Op(),i=t.focusedElem,u=t.selectionRange;if(r!==i&&i&&i.ownerDocument&&_p(i.ownerDocument.documentElement,i)){if(u!==null&&Q1(i)){if(r=u.start,(t=u.end)===void 0&&(t=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(t,i.value.length);else if((t=(r=i.ownerDocument||document)&&r.defaultView||window).getSelection){t=t.getSelection();var d=i.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!t.extend&&p>u&&(d=u,u=p,p=d),d=Rp(i,p);var g=Rp(i,u);d&&g&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&((r=r.createRange()).setStart(d.node,d.offset),t.removeAllRanges(),p>u?(t.addRange(r),t.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),t.addRange(r)))}}for(r=[],t=i;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)(t=r[i]).element.scrollLeft=t.left,t.element.scrollTop=t.top}}var R8=U&&"documentMode"in document&&11>=document.documentMode,li=null,Z1=null,Mo=null,Y1=!1;function Fp(t,r,i){var u=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Y1||li==null||li!==ea(u)||(u="selectionStart"in(u=li)&&Q1(u)?{start:u.selectionStart,end:u.selectionEnd}:{anchorNode:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset},Mo&&To(Mo,u)||(Mo=u,0<(u=xu(Z1,"onSelect")).length&&(r=new pl("onSelect","select",null,r,i),t.push({event:r,listeners:u}),r.target=li)))}function gu(t,r){var i={};return i[t.toLowerCase()]=r.toLowerCase(),i["Webkit"+t]="webkit"+r,i["Moz"+t]="moz"+r,i}var ai={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},G1={},Up={};function vu(t){if(G1[t])return G1[t];if(!ai[t])return t;var r,i=ai[t];for(r in i)if(i.hasOwnProperty(r)&&r in Up)return G1[t]=i[r];return t}U&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);var Bp=vu("animationend"),Hp=vu("animationiteration"),Dp=vu("animationstart"),Vp=vu("transitionend"),Wp=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ml(t,r){Wp.set(t,r),M(r,[t])}for(var K1=0;K1<Qp.length;K1++){var X1=Qp[K1];ml(X1.toLowerCase(),"on"+(X1[0].toUpperCase()+X1.slice(1)))}ml(Bp,"onAnimationEnd"),ml(Hp,"onAnimationIteration"),ml(Dp,"onAnimationStart"),ml("dblclick","onDoubleClick"),ml("focusin","onFocus"),ml("focusout","onBlur"),ml(Vp,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),M("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),M("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),M("onBeforeInput",["compositionend","keypress","textInput","paste"]),M("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Zp(t,r,i){var u=t.type||"unknown-event";t.currentTarget=i,function(d,p,g,C,k,T,R,V,B){if(R1.apply(this,arguments),It){if(!It)throw Error(v(198));var Q=Nr;It=!1,Nr=null,Xt||(Xt=!0,Za=Q)}}(u,r,void 0,t),t.currentTarget=null}function Yp(t,r){r=!!(4&r);for(var i=0;i<t.length;i++){var u=t[i],d=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var g=u.length-1;0<=g;g--){var C=u[g],k=C.instance,T=C.currentTarget;if(C=C.listener,k!==p&&d.isPropagationStopped())break e;Zp(d,C,T),p=k}else for(g=0;g<u.length;g++){if(k=(C=u[g]).instance,T=C.currentTarget,C=C.listener,k!==p&&d.isPropagationStopped())break e;Zp(d,C,T),p=k}}}if(Xt)throw t=Za,Xt=!1,Za=null,t}function nn(t,r){var i=r[l2];i===void 0&&(i=r[l2]=new Set);var u=t+"__bubble";i.has(u)||(Gp(r,t,2,!1),i.add(u))}function $1(t,r,i){var u=0;r&&(u|=4),Gp(i,t,u,r)}var yu="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[yu]){t[yu]=!0,S.forEach(function(i){i!=="selectionchange"&&(_8.has(i)||$1(i,!1,t),$1(i,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[yu]||(r[yu]=!0,$1("selectionchange",!1,r))}}function Gp(t,r,i,u){switch(pu(r)){case 1:var d=qa;break;case 4:d=sl;break;default:d=pa}i=d.bind(null,r,i,t),d=void 0,!go||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(r,i,{capture:!0,passive:d}):t.addEventListener(r,i,!0):d!==void 0?t.addEventListener(r,i,{passive:d}):t.addEventListener(r,i,!1)}function J1(t,r,i,u,d){var p=u;if(!(1&r||2&r||u===null))e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var C=u.stateNode.containerInfo;if(C===d||C.nodeType===8&&C.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var k=g.tag;if((k===3||k===4)&&((k=g.stateNode.containerInfo)===d||k.nodeType===8&&k.parentNode===d))return;g=g.return}for(;C!==null;){if((g=ya(C))===null)return;if((k=g.tag)===5||k===6){u=p=g;continue e}C=C.parentNode}}u=u.return}qs(function(){var T=p,R=ia(i),V=[];e:{var B=Wp.get(t);if(B!==void 0){var Q=pl,X=t;switch(t){case"keypress":if(ma(i)===0)break e;case"keydown":case"keyup":Q=te;break;case"focusin":X="focus",Q=Po;break;case"focusout":X="blur",Q=Po;break;case"beforeblur":case"afterblur":Q=Po;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=D1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=H;break;case Bp:case Hp:case Dp:Q=V1;break;case Vp:Q=O;break;case"scroll":Q=H1;break;case"wheel":Q=ae;break;case"copy":case"cut":case"paste":Q=ti;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=W}var ee=!!(4&r),D=!ee&&t==="scroll",P=ee?B!==null?B+"Capture":null:B;ee=[];for(var F,G=T;G!==null;){var ce=(F=G).stateNode;if(F.tag===5&&ce!==null&&(F=ce,P!==null&&(ce=st(G,P))!=null&&ee.push(Ro(G,ce,F))),D)break;G=G.return}0<ee.length&&(B=new Q(B,X,null,i,R),V.push({event:B,listeners:ee}))}}if(!(7&r)){if(Q=t==="mouseout"||t==="pointerout",(!(B=t==="mouseover"||t==="pointerover")||i===nl||!(X=i.relatedTarget||i.fromElement)||!ya(X)&&!X[zr])&&(Q||B)&&(B=R.window===R?R:(B=R.ownerDocument)?B.defaultView||B.parentWindow:window,Q?(Q=T,(X=(X=i.relatedTarget||i.toElement)?ya(X):null)!==null&&(X!==(D=Lr(X))||X.tag!==5&&X.tag!==6)&&(X=null)):(Q=null,X=T),Q!==X)){if(ee=mu,ce="onMouseLeave",P="onMouseEnter",G="mouse",t!=="pointerout"&&t!=="pointerover"||(ee=W,ce="onPointerLeave",P="onPointerEnter",G="pointer"),D=Q==null?B:si(Q),F=X==null?B:si(X),(B=new ee(ce,G+"leave",Q,i,R)).target=D,B.relatedTarget=F,ce=null,ya(R)===T&&((ee=new ee(P,G+"enter",X,i,R)).target=F,ee.relatedTarget=D,ce=ee),D=ce,Q&&X)e:{for(P=X,G=0,F=ee=Q;F;F=ii(F))G++;for(F=0,ce=P;ce;ce=ii(ce))F++;for(;0<G-F;)ee=ii(ee),G--;for(;0<F-G;)P=ii(P),F--;for(;G--;){if(ee===P||P!==null&&ee===P.alternate)break e;ee=ii(ee),P=ii(P)}ee=null}else ee=null;Q!==null&&Kp(V,B,Q,ee,!1),X!==null&&D!==null&&Kp(V,D,X,ee,!0)}if((Q=(B=T?si(T):window).nodeName&&B.nodeName.toLowerCase())==="select"||Q==="input"&&B.type==="file")var Ie=an;else if(hn(B))if(Sn)Ie=I8;else{Ie=T8;var ue=hu}else(Q=B.nodeName)&&Q.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(Ie=M8);switch(Ie&&(Ie=Ie(t,T))?Rn(V,Ie,i,R):(ue&&ue(t,B,T),t==="focusout"&&(ue=B._wrapperState)&&ue.controlled&&B.type==="number"&&so(B,"number",B.value)),ue=T?si(T):window,t){case"focusin":(hn(ue)||ue.contentEditable==="true")&&(li=ue,Z1=T,Mo=null);break;case"focusout":Mo=Z1=li=null;break;case"mousedown":Y1=!0;break;case"contextmenu":case"mouseup":case"dragend":Y1=!1,Fp(V,i,R);break;case"selectionchange":if(R8)break;case"keydown":case"keyup":Fp(V,i,R)}var Re;if(ye)e:{switch(t){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else Xe?Ne(t,i)&&(Pe="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Pe="onCompositionStart");Pe&&(ge&&i.locale!=="ko"&&(Xe||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Xe&&(Re=fu()):(Lo="value"in(Tr=R)?Tr.value:Tr.textContent,Xe=!0)),0<(ue=xu(T,Pe)).length&&(Pe=new Mr(Pe,t,null,i,R),V.push({event:Pe,listeners:ue}),(Re||(Re=De(i))!==null)&&(Pe.data=Re))),(Re=Se?function(Le,Ye){switch(Le){case"compositionend":return De(Ye);case"keypress":return Ye.which!==32?null:(Ee=!0,we);case"textInput":return(Le=Ye.data)===we&&Ee?null:Le;default:return null}}(t,i):function(Le,Ye){if(Xe)return Le==="compositionend"||!ye&&Ne(Le,Ye)?(Le=fu(),fa=Lo=Tr=null,Xe=!1,Le):null;switch(Le){case"paste":default:return null;case"keypress":if(!(Ye.ctrlKey||Ye.altKey||Ye.metaKey)||Ye.ctrlKey&&Ye.altKey){if(Ye.char&&1<Ye.char.length)return Ye.char;if(Ye.which)return String.fromCharCode(Ye.which)}return null;case"compositionend":return ge&&Ye.locale!=="ko"?null:Ye.data}}(t,i))&&0<(T=xu(T,"onBeforeInput")).length&&(R=new Mr("onBeforeInput","beforeinput",null,i,R),V.push({event:R,listeners:T}),R.data=Re)}Yp(V,r)})}function Ro(t,r,i){return{instance:t,listener:r,currentTarget:i}}function xu(t,r){for(var i=r+"Capture",u=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,(p=st(t,i))!=null&&u.unshift(Ro(t,p,d)),(p=st(t,r))!=null&&u.push(Ro(t,p,d))),t=t.return}return u}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kp(t,r,i,u,d){for(var p=r._reactName,g=[];i!==null&&i!==u;){var C=i,k=C.alternate,T=C.stateNode;if(k!==null&&k===u)break;C.tag===5&&T!==null&&(C=T,d?(k=st(i,p))!=null&&g.unshift(Ro(i,k,C)):d||(k=st(i,p))!=null&&g.push(Ro(i,k,C))),i=i.return}g.length!==0&&t.push({event:r,listeners:g})}var O8=/\r\n?/g,F8=/\u0000|\uFFFD/g;function Xp(t){return(typeof t=="string"?t:""+t).replace(O8,`
`).replace(F8,"")}function wu(t,r,i){if(r=Xp(r),Xp(t)!==r&&i)throw Error(v(425))}function Cu(){}var q1=null,e2=null;function n2(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var t2=typeof setTimeout=="function"?setTimeout:void 0,U8=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,B8=typeof queueMicrotask=="function"?queueMicrotask:$p!==void 0?function(t){return $p.resolve(null).then(t).catch(H8)}:t2;function H8(t){setTimeout(function(){throw t})}function r2(t,r){var i=r,u=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if((i=d.data)==="/$"){if(u===0)return t.removeChild(d),void ol(r);u--}else i!=="$"&&i!=="$?"&&i!=="$!"||u++;i=d}while(i);ol(r)}function hl(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if((r=t.data)==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Jp(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return t;r--}else i==="/$"&&r++}t=t.previousSibling}return null}var oi=Math.random().toString(36).slice(2),hr="__reactFiber$"+oi,_o="__reactProps$"+oi,zr="__reactContainer$"+oi,l2="__reactEvents$"+oi,D8="__reactListeners$"+oi,V8="__reactHandles$"+oi;function ya(t){var r=t[hr];if(r)return r;for(var i=t.parentNode;i;){if(r=i[zr]||i[hr]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(t=Jp(t);t!==null;){if(i=t[hr])return i;t=Jp(t)}return r}i=(t=i).parentNode}return null}function Oo(t){return!(t=t[hr]||t[zr])||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(v(33))}function bu(t){return t[_o]||null}var a2=[],ui=-1;function gl(t){return{current:t}}function on(t){0>ui||(t.current=a2[ui],a2[ui]=null,ui--)}function qe(t,r){ui++,a2[ui]=t.current,t.current=r}var vl={},Qn=gl(vl),ct=gl(!1),xa=vl;function ci(t,r){var i=t.type.contextTypes;if(!i)return vl;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var d,p={};for(d in i)p[d]=r[d];return u&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=p),p}function Ct(t){return t.childContextTypes!=null}function i2(){on(ct),on(Qn)}function qp(t,r,i){if(Qn.current!==vl)throw Error(v(168));qe(Qn,r),qe(ct,i)}function e3(t,r,i){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return i;for(var d in u=u.getChildContext())if(!(d in r))throw Error(v(108,Ue(t)||"Unknown",d));return q({},i,u)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vl,xa=Qn.current,qe(Qn,t),qe(ct,ct.current),!0}function n3(t,r,i){var u=t.stateNode;if(!u)throw Error(v(169));i?(t=e3(t,r,xa),u.__reactInternalMemoizedMergedChildContext=t,on(ct),on(Qn),qe(Qn,t)):on(ct),qe(ct,i)}var Rr=null,ku=!1,o2=!1;function t3(t){Rr===null?Rr=[t]:Rr.push(t)}function yl(){if(!o2&&Rr!==null){o2=!0;var t=0,r=We;try{var i=Rr;for(We=1;t<i.length;t++){var u=i[t];do u=u(!0);while(u!==null)}Rr=null,ku=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(t+1)),tu(yo,yl),d}finally{We=r,o2=!1}}return null}var di=[],pi=0,Su=null,Au=0,_t=[],Ot=0,wa=null,gr=1,_r="";function Ca(t,r){di[pi++]=Au,di[pi++]=Su,Su=t,Au=r}function r3(t,r,i){_t[Ot++]=gr,_t[Ot++]=_r,_t[Ot++]=wa,wa=t;var u=gr;t=_r;var d=32-Wn(u)-1;u&=~(1<<d),i+=1;var p=32-Wn(r)+d;if(30<p){var g=d-d%5;p=(u&(1<<g)-1).toString(32),u>>=g,d-=g,gr=1<<32-Wn(r)+d|i<<d|u,_r=p+t}else gr=1<<p|i<<d|u,_r=t}function s2(t){t.return!==null&&(Ca(t,1),r3(t,1,0))}function u2(t){for(;t===Su;)Su=di[--pi],di[pi]=null,Au=di[--pi],di[pi]=null;for(;t===wa;)wa=_t[--Ot],_t[Ot]=null,_r=_t[--Ot],_t[Ot]=null,gr=_t[--Ot],_t[Ot]=null}var bt=null,Et=null,sn=!1,qt=null;function l3(t,r){var i=Ht(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=t,(r=t.deletions)===null?(t.deletions=[i],t.flags|=16):r.push(i)}function a3(t,r){switch(t.tag){case 5:var i=t.type;return(r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r)!==null&&(t.stateNode=r,bt=t,Et=hl(r.firstChild),!0);case 6:return(r=t.pendingProps===""||r.nodeType!==3?null:r)!==null&&(t.stateNode=r,bt=t,Et=null,!0);case 13:return(r=r.nodeType!==8?null:r)!==null&&(i=wa!==null?{id:gr,overflow:_r}:null,t.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},(i=Ht(18,null,null,0)).stateNode=r,i.return=t,t.child=i,bt=t,Et=null,!0);default:return!1}}function c2(t){return!(!(1&t.mode)||128&t.flags)}function d2(t){if(sn){var r=Et;if(r){var i=r;if(!a3(t,r)){if(c2(t))throw Error(v(418));r=hl(i.nextSibling);var u=bt;r&&a3(t,r)?l3(u,i):(t.flags=-4097&t.flags|2,sn=!1,bt=t)}}else{if(c2(t))throw Error(v(418));t.flags=-4097&t.flags|2,sn=!1,bt=t}}}function i3(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function Nu(t){if(t!==bt)return!1;if(!sn)return i3(t),sn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=(r=t.type)!=="head"&&r!=="body"&&!n2(t.type,t.memoizedProps)),r&&(r=Et)){if(c2(t))throw o3(),Error(v(418));for(;r;)l3(t,r),r=hl(r.nextSibling)}if(i3(t),t.tag===13){if(!(t=(t=t.memoizedState)!==null?t.dehydrated:null))throw Error(v(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(r===0){Et=hl(t.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}t=t.nextSibling}Et=null}}else Et=bt?hl(t.stateNode.nextSibling):null;return!0}function o3(){for(var t=Et;t;)t=hl(t.nextSibling)}function fi(){Et=bt=null,sn=!1}function p2(t){qt===null?qt=[t]:qt.push(t)}var W8=Te.ReactCurrentBatchConfig;function er(t,r){if(t&&t.defaultProps){for(var i in r=q({},r),t=t.defaultProps)r[i]===void 0&&(r[i]=t[i]);return r}return r}var Lu=gl(null),ju=null,mi=null,f2=null;function m2(){f2=mi=ju=null}function h2(t){var r=Lu.current;on(Lu),t._currentValue=r}function g2(t,r,i){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===i)break;t=t.return}}function hi(t,r){ju=t,f2=mi=null,(t=t.dependencies)!==null&&t.firstContext!==null&&(t.lanes&r&&(dt=!0),t.firstContext=null)}function Ft(t){var r=t._currentValue;if(f2!==t)if(t={context:t,memoizedValue:r,next:null},mi===null){if(ju===null)throw Error(v(308));mi=t,ju.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return r}var ba=null;function v2(t){ba===null?ba=[t]:ba.push(t)}function s3(t,r,i,u){var d=r.interleaved;return d===null?(i.next=i,v2(r)):(i.next=d.next,d.next=i),r.interleaved=i,Or(t,u)}function Or(t,r){t.lanes|=r;var i=t.alternate;for(i!==null&&(i.lanes|=r),i=t,t=t.return;t!==null;)t.childLanes|=r,(i=t.alternate)!==null&&(i.childLanes|=r),i=t,t=t.return;return i.tag===3?i.stateNode:null}var xl=!1;function y2(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u3(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function wl(t,r,i){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,2&Ze){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,Or(t,i)}return(d=u.interleaved)===null?(r.next=r,v2(u)):(r.next=d.next,d.next=r),u.interleaved=r,Or(t,i)}function Pu(t,r,i){if((r=r.updateQueue)!==null&&(r=r.shared,4194240&i)){var u=r.lanes;i|=u&=t.pendingLanes,r.lanes=i,bo(t,i)}}function c3(t,r){var i=t.updateQueue,u=t.alternate;if(u!==null&&i===(u=u.updateQueue)){var d=null,p=null;if((i=i.firstBaseUpdate)!==null){do{var g={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?d=p=g:p=p.next=g,i=i.next}while(i!==null);p===null?d=p=r:p=p.next=r}else d=p=r;return i={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},void(t.updateQueue=i)}(t=i.lastBaseUpdate)===null?i.firstBaseUpdate=r:t.next=r,i.lastBaseUpdate=r}function Tu(t,r,i,u){var d=t.updateQueue;xl=!1;var p=d.firstBaseUpdate,g=d.lastBaseUpdate,C=d.shared.pending;if(C!==null){d.shared.pending=null;var k=C,T=k.next;k.next=null,g===null?p=T:g.next=T,g=k;var R=t.alternate;R!==null&&(C=(R=R.updateQueue).lastBaseUpdate)!==g&&(C===null?R.firstBaseUpdate=T:C.next=T,R.lastBaseUpdate=k)}if(p!==null){var V=d.baseState;for(g=0,R=T=k=null,C=p;;){var B=C.lane,Q=C.eventTime;if((u&B)===B){R!==null&&(R=R.next={eventTime:Q,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var X=t,ee=C;switch(B=r,Q=i,ee.tag){case 1:if(typeof(X=ee.payload)=="function"){V=X.call(Q,V,B);break e}V=X;break e;case 3:X.flags=-65537&X.flags|128;case 0:if((B=typeof(X=ee.payload)=="function"?X.call(Q,V,B):X)==null)break e;V=q({},V,B);break e;case 2:xl=!0}}C.callback!==null&&C.lane!==0&&(t.flags|=64,(B=d.effects)===null?d.effects=[C]:B.push(C))}else Q={eventTime:Q,lane:B,tag:C.tag,payload:C.payload,callback:C.callback,next:null},R===null?(T=R=Q,k=V):R=R.next=Q,g|=B;if((C=C.next)===null){if((C=d.shared.pending)===null)break;C=(B=C).next,B.next=null,d.lastBaseUpdate=B,d.shared.pending=null}}if(R===null&&(k=V),d.baseState=k,d.firstBaseUpdate=T,d.lastBaseUpdate=R,(r=d.shared.interleaved)!==null){d=r;do g|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Sa|=g,t.lanes=g,t.memoizedState=V}}function d3(t,r,i){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],d=u.callback;if(d!==null){if(u.callback=null,u=i,typeof d!="function")throw Error(v(191,d));d.call(u)}}}var p3=new h.Component().refs;function x2(t,r,i,u){i=(i=i(u,r=t.memoizedState))==null?r:q({},r,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Mu={isMounted:function(t){return!!(t=t._reactInternals)&&Lr(t)===t},enqueueSetState:function(t,r,i){t=t._reactInternals;var u=rt(),d=Sl(t),p=Fr(u,d);p.payload=r,i!=null&&(p.callback=i),(r=wl(t,p,d))!==null&&(nr(r,t,d,u),Pu(r,t,d))},enqueueReplaceState:function(t,r,i){t=t._reactInternals;var u=rt(),d=Sl(t),p=Fr(u,d);p.tag=1,p.payload=r,i!=null&&(p.callback=i),(r=wl(t,p,d))!==null&&(nr(r,t,d,u),Pu(r,t,d))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var i=rt(),u=Sl(t),d=Fr(i,u);d.tag=2,r!=null&&(d.callback=r),(r=wl(t,d,u))!==null&&(nr(r,t,u,i),Pu(r,t,u))}};function f3(t,r,i,u,d,p,g){return typeof(t=t.stateNode).shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,g):!(r.prototype&&r.prototype.isPureReactComponent&&To(i,u)&&To(d,p))}function m3(t,r,i){var u=!1,d=vl,p=r.contextType;return typeof p=="object"&&p!==null?p=Ft(p):(d=Ct(r)?xa:Qn.current,p=(u=(u=r.contextTypes)!=null)?ci(t,d):vl),r=new r(i,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Mu,t.stateNode=r,r._reactInternals=t,u&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),r}function h3(t,r,i,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,u),r.state!==t&&Mu.enqueueReplaceState(r,r.state,null)}function w2(t,r,i,u){var d=t.stateNode;d.props=i,d.state=t.memoizedState,d.refs=p3,y2(t);var p=r.contextType;typeof p=="object"&&p!==null?d.context=Ft(p):(p=Ct(r)?xa:Qn.current,d.context=ci(t,p)),d.state=t.memoizedState,typeof(p=r.getDerivedStateFromProps)=="function"&&(x2(t,r,p,i),d.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Mu.enqueueReplaceState(d,d.state,null),Tu(t,i,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Fo(t,r,i){if((t=i.ref)!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner){if(i.tag!==1)throw Error(v(309));var u=i.stateNode}if(!u)throw Error(v(147,t));var d=u,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(g){var C=d.refs;C===p3&&(C=d.refs={}),g===null?delete C[p]:C[p]=g},r._stringRef=p,r)}if(typeof t!="string")throw Error(v(284));if(!i._owner)throw Error(v(290,t))}return t}function Iu(t,r){throw t=Object.prototype.toString.call(r),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function g3(t){return(0,t._init)(t._payload)}function v3(t){function r(D,P){if(t){var F=D.deletions;F===null?(D.deletions=[P],D.flags|=16):F.push(P)}}function i(D,P){if(!t)return null;for(;P!==null;)r(D,P),P=P.sibling;return null}function u(D,P){for(D=new Map;P!==null;)P.key!==null?D.set(P.key,P):D.set(P.index,P),P=P.sibling;return D}function d(D,P){return(D=Nl(D,P)).index=0,D.sibling=null,D}function p(D,P,F){return D.index=F,t?(F=D.alternate)!==null?(F=F.index)<P?(D.flags|=2,P):F:(D.flags|=2,P):(D.flags|=1048576,P)}function g(D){return t&&D.alternate===null&&(D.flags|=2),D}function C(D,P,F,G){return P===null||P.tag!==6?((P=t0(F,D.mode,G)).return=D,P):((P=d(P,F)).return=D,P)}function k(D,P,F,G){var ce=F.type;return ce===ln?R(D,P,F.props.children,G,F.key):P!==null&&(P.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ke&&g3(ce)===P.type)?((G=d(P,F.props)).ref=Fo(D,P,F),G.return=D,G):((G=Ju(F.type,F.key,F.props,null,D.mode,G)).ref=Fo(D,P,F),G.return=D,G)}function T(D,P,F,G){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?((P=r0(F,D.mode,G)).return=D,P):((P=d(P,F.children||[])).return=D,P)}function R(D,P,F,G,ce){return P===null||P.tag!==7?((P=La(F,D.mode,G,ce)).return=D,P):((P=d(P,F)).return=D,P)}function V(D,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return(P=t0(""+P,D.mode,F)).return=D,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Ce:return(F=Ju(P.type,P.key,P.props,null,D.mode,F)).ref=Fo(D,null,P),F.return=D,F;case Ge:return(P=r0(P,D.mode,F)).return=D,P;case ke:return V(D,(0,P._init)(P._payload),F)}if(ta(P)||j(P))return(P=La(P,D.mode,F,null)).return=D,P;Iu(D,P)}return null}function B(D,P,F,G){var ce=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:C(D,P,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:return F.key===ce?k(D,P,F,G):null;case Ge:return F.key===ce?T(D,P,F,G):null;case ke:return B(D,P,(ce=F._init)(F._payload),G)}if(ta(F)||j(F))return ce!==null?null:R(D,P,F,G,null);Iu(D,F)}return null}function Q(D,P,F,G,ce){if(typeof G=="string"&&G!==""||typeof G=="number")return C(P,D=D.get(F)||null,""+G,ce);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Ce:return k(P,D=D.get(G.key===null?F:G.key)||null,G,ce);case Ge:return T(P,D=D.get(G.key===null?F:G.key)||null,G,ce);case ke:return Q(D,P,F,(0,G._init)(G._payload),ce)}if(ta(G)||j(G))return R(P,D=D.get(F)||null,G,ce,null);Iu(P,G)}return null}function X(D,P,F,G){for(var ce=null,Ie=null,ue=P,Re=P=0,Pe=null;ue!==null&&Re<F.length;Re++){ue.index>Re?(Pe=ue,ue=null):Pe=ue.sibling;var Le=B(D,ue,F[Re],G);if(Le===null){ue===null&&(ue=Pe);break}t&&ue&&Le.alternate===null&&r(D,ue),P=p(Le,P,Re),Ie===null?ce=Le:Ie.sibling=Le,Ie=Le,ue=Pe}if(Re===F.length)return i(D,ue),sn&&Ca(D,Re),ce;if(ue===null){for(;Re<F.length;Re++)(ue=V(D,F[Re],G))!==null&&(P=p(ue,P,Re),Ie===null?ce=ue:Ie.sibling=ue,Ie=ue);return sn&&Ca(D,Re),ce}for(ue=u(D,ue);Re<F.length;Re++)(Pe=Q(ue,D,Re,F[Re],G))!==null&&(t&&Pe.alternate!==null&&ue.delete(Pe.key===null?Re:Pe.key),P=p(Pe,P,Re),Ie===null?ce=Pe:Ie.sibling=Pe,Ie=Pe);return t&&ue.forEach(function(Ye){return r(D,Ye)}),sn&&Ca(D,Re),ce}function ee(D,P,F,G){var ce=j(F);if(typeof ce!="function")throw Error(v(150));if((F=ce.call(F))==null)throw Error(v(151));for(var Ie=ce=null,ue=P,Re=P=0,Pe=null,Le=F.next();ue!==null&&!Le.done;Re++,Le=F.next()){ue.index>Re?(Pe=ue,ue=null):Pe=ue.sibling;var Ye=B(D,ue,Le.value,G);if(Ye===null){ue===null&&(ue=Pe);break}t&&ue&&Ye.alternate===null&&r(D,ue),P=p(Ye,P,Re),Ie===null?ce=Ye:Ie.sibling=Ye,Ie=Ye,ue=Pe}if(Le.done)return i(D,ue),sn&&Ca(D,Re),ce;if(ue===null){for(;!Le.done;Re++,Le=F.next())(Le=V(D,Le.value,G))!==null&&(P=p(Le,P,Re),Ie===null?ce=Le:Ie.sibling=Le,Ie=Le);return sn&&Ca(D,Re),ce}for(ue=u(D,ue);!Le.done;Re++,Le=F.next())(Le=Q(ue,D,Re,Le.value,G))!==null&&(t&&Le.alternate!==null&&ue.delete(Le.key===null?Re:Le.key),P=p(Le,P,Re),Ie===null?ce=Le:Ie.sibling=Le,Ie=Le);return t&&ue.forEach(function(ki){return r(D,ki)}),sn&&Ca(D,Re),ce}return function D(P,F,G,ce){if(typeof G=="object"&&G!==null&&G.type===ln&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case Ce:e:{for(var Ie=G.key,ue=F;ue!==null;){if(ue.key===Ie){if((Ie=G.type)===ln){if(ue.tag===7){i(P,ue.sibling),(F=d(ue,G.props.children)).return=P,P=F;break e}}else if(ue.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===ke&&g3(Ie)===ue.type){i(P,ue.sibling),(F=d(ue,G.props)).ref=Fo(P,ue,G),F.return=P,P=F;break e}i(P,ue);break}r(P,ue),ue=ue.sibling}G.type===ln?((F=La(G.props.children,P.mode,ce,G.key)).return=P,P=F):((ce=Ju(G.type,G.key,G.props,null,P.mode,ce)).ref=Fo(P,F,G),ce.return=P,P=ce)}return g(P);case Ge:e:{for(ue=G.key;F!==null;){if(F.key===ue){if(F.tag===4&&F.stateNode.containerInfo===G.containerInfo&&F.stateNode.implementation===G.implementation){i(P,F.sibling),(F=d(F,G.children||[])).return=P,P=F;break e}i(P,F);break}r(P,F),F=F.sibling}(F=r0(G,P.mode,ce)).return=P,P=F}return g(P);case ke:return D(P,F,(ue=G._init)(G._payload),ce)}if(ta(G))return X(P,F,G,ce);if(j(G))return ee(P,F,G,ce);Iu(P,G)}return typeof G=="string"&&G!==""||typeof G=="number"?(G=""+G,F!==null&&F.tag===6?(i(P,F.sibling),(F=d(F,G)).return=P,P=F):(i(P,F),(F=t0(G,P.mode,ce)).return=P,P=F),g(P)):i(P,F)}}var gi=v3(!0),y3=v3(!1),Uo={},vr=gl(Uo),Bo=gl(Uo),Ho=gl(Uo);function Ea(t){if(t===Uo)throw Error(v(174));return t}function C2(t,r){switch(qe(Ho,r),qe(Bo,t),qe(vr,Uo),t=r.nodeType){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:po(null,"");break;default:r=po(r=(t=t===8?r.parentNode:r).namespaceURI||null,t=t.tagName)}on(vr),qe(vr,r)}function vi(){on(vr),on(Bo),on(Ho)}function x3(t){Ea(Ho.current);var r=Ea(vr.current),i=po(r,t.type);r!==i&&(qe(Bo,t),qe(vr,i))}function b2(t){Bo.current===t&&(on(vr),on(Bo))}var gn=gl(0);function zu(t){for(var r=t;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&((i=i.dehydrated)===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(128&r.flags)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var E2=[];function k2(){for(var t=0;t<E2.length;t++)E2[t]._workInProgressVersionPrimary=null;E2.length=0}var Ru=Te.ReactCurrentDispatcher,S2=Te.ReactCurrentBatchConfig,ka=0,dn=null,Pn=null,Tn=null,_u=!1,Do=!1,Vo=0,Q8=0;function Zn(){throw Error(v(321))}function A2(t,r){if(r===null)return!1;for(var i=0;i<r.length&&i<t.length;i++)if(!Jt(t[i],r[i]))return!1;return!0}function N2(t,r,i,u,d,p){if(ka=p,dn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ru.current=t===null||t.memoizedState===null?K8:X8,t=i(u,d),Do){p=0;do{if(Do=!1,Vo=0,25<=p)throw Error(v(301));p+=1,Tn=Pn=null,r.updateQueue=null,Ru.current=$8,t=i(u,d)}while(Do)}if(Ru.current=Uu,r=Pn!==null&&Pn.next!==null,ka=0,Tn=Pn=dn=null,_u=!1,r)throw Error(v(300));return t}function L2(){var t=Vo!==0;return Vo=0,t}function yr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?dn.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Ut(){if(Pn===null){var t=dn.alternate;t=t!==null?t.memoizedState:null}else t=Pn.next;var r=Tn===null?dn.memoizedState:Tn.next;if(r!==null)Tn=r,Pn=t;else{if(t===null)throw Error(v(310));t={memoizedState:(Pn=t).memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},Tn===null?dn.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function Wo(t,r){return typeof r=="function"?r(t):r}function j2(t){var r=Ut(),i=r.queue;if(i===null)throw Error(v(311));i.lastRenderedReducer=t;var u=Pn,d=u.baseQueue,p=i.pending;if(p!==null){if(d!==null){var g=d.next;d.next=p.next,p.next=g}u.baseQueue=d=p,i.pending=null}if(d!==null){p=d.next,u=u.baseState;var C=g=null,k=null,T=p;do{var R=T.lane;if((ka&R)===R)k!==null&&(k=k.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),u=T.hasEagerState?T.eagerState:t(u,T.action);else{var V={lane:R,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};k===null?(C=k=V,g=u):k=k.next=V,dn.lanes|=R,Sa|=R}T=T.next}while(T!==null&&T!==p);k===null?g=u:k.next=C,Jt(u,r.memoizedState)||(dt=!0),r.memoizedState=u,r.baseState=g,r.baseQueue=k,i.lastRenderedState=u}if((t=i.interleaved)!==null){d=t;do p=d.lane,dn.lanes|=p,Sa|=p,d=d.next;while(d!==t)}else d===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function P2(t){var r=Ut(),i=r.queue;if(i===null)throw Error(v(311));i.lastRenderedReducer=t;var u=i.dispatch,d=i.pending,p=r.memoizedState;if(d!==null){i.pending=null;var g=d=d.next;do p=t(p,g.action),g=g.next;while(g!==d);Jt(p,r.memoizedState)||(dt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),i.lastRenderedState=p}return[p,u]}function w3(){}function C3(t,r){var i=dn,u=Ut(),d=r(),p=!Jt(u.memoizedState,d);if(p&&(u.memoizedState=d,dt=!0),u=u.queue,T2(k3.bind(null,i,u,t),[t]),u.getSnapshot!==r||p||Tn!==null&&1&Tn.memoizedState.tag){if(i.flags|=2048,Qo(9,E3.bind(null,i,u,d,r),void 0,null),Mn===null)throw Error(v(349));30&ka||b3(i,r,d)}return d}function b3(t,r,i){t.flags|=16384,t={getSnapshot:r,value:i},(r=dn.updateQueue)===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.stores=[t]):(i=r.stores)===null?r.stores=[t]:i.push(t)}function E3(t,r,i,u){r.value=i,r.getSnapshot=u,S3(r)&&A3(t)}function k3(t,r,i){return i(function(){S3(r)&&A3(t)})}function S3(t){var r=t.getSnapshot;t=t.value;try{var i=r();return!Jt(t,i)}catch{return!0}}function A3(t){var r=Or(t,1);r!==null&&nr(r,t,1,-1)}function N3(t){var r=yr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},r.queue=t,t=t.dispatch=G8.bind(null,dn,t),[r.memoizedState,t]}function Qo(t,r,i,u){return t={tag:t,create:r,destroy:i,deps:u,next:null},(r=dn.updateQueue)===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.lastEffect=t.next=t):(i=r.lastEffect)===null?r.lastEffect=t.next=t:(u=i.next,i.next=t,t.next=u,r.lastEffect=t),t}function L3(){return Ut().memoizedState}function Ou(t,r,i,u){var d=yr();dn.flags|=t,d.memoizedState=Qo(1|r,i,void 0,u===void 0?null:u)}function Fu(t,r,i,u){var d=Ut();u=u===void 0?null:u;var p=void 0;if(Pn!==null){var g=Pn.memoizedState;if(p=g.destroy,u!==null&&A2(u,g.deps))return void(d.memoizedState=Qo(r,i,p,u))}dn.flags|=t,d.memoizedState=Qo(1|r,i,p,u)}function j3(t,r){return Ou(8390656,8,t,r)}function T2(t,r){return Fu(2048,8,t,r)}function P3(t,r){return Fu(4,2,t,r)}function T3(t,r){return Fu(4,4,t,r)}function M3(t,r){return typeof r=="function"?(t=t(),r(t),function(){r(null)}):r!=null?(t=t(),r.current=t,function(){r.current=null}):void 0}function I3(t,r,i){return i=i!=null?i.concat([t]):null,Fu(4,4,M3.bind(null,r,t),i)}function M2(){}function z3(t,r){var i=Ut();r=r===void 0?null:r;var u=i.memoizedState;return u!==null&&r!==null&&A2(r,u[1])?u[0]:(i.memoizedState=[t,r],t)}function R3(t,r){var i=Ut();r=r===void 0?null:r;var u=i.memoizedState;return u!==null&&r!==null&&A2(r,u[1])?u[0]:(t=t(),i.memoizedState=[t,r],t)}function _3(t,r,i){return 21&ka?(Jt(i,r)||(i=jr(),dn.lanes|=i,Sa|=i,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=i)}function Z8(t,r){var i=We;We=i!==0&&4>i?i:4,t(!0);var u=S2.transition;S2.transition={};try{t(!1),r()}finally{We=i,S2.transition=u}}function O3(){return Ut().memoizedState}function Y8(t,r,i){var u=Sl(t);i={lane:u,action:i,hasEagerState:!1,eagerState:null,next:null},F3(t)?U3(r,i):(i=s3(t,r,i,u))!==null&&(nr(i,t,u,rt()),B3(i,r,u))}function G8(t,r,i){var u=Sl(t),d={lane:u,action:i,hasEagerState:!1,eagerState:null,next:null};if(F3(t))U3(r,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer)!==null)try{var g=r.lastRenderedState,C=p(g,i);if(d.hasEagerState=!0,d.eagerState=C,Jt(C,g)){var k=r.interleaved;return k===null?(d.next=d,v2(r)):(d.next=k.next,k.next=d),void(r.interleaved=d)}}catch{}(i=s3(t,r,d,u))!==null&&(nr(i,t,u,d=rt()),B3(i,r,u))}}function F3(t){var r=t.alternate;return t===dn||r!==null&&r===dn}function U3(t,r){Do=_u=!0;var i=t.pending;i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r}function B3(t,r,i){if(4194240&i){var u=r.lanes;i|=u&=t.pendingLanes,r.lanes=i,bo(t,i)}}var Uu={readContext:Ft,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},K8={readContext:Ft,useCallback:function(t,r){return yr().memoizedState=[t,r===void 0?null:r],t},useContext:Ft,useEffect:j3,useImperativeHandle:function(t,r,i){return i=i!=null?i.concat([t]):null,Ou(4194308,4,M3.bind(null,r,t),i)},useLayoutEffect:function(t,r){return Ou(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ou(4,2,t,r)},useMemo:function(t,r){var i=yr();return r=r===void 0?null:r,t=t(),i.memoizedState=[t,r],t},useReducer:function(t,r,i){var u=yr();return r=i!==void 0?i(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=Y8.bind(null,dn,t),[u.memoizedState,t]},useRef:function(t){return t={current:t},yr().memoizedState=t},useState:N3,useDebugValue:M2,useDeferredValue:function(t){return yr().memoizedState=t},useTransition:function(){var t=N3(!1),r=t[0];return t=Z8.bind(null,t[1]),yr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,i){var u=dn,d=yr();if(sn){if(i===void 0)throw Error(v(407));i=i()}else{if(i=r(),Mn===null)throw Error(v(349));30&ka||b3(u,r,i)}d.memoizedState=i;var p={value:i,getSnapshot:r};return d.queue=p,j3(k3.bind(null,u,p,t),[t]),u.flags|=2048,Qo(9,E3.bind(null,u,p,i,r),void 0,null),i},useId:function(){var t=yr(),r=Mn.identifierPrefix;if(sn){var i=_r;r=":"+r+"R"+(i=(gr&~(1<<32-Wn(gr)-1)).toString(32)+i),0<(i=Vo++)&&(r+="H"+i.toString(32)),r+=":"}else r=":"+r+"r"+(i=Q8++).toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},X8={readContext:Ft,useCallback:z3,useContext:Ft,useEffect:T2,useImperativeHandle:I3,useInsertionEffect:P3,useLayoutEffect:T3,useMemo:R3,useReducer:j2,useRef:L3,useState:function(){return j2(Wo)},useDebugValue:M2,useDeferredValue:function(t){return _3(Ut(),Pn.memoizedState,t)},useTransition:function(){return[j2(Wo)[0],Ut().memoizedState]},useMutableSource:w3,useSyncExternalStore:C3,useId:O3,unstable_isNewReconciler:!1},$8={readContext:Ft,useCallback:z3,useContext:Ft,useEffect:T2,useImperativeHandle:I3,useInsertionEffect:P3,useLayoutEffect:T3,useMemo:R3,useReducer:P2,useRef:L3,useState:function(){return P2(Wo)},useDebugValue:M2,useDeferredValue:function(t){var r=Ut();return Pn===null?r.memoizedState=t:_3(r,Pn.memoizedState,t)},useTransition:function(){return[P2(Wo)[0],Ut().memoizedState]},useMutableSource:w3,useSyncExternalStore:C3,useId:O3,unstable_isNewReconciler:!1};function yi(t,r){try{var i="",u=r;do i+=Ve(u),u=u.return;while(u);var d=i}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:d,digest:null}}function I2(t,r,i){return{value:t,source:null,stack:i??null,digest:r??null}}function z2(t,r){try{console.error(r.value)}catch(i){setTimeout(function(){throw i})}}var J8=typeof WeakMap=="function"?WeakMap:Map;function H3(t,r,i){(i=Fr(-1,i)).tag=3,i.payload={element:null};var u=r.value;return i.callback=function(){Zu||(Zu=!0,G2=u),z2(0,r)},i}function D3(t,r,i){(i=Fr(-1,i)).tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;i.payload=function(){return u(d)},i.callback=function(){z2(0,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){z2(0,r),typeof u!="function"&&(El===null?El=new Set([this]):El.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),i}function V3(t,r,i){var u=t.pingCache;if(u===null){u=t.pingCache=new J8;var d=new Set;u.set(r,d)}else(d=u.get(r))===void 0&&(d=new Set,u.set(r,d));d.has(i)||(d.add(i),t=o7.bind(null,t,r,i),r.then(t,t))}function W3(t){do{var r;if((r=t.tag===13)&&(r=(r=t.memoizedState)===null||r.dehydrated!==null),r)return t;t=t.return}while(t!==null);return null}function Q3(t,r,i,u,d){return 1&t.mode?(t.flags|=65536,t.lanes=d,t):(t===r?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:((r=Fr(-1,1)).tag=2,wl(i,r,1))),i.lanes|=1),t)}var q8=Te.ReactCurrentOwner,dt=!1;function pt(t,r,i,u){r.child=t===null?y3(r,null,i,u):gi(r,t.child,i,u)}function Z3(t,r,i,u,d){i=i.render;var p=r.ref;return hi(r,d),u=N2(t,r,i,u,p,d),i=L2(),t===null||dt?(sn&&i&&s2(r),r.flags|=1,pt(t,r,u,d),r.child):(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Ur(t,r,d))}function Y3(t,r,i,u,d){if(t===null){var p=i.type;return typeof p!="function"||n0(p)||p.defaultProps!==void 0||i.compare!==null||i.defaultProps!==void 0?((t=Ju(i.type,null,u,r,r.mode,d)).ref=r.ref,t.return=r,r.child=t):(r.tag=15,r.type=p,G3(t,r,p,u,d))}if(p=t.child,!(t.lanes&d)){var g=p.memoizedProps;if((i=(i=i.compare)!==null?i:To)(g,u)&&t.ref===r.ref)return Ur(t,r,d)}return r.flags|=1,(t=Nl(p,u)).ref=r.ref,t.return=r,r.child=t}function G3(t,r,i,u,d){if(t!==null){var p=t.memoizedProps;if(To(p,u)&&t.ref===r.ref){if(dt=!1,r.pendingProps=u=p,!(t.lanes&d))return r.lanes=t.lanes,Ur(t,r,d);131072&t.flags&&(dt=!0)}}return R2(t,r,i,u,d)}function K3(t,r,i){var u=r.pendingProps,d=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(1&r.mode){if(!(1073741824&i))return t=p!==null?p.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,qe(wi,kt),kt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:i,qe(wi,kt),kt|=u}else r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(wi,kt),kt|=i;else p!==null?(u=p.baseLanes|i,r.memoizedState=null):u=i,qe(wi,kt),kt|=u;return pt(t,r,d,i),r.child}function X3(t,r){var i=r.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function R2(t,r,i,u,d){var p=Ct(i)?xa:Qn.current;return p=ci(r,p),hi(r,d),i=N2(t,r,i,u,p,d),u=L2(),t===null||dt?(sn&&u&&s2(r),r.flags|=1,pt(t,r,i,d),r.child):(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Ur(t,r,d))}function $3(t,r,i,u,d){if(Ct(i)){var p=!0;Eu(r)}else p=!1;if(hi(r,d),r.stateNode===null)Hu(t,r),m3(r,i,u),w2(r,i,u,d),u=!0;else if(t===null){var g=r.stateNode,C=r.memoizedProps;g.props=C;var k=g.context,T=i.contextType;T=typeof T=="object"&&T!==null?Ft(T):ci(r,T=Ct(i)?xa:Qn.current);var R=i.getDerivedStateFromProps,V=typeof R=="function"||typeof g.getSnapshotBeforeUpdate=="function";V||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(C!==u||k!==T)&&h3(r,g,u,T),xl=!1;var B=r.memoizedState;g.state=B,Tu(r,u,g,d),k=r.memoizedState,C!==u||B!==k||ct.current||xl?(typeof R=="function"&&(x2(r,i,R,u),k=r.memoizedState),(C=xl||f3(r,i,C,u,B,k,T))?(V||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=k),g.props=u,g.state=k,g.context=T,u=C):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{g=r.stateNode,u3(t,r),C=r.memoizedProps,T=r.type===r.elementType?C:er(r.type,C),g.props=T,V=r.pendingProps,B=g.context,k=typeof(k=i.contextType)=="object"&&k!==null?Ft(k):ci(r,k=Ct(i)?xa:Qn.current);var Q=i.getDerivedStateFromProps;(R=typeof Q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(C!==V||B!==k)&&h3(r,g,u,k),xl=!1,B=r.memoizedState,g.state=B,Tu(r,u,g,d);var X=r.memoizedState;C!==V||B!==X||ct.current||xl?(typeof Q=="function"&&(x2(r,i,Q,u),X=r.memoizedState),(T=xl||f3(r,i,T,u,B,X,k)||!1)?(R||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,X,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,X,k)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||C===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=X),g.props=u,g.state=X,g.context=k,u=T):(typeof g.componentDidUpdate!="function"||C===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),u=!1)}return _2(t,r,i,u,p,d)}function _2(t,r,i,u,d,p){X3(t,r);var g=!!(128&r.flags);if(!u&&!g)return d&&n3(r,i,!1),Ur(t,r,p);u=r.stateNode,q8.current=r;var C=g&&typeof i.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&g?(r.child=gi(r,t.child,null,p),r.child=gi(r,null,C,p)):pt(t,r,C,p),r.memoizedState=u.state,d&&n3(r,i,!0),r.child}function J3(t){var r=t.stateNode;r.pendingContext?qp(0,r.pendingContext,r.pendingContext!==r.context):r.context&&qp(0,r.context,!1),C2(t,r.containerInfo)}function q3(t,r,i,u,d){return fi(),p2(d),r.flags|=256,pt(t,r,i,u),r.child}var ef,O2,nf,tf,F2={dehydrated:null,treeContext:null,retryLane:0};function U2(t){return{baseLanes:t,cachePool:null,transitions:null}}function rf(t,r,i){var u,d=r.pendingProps,p=gn.current,g=!1,C=!!(128&r.flags);if((u=C)||(u=(t===null||t.memoizedState!==null)&&!!(2&p)),u?(g=!0,r.flags&=-129):t!==null&&t.memoizedState===null||(p|=1),qe(gn,1&p),t===null)return d2(r),(t=r.memoizedState)!==null&&(t=t.dehydrated)!==null?(1&r.mode?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(C=d.children,t=d.fallback,g?(d=r.mode,g=r.child,C={mode:"hidden",children:C},1&d||g===null?g=qu(C,d,0,null):(g.childLanes=0,g.pendingProps=C),t=La(t,d,i,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=U2(i),r.memoizedState=F2,t):B2(r,C));if((p=t.memoizedState)!==null&&(u=p.dehydrated)!==null)return function(T,R,V,B,Q,X,ee){if(V)return 256&R.flags?(R.flags&=-257,Bu(T,R,ee,B=I2(Error(v(422))))):R.memoizedState!==null?(R.child=T.child,R.flags|=128,null):(X=B.fallback,Q=R.mode,B=qu({mode:"visible",children:B.children},Q,0,null),(X=La(X,Q,ee,null)).flags|=2,B.return=R,X.return=R,B.sibling=X,R.child=B,1&R.mode&&gi(R,T.child,null,ee),R.child.memoizedState=U2(ee),R.memoizedState=F2,X);if(!(1&R.mode))return Bu(T,R,ee,null);if(Q.data==="$!"){if(B=Q.nextSibling&&Q.nextSibling.dataset)var D=B.dgst;return B=D,Bu(T,R,ee,B=I2(X=Error(v(419)),B,void 0))}if(D=!!(ee&T.childLanes),dt||D){if((B=Mn)!==null){switch(ee&-ee){case 4:Q=2;break;case 16:Q=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:Q=32;break;case 536870912:Q=268435456;break;default:Q=0}(Q=Q&(B.suspendedLanes|ee)?0:Q)!==0&&Q!==X.retryLane&&(X.retryLane=Q,Or(T,Q),nr(B,T,Q,-1))}return e0(),Bu(T,R,ee,B=I2(Error(v(421))))}return Q.data==="$?"?(R.flags|=128,R.child=T.child,R=s7.bind(null,T),Q._reactRetry=R,null):(T=X.treeContext,Et=hl(Q.nextSibling),bt=R,sn=!0,qt=null,T!==null&&(_t[Ot++]=gr,_t[Ot++]=_r,_t[Ot++]=wa,gr=T.id,_r=T.overflow,wa=R),(R=B2(R,B.children)).flags|=4096,R)}(t,r,C,d,u,p,i);if(g){g=d.fallback,C=r.mode,u=(p=t.child).sibling;var k={mode:"hidden",children:d.children};return 1&C||r.child===p?(d=Nl(p,k)).subtreeFlags=14680064&p.subtreeFlags:((d=r.child).childLanes=0,d.pendingProps=k,r.deletions=null),u!==null?g=Nl(u,g):(g=La(g,C,i,null)).flags|=2,g.return=r,d.return=r,d.sibling=g,r.child=d,d=g,g=r.child,C=(C=t.child.memoizedState)===null?U2(i):{baseLanes:C.baseLanes|i,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=t.childLanes&~i,r.memoizedState=F2,d}return t=(g=t.child).sibling,d=Nl(g,{mode:"visible",children:d.children}),!(1&r.mode)&&(d.lanes=i),d.return=r,d.sibling=null,t!==null&&((i=r.deletions)===null?(r.deletions=[t],r.flags|=16):i.push(t)),r.child=d,r.memoizedState=null,d}function B2(t,r){return(r=qu({mode:"visible",children:r},t.mode,0,null)).return=t,t.child=r}function Bu(t,r,i,u){return u!==null&&p2(u),gi(r,t.child,null,i),(t=B2(r,r.pendingProps.children)).flags|=2,r.memoizedState=null,t}function lf(t,r,i){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),g2(t.return,r,i)}function H2(t,r,i,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:i,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=i,p.tailMode=d)}function af(t,r,i){var u=r.pendingProps,d=u.revealOrder,p=u.tail;if(pt(t,r,u.children,i),2&(u=gn.current))u=1&u|2,r.flags|=128;else{if(t!==null&&128&t.flags)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lf(t,i,r);else if(t.tag===19)lf(t,i,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(qe(gn,u),1&r.mode)switch(d){case"forwards":for(i=r.child,d=null;i!==null;)(t=i.alternate)!==null&&zu(t)===null&&(d=i),i=i.sibling;(i=d)===null?(d=r.child,r.child=null):(d=i.sibling,i.sibling=null),H2(r,!1,d,i,p);break;case"backwards":for(i=null,d=r.child,r.child=null;d!==null;){if((t=d.alternate)!==null&&zu(t)===null){r.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}H2(r,!0,i,null,p);break;case"together":H2(r,!1,null,null,void 0);break;default:r.memoizedState=null}else r.memoizedState=null;return r.child}function Hu(t,r){!(1&r.mode)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ur(t,r,i){if(t!==null&&(r.dependencies=t.dependencies),Sa|=r.lanes,!(i&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(v(153));if(r.child!==null){for(i=Nl(t=r.child,t.pendingProps),r.child=i,i.return=r;t.sibling!==null;)t=t.sibling,(i=i.sibling=Nl(t,t.pendingProps)).return=r;i.sibling=null}return r.child}function Zo(t,r){if(!sn)switch(t.tailMode){case"hidden":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var u=null;i!==null;)i.alternate!==null&&(u=i),i=i.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function nt(t){var r=t.alternate!==null&&t.alternate.child===t.child,i=0,u=0;if(r)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,u|=14680064&d.subtreeFlags,u|=14680064&d.flags,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=i,r}function e7(t,r,i){var u=r.pendingProps;switch(u2(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(r),null;case 1:case 17:return Ct(r.type)&&i2(),nt(r),null;case 3:return u=r.stateNode,vi(),on(ct),on(Qn),k2(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),t!==null&&t.child!==null||(Nu(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(256&r.flags)||(r.flags|=1024,qt!==null&&($2(qt),qt=null))),O2(t,r),nt(r),null;case 5:b2(r);var d=Ea(Ho.current);if(i=r.type,t!==null&&r.stateNode!=null)nf(t,r,i,u,d),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(v(166));return nt(r),null}if(t=Ea(vr.current),Nu(r)){u=r.stateNode,i=r.type;var p=r.memoizedProps;switch(u[hr]=r,u[_o]=p,t=!!(1&r.mode),i){case"dialog":nn("cancel",u),nn("close",u);break;case"iframe":case"object":case"embed":nn("load",u);break;case"video":case"audio":for(d=0;d<Io.length;d++)nn(Io[d],u);break;case"source":nn("error",u);break;case"img":case"image":case"link":nn("error",u),nn("load",u);break;case"details":nn("toggle",u);break;case"input":na(u,p),nn("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},nn("invalid",u);break;case"textarea":uo(u,p),nn("invalid",u)}for(var g in ho(i,p),d=null,p)if(p.hasOwnProperty(g)){var C=p[g];g==="children"?typeof C=="string"?u.textContent!==C&&(p.suppressHydrationWarning!==!0&&wu(u.textContent,C,t),d=["children",C]):typeof C=="number"&&u.textContent!==""+C&&(p.suppressHydrationWarning!==!0&&wu(u.textContent,C,t),d=["children",""+C]):A.hasOwnProperty(g)&&C!=null&&g==="onScroll"&&nn("scroll",u)}switch(i){case"input":ur(u),Ys(u,p,!0);break;case"textarea":ur(u),qr(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Cu)}u=d,r.updateQueue=u,u!==null&&(r.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gs(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?((t=g.createElement("div")).innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=g.createElement(i,{is:u.is}):(t=g.createElement(i),i==="select"&&(g=t,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):t=g.createElementNS(t,i),t[hr]=r,t[_o]=u,ef(t,r,!1,!1),r.stateNode=t;e:{switch(g=cr(i,u),i){case"dialog":nn("cancel",t),nn("close",t),d=u;break;case"iframe":case"object":case"embed":nn("load",t),d=u;break;case"video":case"audio":for(d=0;d<Io.length;d++)nn(Io[d],t);d=u;break;case"source":nn("error",t),d=u;break;case"img":case"image":case"link":nn("error",t),nn("load",t),d=u;break;case"details":nn("toggle",t),d=u;break;case"input":na(t,u),d=io(t,u),nn("invalid",t);break;case"option":default:d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=q({},u,{value:void 0}),nn("invalid",t);break;case"textarea":uo(t,u),d=Jr(t,u),nn("invalid",t)}for(p in ho(i,d),C=d)if(C.hasOwnProperty(p)){var k=C[p];p==="style"?Ks(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0)!=null&&fo(t,k):p==="children"?typeof k=="string"?(i!=="textarea"||k!=="")&&la(t,k):typeof k=="number"&&la(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(A.hasOwnProperty(p)?k!=null&&p==="onScroll"&&nn("scroll",t):k!=null&&de(t,p,k,g))}switch(i){case"input":ur(t),Ys(t,u,!1);break;case"textarea":ur(t),qr(t);break;case"option":u.value!=null&&t.setAttribute("value",""+je(u.value));break;case"select":t.multiple=!!u.multiple,(p=u.value)!=null?Ar(t,!!u.multiple,p,!1):u.defaultValue!=null&&Ar(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Cu)}switch(i){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nt(r),null;case 6:if(t&&r.stateNode!=null)tf(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(v(166));if(i=Ea(Ho.current),Ea(vr.current),Nu(r)){if(u=r.stateNode,i=r.memoizedProps,u[hr]=r,(p=u.nodeValue!==i)&&(t=bt)!==null)switch(t.tag){case 3:wu(u.nodeValue,i,!!(1&t.mode));break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wu(u.nodeValue,i,!!(1&t.mode))}p&&(r.flags|=4)}else(u=(i.nodeType===9?i:i.ownerDocument).createTextNode(u))[hr]=r,r.stateNode=u}return nt(r),null;case 13:if(on(gn),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(sn&&Et!==null&&1&r.mode&&!(128&r.flags))o3(),fi(),r.flags|=98560,p=!1;else if(p=Nu(r),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(v(318));if(!(p=(p=r.memoizedState)!==null?p.dehydrated:null))throw Error(v(317));p[hr]=r}else fi(),!(128&r.flags)&&(r.memoizedState=null),r.flags|=4;nt(r),p=!1}else qt!==null&&($2(qt),qt=null),p=!0;if(!p)return 65536&r.flags?r:null}return 128&r.flags?(r.lanes=i,r):((u=u!==null)!=(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,1&r.mode&&(t===null||1&gn.current?Nn===0&&(Nn=3):e0())),r.updateQueue!==null&&(r.flags|=4),nt(r),null);case 4:return vi(),O2(t,r),t===null&&zo(r.stateNode.containerInfo),nt(r),null;case 10:return h2(r.type._context),nt(r),null;case 19:if(on(gn),(p=r.memoizedState)===null)return nt(r),null;if(u=!!(128&r.flags),(g=p.rendering)===null)if(u)Zo(p,!1);else{if(Nn!==0||t!==null&&128&t.flags)for(t=r.child;t!==null;){if((g=zu(t))!==null){for(r.flags|=128,Zo(p,!1),(u=g.updateQueue)!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=i,i=r.child;i!==null;)t=u,(p=i).flags&=14680066,(g=p.alternate)===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,t=g.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return qe(gn,1&gn.current|2),r.child}t=t.sibling}p.tail!==null&&cn()>Ci&&(r.flags|=128,u=!0,Zo(p,!1),r.lanes=4194304)}else{if(!u)if((t=zu(g))!==null){if(r.flags|=128,u=!0,(i=t.updateQueue)!==null&&(r.updateQueue=i,r.flags|=4),Zo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!sn)return nt(r),null}else 2*cn()-p.renderingStartTime>Ci&&i!==1073741824&&(r.flags|=128,u=!0,Zo(p,!1),r.lanes=4194304);p.isBackwards?(g.sibling=r.child,r.child=g):((i=p.last)!==null?i.sibling=g:r.child=g,p.last=g)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=cn(),r.sibling=null,i=gn.current,qe(gn,u?1&i|2:1&i),r):(nt(r),null);case 22:case 23:return q2(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&1&r.mode?1073741824&kt&&(nt(r),6&r.subtreeFlags&&(r.flags|=8192)):nt(r),null;case 24:case 25:return null}throw Error(v(156,r.tag))}function n7(t,r){switch(u2(r),r.tag){case 1:return Ct(r.type)&&i2(),65536&(t=r.flags)?(r.flags=-65537&t|128,r):null;case 3:return vi(),on(ct),on(Qn),k2(),65536&(t=r.flags)&&!(128&t)?(r.flags=-65537&t|128,r):null;case 5:return b2(r),null;case 13:if(on(gn),(t=r.memoizedState)!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(v(340));fi()}return 65536&(t=r.flags)?(r.flags=-65537&t|128,r):null;case 19:return on(gn),null;case 4:return vi(),null;case 10:return h2(r.type._context),null;case 22:case 23:return q2(),null;default:return null}}ef=function(t,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},O2=function(){},nf=function(t,r,i,u){var d=t.memoizedProps;if(d!==u){t=r.stateNode,Ea(vr.current);var p,g=null;switch(i){case"input":d=io(t,d),u=io(t,u),g=[];break;case"select":d=q({},d,{value:void 0}),u=q({},u,{value:void 0}),g=[];break;case"textarea":d=Jr(t,d),u=Jr(t,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Cu)}for(T in ho(i,u),i=null,d)if(!u.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var C=d[T];for(p in C)C.hasOwnProperty(p)&&(i||(i={}),i[p]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(A.hasOwnProperty(T)?g||(g=[]):(g=g||[]).push(T,null));for(T in u){var k=u[T];if(C=d!=null?d[T]:void 0,u.hasOwnProperty(T)&&k!==C&&(k!=null||C!=null))if(T==="style")if(C){for(p in C)!C.hasOwnProperty(p)||k&&k.hasOwnProperty(p)||(i||(i={}),i[p]="");for(p in k)k.hasOwnProperty(p)&&C[p]!==k[p]&&(i||(i={}),i[p]=k[p])}else i||(g||(g=[]),g.push(T,i)),i=k;else T==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,C=C?C.__html:void 0,k!=null&&C!==k&&(g=g||[]).push(T,k)):T==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(T,""+k):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(A.hasOwnProperty(T)?(k!=null&&T==="onScroll"&&nn("scroll",t),g||C===k||(g=[])):(g=g||[]).push(T,k))}i&&(g=g||[]).push("style",i);var T=g;(r.updateQueue=T)&&(r.flags|=4)}},tf=function(t,r,i,u){i!==u&&(r.flags|=4)};var Du=!1,Yn=!1,t7=typeof WeakSet=="function"?WeakSet:Set,pe=null;function xi(t,r){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(u){vn(t,r,u)}else i.current=null}function of(t,r,i){try{i()}catch(u){vn(t,r,u)}}var sf=!1;function Yo(t,r,i){var u=r.updateQueue;if((u=u!==null?u.lastEffect:null)!==null){var d=u=u.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&of(r,i,p)}d=d.next}while(d!==u)}}function Vu(t,r){if((r=(r=r.updateQueue)!==null?r.lastEffect:null)!==null){var i=r=r.next;do{if((i.tag&t)===t){var u=i.create;i.destroy=u()}i=i.next}while(i!==r)}}function D2(t){var r=t.ref;if(r!==null){var i=t.stateNode;t.tag,t=i,typeof r=="function"?r(t):r.current=t}}function uf(t){var r=t.alternate;r!==null&&(t.alternate=null,uf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode)!==null&&(delete r[hr],delete r[_o],delete r[l2],delete r[D8],delete r[V8]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cf(t){return t.tag===5||t.tag===3||t.tag===4}function df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(2&t.flags||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(2&t.flags))return t.stateNode}}function V2(t,r,i){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(t,r):i.insertBefore(t,r):(i.nodeType===8?(r=i.parentNode).insertBefore(t,i):(r=i).appendChild(t),(i=i._reactRootContainer)!=null||r.onclick!==null||(r.onclick=Cu));else if(u!==4&&(t=t.child)!==null)for(V2(t,r,i),t=t.sibling;t!==null;)V2(t,r,i),t=t.sibling}function W2(t,r,i){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?i.insertBefore(t,r):i.appendChild(t);else if(u!==4&&(t=t.child)!==null)for(W2(t,r,i),t=t.sibling;t!==null;)W2(t,r,i),t=t.sibling}var tt=null,xr=!1;function Cl(t,r,i){for(i=i.child;i!==null;)pf(t,r,i),i=i.sibling}function pf(t,r,i){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Ya,i)}catch{}switch(i.tag){case 5:Yn||xi(i,r);case 6:var u=tt,d=xr;tt=null,Cl(t,r,i),xr=d,(tt=u)!==null&&(xr?(t=tt,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):tt.removeChild(i.stateNode));break;case 18:tt!==null&&(xr?(t=tt,i=i.stateNode,t.nodeType===8?r2(t.parentNode,i):t.nodeType===1&&r2(t,i),ol(t)):r2(tt,i.stateNode));break;case 4:u=tt,d=xr,tt=i.stateNode.containerInfo,xr=!0,Cl(t,r,i),tt=u,xr=d;break;case 0:case 11:case 14:case 15:if(!Yn&&(u=i.updateQueue)!==null&&(u=u.lastEffect)!==null){d=u=u.next;do{var p=d,g=p.destroy;p=p.tag,g!==void 0&&(2&p||4&p)&&of(i,r,g),d=d.next}while(d!==u)}Cl(t,r,i);break;case 1:if(!Yn&&(xi(i,r),typeof(u=i.stateNode).componentWillUnmount=="function"))try{u.props=i.memoizedProps,u.state=i.memoizedState,u.componentWillUnmount()}catch(C){vn(i,r,C)}Cl(t,r,i);break;case 21:Cl(t,r,i);break;case 22:1&i.mode?(Yn=(u=Yn)||i.memoizedState!==null,Cl(t,r,i),Yn=u):Cl(t,r,i);break;default:Cl(t,r,i)}}function ff(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new t7),r.forEach(function(u){var d=u7.bind(null,t,u);i.has(u)||(i.add(u),u.then(d,d))})}}function wr(t,r){var i=r.deletions;if(i!==null)for(var u=0;u<i.length;u++){var d=i[u];try{var p=t,g=r,C=g;e:for(;C!==null;){switch(C.tag){case 5:tt=C.stateNode,xr=!1;break e;case 3:case 4:tt=C.stateNode.containerInfo,xr=!0;break e}C=C.return}if(tt===null)throw Error(v(160));pf(p,g,d),tt=null,xr=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(T){vn(d,r,T)}}if(12854&r.subtreeFlags)for(r=r.child;r!==null;)mf(r,t),r=r.sibling}function mf(t,r){var i=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wr(r,t),Br(t),4&u){try{Yo(3,t,t.return),Vu(3,t)}catch(ee){vn(t,t.return,ee)}try{Yo(5,t,t.return)}catch(ee){vn(t,t.return,ee)}}break;case 1:wr(r,t),Br(t),512&u&&i!==null&&xi(i,i.return);break;case 5:if(wr(r,t),Br(t),512&u&&i!==null&&xi(i,i.return),32&t.flags){var d=t.stateNode;try{la(d,"")}catch(ee){vn(t,t.return,ee)}}if(4&u&&(d=t.stateNode)!=null){var p=t.memoizedProps,g=i!==null?i.memoizedProps:p,C=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{C==="input"&&p.type==="radio"&&p.name!=null&&Zs(d,p),cr(C,g);var T=cr(C,p);for(g=0;g<k.length;g+=2){var R=k[g],V=k[g+1];R==="style"?Ks(d,V):R==="dangerouslySetInnerHTML"?fo(d,V):R==="children"?la(d,V):de(d,R,V,T)}switch(C){case"input":oo(d,p);break;case"textarea":co(d,p);break;case"select":var B=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Q=p.value;Q!=null?Ar(d,!!p.multiple,Q,!1):B!==!!p.multiple&&(p.defaultValue!=null?Ar(d,!!p.multiple,p.defaultValue,!0):Ar(d,!!p.multiple,p.multiple?[]:"",!1))}d[_o]=p}catch(ee){vn(t,t.return,ee)}}break;case 6:if(wr(r,t),Br(t),4&u){if(t.stateNode===null)throw Error(v(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(ee){vn(t,t.return,ee)}}break;case 3:if(wr(r,t),Br(t),4&u&&i!==null&&i.memoizedState.isDehydrated)try{ol(r.containerInfo)}catch(ee){vn(t,t.return,ee)}break;case 4:default:wr(r,t),Br(t);break;case 13:wr(r,t),Br(t),8192&(d=t.child).flags&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Y2=cn())),4&u&&ff(t);break;case 22:if(R=i!==null&&i.memoizedState!==null,1&t.mode?(Yn=(T=Yn)||R,wr(r,t),Yn=T):wr(r,t),Br(t),8192&u){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!R&&1&t.mode)for(pe=t,R=t.child;R!==null;){for(V=pe=R;pe!==null;){switch(Q=(B=pe).child,B.tag){case 0:case 11:case 14:case 15:Yo(4,B,B.return);break;case 1:xi(B,B.return);var X=B.stateNode;if(typeof X.componentWillUnmount=="function"){u=B,i=B.return;try{r=u,X.props=r.memoizedProps,X.state=r.memoizedState,X.componentWillUnmount()}catch(ee){vn(u,i,ee)}}break;case 5:xi(B,B.return);break;case 22:if(B.memoizedState!==null){vf(V);continue}}Q!==null?(Q.return=B,pe=Q):vf(V)}R=R.sibling}e:for(R=null,V=t;;){if(V.tag===5){if(R===null){R=V;try{d=V.stateNode,T?typeof(p=d.style).setProperty=="function"?p.setProperty("display","none","important"):p.display="none":(C=V.stateNode,g=(k=V.memoizedProps.style)!=null&&k.hasOwnProperty("display")?k.display:null,C.style.display=mo("display",g))}catch(ee){vn(t,t.return,ee)}}}else if(V.tag===6){if(R===null)try{V.stateNode.nodeValue=T?"":V.memoizedProps}catch(ee){vn(t,t.return,ee)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===t)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===t)break e;for(;V.sibling===null;){if(V.return===null||V.return===t)break e;R===V&&(R=null),V=V.return}R===V&&(R=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:wr(r,t),Br(t),4&u&&ff(t);case 21:}}function Br(t){var r=t.flags;if(2&r){try{e:{for(var i=t.return;i!==null;){if(cf(i)){var u=i;break e}i=i.return}throw Error(v(160))}switch(u.tag){case 5:var d=u.stateNode;32&u.flags&&(la(d,""),u.flags&=-33),W2(t,df(t),d);break;case 3:case 4:var p=u.stateNode.containerInfo;V2(t,df(t),p);break;default:throw Error(v(161))}}catch(g){vn(t,t.return,g)}t.flags&=-3}4096&r&&(t.flags&=-4097)}function r7(t,r,i){pe=t,hf(t)}function hf(t,r,i){for(var u=!!(1&t.mode);pe!==null;){var d=pe,p=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||Du;if(!g){var C=d.alternate,k=C!==null&&C.memoizedState!==null||Yn;C=Du;var T=Yn;if(Du=g,(Yn=k)&&!T)for(pe=d;pe!==null;)k=(g=pe).child,g.tag===22&&g.memoizedState!==null?yf(d):k!==null?(k.return=g,pe=k):yf(d);for(;p!==null;)pe=p,hf(p),p=p.sibling;pe=d,Du=C,Yn=T}gf(t)}else 8772&d.subtreeFlags&&p!==null?(p.return=d,pe=p):gf(t)}}function gf(t){for(;pe!==null;){var r=pe;if(8772&r.flags){var i=r.alternate;try{if(8772&r.flags)switch(r.tag){case 0:case 11:case 15:Yn||Vu(5,r);break;case 1:var u=r.stateNode;if(4&r.flags&&!Yn)if(i===null)u.componentDidMount();else{var d=r.elementType===r.type?i.memoizedProps:er(r.type,i.memoizedProps);u.componentDidUpdate(d,i.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&d3(r,p,u);break;case 3:var g=r.updateQueue;if(g!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:case 1:i=r.child.stateNode}d3(r,g,i)}break;case 5:var C=r.stateNode;if(i===null&&4&r.flags){i=C;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&i.focus();break;case"img":k.src&&(i.src=k.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var R=T.memoizedState;if(R!==null){var V=R.dehydrated;V!==null&&ol(V)}}}break;default:throw Error(v(163))}Yn||512&r.flags&&D2(r)}catch(B){vn(r,r.return,B)}}if(r===t){pe=null;break}if((i=r.sibling)!==null){i.return=r.return,pe=i;break}pe=r.return}}function vf(t){for(;pe!==null;){var r=pe;if(r===t){pe=null;break}var i=r.sibling;if(i!==null){i.return=r.return,pe=i;break}pe=r.return}}function yf(t){for(;pe!==null;){var r=pe;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{Vu(4,r)}catch(k){vn(r,i,k)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var d=r.return;try{u.componentDidMount()}catch(k){vn(r,d,k)}}var p=r.return;try{D2(r)}catch(k){vn(r,p,k)}break;case 5:var g=r.return;try{D2(r)}catch(k){vn(r,g,k)}}}catch(k){vn(r,r.return,k)}if(r===t){pe=null;break}var C=r.sibling;if(C!==null){C.return=r.return,pe=C;break}pe=r.return}}var xf,l7=Math.ceil,Wu=Te.ReactCurrentDispatcher,Q2=Te.ReactCurrentOwner,Bt=Te.ReactCurrentBatchConfig,Ze=0,Mn=null,En=null,_n=0,kt=0,wi=gl(0),Nn=0,Go=null,Sa=0,Qu=0,Z2=0,Ko=null,St=null,Y2=0,Ci=1/0,bl=null,Zu=!1,G2=null,El=null,Yu=!1,kl=null,Gu=0,Xo=0,K2=null,Ku=-1,Xu=0;function rt(){return 6&Ze?cn():Ku!==-1?Ku:Ku=cn()}function Sl(t){return 1&t.mode?2&Ze&&_n!==0?_n&-_n:W8.transition!==null?(Xu===0&&(Xu=jr()),Xu):(t=We)!==0?t:t=(t=window.event)===void 0?16:pu(t.type):1}function nr(t,r,i,u){if(50<Xo)throw Xo=0,K2=null,Error(v(185));da(t,i,u),2&Ze&&t===Mn||(t===Mn&&(!(2&Ze)&&(Qu|=i),Nn===4&&Al(t,_n)),ft(t,u),i===1&&Ze===0&&!(1&r.mode)&&(Ci=cn()+500,ku&&yl()))}function ft(t,r){var i=t.callbackNode;(function(d,p){for(var g=d.suspendedLanes,C=d.pingedLanes,k=d.expirationTimes,T=d.pendingLanes;0<T;){var R=31-Wn(T),V=1<<R,B=k[R];B===-1?V&g&&!(V&C)||(k[R]=Ga(V,p)):B<=p&&(d.expiredLanes|=V),T&=~V}})(t,r);var u=rl(t,t===Mn?_n:0);if(u===0)i!==null&&ru(i),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(i!=null&&ru(i),r===1)t.tag===0?function(d){ku=!0,t3(d)}(Cf.bind(null,t)):t3(Cf.bind(null,t)),B8(function(){!(6&Ze)&&yl()}),i=null;else{switch(iu(u)){case 1:i=yo;break;case 4:i=lu;break;case 16:default:i=xo;break;case 536870912:i=au}i=Lf(i,wf.bind(null,t))}t.callbackPriority=r,t.callbackNode=i}}function wf(t,r){if(Ku=-1,Xu=0,6&Ze)throw Error(v(327));var i=t.callbackNode;if(Ei()&&t.callbackNode!==i)return null;var u=rl(t,t===Mn?_n:0);if(u===0)return null;if(30&u||u&t.expiredLanes||r)r=$u(t,u);else{r=u;var d=Ze;Ze|=2;var p=Ef();for(Mn===t&&_n===r||(bl=null,Ci=cn()+500,Na(t,r));;)try{i7();break}catch(C){bf(t,C)}m2(),Wu.current=p,Ze=d,En!==null?r=0:(Mn=null,_n=0,r=Nn)}if(r!==0){if(r===2&&(d=dr(t))!==0&&(u=d,r=X2(t,d)),r===1)throw i=Go,Na(t,0),Al(t,u),ft(t,cn()),i;if(r===6)Al(t,u);else{if(d=t.current.alternate,!(30&u||function(C){for(var k=C;;){if(16384&k.flags){var T=k.updateQueue;if(T!==null&&(T=T.stores)!==null)for(var R=0;R<T.length;R++){var V=T[R],B=V.getSnapshot;V=V.value;try{if(!Jt(B(),V))return!1}catch{return!1}}}if(T=k.child,16384&k.subtreeFlags&&T!==null)T.return=k,k=T;else{if(k===C)break;for(;k.sibling===null;){if(k.return===null||k.return===C)return!0;k=k.return}k.sibling.return=k.return,k=k.sibling}}return!0}(d)||(r=$u(t,u),r===2&&(p=dr(t),p!==0&&(u=p,r=X2(t,p))),r!==1)))throw i=Go,Na(t,0),Al(t,u),ft(t,cn()),i;switch(t.finishedWork=d,t.finishedLanes=u,r){case 0:case 1:throw Error(v(345));case 2:case 5:bi(t,St,bl);break;case 3:if(Al(t,u),(130023424&u)===u&&10<(r=Y2+500-cn())){if(rl(t,0)!==0)break;if(((d=t.suspendedLanes)&u)!==u){rt(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=t2(bi.bind(null,t,St,bl),r);break}bi(t,St,bl);break;case 4:if(Al(t,u),(4194240&u)===u)break;for(r=t.eventTimes,d=-1;0<u;){var g=31-Wn(u);p=1<<g,(g=r[g])>d&&(d=g),u&=~p}if(u=d,10<(u=(120>(u=cn()-u)?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*l7(u/1960))-u)){t.timeoutHandle=t2(bi.bind(null,t,St,bl),u);break}bi(t,St,bl);break;default:throw Error(v(329))}}}return ft(t,cn()),t.callbackNode===i?wf.bind(null,t):null}function X2(t,r){var i=Ko;return t.current.memoizedState.isDehydrated&&(Na(t,r).flags|=256),(t=$u(t,r))!==2&&(r=St,St=i,r!==null&&$2(r)),t}function $2(t){St===null?St=t:St.push.apply(St,t)}function Al(t,r){for(r&=~Z2,r&=~Qu,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var i=31-Wn(r),u=1<<i;t[i]=-1,r&=~u}}function Cf(t){if(6&Ze)throw Error(v(327));Ei();var r=rl(t,0);if(!(1&r))return ft(t,cn()),null;var i=$u(t,r);if(t.tag!==0&&i===2){var u=dr(t);u!==0&&(r=u,i=X2(t,u))}if(i===1)throw i=Go,Na(t,0),Al(t,r),ft(t,cn()),i;if(i===6)throw Error(v(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,bi(t,St,bl),ft(t,cn()),null}function J2(t,r){var i=Ze;Ze|=1;try{return t(r)}finally{(Ze=i)===0&&(Ci=cn()+500,ku&&yl())}}function Aa(t){kl!==null&&kl.tag===0&&!(6&Ze)&&Ei();var r=Ze;Ze|=1;var i=Bt.transition,u=We;try{if(Bt.transition=null,We=1,t)return t()}finally{We=u,Bt.transition=i,!(6&(Ze=r))&&yl()}}function q2(){kt=wi.current,on(wi)}function Na(t,r){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,U8(i)),En!==null)for(i=En.return;i!==null;){var u=i;switch(u2(u),u.tag){case 1:(u=u.type.childContextTypes)!=null&&i2();break;case 3:vi(),on(ct),on(Qn),k2();break;case 5:b2(u);break;case 4:vi();break;case 13:case 19:on(gn);break;case 10:h2(u.type._context);break;case 22:case 23:q2()}i=i.return}if(Mn=t,En=t=Nl(t.current,null),_n=kt=r,Nn=0,Go=null,Z2=Qu=Sa=0,St=Ko=null,ba!==null){for(r=0;r<ba.length;r++)if((u=(i=ba[r]).interleaved)!==null){i.interleaved=null;var d=u.next,p=i.pending;if(p!==null){var g=p.next;p.next=d,u.next=g}i.pending=u}ba=null}return t}function bf(t,r){for(;;){var i=En;try{if(m2(),Ru.current=Uu,_u){for(var u=dn.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}_u=!1}if(ka=0,Tn=Pn=dn=null,Do=!1,Vo=0,Q2.current=null,i===null||i.return===null){Nn=1,Go=r,En=null;break}e:{var p=t,g=i.return,C=i,k=r;if(r=_n,C.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var T=k,R=C,V=R.tag;if(!(1&R.mode||V!==0&&V!==11&&V!==15)){var B=R.alternate;B?(R.updateQueue=B.updateQueue,R.memoizedState=B.memoizedState,R.lanes=B.lanes):(R.updateQueue=null,R.memoizedState=null)}var Q=W3(g);if(Q!==null){Q.flags&=-257,Q3(Q,g,C,0,r),1&Q.mode&&V3(p,T,r),k=T;var X=(r=Q).updateQueue;if(X===null){var ee=new Set;ee.add(k),r.updateQueue=ee}else X.add(k);break e}if(!(1&r)){V3(p,T,r),e0();break e}k=Error(v(426))}else if(sn&&1&C.mode){var D=W3(g);if(D!==null){!(65536&D.flags)&&(D.flags|=256),Q3(D,g,C,0,r),p2(yi(k,C));break e}}p=k=yi(k,C),Nn!==4&&(Nn=2),Ko===null?Ko=[p]:Ko.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r,c3(p,H3(0,k,r));break e;case 1:C=k;var P=p.type,F=p.stateNode;if(!(128&p.flags||typeof P.getDerivedStateFromError!="function"&&(F===null||typeof F.componentDidCatch!="function"||El!==null&&El.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r,c3(p,D3(p,C,r));break e}}p=p.return}while(p!==null)}Sf(i)}catch(G){r=G,En===i&&i!==null&&(En=i=i.return);continue}break}}function Ef(){var t=Wu.current;return Wu.current=Uu,t===null?Uu:t}function e0(){Nn!==0&&Nn!==3&&Nn!==2||(Nn=4),Mn===null||!(268435455&Sa)&&!(268435455&Qu)||Al(Mn,_n)}function $u(t,r){var i=Ze;Ze|=2;var u=Ef();for(Mn===t&&_n===r||(bl=null,Na(t,r));;)try{a7();break}catch(d){bf(t,d)}if(m2(),Ze=i,Wu.current=u,En!==null)throw Error(v(261));return Mn=null,_n=0,Nn}function a7(){for(;En!==null;)kf(En)}function i7(){for(;En!==null&&!_1();)kf(En)}function kf(t){var r=xf(t.alternate,t,kt);t.memoizedProps=t.pendingProps,r===null?Sf(t):En=r,Q2.current=null}function Sf(t){var r=t;do{var i=r.alternate;if(t=r.return,32768&r.flags){if((i=n7(i,r))!==null)return i.flags&=32767,void(En=i);if(t===null)return Nn=6,void(En=null);t.flags|=32768,t.subtreeFlags=0,t.deletions=null}else if((i=e7(i,r,kt))!==null)return void(En=i);if((r=r.sibling)!==null)return void(En=r);En=r=t}while(r!==null);Nn===0&&(Nn=5)}function bi(t,r,i){var u=We,d=Bt.transition;try{Bt.transition=null,We=1,function(p,g,C,k){do Ei();while(kl!==null);if(6&Ze)throw Error(v(327));C=p.finishedWork;var T=p.finishedLanes;if(C===null)return null;if(p.finishedWork=null,p.finishedLanes=0,C===p.current)throw Error(v(177));p.callbackNode=null,p.callbackPriority=0;var R=C.lanes|C.childLanes;if(function(Q,X){var ee=Q.pendingLanes&~X;Q.pendingLanes=X,Q.suspendedLanes=0,Q.pingedLanes=0,Q.expiredLanes&=X,Q.mutableReadLanes&=X,Q.entangledLanes&=X,X=Q.entanglements;var D=Q.eventTimes;for(Q=Q.expirationTimes;0<ee;){var P=31-Wn(ee),F=1<<P;X[P]=0,D[P]=-1,Q[P]=-1,ee&=~F}}(p,R),p===Mn&&(En=Mn=null,_n=0),!(2064&C.subtreeFlags)&&!(2064&C.flags)||Yu||(Yu=!0,Lf(xo,function(){return Ei(),null})),R=!!(15990&C.flags),15990&C.subtreeFlags||R){R=Bt.transition,Bt.transition=null;var V=We;We=1;var B=Ze;Ze|=4,Q2.current=null,function(Q,X){if(q1=Ja,Q1(Q=Op())){if("selectionStart"in Q)var ee={start:Q.selectionStart,end:Q.selectionEnd};else e:{var D=(ee=(ee=Q.ownerDocument)&&ee.defaultView||window).getSelection&&ee.getSelection();if(D&&D.rangeCount!==0){ee=D.anchorNode;var P=D.anchorOffset,F=D.focusNode;D=D.focusOffset;try{ee.nodeType,F.nodeType}catch{ee=null;break e}var G=0,ce=-1,Ie=-1,ue=0,Re=0,Pe=Q,Le=null;n:for(;;){for(var Ye;Pe!==ee||P!==0&&Pe.nodeType!==3||(ce=G+P),Pe!==F||D!==0&&Pe.nodeType!==3||(Ie=G+D),Pe.nodeType===3&&(G+=Pe.nodeValue.length),(Ye=Pe.firstChild)!==null;)Le=Pe,Pe=Ye;for(;;){if(Pe===Q)break n;if(Le===ee&&++ue===P&&(ce=G),Le===F&&++Re===D&&(Ie=G),(Ye=Pe.nextSibling)!==null)break;Le=(Pe=Le).parentNode}Pe=Ye}ee=ce===-1||Ie===-1?null:{start:ce,end:Ie}}else ee=null}ee=ee||{start:0,end:0}}else ee=null;for(e2={focusedElem:Q,selectionRange:ee},Ja=!1,pe=X;pe!==null;)if(Q=(X=pe).child,1028&X.subtreeFlags&&Q!==null)Q.return=X,pe=Q;else for(;pe!==null;){X=pe;try{var ki=X.alternate;if(1024&X.flags)switch(X.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(ki!==null){var zf=ki.memoizedProps,m7=ki.memoizedState,Rf=X.stateNode,h7=Rf.getSnapshotBeforeUpdate(X.elementType===X.type?zf:er(X.type,zf),m7);Rf.__reactInternalSnapshotBeforeUpdate=h7}break;case 3:var Si=X.stateNode.containerInfo;Si.nodeType===1?Si.textContent="":Si.nodeType===9&&Si.documentElement&&Si.removeChild(Si.documentElement);break;default:throw Error(v(163))}}catch(_f){vn(X,X.return,_f)}if((Q=X.sibling)!==null){Q.return=X.return,pe=Q;break}pe=X.return}ki=sf,sf=!1}(p,C),mf(C,p),z8(e2),Ja=!!q1,e2=q1=null,p.current=C,r7(C,p,T),O1(),Ze=B,We=V,Bt.transition=R}else p.current=C;if(Yu&&(Yu=!1,kl=p,Gu=T),(R=p.pendingLanes)===0&&(El=null),function(Q){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Ya,Q,void 0,!(128&~Q.current.flags))}catch{}}(C.stateNode),ft(p,cn()),g!==null)for(k=p.onRecoverableError,C=0;C<g.length;C++)k((T=g[C]).value,{componentStack:T.stack,digest:T.digest});if(Zu)throw Zu=!1,p=G2,G2=null,p;1&Gu&&p.tag!==0&&Ei(),1&(R=p.pendingLanes)?p===K2?Xo++:(Xo=0,K2=p):Xo=0,yl()}(t,r,i,u)}finally{Bt.transition=d,We=u}return null}function Ei(){if(kl!==null){var t=iu(Gu),r=Bt.transition,i=We;try{if(Bt.transition=null,We=16>t?16:t,kl===null)var u=!1;else{if(t=kl,kl=null,Gu=0,6&Ze)throw Error(v(331));var d=Ze;for(Ze|=4,pe=t.current;pe!==null;){var p=pe,g=p.child;if(16&pe.flags){var C=p.deletions;if(C!==null){for(var k=0;k<C.length;k++){var T=C[k];for(pe=T;pe!==null;){var R=pe;switch(R.tag){case 0:case 11:case 15:Yo(8,R,p)}var V=R.child;if(V!==null)V.return=R,pe=V;else for(;pe!==null;){var B=(R=pe).sibling,Q=R.return;if(uf(R),R===T){pe=null;break}if(B!==null){B.return=Q,pe=B;break}pe=Q}}}var X=p.alternate;if(X!==null){var ee=X.child;if(ee!==null){X.child=null;do{var D=ee.sibling;ee.sibling=null,ee=D}while(ee!==null)}}pe=p}}if(2064&p.subtreeFlags&&g!==null)g.return=p,pe=g;else e:for(;pe!==null;){if(2048&(p=pe).flags)switch(p.tag){case 0:case 11:case 15:Yo(9,p,p.return)}var P=p.sibling;if(P!==null){P.return=p.return,pe=P;break e}pe=p.return}}var F=t.current;for(pe=F;pe!==null;){var G=(g=pe).child;if(2064&g.subtreeFlags&&G!==null)G.return=g,pe=G;else e:for(g=F;pe!==null;){if(2048&(C=pe).flags)try{switch(C.tag){case 0:case 11:case 15:Vu(9,C)}}catch(Ie){vn(C,C.return,Ie)}if(C===g){pe=null;break e}var ce=C.sibling;if(ce!==null){ce.return=C.return,pe=ce;break e}pe=C.return}}if(Ze=d,yl(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Ya,t)}catch{}u=!0}return u}finally{We=i,Bt.transition=r}}return!1}function Af(t,r,i){t=wl(t,r=H3(0,r=yi(i,r),1),1),r=rt(),t!==null&&(da(t,1,r),ft(t,r))}function vn(t,r,i){if(t.tag===3)Af(t,t,i);else for(;r!==null;){if(r.tag===3){Af(r,t,i);break}if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(El===null||!El.has(u))){r=wl(r,t=D3(r,t=yi(i,t),1),1),t=rt(),r!==null&&(da(r,1,t),ft(r,t));break}}r=r.return}}function o7(t,r,i){var u=t.pingCache;u!==null&&u.delete(r),r=rt(),t.pingedLanes|=t.suspendedLanes&i,Mn===t&&(_n&i)===i&&(Nn===4||Nn===3&&(130023424&_n)===_n&&500>cn()-Y2?Na(t,0):Z2|=i),ft(t,r)}function Nf(t,r){r===0&&(1&t.mode?(r=ua,!(130023424&(ua<<=1))&&(ua=4194304)):r=1);var i=rt();(t=Or(t,r))!==null&&(da(t,r,i),ft(t,i))}function s7(t){var r=t.memoizedState,i=0;r!==null&&(i=r.retryLane),Nf(t,i)}function u7(t,r){var i=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(v(314))}u!==null&&u.delete(r),Nf(t,i)}function Lf(t,r){return tu(t,r)}function c7(t,r,i,u){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,r,i,u){return new c7(t,r,i,u)}function n0(t){return!(!(t=t.prototype)||!t.isReactComponent)}function Nl(t,r){var i=t.alternate;return i===null?((i=Ht(t.tag,r,t.key,t.mode)).elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=r,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=14680064&t.flags,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,r=t.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Ju(t,r,i,u,d,p){var g=2;if(u=t,typeof t=="function")n0(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case ln:return La(i.children,d,p,r);case Cn:g=8,d|=8;break;case Bn:return(t=Ht(12,i,r,2|d)).elementType=Bn,t.lanes=p,t;case le:return(t=Ht(13,i,r,d)).elementType=le,t.lanes=p,t;case ve:return(t=Ht(19,i,r,d)).elementType=ve,t.lanes=p,t;case _e:return qu(i,d,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hn:g=10;break e;case Dn:g=9;break e;case Vn:g=11;break e;case Ae:g=14;break e;case ke:g=16,u=null;break e}throw Error(v(130,t==null?t:typeof t,""))}return(r=Ht(g,i,r,d)).elementType=t,r.type=u,r.lanes=p,r}function La(t,r,i,u){return(t=Ht(7,t,u,r)).lanes=i,t}function qu(t,r,i,u){return(t=Ht(22,t,u,r)).elementType=_e,t.lanes=i,t.stateNode={isHidden:!1},t}function t0(t,r,i){return(t=Ht(6,t,null,r)).lanes=i,t}function r0(t,r,i){return(r=Ht(4,t.children!==null?t.children:[],t.key,r)).lanes=i,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function d7(t,r,i,u,d){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pr(0),this.expirationTimes=pr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pr(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function l0(t,r,i,u,d,p,g,C,k){return t=new d7(t,r,i,C,k),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Ht(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},y2(p),t}function jf(t){if(!t)return vl;e:{if(Lr(t=t._reactInternals)!==t||t.tag!==1)throw Error(v(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ct(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(v(171))}if(t.tag===1){var i=t.type;if(Ct(i))return e3(t,i,r)}return r}function Pf(t,r,i,u,d,p,g,C,k){return(t=l0(i,u,!0,t,0,p,0,C,k)).context=jf(null),i=t.current,(p=Fr(u=rt(),d=Sl(i))).callback=r??null,wl(i,p,d),t.current.lanes=d,da(t,d,u),ft(t,u),t}function ec(t,r,i,u){var d=r.current,p=rt(),g=Sl(d);return i=jf(i),r.context===null?r.context=i:r.pendingContext=i,(r=Fr(p,g)).payload={element:t},(u=u===void 0?null:u)!==null&&(r.callback=u),(t=wl(d,r,g))!==null&&(nr(t,d,g,p),Pu(t,d,g)),g}function nc(t){return(t=t.current).child?(t.child.tag,t.child.stateNode):null}function Tf(t,r){if((t=t.memoizedState)!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<r?i:r}}function a0(t,r){Tf(t,r),(t=t.alternate)&&Tf(t,r)}xf=function(t,r,i){if(t!==null)if(t.memoizedProps!==r.pendingProps||ct.current)dt=!0;else{if(!(t.lanes&i||128&r.flags))return dt=!1,function(V,B,Q){switch(B.tag){case 3:J3(B),fi();break;case 5:x3(B);break;case 1:Ct(B.type)&&Eu(B);break;case 4:C2(B,B.stateNode.containerInfo);break;case 10:var X=B.type._context,ee=B.memoizedProps.value;qe(Lu,X._currentValue),X._currentValue=ee;break;case 13:if((X=B.memoizedState)!==null)return X.dehydrated!==null?(qe(gn,1&gn.current),B.flags|=128,null):Q&B.child.childLanes?rf(V,B,Q):(qe(gn,1&gn.current),(V=Ur(V,B,Q))!==null?V.sibling:null);qe(gn,1&gn.current);break;case 19:if(X=!!(Q&B.childLanes),128&V.flags){if(X)return af(V,B,Q);B.flags|=128}if((ee=B.memoizedState)!==null&&(ee.rendering=null,ee.tail=null,ee.lastEffect=null),qe(gn,gn.current),X)break;return null;case 22:case 23:return B.lanes=0,K3(V,B,Q)}return Ur(V,B,Q)}(t,r,i);dt=!!(131072&t.flags)}else dt=!1,sn&&1048576&r.flags&&r3(r,Au,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Hu(t,r),t=r.pendingProps;var d=ci(r,Qn.current);hi(r,i),d=N2(null,r,u,t,d,i);var p=L2();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ct(u)?(p=!0,Eu(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,y2(r),d.updater=Mu,r.stateNode=d,d._reactInternals=r,w2(r,u,t,i),r=_2(null,r,u,!0,p,i)):(r.tag=0,sn&&p&&s2(r),pt(null,r,d,i),r=r.child),r;case 16:u=r.elementType;e:{switch(Hu(t,r),t=r.pendingProps,u=(d=u._init)(u._payload),r.type=u,d=r.tag=function(V){if(typeof V=="function")return n0(V)?1:0;if(V!=null){if((V=V.$$typeof)===Vn)return 11;if(V===Ae)return 14}return 2}(u),t=er(u,t),d){case 0:r=R2(null,r,u,t,i);break e;case 1:r=$3(null,r,u,t,i);break e;case 11:r=Z3(null,r,u,t,i);break e;case 14:r=Y3(null,r,u,er(u.type,t),i);break e}throw Error(v(306,u,""))}return r;case 0:return u=r.type,d=r.pendingProps,R2(t,r,u,d=r.elementType===u?d:er(u,d),i);case 1:return u=r.type,d=r.pendingProps,$3(t,r,u,d=r.elementType===u?d:er(u,d),i);case 3:e:{if(J3(r),t===null)throw Error(v(387));u=r.pendingProps,d=(p=r.memoizedState).element,u3(t,r),Tu(r,u,null,i);var g=r.memoizedState;if(u=g.element,p.isDehydrated){if(p={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=p,r.memoizedState=p,256&r.flags){r=q3(t,r,u,i,d=yi(Error(v(423)),r));break e}if(u!==d){r=q3(t,r,u,i,d=yi(Error(v(424)),r));break e}for(Et=hl(r.stateNode.containerInfo.firstChild),bt=r,sn=!0,qt=null,i=y3(r,null,u,i),r.child=i;i;)i.flags=-3&i.flags|4096,i=i.sibling}else{if(fi(),u===d){r=Ur(t,r,i);break e}pt(t,r,u,i)}r=r.child}return r;case 5:return x3(r),t===null&&d2(r),u=r.type,d=r.pendingProps,p=t!==null?t.memoizedProps:null,g=d.children,n2(u,d)?g=null:p!==null&&n2(u,p)&&(r.flags|=32),X3(t,r),pt(t,r,g,i),r.child;case 6:return t===null&&d2(r),null;case 13:return rf(t,r,i);case 4:return C2(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=gi(r,null,u,i):pt(t,r,u,i),r.child;case 11:return u=r.type,d=r.pendingProps,Z3(t,r,u,d=r.elementType===u?d:er(u,d),i);case 7:return pt(t,r,r.pendingProps,i),r.child;case 8:case 12:return pt(t,r,r.pendingProps.children,i),r.child;case 10:e:{if(u=r.type._context,d=r.pendingProps,p=r.memoizedProps,g=d.value,qe(Lu,u._currentValue),u._currentValue=g,p!==null)if(Jt(p.value,g)){if(p.children===d.children&&!ct.current){r=Ur(t,r,i);break e}}else for((p=r.child)!==null&&(p.return=r);p!==null;){var C=p.dependencies;if(C!==null){g=p.child;for(var k=C.firstContext;k!==null;){if(k.context===u){if(p.tag===1){(k=Fr(-1,i&-i)).tag=2;var T=p.updateQueue;if(T!==null){var R=(T=T.shared).pending;R===null?k.next=k:(k.next=R.next,R.next=k),T.pending=k}}p.lanes|=i,(k=p.alternate)!==null&&(k.lanes|=i),g2(p.return,i,r),C.lanes|=i;break}k=k.next}}else if(p.tag===10)g=p.type===r.type?null:p.child;else if(p.tag===18){if((g=p.return)===null)throw Error(v(341));g.lanes|=i,(C=g.alternate)!==null&&(C.lanes|=i),g2(g,i,r),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===r){g=null;break}if((p=g.sibling)!==null){p.return=g.return,g=p;break}g=g.return}p=g}pt(t,r,d.children,i),r=r.child}return r;case 9:return d=r.type,u=r.pendingProps.children,hi(r,i),u=u(d=Ft(d)),r.flags|=1,pt(t,r,u,i),r.child;case 14:return d=er(u=r.type,r.pendingProps),Y3(t,r,u,d=er(u.type,d),i);case 15:return G3(t,r,r.type,r.pendingProps,i);case 17:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:er(u,d),Hu(t,r),r.tag=1,Ct(u)?(t=!0,Eu(r)):t=!1,hi(r,i),m3(r,u,d),w2(r,u,d,i),_2(null,r,u,!0,t,i);case 19:return af(t,r,i);case 22:return K3(t,r,i)}throw Error(v(156,r.tag))};var Mf=typeof reportError=="function"?reportError:function(t){console.error(t)};function i0(t){this._internalRoot=t}function tc(t){this._internalRoot=t}function o0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function If(){}function lc(t,r,i,u,d){var p=i._reactRootContainer;if(p){var g=p;if(typeof d=="function"){var C=d;d=function(){var k=nc(g);C.call(k)}}ec(r,g,t,d)}else g=function(k,T,R,V,B){if(B){if(typeof V=="function"){var Q=V;V=function(){var P=nc(X);Q.call(P)}}var X=Pf(T,V,k,0,null,!1,0,"",If);return k._reactRootContainer=X,k[zr]=X.current,zo(k.nodeType===8?k.parentNode:k),Aa(),X}for(;B=k.lastChild;)k.removeChild(B);if(typeof V=="function"){var ee=V;V=function(){var P=nc(D);ee.call(P)}}var D=l0(k,0,!1,null,0,!1,0,"",If);return k._reactRootContainer=D,k[zr]=D.current,zo(k.nodeType===8?k.parentNode:k),Aa(function(){ec(T,D,R,V)}),D}(i,r,t,d,u);return nc(g)}tc.prototype.render=i0.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(v(409));ec(t,r,null,null)},tc.prototype.unmount=i0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Aa(function(){ec(null,t,null,null)}),r[zr]=null}},tc.prototype.unstable_scheduleHydration=function(t){if(t){var r=uu();t={blockedOn:null,target:t,priority:r};for(var i=0;i<fr.length&&r!==0&&r<fr[i].priority;i++);fr.splice(i,0,t),i===0&&Ao(t)}},ou=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var i=ca(r.pendingLanes);i!==0&&(bo(r,1|i),ft(r,cn()),!(6&Ze)&&(Ci=cn()+500,yl()))}break;case 13:Aa(function(){var u=Or(t,1);if(u!==null){var d=rt();nr(u,t,1,d)}}),a0(t,1)}},Eo=function(t){if(t.tag===13){var r=Or(t,134217728);r!==null&&nr(r,t,134217728,rt()),a0(t,134217728)}},su=function(t){if(t.tag===13){var r=Sl(t),i=Or(t,r);i!==null&&nr(i,t,r,rt()),a0(t,r)}},uu=function(){return We},cu=function(t,r){var i=We;try{return We=t,r()}finally{We=i}},Wa=function(t,r,i){switch(r){case"input":if(oo(t,i),r=i.name,i.type==="radio"&&r!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var u=i[r];if(u!==t&&u.form===t.form){var d=bu(u);if(!d)throw Error(v(90));$r(u),oo(u,d)}}}break;case"textarea":co(t,i);break;case"select":(r=i.value)!=null&&Ar(t,!!i.multiple,r,!1)}},Kt=J2,Js=Aa;var p7={usingClientEntryPoint:!1,Events:[Oo,si,bu,Gt,$s,J2]},$o={findFiberByHostInstance:ya,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f7={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return(t=nu(t))===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Ya=ac.inject(f7),zt=ac}catch{}}a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p7,a.createPortal=function(t,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!o0(r))throw Error(v(200));return function(u,d,p){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ge,key:g==null?null:""+g,children:u,containerInfo:d,implementation:p}}(t,r,null,i)},a.createRoot=function(t,r){if(!o0(t))throw Error(v(299));var i=!1,u="",d=Mf;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=l0(t,1,!1,null,0,i,0,u,d),t[zr]=r.current,zo(t.nodeType===8?t.parentNode:t),new i0(r)},a.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return(t=nu(r))===null?null:t.stateNode},a.flushSync=function(t){return Aa(t)},a.hydrate=function(t,r,i){if(!rc(r))throw Error(v(200));return lc(null,t,r,!0,i)},a.hydrateRoot=function(t,r,i){if(!o0(t))throw Error(v(405));var u=i!=null&&i.hydratedSources||null,d=!1,p="",g=Mf;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),r=Pf(r,null,t,1,i??null,d,0,p,g),t[zr]=r.current,zo(t),u)for(t=0;t<u.length;t++)d=(d=(i=u[t])._getVersion)(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,d]:r.mutableSourceEagerHydrationData.push(i,d);return new tc(r)},a.render=function(t,r,i){if(!rc(r))throw Error(v(200));return lc(null,t,r,!1,i)},a.unmountComponentAtNode=function(t){if(!rc(t))throw Error(v(40));return!!t._reactRootContainer&&(Aa(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[zr]=null})}),!0)},a.unstable_batchedUpdates=J2,a.unstable_renderSubtreeIntoContainer=function(t,r,i,u){if(!rc(i))throw Error(v(200));if(t==null||t._reactInternals===void 0)throw Error(v(38));return lc(t,r,i,!1,u)},a.version="18.2.0-next-9e3b772b8-20220608"},5338:(c,a,f)=>{var h=f(961);a.createRoot=h.createRoot,a.hydrateRoot=h.hydrateRoot},961:(c,a,f)=>{(function h(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE=="function")try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(y){console.error(y)}})(),c.exports=f(2551)},5287:(c,a)=>{var f=Symbol.for("react.element"),h=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),M=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),$=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator,N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,K={};function ie(j,Y,q){this.props=j,this.context=Y,this.refs=K,this.updater=q||N}function se(){}function de(j,Y,q){this.props=j,this.context=Y,this.refs=K,this.updater=q||N}ie.prototype.isReactComponent={},ie.prototype.setState=function(j,Y){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Y,"setState")},ie.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")},se.prototype=ie.prototype;var Te=de.prototype=new se;Te.constructor=de,z(Te,ie.prototype),Te.isPureReactComponent=!0;var Ce=Array.isArray,Ge=Object.prototype.hasOwnProperty,ln={current:null},Cn={key:!0,ref:!0,__self:!0,__source:!0};function Bn(j,Y,q){var he,xe={},He=null,Ve=null;if(Y!=null)for(he in Y.ref!==void 0&&(Ve=Y.ref),Y.key!==void 0&&(He=""+Y.key),Y)Ge.call(Y,he)&&!Cn.hasOwnProperty(he)&&(xe[he]=Y[he]);var Fe=arguments.length-2;if(Fe===1)xe.children=q;else if(1<Fe){for(var Ue=Array(Fe),je=0;je<Fe;je++)Ue[je]=arguments[je+2];xe.children=Ue}if(j&&j.defaultProps)for(he in Fe=j.defaultProps)xe[he]===void 0&&(xe[he]=Fe[he]);return{$$typeof:f,type:j,key:He,ref:Ve,props:xe,_owner:ln.current}}function Hn(j){return typeof j=="object"&&j!==null&&j.$$typeof===f}var Dn=/\/+/g;function Vn(j,Y){return typeof j=="object"&&j!==null&&j.key!=null?function(q){var he={"=":"=0",":":"=2"};return"$"+q.replace(/[=:]/g,function(xe){return he[xe]})}(""+j.key):Y.toString(36)}function le(j,Y,q,he,xe){var He=typeof j;He!=="undefined"&&He!=="boolean"||(j=null);var Ve=!1;if(j===null)Ve=!0;else switch(He){case"string":case"number":Ve=!0;break;case"object":switch(j.$$typeof){case f:case h:Ve=!0}}if(Ve)return xe=xe(Ve=j),j=he===""?"."+Vn(Ve,0):he,Ce(xe)?(q="",j!=null&&(q=j.replace(Dn,"$&/")+"/"),le(xe,Y,q,"",function(je){return je})):xe!=null&&(Hn(xe)&&(xe=function(je,ql){return{$$typeof:f,type:je.type,key:ql,ref:je.ref,props:je.props,_owner:je._owner}}(xe,q+(!xe.key||Ve&&Ve.key===xe.key?"":(""+xe.key).replace(Dn,"$&/")+"/")+j)),Y.push(xe)),1;if(Ve=0,he=he===""?".":he+":",Ce(j))for(var Fe=0;Fe<j.length;Fe++){var Ue=he+Vn(He=j[Fe],Fe);Ve+=le(He,Y,q,Ue,xe)}else if(Ue=function(je){return je===null||typeof je!="object"?null:typeof(je=w&&je[w]||je["@@iterator"])=="function"?je:null}(j),typeof Ue=="function")for(j=Ue.call(j),Fe=0;!(He=j.next()).done;)Ve+=le(He=He.value,Y,q,Ue=he+Vn(He,Fe++),xe);else if(He==="object")throw Y=String(j),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Ve}function ve(j,Y,q){if(j==null)return j;var he=[],xe=0;return le(j,he,"","",function(He){return Y.call(q,He,xe++)}),he}function Ae(j){if(j._status===-1){var Y=j._result;(Y=Y()).then(function(q){j._status!==0&&j._status!==-1||(j._status=1,j._result=q)},function(q){j._status!==0&&j._status!==-1||(j._status=2,j._result=q)}),j._status===-1&&(j._status=0,j._result=Y)}if(j._status===1)return j._result.default;throw j._result}var ke={current:null},_e={transition:null},Jn={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:_e,ReactCurrentOwner:ln};a.Children={map:ve,forEach:function(j,Y,q){ve(j,function(){Y.apply(this,arguments)},q)},count:function(j){var Y=0;return ve(j,function(){Y++}),Y},toArray:function(j){return ve(j,function(Y){return Y})||[]},only:function(j){if(!Hn(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},a.Component=ie,a.Fragment=y,a.Profiler=S,a.PureComponent=de,a.StrictMode=v,a.Suspense=U,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jn,a.cloneElement=function(j,Y,q){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var he=z({},j.props),xe=j.key,He=j.ref,Ve=j._owner;if(Y!=null){if(Y.ref!==void 0&&(He=Y.ref,Ve=ln.current),Y.key!==void 0&&(xe=""+Y.key),j.type&&j.type.defaultProps)var Fe=j.type.defaultProps;for(Ue in Y)Ge.call(Y,Ue)&&!Cn.hasOwnProperty(Ue)&&(he[Ue]=Y[Ue]===void 0&&Fe!==void 0?Fe[Ue]:Y[Ue])}var Ue=arguments.length-2;if(Ue===1)he.children=q;else if(1<Ue){Fe=Array(Ue);for(var je=0;je<Ue;je++)Fe[je]=arguments[je+2];he.children=Fe}return{$$typeof:f,type:j.type,key:xe,ref:He,props:he,_owner:Ve}},a.createContext=function(j){return(j={$$typeof:M,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:A,_context:j},j.Consumer=j},a.createElement=Bn,a.createFactory=function(j){var Y=Bn.bind(null,j);return Y.type=j,Y},a.createRef=function(){return{current:null}},a.forwardRef=function(j){return{$$typeof:_,render:j}},a.isValidElement=Hn,a.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:Ae}},a.memo=function(j,Y){return{$$typeof:$,type:j,compare:Y===void 0?null:Y}},a.startTransition=function(j){var Y=_e.transition;_e.transition={};try{j()}finally{_e.transition=Y}},a.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},a.useCallback=function(j,Y){return ke.current.useCallback(j,Y)},a.useContext=function(j){return ke.current.useContext(j)},a.useDebugValue=function(){},a.useDeferredValue=function(j){return ke.current.useDeferredValue(j)},a.useEffect=function(j,Y){return ke.current.useEffect(j,Y)},a.useId=function(){return ke.current.useId()},a.useImperativeHandle=function(j,Y,q){return ke.current.useImperativeHandle(j,Y,q)},a.useInsertionEffect=function(j,Y){return ke.current.useInsertionEffect(j,Y)},a.useLayoutEffect=function(j,Y){return ke.current.useLayoutEffect(j,Y)},a.useMemo=function(j,Y){return ke.current.useMemo(j,Y)},a.useReducer=function(j,Y,q){return ke.current.useReducer(j,Y,q)},a.useRef=function(j){return ke.current.useRef(j)},a.useState=function(j){return ke.current.useState(j)},a.useSyncExternalStore=function(j,Y,q){return ke.current.useSyncExternalStore(j,Y,q)},a.useTransition=function(){return ke.current.useTransition()},a.version="18.2.0"},6540:(c,a,f)=>{c.exports=f(5287)},7463:(c,a)=>{function f(j,Y){var q=j.length;j.push(Y);e:for(;0<q;){var he=q-1>>>1,xe=j[he];if(!(0<v(xe,Y)))break e;j[he]=Y,j[q]=xe,q=he}}function h(j){return j.length===0?null:j[0]}function y(j){if(j.length===0)return null;var Y=j[0],q=j.pop();if(q!==Y){j[0]=q;e:for(var he=0,xe=j.length,He=xe>>>1;he<He;){var Ve=2*(he+1)-1,Fe=j[Ve],Ue=Ve+1,je=j[Ue];if(0>v(Fe,q))Ue<xe&&0>v(je,Fe)?(j[he]=je,j[Ue]=q,he=Ue):(j[he]=Fe,j[Ve]=q,he=Ve);else{if(!(Ue<xe&&0>v(je,q)))break e;j[he]=je,j[Ue]=q,he=Ue}}}return Y}function v(j,Y){var q=j.sortIndex-Y.sortIndex;return q!==0?q:j.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var S=performance;a.unstable_now=function(){return S.now()}}else{var A=Date,M=A.now();a.unstable_now=function(){return A.now()-M}}var _=[],U=[],$=1,b=null,w=3,N=!1,z=!1,K=!1,ie=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function Te(j){for(var Y=h(U);Y!==null;){if(Y.callback===null)y(U);else{if(!(Y.startTime<=j))break;y(U),Y.sortIndex=Y.expirationTime,f(_,Y)}Y=h(U)}}function Ce(j){if(K=!1,Te(j),!z)if(h(_)!==null)z=!0,_e(Ge);else{var Y=h(U);Y!==null&&Jn(Ce,Y.startTime-j)}}function Ge(j,Y){z=!1,K&&(K=!1,se(Hn),Hn=-1),N=!0;var q=w;try{for(Te(Y),b=h(_);b!==null&&(!(b.expirationTime>Y)||j&&!le());){var he=b.callback;if(typeof he=="function"){b.callback=null,w=b.priorityLevel;var xe=he(b.expirationTime<=Y);Y=a.unstable_now(),typeof xe=="function"?b.callback=xe:b===h(_)&&y(_),Te(Y)}else y(_);b=h(_)}if(b!==null)var He=!0;else{var Ve=h(U);Ve!==null&&Jn(Ce,Ve.startTime-Y),He=!1}return He}finally{b=null,w=q,N=!1}}typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var ln,Cn=!1,Bn=null,Hn=-1,Dn=5,Vn=-1;function le(){return!(a.unstable_now()-Vn<Dn)}function ve(){if(Bn!==null){var j=a.unstable_now();Vn=j;var Y=!0;try{Y=Bn(!0,j)}finally{Y?ln():(Cn=!1,Bn=null)}}else Cn=!1}if(typeof de=="function")ln=function(){de(ve)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,ke=Ae.port2;Ae.port1.onmessage=ve,ln=function(){ke.postMessage(null)}}else ln=function(){ie(ve,0)};function _e(j){Bn=j,Cn||(Cn=!0,ln())}function Jn(j,Y){Hn=ie(function(){j(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_continueExecution=function(){z||N||(z=!0,_e(Ge))},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dn=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_getFirstCallbackNode=function(){return h(_)},a.unstable_next=function(j){switch(w){case 1:case 2:case 3:var Y=3;break;default:Y=w}var q=w;w=Y;try{return j()}finally{w=q}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(j,Y){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var q=w;w=j;try{return Y()}finally{w=q}},a.unstable_scheduleCallback=function(j,Y,q){var he=a.unstable_now();switch(q=typeof q=="object"&&q!==null&&typeof(q=q.delay)=="number"&&0<q?he+q:he,j){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return j={id:$++,callback:Y,priorityLevel:j,startTime:q,expirationTime:xe=q+xe,sortIndex:-1},q>he?(j.sortIndex=q,f(U,j),h(_)===null&&j===h(U)&&(K?(se(Hn),Hn=-1):K=!0,Jn(Ce,q-he))):(j.sortIndex=xe,f(_,j),z||N||(z=!0,_e(Ge))),j},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(j){var Y=w;return function(){var q=w;w=Y;try{return j.apply(this,arguments)}finally{w=q}}}},9982:(c,a,f)=>{c.exports=f(7463)},5072:c=>{var a=[];function f(v){for(var S=-1,A=0;A<a.length;A++)if(a[A].identifier===v){S=A;break}return S}function h(v,S){for(var A={},M=[],_=0;_<v.length;_++){var U=v[_],$=S.base?U[0]+S.base:U[0],b=A[$]||0,w="".concat($," ").concat(b);A[$]=b+1;var N=f(w),z={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(N!==-1)a[N].references++,a[N].updater(z);else{var K=y(z,S);S.byIndex=_,a.splice(_,0,{identifier:w,updater:K,references:1})}M.push(w)}return M}function y(v,S){var A=S.domAPI(S);return A.update(v),function(M){if(M){if(M.css===v.css&&M.media===v.media&&M.sourceMap===v.sourceMap&&M.supports===v.supports&&M.layer===v.layer)return;A.update(v=M)}else A.remove()}}c.exports=function(v,S){var A=h(v=v||[],S=S||{});return function(M){M=M||[];for(var _=0;_<A.length;_++){var U=f(A[_]);a[U].references--}for(var $=h(M,S),b=0;b<A.length;b++){var w=f(A[b]);a[w].references===0&&(a[w].updater(),a.splice(w,1))}A=$}}},7659:c=>{var a={};c.exports=function(f,h){var y=function(v){if(a[v]===void 0){var S=document.querySelector(v);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch{S=null}a[v]=S}return a[v]}(f);if(!y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");y.appendChild(h)}},540:c=>{c.exports=function(a){var f=document.createElement("style");return a.setAttributes(f,a.attributes),a.insert(f,a.options),f}},5056:(c,a,f)=>{c.exports=function(h){var y=f.nc;y&&h.setAttribute("nonce",y)}},7825:c=>{c.exports=function(a){if(typeof document>"u")return{update:function(){},remove:function(){}};var f=a.insertStyleElement(a);return{update:function(h){(function(y,v,S){var A="";S.supports&&(A+="@supports (".concat(S.supports,") {")),S.media&&(A+="@media ".concat(S.media," {"));var M=S.layer!==void 0;M&&(A+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),A+=S.css,M&&(A+="}"),S.media&&(A+="}"),S.supports&&(A+="}");var _=S.sourceMap;_&&typeof btoa<"u"&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),v.styleTagTransform(A,y,v.options)})(f,a,h)},remove:function(){(function(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h)})(f)}}}},1113:c=>{c.exports=function(a,f){if(f.styleSheet)f.styleSheet.cssText=a;else{for(;f.firstChild;)f.removeChild(f.firstChild);f.appendChild(document.createTextNode(a))}}},319:(c,a,f)=>{c.exports=f.p+"images/Polygon.dc69f38c00fcbc3c0702.png"},5972:(c,a,f)=>{c.exports=f.p+"images/Polygon3.08e0bda7bb72b3cdea17.png"},4076:(c,a,f)=>{c.exports=f.p+"fonts/KoHo-Bold.0a93fad2b57e407c6be3.ttf"},993:(c,a,f)=>{c.exports=f.p+"fonts/Oswald-VariableFont_wght.7cecd0da606d25b0905d.ttf"},1379:(c,a,f)=>{c.exports=f.p+"fonts/Poppins-Light.7641a0f76ca9ef6c252c.ttf"},4276:(c,a,f)=>{c.exports=f.p+"fonts/Poppins-Medium.673ed42382ab264e0bf5.ttf"},7155:(c,a,f)=>{c.exports=f.p+"fonts/PortLligatSans-Regular.5b2f4e2a921012d7abe1.ttf"}},o={};function s(c){var a=o[c];if(a!==void 0)return a.exports;var f=o[c]={id:c,exports:{}};return l[c](f,f.exports,s),f.exports}s.m=l,s.n=c=>{var a=c&&c.__esModule?()=>c.default:()=>c;return s.d(a,{a}),a},n=Object.getPrototypeOf?c=>Object.getPrototypeOf(c):c=>c.__proto__,s.t=function(c,a){if(1&a&&(c=this(c)),8&a||typeof c=="object"&&c&&(4&a&&c.__esModule||16&a&&typeof c.then=="function"))return c;var f=Object.create(null);s.r(f);var h={};e=e||[null,n({}),n([]),n(n)];for(var y=2&a&&c;typeof y=="object"&&!~e.indexOf(y);y=n(y))Object.getOwnPropertyNames(y).forEach(v=>h[v]=()=>c[v]);return h.default=()=>c,s.d(f,h),f},s.d=(c,a)=>{for(var f in a)s.o(a,f)&&!s.o(c,f)&&Object.defineProperty(c,f,{enumerable:!0,get:a[f]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(c,a)=>Object.prototype.hasOwnProperty.call(c,a),s.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},(()=>{var c;s.g.importScripts&&(c=s.g.location+"");var a=s.g.document;if(!c&&a&&(a.currentScript&&(c=a.currentScript.src),!c)){var f=a.getElementsByTagName("script");if(f.length)for(var h=f.length-1;h>-1&&(!c||!/^http(s?):/.test(c));)c=f[h--].src}if(!c)throw new Error("Automatic publicPath is not supported in this browser");c=c.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=c})(),s.b=document.baseURI||self.location.href,s.nc=void 0,(()=>{var c,a=s(6540),f=s.t(a,2),h=s(5338),y=s(961),v=s.t(y,2);function S(){return S=Object.assign?Object.assign.bind():function(x){for(var L=1;L<arguments.length;L++){var E=arguments[L];for(var I in E)Object.prototype.hasOwnProperty.call(E,I)&&(x[I]=E[I])}return x},S.apply(this,arguments)}(function(x){x.Pop="POP",x.Push="PUSH",x.Replace="REPLACE"})(c||(c={}));const A="popstate";function M(x,L){if(x===!1||x==null)throw new Error(L)}function _(x,L){if(!x){typeof console<"u"&&console.warn(L);try{throw new Error(L)}catch{}}}function U(x,L){return{usr:x.state,key:x.key,idx:L}}function $(x,L,E,I){return E===void 0&&(E=null),S({pathname:typeof x=="string"?x:x.pathname,search:"",hash:""},typeof L=="string"?w(L):L,{state:E,key:L&&L.key||I||Math.random().toString(36).substr(2,8)})}function b(x){let{pathname:L="/",search:E="",hash:I=""}=x;return E&&E!=="?"&&(L+=E.charAt(0)==="?"?E:"?"+E),I&&I!=="#"&&(L+=I.charAt(0)==="#"?I:"#"+I),L}function w(x){let L={};if(x){let E=x.indexOf("#");E>=0&&(L.hash=x.substr(E),x=x.substr(0,E));let I=x.indexOf("?");I>=0&&(L.search=x.substr(I),x=x.substr(0,I)),x&&(L.pathname=x)}return L}var N;function z(x,L,E){E===void 0&&(E="/");let I=le((typeof L=="string"?w(L):L).pathname||"/",E);if(I==null)return null;let Z=K(x);(function(te){te.sort((W,H)=>W.score!==H.score?H.score-W.score:function(O,oe){return O.length===oe.length&&O.slice(0,-1).every((ae,me)=>ae===oe[me])?O[O.length-1]-oe[oe.length-1]:0}(W.routesMeta.map(O=>O.childrenIndex),H.routesMeta.map(O=>O.childrenIndex)))})(Z);let J=null;for(let te=0;J==null&&te<Z.length;++te){let W=Vn(I);J=Hn(Z[te],W)}return J}function K(x,L,E,I){L===void 0&&(L=[]),E===void 0&&(E=[]),I===void 0&&(I="");let Z=(J,te,W)=>{let H={relativePath:W===void 0?J.path||"":W,caseSensitive:J.caseSensitive===!0,childrenIndex:te,route:J};H.relativePath.startsWith("/")&&(M(H.relativePath.startsWith(I),'Absolute route path "'+H.relativePath+'" nested under path "'+I+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),H.relativePath=H.relativePath.slice(I.length));let O=_e([I,H.relativePath]),oe=E.concat(H);J.children&&J.children.length>0&&(M(J.index!==!0,'Index routes must not have child routes. Please remove all child routes from route path "'+O+'".'),K(J.children,L,oe,O)),(J.path!=null||J.index)&&L.push({path:O,score:Bn(O,J.index),routesMeta:oe})};return x.forEach((J,te)=>{var W;if(J.path!==""&&(W=J.path)!=null&&W.includes("?"))for(let H of ie(J.path))Z(J,te,H);else Z(J,te)}),L}function ie(x){let L=x.split("/");if(L.length===0)return[];let[E,...I]=L,Z=E.endsWith("?"),J=E.replace(/\?$/,"");if(I.length===0)return Z?[J,""]:[J];let te=ie(I.join("/")),W=[];return W.push(...te.map(H=>H===""?J:[J,H].join("/"))),Z&&W.push(...te),W.map(H=>x.startsWith("/")&&H===""?"/":H)}(function(x){x.data="data",x.deferred="deferred",x.redirect="redirect",x.error="error"})(N||(N={}));const se=/^:[\w-]+$/,de=3,Te=2,Ce=1,Ge=10,ln=-2,Cn=x=>x==="*";function Bn(x,L){let E=x.split("/"),I=E.length;return E.some(Cn)&&(I+=ln),L&&(I+=Te),E.filter(Z=>!Cn(Z)).reduce((Z,J)=>Z+(se.test(J)?de:J===""?Ce:Ge),I)}function Hn(x,L){let{routesMeta:E}=x,I={},Z="/",J=[];for(let te=0;te<E.length;++te){let W=E[te],H=te===E.length-1,O=Z==="/"?L:L.slice(Z.length)||"/",oe=Dn({path:W.relativePath,caseSensitive:W.caseSensitive,end:H},O);if(!oe)return null;Object.assign(I,oe.params);let ae=W.route;J.push({params:I,pathname:_e([Z,oe.pathname]),pathnameBase:Jn(_e([Z,oe.pathnameBase])),route:ae}),oe.pathnameBase!=="/"&&(Z=_e([Z,oe.pathnameBase]))}return J}function Dn(x,L){typeof x=="string"&&(x={path:x,caseSensitive:!1,end:!0});let[E,I]=function(H,O,oe){O===void 0&&(O=!1),oe===void 0&&(oe=!0),_(H==="*"||!H.endsWith("*")||H.endsWith("/*"),'Route path "'+H+'" will be treated as if it were "'+H.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+H.replace(/\*$/,"/*")+'".');let ae=[],me="^"+H.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(ye,be,Se)=>(ae.push({paramName:be,isOptional:Se!=null}),Se?"/?([^\\/]+)?":"/([^\\/]+)"));return H.endsWith("*")?(ae.push({paramName:"*"}),me+=H==="*"||H==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):oe?me+="\\/*$":H!==""&&H!=="/"&&(me+="(?:(?=\\/|$))"),[new RegExp(me,O?void 0:"i"),ae]}(x.path,x.caseSensitive,x.end),Z=L.match(E);if(!Z)return null;let J=Z[0],te=J.replace(/(.)\/+$/,"$1"),W=Z.slice(1);return{params:I.reduce((H,O,oe)=>{let{paramName:ae,isOptional:me}=O;if(ae==="*"){let be=W[oe]||"";te=J.slice(0,J.length-be.length).replace(/(.)\/+$/,"$1")}const ye=W[oe];return H[ae]=me&&!ye?void 0:(ye||"").replace(/%2F/g,"/"),H},{}),pathname:J,pathnameBase:te,pattern:x}}function Vn(x){try{return x.split("/").map(L=>decodeURIComponent(L).replace(/\//g,"%2F")).join("/")}catch(L){return _(!1,'The URL path "'+x+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+L+")."),x}}function le(x,L){if(L==="/")return x;if(!x.toLowerCase().startsWith(L.toLowerCase()))return null;let E=L.endsWith("/")?L.length-1:L.length,I=x.charAt(E);return I&&I!=="/"?null:x.slice(E)||"/"}function ve(x,L,E,I){return"Cannot include a '"+x+"' character in a manually specified `to."+L+"` field ["+JSON.stringify(I)+"].  Please separate it out to the `to."+E+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Ae(x,L){let E=function(I){return I.filter((Z,J)=>J===0||Z.route.path&&Z.route.path.length>0)}(x);return L?E.map((I,Z)=>Z===x.length-1?I.pathname:I.pathnameBase):E.map(I=>I.pathnameBase)}function ke(x,L,E,I){let Z;I===void 0&&(I=!1),typeof x=="string"?Z=w(x):(Z=S({},x),M(!Z.pathname||!Z.pathname.includes("?"),ve("?","pathname","search",Z)),M(!Z.pathname||!Z.pathname.includes("#"),ve("#","pathname","hash",Z)),M(!Z.search||!Z.search.includes("#"),ve("#","search","hash",Z)));let J,te=x===""||Z.pathname==="",W=te?"/":Z.pathname;if(W==null)J=E;else{let ae=L.length-1;if(!I&&W.startsWith("..")){let me=W.split("/");for(;me[0]==="..";)me.shift(),ae-=1;Z.pathname=me.join("/")}J=ae>=0?L[ae]:"/"}let H=function(ae,me){me===void 0&&(me="/");let{pathname:ye,search:be="",hash:Se=""}=typeof ae=="string"?w(ae):ae;return{pathname:ye?ye.startsWith("/")?ye:function(we,Ee){let Ne=Ee.replace(/\/+$/,"").split("/");return we.split("/").forEach(De=>{De===".."?Ne.length>1&&Ne.pop():De!=="."&&Ne.push(De)}),Ne.length>1?Ne.join("/"):"/"}(ye,me):me,search:j(be),hash:Y(Se)}}(Z,J),O=W&&W!=="/"&&W.endsWith("/"),oe=(te||W===".")&&E.endsWith("/");return H.pathname.endsWith("/")||!O&&!oe||(H.pathname+="/"),H}const _e=x=>x.join("/").replace(/\/\/+/g,"/"),Jn=x=>x.replace(/\/+$/,"").replace(/^\/*/,"/"),j=x=>x&&x!=="?"?x.startsWith("?")?x:"?"+x:"",Y=x=>x&&x!=="#"?x.startsWith("#")?x:"#"+x:"",q=["post","put","patch","delete"],he=(new Set(q),["get",...q]);function xe(){return xe=Object.assign?Object.assign.bind():function(x){for(var L=1;L<arguments.length;L++){var E=arguments[L];for(var I in E)Object.prototype.hasOwnProperty.call(E,I)&&(x[I]=E[I])}return x},xe.apply(this,arguments)}new Set(he);const He=a.createContext(null),Ve=a.createContext(null),Fe=a.createContext(null),Ue=a.createContext(null),je=a.createContext({outlet:null,matches:[],isDataRoute:!1}),ql=a.createContext(null);function ur(){return a.useContext(Ue)!=null}function $r(){return ur()||M(!1),a.useContext(Ue).location}function ea(x){a.useContext(Fe).static||a.useLayoutEffect(x)}function io(){let{isDataRoute:x}=a.useContext(je);return x?function(){let{router:L}=function(J){let te=a.useContext(He);return te||M(!1),te}(Ar.UseNavigateStable),E=uo(Jr.UseNavigateStable),I=a.useRef(!1);return ea(()=>{I.current=!0}),a.useCallback(function(J,te){te===void 0&&(te={}),I.current&&(typeof J=="number"?L.navigate(J):L.navigate(J,xe({fromRouteId:E},te)))},[L,E])}():function(){ur()||M(!1);let L=a.useContext(He),{basename:E,future:I,navigator:Z}=a.useContext(Fe),{matches:J}=a.useContext(je),{pathname:te}=$r(),W=JSON.stringify(Ae(J,I.v7_relativeSplatPath)),H=a.useRef(!1);return ea(()=>{H.current=!0}),a.useCallback(function(oe,ae){if(ae===void 0&&(ae={}),!H.current)return;if(typeof oe=="number")return void Z.go(oe);let me=ke(oe,JSON.parse(W),te,ae.relative==="path");L==null&&E!=="/"&&(me.pathname=me.pathname==="/"?E:_e([E,me.pathname])),(ae.replace?Z.replace:Z.push)(me,ae.state,ae)},[E,Z,W,te,L])}()}function na(x,L){let{relative:E}=L===void 0?{}:L,{future:I}=a.useContext(Fe),{matches:Z}=a.useContext(je),{pathname:J}=$r(),te=JSON.stringify(Ae(Z,I.v7_relativeSplatPath));return a.useMemo(()=>ke(x,JSON.parse(te),J,E==="path"),[x,te,J,E])}function Zs(x,L,E,I){ur()||M(!1);let{navigator:Z}=a.useContext(Fe),{matches:J}=a.useContext(je),te=J[J.length-1],W=te?te.params:{},H=(te&&te.pathname,te?te.pathnameBase:"/");te&&te.route;let O,oe=$r();if(L){var ae;let ge=typeof L=="string"?w(L):L;H==="/"||(ae=ge.pathname)!=null&&ae.startsWith(H)||M(!1),O=ge}else O=oe;let me=O.pathname||"/",ye=me;if(H!=="/"){let ge=H.replace(/^\//,"").split("/");ye="/"+me.replace(/^\//,"").split("/").slice(ge.length).join("/")}let be=z(x,{pathname:ye}),Se=function(ge,we,Ee,Ne){var De;if(we===void 0&&(we=[]),Ee===void 0&&(Ee=null),Ne===void 0&&(Ne=null),ge==null){var Xe;if((Xe=Ee)==null||!Xe.errors)return null;ge=Ee.matches}let $e=ge,hn=(De=Ee)==null?void 0:De.errors;if(hn!=null){let Me=$e.findIndex(ze=>ze.route.id&&(hn==null?void 0:hn[ze.route.id]));Me>=0||M(!1),$e=$e.slice(0,Math.min($e.length,Me+1))}let Rn=!1,Je=-1;if(Ee&&Ne&&Ne.v7_partialHydration)for(let Me=0;Me<$e.length;Me++){let ze=$e[Me];if((ze.route.HydrateFallback||ze.route.hydrateFallbackElement)&&(Je=Me),ze.route.id){let{loaderData:Qe,errors:an}=Ee,Sn=ze.route.loader&&Qe[ze.route.id]===void 0&&(!an||an[ze.route.id]===void 0);if(ze.route.lazy||Sn){Rn=!0,$e=Je>=0?$e.slice(0,Je+1):[$e[0]];break}}}return $e.reduceRight((Me,ze,Qe)=>{let an,Sn=!1,An=null,Ir=null;var va;Ee&&(an=hn&&ze.route.id?hn[ze.route.id]:void 0,An=ze.route.errorElement||Ys,Rn&&(Je<0&&Qe===0?(co[va="route-fallback"]||(co[va]=!0),Sn=!0,Ir=null):Je===Qe&&(Sn=!0,Ir=ze.route.hydrateFallbackElement||null)));let ri=we.concat($e.slice(0,Qe+1)),fl=()=>{let hu;return hu=an?An:Sn?Ir:ze.route.Component?a.createElement(ze.route.Component,null):ze.route.element?ze.route.element:Me,a.createElement(ta,{match:ze,routeContext:{outlet:Me,matches:ri,isDataRoute:Ee!=null},children:hu})};return Ee&&(ze.route.ErrorBoundary||ze.route.errorElement||Qe===0)?a.createElement(so,{location:Ee.location,revalidation:Ee.revalidation,component:An,error:an,children:fl(),routeContext:{outlet:null,matches:ri,isDataRoute:!0}}):fl()},null)}(be&&be.map(ge=>Object.assign({},ge,{params:Object.assign({},W,ge.params),pathname:_e([H,Z.encodeLocation?Z.encodeLocation(ge.pathname).pathname:ge.pathname]),pathnameBase:ge.pathnameBase==="/"?H:_e([H,Z.encodeLocation?Z.encodeLocation(ge.pathnameBase).pathname:ge.pathnameBase])})),J,E,I);return L&&Se?a.createElement(Ue.Provider,{value:{location:xe({pathname:"/",search:"",hash:"",state:null,key:"default"},O),navigationType:c.Pop}},Se):Se}function oo(){let x=function(){var Z;let J=a.useContext(ql),te=function(H){let O=a.useContext(Ve);return O||M(!1),O}(Jr.UseRouteError),W=uo(Jr.UseRouteError);return J!==void 0?J:(Z=te.errors)==null?void 0:Z[W]}(),L=function(Z){return Z!=null&&typeof Z.status=="number"&&typeof Z.statusText=="string"&&typeof Z.internal=="boolean"&&"data"in Z}(x)?x.status+" "+x.statusText:x instanceof Error?x.message:JSON.stringify(x),E=x instanceof Error?x.stack:null,I={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},L),E?a.createElement("pre",{style:I},E):null,null)}const Ys=a.createElement(oo,null);class so extends a.Component{constructor(L){super(L),this.state={location:L.location,revalidation:L.revalidation,error:L.error}}static getDerivedStateFromError(L){return{error:L}}static getDerivedStateFromProps(L,E){return E.location!==L.location||E.revalidation!=="idle"&&L.revalidation==="idle"?{error:L.error,location:L.location,revalidation:L.revalidation}:{error:L.error!==void 0?L.error:E.error,location:E.location,revalidation:L.revalidation||E.revalidation}}componentDidCatch(L,E){console.error("React Router caught the following error during render",L,E)}render(){return this.state.error!==void 0?a.createElement(je.Provider,{value:this.props.routeContext},a.createElement(ql.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ta(x){let{routeContext:L,match:E,children:I}=x,Z=a.useContext(He);return Z&&Z.static&&Z.staticContext&&(E.route.errorElement||E.route.ErrorBoundary)&&(Z.staticContext._deepestRenderedBoundaryId=E.route.id),a.createElement(je.Provider,{value:L},I)}var Ar=function(x){return x.UseBlocker="useBlocker",x.UseRevalidator="useRevalidator",x.UseNavigateStable="useNavigate",x}(Ar||{}),Jr=function(x){return x.UseBlocker="useBlocker",x.UseLoaderData="useLoaderData",x.UseActionData="useActionData",x.UseRouteError="useRouteError",x.UseNavigation="useNavigation",x.UseRouteLoaderData="useRouteLoaderData",x.UseMatches="useMatches",x.UseRevalidator="useRevalidator",x.UseNavigateStable="useNavigate",x.UseRouteId="useRouteId",x}(Jr||{});function uo(x){let L=function(I){let Z=a.useContext(je);return Z||M(!1),Z}(),E=L.matches[L.matches.length-1];return E.route.id||M(!1),E.route.id}const co={};function qr(x){M(!1)}function Gs(x){let{basename:L="/",children:E=null,location:I,navigationType:Z=c.Pop,navigator:J,static:te=!1,future:W}=x;ur()&&M(!1);let H=L.replace(/^\/*/,"/"),O=a.useMemo(()=>({basename:H,navigator:J,static:te,future:xe({v7_relativeSplatPath:!1},W)}),[H,W,J,te]);typeof I=="string"&&(I=w(I));let{pathname:oe="/",search:ae="",hash:me="",state:ye=null,key:be="default"}=I,Se=a.useMemo(()=>{let ge=le(oe,H);return ge==null?null:{location:{pathname:ge,search:ae,hash:me,state:ye,key:be},navigationType:Z}},[H,oe,ae,me,ye,be,Z]);return Se==null?null:a.createElement(Fe.Provider,{value:O},a.createElement(Ue.Provider,{children:E,value:Se}))}function po(x){let{children:L,location:E}=x;return Zs(ra(L),E)}function ra(x,L){L===void 0&&(L=[]);let E=[];return a.Children.forEach(x,(I,Z)=>{if(!a.isValidElement(I))return;let J=[...L,Z];if(I.type===a.Fragment)return void E.push.apply(E,ra(I.props.children,J));I.type!==qr&&M(!1),I.props.index&&I.props.children&&M(!1);let te={id:I.props.id||J.join("-"),caseSensitive:I.props.caseSensitive,element:I.props.element,Component:I.props.Component,index:I.props.index,path:I.props.path,loader:I.props.loader,action:I.props.action,errorElement:I.props.errorElement,ErrorBoundary:I.props.ErrorBoundary,hasErrorBoundary:I.props.ErrorBoundary!=null||I.props.errorElement!=null,shouldRevalidate:I.props.shouldRevalidate,handle:I.props.handle,lazy:I.props.lazy};I.props.children&&(te.children=ra(I.props.children,J)),E.push(te)}),E}function el(){return el=Object.assign?Object.assign.bind():function(x){for(var L=1;L<arguments.length;L++){var E=arguments[L];for(var I in E)Object.prototype.hasOwnProperty.call(E,I)&&(x[I]=E[I])}return x},el.apply(this,arguments)}function fo(x,L){if(x==null)return{};var E,I,Z={},J=Object.keys(x);for(I=0;I<J.length;I++)E=J[I],L.indexOf(E)>=0||(Z[E]=x[E]);return Z}f.startTransition,new Promise(()=>{}),a.Component;const la=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],aa=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch{}const I1=a.createContext({isTransitioning:!1}),mo=f.startTransition;function Ks(x){let{basename:L,children:E,future:I,window:Z}=x,J=a.useRef();J.current==null&&(J.current=function(ae){return ae===void 0&&(ae={}),function(me,ye,be,Se){Se===void 0&&(Se={});let{window:ge=document.defaultView,v5Compat:we=!1}=Se,Ee=ge.history,Ne=c.Pop,De=null,Xe=$e();function $e(){return(Ee.state||{idx:null}).idx}function hn(){Ne=c.Pop;let Me=$e(),ze=Me==null?null:Me-Xe;Xe=Me,De&&De({action:Ne,location:Je.location,delta:ze})}function Rn(Me){let ze=ge.location.origin!=="null"?ge.location.origin:ge.location.href,Qe=typeof Me=="string"?Me:b(Me);return Qe=Qe.replace(/ $/,"%20"),M(ze,"No window.location.(origin|href) available to create URL for href: "+Qe),new URL(Qe,ze)}Xe==null&&(Xe=0,Ee.replaceState(S({},Ee.state,{idx:Xe}),""));let Je={get action(){return Ne},get location(){return me(ge,Ee)},listen(Me){if(De)throw new Error("A history only accepts one active listener");return ge.addEventListener(A,hn),De=Me,()=>{ge.removeEventListener(A,hn),De=null}},createHref:Me=>ye(ge,Me),createURL:Rn,encodeLocation(Me){let ze=Rn(Me);return{pathname:ze.pathname,search:ze.search,hash:ze.hash}},push:function(Me,ze){Ne=c.Push;let Qe=$(Je.location,Me,ze);be&&be(Qe,Me),Xe=$e()+1;let an=U(Qe,Xe),Sn=Je.createHref(Qe);try{Ee.pushState(an,"",Sn)}catch(An){if(An instanceof DOMException&&An.name==="DataCloneError")throw An;ge.location.assign(Sn)}we&&De&&De({action:Ne,location:Je.location,delta:1})},replace:function(Me,ze){Ne=c.Replace;let Qe=$(Je.location,Me,ze);be&&be(Qe,Me),Xe=$e();let an=U(Qe,Xe),Sn=Je.createHref(Qe);Ee.replaceState(an,"",Sn),we&&De&&De({action:Ne,location:Je.location,delta:0})},go:Me=>Ee.go(Me)};return Je}(function(me,ye){let{pathname:be,search:Se,hash:ge}=me.location;return $("",{pathname:be,search:Se,hash:ge},ye.state&&ye.state.usr||null,ye.state&&ye.state.key||"default")},function(me,ye){return typeof ye=="string"?ye:b(ye)},null,ae)}({window:Z,v5Compat:!0}));let te=J.current,[W,H]=a.useState({action:te.action,location:te.location}),{v7_startTransition:O}=I||{},oe=a.useCallback(ae=>{O&&mo?mo(()=>H(ae)):H(ae)},[H,O]);return a.useLayoutEffect(()=>te.listen(oe),[te,oe]),a.createElement(Gs,{basename:L,children:E,location:W.location,navigationType:W.action,navigator:te,future:I})}v.flushSync,f.useId;const z1=typeof window<"u"&&window.document!==void 0&&window.document.createElement!==void 0,ho=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cr=a.forwardRef(function(x,L){let E,{onClick:I,relative:Z,reloadDocument:J,replace:te,state:W,target:H,to:O,preventScrollReset:oe,unstable_viewTransition:ae}=x,me=fo(x,la),{basename:ye}=a.useContext(Fe),be=!1;if(typeof O=="string"&&ho.test(O)&&(E=O,z1))try{let we=new URL(window.location.href),Ee=O.startsWith("//")?new URL(we.protocol+O):new URL(O),Ne=le(Ee.pathname,ye);Ee.origin===we.origin&&Ne!=null?O=Ne+Ee.search+Ee.hash:be=!0}catch{}let Se=function(we,Ee){let{relative:Ne}=Ee===void 0?{}:Ee;ur()||M(!1);let{basename:De,navigator:Xe}=a.useContext(Fe),{hash:$e,pathname:hn,search:Rn}=na(we,{relative:Ne}),Je=hn;return De!=="/"&&(Je=hn==="/"?De:_e([De,hn])),Xe.createHref({pathname:Je,search:Rn,hash:$e})}(O,{relative:Z}),ge=function(we,Ee){let{target:Ne,replace:De,state:Xe,preventScrollReset:$e,relative:hn,unstable_viewTransition:Rn}=Ee===void 0?{}:Ee,Je=io(),Me=$r(),ze=na(we,{relative:hn});return a.useCallback(Qe=>{if(function(an,Sn){return!(an.button!==0||Sn&&Sn!=="_self"||function(An){return!!(An.metaKey||An.altKey||An.ctrlKey||An.shiftKey)}(an))}(Qe,Ne)){Qe.preventDefault();let an=De!==void 0?De:b(Me)===b(ze);Je(we,{replace:an,state:Xe,preventScrollReset:$e,relative:hn,unstable_viewTransition:Rn})}},[Me,Je,ze,De,Xe,Ne,we,$e,hn,Rn])}(O,{replace:te,state:W,target:H,preventScrollReset:oe,relative:Z,unstable_viewTransition:ae});return a.createElement("a",el({},me,{href:E||Se,onClick:be||J?I:function(we){I&&I(we),we.defaultPrevented||ge(we)},ref:L,target:H}))}),nl=a.forwardRef(function(x,L){let{"aria-current":E="page",caseSensitive:I=!1,className:Z="",end:J=!1,style:te,to:W,unstable_viewTransition:H,children:O}=x,oe=fo(x,aa),ae=na(W,{relative:oe.relative}),me=$r(),ye=a.useContext(Ve),{navigator:be,basename:Se}=a.useContext(Fe),ge=ye!=null&&function(ze,Qe){Qe===void 0&&(Qe={});let an=a.useContext(I1);an==null&&M(!1);let{basename:Sn}=function(ri){let fl=a.useContext(He);return fl||M(!1),fl}(ia.useViewTransitionState),An=na(ze,{relative:Qe.relative});if(!an.isTransitioning)return!1;let Ir=le(an.currentLocation.pathname,Sn)||an.currentLocation.pathname,va=le(an.nextLocation.pathname,Sn)||an.nextLocation.pathname;return Dn(An.pathname,va)!=null||Dn(An.pathname,Ir)!=null}(ae)&&H===!0,we=be.encodeLocation?be.encodeLocation(ae).pathname:ae.pathname,Ee=me.pathname,Ne=ye&&ye.navigation&&ye.navigation.location?ye.navigation.location.pathname:null;I||(Ee=Ee.toLowerCase(),Ne=Ne?Ne.toLowerCase():null,we=we.toLowerCase()),Ne&&Se&&(Ne=le(Ne,Se)||Ne);const De=we!=="/"&&we.endsWith("/")?we.length-1:we.length;let Xe,$e=Ee===we||!J&&Ee.startsWith(we)&&Ee.charAt(De)==="/",hn=Ne!=null&&(Ne===we||!J&&Ne.startsWith(we)&&Ne.charAt(we.length)==="/"),Rn={isActive:$e,isPending:hn,isTransitioning:ge},Je=$e?E:void 0;Xe=typeof Z=="function"?Z(Rn):[Z,$e?"active":null,hn?"pending":null,ge?"transitioning":null].filter(Boolean).join(" ");let Me=typeof te=="function"?te(Rn):te;return a.createElement(cr,el({},oe,{"aria-current":Je,className:Xe,ref:L,style:Me,to:W,unstable_viewTransition:H}),typeof O=="function"?O(Rn):O)});var ia,Wa;(function(x){x.UseScrollRestoration="useScrollRestoration",x.UseSubmit="useSubmit",x.UseSubmitFetcher="useSubmitFetcher",x.UseFetcher="useFetcher",x.useViewTransitionState="useViewTransitionState"})(ia||(ia={})),function(x){x.UseFetcher="useFetcher",x.UseFetchers="useFetchers",x.UseScrollRestoration="useScrollRestoration"}(Wa||(Wa={}));var tl=s(5072),qn=s.n(tl),Xs=s(7825),Gt=s.n(Xs),$s=s(7659),Kt=s.n($s),Js=s(5056),Mt=s.n(Js),qs=s(540),st=s.n(qs),go=s(1113),ut=s.n(go),Qa=s(1719),It={};It.styleTagTransform=ut(),It.setAttributes=Mt(),It.insert=Kt().bind(null,"head"),It.domAPI=Gt(),It.insertStyleElement=st(),qn()(Qa.A,It),Qa.A&&Qa.A.locals&&Qa.A.locals;var Nr=s(2485),Xt={};Xt.styleTagTransform=ut(),Xt.setAttributes=Mt(),Xt.insert=Kt().bind(null,"head"),Xt.domAPI=Gt(),Xt.insertStyleElement=st(),qn()(Nr.A,Xt),Nr.A&&Nr.A.locals&&Nr.A.locals;const Za=s.p+"images/coreTechWhite-01.8826628e7f1e8a327124.png",eu=s.p+"images/coreTechBlack-01.1ba67ba36bcecb742af9.png",R1=s.p+"images/moonicon.5f54a85d5f7408ed23f4.png",Lr=s.p+"images/sunicon.6c925736bb28383b0b9e.png";function vo(x,L){(L==null||L>x.length)&&(L=x.length);for(var E=0,I=new Array(L);E<L;E++)I[E]=x[E];return I}var $t=(0,a.createContext)(),nu=function(x){var L,E,I=x.children,Z=(L=(0,a.useState)(!1),E=2,function(W){if(Array.isArray(W))return W}(L)||function(W,H){var O=W==null?null:typeof Symbol<"u"&&W[Symbol.iterator]||W["@@iterator"];if(O!=null){var oe,ae,me,ye,be=[],Se=!0,ge=!1;try{if(me=(O=O.call(W)).next,H===0){if(Object(O)!==O)return;Se=!1}else for(;!(Se=(oe=me.call(O)).done)&&(be.push(oe.value),be.length!==H);Se=!0);}catch(we){ge=!0,ae=we}finally{try{if(!Se&&O.return!=null&&(ye=O.return(),Object(ye)!==ye))return}finally{if(ge)throw ae}}return be}}(L,E)||function(W,H){if(W){if(typeof W=="string")return vo(W,H);var O=Object.prototype.toString.call(W).slice(8,-1);return O==="Object"&&W.constructor&&(O=W.constructor.name),O==="Map"||O==="Set"?Array.from(W):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?vo(W,H):void 0}}(L,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),J=Z[0],te=Z[1];return(0,a.useEffect)(function(){var W=document.querySelector("body");J?(W.classList.add("dark-bg"),W.classList.remove("light-bg")):(W.classList.remove("dark-bg"),W.classList.add("light-bg"))},[J]),a.createElement($t.Provider,{value:{darkMode:J,toggleDarkMode:function(){te(function(W){return!W})}}},I)};const oa=function(){var x=(0,a.useContext)($t),L=x.darkMode,E=x.toggleDarkMode;return a.createElement("div",{className:"navbarBg sticky-top ".concat(L?"":"navbarBgLight")},a.createElement("nav",{className:"navbar navbar-expand-md navTransparent "},a.createElement("div",{className:"container-fluid"},a.createElement(cr,{className:"navbar-brand",to:"/"},a.createElement("div",null,L?a.createElement("img",{src:Za,className:"Logo",alt:"CoreTech logo"}):a.createElement("img",{src:eu,className:"Logo",alt:"CoreTech logo"}))),a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.createElement("span",{className:"navbar-toggler-icon"})),a.createElement("div",{className:"collapse navbar-collapse justify-content-between text-center",id:"navbarSupportedContent"},a.createElement("ul",{className:"navbar-nav mb-2 mb-lg-0 align-items-center space"},a.createElement("li",{className:"nav-item "},a.createElement(nl,{className:"nav-link ".concat(L?"white poppinsLight":"black"," "),to:"/"},"Home")),a.createElement("li",{className:"nav-item "},a.createElement(nl,{className:"nav-link ".concat(L?"white poppinsLight":"black"," "),to:"/about"},"About Us")),a.createElement("li",{className:"nav-item "},a.createElement(nl,{className:"nav-link ".concat(L?"white poppinsLight":"black"," "),to:"/portfolio"},"Portfolio")),a.createElement("li",{className:"nav-item "},a.createElement(nl,{className:"nav-link ".concat(L?"white poppinsLight":"black"," "),to:"/contact"},"Contact"))),a.createElement("div",{className:"theme ".concat(L?"white poppinsLight":"black"," "),onClick:E},L?a.createElement("img",{src:Lr,alt:""}):a.createElement("img",{src:R1,alt:""}),L?"Light":"Dark")))))},tu=s.p+"images/AppDev.2eb55b0d1e516ee14fb6.png",ru=s.p+"images/about.05732602fd1876f11471.png",_1=s.p+"images/simplicity.9157c0062164a260fcf1.png",O1=s.p+"images/criticalthinking.8a21c9f93e56087d9bdf.png",cn=s.p+"images/effectiveness.1ed97bb594a722bf9dd8.png",F1=s.p+"images/security.49d429abfd37b582a4a6.png",yo=s.p+"images/Group 95.c58e5d8952e7b0a4255b.png",lu=s.p+"images/Group 96.475abf3221e444b73ab3.png",xo=s.p+"images/Group 97.f31537fbfed51af08f7b.png",U1=s.p+"images/Group 100.0a6cdb8aa33b707ee2bd.png",au=s.p+"images/Group 99.9519d2df52b24b623393.png",Ya=s.p+"images/Group 98.e0664fb5dea764ae7038.png",zt=s.p+"images/double-quotes.35cb256b3e221f34c6a3.png",Wn=s.p+"images/45631.190b961a481b890858b2.jpg",wo=s.p+"images/1287.f895fc28177274bbc598.jpg",Co=s.p+"images/18155.a2630477be624a65dca6.jpg",sa=s.p+"images/27767.3aeaca68720e8c033d90.jpg",ua=s.p+"images/6837.c8c4171b965c5f98c05a.jpg",ca=s.p+"images/2148767055.f11bd94f24765f8002ad.jpg",rl=s.p+"images/21959.ab4ed5de25e6ce1f95f3.jpg";var Ga=s(6535),dr={};dr.styleTagTransform=ut(),dr.setAttributes=Mt(),dr.insert=Kt().bind(null,"head"),dr.domAPI=Gt(),dr.insertStyleElement=st(),qn()(Ga.A,dr),Ga.A&&Ga.A.locals&&Ga.A.locals;const jr=s.p+"images/right-arrow.f17604b31f3bde6a579c.png",pr=s.p+"images/light-arrow.5da4b29d24e92be3b326.png",da=s.p+"images/call.fbae56f94244fabe66f9.png",bo=s.p+"images/callLight.3f4039c0221c0a703685.png",We=s.p+"images/print.6372f62a4221962f8c58.png",iu=s.p+"images/printLight.40a2e86ac67ee0b99e12.png",ou=s.p+"images/email.c44eb87f812bfe0e6dc5.png",Eo=s.p+"images/envelopeLight.e1b723cbd00cf626cf07.png",su=s.p+"images/instagram.d194dd25bedd3e94fe6d.png",uu=s.p+"images/facebook.5f084993606efab4d803.png",cu=s.p+"images/twitter.15b5bc313eaefa805884.png",ko=s.p+"images/twitterLight.8cdd9ef8a58e576795e6.png",Ka=s.p+"images/linkedin.7e5d0d91ffdaed605058.png",xt=function(){var x=(0,a.useContext)($t).darkMode;return a.createElement("div",{className:"footerParent ".concat(x?"footerDarkBg":"")},a.createElement("div",{className:"topContainer"},a.createElement("div",{className:"footerCols leftCol"},a.createElement("h2",{className:x?"white":"black"},"ABOUT CORE TECH"),a.createElement("p",{className:x?"grayClr":""},"CoreTech is a leading provider of technology solutions for businesses. With a focus on delivering the highest quality products and services, we help businesses harness the power of technology to achieve their goals. Our team of experts is dedicated to driving innovation and delivering results that exceed our clients' expectations.")),a.createElement("div",{className:"footerCols middleCol"},a.createElement("div",{className:"footerServicesTop"},a.createElement("h2",{className:x?"white":"black"},"SERVICES"),a.createElement("p",null,x?a.createElement("img",{src:pr,alt:"arrow"}):a.createElement("img",{src:jr,alt:"arrow"}),a.createElement("span",{className:x?"grayClr":""},"Web Development")),a.createElement("p",null,x?a.createElement("img",{src:pr,alt:"arrow"}):a.createElement("img",{src:jr,alt:"arrow"}),a.createElement("span",{className:x?"grayClr":""},"App Development")),a.createElement("p",null,x?a.createElement("img",{src:pr,alt:"arrow"}):a.createElement("img",{src:jr,alt:"arrow"}),a.createElement("span",{className:x?"grayClr":""},"Business Solutions")),a.createElement("p",null,x?a.createElement("img",{src:pr,alt:"arrow"}):a.createElement("img",{src:jr,alt:"arrow"}),a.createElement("span",{className:x?"grayClr":""},"Block Chain Technology"))),a.createElement("div",{className:"footerQuickLinks"},a.createElement("h2",{className:x?"white":"black"},"QUICK LINKS"),a.createElement("p",null,x?a.createElement("img",{src:pr,alt:"arrow"}):a.createElement("img",{src:jr,alt:"arrow"}),a.createElement("span",{className:x?"grayClr":""},"Privacy Policy")),a.createElement("p",null,x?a.createElement("img",{src:pr,alt:"arrow"}):a.createElement("img",{src:jr,alt:"arrow"}),a.createElement("span",{className:x?"grayClr":""},"Terms & Conditions")))),a.createElement("div",{className:"footerCols rightCol"},a.createElement("div",{className:"logoAndText"},x?a.createElement("img",{src:Za,alt:"logo"}):a.createElement("img",{src:eu,alt:"logo"}),a.createElement("span",{className:x?"grayClrTagline":""},"Driving Innovation, Delivering Results")),a.createElement("div",{className:"phoneNo"},x?a.createElement("img",{src:bo,alt:"phone"}):a.createElement("img",{src:da,alt:"phone"}),a.createElement("span",{className:x?"grayClr":""},"+91 1234567890")),a.createElement("div",{className:"fax"},x?a.createElement("img",{src:iu,alt:"fax"}):a.createElement("img",{src:We,alt:"fax"}),a.createElement("span",{className:x?"grayClr":""},"+91 1234567890")),a.createElement("div",{className:"email"},x?a.createElement("img",{src:Eo,alt:"fax"}):a.createElement("img",{src:ou,alt:"fax"}),a.createElement("span",{className:x?"grayClr":""},"info@coretech.com")))),a.createElement("div",{className:"copyrightSocialIconContainer"},a.createElement("div",{className:"copyright ".concat(x?"copyrightGray":"")},"Copyright @ 2014 Core Tech Services. All Rights Reserved"),a.createElement("div",{className:"socialIconContainer"},a.createElement("div",{className:"socialIcon"},a.createElement(cr,{className:"socialLogo",target:"_blank",to:"https://www.facebook.com/"},a.createElement("img",{src:uu,alt:"fb"}))),a.createElement("div",{className:"socialIcon"},a.createElement(cr,{className:"socialLogo",target:"_blank",to:"https://www.linkedin.com/"},a.createElement("img",{src:Ka,alt:"linkedin"}))),a.createElement("div",{className:"socialIcon"},a.createElement(cr,{className:"socialLogo",target:"_blank",to:"https://twitter.com/"},x?a.createElement("img",{src:ko,alt:"twitter"}):a.createElement("img",{src:cu,alt:"twitter"}))),a.createElement("div",{className:"socialIcon"},a.createElement(cr,{className:"socialLogo",target:"_blank",to:"https://www.instagram.com/"},a.createElement("img",{src:su,alt:"instagram"}))))))};var wt=s(2825),et={};et.styleTagTransform=ut(),et.setAttributes=Mt(),et.insert=Kt().bind(null,"head"),et.domAPI=Gt(),et.insertStyleElement=st(),qn()(wt.A,et),wt.A&&wt.A.locals&&wt.A.locals;var ll={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},al=a.createContext&&a.createContext(ll),fr=["attr","size","title"];function Xa(){return Xa=Object.assign?Object.assign.bind():function(x){for(var L=1;L<arguments.length;L++){var E=arguments[L];for(var I in E)Object.prototype.hasOwnProperty.call(E,I)&&(x[I]=E[I])}return x},Xa.apply(this,arguments)}function So(x,L){var E=Object.keys(x);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(x);L&&(I=I.filter(function(Z){return Object.getOwnPropertyDescriptor(x,Z).enumerable})),E.push.apply(E,I)}return E}function mr(x){for(var L=1;L<arguments.length;L++){var E=arguments[L]!=null?arguments[L]:{};L%2?So(Object(E),!0).forEach(function(I){var Z,J,te;Z=x,J=I,te=E[I],(J=function(W){var H=function(O,oe){if(typeof O!="object"||O===null)return O;var ae=O[Symbol.toPrimitive];if(ae!==void 0){var me=ae.call(O,"string");if(typeof me!="object")return me;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(O)}(W);return typeof H=="symbol"?H:String(H)}(J))in Z?Object.defineProperty(Z,J,{value:te,enumerable:!0,configurable:!0,writable:!0}):Z[J]=te}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(E)):So(Object(E)).forEach(function(I){Object.defineProperty(x,I,Object.getOwnPropertyDescriptor(E,I))})}return x}function Ao(x){return x&&x.map((L,E)=>a.createElement(L.tag,mr({key:E},L.attr),Ao(L.child)))}function $a(x){return L=>a.createElement(du,Xa({attr:mr({},x.attr)},L),Ao(x.child))}function du(x){var L=E=>{var I,{attr:Z,size:J,title:te}=x,W=function(O,oe){if(O==null)return{};var ae,me,ye=function(Se,ge){if(Se==null)return{};var we,Ee,Ne={},De=Object.keys(Se);for(Ee=0;Ee<De.length;Ee++)we=De[Ee],ge.indexOf(we)>=0||(Ne[we]=Se[we]);return Ne}(O,oe);if(Object.getOwnPropertySymbols){var be=Object.getOwnPropertySymbols(O);for(me=0;me<be.length;me++)ae=be[me],oe.indexOf(ae)>=0||Object.prototype.propertyIsEnumerable.call(O,ae)&&(ye[ae]=O[ae])}return ye}(x,fr),H=J||E.size||"1em";return E.className&&(I=E.className),x.className&&(I=(I?I+" ":"")+x.className),a.createElement("svg",Xa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},E.attr,Z,W,{className:I,style:mr(mr({color:x.color||E.color},E.style),x.style),height:H,width:H,xmlns:"http://www.w3.org/2000/svg"}),te&&a.createElement("title",null,te),x.children)};return al!==void 0?a.createElement(al.Consumer,null,E=>L(E)):L(ll)}function B1(x){return $a({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"},child:[]}]})(x)}function il(x,L){(L==null||L>x.length)&&(L=x.length);for(var E=0,I=new Array(L);E<L;E++)I[E]=x[E];return I}const ol=function(){var x,L,E=(0,a.useContext)($t).darkMode,I=(x=(0,a.useState)(!1),L=2,function(W){if(Array.isArray(W))return W}(x)||function(W,H){var O=W==null?null:typeof Symbol<"u"&&W[Symbol.iterator]||W["@@iterator"];if(O!=null){var oe,ae,me,ye,be=[],Se=!0,ge=!1;try{if(me=(O=O.call(W)).next,H===0){if(Object(O)!==O)return;Se=!1}else for(;!(Se=(oe=me.call(O)).done)&&(be.push(oe.value),be.length!==H);Se=!0);}catch(we){ge=!0,ae=we}finally{try{if(!Se&&O.return!=null&&(ye=O.return(),Object(ye)!==ye))return}finally{if(ge)throw ae}}return be}}(x,L)||function(W,H){if(W){if(typeof W=="string")return il(W,H);var O=Object.prototype.toString.call(W).slice(8,-1);return O==="Object"&&W.constructor&&(O=W.constructor.name),O==="Map"||O==="Set"?Array.from(W):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?il(W,H):void 0}}(x,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=I[0],J=I[1],te=function(){J(window.scrollY>100)};return(0,a.useEffect)(function(){return window.addEventListener("scroll",te),function(){window.removeEventListener("scroll",te)}},[]),a.createElement("div",{className:"scroll-up-button ".concat(Z?"visible":""," ").concat(E?"":"scroll-up-button-dark"),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},a.createElement(B1,{size:25}))};function Pr(x,L){(L==null||L>x.length)&&(L=x.length);for(var E=0,I=new Array(L);E<L;E++)I[E]=x[E];return I}const Ja=function(){var x,L,E=(0,a.useContext)($t).darkMode,I=(x=(0,a.useState)(null),L=2,function(H){if(Array.isArray(H))return H}(x)||function(H,O){var oe=H==null?null:typeof Symbol<"u"&&H[Symbol.iterator]||H["@@iterator"];if(oe!=null){var ae,me,ye,be,Se=[],ge=!0,we=!1;try{if(ye=(oe=oe.call(H)).next,O===0){if(Object(oe)!==oe)return;ge=!1}else for(;!(ge=(ae=ye.call(oe)).done)&&(Se.push(ae.value),Se.length!==O);ge=!0);}catch(Ee){we=!0,me=Ee}finally{try{if(!ge&&oe.return!=null&&(be=oe.return(),Object(be)!==be))return}finally{if(we)throw me}}return Se}}(x,L)||function(H,O){if(H){if(typeof H=="string")return Pr(H,O);var oe=Object.prototype.toString.call(H).slice(8,-1);return oe==="Object"&&H.constructor&&(oe=H.constructor.name),oe==="Map"||oe==="Set"?Array.from(H):oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe)?Pr(H,O):void 0}}(x,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=I[0],J=I[1],te=[{id:1,name:"John Smith",company:"Awesome IT, Company",testimonial:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Wn},{id:2,name:"Alex ",company:"Awesome IT, Company",testimonial:"It looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:wo},{id:3,name:"Vipin",company:"Tech Mahindra IT, Company",testimonial:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:Co},{id:4,name:"Ellyse Perry ",company:"Sonata Software IT, Company",testimonial:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:sa},{id:5,name:"Peter",company:"Wipro Limited IT, Company",testimonial:"It is a long established fact that a reader will be distract The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:ua},{id:6,name:"Allena Smith",company:"HCL Technologies IT, Company",testimonial:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:ca},{id:7,name:"Sundar",company:"Infosys IT, Company",testimonial:"that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:rl}],W=function(){J(Z)};return a.createElement("div",{className:"homeContainer"},a.createElement(oa,null),a.createElement("section",{id:"landingPageContent"},a.createElement("div",{className:"landingPageContent"},a.createElement("div",{className:"landingPageText"},a.createElement("h1",{className:E?"white":"black"},"Empower Your Business ",a.createElement("br",null)," With Core Tech"),a.createElement("p",null,"Driving Innovation, Delivering Result "),a.createElement("button",null,a.createElement("span",null,"Learn More"))),a.createElement("div",null,a.createElement("img",{src:tu,alt:"landingImg"})))),a.createElement("section",{id:"whoAreWeSection"},a.createElement("div",{className:"whoAreWeSection"},a.createElement("div",{className:"whoAreWeImg"},a.createElement("img",{src:ru,alt:""})),a.createElement("div",{className:"whoAreWeText"},a.createElement("h2",{className:E?"white":"black"},"WHO WE ARE"),a.createElement("h1",null,"CORE TECH COMPANY"),a.createElement("p",{className:E?"white poppinsLight":"black"},"CoreTech is a leading provider of technology solutions for businesses. With a focus on delivering the highest quality products and services, we help businesses harness the power of technology to achieve their goals. Our team of experts is dedicated to driving innovation and delivering results that exceed our clients' expectations."),a.createElement("button",{className:E?"white bgTransparent poppinsLight":"black"},"Read More")))),a.createElement("section",{id:"servicesSection"},a.createElement("div",{className:"servicesContainer"},a.createElement("div",{className:"servicesHeading"},a.createElement("h1",null,"CORE TECH SERVICES"),a.createElement("p",{className:"mb-0 ".concat(E?"white poppinsLight":"black")},"Technologies Design And Develop Mobile Apps, Web Apps, Blockchain Solutions.")),a.createElement("ul",{className:"honeycomb"},a.createElement("li",{className:"honeycomb-cell ".concat(E?"honeycomb-cell-dark":"")},a.createElement("div",{className:"honeycomb-cell_title"},a.createElement("svg",{className:"icon",style:{top:"-46px",left:"110px"},width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M4.8 2.85233C3.91788 2.85233 3.2 2.13346 3.2 1.25012C3.2 0.95477 2.96163 0.716064 2.66669 0.716064C2.37175 0.716064 2.13331 0.95477 2.13331 1.25012C2.13331 2.13346 1.41544 2.85233 0.533312 2.85233C0.238375 2.85233 0 3.09104 0 3.38639C0 3.68173 0.238438 3.9205 0.533312 3.9205C1.41544 3.9205 2.13331 4.63937 2.13331 5.52272C2.13331 5.81807 2.37169 6.05677 2.66663 6.05677C2.96156 6.05677 3.19994 5.81807 3.19994 5.52272C3.19994 4.63937 3.91781 3.9205 4.79994 3.9205C5.09488 3.9205 5.33325 3.6818 5.33325 3.38645C5.33325 3.0911 5.09494 2.85233 4.8 2.85233ZM2.66669 3.92213C2.51469 3.71916 2.33444 3.53866 2.13175 3.38645C2.33444 3.23424 2.51469 3.05374 2.66669 2.85077C2.81869 3.05374 2.99894 3.23424 3.20162 3.38645C2.99894 3.53866 2.81869 3.71916 2.66669 3.92213Z"}),a.createElement("path",{d:"M29.8659 9.26122H29.3325V8.72717C29.3325 8.43182 29.0942 8.19312 28.7992 8.19312C28.5043 8.19312 28.2659 8.43182 28.2659 8.72717V9.26122H27.7325C27.4376 9.26122 27.1992 9.49992 27.1992 9.79527C27.1992 10.0906 27.4376 10.3293 27.7325 10.3293H28.2658V10.8634C28.2658 11.1587 28.5042 11.3974 28.7992 11.3974C29.0941 11.3974 29.3325 11.1587 29.3325 10.8634V10.3293H29.8658C30.1607 10.3293 30.3991 10.0906 30.3991 9.79527C30.3991 9.49992 30.1608 9.26122 29.8659 9.26122Z"}),a.createElement("path",{d:"M3.73253 24.7485C4.02707 24.7485 4.26584 24.5096 4.26584 24.2149C4.26584 23.9202 4.02707 23.6813 3.73253 23.6813C3.43799 23.6813 3.19922 23.9202 3.19922 24.2149C3.19922 24.5096 3.43799 24.7485 3.73253 24.7485Z"}),a.createElement("path",{d:"M1.06652 15.1351C1.36106 15.1351 1.59983 14.8962 1.59983 14.6015C1.59983 14.3068 1.36106 14.0679 1.06652 14.0679C0.771975 14.0679 0.533203 14.3068 0.533203 14.6015C0.533203 14.8962 0.771975 15.1351 1.06652 15.1351Z"}),a.createElement("path",{d:"M27.2013 20.4758C27.4958 20.4758 27.7346 20.2369 27.7346 19.9422C27.7346 19.6475 27.4958 19.4086 27.2013 19.4086C26.9067 19.4086 26.668 19.6475 26.668 19.9422C26.668 20.2369 26.9067 20.4758 27.2013 20.4758Z"}),a.createElement("path",{d:"M30.9337 31.6914C31.2282 31.6914 31.467 31.4525 31.467 31.1578C31.467 30.8631 31.2282 30.6241 30.9337 30.6241C30.6392 30.6241 30.4004 30.8631 30.4004 31.1578C30.4004 31.4525 30.6392 31.6914 30.9337 31.6914Z"}),a.createElement("path",{d:"M17.067 30.09C17.067 29.501 16.5886 29.0219 16.0003 29.0219C15.412 29.0219 14.9336 29.5009 14.9336 30.09C14.9336 30.6791 15.412 31.1582 16.0003 31.1582C16.5885 31.1582 17.067 30.6791 17.067 30.09Z"}),a.createElement("path",{d:"M22.9544 0.716064H9.04616C7.88134 0.716064 6.93359 1.66513 6.93359 2.83156V3.9205H25.0669V2.83149C25.067 1.66513 24.1192 0.716064 22.9544 0.716064ZM13.867 2.85233H13.3336C13.0392 2.85233 12.8003 2.61307 12.8003 2.31828C12.8003 2.0235 13.0392 1.78423 13.3336 1.78423H13.8669C14.1613 1.78423 14.4002 2.0235 14.4002 2.31828C14.4003 2.61307 14.1613 2.85233 13.867 2.85233ZM18.1336 2.85233H15.4669C15.1725 2.85233 14.9336 2.61307 14.9336 2.31828C14.9336 2.0235 15.1725 1.78423 15.4669 1.78423H18.1336C18.428 1.78423 18.6669 2.0235 18.6669 2.31828C18.667 2.61307 18.428 2.85233 18.1336 2.85233Z"}),a.createElement("path",{d:"M18.1336 30.09C18.1336 31.2682 17.1768 32.2263 16.0003 32.2263C14.8238 32.2263 13.867 31.2681 13.867 30.09C13.867 29.4491 14.156 28.8798 14.604 28.4878H6.93359V30.6449C6.93359 31.8113 7.88134 32.7603 9.04616 32.7603H22.9544C24.1192 32.7603 25.0669 31.8113 25.0669 30.6449V28.4878H17.3965C17.8445 28.8798 18.1336 29.4491 18.1336 30.09Z"}),a.createElement("path",{d:"M16.5335 12.4656H15.4668V13.5329H16.5335V12.4656Z"}),a.createElement("path",{d:"M12.2659 12.4656H11.1992V13.5329H12.2659V12.4656Z"}),a.createElement("path",{d:"M12.2659 8.19312H11.1992V9.26043H12.2659V8.19312Z"}),a.createElement("path",{d:"M12.2659 23.1471H11.1992V24.2144H12.2659V23.1471Z"}),a.createElement("path",{d:"M16.5335 8.19312H15.4668V9.26043H16.5335V8.19312Z"}),a.createElement("path",{d:"M20.7991 8.19312H19.7324V9.26043H20.7991V8.19312Z"}),a.createElement("path",{d:"M6.9337 5.52271C6.63933 5.52271 6.40039 5.76197 6.40039 6.05676V6.59081C6.40039 6.88559 6.63933 7.12486 6.9337 7.12486V7.65891C6.63933 7.65891 6.40039 7.89818 6.40039 8.19297V8.72702C6.40039 9.0218 6.63933 9.26107 6.9337 9.26107V9.79512C6.63933 9.79512 6.40039 10.0344 6.40039 10.3292V10.8632C6.40039 11.158 6.63933 11.3973 6.9337 11.3973V27.4195H25.067V4.9884H6.9337V5.52271ZM17.6004 24.7493C17.6004 25.0447 17.362 25.2834 17.0671 25.2834H14.9337C14.6388 25.2834 14.4004 25.0447 14.4004 24.7493V22.6131C14.4004 22.3177 14.6388 22.079 14.9337 22.079H17.067C17.362 22.079 17.6003 22.3177 17.6003 22.6131V24.7493H17.6004ZM21.8671 24.7493C21.8671 25.0447 21.6287 25.2834 21.3338 25.2834H19.2005C18.9055 25.2834 18.6671 25.0447 18.6671 24.7493V22.6131C18.6671 22.3177 18.9055 22.079 19.2005 22.079H21.3337C21.6286 22.079 21.867 22.3177 21.867 22.6131V24.7493H21.8671ZM18.6671 7.65898C18.6671 7.36363 18.9055 7.12492 19.2004 7.12492H21.3337C21.6286 7.12492 21.867 7.36363 21.867 7.65898V9.79525C21.867 10.0906 21.6286 10.3293 21.3337 10.3293H19.2004C18.9055 10.3293 18.6671 10.0906 18.6671 9.79525V7.65898ZM14.4004 7.65898C14.4004 7.36363 14.6388 7.12492 14.9337 7.12492H17.067C17.362 7.12492 17.6003 7.36363 17.6003 7.65898V9.79525C17.6003 10.0906 17.362 10.3293 17.067 10.3293H14.9337C14.6388 10.3293 14.4004 10.0906 14.4004 9.79525V7.65898ZM14.4004 11.9316C14.4004 11.6362 14.6388 11.3975 14.9337 11.3975H17.067C17.362 11.3975 17.6003 11.6362 17.6003 11.9316V14.0679C17.6003 14.3632 17.362 14.6019 17.067 14.6019H14.9337C14.6388 14.6019 14.4004 14.3632 14.4004 14.0679V11.9316ZM10.1337 7.65898C10.1337 7.36363 10.3721 7.12492 10.667 7.12492H12.8003C13.0953 7.12492 13.3336 7.36363 13.3336 7.65898V9.79525C13.3336 10.0906 13.0953 10.3293 12.8003 10.3293H10.667C10.3721 10.3293 10.1337 10.0906 10.1337 9.79525V7.65898ZM10.1337 11.9316C10.1337 11.6362 10.3721 11.3975 10.667 11.3975H12.8003C13.0953 11.3975 13.3336 11.6362 13.3336 11.9316V14.0679C13.3336 14.3632 13.0953 14.6019 12.8003 14.6019H10.667C10.3721 14.6019 10.1337 14.3632 10.1337 14.0679V11.9316ZM10.6671 16.2042H21.8671C22.162 16.2042 22.4004 16.4429 22.4004 16.7382C22.4004 17.0336 22.162 17.2723 21.8671 17.2723H10.6671C10.3721 17.2723 10.1338 17.0336 10.1338 16.7382C10.1338 16.4429 10.3721 16.2042 10.6671 16.2042ZM10.6671 19.4086H21.8671C22.162 19.4086 22.4004 19.6473 22.4004 19.9427C22.4004 20.238 22.162 20.4767 21.8671 20.4767H10.6671C10.3721 20.4767 10.1338 20.238 10.1338 19.9427C10.1338 19.6473 10.3721 19.4086 10.6671 19.4086ZM10.1337 22.6131C10.1337 22.3177 10.3721 22.079 10.667 22.079H12.8003C13.0953 22.079 13.3336 22.3177 13.3336 22.6131V24.7493C13.3336 25.0447 13.0953 25.2834 12.8003 25.2834H10.667C10.3721 25.2834 10.1337 25.0447 10.1337 24.7493V22.6131Z"}),a.createElement("path",{d:"M16.5335 23.1471H15.4668V24.2144H16.5335V23.1471Z"}),a.createElement("path",{d:"M20.7991 23.1471H19.7324V24.2144H20.7991V23.1471Z"})),a.createElement("h2",{className:E?"white poppinsLight":""},"App ",a.createElement("br",null)," Development"),a.createElement("p",{className:E?"greyClr":""},"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."))),a.createElement("li",{className:"honeycomb-cell ".concat(E?"honeycomb-cell-dark":"")},a.createElement("div",{className:"honeycomb-cell_title"},a.createElement("svg",{className:"icon",style:{top:"-46px",left:"110px"},width:"38",height:"32",viewBox:"0 0 38 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M21.3703 4.84619H11.9375V7.20765H21.3703V4.84619Z"}),a.createElement("path",{d:"M24.6144 8.31458H15.1816V10.676H24.6144V8.31458Z"}),a.createElement("path",{d:"M21.3703 11.783H11.9375V14.1444H21.3703V11.783Z"}),a.createElement("path",{d:"M24.6144 15.2513H15.1816V17.6133H24.6144V15.2513Z"}),a.createElement("path",{d:"M21.3703 18.7192H11.9375V21.0807H21.3703V18.7192Z"}),a.createElement("path",{d:"M1.76866 25.3158H15.9178V29.3988H10.5382V31.7603H27.1929V29.3988H21.8133V25.3158H35.9625C36.9353 25.3158 37.7311 24.5188 37.7311 23.5447V2.4884C37.7311 1.51428 36.9353 0.717285 35.9625 0.717285H1.76866C0.795895 0.717285 0 1.51428 0 2.4884V23.5448C0 24.5188 0.795895 25.3158 1.76866 25.3158ZM2.35819 3.07875H35.3729V22.9543H2.35819V3.07875Z"})),a.createElement("h2",{className:E?"white poppinsLight":""},"WEB ",a.createElement("br",null)," Development"),a.createElement("p",{className:E?"greyClr":""},"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."))),a.createElement("li",{className:"honeycomb-cell ".concat(E?"honeycomb-cell-dark":"")},a.createElement("div",{className:"honeycomb-cell_title"},a.createElement("svg",{className:"icon",style:{top:"-46px",left:"110px"},width:"31",height:"30",viewBox:"0 0 31 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.289062 24.6938V5.7839C0.289062 2.98659 2.47383 0.71875 5.16868 0.71875H25.9884C28.6832 0.71875 30.868 2.98659 30.868 5.7839V24.6938C30.868 27.4911 28.6832 29.759 25.9884 29.759H5.16868C3.87395 29.759 2.63388 29.2254 1.71781 28.2759C0.803049 27.325 0.289062 26.0378 0.289062 24.6938ZM2.24091 10.8491V24.6938C2.24091 25.5002 2.5493 26.2728 3.09842 26.8428C3.64754 27.4128 4.39184 27.7329 5.16868 27.7329H25.9884C27.6058 27.7329 28.9162 26.3727 28.9162 24.6938V10.8491H2.24091ZM14.2773 4.43319C13.559 4.43319 12.9761 5.03831 12.9761 5.7839C12.9761 6.52949 13.559 7.13461 14.2773 7.13461C14.9956 7.13461 15.5785 6.52949 15.5785 5.7839C15.5785 5.03831 14.9956 4.43319 14.2773 4.43319ZM10.3736 4.43319C9.65532 4.43319 9.07237 5.03831 9.07237 5.7839C9.07237 6.52949 9.65532 7.13461 10.3736 7.13461C11.0919 7.13461 11.6748 6.52949 11.6748 5.7839C11.6748 5.03831 11.0919 4.43319 10.3736 4.43319ZM6.46991 4.43319C5.75163 4.43319 5.16868 5.03831 5.16868 5.7839C5.16868 6.52949 5.75163 7.13461 6.46991 7.13461C7.18819 7.13461 7.77114 6.52949 7.77114 5.7839C7.77114 5.03831 7.18819 4.43319 6.46991 4.43319Z"}),a.createElement("path",{d:"M7.43063 13.4286V16.247C7.43063 16.5289 7.49997 16.7458 7.63865 16.898C7.77734 17.0501 7.98089 17.1261 8.24931 17.1261C8.51773 17.1261 8.72352 17.0501 8.86668 16.898C9.00984 16.7458 9.08142 16.5289 9.08142 16.247V13.4286H10.2289V16.2403C10.2289 16.6608 10.1394 17.0165 9.9605 17.3073C9.78155 17.5981 9.53997 17.8173 9.23576 17.9649C8.93602 18.1126 8.6005 18.1864 8.22918 18.1864C7.85786 18.1864 7.52457 18.1148 7.22931 17.9716C6.93852 17.824 6.70812 17.6048 6.53812 17.314C6.36812 17.0187 6.28312 16.6608 6.28312 16.2403V13.4286H7.43063ZM12.3835 13.4286V18.1394H11.236V13.4286H12.3835ZM15.9731 11.7644L14.1747 19.3943H13.0675L14.8659 11.7644H15.9731ZM17.7858 13.4286V16.247C17.7858 16.5289 17.8552 16.7458 17.9939 16.898C18.1325 17.0501 18.3361 17.1261 18.6045 17.1261C18.8729 17.1261 19.0787 17.0501 19.2219 16.898C19.365 16.7458 19.4366 16.5289 19.4366 16.247V13.4286H20.5841V16.2403C20.5841 16.6608 20.4947 17.0165 20.3157 17.3073C20.1368 17.5981 19.8952 17.8173 19.591 17.9649C19.2912 18.1126 18.9557 18.1864 18.5844 18.1864C18.2131 18.1864 17.8798 18.1148 17.5845 17.9716C17.2937 17.824 17.0633 17.6048 16.8933 17.314C16.7233 17.0187 16.6383 16.6608 16.6383 16.2403V13.4286H17.7858ZM24.4768 18.1394L23.5172 16.6966L22.6716 18.1394H21.3698L22.8797 15.7437L21.3362 13.4286H22.6716L23.6178 14.8512L24.4499 13.4286H25.7518L24.2553 15.8041L25.8122 18.1394H24.4768Z"})),a.createElement("h2",{className:E?"white poppinsLight":""},"UI/UX",a.createElement("br",null)," DESIGN"),a.createElement("p",{className:E?"greyClr":""},"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."))),a.createElement("li",{className:"honeycomb-cell ".concat(E?"honeycomb-cell-dark":"")},a.createElement("div",{className:"honeycomb-cell_title"},a.createElement("svg",{className:"icon",style:{top:"-52px",left:"104px"},width:"47",height:"47",viewBox:"0 0 47 47",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{clipPath:"url(#clip0_265_567)"},a.createElement("path",{d:"M39.6572 21.3458C39.5743 20.112 39.2355 18.909 38.6623 17.8132C38.0891 16.7175 37.2942 15.753 36.328 14.9813C35.325 14.1203 34.155 13.4759 32.8913 13.0883C31.6276 12.7008 30.2974 12.5785 28.9843 12.7292C27.9635 10.9967 26.5219 9.54993 24.7932 8.52293C23.0644 7.49593 21.1043 6.92195 19.0947 6.85417C17.4448 6.83486 15.8105 7.17525 14.3055 7.85164C12.8005 8.52804 11.461 9.5242 10.3801 10.7708C8.34369 13.0241 7.22573 15.9588 7.24675 18.9958C5.87706 19.8964 4.71467 21.0781 3.83679 22.4624C2.95891 23.8468 2.38565 25.4021 2.15508 27.025C1.81731 28.8111 1.91698 30.6525 2.44558 32.3917C2.97417 34.131 3.91597 35.7164 5.1905 37.0125C7.51822 39.119 10.5714 40.242 13.7092 40.1458H33.7822C41.3218 40.1458 44.8468 35.1521 45.0426 30.4521C45.1236 28.5757 44.6577 26.7161 43.7017 25.0995C42.7456 23.4829 41.3405 22.1788 39.6572 21.3458ZM19.5842 24.2833V31.3333C19.5842 31.8527 19.3779 32.3508 19.0107 32.7181C18.6434 33.0854 18.1453 33.2917 17.6259 33.2917C17.1065 33.2917 16.6084 33.0854 16.2412 32.7181C15.8739 32.3508 15.6676 31.8527 15.6676 31.3333V24.2833L14.1009 25.85C13.9031 26.0641 13.66 26.2313 13.3894 26.3394C13.1188 26.4476 12.8274 26.494 12.5366 26.4752C12.2457 26.4564 11.9627 26.373 11.7082 26.231C11.4537 26.0889 11.2342 25.8919 11.0655 25.6542C10.8051 25.2391 10.7014 24.7447 10.7732 24.26C10.8451 23.7753 11.0876 23.3322 11.4572 23.0104L16.2551 18.2125C16.4294 18.0226 16.6412 17.8709 16.8772 17.7672C17.1132 17.6634 17.3681 17.6099 17.6259 17.6099C17.8837 17.6099 18.1387 17.6634 18.3746 17.7672C18.6106 17.8709 18.8225 18.0226 18.9967 18.2125L23.7947 23.0104C24.1642 23.3322 24.4068 23.7753 24.4786 24.26C24.5504 24.7447 24.4468 25.2391 24.1863 25.6542C24.0177 25.8919 23.7981 26.0889 23.5436 26.231C23.2891 26.373 23.0061 26.4564 22.7153 26.4752C22.4244 26.494 22.1331 26.4476 21.8624 26.3394C21.5918 26.2313 21.3487 26.0641 21.1509 25.85L19.5842 24.2833ZM35.5447 30.8438L30.7467 35.6417C30.5725 35.8316 30.3606 35.9833 30.1246 36.087C29.8887 36.1908 29.6337 36.2443 29.3759 36.2443C29.1181 36.2443 28.8632 36.1908 28.6272 36.087C28.3912 35.9833 28.1794 35.8316 28.0051 35.6417L23.2072 30.8438C22.8538 30.5115 22.6229 30.0698 22.5518 29.59C22.4807 29.1102 22.5736 28.6204 22.8155 28.2C22.9842 27.9623 23.2037 27.7653 23.4582 27.6232C23.7127 27.4812 23.9957 27.3977 24.2866 27.379C24.5774 27.3602 24.8688 27.4066 25.1394 27.5148C25.41 27.6229 25.6531 27.7901 25.8509 28.0042L27.4176 29.5708V22.5208C27.4176 22.0015 27.6239 21.5033 27.9912 21.1361C28.3584 20.7688 28.8565 20.5625 29.3759 20.5625C29.8953 20.5625 30.3934 20.7688 30.7607 21.1361C31.1279 21.5033 31.3342 22.0015 31.3342 22.5208V29.5708L32.9009 28.0042C33.0987 27.7901 33.3418 27.6229 33.6124 27.5148C33.8831 27.4066 34.1744 27.3602 34.4653 27.379C34.7561 27.3977 35.0391 27.4812 35.2936 27.6232C35.5481 27.7653 35.7677 27.9623 35.9363 28.2C36.1782 28.6204 36.2711 29.1102 36.2001 29.59C36.129 30.0698 35.8981 30.5115 35.5447 30.8438Z"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_265_567"},a.createElement("rect",{width:"47",height:"47",fill:"white"})))),a.createElement("h2",{className:E?"white poppinsLight":""},"CLOUD",a.createElement("br",null)," SERVICES"),a.createElement("p",{className:E?"greyClr":""},"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."))),a.createElement("li",{className:"honeycomb-cell ".concat(E?"honeycomb-cell-dark":"")},a.createElement("div",{className:"honeycomb-cell_title"},a.createElement("svg",{className:"icon",style:{top:"-52px",left:"104px"},width:"42",height:"37",viewBox:"0 0 42 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.93853 23.3799L8.38239 22.5464C10.0081 21.0852 11.7469 20.1502 13.5989 19.7412C15.4726 19.3246 17.448 19.4517 19.5252 20.1227C19.5422 20.1286 19.5598 20.1345 19.5768 20.1403C20.9031 20.7154 22.4413 21.2279 24.1915 21.6779C26.1185 22.1596 28.0694 22.5397 30.0362 22.8165C30.4084 22.8271 30.7715 22.9343 31.09 23.1275L37.7958 18.4031C38.7698 17.7165 39.7532 17.3878 40.491 17.4231C40.8508 17.4244 41.2005 17.5417 41.4885 17.7576C41.6355 17.8761 41.7563 18.0238 41.8431 18.1915C41.93 18.3592 41.9811 18.5432 41.9931 18.7317C42.0429 19.2835 41.825 20.0112 41.2348 20.9033L37.273 26.8718C37.1296 27.0904 36.961 27.2913 36.7707 27.4704C36.5817 27.6518 36.3713 27.8094 36.1443 27.9398L25.88 33.9377C25.4989 34.1616 25.0789 34.311 24.6422 34.3779C24.2063 34.436 23.7635 34.4121 23.3364 34.3075L13.4344 31.8778C13.1779 31.8123 12.9119 31.7925 12.6485 31.8191C12.3866 31.847 12.132 31.9226 11.8972 32.0422L11.48 32.2417L11.9201 33.0985C11.9544 33.1654 11.9751 33.2383 11.9811 33.3132C11.9872 33.388 11.9784 33.4633 11.9552 33.5348C11.9321 33.6062 11.895 33.6724 11.8463 33.7295C11.7975 33.7865 11.7379 33.8334 11.671 33.8673L6.49881 36.5317C6.3632 36.5996 6.20632 36.6112 6.06224 36.564C5.91816 36.5167 5.79851 36.4144 5.72929 36.2794L0.0627067 25.2285C0.0284768 25.1617 0.00778043 25.0887 0.00180724 25.0138C-0.00416595 24.9389 0.00470186 24.8636 0.0279009 24.7921C0.0510999 24.7207 0.0881727 24.6545 0.136988 24.5975C0.185803 24.5404 0.245398 24.4936 0.312347 24.4597L5.4849 21.8012C5.55151 21.7664 5.62435 21.7451 5.6992 21.7387C5.77406 21.7322 5.84944 21.7407 5.921 21.7636C5.99256 21.7866 6.05888 21.8235 6.11611 21.8722C6.17333 21.9209 6.22034 21.9806 6.25442 22.0476L6.93853 23.3799ZM32.2617 16.3667H25.7562V16.4371C25.7565 16.6747 25.8507 16.9026 26.0182 17.071C26.101 17.1548 26.1995 17.2213 26.3082 17.2666C26.4168 17.3119 26.5334 17.3352 26.6511 17.335H31.3661C31.4837 17.3352 31.6002 17.312 31.7088 17.2667C31.8173 17.2213 31.9158 17.1548 31.9984 17.071C32.0817 16.9878 32.1479 16.889 32.193 16.7803C32.2382 16.6715 32.2615 16.5549 32.2616 16.4371V16.3667H32.2617ZM32.519 18.1273C32.7946 17.9403 33.02 17.6884 33.1755 17.3936C33.3309 17.0989 33.4116 16.7704 33.4104 16.4371V14.653C33.4068 14.3887 33.4593 14.1266 33.5646 13.8842C33.673 13.6452 33.8324 13.4328 34.0316 13.2621C34.8276 12.5501 35.4649 11.6783 35.9021 10.7033C36.4167 9.55172 36.6354 8.28947 36.5384 7.03156C36.4413 5.77364 36.0315 4.56004 35.3463 3.50127C34.6611 2.44251 33.7222 1.57223 32.6153 0.96969C31.5083 0.367155 30.2684 0.0515137 29.0085 0.0515137C27.7486 0.0515137 26.5087 0.367155 25.4017 0.96969C24.2948 1.57223 23.3559 2.44251 22.6707 3.50127C21.9855 4.56004 21.5757 5.77364 21.4787 7.03156C21.3816 8.28947 21.6003 9.55172 22.1149 10.7033C22.5522 11.6783 23.1895 12.5501 23.9854 13.2621C24.1846 13.4327 24.3438 13.6451 24.4518 13.8842C24.5575 14.1266 24.6104 14.3886 24.6071 14.653V16.4371C24.6058 16.7704 24.6863 17.0989 24.8417 17.3936C24.997 17.6884 25.2224 17.9403 25.498 18.1273C25.5778 18.947 25.9595 19.7076 26.5687 20.2609C27.1779 20.8142 27.9709 21.1206 28.7934 21.1204H29.2235C30.0459 21.1206 30.839 20.8142 31.4482 20.2609C32.0574 19.7076 32.4391 18.947 32.5189 18.1273H32.519ZM22.6044 7.60459C22.6072 6.00495 23.2065 4.46402 24.2849 3.28391C25.3633 2.10379 26.843 1.36961 28.434 1.22528V3.39088C28.4337 3.48607 28.4571 3.57982 28.5021 3.66369C28.5471 3.74755 28.6122 3.8189 28.6915 3.87129C28.7709 3.92368 28.862 3.95548 28.9567 3.96381C29.0514 3.97215 29.1467 3.95676 29.234 3.91903C29.2633 3.9132 29.2972 3.90145 29.333 3.89553C29.3776 3.88853 29.4226 3.88463 29.4678 3.88387C29.6716 3.88597 29.8663 3.96851 30.0097 4.11355C30.153 4.2586 30.2334 4.45444 30.2334 4.65851C30.2334 4.86259 30.153 5.05843 30.0097 5.20347C29.8663 5.34852 29.6716 5.43106 29.4678 5.43316C29.4226 5.43241 29.3776 5.42849 29.333 5.42141C29.2882 5.41672 29.2445 5.40485 29.2035 5.38625C29.0604 5.33509 28.9028 5.34279 28.7653 5.40769C28.6278 5.47258 28.5215 5.58938 28.4698 5.73252C28.4472 5.79456 28.4357 5.86011 28.4358 5.92615H28.434V7.60459H27.4107C27.3811 7.11537 27.1661 6.65591 26.8097 6.32001C26.4533 5.9841 25.9823 5.79706 25.4928 5.79706C25.0034 5.79706 24.5324 5.9841 24.176 6.32001C23.8196 6.65591 23.6046 7.11537 23.5749 7.60459H22.6044ZM35.3121 8.75471C35.2215 9.26447 35.0686 9.76113 34.8568 10.2334C34.4871 11.0599 33.9461 11.7981 33.2697 12.399C32.9491 12.6795 32.6931 13.0262 32.5191 13.4152C32.3451 13.8042 32.2573 14.2264 32.2617 14.6526V15.2162H29.5826V12.9687H29.5809C29.5806 12.9007 29.5689 12.8332 29.5463 12.7691C29.5205 12.6985 29.4811 12.6337 29.4303 12.5784C29.3795 12.523 29.3183 12.4783 29.2502 12.4467C29.1821 12.415 29.1085 12.3972 29.0335 12.3941C28.9585 12.391 28.8836 12.4028 28.8131 12.4288C28.7763 12.4405 28.7329 12.4523 28.6837 12.4639C28.639 12.471 28.594 12.4749 28.5488 12.4757C28.3956 12.475 28.2461 12.429 28.119 12.3434C27.9919 12.2578 27.8929 12.1365 27.8345 11.9947C27.7761 11.8529 27.7609 11.697 27.7908 11.5466C27.8207 11.3961 27.8944 11.2579 28.0026 11.1493C28.149 11.007 28.3448 10.927 28.5488 10.9264C28.594 10.9271 28.639 10.931 28.6837 10.9381C28.7174 10.9424 28.7506 10.9502 28.7827 10.9615C28.87 10.9993 28.9652 11.0147 29.0599 11.0063C29.1546 10.998 29.2458 10.9662 29.3251 10.9138C29.4045 10.8614 29.4696 10.7901 29.5145 10.7062C29.5595 10.6223 29.5829 10.5286 29.5826 10.4334V8.75495H30.6053C30.635 9.24426 30.85 9.70379 31.2065 10.0398C31.5629 10.3757 32.034 10.5628 32.5235 10.5628C33.0131 10.5628 33.4841 10.3757 33.8406 10.0398C34.1971 9.70379 34.4121 9.24426 34.4417 8.75495L35.3121 8.75471ZM19.1096 26.4137C18.9589 26.3995 18.8199 26.3259 18.7234 26.209C18.6268 26.0922 18.5805 25.9417 18.5948 25.7908C18.609 25.6398 18.6825 25.5007 18.7992 25.404C18.9158 25.3073 19.0661 25.2609 19.2169 25.2752C21.7422 25.5216 25.2047 25.6978 27.542 25.821C28.7222 25.8797 29.6257 25.9266 30.059 25.9795C30.3141 25.9573 30.5515 25.8401 30.7243 25.6509C30.8997 25.4569 30.9931 25.2023 30.985 24.9407C30.9778 24.6785 30.8677 24.4297 30.6785 24.2482C30.4917 24.065 30.2409 23.9619 29.9794 23.9607C29.9525 23.9617 29.9255 23.9597 29.8991 23.9548C27.883 23.6753 25.8834 23.2874 23.9089 22.7928C22.2866 22.3875 20.6977 21.8578 19.1566 21.2083C17.2811 20.6097 15.5106 20.4923 13.845 20.8561C12.1706 21.2258 10.5885 22.0866 9.0985 23.4384C9.06974 23.4663 9.03717 23.49 9.00178 23.5088H9.00235L7.46283 24.4067L10.9569 31.2203L11.3999 31.0091C11.7548 30.8314 12.1384 30.7182 12.5328 30.6746C12.9255 30.6401 13.3212 30.6698 13.7043 30.7626L23.6052 33.1923C23.8913 33.2629 24.1882 33.2788 24.4802 33.2392C24.7699 33.193 25.0485 33.0935 25.3019 32.9457L35.5648 26.9479C35.7163 26.8606 35.8573 26.7563 35.985 26.6368C36.111 26.5175 36.2223 26.3835 36.3167 26.2378L40.2786 20.2694C40.7129 19.6122 40.8805 19.1426 40.8518 18.8374C40.8518 18.8034 40.8448 18.7697 40.8315 18.7385C40.8181 18.7072 40.7985 18.679 40.7739 18.6555C40.6754 18.5943 40.561 18.5637 40.4451 18.5674C39.9405 18.544 39.2185 18.8022 38.4549 19.3421L31.8836 23.9668C32.0507 24.285 32.1358 24.6401 32.131 24.9996C32.1262 25.3592 32.0318 25.7118 31.8563 26.0255C31.6808 26.3392 31.4298 26.6041 31.1261 26.7959C30.8224 26.9878 30.4756 27.1006 30.1173 27.1241C30.0252 27.1287 29.9333 27.1127 29.8483 27.0772C29.8254 27.0654 28.89 27.0361 27.484 26.9657C25.1433 26.8424 21.6772 26.6663 19.1097 26.414L19.1096 26.4137Z"})),a.createElement("h2",{className:E?"white poppinsLight":""},"BUSINESS",a.createElement("br",null)," SOLUTION"),a.createElement("p",{className:E?"greyClr":""},"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."))),a.createElement("li",{className:"honeycomb-cell ".concat(E?"honeycomb-cell-dark":"")},a.createElement("div",{className:"honeycomb-cell_title"},a.createElement("svg",{className:"icon",style:{top:"-52px",left:"110px"},width:"39",height:"36",viewBox:"0 0 39 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M13.7114 9.32654L10.3203 13.3686H12.3441V21.6177H15.0788V13.3686H17.1026L13.7114 9.32654Z"}),a.createElement("path",{d:"M7.64062 23.236L18.0465 29.6703C18.3826 29.8782 18.7775 29.9892 19.1814 29.9892C19.5853 29.9892 19.9802 29.8782 20.3163 29.6703L30.7222 23.236C30.6659 23.1323 30.5801 23.0449 30.474 22.9834C30.3679 22.9218 30.2456 22.8885 30.1206 22.887H8.24228C8.11719 22.8885 7.99494 22.9218 7.88886 22.9834C7.78277 23.0449 7.69691 23.1323 7.64062 23.236Z"}),a.createElement("path",{d:"M21.9163 8.92688V17.176H19.8926L23.2837 21.2181L26.6748 17.176H24.6511V8.92688H21.9163Z"}),a.createElement("path",{d:"M38.324 12.7342C38.3211 11.0521 37.5999 9.43966 36.3183 8.25023C35.0368 7.06081 33.2994 6.3914 31.487 6.38872C30.7158 6.3865 29.95 6.50889 29.224 6.75041C29.1365 6.77989 29.0433 6.79229 28.9504 6.78683C28.8574 6.78137 28.7667 6.75817 28.6839 6.71868C28.6013 6.68007 28.5279 6.62648 28.468 6.56109C28.4081 6.49569 28.363 6.41982 28.3352 6.33796C27.6985 4.40504 26.3706 2.73142 24.5708 1.5934C22.771 0.455392 20.6069 -0.0789705 18.4358 0.0785388C16.2646 0.236048 14.2162 1.07601 12.6288 2.45975C11.0414 3.8435 10.0098 5.68828 9.70448 7.68954C9.6905 7.78782 9.65161 7.88163 9.59099 7.96325C9.53038 8.04488 9.44978 8.112 9.3558 8.15911C9.26167 8.20587 9.15722 8.23191 9.05053 8.23521C8.94383 8.23851 8.83774 8.21898 8.74047 8.17814C7.94307 7.82977 7.07159 7.65196 6.19028 7.65782C4.60528 7.64897 3.07773 8.20812 1.92596 9.21877C0.774193 10.2294 0.0870465 11.6136 0.007718 13.0828C-0.0716105 14.5521 0.462998 15.9931 1.50014 17.1055C2.53728 18.2179 3.99694 18.916 5.57496 19.0543C5.77323 19.067 10.9762 19.0797 10.9762 19.0797V14.6378H8.92507C8.79713 14.6372 8.67189 14.6037 8.56327 14.5409C8.45464 14.4782 8.36688 14.3887 8.30974 14.2825C8.25406 14.176 8.2316 14.0571 8.24489 13.9394C8.25818 13.8217 8.30669 13.7097 8.38495 13.6162L13.1708 7.90529C13.2371 7.83226 13.3198 7.77355 13.4131 7.73328C13.5064 7.69301 13.608 7.67214 13.7109 7.67214C13.8138 7.67214 13.9155 7.69301 14.0088 7.73328C14.1021 7.77355 14.1848 7.83226 14.2511 7.90529L19.0369 13.6162C19.1152 13.7097 19.1637 13.8217 19.177 13.9394C19.1903 14.0571 19.1678 14.176 19.1121 14.2825C19.055 14.3887 18.9672 14.4782 18.8586 14.5409C18.75 14.6037 18.6247 14.6372 18.4968 14.6378H16.4457V19.0797H19.7548L17.9567 16.9286C17.8784 16.8351 17.8299 16.7231 17.8166 16.6054C17.8033 16.4876 17.8258 16.3688 17.8815 16.2623C17.9386 16.156 18.0264 16.0666 18.135 16.0039C18.2436 15.9411 18.3689 15.9076 18.4968 15.9069H20.5479V8.29236C20.5479 8.12407 20.6199 7.96267 20.7481 7.84367C20.8764 7.72467 21.0503 7.65782 21.2316 7.65782H25.3338C25.5151 7.65782 25.689 7.72467 25.8172 7.84367C25.9454 7.96267 26.0175 8.12407 26.0175 8.29236V15.9069H28.0686C28.1965 15.9076 28.3217 15.9411 28.4304 16.0039C28.539 16.0666 28.6267 16.156 28.6839 16.2623C28.7396 16.3688 28.762 16.4876 28.7487 16.6054C28.7354 16.7231 28.6869 16.8351 28.6087 16.9286L26.8106 19.0797C26.8106 19.0797 31.9041 19.067 32.1092 19.048C33.8107 18.9136 35.3952 18.1892 36.547 17.0191C37.6988 15.849 38.3332 14.3191 38.324 12.7342Z"}),a.createElement("path",{d:"M30.8048 24.708L23.2227 29.3973L30.8048 34.7783V24.708Z"}),a.createElement("path",{d:"M22.0176 30.1462L21.0741 30.7237C20.5152 31.0752 19.8555 31.2631 19.1803 31.2631C18.5051 31.2631 17.8454 31.0752 17.2864 30.7237L16.3429 30.1462L8.68555 35.578H29.675L22.0176 30.1462Z"}),a.createElement("path",{d:"M7.55859 24.708V34.7783L15.1408 29.3973L7.55859 24.708Z"})),a.createElement("h2",{className:E?"white poppinsLight":""},"CLOUD E-MAIL",a.createElement("br",null)," MIGRATION"),a.createElement("p",{className:E?"greyClr":""},"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."))),a.createElement("li",{className:"honeycomb-cell ".concat(E?"honeycomb-cell-dark":"")},a.createElement("div",{className:"honeycomb-cell_title"},a.createElement("svg",{className:"icon",style:{top:"-52px",left:"110px"},width:"39",height:"36",viewBox:"0 0 39 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M13.7114 9.32654L10.3203 13.3686H12.3441V21.6177H15.0788V13.3686H17.1026L13.7114 9.32654Z"}),a.createElement("path",{d:"M7.64062 23.236L18.0465 29.6703C18.3826 29.8782 18.7775 29.9892 19.1814 29.9892C19.5853 29.9892 19.9802 29.8782 20.3163 29.6703L30.7222 23.236C30.6659 23.1323 30.5801 23.0449 30.474 22.9834C30.3679 22.9218 30.2456 22.8885 30.1206 22.887H8.24228C8.11719 22.8885 7.99494 22.9218 7.88886 22.9834C7.78277 23.0449 7.69691 23.1323 7.64062 23.236Z"}),a.createElement("path",{d:"M21.9163 8.92688V17.176H19.8926L23.2837 21.2181L26.6748 17.176H24.6511V8.92688H21.9163Z"}),a.createElement("path",{d:"M38.324 12.7342C38.3211 11.0521 37.5999 9.43966 36.3183 8.25023C35.0368 7.06081 33.2994 6.3914 31.487 6.38872C30.7158 6.3865 29.95 6.50889 29.224 6.75041C29.1365 6.77989 29.0433 6.79229 28.9504 6.78683C28.8574 6.78137 28.7667 6.75817 28.6839 6.71868C28.6013 6.68007 28.5279 6.62648 28.468 6.56109C28.4081 6.49569 28.363 6.41982 28.3352 6.33796C27.6985 4.40504 26.3706 2.73142 24.5708 1.5934C22.771 0.455392 20.6069 -0.0789705 18.4358 0.0785388C16.2646 0.236048 14.2162 1.07601 12.6288 2.45975C11.0414 3.8435 10.0098 5.68828 9.70448 7.68954C9.6905 7.78782 9.65161 7.88163 9.59099 7.96325C9.53038 8.04488 9.44978 8.112 9.3558 8.15911C9.26167 8.20587 9.15722 8.23191 9.05053 8.23521C8.94383 8.23851 8.83774 8.21898 8.74047 8.17814C7.94307 7.82977 7.07159 7.65196 6.19028 7.65782C4.60528 7.64897 3.07773 8.20812 1.92596 9.21877C0.774193 10.2294 0.0870465 11.6136 0.007718 13.0828C-0.0716105 14.5521 0.462998 15.9931 1.50014 17.1055C2.53728 18.2179 3.99694 18.916 5.57496 19.0543C5.77323 19.067 10.9762 19.0797 10.9762 19.0797V14.6378H8.92507C8.79713 14.6372 8.67189 14.6037 8.56327 14.5409C8.45464 14.4782 8.36688 14.3887 8.30974 14.2825C8.25406 14.176 8.2316 14.0571 8.24489 13.9394C8.25818 13.8217 8.30669 13.7097 8.38495 13.6162L13.1708 7.90529C13.2371 7.83226 13.3198 7.77355 13.4131 7.73328C13.5064 7.69301 13.608 7.67214 13.7109 7.67214C13.8138 7.67214 13.9155 7.69301 14.0088 7.73328C14.1021 7.77355 14.1848 7.83226 14.2511 7.90529L19.0369 13.6162C19.1152 13.7097 19.1637 13.8217 19.177 13.9394C19.1903 14.0571 19.1678 14.176 19.1121 14.2825C19.055 14.3887 18.9672 14.4782 18.8586 14.5409C18.75 14.6037 18.6247 14.6372 18.4968 14.6378H16.4457V19.0797H19.7548L17.9567 16.9286C17.8784 16.8351 17.8299 16.7231 17.8166 16.6054C17.8033 16.4876 17.8258 16.3688 17.8815 16.2623C17.9386 16.156 18.0264 16.0666 18.135 16.0039C18.2436 15.9411 18.3689 15.9076 18.4968 15.9069H20.5479V8.29236C20.5479 8.12407 20.6199 7.96267 20.7481 7.84367C20.8764 7.72467 21.0503 7.65782 21.2316 7.65782H25.3338C25.5151 7.65782 25.689 7.72467 25.8172 7.84367C25.9454 7.96267 26.0175 8.12407 26.0175 8.29236V15.9069H28.0686C28.1965 15.9076 28.3217 15.9411 28.4304 16.0039C28.539 16.0666 28.6267 16.156 28.6839 16.2623C28.7396 16.3688 28.762 16.4876 28.7487 16.6054C28.7354 16.7231 28.6869 16.8351 28.6087 16.9286L26.8106 19.0797C26.8106 19.0797 31.9041 19.067 32.1092 19.048C33.8107 18.9136 35.3952 18.1892 36.547 17.0191C37.6988 15.849 38.3332 14.3191 38.324 12.7342Z"}),a.createElement("path",{d:"M30.8048 24.708L23.2227 29.3973L30.8048 34.7783V24.708Z"}),a.createElement("path",{d:"M22.0176 30.1462L21.0741 30.7237C20.5152 31.0752 19.8555 31.2631 19.1803 31.2631C18.5051 31.2631 17.8454 31.0752 17.2864 30.7237L16.3429 30.1462L8.68555 35.578H29.675L22.0176 30.1462Z"}),a.createElement("path",{d:"M7.55859 24.708V34.7783L15.1408 29.3973L7.55859 24.708Z"})),a.createElement("h2",{className:E?"white poppinsLight":""},"CLOUD E-MAIL",a.createElement("br",null)," MIGRATION"),a.createElement("p",{className:E?"greyClr":""},"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."))),a.createElement("li",{className:"honeycomb-cell honeycomb_Hidden"})))),a.createElement("section",{id:"projectSection"},a.createElement("div",{className:"projectContainer"},a.createElement("div",{className:"projectText"},a.createElement("h1",null,"Over 400+ Projects ",a.createElement("br",null),"Completed"),a.createElement("p",{className:"".concat(E?"white poppinsLight":"black")},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis")),a.createElement("div",{className:"happyUserCounts"},a.createElement("div",{className:"projectHexagon"}),a.createElement("div",{className:"countsUsers"},a.createElement("h1",null,"2000+"),a.createElement("p",{className:E?"white":"black"},"HAPPY USERS")),a.createElement("div",{className:"countsDownloads"},a.createElement("div",{className:"downloads"},a.createElement("h1",{className:"mb-0"},"24+"),a.createElement("p",{className:"mb-0 ".concat(E?"white":"black")},"Downloads"))),a.createElement("div",{className:"countsDownloads countsProducts"},a.createElement("div",{className:"downloads products"},a.createElement("h1",{className:"mb-0"},"8+"),a.createElement("p",{className:"mb-0 ".concat(E?"white":"black")},"Products"))),a.createElement("div",{className:"countsDownloads countsRatings"},a.createElement("div",{className:"downloads ratings"},a.createElement("h1",{className:"mb-0"},"1M+"),a.createElement("p",{className:"mb-0 ".concat(E?"white":"black")},"Ratings")))))),a.createElement("section",{id:"methodologySection"},a.createElement("div",{className:"methodologyContainer"},a.createElement("div",{className:"methodologyTitle"},a.createElement("h1",null,"METHODOLOGY")),a.createElement("div",{className:"cardContainer"},a.createElement("div",{className:"cards ".concat(E?"darkModeCards":"")},a.createElement("div",{className:"cardImg"},a.createElement("img",{src:_1,alt:"simplicityLogo"})),a.createElement("h2",{className:E?"white poppinsLight":"black"},"SIMPLICITY"),a.createElement("p",null,"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.")),a.createElement("div",{className:"cards ".concat(E?"darkModeCards":"")},a.createElement("div",{className:"cardImg"},a.createElement("img",{src:O1,alt:"criticalLogo"})),a.createElement("h2",{className:E?"white poppinsLight":"black"},"CRITICAL ",a.createElement("br",null),"THINKING"),a.createElement("p",null,"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.")),a.createElement("div",{className:"cards ".concat(E?"darkModeCards":"")},a.createElement("div",{className:"cardImg"},a.createElement("img",{src:cn,alt:"effectiveLogo"})),a.createElement("h2",{className:E?"white poppinsLight":"black"},"EFFECTIVENESS ",a.createElement("br",null)," & EFFICIENCY"),a.createElement("p",null,"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.")),a.createElement("div",{className:"cards ".concat(E?"darkModeCards":"")},a.createElement("div",{className:"cardImg"},a.createElement("img",{src:F1,alt:"securityLogo"})),a.createElement("h2",{className:E?"white poppinsLight":"black"},"SECURITY"),a.createElement("p",null,"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity."))))),a.createElement("section",{id:"whyUsSection"},a.createElement("div",{className:"whyUsContainer"},a.createElement("div",{className:"whyUsTitle"},a.createElement("p",{className:E?"white poppinsLight":"black"},"WHY"),a.createElement("h1",null,"THE CORE TECH")),a.createElement("div",{className:"coreTechFlexParent"},a.createElement("div",{className:"ddd"},E?a.createElement("img",{src:U1,alt:"discover"}):a.createElement("img",{src:yo,alt:"discover"}),a.createElement("h2",{className:E?"white":"black"},"DISCOVER"),a.createElement("p",{className:E?"textColor":""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m")),a.createElement("div",{className:"ddd"},E?a.createElement("img",{src:au,alt:"discover"}):a.createElement("img",{src:lu,alt:"discover"}),a.createElement("h2",{className:E?"white":"black"},"DESIGN"),a.createElement("p",{className:E?"textColor":""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m")),a.createElement("div",{className:"ddd"},E?a.createElement("img",{src:Ya,alt:"discover"}):a.createElement("img",{src:xo,alt:"discover"}),a.createElement("h2",{className:E?"white poppinsLight":"black"},"DELIVER"),a.createElement("p",{className:E?"textColor":""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m")),a.createElement("div",{className:"hrLine"})))),a.createElement("section",{id:"testimonialSection"},a.createElement("div",{className:"testimonialContainer"},a.createElement("div",{className:"testimonialTitle"},a.createElement("p",{className:E?"white poppinsLight":"black"},"CLIENTS TESTIMONIAL"),a.createElement("h1",null,"WHAT OUR CLIENTS ARE SAYING")),a.createElement("div",{className:"clientImgsContainer"},a.createElement("ul",{className:"honeycomb"},te.map(function(H){return a.createElement("li",{key:H.id,className:"honeycomb-cell honeycomb-cell-client ".concat(Z===H.id?"transform":""),onMouseEnter:function(){return O=H.id,void J(O);var O},onMouseLeave:W},a.createElement("img",{className:"honeycomb-cell_img",src:H.img,alt:H.name}))}))),a.createElement("div",{className:"doubleQuotes"},a.createElement("img",{src:zt,alt:"doubleQuotes"}),te.map(function(H){return a.createElement("div",{key:H.id,className:"hoveredContent",style:{display:Z===H.id?"block":"none"}},a.createElement("p",{className:E?"white poppinsLight":""},H.testimonial),a.createElement("h3",null,H.name),a.createElement("h5",{className:E?"white poppinsLight":""},H.company))})))),a.createElement("section",{id:"getInTouchSection"},a.createElement("div",{className:"getInTouchCointainer"},a.createElement("h1",null,"GET IN TOUCH"),a.createElement("p",{className:E?"white poppinsLight":""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis"),a.createElement("button",{className:"contactBtn"},a.createElement("svg",{width:"180px",height:"60px",viewBox:"0 0 180 60",className:"border"},a.createElement("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"bg-line"}),a.createElement("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"hl-line"})),a.createElement("span",{className:E?"white poppinsLight":""},"CONTACT US")))),a.createElement(xt,null),a.createElement(ol,null))};var qa=s(5879),sl={};sl.styleTagTransform=ut(),sl.setAttributes=Mt(),sl.insert=Kt().bind(null,"head"),sl.domAPI=Gt(),sl.insertStyleElement=st(),qn()(qa.A,sl),qa.A&&qa.A.locals&&qa.A.locals;const pa=s.p+"images/Polygon60.c7af14fe42bed305e6f1.png",ul=s.p+"images/PolygonWhite.1d857c0b32fc3a17d3a5.png",No=s.p+"images/About Us.8899327aa5b708e786f7.png",pu=s.p+"images/innovationIcon.c6b9e47eb109745a492c.png",Tr=s.p+"images/Experties.5564b1d7d4f6dc4fca63.png",Lo=s.p+"images/business_585.f2c4f4fa86b26b4e948c.png",fa=s.p+"images/client.fb2af3c69eab1f2aea9f.jpg",fu=s.p+"images/executive-business-woman-office.6ea1b3296b2ed51854a1.jpg";function ma(x,L){(L==null||L>x.length)&&(L=x.length);for(var E=0,I=new Array(L);E<L;E++)I[E]=x[E];return I}const ei=function(){var x,L,E=(0,a.useContext)($t).darkMode,I=(x=(0,a.useState)(2),L=2,function(O){if(Array.isArray(O))return O}(x)||function(O,oe){var ae=O==null?null:typeof Symbol<"u"&&O[Symbol.iterator]||O["@@iterator"];if(ae!=null){var me,ye,be,Se,ge=[],we=!0,Ee=!1;try{if(be=(ae=ae.call(O)).next,oe===0){if(Object(ae)!==ae)return;we=!1}else for(;!(we=(me=be.call(ae)).done)&&(ge.push(me.value),ge.length!==oe);we=!0);}catch(Ne){Ee=!0,ye=Ne}finally{try{if(!we&&ae.return!=null&&(Se=ae.return(),Object(Se)!==Se))return}finally{if(Ee)throw ye}}return ge}}(x,L)||function(O,oe){if(O){if(typeof O=="string")return ma(O,oe);var ae=Object.prototype.toString.call(O).slice(8,-1);return ae==="Object"&&O.constructor&&(ae=O.constructor.name),ae==="Map"||ae==="Set"?Array.from(O):ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae)?ma(O,oe):void 0}}(x,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=I[0],J=I[1],te=[{id:1,name:"John Smith",designation:"CEO",details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Co},{id:2,name:"Alexa ",designation:"Founder",details:"It looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:fa},{id:3,name:"Vipin",designation:"Software Engineer",details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:wo},{id:4,name:"Ellyse Perry ",designation:"UI/UX Designer",details:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:ua},{id:5,name:"Peter",designation:"Quality Assurance Analyst",details:"It is a long established fact that a reader will be distract The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters normal distribution of letters..",img:sa},{id:6,name:"Allena Smith",designation:"Web Developer",details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:rl},{id:7,name:"Sundar",designation:"Systems Analyst",details:"that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Wn},{id:8,name:"Sundar",designation:"Network Engineer",details:"that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Wn}],W=function(O){J(O)},H=function(){J(Z)};return a.createElement(a.Fragment,null,a.createElement(oa,null),a.createElement("div",{className:"aboutContainer"},a.createElement("div",{className:"aboutUsLandingContainer"},a.createElement("div",{className:"aboutUsLandingImg"},a.createElement("img",{src:No,alt:"aboutImg"})),a.createElement("div",{className:"aboutUsLandingText"},a.createElement("h1",null,a.createElement("span",{className:"borderFont"},"Ab"),a.createElement("span",null,"out Us")),a.createElement("p",{className:E?"darkColor poppinsLight":""},"CoreTech is a leading provider of technology solutions for businesses. With a focus on delivering the highest quality products and services, we help businesses harness the power of technology to achieve their goals. Our team of experts is dedicated to driving innovation and delivering results that exceed our clients' expectations."))),a.createElement("div",{className:"priciplesContainer"},a.createElement("div",{className:"pricipleHeading"},a.createElement("h1",null,"OUR PRINCIPLES")),a.createElement("div",{className:"pricipleHexagonParent"},a.createElement("div",{className:"leftHexagon"},a.createElement("div",{className:"imgHexagon"},E?a.createElement("img",{src:pa,alt:"hexagon"}):a.createElement("img",{src:ul,alt:"hexagon"})),a.createElement("div",{className:"hexagonContent"},a.createElement("p",{className:E?"dark-mode":""},a.createElement("img",{src:pu,alt:"innovation",className:"innovationLogo"}),a.createElement("h2",{className:E?"white poppinsLight":""},"INNOVATION"),a.createElement("span",{className:E?"pricipletextDark poppinsLight":""},"We constantly strive to bring innovative IT solutions that revolutionize the way businesses operate.")))),a.createElement("div",{className:"leftHexagon"},a.createElement("div",{className:"imgHexagon"},E?a.createElement("img",{src:pa,alt:"hexagon"}):a.createElement("img",{src:ul,alt:"hexagon"})),a.createElement("div",{className:"hexagonContent"},a.createElement("p",{className:E?"dark-mode":""},a.createElement("img",{src:Tr,alt:"innovation",className:"expertiseLogo"}),a.createElement("h2",{className:E?"white poppinsLight":""},"OUR EXPERTIES"),a.createElement("span",{className:E?"pricipletextDark poppinsLight":""},"We specialize in web development, software development, and mobile app development. Our team of experts has extensive experience in working with various technologies such as AI, PHP, Python, C#, JavaScript, HTML, CSS and more.")))),a.createElement("div",{className:"leftHexagon"},a.createElement("div",{className:"imgHexagon"},E?a.createElement("img",{src:pa,alt:"hexagon"}):a.createElement("img",{src:ul,alt:"hexagon"})),a.createElement("div",{className:"hexagonContent"},a.createElement("p",{className:E?"dark-mode":""},a.createElement("img",{src:Lo,alt:"innovation",className:"clientsLogo"}),a.createElement("h2",{className:E?"white poppinsLight":""},"OUR CLIENTS"),a.createElement("span",{className:E?"pricipletextDark poppinsLight":""},"We constantly strive to bring innovative IT solutions that revolutionize the way businesses operate.")))))),a.createElement("div",{className:"ourTeamContainer"},a.createElement("div",{className:"ourTeamHeading"},a.createElement("h1",null,"MEET THE BEST TEAM EVER")),a.createElement("div",{className:"teamTopImagesFlex"},a.createElement("div",{className:"teamMember firstMember"},a.createElement("img",{src:Co,alt:"teamMember",onMouseEnter:function(){return W(1)},onMouseLeave:H,className:Z===1?"imgTransform":""})),a.createElement("div",{className:"teamMember secondMember"},a.createElement("img",{src:fa,alt:"teamMember",onMouseEnter:function(){return W(2)},onMouseLeave:H,className:Z===2?"imgTransform":""})),a.createElement("div",{className:"teamMember thirdMember"},a.createElement("img",{src:wo,alt:"teamMember",onMouseEnter:function(){return W(3)},onMouseLeave:H,className:Z===3?"imgTransform":""}))),a.createElement("div",{className:"teamMiddleFlex"},a.createElement("div",{className:"teamMember eightMember"},a.createElement("img",{src:fu,alt:"teamMember",onMouseEnter:function(){return W(8)},onMouseLeave:H,className:Z===8?"imgTransform":""})),te.map(function(O){return a.createElement("div",{className:"aboutMember ".concat(E?"changeShadow":""),style:{display:Z===O.id?"block":"none"}},a.createElement("div",{className:"memberName"},a.createElement("h2",{className:"mb-0 ".concat(E?"white poppinsLight":"")},O.name)),a.createElement("h6",{className:"".concat(E?"white poppinsLight":"")},O.designation),a.createElement("p",{className:"".concat(E?"teamInfoDarkClr":"")},O.details))}),a.createElement("div",{className:"teamMember fourthMember"},a.createElement("img",{src:ua,alt:"teamMember",onMouseEnter:function(){return W(4)},onMouseLeave:H,className:Z===4?"imgTransform":""}))),a.createElement("div",{className:"teamTopImagesFlex teamBottom"},a.createElement("div",{className:"teamMember seventhMember"},a.createElement("img",{src:Wn,alt:"teamMember",onMouseEnter:function(){return W(7)},onMouseLeave:H,className:Z===7?"imgTransform":""})),a.createElement("div",{className:"teamMember sixthMember"},a.createElement("img",{src:rl,alt:"teamMember",onMouseEnter:function(){return W(6)},onMouseLeave:H,className:Z===6?"imgTransform":""})),a.createElement("div",{className:"teamMember fifthMember"},a.createElement("img",{src:sa,alt:"teamMember",onMouseEnter:function(){return W(5)},onMouseLeave:H,className:Z===5?"imgTransform":""}))))),a.createElement(xt,null))};var ha=s(2419),bn={};bn.styleTagTransform=ut(),bn.setAttributes=Mt(),bn.insert=Kt().bind(null,"head"),bn.domAPI=Gt(),bn.insertStyleElement=st(),qn()(ha.A,bn),ha.A&&ha.A.locals&&ha.A.locals;const jo=s.p+"images/portfolio94.6c23939c624b0f40674f.png",ga=[{id:"1",img:s.p+"images/5614091_2902106.30689f460b426918c777.jpg",category:"web",title:"Petro Website",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="world">
                    <path d="m8.2226563 20h-6.6650391c-.3535156-1.2758789-.5576172-2.6132812-.5576172-4s.2041016-2.7241211.5576172-4h6.6650391c-.140625 1.28125-.2226563 2.6152344-.2226563 4s.0820313 2.71875.2226563 4zm13.5429687-8h-11.53125c-.1464844 1.2587891-.234375 2.5908203-.234375 4s.0878906 2.7412109.234375 4h11.53125c.1464844-1.2587891.234375-2.5908203.234375-4s-.0878906-2.7412109-.234375-4zm-11.2392578 10c1.015625 5.5029297 3.3359375 9 5.4736328 9s4.4580078-3.4970703 5.4736328-9zm10.9472656-12c-1.015625-5.5029297-3.3359375-9-5.4736328-9s-4.4580078 3.4970703-5.4736328 9zm2.0214844 12c-.6025391 3.4916992-1.7177734 6.4072266-3.1669922 8.3574219 4.2226563-1.2753906 7.6601563-4.3637696 9.4111328-8.3574219zm6.9472656-2c.3535156-1.2758789.5576172-2.6132812.5576172-4s-.2041016-2.7241211-.5576172-4h-6.6650391c.1406251 1.28125.2226563 2.6152344.2226563 4s-.0820313 2.71875-.2226563 4zm-21.9375-10c.6025391-3.4916992 1.7177734-6.4072266 3.1669922-8.3574219-4.2226562 1.2753907-7.6601562 4.3637696-9.4111328 8.3574219zm0 12h-6.2441406c1.7509766 3.9936523 5.1884766 7.0820313 9.4111328 8.3574219-1.4492187-1.9501953-2.5644531-4.8657227-3.1669922-8.3574219zm14.9902344-12h6.2441406c-1.7509766-3.9936523-5.1884766-7.0820313-9.4111328-8.3574219 1.4492188 1.9501953 2.5644531 4.8657227 3.1669922 8.3574219z" />
                </g>
            </svg>
`},{id:"2",img:s.p+"images/30933344_207z_education.c14355860431875a40dc.jpg",category:"ui/ux",title:"Artix",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 299.679 299.679"
                style={{ enableBackground: "new 0 0 299.679 299.679" }}
                xmlSpace="preserve"
            >
                <g id="XMLID_197_">
                    <path
                        id="XMLID_221_"
                        d="M181.122,299.679c10.02,0,18.758-8.738,18.758-18.758v-43.808h12.525c7.516,0,12.525-5.011,12.525-12.525
		V99.466H74.749v125.123c0,7.515,5.01,12.525,12.525,12.525H99.8v43.808c0,10.02,8.736,18.758,18.758,18.758
		c10.019,0,18.756-8.738,18.756-18.758v-43.808h25.051v43.808C162.364,290.941,171.102,299.679,181.122,299.679z"
                    />
                    <path
                        id="XMLID_222_"
                        d="M256.214,224.589c10.02,0,18.756-8.737,18.756-18.758v-87.615c0-9.967-8.736-18.75-18.756-18.75
		c-10.021,0-18.758,8.783-18.758,18.75v87.615C237.456,215.851,246.192,224.589,256.214,224.589z"
                    />
                    <path
                        id="XMLID_223_"
                        d="M43.466,224.589c10.021,0,18.758-8.737,18.758-18.758v-87.615c0-9.967-8.736-18.75-18.758-18.75
		c-10.02,0-18.756,8.783-18.756,18.75v87.615C24.71,215.851,33.446,224.589,43.466,224.589z"
                    />
                    <path
                        id="XMLID_224_"
                        d="M209.899,1.89c-2.504-2.52-6.232-2.52-8.736,0l-16.799,16.743l-0.775,0.774
		c-9.961-4.988-21.129-7.479-33.566-7.503c-0.061,0-0.121-0.002-0.182-0.002h-0.002c-0.063,0-0.121,0.002-0.184,0.002
		c-12.436,0.024-23.604,2.515-33.564,7.503l-0.777-0.774L98.516,1.89c-2.506-2.52-6.232-2.52-8.736,0
		c-2.506,2.506-2.506,6.225,0,8.729l16.25,16.253c-5.236,3.496-9.984,7.774-14.113,12.667C82.032,51.256,75.727,66.505,74.86,83.027
		c-0.008,0.172-0.025,0.342-0.033,0.514c-0.053,1.125-0.078,2.256-0.078,3.391H224.93c0-1.135-0.027-2.266-0.078-3.391
		c-0.008-0.172-0.025-0.342-0.035-0.514c-0.865-16.522-7.172-31.772-17.057-43.487c-4.127-4.893-8.877-9.171-14.113-12.667
		l16.252-16.253C212.405,8.115,212.405,4.396,209.899,1.89z M118.534,65.063c-5.182,0-9.383-4.201-9.383-9.383
		c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383C127.917,60.862,123.716,65.063,118.534,65.063z M181.145,65.063
		c-5.182,0-9.383-4.201-9.383-9.383c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383
		C190.528,60.862,186.327,65.063,181.145,65.063z"
                    />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
`},{id:"3",img:s.p+"images/7349679_3639727.fa793fcdaecb79285e87.jpg",category:"ios",title:"Project Name",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 22.773 22.773"
                style={{ enableBackground: "new 0 0 22.773 22.773" }}
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                        <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                    </g>
                </g>
            </svg>
`},{id:"4",img:s.p+"images/4011795_17272-Photoroom.png-Photoroom.9f9d4538a03a8ef3241e.png",category:"web",title:"Play Fit",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="world">
                    <path d="m8.2226563 20h-6.6650391c-.3535156-1.2758789-.5576172-2.6132812-.5576172-4s.2041016-2.7241211.5576172-4h6.6650391c-.140625 1.28125-.2226563 2.6152344-.2226563 4s.0820313 2.71875.2226563 4zm13.5429687-8h-11.53125c-.1464844 1.2587891-.234375 2.5908203-.234375 4s.0878906 2.7412109.234375 4h11.53125c.1464844-1.2587891.234375-2.5908203.234375-4s-.0878906-2.7412109-.234375-4zm-11.2392578 10c1.015625 5.5029297 3.3359375 9 5.4736328 9s4.4580078-3.4970703 5.4736328-9zm10.9472656-12c-1.015625-5.5029297-3.3359375-9-5.4736328-9s-4.4580078 3.4970703-5.4736328 9zm2.0214844 12c-.6025391 3.4916992-1.7177734 6.4072266-3.1669922 8.3574219 4.2226563-1.2753906 7.6601563-4.3637696 9.4111328-8.3574219zm6.9472656-2c.3535156-1.2758789.5576172-2.6132812.5576172-4s-.2041016-2.7241211-.5576172-4h-6.6650391c.1406251 1.28125.2226563 2.6152344.2226563 4s-.0820313 2.71875-.2226563 4zm-21.9375-10c.6025391-3.4916992 1.7177734-6.4072266 3.1669922-8.3574219-4.2226562 1.2753907-7.6601562 4.3637696-9.4111328 8.3574219zm0 12h-6.2441406c1.7509766 3.9936523 5.1884766 7.0820313 9.4111328 8.3574219-1.4492187-1.9501953-2.5644531-4.8657227-3.1669922-8.3574219zm14.9902344-12h6.2441406c-1.7509766-3.9936523-5.1884766-7.0820313-9.4111328-8.3574219 1.4492188 1.9501953 2.5644531 4.8657227 3.1669922 8.3574219z" />
                </g>
            </svg>
`},{id:"5",img:s.p+"images/30933344_207z_education-Photoroom.png-Photoroom.780ede30a89a02209d3c.png",category:"android",title:"Banking App",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 299.679 299.679"
                style={{ enableBackground: "new 0 0 299.679 299.679" }}
                xmlSpace="preserve"
            >
                <g id="XMLID_197_">
                    <path
                        id="XMLID_221_"
                        d="M181.122,299.679c10.02,0,18.758-8.738,18.758-18.758v-43.808h12.525c7.516,0,12.525-5.011,12.525-12.525
		V99.466H74.749v125.123c0,7.515,5.01,12.525,12.525,12.525H99.8v43.808c0,10.02,8.736,18.758,18.758,18.758
		c10.019,0,18.756-8.738,18.756-18.758v-43.808h25.051v43.808C162.364,290.941,171.102,299.679,181.122,299.679z"
                    />
                    <path
                        id="XMLID_222_"
                        d="M256.214,224.589c10.02,0,18.756-8.737,18.756-18.758v-87.615c0-9.967-8.736-18.75-18.756-18.75
		c-10.021,0-18.758,8.783-18.758,18.75v87.615C237.456,215.851,246.192,224.589,256.214,224.589z"
                    />
                    <path
                        id="XMLID_223_"
                        d="M43.466,224.589c10.021,0,18.758-8.737,18.758-18.758v-87.615c0-9.967-8.736-18.75-18.758-18.75
		c-10.02,0-18.756,8.783-18.756,18.75v87.615C24.71,215.851,33.446,224.589,43.466,224.589z"
                    />
                    <path
                        id="XMLID_224_"
                        d="M209.899,1.89c-2.504-2.52-6.232-2.52-8.736,0l-16.799,16.743l-0.775,0.774
		c-9.961-4.988-21.129-7.479-33.566-7.503c-0.061,0-0.121-0.002-0.182-0.002h-0.002c-0.063,0-0.121,0.002-0.184,0.002
		c-12.436,0.024-23.604,2.515-33.564,7.503l-0.777-0.774L98.516,1.89c-2.506-2.52-6.232-2.52-8.736,0
		c-2.506,2.506-2.506,6.225,0,8.729l16.25,16.253c-5.236,3.496-9.984,7.774-14.113,12.667C82.032,51.256,75.727,66.505,74.86,83.027
		c-0.008,0.172-0.025,0.342-0.033,0.514c-0.053,1.125-0.078,2.256-0.078,3.391H224.93c0-1.135-0.027-2.266-0.078-3.391
		c-0.008-0.172-0.025-0.342-0.035-0.514c-0.865-16.522-7.172-31.772-17.057-43.487c-4.127-4.893-8.877-9.171-14.113-12.667
		l16.252-16.253C212.405,8.115,212.405,4.396,209.899,1.89z M118.534,65.063c-5.182,0-9.383-4.201-9.383-9.383
		c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383C127.917,60.862,123.716,65.063,118.534,65.063z M181.145,65.063
		c-5.182,0-9.383-4.201-9.383-9.383c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383
		C190.528,60.862,186.327,65.063,181.145,65.063z"
                    />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
`},{id:"6",img:s.p+"images/9027716_4074771.47b056b7bd9988eb45b8.jpg",category:"ios",title:"Hexa Hub",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 22.773 22.773"
                style={{ enableBackground: "new 0 0 22.773 22.773" }}
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                        <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                    </g>
                </g>
            </svg>
`}];function cl(x,L){(L==null||L>x.length)&&(L=x.length);for(var E=0,I=new Array(L);E<L;E++)I[E]=x[E];return I}const dl=function(){var x,L,E=(0,a.useContext)($t).darkMode,I=(x=(0,a.useState)(ga),L=2,function(W){if(Array.isArray(W))return W}(x)||function(W,H){var O=W==null?null:typeof Symbol<"u"&&W[Symbol.iterator]||W["@@iterator"];if(O!=null){var oe,ae,me,ye,be=[],Se=!0,ge=!1;try{if(me=(O=O.call(W)).next,H===0){if(Object(O)!==O)return;Se=!1}else for(;!(Se=(oe=me.call(O)).done)&&(be.push(oe.value),be.length!==H);Se=!0);}catch(we){ge=!0,ae=we}finally{try{if(!Se&&O.return!=null&&(ye=O.return(),Object(ye)!==ye))return}finally{if(ge)throw ae}}return be}}(x,L)||function(W,H){if(W){if(typeof W=="string")return cl(W,H);var O=Object.prototype.toString.call(W).slice(8,-1);return O==="Object"&&W.constructor&&(O=W.constructor.name),O==="Map"||O==="Set"?Array.from(W):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?cl(W,H):void 0}}(x,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=I[0],J=I[1],te=function(W){if(W==="all")J(ga);else{var H=ga.filter(function(O){return O.category===W});J(H)}};return a.createElement(a.Fragment,null,a.createElement(oa,null),a.createElement("div",{className:"aboutContainer pb-5"},a.createElement("div",{className:"aboutUsLandingContainer"},a.createElement("div",{className:"aboutUsLandingImg"},a.createElement("img",{src:jo,alt:"aboutImg"})),a.createElement("div",{className:"aboutUsLandingText"},a.createElement("h1",null,a.createElement("span",null,"Port"),a.createElement("span",{className:"borderFont"},"folio")),a.createElement("p",{className:E?"darkColor poppinsLight":""},"Our company offers a comprehensive range of services tailored to meet the diverse needs of our clients. From innovative digital solutions to traditional marketing strategies, we provide a complete suite of services designed to help businesses thrive in today's competitive landscape. Our expertise spans across areas such as web development, mobile app development, graphic design, content creation, social media management, SEO optimization, and more."))),a.createElement("div",{className:"ourPortFolioParent"},a.createElement("div",{className:"pricipleHeading"},a.createElement("h1",null,"OUR PORTFOLIO")),a.createElement("div",{className:"filterBtnsParent"},a.createElement("div",{className:"filterBtns "},a.createElement("button",{className:" filterbtn allbtn",onClick:function(){return te("all")}},"All")),a.createElement("div",{className:"filterBtns"},a.createElement("button",{className:"filterbtn",onClick:function(){return te("ui/ux")}},"UI/UX Design")),a.createElement("div",{className:"filterBtns"},a.createElement("button",{className:"filterbtn",onClick:function(){return te("android")}},"Android/iOS")),a.createElement("div",{className:"filterBtns"},a.createElement("button",{className:"filterbtn",onClick:function(){return te("web")}},"Website/WebApp"))),a.createElement("div",{className:"portfolioCardsParent"},Z.map(function(W,H){return a.createElement("div",{className:"portfolioCard",key:H},a.createElement("div",{className:"portfoliocardImg"},a.createElement("img",{src:W.img,alt:"portfolio"})),a.createElement("div",{className:"portfolioInfo"},a.createElement("p",null,W.title),a.createElement("div",{className:"applicationIcon",dangerouslySetInnerHTML:{__html:W.icon}})))})))),a.createElement(xt,null))};var pl=s(687),Rt={};Rt.styleTagTransform=ut(),Rt.setAttributes=Mt(),Rt.insert=Kt().bind(null,"head"),Rt.domAPI=Gt(),Rt.insertStyleElement=st(),qn()(pl.A,Rt),pl.A&&pl.A.locals&&pl.A.locals;const H1=s.p+"images/contactus.859600853eb4c2755524.png",ni=s.p+"images/Group15.354d0836074b05ca1f00.png",mu=s.p+"images/call1.7426c262b84448dcb4fa.png",D1=s.p+"images/location-pin.8de7cde5adaf84e007b8.png",Po=s.p+"images/email1.84bfbecd4b8dc91140fa.png",V1=function(){var x=(0,a.useContext)($t).darkMode;return a.createElement(a.Fragment,null,a.createElement(oa,null),a.createElement("div",{className:"contactContainer"},a.createElement("div",{className:"aboutUsLandingContainer"},a.createElement("div",{className:"aboutUsLandingImg"},a.createElement("img",{className:"contactImg",src:H1,alt:"contactImg"})),a.createElement("div",{className:"aboutUsLandingText"},a.createElement("h1",null,a.createElement("span",{className:"borderFont"},"Cont"),a.createElement("span",null,"act Us")),a.createElement("p",{className:x?"darkColor poppinsLight":""},"Our company offers a comprehensive range of services tailored to meet the diverse needs of our clients. From innovative digital solutions to traditional marketing strategies, we provide a"))),a.createElement("div",{className:"formMapSectionParent"},a.createElement("div",{className:"formSection ".concat(x?"containerDarkShadow":"")},a.createElement("div",{className:"formLeftPart"},a.createElement("h1",null,"Get In Touch"),a.createElement("p",{className:x?"white poppinsLight":""},"We are here for you! How can we help?"),a.createElement("form",{action:""},a.createElement("input",{type:"text",placeholder:"Enter your name"}),a.createElement("input",{type:"text",placeholder:"Enter your email address"}),a.createElement("textarea",{rows:"6",class:"custom-textarea",placeholder:"Go ahead, We are listening"}),a.createElement("button",null,"Submit"))),a.createElement("div",{className:"formRightPart"},a.createElement("img",{className:"formImg",src:ni,alt:"contactForm"}),a.createElement("div",{className:"contactDetails"},a.createElement("div",{className:"logoDetailFlex"},a.createElement("div",{className:"circle"},a.createElement("img",{src:D1,alt:"location"})),a.createElement("div",{className:"details ".concat(x?"white poppinsLight":"")},"16 Plymouth Road, ",a.createElement("br",null)," Braintree, MA 02184")),a.createElement("div",{className:"logoDetailFlex"},a.createElement("div",{className:"circle"},a.createElement("img",{src:mu,alt:"call"})),a.createElement("div",{className:"details ".concat(x?"white poppinsLight":"")},"(978) 992 0049")),a.createElement("div",{className:"logoDetailFlex"},a.createElement("div",{className:"circle"},a.createElement("img",{src:Po,alt:"email"})),a.createElement("div",{className:"details ".concat(x?"white poppinsLight":"")},"Coretechllc@icloud.com"))))),a.createElement("div",{className:"formSocialIcons"},a.createElement("i",{class:"fa-brands fa-facebook-f"}),a.createElement("i",{class:"fa-brands fa-linkedin-in"}),a.createElement("i",{class:"fa-brands fa-x-twitter"}))),a.createElement("div",{className:"mapSection"},a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.5736959315927!2d72.97113807411004!3d20.768065996683642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ee691bdc222d%3A0x8601d0112c1f6232!2sNirvana%20Tutoration!5e0!3m2!1sen!2sin!4v1700914206423!5m2!1sen!2sin",width:"100%",height:"369",style:{border:0,borderRadius:"20px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"googleMap"}))),a.createElement(xt,null))},W1=function(){return React.createElement(Ks,null,React.createElement(po,null,React.createElement(qr,{path:"/",element:React.createElement(Ja,null)}),React.createElement(qr,{path:"/about",element:React.createElement(ei,null)}),React.createElement(qr,{path:"/portfolio",element:React.createElement(dl,null)}),React.createElement(qr,{path:"/contact",element:React.createElement(V1,null)})),React.createElement(ol,null))};var ti=s(7568),Mr={};Mr.styleTagTransform=ut(),Mr.setAttributes=Mt(),Mr.insert=Kt().bind(null,"head"),Mr.domAPI=Gt(),Mr.insertStyleElement=st(),qn()(ti.A,Mr),ti.A&&ti.A.locals&&ti.A.locals,h.createRoot(document.getElementById("root")).render(a.createElement(nu,null,a.createElement(W1,null)))})()})();function v7(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var th={exports:{}},p1={},rh={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),y7=Symbol.for("react.portal"),x7=Symbol.for("react.fragment"),w7=Symbol.for("react.strict_mode"),C7=Symbol.for("react.profiler"),b7=Symbol.for("react.provider"),E7=Symbol.for("react.context"),k7=Symbol.for("react.forward_ref"),S7=Symbol.for("react.suspense"),A7=Symbol.for("react.memo"),N7=Symbol.for("react.lazy"),Of=Symbol.iterator;function L7(e){return e===null||typeof e!="object"?null:(e=Of&&e[Of]||e["@@iterator"],typeof e=="function"?e:null)}var lh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ah=Object.assign,ih={};function to(e,n,l){this.props=e,this.context=n,this.refs=ih,this.updater=l||lh}to.prototype.isReactComponent={};to.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};to.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function oh(){}oh.prototype=to.prototype;function Bd(e,n,l){this.props=e,this.context=n,this.refs=ih,this.updater=l||lh}var Hd=Bd.prototype=new oh;Hd.constructor=Bd;ah(Hd,to.prototype);Hd.isPureReactComponent=!0;var Ff=Array.isArray,sh=Object.prototype.hasOwnProperty,Dd={current:null},uh={key:!0,ref:!0,__self:!0,__source:!0};function ch(e,n,l){var o,s={},c=null,a=null;if(n!=null)for(o in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(c=""+n.key),n)sh.call(n,o)&&!uh.hasOwnProperty(o)&&(s[o]=n[o]);var f=arguments.length-2;if(f===1)s.children=l;else if(1<f){for(var h=Array(f),y=0;y<f;y++)h[y]=arguments[y+2];s.children=h}if(e&&e.defaultProps)for(o in f=e.defaultProps,f)s[o]===void 0&&(s[o]=f[o]);return{$$typeof:Us,type:e,key:c,ref:a,props:s,_owner:Dd.current}}function j7(e,n){return{$$typeof:Us,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Vd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Us}function P7(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return n[l]})}var Uf=/\/+/g;function s0(e,n){return typeof e=="object"&&e!==null&&e.key!=null?P7(""+e.key):n.toString(36)}function kc(e,n,l,o,s){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Us:case y7:a=!0}}if(a)return a=e,s=s(a),e=o===""?"."+s0(a,0):o,Ff(s)?(l="",e!=null&&(l=e.replace(Uf,"$&/")+"/"),kc(s,n,l,"",function(y){return y})):s!=null&&(Vd(s)&&(s=j7(s,l+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Uf,"$&/")+"/")+e)),n.push(s)),1;if(a=0,o=o===""?".":o+":",Ff(e))for(var f=0;f<e.length;f++){c=e[f];var h=o+s0(c,f);a+=kc(c,n,l,h,s)}else if(h=L7(e),typeof h=="function")for(e=h.call(e),f=0;!(c=e.next()).done;)c=c.value,h=o+s0(c,f++),a+=kc(c,n,l,h,s);else if(c==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function ic(e,n,l){if(e==null)return e;var o=[],s=0;return kc(e,o,"","",function(c){return n.call(l,c,s++)}),o}function T7(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},Sc={transition:null},M7={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Sc,ReactCurrentOwner:Dd};function dh(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:ic,forEach:function(e,n,l){ic(e,function(){n.apply(this,arguments)},l)},count:function(e){var n=0;return ic(e,function(){n++}),n},toArray:function(e){return ic(e,function(n){return n})||[]},only:function(e){if(!Vd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Oe.Component=to;Oe.Fragment=x7;Oe.Profiler=C7;Oe.PureComponent=Bd;Oe.StrictMode=w7;Oe.Suspense=S7;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M7;Oe.act=dh;Oe.cloneElement=function(e,n,l){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ah({},e.props),s=e.key,c=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(c=n.ref,a=Dd.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(h in n)sh.call(n,h)&&!uh.hasOwnProperty(h)&&(o[h]=n[h]===void 0&&f!==void 0?f[h]:n[h])}var h=arguments.length-2;if(h===1)o.children=l;else if(1<h){f=Array(h);for(var y=0;y<h;y++)f[y]=arguments[y+2];o.children=f}return{$$typeof:Us,type:e.type,key:s,ref:c,props:o,_owner:a}};Oe.createContext=function(e){return e={$$typeof:E7,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b7,_context:e},e.Consumer=e};Oe.createElement=ch;Oe.createFactory=function(e){var n=ch.bind(null,e);return n.type=e,n};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(e){return{$$typeof:k7,render:e}};Oe.isValidElement=Vd;Oe.lazy=function(e){return{$$typeof:N7,_payload:{_status:-1,_result:e},_init:T7}};Oe.memo=function(e,n){return{$$typeof:A7,type:e,compare:n===void 0?null:n}};Oe.startTransition=function(e){var n=Sc.transition;Sc.transition={};try{e()}finally{Sc.transition=n}};Oe.unstable_act=dh;Oe.useCallback=function(e,n){return it.current.useCallback(e,n)};Oe.useContext=function(e){return it.current.useContext(e)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(e){return it.current.useDeferredValue(e)};Oe.useEffect=function(e,n){return it.current.useEffect(e,n)};Oe.useId=function(){return it.current.useId()};Oe.useImperativeHandle=function(e,n,l){return it.current.useImperativeHandle(e,n,l)};Oe.useInsertionEffect=function(e,n){return it.current.useInsertionEffect(e,n)};Oe.useLayoutEffect=function(e,n){return it.current.useLayoutEffect(e,n)};Oe.useMemo=function(e,n){return it.current.useMemo(e,n)};Oe.useReducer=function(e,n,l){return it.current.useReducer(e,n,l)};Oe.useRef=function(e){return it.current.useRef(e)};Oe.useState=function(e){return it.current.useState(e)};Oe.useSyncExternalStore=function(e,n,l){return it.current.useSyncExternalStore(e,n,l)};Oe.useTransition=function(){return it.current.useTransition()};Oe.version="18.3.1";rh.exports=Oe;var re=rh.exports;const _l=v7(re),I7=g7({__proto__:null,default:_l},[re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z7=re,R7=Symbol.for("react.element"),_7=Symbol.for("react.fragment"),O7=Object.prototype.hasOwnProperty,F7=z7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U7={key:!0,ref:!0,__self:!0,__source:!0};function ph(e,n,l){var o,s={},c=null,a=null;l!==void 0&&(c=""+l),n.key!==void 0&&(c=""+n.key),n.ref!==void 0&&(a=n.ref);for(o in n)O7.call(n,o)&&!U7.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)s[o]===void 0&&(s[o]=n[o]);return{$$typeof:R7,type:e,key:c,ref:a,props:s,_owner:F7.current}}p1.Fragment=_7;p1.jsx=ph;p1.jsxs=ph;th.exports=p1;var m=th.exports,F0={},fh={exports:{}},Pt={},mh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(le,ve){var Ae=le.length;le.push(ve);e:for(;0<Ae;){var ke=Ae-1>>>1,_e=le[ke];if(0<s(_e,ve))le[ke]=ve,le[Ae]=_e,Ae=ke;else break e}}function l(le){return le.length===0?null:le[0]}function o(le){if(le.length===0)return null;var ve=le[0],Ae=le.pop();if(Ae!==ve){le[0]=Ae;e:for(var ke=0,_e=le.length,Jn=_e>>>1;ke<Jn;){var j=2*(ke+1)-1,Y=le[j],q=j+1,he=le[q];if(0>s(Y,Ae))q<_e&&0>s(he,Y)?(le[ke]=he,le[q]=Ae,ke=q):(le[ke]=Y,le[j]=Ae,ke=j);else if(q<_e&&0>s(he,Ae))le[ke]=he,le[q]=Ae,ke=q;else break e}}return ve}function s(le,ve){var Ae=le.sortIndex-ve.sortIndex;return Ae!==0?Ae:le.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var a=Date,f=a.now();e.unstable_now=function(){return a.now()-f}}var h=[],y=[],v=1,S=null,A=3,M=!1,_=!1,U=!1,$=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(le){for(var ve=l(y);ve!==null;){if(ve.callback===null)o(y);else if(ve.startTime<=le)o(y),ve.sortIndex=ve.expirationTime,n(h,ve);else break;ve=l(y)}}function z(le){if(U=!1,N(le),!_)if(l(h)!==null)_=!0,Dn(K);else{var ve=l(y);ve!==null&&Vn(z,ve.startTime-le)}}function K(le,ve){_=!1,U&&(U=!1,b(de),de=-1),M=!0;var Ae=A;try{for(N(ve),S=l(h);S!==null&&(!(S.expirationTime>ve)||le&&!Ge());){var ke=S.callback;if(typeof ke=="function"){S.callback=null,A=S.priorityLevel;var _e=ke(S.expirationTime<=ve);ve=e.unstable_now(),typeof _e=="function"?S.callback=_e:S===l(h)&&o(h),N(ve)}else o(h);S=l(h)}if(S!==null)var Jn=!0;else{var j=l(y);j!==null&&Vn(z,j.startTime-ve),Jn=!1}return Jn}finally{S=null,A=Ae,M=!1}}var ie=!1,se=null,de=-1,Te=5,Ce=-1;function Ge(){return!(e.unstable_now()-Ce<Te)}function ln(){if(se!==null){var le=e.unstable_now();Ce=le;var ve=!0;try{ve=se(!0,le)}finally{ve?Cn():(ie=!1,se=null)}}else ie=!1}var Cn;if(typeof w=="function")Cn=function(){w(ln)};else if(typeof MessageChannel<"u"){var Bn=new MessageChannel,Hn=Bn.port2;Bn.port1.onmessage=ln,Cn=function(){Hn.postMessage(null)}}else Cn=function(){$(ln,0)};function Dn(le){se=le,ie||(ie=!0,Cn())}function Vn(le,ve){de=$(function(){le(e.unstable_now())},ve)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(le){le.callback=null},e.unstable_continueExecution=function(){_||M||(_=!0,Dn(K))},e.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<le?Math.floor(1e3/le):5},e.unstable_getCurrentPriorityLevel=function(){return A},e.unstable_getFirstCallbackNode=function(){return l(h)},e.unstable_next=function(le){switch(A){case 1:case 2:case 3:var ve=3;break;default:ve=A}var Ae=A;A=ve;try{return le()}finally{A=Ae}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(le,ve){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var Ae=A;A=le;try{return ve()}finally{A=Ae}},e.unstable_scheduleCallback=function(le,ve,Ae){var ke=e.unstable_now();switch(typeof Ae=="object"&&Ae!==null?(Ae=Ae.delay,Ae=typeof Ae=="number"&&0<Ae?ke+Ae:ke):Ae=ke,le){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Ae+_e,le={id:v++,callback:ve,priorityLevel:le,startTime:Ae,expirationTime:_e,sortIndex:-1},Ae>ke?(le.sortIndex=Ae,n(y,le),l(h)===null&&le===l(y)&&(U?(b(de),de=-1):U=!0,Vn(z,Ae-ke))):(le.sortIndex=_e,n(h,le),_||M||(_=!0,Dn(K))),le},e.unstable_shouldYield=Ge,e.unstable_wrapCallback=function(le){var ve=A;return function(){var Ae=A;A=ve;try{return le.apply(this,arguments)}finally{A=Ae}}}})(hh);mh.exports=hh;var B7=mh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H7=re,jt=B7;function ne(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,l=1;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gh=new Set,ws={};function Ha(e,n){Gi(e,n),Gi(e+"Capture",n)}function Gi(e,n){for(ws[e]=n,e=0;e<n.length;e++)gh.add(n[e])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),U0=Object.prototype.hasOwnProperty,D7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf={},Hf={};function V7(e){return U0.call(Hf,e)?!0:U0.call(Bf,e)?!1:D7.test(e)?Hf[e]=!0:(Bf[e]=!0,!1)}function W7(e,n,l,o){if(l!==null&&l.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:l!==null?!l.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q7(e,n,l,o){if(n===null||typeof n>"u"||W7(e,n,l,o))return!0;if(o)return!1;if(l!==null)switch(l.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ot(e,n,l,o,s,c,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=l,this.propertyName=e,this.type=n,this.sanitizeURL=c,this.removeEmptyString=a}var Un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Un[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Un[n]=new ot(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Un[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Un[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Un[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Un[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Un[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Un[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Un[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Qd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wd,Qd);Un[n]=new ot(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wd,Qd);Un[n]=new ot(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wd,Qd);Un[n]=new ot(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Un[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Un.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Un[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zd(e,n,l,o){var s=Un.hasOwnProperty(n)?Un[n]:null;(s!==null?s.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Q7(n,l,s,o)&&(l=null),o||s===null?V7(n)&&(l===null?e.removeAttribute(n):e.setAttribute(n,""+l)):s.mustUseProperty?e[s.propertyName]=l===null?s.type===3?!1:"":l:(n=s.attributeName,o=s.attributeNamespace,l===null?e.removeAttribute(n):(s=s.type,l=s===3||s===4&&l===!0?"":""+l,o?e.setAttributeNS(o,n,l):e.setAttribute(n,l))))}var Xr=H7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oc=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),B0=Symbol.for("react.profiler"),vh=Symbol.for("react.provider"),yh=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),H0=Symbol.for("react.suspense"),D0=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),jl=Symbol.for("react.lazy"),xh=Symbol.for("react.offscreen"),Df=Symbol.iterator;function Jo(e){return e===null||typeof e!="object"?null:(e=Df&&e[Df]||e["@@iterator"],typeof e=="function"?e:null)}var mn=Object.assign,u0;function is(e){if(u0===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);u0=n&&n[1]||""}return`
`+u0+e}var c0=!1;function d0(e,n){if(!e||c0)return"";c0=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){var o=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){o=y}e.call(n.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var s=y.stack.split(`
`),c=o.stack.split(`
`),a=s.length-1,f=c.length-1;1<=a&&0<=f&&s[a]!==c[f];)f--;for(;1<=a&&0<=f;a--,f--)if(s[a]!==c[f]){if(a!==1||f!==1)do if(a--,f--,0>f||s[a]!==c[f]){var h=`
`+s[a].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=a&&0<=f);break}}}finally{c0=!1,Error.prepareStackTrace=l}return(e=e?e.displayName||e.name:"")?is(e):""}function Z7(e){switch(e.tag){case 5:return is(e.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return e=d0(e.type,!1),e;case 11:return e=d0(e.type.render,!1),e;case 1:return e=d0(e.type,!0),e;default:return""}}function V0(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pi:return"Fragment";case ji:return"Portal";case B0:return"Profiler";case Yd:return"StrictMode";case H0:return"Suspense";case D0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yh:return(e.displayName||"Context")+".Consumer";case vh:return(e._context.displayName||"Context")+".Provider";case Gd:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kd:return n=e.displayName||null,n!==null?n:V0(e.type)||"Memo";case jl:n=e._payload,e=e._init;try{return V0(e(n))}catch{}}return null}function Y7(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V0(n);case 8:return n===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Zl(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wh(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function G7(e){var n=wh(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(a){o=""+a,c.call(this,a)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sc(e){e._valueTracker||(e._valueTracker=G7(e))}function Ch(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var l=n.getValue(),o="";return e&&(o=wh(e)?e.checked?"true":"false":e.value),e=o,e!==l?(n.setValue(e),!0):!1}function Oc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function W0(e,n){var l=n.checked;return mn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??e._wrapperState.initialChecked})}function Vf(e,n){var l=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;l=Zl(n.value!=null?n.value:l),e._wrapperState={initialChecked:o,initialValue:l,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bh(e,n){n=n.checked,n!=null&&Zd(e,"checked",n,!1)}function Q0(e,n){bh(e,n);var l=Zl(n.value),o=n.type;if(l!=null)o==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+l):e.value!==""+l&&(e.value=""+l);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Z0(e,n.type,l):n.hasOwnProperty("defaultValue")&&Z0(e,n.type,Zl(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wf(e,n,l){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,l||n===e.value||(e.value=n),e.defaultValue=n}l=e.name,l!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,l!==""&&(e.name=l)}function Z0(e,n,l){(n!=="number"||Oc(e.ownerDocument)!==e)&&(l==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+l&&(e.defaultValue=""+l))}var os=Array.isArray;function Di(e,n,l,o){if(e=e.options,n){n={};for(var s=0;s<l.length;s++)n["$"+l[s]]=!0;for(l=0;l<e.length;l++)s=n.hasOwnProperty("$"+e[l].value),e[l].selected!==s&&(e[l].selected=s),s&&o&&(e[l].defaultSelected=!0)}else{for(l=""+Zl(l),n=null,s=0;s<e.length;s++){if(e[s].value===l){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Y0(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mn({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qf(e,n){var l=n.value;if(l==null){if(l=n.children,n=n.defaultValue,l!=null){if(n!=null)throw Error(ne(92));if(os(l)){if(1<l.length)throw Error(ne(93));l=l[0]}n=l}n==null&&(n=""),l=n}e._wrapperState={initialValue:Zl(l)}}function Eh(e,n){var l=Zl(n.value),o=Zl(n.defaultValue);l!=null&&(l=""+l,l!==e.value&&(e.value=l),n.defaultValue==null&&e.defaultValue!==l&&(e.defaultValue=l)),o!=null&&(e.defaultValue=""+o)}function Zf(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function kh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function G0(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?kh(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uc,Sh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,l,o,s){MSApp.execUnsafeLocalFunction(function(){return e(n,l,o,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(uc=uc||document.createElement("div"),uc.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=uc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Cs(e,n){if(n){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=n;return}}e.textContent=n}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K7=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(e){K7.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ds[n]=ds[e]})});function Ah(e,n,l){return n==null||typeof n=="boolean"||n===""?"":l||typeof n!="number"||n===0||ds.hasOwnProperty(e)&&ds[e]?(""+n).trim():n+"px"}function Nh(e,n){e=e.style;for(var l in n)if(n.hasOwnProperty(l)){var o=l.indexOf("--")===0,s=Ah(l,n[l],o);l==="float"&&(l="cssFloat"),o?e.setProperty(l,s):e[l]=s}}var X7=mn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function K0(e,n){if(n){if(X7[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(ne(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(ne(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(ne(61))}if(n.style!=null&&typeof n.style!="object")throw Error(ne(62))}}function X0(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $0=null;function Xd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var J0=null,Vi=null,Wi=null;function Yf(e){if(e=Ds(e)){if(typeof J0!="function")throw Error(ne(280));var n=e.stateNode;n&&(n=v1(n),J0(e.stateNode,e.type,n))}}function Lh(e){Vi?Wi?Wi.push(e):Wi=[e]:Vi=e}function jh(){if(Vi){var e=Vi,n=Wi;if(Wi=Vi=null,Yf(e),n)for(e=0;e<n.length;e++)Yf(n[e])}}function Ph(e,n){return e(n)}function Th(){}var p0=!1;function Mh(e,n,l){if(p0)return e(n,l);p0=!0;try{return Ph(e,n,l)}finally{p0=!1,(Vi!==null||Wi!==null)&&(Th(),jh())}}function bs(e,n){var l=e.stateNode;if(l===null)return null;var o=v1(l);if(o===null)return null;l=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(ne(231,n,typeof l));return l}var q0=!1;if(Zr)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){q0=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{q0=!1}function $7(e,n,l,o,s,c,a,f,h){var y=Array.prototype.slice.call(arguments,3);try{n.apply(l,y)}catch(v){this.onError(v)}}var ps=!1,Fc=null,Uc=!1,ed=null,J7={onError:function(e){ps=!0,Fc=e}};function q7(e,n,l,o,s,c,a,f,h){ps=!1,Fc=null,$7.apply(J7,arguments)}function e4(e,n,l,o,s,c,a,f,h){if(q7.apply(this,arguments),ps){if(ps){var y=Fc;ps=!1,Fc=null}else throw Error(ne(198));Uc||(Uc=!0,ed=y)}}function Da(e){var n=e,l=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(l=n.return),e=n.return;while(e)}return n.tag===3?l:null}function Ih(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Gf(e){if(Da(e)!==e)throw Error(ne(188))}function n4(e){var n=e.alternate;if(!n){if(n=Da(e),n===null)throw Error(ne(188));return n!==e?null:e}for(var l=e,o=n;;){var s=l.return;if(s===null)break;var c=s.alternate;if(c===null){if(o=s.return,o!==null){l=o;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===l)return Gf(s),e;if(c===o)return Gf(s),n;c=c.sibling}throw Error(ne(188))}if(l.return!==o.return)l=s,o=c;else{for(var a=!1,f=s.child;f;){if(f===l){a=!0,l=s,o=c;break}if(f===o){a=!0,o=s,l=c;break}f=f.sibling}if(!a){for(f=c.child;f;){if(f===l){a=!0,l=c,o=s;break}if(f===o){a=!0,o=c,l=s;break}f=f.sibling}if(!a)throw Error(ne(189))}}if(l.alternate!==o)throw Error(ne(190))}if(l.tag!==3)throw Error(ne(188));return l.stateNode.current===l?e:n}function zh(e){return e=n4(e),e!==null?Rh(e):null}function Rh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Rh(e);if(n!==null)return n;e=e.sibling}return null}var _h=jt.unstable_scheduleCallback,Kf=jt.unstable_cancelCallback,t4=jt.unstable_shouldYield,r4=jt.unstable_requestPaint,wn=jt.unstable_now,l4=jt.unstable_getCurrentPriorityLevel,$d=jt.unstable_ImmediatePriority,Oh=jt.unstable_UserBlockingPriority,Bc=jt.unstable_NormalPriority,a4=jt.unstable_LowPriority,Fh=jt.unstable_IdlePriority,f1=null,kr=null;function i4(e){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(f1,e,void 0,(e.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:u4,o4=Math.log,s4=Math.LN2;function u4(e){return e>>>=0,e===0?32:31-(o4(e)/s4|0)|0}var cc=64,dc=4194304;function ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hc(e,n){var l=e.pendingLanes;if(l===0)return 0;var o=0,s=e.suspendedLanes,c=e.pingedLanes,a=l&268435455;if(a!==0){var f=a&~s;f!==0?o=ss(f):(c&=a,c!==0&&(o=ss(c)))}else a=l&~s,a!==0?o=ss(a):c!==0&&(o=ss(c));if(o===0)return 0;if(n!==0&&n!==o&&!(n&s)&&(s=o&-o,c=n&-n,s>=c||s===16&&(c&4194240)!==0))return n;if(o&4&&(o|=l&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)l=31-ir(n),s=1<<l,o|=e[l],n&=~s;return o}function c4(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d4(e,n){for(var l=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes;0<c;){var a=31-ir(c),f=1<<a,h=s[a];h===-1?(!(f&l)||f&o)&&(s[a]=c4(f,n)):h<=n&&(e.expiredLanes|=f),c&=~f}}function nd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uh(){var e=cc;return cc<<=1,!(cc&4194240)&&(cc=64),e}function f0(e){for(var n=[],l=0;31>l;l++)n.push(e);return n}function Bs(e,n,l){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ir(n),e[n]=l}function p4(e,n){var l=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<l;){var s=31-ir(l),c=1<<s;n[s]=0,o[s]=-1,e[s]=-1,l&=~c}}function Jd(e,n){var l=e.entangledLanes|=n;for(e=e.entanglements;l;){var o=31-ir(l),s=1<<o;s&n|e[o]&n&&(e[o]|=n),l&=~s}}var Ke=0;function Bh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hh,qd,Dh,Vh,Wh,td=!1,pc=[],Ol=null,Fl=null,Ul=null,Es=new Map,ks=new Map,Tl=[],f4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(e,n){switch(e){case"focusin":case"focusout":Ol=null;break;case"dragenter":case"dragleave":Fl=null;break;case"mouseover":case"mouseout":Ul=null;break;case"pointerover":case"pointerout":Es.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(n.pointerId)}}function es(e,n,l,o,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:l,eventSystemFlags:o,nativeEvent:c,targetContainers:[s]},n!==null&&(n=Ds(n),n!==null&&qd(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function m4(e,n,l,o,s){switch(n){case"focusin":return Ol=es(Ol,e,n,l,o,s),!0;case"dragenter":return Fl=es(Fl,e,n,l,o,s),!0;case"mouseover":return Ul=es(Ul,e,n,l,o,s),!0;case"pointerover":var c=s.pointerId;return Es.set(c,es(Es.get(c)||null,e,n,l,o,s)),!0;case"gotpointercapture":return c=s.pointerId,ks.set(c,es(ks.get(c)||null,e,n,l,o,s)),!0}return!1}function Qh(e){var n=Ta(e.target);if(n!==null){var l=Da(n);if(l!==null){if(n=l.tag,n===13){if(n=Ih(l),n!==null){e.blockedOn=n,Wh(e.priority,function(){Dh(l)});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var l=rd(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(l===null){l=e.nativeEvent;var o=new l.constructor(l.type,l);$0=o,l.target.dispatchEvent(o),$0=null}else return n=Ds(l),n!==null&&qd(n),e.blockedOn=l,!1;n.shift()}return!0}function $f(e,n,l){Ac(e)&&l.delete(n)}function h4(){td=!1,Ol!==null&&Ac(Ol)&&(Ol=null),Fl!==null&&Ac(Fl)&&(Fl=null),Ul!==null&&Ac(Ul)&&(Ul=null),Es.forEach($f),ks.forEach($f)}function ns(e,n){e.blockedOn===n&&(e.blockedOn=null,td||(td=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,h4)))}function Ss(e){function n(s){return ns(s,e)}if(0<pc.length){ns(pc[0],e);for(var l=1;l<pc.length;l++){var o=pc[l];o.blockedOn===e&&(o.blockedOn=null)}}for(Ol!==null&&ns(Ol,e),Fl!==null&&ns(Fl,e),Ul!==null&&ns(Ul,e),Es.forEach(n),ks.forEach(n),l=0;l<Tl.length;l++)o=Tl[l],o.blockedOn===e&&(o.blockedOn=null);for(;0<Tl.length&&(l=Tl[0],l.blockedOn===null);)Qh(l),l.blockedOn===null&&Tl.shift()}var Qi=Xr.ReactCurrentBatchConfig,Dc=!0;function g4(e,n,l,o){var s=Ke,c=Qi.transition;Qi.transition=null;try{Ke=1,ep(e,n,l,o)}finally{Ke=s,Qi.transition=c}}function v4(e,n,l,o){var s=Ke,c=Qi.transition;Qi.transition=null;try{Ke=4,ep(e,n,l,o)}finally{Ke=s,Qi.transition=c}}function ep(e,n,l,o){if(Dc){var s=rd(e,n,l,o);if(s===null)E0(e,n,o,Vc,l),Xf(e,o);else if(m4(s,e,n,l,o))o.stopPropagation();else if(Xf(e,o),n&4&&-1<f4.indexOf(e)){for(;s!==null;){var c=Ds(s);if(c!==null&&Hh(c),c=rd(e,n,l,o),c===null&&E0(e,n,o,Vc,l),c===s)break;s=c}s!==null&&o.stopPropagation()}else E0(e,n,o,null,l)}}var Vc=null;function rd(e,n,l,o){if(Vc=null,e=Xd(o),e=Ta(e),e!==null)if(n=Da(e),n===null)e=null;else if(l=n.tag,l===13){if(e=Ih(n),e!==null)return e;e=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Vc=e,null}function Zh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l4()){case $d:return 1;case Oh:return 4;case Bc:case a4:return 16;case Fh:return 536870912;default:return 16}default:return 16}}var Il=null,np=null,Nc=null;function Yh(){if(Nc)return Nc;var e,n=np,l=n.length,o,s="value"in Il?Il.value:Il.textContent,c=s.length;for(e=0;e<l&&n[e]===s[e];e++);var a=l-e;for(o=1;o<=a&&n[l-o]===s[c-o];o++);return Nc=s.slice(e,1<o?1-o:void 0)}function Lc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fc(){return!0}function Jf(){return!1}function Tt(e){function n(l,o,s,c,a){this._reactName=l,this._targetInst=s,this.type=o,this.nativeEvent=c,this.target=a,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(c):c[f]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?fc:Jf,this.isPropagationStopped=Jf,this}return mn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=fc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=fc)},persist:function(){},isPersistent:fc}),n}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=Tt(ro),Hs=mn({},ro,{view:0,detail:0}),y4=Tt(Hs),m0,h0,ts,m1=mn({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ts&&(ts&&e.type==="mousemove"?(m0=e.screenX-ts.screenX,h0=e.screenY-ts.screenY):h0=m0=0,ts=e),m0)},movementY:function(e){return"movementY"in e?e.movementY:h0}}),qf=Tt(m1),x4=mn({},m1,{dataTransfer:0}),w4=Tt(x4),C4=mn({},Hs,{relatedTarget:0}),g0=Tt(C4),b4=mn({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),E4=Tt(b4),k4=mn({},ro,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S4=Tt(k4),A4=mn({},ro,{data:0}),em=Tt(A4),N4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P4(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=j4[e])?!!n[e]:!1}function rp(){return P4}var T4=mn({},Hs,{key:function(e){if(e.key){var n=N4[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Lc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rp,charCode:function(e){return e.type==="keypress"?Lc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M4=Tt(T4),I4=mn({},m1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=Tt(I4),z4=mn({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rp}),R4=Tt(z4),_4=mn({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),O4=Tt(_4),F4=mn({},m1,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U4=Tt(F4),B4=[9,13,27,32],lp=Zr&&"CompositionEvent"in window,fs=null;Zr&&"documentMode"in document&&(fs=document.documentMode);var H4=Zr&&"TextEvent"in window&&!fs,Gh=Zr&&(!lp||fs&&8<fs&&11>=fs),tm=" ",rm=!1;function Kh(e,n){switch(e){case"keyup":return B4.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ti=!1;function D4(e,n){switch(e){case"compositionend":return Xh(n);case"keypress":return n.which!==32?null:(rm=!0,tm);case"textInput":return e=n.data,e===tm&&rm?null:e;default:return null}}function V4(e,n){if(Ti)return e==="compositionend"||!lp&&Kh(e,n)?(e=Yh(),Nc=np=Il=null,Ti=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gh&&n.locale!=="ko"?null:n.data;default:return null}}var W4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!W4[e.type]:n==="textarea"}function $h(e,n,l,o){Lh(o),n=Wc(n,"onChange"),0<n.length&&(l=new tp("onChange","change",null,l,o),e.push({event:l,listeners:n}))}var ms=null,As=null;function Q4(e){s6(e,0)}function h1(e){var n=zi(e);if(Ch(n))return e}function Z4(e,n){if(e==="change")return n}var Jh=!1;if(Zr){var v0;if(Zr){var y0="oninput"in document;if(!y0){var am=document.createElement("div");am.setAttribute("oninput","return;"),y0=typeof am.oninput=="function"}v0=y0}else v0=!1;Jh=v0&&(!document.documentMode||9<document.documentMode)}function im(){ms&&(ms.detachEvent("onpropertychange",qh),As=ms=null)}function qh(e){if(e.propertyName==="value"&&h1(As)){var n=[];$h(n,As,e,Xd(e)),Mh(Q4,n)}}function Y4(e,n,l){e==="focusin"?(im(),ms=n,As=l,ms.attachEvent("onpropertychange",qh)):e==="focusout"&&im()}function G4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return h1(As)}function K4(e,n){if(e==="click")return h1(n)}function X4(e,n){if(e==="input"||e==="change")return h1(n)}function $4(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sr=typeof Object.is=="function"?Object.is:$4;function Ns(e,n){if(sr(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var l=Object.keys(e),o=Object.keys(n);if(l.length!==o.length)return!1;for(o=0;o<l.length;o++){var s=l[o];if(!U0.call(n,s)||!sr(e[s],n[s]))return!1}return!0}function om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sm(e,n){var l=om(e);e=0;for(var o;l;){if(l.nodeType===3){if(o=e+l.textContent.length,e<=n&&o>=n)return{node:l,offset:n-e};e=o}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=om(l)}}function e6(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?e6(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function n6(){for(var e=window,n=Oc();n instanceof e.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)e=n.contentWindow;else break;n=Oc(e.document)}return n}function ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function J4(e){var n=n6(),l=e.focusedElem,o=e.selectionRange;if(n!==l&&l&&l.ownerDocument&&e6(l.ownerDocument.documentElement,l)){if(o!==null&&ap(l)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in l)l.selectionStart=n,l.selectionEnd=Math.min(e,l.value.length);else if(e=(n=l.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=l.textContent.length,c=Math.min(o.start,s);o=o.end===void 0?c:Math.min(o.end,s),!e.extend&&c>o&&(s=o,o=c,c=s),s=sm(l,c);var a=sm(l,o);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),c>o?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=l;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<n.length;l++)e=n[l],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q4=Zr&&"documentMode"in document&&11>=document.documentMode,Mi=null,ld=null,hs=null,ad=!1;function um(e,n,l){var o=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ad||Mi==null||Mi!==Oc(o)||(o=Mi,"selectionStart"in o&&ap(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),hs&&Ns(hs,o)||(hs=o,o=Wc(ld,"onSelect"),0<o.length&&(n=new tp("onSelect","select",null,n,l),e.push({event:n,listeners:o}),n.target=Mi)))}function mc(e,n){var l={};return l[e.toLowerCase()]=n.toLowerCase(),l["Webkit"+e]="webkit"+n,l["Moz"+e]="moz"+n,l}var Ii={animationend:mc("Animation","AnimationEnd"),animationiteration:mc("Animation","AnimationIteration"),animationstart:mc("Animation","AnimationStart"),transitionend:mc("Transition","TransitionEnd")},x0={},t6={};Zr&&(t6=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function g1(e){if(x0[e])return x0[e];if(!Ii[e])return e;var n=Ii[e],l;for(l in n)if(n.hasOwnProperty(l)&&l in t6)return x0[e]=n[l];return e}var r6=g1("animationend"),l6=g1("animationiteration"),a6=g1("animationstart"),i6=g1("transitionend"),o6=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gl(e,n){o6.set(e,n),Ha(n,[e])}for(var w0=0;w0<cm.length;w0++){var C0=cm[w0],e5=C0.toLowerCase(),n5=C0[0].toUpperCase()+C0.slice(1);Gl(e5,"on"+n5)}Gl(r6,"onAnimationEnd");Gl(l6,"onAnimationIteration");Gl(a6,"onAnimationStart");Gl("dblclick","onDoubleClick");Gl("focusin","onFocus");Gl("focusout","onBlur");Gl(i6,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t5=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function dm(e,n,l){var o=e.type||"unknown-event";e.currentTarget=l,e4(o,n,void 0,e),e.currentTarget=null}function s6(e,n){n=(n&4)!==0;for(var l=0;l<e.length;l++){var o=e[l],s=o.event;o=o.listeners;e:{var c=void 0;if(n)for(var a=o.length-1;0<=a;a--){var f=o[a],h=f.instance,y=f.currentTarget;if(f=f.listener,h!==c&&s.isPropagationStopped())break e;dm(s,f,y),c=h}else for(a=0;a<o.length;a++){if(f=o[a],h=f.instance,y=f.currentTarget,f=f.listener,h!==c&&s.isPropagationStopped())break e;dm(s,f,y),c=h}}}if(Uc)throw e=ed,Uc=!1,ed=null,e}function tn(e,n){var l=n[cd];l===void 0&&(l=n[cd]=new Set);var o=e+"__bubble";l.has(o)||(u6(n,e,2,!1),l.add(o))}function b0(e,n,l){var o=0;n&&(o|=4),u6(l,e,o,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function Ls(e){if(!e[hc]){e[hc]=!0,gh.forEach(function(l){l!=="selectionchange"&&(t5.has(l)||b0(l,!1,e),b0(l,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hc]||(n[hc]=!0,b0("selectionchange",!1,n))}}function u6(e,n,l,o){switch(Zh(n)){case 1:var s=g4;break;case 4:s=v4;break;default:s=ep}l=s.bind(null,n,l,e),s=void 0,!q0||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(n,l,{capture:!0,passive:s}):e.addEventListener(n,l,!0):s!==void 0?e.addEventListener(n,l,{passive:s}):e.addEventListener(n,l,!1)}function E0(e,n,l,o,s){var c=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var f=o.stateNode.containerInfo;if(f===s||f.nodeType===8&&f.parentNode===s)break;if(a===4)for(a=o.return;a!==null;){var h=a.tag;if((h===3||h===4)&&(h=a.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;a=a.return}for(;f!==null;){if(a=Ta(f),a===null)return;if(h=a.tag,h===5||h===6){o=c=a;continue e}f=f.parentNode}}o=o.return}Mh(function(){var y=c,v=Xd(l),S=[];e:{var A=o6.get(e);if(A!==void 0){var M=tp,_=e;switch(e){case"keypress":if(Lc(l)===0)break e;case"keydown":case"keyup":M=M4;break;case"focusin":_="focus",M=g0;break;case"focusout":_="blur",M=g0;break;case"beforeblur":case"afterblur":M=g0;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=w4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=R4;break;case r6:case l6:case a6:M=E4;break;case i6:M=O4;break;case"scroll":M=y4;break;case"wheel":M=U4;break;case"copy":case"cut":case"paste":M=S4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=nm}var U=(n&4)!==0,$=!U&&e==="scroll",b=U?A!==null?A+"Capture":null:A;U=[];for(var w=y,N;w!==null;){N=w;var z=N.stateNode;if(N.tag===5&&z!==null&&(N=z,b!==null&&(z=bs(w,b),z!=null&&U.push(js(w,z,N)))),$)break;w=w.return}0<U.length&&(A=new M(A,_,null,l,v),S.push({event:A,listeners:U}))}}if(!(n&7)){e:{if(A=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",A&&l!==$0&&(_=l.relatedTarget||l.fromElement)&&(Ta(_)||_[Yr]))break e;if((M||A)&&(A=v.window===v?v:(A=v.ownerDocument)?A.defaultView||A.parentWindow:window,M?(_=l.relatedTarget||l.toElement,M=y,_=_?Ta(_):null,_!==null&&($=Da(_),_!==$||_.tag!==5&&_.tag!==6)&&(_=null)):(M=null,_=y),M!==_)){if(U=qf,z="onMouseLeave",b="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(U=nm,z="onPointerLeave",b="onPointerEnter",w="pointer"),$=M==null?A:zi(M),N=_==null?A:zi(_),A=new U(z,w+"leave",M,l,v),A.target=$,A.relatedTarget=N,z=null,Ta(v)===y&&(U=new U(b,w+"enter",_,l,v),U.target=N,U.relatedTarget=$,z=U),$=z,M&&_)n:{for(U=M,b=_,w=0,N=U;N;N=Ai(N))w++;for(N=0,z=b;z;z=Ai(z))N++;for(;0<w-N;)U=Ai(U),w--;for(;0<N-w;)b=Ai(b),N--;for(;w--;){if(U===b||b!==null&&U===b.alternate)break n;U=Ai(U),b=Ai(b)}U=null}else U=null;M!==null&&pm(S,A,M,U,!1),_!==null&&$!==null&&pm(S,$,_,U,!0)}}e:{if(A=y?zi(y):window,M=A.nodeName&&A.nodeName.toLowerCase(),M==="select"||M==="input"&&A.type==="file")var K=Z4;else if(lm(A))if(Jh)K=X4;else{K=G4;var ie=Y4}else(M=A.nodeName)&&M.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(K=K4);if(K&&(K=K(e,y))){$h(S,K,l,v);break e}ie&&ie(e,A,y),e==="focusout"&&(ie=A._wrapperState)&&ie.controlled&&A.type==="number"&&Z0(A,"number",A.value)}switch(ie=y?zi(y):window,e){case"focusin":(lm(ie)||ie.contentEditable==="true")&&(Mi=ie,ld=y,hs=null);break;case"focusout":hs=ld=Mi=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,um(S,l,v);break;case"selectionchange":if(q4)break;case"keydown":case"keyup":um(S,l,v)}var se;if(lp)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ti?Kh(e,l)&&(de="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(de="onCompositionStart");de&&(Gh&&l.locale!=="ko"&&(Ti||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ti&&(se=Yh()):(Il=v,np="value"in Il?Il.value:Il.textContent,Ti=!0)),ie=Wc(y,de),0<ie.length&&(de=new em(de,e,null,l,v),S.push({event:de,listeners:ie}),se?de.data=se:(se=Xh(l),se!==null&&(de.data=se)))),(se=H4?D4(e,l):V4(e,l))&&(y=Wc(y,"onBeforeInput"),0<y.length&&(v=new em("onBeforeInput","beforeinput",null,l,v),S.push({event:v,listeners:y}),v.data=se))}s6(S,n)})}function js(e,n,l){return{instance:e,listener:n,currentTarget:l}}function Wc(e,n){for(var l=n+"Capture",o=[];e!==null;){var s=e,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=bs(e,l),c!=null&&o.unshift(js(e,c,s)),c=bs(e,n),c!=null&&o.push(js(e,c,s))),e=e.return}return o}function Ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pm(e,n,l,o,s){for(var c=n._reactName,a=[];l!==null&&l!==o;){var f=l,h=f.alternate,y=f.stateNode;if(h!==null&&h===o)break;f.tag===5&&y!==null&&(f=y,s?(h=bs(l,c),h!=null&&a.unshift(js(l,h,f))):s||(h=bs(l,c),h!=null&&a.push(js(l,h,f)))),l=l.return}a.length!==0&&e.push({event:n,listeners:a})}var r5=/\r\n?/g,l5=/\u0000|\uFFFD/g;function fm(e){return(typeof e=="string"?e:""+e).replace(r5,`
`).replace(l5,"")}function gc(e,n,l){if(n=fm(n),fm(e)!==n&&l)throw Error(ne(425))}function Qc(){}var id=null,od=null;function sd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,a5=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,i5=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(e){return mm.resolve(null).then(e).catch(o5)}:ud;function o5(e){setTimeout(function(){throw e})}function k0(e,n){var l=n,o=0;do{var s=l.nextSibling;if(e.removeChild(l),s&&s.nodeType===8)if(l=s.data,l==="/$"){if(o===0){e.removeChild(s),Ss(n);return}o--}else l!=="$"&&l!=="$?"&&l!=="$!"||o++;l=s}while(l);Ss(n)}function Bl(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(n===0)return e;n--}else l==="/$"&&n++}e=e.previousSibling}return null}var lo=Math.random().toString(36).slice(2),Er="__reactFiber$"+lo,Ps="__reactProps$"+lo,Yr="__reactContainer$"+lo,cd="__reactEvents$"+lo,s5="__reactListeners$"+lo,u5="__reactHandles$"+lo;function Ta(e){var n=e[Er];if(n)return n;for(var l=e.parentNode;l;){if(n=l[Yr]||l[Er]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(e=hm(e);e!==null;){if(l=e[Er])return l;e=hm(e)}return n}e=l,l=e.parentNode}return null}function Ds(e){return e=e[Er]||e[Yr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ne(33))}function v1(e){return e[Ps]||null}var dd=[],Ri=-1;function Kl(e){return{current:e}}function rn(e){0>Ri||(e.current=dd[Ri],dd[Ri]=null,Ri--)}function en(e,n){Ri++,dd[Ri]=e.current,e.current=n}var Yl={},$n=Kl(Yl),gt=Kl(!1),_a=Yl;function Ki(e,n){var l=e.type.contextTypes;if(!l)return Yl;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in l)s[c]=n[c];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function vt(e){return e=e.childContextTypes,e!=null}function Zc(){rn(gt),rn($n)}function gm(e,n,l){if($n.current!==Yl)throw Error(ne(168));en($n,n),en(gt,l)}function c6(e,n,l){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return l;o=o.getChildContext();for(var s in o)if(!(s in n))throw Error(ne(108,Y7(e)||"Unknown",s));return mn({},l,o)}function Yc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yl,_a=$n.current,en($n,e),en(gt,gt.current),!0}function vm(e,n,l){var o=e.stateNode;if(!o)throw Error(ne(169));l?(e=c6(e,n,_a),o.__reactInternalMemoizedMergedChildContext=e,rn(gt),rn($n),en($n,e)):rn(gt),en(gt,l)}var Dr=null,y1=!1,S0=!1;function d6(e){Dr===null?Dr=[e]:Dr.push(e)}function c5(e){y1=!0,d6(e)}function Xl(){if(!S0&&Dr!==null){S0=!0;var e=0,n=Ke;try{var l=Dr;for(Ke=1;e<l.length;e++){var o=l[e];do o=o(!0);while(o!==null)}Dr=null,y1=!1}catch(s){throw Dr!==null&&(Dr=Dr.slice(e+1)),_h($d,Xl),s}finally{Ke=n,S0=!1}}return null}var _i=[],Oi=0,Gc=null,Kc=0,Dt=[],Vt=0,Oa=null,Vr=1,Wr="";function ja(e,n){_i[Oi++]=Kc,_i[Oi++]=Gc,Gc=e,Kc=n}function p6(e,n,l){Dt[Vt++]=Vr,Dt[Vt++]=Wr,Dt[Vt++]=Oa,Oa=e;var o=Vr;e=Wr;var s=32-ir(o)-1;o&=~(1<<s),l+=1;var c=32-ir(n)+s;if(30<c){var a=s-s%5;c=(o&(1<<a)-1).toString(32),o>>=a,s-=a,Vr=1<<32-ir(n)+s|l<<s|o,Wr=c+e}else Vr=1<<c|l<<s|o,Wr=e}function ip(e){e.return!==null&&(ja(e,1),p6(e,1,0))}function op(e){for(;e===Gc;)Gc=_i[--Oi],_i[Oi]=null,Kc=_i[--Oi],_i[Oi]=null;for(;e===Oa;)Oa=Dt[--Vt],Dt[Vt]=null,Wr=Dt[--Vt],Dt[Vt]=null,Vr=Dt[--Vt],Dt[Vt]=null}var Lt=null,Nt=null,un=!1,ar=null;function f6(e,n){var l=Wt(5,null,null,0);l.elementType="DELETED",l.stateNode=n,l.return=e,n=e.deletions,n===null?(e.deletions=[l],e.flags|=16):n.push(l)}function ym(e,n){switch(e.tag){case 5:var l=e.type;return n=n.nodeType!==1||l.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Lt=e,Nt=Bl(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Lt=e,Nt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(l=Oa!==null?{id:Vr,overflow:Wr}:null,e.memoizedState={dehydrated:n,treeContext:l,retryLane:1073741824},l=Wt(18,null,null,0),l.stateNode=n,l.return=e,e.child=l,Lt=e,Nt=null,!0):!1;default:return!1}}function pd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fd(e){if(un){var n=Nt;if(n){var l=n;if(!ym(e,n)){if(pd(e))throw Error(ne(418));n=Bl(l.nextSibling);var o=Lt;n&&ym(e,n)?f6(o,l):(e.flags=e.flags&-4097|2,un=!1,Lt=e)}}else{if(pd(e))throw Error(ne(418));e.flags=e.flags&-4097|2,un=!1,Lt=e}}}function xm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Lt=e}function vc(e){if(e!==Lt)return!1;if(!un)return xm(e),un=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!sd(e.type,e.memoizedProps)),n&&(n=Nt)){if(pd(e))throw m6(),Error(ne(418));for(;n;)f6(e,n),n=Bl(n.nextSibling)}if(xm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ne(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"){if(n===0){Nt=Bl(e.nextSibling);break e}n--}else l!=="$"&&l!=="$!"&&l!=="$?"||n++}e=e.nextSibling}Nt=null}}else Nt=Lt?Bl(e.stateNode.nextSibling):null;return!0}function m6(){for(var e=Nt;e;)e=Bl(e.nextSibling)}function Xi(){Nt=Lt=null,un=!1}function sp(e){ar===null?ar=[e]:ar.push(e)}var d5=Xr.ReactCurrentBatchConfig;function rs(e,n,l){if(e=l.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(ne(309));var o=l.stateNode}if(!o)throw Error(ne(147,e));var s=o,c=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===c?n.ref:(n=function(a){var f=s.refs;a===null?delete f[c]:f[c]=a},n._stringRef=c,n)}if(typeof e!="string")throw Error(ne(284));if(!l._owner)throw Error(ne(290,e))}return e}function yc(e,n){throw e=Object.prototype.toString.call(n),Error(ne(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wm(e){var n=e._init;return n(e._payload)}function h6(e){function n(b,w){if(e){var N=b.deletions;N===null?(b.deletions=[w],b.flags|=16):N.push(w)}}function l(b,w){if(!e)return null;for(;w!==null;)n(b,w),w=w.sibling;return null}function o(b,w){for(b=new Map;w!==null;)w.key!==null?b.set(w.key,w):b.set(w.index,w),w=w.sibling;return b}function s(b,w){return b=Wl(b,w),b.index=0,b.sibling=null,b}function c(b,w,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<w?(b.flags|=2,w):N):(b.flags|=2,w)):(b.flags|=1048576,w)}function a(b){return e&&b.alternate===null&&(b.flags|=2),b}function f(b,w,N,z){return w===null||w.tag!==6?(w=M0(N,b.mode,z),w.return=b,w):(w=s(w,N),w.return=b,w)}function h(b,w,N,z){var K=N.type;return K===Pi?v(b,w,N.props.children,z,N.key):w!==null&&(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===jl&&wm(K)===w.type)?(z=s(w,N.props),z.ref=rs(b,w,N),z.return=b,z):(z=Rc(N.type,N.key,N.props,null,b.mode,z),z.ref=rs(b,w,N),z.return=b,z)}function y(b,w,N,z){return w===null||w.tag!==4||w.stateNode.containerInfo!==N.containerInfo||w.stateNode.implementation!==N.implementation?(w=I0(N,b.mode,z),w.return=b,w):(w=s(w,N.children||[]),w.return=b,w)}function v(b,w,N,z,K){return w===null||w.tag!==7?(w=Ra(N,b.mode,z,K),w.return=b,w):(w=s(w,N),w.return=b,w)}function S(b,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return w=M0(""+w,b.mode,N),w.return=b,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oc:return N=Rc(w.type,w.key,w.props,null,b.mode,N),N.ref=rs(b,null,w),N.return=b,N;case ji:return w=I0(w,b.mode,N),w.return=b,w;case jl:var z=w._init;return S(b,z(w._payload),N)}if(os(w)||Jo(w))return w=Ra(w,b.mode,N,null),w.return=b,w;yc(b,w)}return null}function A(b,w,N,z){var K=w!==null?w.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return K!==null?null:f(b,w,""+N,z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case oc:return N.key===K?h(b,w,N,z):null;case ji:return N.key===K?y(b,w,N,z):null;case jl:return K=N._init,A(b,w,K(N._payload),z)}if(os(N)||Jo(N))return K!==null?null:v(b,w,N,z,null);yc(b,N)}return null}function M(b,w,N,z,K){if(typeof z=="string"&&z!==""||typeof z=="number")return b=b.get(N)||null,f(w,b,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case oc:return b=b.get(z.key===null?N:z.key)||null,h(w,b,z,K);case ji:return b=b.get(z.key===null?N:z.key)||null,y(w,b,z,K);case jl:var ie=z._init;return M(b,w,N,ie(z._payload),K)}if(os(z)||Jo(z))return b=b.get(N)||null,v(w,b,z,K,null);yc(w,z)}return null}function _(b,w,N,z){for(var K=null,ie=null,se=w,de=w=0,Te=null;se!==null&&de<N.length;de++){se.index>de?(Te=se,se=null):Te=se.sibling;var Ce=A(b,se,N[de],z);if(Ce===null){se===null&&(se=Te);break}e&&se&&Ce.alternate===null&&n(b,se),w=c(Ce,w,de),ie===null?K=Ce:ie.sibling=Ce,ie=Ce,se=Te}if(de===N.length)return l(b,se),un&&ja(b,de),K;if(se===null){for(;de<N.length;de++)se=S(b,N[de],z),se!==null&&(w=c(se,w,de),ie===null?K=se:ie.sibling=se,ie=se);return un&&ja(b,de),K}for(se=o(b,se);de<N.length;de++)Te=M(se,b,de,N[de],z),Te!==null&&(e&&Te.alternate!==null&&se.delete(Te.key===null?de:Te.key),w=c(Te,w,de),ie===null?K=Te:ie.sibling=Te,ie=Te);return e&&se.forEach(function(Ge){return n(b,Ge)}),un&&ja(b,de),K}function U(b,w,N,z){var K=Jo(N);if(typeof K!="function")throw Error(ne(150));if(N=K.call(N),N==null)throw Error(ne(151));for(var ie=K=null,se=w,de=w=0,Te=null,Ce=N.next();se!==null&&!Ce.done;de++,Ce=N.next()){se.index>de?(Te=se,se=null):Te=se.sibling;var Ge=A(b,se,Ce.value,z);if(Ge===null){se===null&&(se=Te);break}e&&se&&Ge.alternate===null&&n(b,se),w=c(Ge,w,de),ie===null?K=Ge:ie.sibling=Ge,ie=Ge,se=Te}if(Ce.done)return l(b,se),un&&ja(b,de),K;if(se===null){for(;!Ce.done;de++,Ce=N.next())Ce=S(b,Ce.value,z),Ce!==null&&(w=c(Ce,w,de),ie===null?K=Ce:ie.sibling=Ce,ie=Ce);return un&&ja(b,de),K}for(se=o(b,se);!Ce.done;de++,Ce=N.next())Ce=M(se,b,de,Ce.value,z),Ce!==null&&(e&&Ce.alternate!==null&&se.delete(Ce.key===null?de:Ce.key),w=c(Ce,w,de),ie===null?K=Ce:ie.sibling=Ce,ie=Ce);return e&&se.forEach(function(ln){return n(b,ln)}),un&&ja(b,de),K}function $(b,w,N,z){if(typeof N=="object"&&N!==null&&N.type===Pi&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case oc:e:{for(var K=N.key,ie=w;ie!==null;){if(ie.key===K){if(K=N.type,K===Pi){if(ie.tag===7){l(b,ie.sibling),w=s(ie,N.props.children),w.return=b,b=w;break e}}else if(ie.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===jl&&wm(K)===ie.type){l(b,ie.sibling),w=s(ie,N.props),w.ref=rs(b,ie,N),w.return=b,b=w;break e}l(b,ie);break}else n(b,ie);ie=ie.sibling}N.type===Pi?(w=Ra(N.props.children,b.mode,z,N.key),w.return=b,b=w):(z=Rc(N.type,N.key,N.props,null,b.mode,z),z.ref=rs(b,w,N),z.return=b,b=z)}return a(b);case ji:e:{for(ie=N.key;w!==null;){if(w.key===ie)if(w.tag===4&&w.stateNode.containerInfo===N.containerInfo&&w.stateNode.implementation===N.implementation){l(b,w.sibling),w=s(w,N.children||[]),w.return=b,b=w;break e}else{l(b,w);break}else n(b,w);w=w.sibling}w=I0(N,b.mode,z),w.return=b,b=w}return a(b);case jl:return ie=N._init,$(b,w,ie(N._payload),z)}if(os(N))return _(b,w,N,z);if(Jo(N))return U(b,w,N,z);yc(b,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,w!==null&&w.tag===6?(l(b,w.sibling),w=s(w,N),w.return=b,b=w):(l(b,w),w=M0(N,b.mode,z),w.return=b,b=w),a(b)):l(b,w)}return $}var $i=h6(!0),g6=h6(!1),Xc=Kl(null),$c=null,Fi=null,up=null;function cp(){up=Fi=$c=null}function dp(e){var n=Xc.current;rn(Xc),e._currentValue=n}function md(e,n,l){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===l)break;e=e.return}}function Zi(e,n){$c=e,up=Fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ht=!0),e.firstContext=null)}function Zt(e){var n=e._currentValue;if(up!==e)if(e={context:e,memoizedValue:n,next:null},Fi===null){if($c===null)throw Error(ne(308));Fi=e,$c.dependencies={lanes:0,firstContext:e}}else Fi=Fi.next=e;return n}var Ma=null;function pp(e){Ma===null?Ma=[e]:Ma.push(e)}function v6(e,n,l,o){var s=n.interleaved;return s===null?(l.next=l,pp(n)):(l.next=s.next,s.next=l),n.interleaved=l,Gr(e,o)}function Gr(e,n){e.lanes|=n;var l=e.alternate;for(l!==null&&(l.lanes|=n),l=e,e=e.return;e!==null;)e.childLanes|=n,l=e.alternate,l!==null&&(l.childLanes|=n),l=e,e=e.return;return l.tag===3?l.stateNode:null}var Pl=!1;function fp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y6(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Hl(e,n,l){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Be&2){var s=o.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n,Gr(e,l)}return s=o.interleaved,s===null?(n.next=n,pp(o)):(n.next=s.next,s.next=n),o.interleaved=n,Gr(e,l)}function jc(e,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,l|=o,n.lanes=l,Jd(e,l)}}function Cm(e,n){var l=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,l===o)){var s=null,c=null;if(l=l.firstBaseUpdate,l!==null){do{var a={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};c===null?s=c=a:c=c.next=a,l=l.next}while(l!==null);c===null?s=c=n:c=c.next=n}else s=c=n;l={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:o.shared,effects:o.effects},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=n:e.next=n,l.lastBaseUpdate=n}function Jc(e,n,l,o){var s=e.updateQueue;Pl=!1;var c=s.firstBaseUpdate,a=s.lastBaseUpdate,f=s.shared.pending;if(f!==null){s.shared.pending=null;var h=f,y=h.next;h.next=null,a===null?c=y:a.next=y,a=h;var v=e.alternate;v!==null&&(v=v.updateQueue,f=v.lastBaseUpdate,f!==a&&(f===null?v.firstBaseUpdate=y:f.next=y,v.lastBaseUpdate=h))}if(c!==null){var S=s.baseState;a=0,v=y=h=null,f=c;do{var A=f.lane,M=f.eventTime;if((o&A)===A){v!==null&&(v=v.next={eventTime:M,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var _=e,U=f;switch(A=n,M=l,U.tag){case 1:if(_=U.payload,typeof _=="function"){S=_.call(M,S,A);break e}S=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=U.payload,A=typeof _=="function"?_.call(M,S,A):_,A==null)break e;S=mn({},S,A);break e;case 2:Pl=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,A=s.effects,A===null?s.effects=[f]:A.push(f))}else M={eventTime:M,lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},v===null?(y=v=M,h=S):v=v.next=M,a|=A;if(f=f.next,f===null){if(f=s.shared.pending,f===null)break;A=f,f=A.next,A.next=null,s.lastBaseUpdate=A,s.shared.pending=null}}while(!0);if(v===null&&(h=S),s.baseState=h,s.firstBaseUpdate=y,s.lastBaseUpdate=v,n=s.shared.interleaved,n!==null){s=n;do a|=s.lane,s=s.next;while(s!==n)}else c===null&&(s.shared.lanes=0);Ua|=a,e.lanes=a,e.memoizedState=S}}function bm(e,n,l){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],s=o.callback;if(s!==null){if(o.callback=null,o=l,typeof s!="function")throw Error(ne(191,s));s.call(o)}}}var Vs={},Sr=Kl(Vs),Ts=Kl(Vs),Ms=Kl(Vs);function Ia(e){if(e===Vs)throw Error(ne(174));return e}function mp(e,n){switch(en(Ms,n),en(Ts,e),en(Sr,Vs),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:G0(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=G0(n,e)}rn(Sr),en(Sr,n)}function Ji(){rn(Sr),rn(Ts),rn(Ms)}function x6(e){Ia(Ms.current);var n=Ia(Sr.current),l=G0(n,e.type);n!==l&&(en(Ts,e),en(Sr,l))}function hp(e){Ts.current===e&&(rn(Sr),rn(Ts))}var pn=Kl(0);function qc(e){for(var n=e;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var A0=[];function gp(){for(var e=0;e<A0.length;e++)A0[e]._workInProgressVersionPrimary=null;A0.length=0}var Pc=Xr.ReactCurrentDispatcher,N0=Xr.ReactCurrentBatchConfig,Fa=0,fn=null,Ln=null,In=null,e1=!1,gs=!1,Is=0,p5=0;function Gn(){throw Error(ne(321))}function vp(e,n){if(n===null)return!1;for(var l=0;l<n.length&&l<e.length;l++)if(!sr(e[l],n[l]))return!1;return!0}function yp(e,n,l,o,s,c){if(Fa=c,fn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Pc.current=e===null||e.memoizedState===null?g5:v5,e=l(o,s),gs){c=0;do{if(gs=!1,Is=0,25<=c)throw Error(ne(301));c+=1,In=Ln=null,n.updateQueue=null,Pc.current=y5,e=l(o,s)}while(gs)}if(Pc.current=n1,n=Ln!==null&&Ln.next!==null,Fa=0,In=Ln=fn=null,e1=!1,n)throw Error(ne(300));return e}function xp(){var e=Is!==0;return Is=0,e}function br(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?fn.memoizedState=In=e:In=In.next=e,In}function Yt(){if(Ln===null){var e=fn.alternate;e=e!==null?e.memoizedState:null}else e=Ln.next;var n=In===null?fn.memoizedState:In.next;if(n!==null)In=n,Ln=e;else{if(e===null)throw Error(ne(310));Ln=e,e={memoizedState:Ln.memoizedState,baseState:Ln.baseState,baseQueue:Ln.baseQueue,queue:Ln.queue,next:null},In===null?fn.memoizedState=In=e:In=In.next=e}return In}function zs(e,n){return typeof n=="function"?n(e):n}function L0(e){var n=Yt(),l=n.queue;if(l===null)throw Error(ne(311));l.lastRenderedReducer=e;var o=Ln,s=o.baseQueue,c=l.pending;if(c!==null){if(s!==null){var a=s.next;s.next=c.next,c.next=a}o.baseQueue=s=c,l.pending=null}if(s!==null){c=s.next,o=o.baseState;var f=a=null,h=null,y=c;do{var v=y.lane;if((Fa&v)===v)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var S={lane:v,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(f=h=S,a=o):h=h.next=S,fn.lanes|=v,Ua|=v}y=y.next}while(y!==null&&y!==c);h===null?a=o:h.next=f,sr(o,n.memoizedState)||(ht=!0),n.memoizedState=o,n.baseState=a,n.baseQueue=h,l.lastRenderedState=o}if(e=l.interleaved,e!==null){s=e;do c=s.lane,fn.lanes|=c,Ua|=c,s=s.next;while(s!==e)}else s===null&&(l.lanes=0);return[n.memoizedState,l.dispatch]}function j0(e){var n=Yt(),l=n.queue;if(l===null)throw Error(ne(311));l.lastRenderedReducer=e;var o=l.dispatch,s=l.pending,c=n.memoizedState;if(s!==null){l.pending=null;var a=s=s.next;do c=e(c,a.action),a=a.next;while(a!==s);sr(c,n.memoizedState)||(ht=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),l.lastRenderedState=c}return[c,o]}function w6(){}function C6(e,n){var l=fn,o=Yt(),s=n(),c=!sr(o.memoizedState,s);if(c&&(o.memoizedState=s,ht=!0),o=o.queue,wp(k6.bind(null,l,o,e),[e]),o.getSnapshot!==n||c||In!==null&&In.memoizedState.tag&1){if(l.flags|=2048,Rs(9,E6.bind(null,l,o,s,n),void 0,null),zn===null)throw Error(ne(349));Fa&30||b6(l,n,s)}return s}function b6(e,n,l){e.flags|=16384,e={getSnapshot:n,value:l},n=fn.updateQueue,n===null?(n={lastEffect:null,stores:null},fn.updateQueue=n,n.stores=[e]):(l=n.stores,l===null?n.stores=[e]:l.push(e))}function E6(e,n,l,o){n.value=l,n.getSnapshot=o,S6(n)&&A6(e)}function k6(e,n,l){return l(function(){S6(n)&&A6(e)})}function S6(e){var n=e.getSnapshot;e=e.value;try{var l=n();return!sr(e,l)}catch{return!0}}function A6(e){var n=Gr(e,1);n!==null&&or(n,e,1,-1)}function Em(e){var n=br();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:e},n.queue=e,e=e.dispatch=h5.bind(null,fn,e),[n.memoizedState,e]}function Rs(e,n,l,o){return e={tag:e,create:n,destroy:l,deps:o,next:null},n=fn.updateQueue,n===null?(n={lastEffect:null,stores:null},fn.updateQueue=n,n.lastEffect=e.next=e):(l=n.lastEffect,l===null?n.lastEffect=e.next=e:(o=l.next,l.next=e,e.next=o,n.lastEffect=e)),e}function N6(){return Yt().memoizedState}function Tc(e,n,l,o){var s=br();fn.flags|=e,s.memoizedState=Rs(1|n,l,void 0,o===void 0?null:o)}function x1(e,n,l,o){var s=Yt();o=o===void 0?null:o;var c=void 0;if(Ln!==null){var a=Ln.memoizedState;if(c=a.destroy,o!==null&&vp(o,a.deps)){s.memoizedState=Rs(n,l,c,o);return}}fn.flags|=e,s.memoizedState=Rs(1|n,l,c,o)}function km(e,n){return Tc(8390656,8,e,n)}function wp(e,n){return x1(2048,8,e,n)}function L6(e,n){return x1(4,2,e,n)}function j6(e,n){return x1(4,4,e,n)}function P6(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function T6(e,n,l){return l=l!=null?l.concat([e]):null,x1(4,4,P6.bind(null,n,e),l)}function Cp(){}function M6(e,n){var l=Yt();n=n===void 0?null:n;var o=l.memoizedState;return o!==null&&n!==null&&vp(n,o[1])?o[0]:(l.memoizedState=[e,n],e)}function I6(e,n){var l=Yt();n=n===void 0?null:n;var o=l.memoizedState;return o!==null&&n!==null&&vp(n,o[1])?o[0]:(e=e(),l.memoizedState=[e,n],e)}function z6(e,n,l){return Fa&21?(sr(l,n)||(l=Uh(),fn.lanes|=l,Ua|=l,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=l)}function f5(e,n){var l=Ke;Ke=l!==0&&4>l?l:4,e(!0);var o=N0.transition;N0.transition={};try{e(!1),n()}finally{Ke=l,N0.transition=o}}function R6(){return Yt().memoizedState}function m5(e,n,l){var o=Vl(e);if(l={lane:o,action:l,hasEagerState:!1,eagerState:null,next:null},_6(e))O6(n,l);else if(l=v6(e,n,l,o),l!==null){var s=at();or(l,e,o,s),F6(l,n,o)}}function h5(e,n,l){var o=Vl(e),s={lane:o,action:l,hasEagerState:!1,eagerState:null,next:null};if(_6(e))O6(n,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var a=n.lastRenderedState,f=c(a,l);if(s.hasEagerState=!0,s.eagerState=f,sr(f,a)){var h=n.interleaved;h===null?(s.next=s,pp(n)):(s.next=h.next,h.next=s),n.interleaved=s;return}}catch{}finally{}l=v6(e,n,s,o),l!==null&&(s=at(),or(l,e,o,s),F6(l,n,o))}}function _6(e){var n=e.alternate;return e===fn||n!==null&&n===fn}function O6(e,n){gs=e1=!0;var l=e.pending;l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n}function F6(e,n,l){if(l&4194240){var o=n.lanes;o&=e.pendingLanes,l|=o,n.lanes=l,Jd(e,l)}}var n1={readContext:Zt,useCallback:Gn,useContext:Gn,useEffect:Gn,useImperativeHandle:Gn,useInsertionEffect:Gn,useLayoutEffect:Gn,useMemo:Gn,useReducer:Gn,useRef:Gn,useState:Gn,useDebugValue:Gn,useDeferredValue:Gn,useTransition:Gn,useMutableSource:Gn,useSyncExternalStore:Gn,useId:Gn,unstable_isNewReconciler:!1},g5={readContext:Zt,useCallback:function(e,n){return br().memoizedState=[e,n===void 0?null:n],e},useContext:Zt,useEffect:km,useImperativeHandle:function(e,n,l){return l=l!=null?l.concat([e]):null,Tc(4194308,4,P6.bind(null,n,e),l)},useLayoutEffect:function(e,n){return Tc(4194308,4,e,n)},useInsertionEffect:function(e,n){return Tc(4,2,e,n)},useMemo:function(e,n){var l=br();return n=n===void 0?null:n,e=e(),l.memoizedState=[e,n],e},useReducer:function(e,n,l){var o=br();return n=l!==void 0?l(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=m5.bind(null,fn,e),[o.memoizedState,e]},useRef:function(e){var n=br();return e={current:e},n.memoizedState=e},useState:Em,useDebugValue:Cp,useDeferredValue:function(e){return br().memoizedState=e},useTransition:function(){var e=Em(!1),n=e[0];return e=f5.bind(null,e[1]),br().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,l){var o=fn,s=br();if(un){if(l===void 0)throw Error(ne(407));l=l()}else{if(l=n(),zn===null)throw Error(ne(349));Fa&30||b6(o,n,l)}s.memoizedState=l;var c={value:l,getSnapshot:n};return s.queue=c,km(k6.bind(null,o,c,e),[e]),o.flags|=2048,Rs(9,E6.bind(null,o,c,l,n),void 0,null),l},useId:function(){var e=br(),n=zn.identifierPrefix;if(un){var l=Wr,o=Vr;l=(o&~(1<<32-ir(o)-1)).toString(32)+l,n=":"+n+"R"+l,l=Is++,0<l&&(n+="H"+l.toString(32)),n+=":"}else l=p5++,n=":"+n+"r"+l.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},v5={readContext:Zt,useCallback:M6,useContext:Zt,useEffect:wp,useImperativeHandle:T6,useInsertionEffect:L6,useLayoutEffect:j6,useMemo:I6,useReducer:L0,useRef:N6,useState:function(){return L0(zs)},useDebugValue:Cp,useDeferredValue:function(e){var n=Yt();return z6(n,Ln.memoizedState,e)},useTransition:function(){var e=L0(zs)[0],n=Yt().memoizedState;return[e,n]},useMutableSource:w6,useSyncExternalStore:C6,useId:R6,unstable_isNewReconciler:!1},y5={readContext:Zt,useCallback:M6,useContext:Zt,useEffect:wp,useImperativeHandle:T6,useInsertionEffect:L6,useLayoutEffect:j6,useMemo:I6,useReducer:j0,useRef:N6,useState:function(){return j0(zs)},useDebugValue:Cp,useDeferredValue:function(e){var n=Yt();return Ln===null?n.memoizedState=e:z6(n,Ln.memoizedState,e)},useTransition:function(){var e=j0(zs)[0],n=Yt().memoizedState;return[e,n]},useMutableSource:w6,useSyncExternalStore:C6,useId:R6,unstable_isNewReconciler:!1};function rr(e,n){if(e&&e.defaultProps){n=mn({},n),e=e.defaultProps;for(var l in e)n[l]===void 0&&(n[l]=e[l]);return n}return n}function hd(e,n,l,o){n=e.memoizedState,l=l(o,n),l=l==null?n:mn({},n,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var w1={isMounted:function(e){return(e=e._reactInternals)?Da(e)===e:!1},enqueueSetState:function(e,n,l){e=e._reactInternals;var o=at(),s=Vl(e),c=Qr(o,s);c.payload=n,l!=null&&(c.callback=l),n=Hl(e,c,s),n!==null&&(or(n,e,s,o),jc(n,e,s))},enqueueReplaceState:function(e,n,l){e=e._reactInternals;var o=at(),s=Vl(e),c=Qr(o,s);c.tag=1,c.payload=n,l!=null&&(c.callback=l),n=Hl(e,c,s),n!==null&&(or(n,e,s,o),jc(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var l=at(),o=Vl(e),s=Qr(l,o);s.tag=2,n!=null&&(s.callback=n),n=Hl(e,s,o),n!==null&&(or(n,e,o,l),jc(n,e,o))}};function Sm(e,n,l,o,s,c,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,c,a):n.prototype&&n.prototype.isPureReactComponent?!Ns(l,o)||!Ns(s,c):!0}function U6(e,n,l){var o=!1,s=Yl,c=n.contextType;return typeof c=="object"&&c!==null?c=Zt(c):(s=vt(n)?_a:$n.current,o=n.contextTypes,c=(o=o!=null)?Ki(e,s):Yl),n=new n(l,c),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=w1,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=c),n}function Am(e,n,l,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,o),n.state!==e&&w1.enqueueReplaceState(n,n.state,null)}function gd(e,n,l,o){var s=e.stateNode;s.props=l,s.state=e.memoizedState,s.refs={},fp(e);var c=n.contextType;typeof c=="object"&&c!==null?s.context=Zt(c):(c=vt(n)?_a:$n.current,s.context=Ki(e,c)),s.state=e.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(hd(e,n,c,l),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&w1.enqueueReplaceState(s,s.state,null),Jc(e,l,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function qi(e,n){try{var l="",o=n;do l+=Z7(o),o=o.return;while(o);var s=l}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:n,stack:s,digest:null}}function P0(e,n,l){return{value:e,source:null,stack:l??null,digest:n??null}}function vd(e,n){try{console.error(n.value)}catch(l){setTimeout(function(){throw l})}}var x5=typeof WeakMap=="function"?WeakMap:Map;function B6(e,n,l){l=Qr(-1,l),l.tag=3,l.payload={element:null};var o=n.value;return l.callback=function(){r1||(r1=!0,Nd=o),vd(e,n)},l}function H6(e,n,l){l=Qr(-1,l),l.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=n.value;l.payload=function(){return o(s)},l.callback=function(){vd(e,n)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(l.callback=function(){vd(e,n),typeof o!="function"&&(Dl===null?Dl=new Set([this]):Dl.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),l}function Nm(e,n,l){var o=e.pingCache;if(o===null){o=e.pingCache=new x5;var s=new Set;o.set(n,s)}else s=o.get(n),s===void 0&&(s=new Set,o.set(n,s));s.has(l)||(s.add(l),e=I5.bind(null,e,n,l),n.then(e,e))}function Lm(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function jm(e,n,l,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(n=Qr(-1,1),n.tag=2,Hl(l,n,1))),l.lanes|=1),e)}var w5=Xr.ReactCurrentOwner,ht=!1;function lt(e,n,l,o){n.child=e===null?g6(n,null,l,o):$i(n,e.child,l,o)}function Pm(e,n,l,o,s){l=l.render;var c=n.ref;return Zi(n,s),o=yp(e,n,l,o,c,s),l=xp(),e!==null&&!ht?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Kr(e,n,s)):(un&&l&&ip(n),n.flags|=1,lt(e,n,o,s),n.child)}function Tm(e,n,l,o,s){if(e===null){var c=l.type;return typeof c=="function"&&!jp(c)&&c.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(n.tag=15,n.type=c,D6(e,n,c,o,s)):(e=Rc(l.type,null,o,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!(e.lanes&s)){var a=c.memoizedProps;if(l=l.compare,l=l!==null?l:Ns,l(a,o)&&e.ref===n.ref)return Kr(e,n,s)}return n.flags|=1,e=Wl(c,o),e.ref=n.ref,e.return=n,n.child=e}function D6(e,n,l,o,s){if(e!==null){var c=e.memoizedProps;if(Ns(c,o)&&e.ref===n.ref)if(ht=!1,n.pendingProps=o=c,(e.lanes&s)!==0)e.flags&131072&&(ht=!0);else return n.lanes=e.lanes,Kr(e,n,s)}return yd(e,n,l,o,s)}function V6(e,n,l){var o=n.pendingProps,s=o.children,c=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(Bi,At),At|=l;else{if(!(l&1073741824))return e=c!==null?c.baseLanes|l:l,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,en(Bi,At),At|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=c!==null?c.baseLanes:l,en(Bi,At),At|=o}else c!==null?(o=c.baseLanes|l,n.memoizedState=null):o=l,en(Bi,At),At|=o;return lt(e,n,s,l),n.child}function W6(e,n){var l=n.ref;(e===null&&l!==null||e!==null&&e.ref!==l)&&(n.flags|=512,n.flags|=2097152)}function yd(e,n,l,o,s){var c=vt(l)?_a:$n.current;return c=Ki(n,c),Zi(n,s),l=yp(e,n,l,o,c,s),o=xp(),e!==null&&!ht?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Kr(e,n,s)):(un&&o&&ip(n),n.flags|=1,lt(e,n,l,s),n.child)}function Mm(e,n,l,o,s){if(vt(l)){var c=!0;Yc(n)}else c=!1;if(Zi(n,s),n.stateNode===null)Mc(e,n),U6(n,l,o),gd(n,l,o,s),o=!0;else if(e===null){var a=n.stateNode,f=n.memoizedProps;a.props=f;var h=a.context,y=l.contextType;typeof y=="object"&&y!==null?y=Zt(y):(y=vt(l)?_a:$n.current,y=Ki(n,y));var v=l.getDerivedStateFromProps,S=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";S||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==o||h!==y)&&Am(n,a,o,y),Pl=!1;var A=n.memoizedState;a.state=A,Jc(n,o,a,s),h=n.memoizedState,f!==o||A!==h||gt.current||Pl?(typeof v=="function"&&(hd(n,l,v,o),h=n.memoizedState),(f=Pl||Sm(n,l,f,o,A,h,y))?(S||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=h),a.props=o,a.state=h,a.context=y,o=f):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{a=n.stateNode,y6(e,n),f=n.memoizedProps,y=n.type===n.elementType?f:rr(n.type,f),a.props=y,S=n.pendingProps,A=a.context,h=l.contextType,typeof h=="object"&&h!==null?h=Zt(h):(h=vt(l)?_a:$n.current,h=Ki(n,h));var M=l.getDerivedStateFromProps;(v=typeof M=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==S||A!==h)&&Am(n,a,o,h),Pl=!1,A=n.memoizedState,a.state=A,Jc(n,o,a,s);var _=n.memoizedState;f!==S||A!==_||gt.current||Pl?(typeof M=="function"&&(hd(n,l,M,o),_=n.memoizedState),(y=Pl||Sm(n,l,y,o,A,_,h)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,_,h),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,_,h)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_),a.props=o,a.state=_,a.context=h,o=y):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),o=!1)}return xd(e,n,l,o,c,s)}function xd(e,n,l,o,s,c){W6(e,n);var a=(n.flags&128)!==0;if(!o&&!a)return s&&vm(n,l,!1),Kr(e,n,c);o=n.stateNode,w5.current=n;var f=a&&typeof l.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&a?(n.child=$i(n,e.child,null,c),n.child=$i(n,null,f,c)):lt(e,n,f,c),n.memoizedState=o.state,s&&vm(n,l,!0),n.child}function Q6(e){var n=e.stateNode;n.pendingContext?gm(e,n.pendingContext,n.pendingContext!==n.context):n.context&&gm(e,n.context,!1),mp(e,n.containerInfo)}function Im(e,n,l,o,s){return Xi(),sp(s),n.flags|=256,lt(e,n,l,o),n.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Cd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Z6(e,n,l){var o=n.pendingProps,s=pn.current,c=!1,a=(n.flags&128)!==0,f;if((f=a)||(f=e!==null&&e.memoizedState===null?!1:(s&2)!==0),f?(c=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),en(pn,s&1),e===null)return fd(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=o.children,e=o.fallback,c?(o=n.mode,c=n.child,a={mode:"hidden",children:a},!(o&1)&&c!==null?(c.childLanes=0,c.pendingProps=a):c=E1(a,o,0,null),e=Ra(e,o,l,null),c.return=n,e.return=n,c.sibling=e,n.child=c,n.child.memoizedState=Cd(l),n.memoizedState=wd,e):bp(n,a));if(s=e.memoizedState,s!==null&&(f=s.dehydrated,f!==null))return C5(e,n,a,o,f,s,l);if(c){c=o.fallback,a=n.mode,s=e.child,f=s.sibling;var h={mode:"hidden",children:o.children};return!(a&1)&&n.child!==s?(o=n.child,o.childLanes=0,o.pendingProps=h,n.deletions=null):(o=Wl(s,h),o.subtreeFlags=s.subtreeFlags&14680064),f!==null?c=Wl(f,c):(c=Ra(c,a,l,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,a=e.child.memoizedState,a=a===null?Cd(l):{baseLanes:a.baseLanes|l,cachePool:null,transitions:a.transitions},c.memoizedState=a,c.childLanes=e.childLanes&~l,n.memoizedState=wd,o}return c=e.child,e=c.sibling,o=Wl(c,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=l),o.return=n,o.sibling=null,e!==null&&(l=n.deletions,l===null?(n.deletions=[e],n.flags|=16):l.push(e)),n.child=o,n.memoizedState=null,o}function bp(e,n){return n=E1({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function xc(e,n,l,o){return o!==null&&sp(o),$i(n,e.child,null,l),e=bp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function C5(e,n,l,o,s,c,a){if(l)return n.flags&256?(n.flags&=-257,o=P0(Error(ne(422))),xc(e,n,a,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(c=o.fallback,s=n.mode,o=E1({mode:"visible",children:o.children},s,0,null),c=Ra(c,s,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,n.mode&1&&$i(n,e.child,null,a),n.child.memoizedState=Cd(a),n.memoizedState=wd,c);if(!(n.mode&1))return xc(e,n,a,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var f=o.dgst;return o=f,c=Error(ne(419)),o=P0(c,o,void 0),xc(e,n,a,o)}if(f=(a&e.childLanes)!==0,ht||f){if(o=zn,o!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|a)?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,Gr(e,s),or(o,e,s,-1))}return Lp(),o=P0(Error(ne(421))),xc(e,n,a,o)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=z5.bind(null,e),s._reactRetry=n,null):(e=c.treeContext,Nt=Bl(s.nextSibling),Lt=n,un=!0,ar=null,e!==null&&(Dt[Vt++]=Vr,Dt[Vt++]=Wr,Dt[Vt++]=Oa,Vr=e.id,Wr=e.overflow,Oa=n),n=bp(n,o.children),n.flags|=4096,n)}function zm(e,n,l){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),md(e.return,n,l)}function T0(e,n,l,o,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:l,tailMode:s}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=o,c.tail=l,c.tailMode=s)}function Y6(e,n,l){var o=n.pendingProps,s=o.revealOrder,c=o.tail;if(lt(e,n,o.children,l),o=pn.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zm(e,l,n);else if(e.tag===19)zm(e,l,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(en(pn,o),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(l=n.child,s=null;l!==null;)e=l.alternate,e!==null&&qc(e)===null&&(s=l),l=l.sibling;l=s,l===null?(s=n.child,n.child=null):(s=l.sibling,l.sibling=null),T0(n,!1,s,l,c);break;case"backwards":for(l=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&qc(e)===null){n.child=s;break}e=s.sibling,s.sibling=l,l=s,s=e}T0(n,!0,l,null,c);break;case"together":T0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mc(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Kr(e,n,l){if(e!==null&&(n.dependencies=e.dependencies),Ua|=n.lanes,!(l&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(ne(153));if(n.child!==null){for(e=n.child,l=Wl(e,e.pendingProps),n.child=l,l.return=n;e.sibling!==null;)e=e.sibling,l=l.sibling=Wl(e,e.pendingProps),l.return=n;l.sibling=null}return n.child}function b5(e,n,l){switch(n.tag){case 3:Q6(n),Xi();break;case 5:x6(n);break;case 1:vt(n.type)&&Yc(n);break;case 4:mp(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,s=n.memoizedProps.value;en(Xc,o._currentValue),o._currentValue=s;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(en(pn,pn.current&1),n.flags|=128,null):l&n.child.childLanes?Z6(e,n,l):(en(pn,pn.current&1),e=Kr(e,n,l),e!==null?e.sibling:null);en(pn,pn.current&1);break;case 19:if(o=(l&n.childLanes)!==0,e.flags&128){if(o)return Y6(e,n,l);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),en(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,V6(e,n,l)}return Kr(e,n,l)}var G6,bd,K6,X6;G6=function(e,n){for(var l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break;for(;l.sibling===null;){if(l.return===null||l.return===n)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};bd=function(){};K6=function(e,n,l,o){var s=e.memoizedProps;if(s!==o){e=n.stateNode,Ia(Sr.current);var c=null;switch(l){case"input":s=W0(e,s),o=W0(e,o),c=[];break;case"select":s=mn({},s,{value:void 0}),o=mn({},o,{value:void 0}),c=[];break;case"textarea":s=Y0(e,s),o=Y0(e,o),c=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Qc)}K0(l,o);var a;l=null;for(y in s)if(!o.hasOwnProperty(y)&&s.hasOwnProperty(y)&&s[y]!=null)if(y==="style"){var f=s[y];for(a in f)f.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(ws.hasOwnProperty(y)?c||(c=[]):(c=c||[]).push(y,null));for(y in o){var h=o[y];if(f=s!=null?s[y]:void 0,o.hasOwnProperty(y)&&h!==f&&(h!=null||f!=null))if(y==="style")if(f){for(a in f)!f.hasOwnProperty(a)||h&&h.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in h)h.hasOwnProperty(a)&&f[a]!==h[a]&&(l||(l={}),l[a]=h[a])}else l||(c||(c=[]),c.push(y,l)),l=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(c=c||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(c=c||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(ws.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&tn("scroll",e),c||f===h||(c=[])):(c=c||[]).push(y,h))}l&&(c=c||[]).push("style",l);var y=c;(n.updateQueue=y)&&(n.flags|=4)}};X6=function(e,n,l,o){l!==o&&(n.flags|=4)};function ls(e,n){if(!un)switch(e.tailMode){case"hidden":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var o=null;l!==null;)l.alternate!==null&&(o=l),l=l.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Kn(e){var n=e.alternate!==null&&e.alternate.child===e.child,l=0,o=0;if(n)for(var s=e.child;s!==null;)l|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)l|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=l,n}function E5(e,n,l){var o=n.pendingProps;switch(op(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(n),null;case 1:return vt(n.type)&&Zc(),Kn(n),null;case 3:return o=n.stateNode,Ji(),rn(gt),rn($n),gp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(vc(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ar!==null&&(Pd(ar),ar=null))),bd(e,n),Kn(n),null;case 5:hp(n);var s=Ia(Ms.current);if(l=n.type,e!==null&&n.stateNode!=null)K6(e,n,l,o,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(ne(166));return Kn(n),null}if(e=Ia(Sr.current),vc(n)){o=n.stateNode,l=n.type;var c=n.memoizedProps;switch(o[Er]=n,o[Ps]=c,e=(n.mode&1)!==0,l){case"dialog":tn("cancel",o),tn("close",o);break;case"iframe":case"object":case"embed":tn("load",o);break;case"video":case"audio":for(s=0;s<us.length;s++)tn(us[s],o);break;case"source":tn("error",o);break;case"img":case"image":case"link":tn("error",o),tn("load",o);break;case"details":tn("toggle",o);break;case"input":Vf(o,c),tn("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!c.multiple},tn("invalid",o);break;case"textarea":Qf(o,c),tn("invalid",o)}K0(l,c),s=null;for(var a in c)if(c.hasOwnProperty(a)){var f=c[a];a==="children"?typeof f=="string"?o.textContent!==f&&(c.suppressHydrationWarning!==!0&&gc(o.textContent,f,e),s=["children",f]):typeof f=="number"&&o.textContent!==""+f&&(c.suppressHydrationWarning!==!0&&gc(o.textContent,f,e),s=["children",""+f]):ws.hasOwnProperty(a)&&f!=null&&a==="onScroll"&&tn("scroll",o)}switch(l){case"input":sc(o),Wf(o,c,!0);break;case"textarea":sc(o),Zf(o);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(o.onclick=Qc)}o=s,n.updateQueue=o,o!==null&&(n.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kh(l)),e==="http://www.w3.org/1999/xhtml"?l==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(l,{is:o.is}):(e=a.createElement(l),l==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,l),e[Er]=n,e[Ps]=o,G6(e,n,!1,!1),n.stateNode=e;e:{switch(a=X0(l,o),l){case"dialog":tn("cancel",e),tn("close",e),s=o;break;case"iframe":case"object":case"embed":tn("load",e),s=o;break;case"video":case"audio":for(s=0;s<us.length;s++)tn(us[s],e);s=o;break;case"source":tn("error",e),s=o;break;case"img":case"image":case"link":tn("error",e),tn("load",e),s=o;break;case"details":tn("toggle",e),s=o;break;case"input":Vf(e,o),s=W0(e,o),tn("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=mn({},o,{value:void 0}),tn("invalid",e);break;case"textarea":Qf(e,o),s=Y0(e,o),tn("invalid",e);break;default:s=o}K0(l,s),f=s;for(c in f)if(f.hasOwnProperty(c)){var h=f[c];c==="style"?Nh(e,h):c==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Sh(e,h)):c==="children"?typeof h=="string"?(l!=="textarea"||h!=="")&&Cs(e,h):typeof h=="number"&&Cs(e,""+h):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ws.hasOwnProperty(c)?h!=null&&c==="onScroll"&&tn("scroll",e):h!=null&&Zd(e,c,h,a))}switch(l){case"input":sc(e),Wf(e,o,!1);break;case"textarea":sc(e),Zf(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Zl(o.value));break;case"select":e.multiple=!!o.multiple,c=o.value,c!=null?Di(e,!!o.multiple,c,!1):o.defaultValue!=null&&Di(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Qc)}switch(l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Kn(n),null;case 6:if(e&&n.stateNode!=null)X6(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(ne(166));if(l=Ia(Ms.current),Ia(Sr.current),vc(n)){if(o=n.stateNode,l=n.memoizedProps,o[Er]=n,(c=o.nodeValue!==l)&&(e=Lt,e!==null))switch(e.tag){case 3:gc(o.nodeValue,l,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gc(o.nodeValue,l,(e.mode&1)!==0)}c&&(n.flags|=4)}else o=(l.nodeType===9?l:l.ownerDocument).createTextNode(o),o[Er]=n,n.stateNode=o}return Kn(n),null;case 13:if(rn(pn),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(un&&Nt!==null&&n.mode&1&&!(n.flags&128))m6(),Xi(),n.flags|=98560,c=!1;else if(c=vc(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(ne(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(ne(317));c[Er]=n}else Xi(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Kn(n),c=!1}else ar!==null&&(Pd(ar),ar=null),c=!0;if(!c)return n.flags&65536?n:null}return n.flags&128?(n.lanes=l,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||pn.current&1?jn===0&&(jn=3):Lp())),n.updateQueue!==null&&(n.flags|=4),Kn(n),null);case 4:return Ji(),bd(e,n),e===null&&Ls(n.stateNode.containerInfo),Kn(n),null;case 10:return dp(n.type._context),Kn(n),null;case 17:return vt(n.type)&&Zc(),Kn(n),null;case 19:if(rn(pn),c=n.memoizedState,c===null)return Kn(n),null;if(o=(n.flags&128)!==0,a=c.rendering,a===null)if(o)ls(c,!1);else{if(jn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=qc(e),a!==null){for(n.flags|=128,ls(c,!1),o=a.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=l,l=n.child;l!==null;)c=l,e=o,c.flags&=14680066,a=c.alternate,a===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=a.childLanes,c.lanes=a.lanes,c.child=a.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=a.memoizedProps,c.memoizedState=a.memoizedState,c.updateQueue=a.updateQueue,c.type=a.type,e=a.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l=l.sibling;return en(pn,pn.current&1|2),n.child}e=e.sibling}c.tail!==null&&wn()>eo&&(n.flags|=128,o=!0,ls(c,!1),n.lanes=4194304)}else{if(!o)if(e=qc(a),e!==null){if(n.flags|=128,o=!0,l=e.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),ls(c,!0),c.tail===null&&c.tailMode==="hidden"&&!a.alternate&&!un)return Kn(n),null}else 2*wn()-c.renderingStartTime>eo&&l!==1073741824&&(n.flags|=128,o=!0,ls(c,!1),n.lanes=4194304);c.isBackwards?(a.sibling=n.child,n.child=a):(l=c.last,l!==null?l.sibling=a:n.child=a,c.last=a)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=wn(),n.sibling=null,l=pn.current,en(pn,o?l&1|2:l&1),n):(Kn(n),null);case 22:case 23:return Np(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?At&1073741824&&(Kn(n),n.subtreeFlags&6&&(n.flags|=8192)):Kn(n),null;case 24:return null;case 25:return null}throw Error(ne(156,n.tag))}function k5(e,n){switch(op(n),n.tag){case 1:return vt(n.type)&&Zc(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(),rn(gt),rn($n),gp(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return hp(n),null;case 13:if(rn(pn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(ne(340));Xi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rn(pn),null;case 4:return Ji(),null;case 10:return dp(n.type._context),null;case 22:case 23:return Np(),null;case 24:return null;default:return null}}var wc=!1,Xn=!1,S5=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Ui(e,n){var l=e.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(o){yn(e,n,o)}else l.current=null}function Ed(e,n,l){try{l()}catch(o){yn(e,n,o)}}var Rm=!1;function A5(e,n){if(id=Dc,e=n6(),ap(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var o=l.getSelection&&l.getSelection();if(o&&o.rangeCount!==0){l=o.anchorNode;var s=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break e}var a=0,f=-1,h=-1,y=0,v=0,S=e,A=null;n:for(;;){for(var M;S!==l||s!==0&&S.nodeType!==3||(f=a+s),S!==c||o!==0&&S.nodeType!==3||(h=a+o),S.nodeType===3&&(a+=S.nodeValue.length),(M=S.firstChild)!==null;)A=S,S=M;for(;;){if(S===e)break n;if(A===l&&++y===s&&(f=a),A===c&&++v===o&&(h=a),(M=S.nextSibling)!==null)break;S=A,A=S.parentNode}S=M}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(od={focusedElem:e,selectionRange:l},Dc=!1,fe=n;fe!==null;)if(n=fe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,fe=e;else for(;fe!==null;){n=fe;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var U=_.memoizedProps,$=_.memoizedState,b=n.stateNode,w=b.getSnapshotBeforeUpdate(n.elementType===n.type?U:rr(n.type,U),$);b.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var N=n.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(z){yn(n,n.return,z)}if(e=n.sibling,e!==null){e.return=n.return,fe=e;break}fe=n.return}return _=Rm,Rm=!1,_}function vs(e,n,l){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&Ed(n,l,c)}s=s.next}while(s!==o)}}function C1(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var o=l.create;l.destroy=o()}l=l.next}while(l!==n)}}function kd(e){var n=e.ref;if(n!==null){var l=e.stateNode;switch(e.tag){case 5:e=l;break;default:e=l}typeof n=="function"?n(e):n.current=e}}function $6(e){var n=e.alternate;n!==null&&(e.alternate=null,$6(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Er],delete n[Ps],delete n[cd],delete n[s5],delete n[u5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function J6(e){return e.tag===5||e.tag===3||e.tag===4}function _m(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||J6(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sd(e,n,l){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?l.nodeType===8?l.parentNode.insertBefore(e,n):l.insertBefore(e,n):(l.nodeType===8?(n=l.parentNode,n.insertBefore(e,l)):(n=l,n.appendChild(e)),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=Qc));else if(o!==4&&(e=e.child,e!==null))for(Sd(e,n,l),e=e.sibling;e!==null;)Sd(e,n,l),e=e.sibling}function Ad(e,n,l){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?l.insertBefore(e,n):l.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ad(e,n,l),e=e.sibling;e!==null;)Ad(e,n,l),e=e.sibling}var On=null,lr=!1;function Ll(e,n,l){for(l=l.child;l!==null;)q6(e,n,l),l=l.sibling}function q6(e,n,l){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(f1,l)}catch{}switch(l.tag){case 5:Xn||Ui(l,n);case 6:var o=On,s=lr;On=null,Ll(e,n,l),On=o,lr=s,On!==null&&(lr?(e=On,l=l.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)):On.removeChild(l.stateNode));break;case 18:On!==null&&(lr?(e=On,l=l.stateNode,e.nodeType===8?k0(e.parentNode,l):e.nodeType===1&&k0(e,l),Ss(e)):k0(On,l.stateNode));break;case 4:o=On,s=lr,On=l.stateNode.containerInfo,lr=!0,Ll(e,n,l),On=o,lr=s;break;case 0:case 11:case 14:case 15:if(!Xn&&(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var c=s,a=c.destroy;c=c.tag,a!==void 0&&(c&2||c&4)&&Ed(l,n,a),s=s.next}while(s!==o)}Ll(e,n,l);break;case 1:if(!Xn&&(Ui(l,n),o=l.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(f){yn(l,n,f)}Ll(e,n,l);break;case 21:Ll(e,n,l);break;case 22:l.mode&1?(Xn=(o=Xn)||l.memoizedState!==null,Ll(e,n,l),Xn=o):Ll(e,n,l);break;default:Ll(e,n,l)}}function Om(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var l=e.stateNode;l===null&&(l=e.stateNode=new S5),n.forEach(function(o){var s=R5.bind(null,e,o);l.has(o)||(l.add(o),o.then(s,s))})}}function tr(e,n){var l=n.deletions;if(l!==null)for(var o=0;o<l.length;o++){var s=l[o];try{var c=e,a=n,f=a;e:for(;f!==null;){switch(f.tag){case 5:On=f.stateNode,lr=!1;break e;case 3:On=f.stateNode.containerInfo,lr=!0;break e;case 4:On=f.stateNode.containerInfo,lr=!0;break e}f=f.return}if(On===null)throw Error(ne(160));q6(c,a,s),On=null,lr=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(y){yn(s,n,y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)e8(n,e),n=n.sibling}function e8(e,n){var l=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tr(n,e),Cr(e),o&4){try{vs(3,e,e.return),C1(3,e)}catch(U){yn(e,e.return,U)}try{vs(5,e,e.return)}catch(U){yn(e,e.return,U)}}break;case 1:tr(n,e),Cr(e),o&512&&l!==null&&Ui(l,l.return);break;case 5:if(tr(n,e),Cr(e),o&512&&l!==null&&Ui(l,l.return),e.flags&32){var s=e.stateNode;try{Cs(s,"")}catch(U){yn(e,e.return,U)}}if(o&4&&(s=e.stateNode,s!=null)){var c=e.memoizedProps,a=l!==null?l.memoizedProps:c,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&c.type==="radio"&&c.name!=null&&bh(s,c),X0(f,a);var y=X0(f,c);for(a=0;a<h.length;a+=2){var v=h[a],S=h[a+1];v==="style"?Nh(s,S):v==="dangerouslySetInnerHTML"?Sh(s,S):v==="children"?Cs(s,S):Zd(s,v,S,y)}switch(f){case"input":Q0(s,c);break;case"textarea":Eh(s,c);break;case"select":var A=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var M=c.value;M!=null?Di(s,!!c.multiple,M,!1):A!==!!c.multiple&&(c.defaultValue!=null?Di(s,!!c.multiple,c.defaultValue,!0):Di(s,!!c.multiple,c.multiple?[]:"",!1))}s[Ps]=c}catch(U){yn(e,e.return,U)}}break;case 6:if(tr(n,e),Cr(e),o&4){if(e.stateNode===null)throw Error(ne(162));s=e.stateNode,c=e.memoizedProps;try{s.nodeValue=c}catch(U){yn(e,e.return,U)}}break;case 3:if(tr(n,e),Cr(e),o&4&&l!==null&&l.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(U){yn(e,e.return,U)}break;case 4:tr(n,e),Cr(e);break;case 13:tr(n,e),Cr(e),s=e.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(Sp=wn())),o&4&&Om(e);break;case 22:if(v=l!==null&&l.memoizedState!==null,e.mode&1?(Xn=(y=Xn)||v,tr(n,e),Xn=y):tr(n,e),Cr(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!v&&e.mode&1)for(fe=e,v=e.child;v!==null;){for(S=fe=v;fe!==null;){switch(A=fe,M=A.child,A.tag){case 0:case 11:case 14:case 15:vs(4,A,A.return);break;case 1:Ui(A,A.return);var _=A.stateNode;if(typeof _.componentWillUnmount=="function"){o=A,l=A.return;try{n=o,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(U){yn(o,l,U)}}break;case 5:Ui(A,A.return);break;case 22:if(A.memoizedState!==null){Um(S);continue}}M!==null?(M.return=A,fe=M):Um(S)}v=v.sibling}e:for(v=null,S=e;;){if(S.tag===5){if(v===null){v=S;try{s=S.stateNode,y?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(f=S.stateNode,h=S.memoizedProps.style,a=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=Ah("display",a))}catch(U){yn(e,e.return,U)}}}else if(S.tag===6){if(v===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(U){yn(e,e.return,U)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;v===S&&(v=null),S=S.return}v===S&&(v=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:tr(n,e),Cr(e),o&4&&Om(e);break;case 21:break;default:tr(n,e),Cr(e)}}function Cr(e){var n=e.flags;if(n&2){try{e:{for(var l=e.return;l!==null;){if(J6(l)){var o=l;break e}l=l.return}throw Error(ne(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Cs(s,""),o.flags&=-33);var c=_m(e);Ad(e,c,s);break;case 3:case 4:var a=o.stateNode.containerInfo,f=_m(e);Sd(e,f,a);break;default:throw Error(ne(161))}}catch(h){yn(e,e.return,h)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function N5(e,n,l){fe=e,n8(e)}function n8(e,n,l){for(var o=(e.mode&1)!==0;fe!==null;){var s=fe,c=s.child;if(s.tag===22&&o){var a=s.memoizedState!==null||wc;if(!a){var f=s.alternate,h=f!==null&&f.memoizedState!==null||Xn;f=wc;var y=Xn;if(wc=a,(Xn=h)&&!y)for(fe=s;fe!==null;)a=fe,h=a.child,a.tag===22&&a.memoizedState!==null?Bm(s):h!==null?(h.return=a,fe=h):Bm(s);for(;c!==null;)fe=c,n8(c),c=c.sibling;fe=s,wc=f,Xn=y}Fm(e)}else s.subtreeFlags&8772&&c!==null?(c.return=s,fe=c):Fm(e)}}function Fm(e){for(;fe!==null;){var n=fe;if(n.flags&8772){var l=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Xn||C1(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!Xn)if(l===null)o.componentDidMount();else{var s=n.elementType===n.type?l.memoizedProps:rr(n.type,l.memoizedProps);o.componentDidUpdate(s,l.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var c=n.updateQueue;c!==null&&bm(n,c,o);break;case 3:var a=n.updateQueue;if(a!==null){if(l=null,n.child!==null)switch(n.child.tag){case 5:l=n.child.stateNode;break;case 1:l=n.child.stateNode}bm(n,a,l)}break;case 5:var f=n.stateNode;if(l===null&&n.flags&4){l=f;var h=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&l.focus();break;case"img":h.src&&(l.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var y=n.alternate;if(y!==null){var v=y.memoizedState;if(v!==null){var S=v.dehydrated;S!==null&&Ss(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Xn||n.flags&512&&kd(n)}catch(A){yn(n,n.return,A)}}if(n===e){fe=null;break}if(l=n.sibling,l!==null){l.return=n.return,fe=l;break}fe=n.return}}function Um(e){for(;fe!==null;){var n=fe;if(n===e){fe=null;break}var l=n.sibling;if(l!==null){l.return=n.return,fe=l;break}fe=n.return}}function Bm(e){for(;fe!==null;){var n=fe;try{switch(n.tag){case 0:case 11:case 15:var l=n.return;try{C1(4,n)}catch(h){yn(n,l,h)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var s=n.return;try{o.componentDidMount()}catch(h){yn(n,s,h)}}var c=n.return;try{kd(n)}catch(h){yn(n,c,h)}break;case 5:var a=n.return;try{kd(n)}catch(h){yn(n,a,h)}}}catch(h){yn(n,n.return,h)}if(n===e){fe=null;break}var f=n.sibling;if(f!==null){f.return=n.return,fe=f;break}fe=n.return}}var L5=Math.ceil,t1=Xr.ReactCurrentDispatcher,Ep=Xr.ReactCurrentOwner,Qt=Xr.ReactCurrentBatchConfig,Be=0,zn=null,kn=null,Fn=0,At=0,Bi=Kl(0),jn=0,_s=null,Ua=0,b1=0,kp=0,ys=null,mt=null,Sp=0,eo=1/0,Hr=null,r1=!1,Nd=null,Dl=null,Cc=!1,zl=null,l1=0,xs=0,Ld=null,Ic=-1,zc=0;function at(){return Be&6?wn():Ic!==-1?Ic:Ic=wn()}function Vl(e){return e.mode&1?Be&2&&Fn!==0?Fn&-Fn:d5.transition!==null?(zc===0&&(zc=Uh()),zc):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:Zh(e.type)),e):1}function or(e,n,l,o){if(50<xs)throw xs=0,Ld=null,Error(ne(185));Bs(e,l,o),(!(Be&2)||e!==zn)&&(e===zn&&(!(Be&2)&&(b1|=l),jn===4&&Ml(e,Fn)),yt(e,o),l===1&&Be===0&&!(n.mode&1)&&(eo=wn()+500,y1&&Xl()))}function yt(e,n){var l=e.callbackNode;d4(e,n);var o=Hc(e,e===zn?Fn:0);if(o===0)l!==null&&Kf(l),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(l!=null&&Kf(l),n===1)e.tag===0?c5(Hm.bind(null,e)):d6(Hm.bind(null,e)),i5(function(){!(Be&6)&&Xl()}),l=null;else{switch(Bh(o)){case 1:l=$d;break;case 4:l=Oh;break;case 16:l=Bc;break;case 536870912:l=Fh;break;default:l=Bc}l=u8(l,t8.bind(null,e))}e.callbackPriority=n,e.callbackNode=l}}function t8(e,n){if(Ic=-1,zc=0,Be&6)throw Error(ne(327));var l=e.callbackNode;if(Yi()&&e.callbackNode!==l)return null;var o=Hc(e,e===zn?Fn:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=a1(e,o);else{n=o;var s=Be;Be|=2;var c=l8();(zn!==e||Fn!==n)&&(Hr=null,eo=wn()+500,za(e,n));do try{T5();break}catch(f){r8(e,f)}while(!0);cp(),t1.current=c,Be=s,kn!==null?n=0:(zn=null,Fn=0,n=jn)}if(n!==0){if(n===2&&(s=nd(e),s!==0&&(o=s,n=jd(e,s))),n===1)throw l=_s,za(e,0),Ml(e,o),yt(e,wn()),l;if(n===6)Ml(e,o);else{if(s=e.current.alternate,!(o&30)&&!j5(s)&&(n=a1(e,o),n===2&&(c=nd(e),c!==0&&(o=c,n=jd(e,c))),n===1))throw l=_s,za(e,0),Ml(e,o),yt(e,wn()),l;switch(e.finishedWork=s,e.finishedLanes=o,n){case 0:case 1:throw Error(ne(345));case 2:Pa(e,mt,Hr);break;case 3:if(Ml(e,o),(o&130023424)===o&&(n=Sp+500-wn(),10<n)){if(Hc(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){at(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ud(Pa.bind(null,e,mt,Hr),n);break}Pa(e,mt,Hr);break;case 4:if(Ml(e,o),(o&4194240)===o)break;for(n=e.eventTimes,s=-1;0<o;){var a=31-ir(o);c=1<<a,a=n[a],a>s&&(s=a),o&=~c}if(o=s,o=wn()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*L5(o/1960))-o,10<o){e.timeoutHandle=ud(Pa.bind(null,e,mt,Hr),o);break}Pa(e,mt,Hr);break;case 5:Pa(e,mt,Hr);break;default:throw Error(ne(329))}}}return yt(e,wn()),e.callbackNode===l?t8.bind(null,e):null}function jd(e,n){var l=ys;return e.current.memoizedState.isDehydrated&&(za(e,n).flags|=256),e=a1(e,n),e!==2&&(n=mt,mt=l,n!==null&&Pd(n)),e}function Pd(e){mt===null?mt=e:mt.push.apply(mt,e)}function j5(e){for(var n=e;;){if(n.flags&16384){var l=n.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var o=0;o<l.length;o++){var s=l[o],c=s.getSnapshot;s=s.value;try{if(!sr(c(),s))return!1}catch{return!1}}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ml(e,n){for(n&=~kp,n&=~b1,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var l=31-ir(n),o=1<<l;e[l]=-1,n&=~o}}function Hm(e){if(Be&6)throw Error(ne(327));Yi();var n=Hc(e,0);if(!(n&1))return yt(e,wn()),null;var l=a1(e,n);if(e.tag!==0&&l===2){var o=nd(e);o!==0&&(n=o,l=jd(e,o))}if(l===1)throw l=_s,za(e,0),Ml(e,n),yt(e,wn()),l;if(l===6)throw Error(ne(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Pa(e,mt,Hr),yt(e,wn()),null}function Ap(e,n){var l=Be;Be|=1;try{return e(n)}finally{Be=l,Be===0&&(eo=wn()+500,y1&&Xl())}}function Ba(e){zl!==null&&zl.tag===0&&!(Be&6)&&Yi();var n=Be;Be|=1;var l=Qt.transition,o=Ke;try{if(Qt.transition=null,Ke=1,e)return e()}finally{Ke=o,Qt.transition=l,Be=n,!(Be&6)&&Xl()}}function Np(){At=Bi.current,rn(Bi)}function za(e,n){e.finishedWork=null,e.finishedLanes=0;var l=e.timeoutHandle;if(l!==-1&&(e.timeoutHandle=-1,a5(l)),kn!==null)for(l=kn.return;l!==null;){var o=l;switch(op(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Zc();break;case 3:Ji(),rn(gt),rn($n),gp();break;case 5:hp(o);break;case 4:Ji();break;case 13:rn(pn);break;case 19:rn(pn);break;case 10:dp(o.type._context);break;case 22:case 23:Np()}l=l.return}if(zn=e,kn=e=Wl(e.current,null),Fn=At=n,jn=0,_s=null,kp=b1=Ua=0,mt=ys=null,Ma!==null){for(n=0;n<Ma.length;n++)if(l=Ma[n],o=l.interleaved,o!==null){l.interleaved=null;var s=o.next,c=l.pending;if(c!==null){var a=c.next;c.next=s,o.next=a}l.pending=o}Ma=null}return e}function r8(e,n){do{var l=kn;try{if(cp(),Pc.current=n1,e1){for(var o=fn.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}e1=!1}if(Fa=0,In=Ln=fn=null,gs=!1,Is=0,Ep.current=null,l===null||l.return===null){jn=1,_s=n,kn=null;break}e:{var c=e,a=l.return,f=l,h=n;if(n=Fn,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,v=f,S=v.tag;if(!(v.mode&1)&&(S===0||S===11||S===15)){var A=v.alternate;A?(v.updateQueue=A.updateQueue,v.memoizedState=A.memoizedState,v.lanes=A.lanes):(v.updateQueue=null,v.memoizedState=null)}var M=Lm(a);if(M!==null){M.flags&=-257,jm(M,a,f,c,n),M.mode&1&&Nm(c,y,n),n=M,h=y;var _=n.updateQueue;if(_===null){var U=new Set;U.add(h),n.updateQueue=U}else _.add(h);break e}else{if(!(n&1)){Nm(c,y,n),Lp();break e}h=Error(ne(426))}}else if(un&&f.mode&1){var $=Lm(a);if($!==null){!($.flags&65536)&&($.flags|=256),jm($,a,f,c,n),sp(qi(h,f));break e}}c=h=qi(h,f),jn!==4&&(jn=2),ys===null?ys=[c]:ys.push(c),c=a;do{switch(c.tag){case 3:c.flags|=65536,n&=-n,c.lanes|=n;var b=B6(c,h,n);Cm(c,b);break e;case 1:f=h;var w=c.type,N=c.stateNode;if(!(c.flags&128)&&(typeof w.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Dl===null||!Dl.has(N)))){c.flags|=65536,n&=-n,c.lanes|=n;var z=H6(c,f,n);Cm(c,z);break e}}c=c.return}while(c!==null)}i8(l)}catch(K){n=K,kn===l&&l!==null&&(kn=l=l.return);continue}break}while(!0)}function l8(){var e=t1.current;return t1.current=n1,e===null?n1:e}function Lp(){(jn===0||jn===3||jn===2)&&(jn=4),zn===null||!(Ua&268435455)&&!(b1&268435455)||Ml(zn,Fn)}function a1(e,n){var l=Be;Be|=2;var o=l8();(zn!==e||Fn!==n)&&(Hr=null,za(e,n));do try{P5();break}catch(s){r8(e,s)}while(!0);if(cp(),Be=l,t1.current=o,kn!==null)throw Error(ne(261));return zn=null,Fn=0,jn}function P5(){for(;kn!==null;)a8(kn)}function T5(){for(;kn!==null&&!t4();)a8(kn)}function a8(e){var n=s8(e.alternate,e,At);e.memoizedProps=e.pendingProps,n===null?i8(e):kn=n,Ep.current=null}function i8(e){var n=e;do{var l=n.alternate;if(e=n.return,n.flags&32768){if(l=k5(l,n),l!==null){l.flags&=32767,kn=l;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{jn=6,kn=null;return}}else if(l=E5(l,n,At),l!==null){kn=l;return}if(n=n.sibling,n!==null){kn=n;return}kn=n=e}while(n!==null);jn===0&&(jn=5)}function Pa(e,n,l){var o=Ke,s=Qt.transition;try{Qt.transition=null,Ke=1,M5(e,n,l,o)}finally{Qt.transition=s,Ke=o}return null}function M5(e,n,l,o){do Yi();while(zl!==null);if(Be&6)throw Error(ne(327));l=e.finishedWork;var s=e.finishedLanes;if(l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(ne(177));e.callbackNode=null,e.callbackPriority=0;var c=l.lanes|l.childLanes;if(p4(e,c),e===zn&&(kn=zn=null,Fn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Cc||(Cc=!0,u8(Bc,function(){return Yi(),null})),c=(l.flags&15990)!==0,l.subtreeFlags&15990||c){c=Qt.transition,Qt.transition=null;var a=Ke;Ke=1;var f=Be;Be|=4,Ep.current=null,A5(e,l),e8(l,e),J4(od),Dc=!!id,od=id=null,e.current=l,N5(l),r4(),Be=f,Ke=a,Qt.transition=c}else e.current=l;if(Cc&&(Cc=!1,zl=e,l1=s),c=e.pendingLanes,c===0&&(Dl=null),i4(l.stateNode),yt(e,wn()),n!==null)for(o=e.onRecoverableError,l=0;l<n.length;l++)s=n[l],o(s.value,{componentStack:s.stack,digest:s.digest});if(r1)throw r1=!1,e=Nd,Nd=null,e;return l1&1&&e.tag!==0&&Yi(),c=e.pendingLanes,c&1?e===Ld?xs++:(xs=0,Ld=e):xs=0,Xl(),null}function Yi(){if(zl!==null){var e=Bh(l1),n=Qt.transition,l=Ke;try{if(Qt.transition=null,Ke=16>e?16:e,zl===null)var o=!1;else{if(e=zl,zl=null,l1=0,Be&6)throw Error(ne(331));var s=Be;for(Be|=4,fe=e.current;fe!==null;){var c=fe,a=c.child;if(fe.flags&16){var f=c.deletions;if(f!==null){for(var h=0;h<f.length;h++){var y=f[h];for(fe=y;fe!==null;){var v=fe;switch(v.tag){case 0:case 11:case 15:vs(8,v,c)}var S=v.child;if(S!==null)S.return=v,fe=S;else for(;fe!==null;){v=fe;var A=v.sibling,M=v.return;if($6(v),v===y){fe=null;break}if(A!==null){A.return=M,fe=A;break}fe=M}}}var _=c.alternate;if(_!==null){var U=_.child;if(U!==null){_.child=null;do{var $=U.sibling;U.sibling=null,U=$}while(U!==null)}}fe=c}}if(c.subtreeFlags&2064&&a!==null)a.return=c,fe=a;else e:for(;fe!==null;){if(c=fe,c.flags&2048)switch(c.tag){case 0:case 11:case 15:vs(9,c,c.return)}var b=c.sibling;if(b!==null){b.return=c.return,fe=b;break e}fe=c.return}}var w=e.current;for(fe=w;fe!==null;){a=fe;var N=a.child;if(a.subtreeFlags&2064&&N!==null)N.return=a,fe=N;else e:for(a=w;fe!==null;){if(f=fe,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:C1(9,f)}}catch(K){yn(f,f.return,K)}if(f===a){fe=null;break e}var z=f.sibling;if(z!==null){z.return=f.return,fe=z;break e}fe=f.return}}if(Be=s,Xl(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(f1,e)}catch{}o=!0}return o}finally{Ke=l,Qt.transition=n}}return!1}function Dm(e,n,l){n=qi(l,n),n=B6(e,n,1),e=Hl(e,n,1),n=at(),e!==null&&(Bs(e,1,n),yt(e,n))}function yn(e,n,l){if(e.tag===3)Dm(e,e,l);else for(;n!==null;){if(n.tag===3){Dm(n,e,l);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Dl===null||!Dl.has(o))){e=qi(l,e),e=H6(n,e,1),n=Hl(n,e,1),e=at(),n!==null&&(Bs(n,1,e),yt(n,e));break}}n=n.return}}function I5(e,n,l){var o=e.pingCache;o!==null&&o.delete(n),n=at(),e.pingedLanes|=e.suspendedLanes&l,zn===e&&(Fn&l)===l&&(jn===4||jn===3&&(Fn&130023424)===Fn&&500>wn()-Sp?za(e,0):kp|=l),yt(e,n)}function o8(e,n){n===0&&(e.mode&1?(n=dc,dc<<=1,!(dc&130023424)&&(dc=4194304)):n=1);var l=at();e=Gr(e,n),e!==null&&(Bs(e,n,l),yt(e,l))}function z5(e){var n=e.memoizedState,l=0;n!==null&&(l=n.retryLane),o8(e,l)}function R5(e,n){var l=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(l=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(ne(314))}o!==null&&o.delete(n),o8(e,l)}var s8;s8=function(e,n,l){if(e!==null)if(e.memoizedProps!==n.pendingProps||gt.current)ht=!0;else{if(!(e.lanes&l)&&!(n.flags&128))return ht=!1,b5(e,n,l);ht=!!(e.flags&131072)}else ht=!1,un&&n.flags&1048576&&p6(n,Kc,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;Mc(e,n),e=n.pendingProps;var s=Ki(n,$n.current);Zi(n,l),s=yp(null,n,o,e,s,l);var c=xp();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,vt(o)?(c=!0,Yc(n)):c=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fp(n),s.updater=w1,n.stateNode=s,s._reactInternals=n,gd(n,o,e,l),n=xd(null,n,o,!0,c,l)):(n.tag=0,un&&c&&ip(n),lt(null,n,s,l),n=n.child),n;case 16:o=n.elementType;e:{switch(Mc(e,n),e=n.pendingProps,s=o._init,o=s(o._payload),n.type=o,s=n.tag=O5(o),e=rr(o,e),s){case 0:n=yd(null,n,o,e,l);break e;case 1:n=Mm(null,n,o,e,l);break e;case 11:n=Pm(null,n,o,e,l);break e;case 14:n=Tm(null,n,o,rr(o.type,e),l);break e}throw Error(ne(306,o,""))}return n;case 0:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:rr(o,s),yd(e,n,o,s,l);case 1:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:rr(o,s),Mm(e,n,o,s,l);case 3:e:{if(Q6(n),e===null)throw Error(ne(387));o=n.pendingProps,c=n.memoizedState,s=c.element,y6(e,n),Jc(n,o,null,l);var a=n.memoizedState;if(o=a.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){s=qi(Error(ne(423)),n),n=Im(e,n,o,l,s);break e}else if(o!==s){s=qi(Error(ne(424)),n),n=Im(e,n,o,l,s);break e}else for(Nt=Bl(n.stateNode.containerInfo.firstChild),Lt=n,un=!0,ar=null,l=g6(n,null,o,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Xi(),o===s){n=Kr(e,n,l);break e}lt(e,n,o,l)}n=n.child}return n;case 5:return x6(n),e===null&&fd(n),o=n.type,s=n.pendingProps,c=e!==null?e.memoizedProps:null,a=s.children,sd(o,s)?a=null:c!==null&&sd(o,c)&&(n.flags|=32),W6(e,n),lt(e,n,a,l),n.child;case 6:return e===null&&fd(n),null;case 13:return Z6(e,n,l);case 4:return mp(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=$i(n,null,o,l):lt(e,n,o,l),n.child;case 11:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:rr(o,s),Pm(e,n,o,s,l);case 7:return lt(e,n,n.pendingProps,l),n.child;case 8:return lt(e,n,n.pendingProps.children,l),n.child;case 12:return lt(e,n,n.pendingProps.children,l),n.child;case 10:e:{if(o=n.type._context,s=n.pendingProps,c=n.memoizedProps,a=s.value,en(Xc,o._currentValue),o._currentValue=a,c!==null)if(sr(c.value,a)){if(c.children===s.children&&!gt.current){n=Kr(e,n,l);break e}}else for(c=n.child,c!==null&&(c.return=n);c!==null;){var f=c.dependencies;if(f!==null){a=c.child;for(var h=f.firstContext;h!==null;){if(h.context===o){if(c.tag===1){h=Qr(-1,l&-l),h.tag=2;var y=c.updateQueue;if(y!==null){y=y.shared;var v=y.pending;v===null?h.next=h:(h.next=v.next,v.next=h),y.pending=h}}c.lanes|=l,h=c.alternate,h!==null&&(h.lanes|=l),md(c.return,l,n),f.lanes|=l;break}h=h.next}}else if(c.tag===10)a=c.type===n.type?null:c.child;else if(c.tag===18){if(a=c.return,a===null)throw Error(ne(341));a.lanes|=l,f=a.alternate,f!==null&&(f.lanes|=l),md(a,l,n),a=c.sibling}else a=c.child;if(a!==null)a.return=c;else for(a=c;a!==null;){if(a===n){a=null;break}if(c=a.sibling,c!==null){c.return=a.return,a=c;break}a=a.return}c=a}lt(e,n,s.children,l),n=n.child}return n;case 9:return s=n.type,o=n.pendingProps.children,Zi(n,l),s=Zt(s),o=o(s),n.flags|=1,lt(e,n,o,l),n.child;case 14:return o=n.type,s=rr(o,n.pendingProps),s=rr(o.type,s),Tm(e,n,o,s,l);case 15:return D6(e,n,n.type,n.pendingProps,l);case 17:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:rr(o,s),Mc(e,n),n.tag=1,vt(o)?(e=!0,Yc(n)):e=!1,Zi(n,l),U6(n,o,s),gd(n,o,s,l),xd(null,n,o,!0,e,l);case 19:return Y6(e,n,l);case 22:return V6(e,n,l)}throw Error(ne(156,n.tag))};function u8(e,n){return _h(e,n)}function _5(e,n,l,o){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,n,l,o){return new _5(e,n,l,o)}function jp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O5(e){if(typeof e=="function")return jp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gd)return 11;if(e===Kd)return 14}return 2}function Wl(e,n){var l=e.alternate;return l===null?(l=Wt(e.tag,n,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=n,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&14680064,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,n=e.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l}function Rc(e,n,l,o,s,c){var a=2;if(o=e,typeof e=="function")jp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Pi:return Ra(l.children,s,c,n);case Yd:a=8,s|=8;break;case B0:return e=Wt(12,l,n,s|2),e.elementType=B0,e.lanes=c,e;case H0:return e=Wt(13,l,n,s),e.elementType=H0,e.lanes=c,e;case D0:return e=Wt(19,l,n,s),e.elementType=D0,e.lanes=c,e;case xh:return E1(l,s,c,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vh:a=10;break e;case yh:a=9;break e;case Gd:a=11;break e;case Kd:a=14;break e;case jl:a=16,o=null;break e}throw Error(ne(130,e==null?e:typeof e,""))}return n=Wt(a,l,n,s),n.elementType=e,n.type=o,n.lanes=c,n}function Ra(e,n,l,o){return e=Wt(7,e,o,n),e.lanes=l,e}function E1(e,n,l,o){return e=Wt(22,e,o,n),e.elementType=xh,e.lanes=l,e.stateNode={isHidden:!1},e}function M0(e,n,l){return e=Wt(6,e,null,n),e.lanes=l,e}function I0(e,n,l){return n=Wt(4,e.children!==null?e.children:[],e.key,n),n.lanes=l,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function F5(e,n,l,o,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=f0(0),this.expirationTimes=f0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=f0(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Pp(e,n,l,o,s,c,a,f,h){return e=new F5(e,n,l,f,h),n===1?(n=1,c===!0&&(n|=8)):n=0,c=Wt(3,null,null,n),e.current=c,c.stateNode=e,c.memoizedState={element:o,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(c),e}function U5(e,n,l){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:o==null?null:""+o,children:e,containerInfo:n,implementation:l}}function c8(e){if(!e)return Yl;e=e._reactInternals;e:{if(Da(e)!==e||e.tag!==1)throw Error(ne(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(vt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(ne(171))}if(e.tag===1){var l=e.type;if(vt(l))return c6(e,l,n)}return n}function d8(e,n,l,o,s,c,a,f,h){return e=Pp(l,o,!0,e,s,c,a,f,h),e.context=c8(null),l=e.current,o=at(),s=Vl(l),c=Qr(o,s),c.callback=n??null,Hl(l,c,s),e.current.lanes=s,Bs(e,s,o),yt(e,o),e}function k1(e,n,l,o){var s=n.current,c=at(),a=Vl(s);return l=c8(l),n.context===null?n.context=l:n.pendingContext=l,n=Qr(c,a),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=Hl(s,n,a),e!==null&&(or(e,s,a,c),jc(e,s,a)),a}function i1(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<n?l:n}}function Tp(e,n){Vm(e,n),(e=e.alternate)&&Vm(e,n)}function B5(){return null}var p8=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mp(e){this._internalRoot=e}S1.prototype.render=Mp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(ne(409));k1(e,n,null,null)};S1.prototype.unmount=Mp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ba(function(){k1(null,e,null,null)}),n[Yr]=null}};function S1(e){this._internalRoot=e}S1.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vh();e={blockedOn:null,target:e,priority:n};for(var l=0;l<Tl.length&&n!==0&&n<Tl[l].priority;l++);Tl.splice(l,0,e),l===0&&Qh(e)}};function Ip(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function H5(e,n,l,o,s){if(s){if(typeof o=="function"){var c=o;o=function(){var y=i1(a);c.call(y)}}var a=d8(n,o,e,0,null,!1,!1,"",Wm);return e._reactRootContainer=a,e[Yr]=a.current,Ls(e.nodeType===8?e.parentNode:e),Ba(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var f=o;o=function(){var y=i1(h);f.call(y)}}var h=Pp(e,0,!1,null,null,!1,!1,"",Wm);return e._reactRootContainer=h,e[Yr]=h.current,Ls(e.nodeType===8?e.parentNode:e),Ba(function(){k1(n,h,l,o)}),h}function N1(e,n,l,o,s){var c=l._reactRootContainer;if(c){var a=c;if(typeof s=="function"){var f=s;s=function(){var h=i1(a);f.call(h)}}k1(n,a,e,s)}else a=H5(l,n,e,s,o);return i1(a)}Hh=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var l=ss(n.pendingLanes);l!==0&&(Jd(n,l|1),yt(n,wn()),!(Be&6)&&(eo=wn()+500,Xl()))}break;case 13:Ba(function(){var o=Gr(e,1);if(o!==null){var s=at();or(o,e,1,s)}}),Tp(e,1)}};qd=function(e){if(e.tag===13){var n=Gr(e,134217728);if(n!==null){var l=at();or(n,e,134217728,l)}Tp(e,134217728)}};Dh=function(e){if(e.tag===13){var n=Vl(e),l=Gr(e,n);if(l!==null){var o=at();or(l,e,n,o)}Tp(e,n)}};Vh=function(){return Ke};Wh=function(e,n){var l=Ke;try{return Ke=e,n()}finally{Ke=l}};J0=function(e,n,l){switch(n){case"input":if(Q0(e,l),n=l.name,l.type==="radio"&&n!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<l.length;n++){var o=l[n];if(o!==e&&o.form===e.form){var s=v1(o);if(!s)throw Error(ne(90));Ch(o),Q0(o,s)}}}break;case"textarea":Eh(e,l);break;case"select":n=l.value,n!=null&&Di(e,!!l.multiple,n,!1)}};Ph=Ap;Th=Ba;var D5={usingClientEntryPoint:!1,Events:[Ds,zi,v1,Lh,jh,Ap]},as={findFiberByHostInstance:Ta,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V5={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zh(e),e===null?null:e.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||B5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{f1=bc.inject(V5),kr=bc}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D5;Pt.createPortal=function(e,n){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(n))throw Error(ne(200));return U5(e,n,null,l)};Pt.createRoot=function(e,n){if(!Ip(e))throw Error(ne(299));var l=!1,o="",s=p8;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Pp(e,1,!1,null,null,l,!1,o,s),e[Yr]=n.current,Ls(e.nodeType===8?e.parentNode:e),new Mp(n)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(ne(188)):(e=Object.keys(e).join(","),Error(ne(268,e)));return e=zh(n),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return Ba(e)};Pt.hydrate=function(e,n,l){if(!A1(n))throw Error(ne(200));return N1(null,e,n,!0,l)};Pt.hydrateRoot=function(e,n,l){if(!Ip(e))throw Error(ne(405));var o=l!=null&&l.hydratedSources||null,s=!1,c="",a=p8;if(l!=null&&(l.unstable_strictMode===!0&&(s=!0),l.identifierPrefix!==void 0&&(c=l.identifierPrefix),l.onRecoverableError!==void 0&&(a=l.onRecoverableError)),n=d8(n,null,e,1,l??null,s,!1,c,a),e[Yr]=n.current,Ls(e),o)for(e=0;e<o.length;e++)l=o[e],s=l._getVersion,s=s(l._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[l,s]:n.mutableSourceEagerHydrationData.push(l,s);return new S1(n)};Pt.render=function(e,n,l){if(!A1(n))throw Error(ne(200));return N1(null,e,n,!1,l)};Pt.unmountComponentAtNode=function(e){if(!A1(e))throw Error(ne(40));return e._reactRootContainer?(Ba(function(){N1(null,null,e,!1,function(){e._reactRootContainer=null,e[Yr]=null})}),!0):!1};Pt.unstable_batchedUpdates=Ap;Pt.unstable_renderSubtreeIntoContainer=function(e,n,l,o){if(!A1(l))throw Error(ne(200));if(e==null||e._reactInternals===void 0)throw Error(ne(38));return N1(e,n,l,!1,o)};Pt.version="18.3.1-next-f1338f8080-20240426";function f8(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f8)}catch(e){console.error(e)}}f8(),fh.exports=Pt;var W5=fh.exports,Qm=W5;F0.createRoot=Qm.createRoot,F0.hydrateRoot=Qm.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},Os.apply(this,arguments)}var Rl;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rl||(Rl={}));const Zm="popstate";function Q5(e){e===void 0&&(e={});function n(o,s){let{pathname:c,search:a,hash:f}=o.location;return Td("",{pathname:c,search:a,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function l(o,s){return typeof s=="string"?s:o1(s)}return Y5(n,l,null,e)}function xn(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function m8(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Z5(){return Math.random().toString(36).substr(2,8)}function Ym(e,n){return{usr:e.state,key:e.key,idx:n}}function Td(e,n,l,o){return l===void 0&&(l=null),Os({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ao(n):n,{state:l,key:n&&n.key||o||Z5()})}function o1(e){let{pathname:n="/",search:l="",hash:o=""}=e;return l&&l!=="?"&&(n+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ao(e){let n={};if(e){let l=e.indexOf("#");l>=0&&(n.hash=e.substr(l),e=e.substr(0,l));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function Y5(e,n,l,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:c=!1}=o,a=s.history,f=Rl.Pop,h=null,y=v();y==null&&(y=0,a.replaceState(Os({},a.state,{idx:y}),""));function v(){return(a.state||{idx:null}).idx}function S(){f=Rl.Pop;let $=v(),b=$==null?null:$-y;y=$,h&&h({action:f,location:U.location,delta:b})}function A($,b){f=Rl.Push;let w=Td(U.location,$,b);l&&l(w,$),y=v()+1;let N=Ym(w,y),z=U.createHref(w);try{a.pushState(N,"",z)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;s.location.assign(z)}c&&h&&h({action:f,location:U.location,delta:1})}function M($,b){f=Rl.Replace;let w=Td(U.location,$,b);l&&l(w,$),y=v();let N=Ym(w,y),z=U.createHref(w);a.replaceState(N,"",z),c&&h&&h({action:f,location:U.location,delta:0})}function _($){let b=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof $=="string"?$:o1($);return w=w.replace(/ $/,"%20"),xn(b,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,b)}let U={get action(){return f},get location(){return e(s,a)},listen($){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(Zm,S),h=$,()=>{s.removeEventListener(Zm,S),h=null}},createHref($){return n(s,$)},createURL:_,encodeLocation($){let b=_($);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:A,replace:M,go($){return a.go($)}};return U}var Gm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gm||(Gm={}));function G5(e,n,l){l===void 0&&(l="/");let o=typeof n=="string"?ao(n):n,s=no(o.pathname||"/",l);if(s==null)return null;let c=h8(e);K5(c);let a=null;for(let f=0;a==null&&f<c.length;++f){let h=ig(s);a=lg(c[f],h)}return a}function h8(e,n,l,o){n===void 0&&(n=[]),l===void 0&&(l=[]),o===void 0&&(o="");let s=(c,a,f)=>{let h={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:a,route:c};h.relativePath.startsWith("/")&&(xn(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let y=Ql([o,h.relativePath]),v=l.concat(h);c.children&&c.children.length>0&&(xn(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),h8(c.children,n,v,y)),!(c.path==null&&!c.index)&&n.push({path:y,score:tg(y,c.index),routesMeta:v})};return e.forEach((c,a)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))s(c,a);else for(let h of g8(c.path))s(c,a,h)}),n}function g8(e){let n=e.split("/");if(n.length===0)return[];let[l,...o]=n,s=l.endsWith("?"),c=l.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let a=g8(o.join("/")),f=[];return f.push(...a.map(h=>h===""?c:[c,h].join("/"))),s&&f.push(...a),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function K5(e){e.sort((n,l)=>n.score!==l.score?l.score-n.score:rg(n.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}const X5=/^:[\w-]+$/,$5=3,J5=2,q5=1,eg=10,ng=-2,Km=e=>e==="*";function tg(e,n){let l=e.split("/"),o=l.length;return l.some(Km)&&(o+=ng),n&&(o+=J5),l.filter(s=>!Km(s)).reduce((s,c)=>s+(X5.test(c)?$5:c===""?q5:eg),o)}function rg(e,n){return e.length===n.length&&e.slice(0,-1).every((o,s)=>o===n[s])?e[e.length-1]-n[n.length-1]:0}function lg(e,n){let{routesMeta:l}=e,o={},s="/",c=[];for(let a=0;a<l.length;++a){let f=l[a],h=a===l.length-1,y=s==="/"?n:n.slice(s.length)||"/",v=Md({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},y);if(!v)return null;Object.assign(o,v.params);let S=f.route;c.push({params:o,pathname:Ql([s,v.pathname]),pathnameBase:cg(Ql([s,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(s=Ql([s,v.pathnameBase]))}return c}function Md(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,o]=ag(e.path,e.caseSensitive,e.end),s=n.match(l);if(!s)return null;let c=s[0],a=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:o.reduce((y,v,S)=>{let{paramName:A,isOptional:M}=v;if(A==="*"){let U=f[S]||"";a=c.slice(0,c.length-U.length).replace(/(.)\/+$/,"$1")}const _=f[S];return M&&!_?y[A]=void 0:y[A]=(_||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:a,pattern:e}}function ag(e,n,l){n===void 0&&(n=!1),l===void 0&&(l=!0),m8(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,f,h)=>(o.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),o]}function ig(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return m8(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function no(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let l=n.endsWith("/")?n.length-1:n.length,o=e.charAt(l);return o&&o!=="/"?null:e.slice(l)||"/"}function og(e,n){n===void 0&&(n="/");let{pathname:l,search:o="",hash:s=""}=typeof e=="string"?ao(e):e;return{pathname:l?l.startsWith("/")?l:sg(l,n):n,search:dg(o),hash:pg(s)}}function sg(e,n){let l=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?l.length>1&&l.pop():s!=="."&&l.push(s)}),l.length>1?l.join("/"):"/"}function z0(e,n,l,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ug(e){return e.filter((n,l)=>l===0||n.route.path&&n.route.path.length>0)}function v8(e,n){let l=ug(e);return n?l.map((o,s)=>s===e.length-1?o.pathname:o.pathnameBase):l.map(o=>o.pathnameBase)}function y8(e,n,l,o){o===void 0&&(o=!1);let s;typeof e=="string"?s=ao(e):(s=Os({},e),xn(!s.pathname||!s.pathname.includes("?"),z0("?","pathname","search",s)),xn(!s.pathname||!s.pathname.includes("#"),z0("#","pathname","hash",s)),xn(!s.search||!s.search.includes("#"),z0("#","search","hash",s)));let c=e===""||s.pathname==="",a=c?"/":s.pathname,f;if(a==null)f=l;else{let S=n.length-1;if(!o&&a.startsWith("..")){let A=a.split("/");for(;A[0]==="..";)A.shift(),S-=1;s.pathname=A.join("/")}f=S>=0?n[S]:"/"}let h=og(s,f),y=a&&a!=="/"&&a.endsWith("/"),v=(c||a===".")&&l.endsWith("/");return!h.pathname.endsWith("/")&&(y||v)&&(h.pathname+="/"),h}const Ql=e=>e.join("/").replace(/\/\/+/g,"/"),cg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const x8=["post","put","patch","delete"];new Set(x8);const mg=["get",...x8];new Set(mg);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},Fs.apply(this,arguments)}const L1=re.createContext(null),w8=re.createContext(null),$l=re.createContext(null),j1=re.createContext(null),Va=re.createContext({outlet:null,matches:[],isDataRoute:!1}),C8=re.createContext(null);function hg(e,n){let{relative:l}=n===void 0?{}:n;Ws()||xn(!1);let{basename:o,navigator:s}=re.useContext($l),{hash:c,pathname:a,search:f}=P1(e,{relative:l}),h=a;return o!=="/"&&(h=a==="/"?o:Ql([o,a])),s.createHref({pathname:h,search:f,hash:c})}function Ws(){return re.useContext(j1)!=null}function Qs(){return Ws()||xn(!1),re.useContext(j1).location}function b8(e){re.useContext($l).static||re.useLayoutEffect(e)}function gg(){let{isDataRoute:e}=re.useContext(Va);return e?jg():vg()}function vg(){Ws()||xn(!1);let e=re.useContext(L1),{basename:n,future:l,navigator:o}=re.useContext($l),{matches:s}=re.useContext(Va),{pathname:c}=Qs(),a=JSON.stringify(v8(s,l.v7_relativeSplatPath)),f=re.useRef(!1);return b8(()=>{f.current=!0}),re.useCallback(function(y,v){if(v===void 0&&(v={}),!f.current)return;if(typeof y=="number"){o.go(y);return}let S=y8(y,JSON.parse(a),c,v.relative==="path");e==null&&n!=="/"&&(S.pathname=S.pathname==="/"?n:Ql([n,S.pathname])),(v.replace?o.replace:o.push)(S,v.state,v)},[n,o,a,c,e])}function P1(e,n){let{relative:l}=n===void 0?{}:n,{future:o}=re.useContext($l),{matches:s}=re.useContext(Va),{pathname:c}=Qs(),a=JSON.stringify(v8(s,o.v7_relativeSplatPath));return re.useMemo(()=>y8(e,JSON.parse(a),c,l==="path"),[e,a,c,l])}function yg(e,n){return xg(e,n)}function xg(e,n,l,o){Ws()||xn(!1);let{navigator:s}=re.useContext($l),{matches:c}=re.useContext(Va),a=c[c.length-1],f=a?a.params:{};a&&a.pathname;let h=a?a.pathnameBase:"/";a&&a.route;let y=Qs(),v;if(n){var S;let $=typeof n=="string"?ao(n):n;h==="/"||(S=$.pathname)!=null&&S.startsWith(h)||xn(!1),v=$}else v=y;let A=v.pathname||"/",M=A;if(h!=="/"){let $=h.replace(/^\//,"").split("/");M="/"+A.replace(/^\//,"").split("/").slice($.length).join("/")}let _=G5(e,{pathname:M}),U=kg(_&&_.map($=>Object.assign({},$,{params:Object.assign({},f,$.params),pathname:Ql([h,s.encodeLocation?s.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?h:Ql([h,s.encodeLocation?s.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),c,l,o);return n&&U?re.createElement(j1.Provider,{value:{location:Fs({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Rl.Pop}},U):U}function wg(){let e=Lg(),n=fg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},n),l?re.createElement("pre",{style:s},l):null,null)}const Cg=re.createElement(wg,null);class bg extends re.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,l){return l.location!==n.location||l.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:l.error,location:l.location,revalidation:n.revalidation||l.revalidation}}componentDidCatch(n,l){console.error("React Router caught the following error during render",n,l)}render(){return this.state.error!==void 0?re.createElement(Va.Provider,{value:this.props.routeContext},re.createElement(C8.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Eg(e){let{routeContext:n,match:l,children:o}=e,s=re.useContext(L1);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),re.createElement(Va.Provider,{value:n},o)}function kg(e,n,l,o){var s;if(n===void 0&&(n=[]),l===void 0&&(l=null),o===void 0&&(o=null),e==null){var c;if((c=l)!=null&&c.errors)e=l.matches;else return null}let a=e,f=(s=l)==null?void 0:s.errors;if(f!=null){let v=a.findIndex(S=>S.route.id&&(f==null?void 0:f[S.route.id]));v>=0||xn(!1),a=a.slice(0,Math.min(a.length,v+1))}let h=!1,y=-1;if(l&&o&&o.v7_partialHydration)for(let v=0;v<a.length;v++){let S=a[v];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=v),S.route.id){let{loaderData:A,errors:M}=l,_=S.route.loader&&A[S.route.id]===void 0&&(!M||M[S.route.id]===void 0);if(S.route.lazy||_){h=!0,y>=0?a=a.slice(0,y+1):a=[a[0]];break}}}return a.reduceRight((v,S,A)=>{let M,_=!1,U=null,$=null;l&&(M=f&&S.route.id?f[S.route.id]:void 0,U=S.route.errorElement||Cg,h&&(y<0&&A===0?(Pg("route-fallback",!1),_=!0,$=null):y===A&&(_=!0,$=S.route.hydrateFallbackElement||null)));let b=n.concat(a.slice(0,A+1)),w=()=>{let N;return M?N=U:_?N=$:S.route.Component?N=re.createElement(S.route.Component,null):S.route.element?N=S.route.element:N=v,re.createElement(Eg,{match:S,routeContext:{outlet:v,matches:b,isDataRoute:l!=null},children:N})};return l&&(S.route.ErrorBoundary||S.route.errorElement||A===0)?re.createElement(bg,{location:l.location,revalidation:l.revalidation,component:U,error:M,children:w(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):w()},null)}var E8=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(E8||{}),s1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(s1||{});function Sg(e){let n=re.useContext(L1);return n||xn(!1),n}function Ag(e){let n=re.useContext(w8);return n||xn(!1),n}function Ng(e){let n=re.useContext(Va);return n||xn(!1),n}function k8(e){let n=Ng(),l=n.matches[n.matches.length-1];return l.route.id||xn(!1),l.route.id}function Lg(){var e;let n=re.useContext(C8),l=Ag(s1.UseRouteError),o=k8(s1.UseRouteError);return n!==void 0?n:(e=l.errors)==null?void 0:e[o]}function jg(){let{router:e}=Sg(E8.UseNavigateStable),n=k8(s1.UseNavigateStable),l=re.useRef(!1);return b8(()=>{l.current=!0}),re.useCallback(function(s,c){c===void 0&&(c={}),l.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Fs({fromRouteId:n},c)))},[e,n])}const Xm={};function Pg(e,n,l){!n&&!Xm[e]&&(Xm[e]=!0)}function cs(e){xn(!1)}function Tg(e){let{basename:n="/",children:l=null,location:o,navigationType:s=Rl.Pop,navigator:c,static:a=!1,future:f}=e;Ws()&&xn(!1);let h=n.replace(/^\/*/,"/"),y=re.useMemo(()=>({basename:h,navigator:c,static:a,future:Fs({v7_relativeSplatPath:!1},f)}),[h,f,c,a]);typeof o=="string"&&(o=ao(o));let{pathname:v="/",search:S="",hash:A="",state:M=null,key:_="default"}=o,U=re.useMemo(()=>{let $=no(v,h);return $==null?null:{location:{pathname:$,search:S,hash:A,state:M,key:_},navigationType:s}},[h,v,S,A,M,_,s]);return U==null?null:re.createElement($l.Provider,{value:y},re.createElement(j1.Provider,{children:l,value:U}))}function Mg(e){let{children:n,location:l}=e;return yg(Id(n),l)}new Promise(()=>{});function Id(e,n){n===void 0&&(n=[]);let l=[];return re.Children.forEach(e,(o,s)=>{if(!re.isValidElement(o))return;let c=[...n,s];if(o.type===re.Fragment){l.push.apply(l,Id(o.props.children,c));return}o.type!==cs&&xn(!1),!o.props.index||!o.props.children||xn(!1);let a={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(a.children=Id(o.props.children,c)),l.push(a)}),l}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function u1(){return u1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},u1.apply(this,arguments)}function S8(e,n){if(e==null)return{};var l={},o=Object.keys(e),s,c;for(c=0;c<o.length;c++)s=o[c],!(n.indexOf(s)>=0)&&(l[s]=e[s]);return l}function Ig(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zg(e,n){return e.button===0&&(!n||n==="_self")&&!Ig(e)}const Rg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_g=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Og="6";try{window.__reactRouterVersion=Og}catch{}const Fg=re.createContext({isTransitioning:!1}),Ug="startTransition",$m=I7[Ug];function Bg(e){let{basename:n,children:l,future:o,window:s}=e,c=re.useRef();c.current==null&&(c.current=Q5({window:s,v5Compat:!0}));let a=c.current,[f,h]=re.useState({action:a.action,location:a.location}),{v7_startTransition:y}=o||{},v=re.useCallback(S=>{y&&$m?$m(()=>h(S)):h(S)},[h,y]);return re.useLayoutEffect(()=>a.listen(v),[a,v]),re.createElement(Tg,{basename:n,children:l,location:f.location,navigationType:f.action,navigator:a,future:o})}const Hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hi=re.forwardRef(function(n,l){let{onClick:o,relative:s,reloadDocument:c,replace:a,state:f,target:h,to:y,preventScrollReset:v,unstable_viewTransition:S}=n,A=S8(n,Rg),{basename:M}=re.useContext($l),_,U=!1;if(typeof y=="string"&&Dg.test(y)&&(_=y,Hg))try{let N=new URL(window.location.href),z=y.startsWith("//")?new URL(N.protocol+y):new URL(y),K=no(z.pathname,M);z.origin===N.origin&&K!=null?y=K+z.search+z.hash:U=!0}catch{}let $=hg(y,{relative:s}),b=Wg(y,{replace:a,state:f,target:h,preventScrollReset:v,relative:s,unstable_viewTransition:S});function w(N){o&&o(N),N.defaultPrevented||b(N)}return re.createElement("a",u1({},A,{href:_||$,onClick:U||c?o:w,ref:l,target:h}))}),Ec=re.forwardRef(function(n,l){let{"aria-current":o="page",caseSensitive:s=!1,className:c="",end:a=!1,style:f,to:h,unstable_viewTransition:y,children:v}=n,S=S8(n,_g),A=P1(h,{relative:S.relative}),M=Qs(),_=re.useContext(w8),{navigator:U,basename:$}=re.useContext($l),b=_!=null&&Qg(A)&&y===!0,w=U.encodeLocation?U.encodeLocation(A).pathname:A.pathname,N=M.pathname,z=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(N=N.toLowerCase(),z=z?z.toLowerCase():null,w=w.toLowerCase()),z&&$&&(z=no(z,$)||z);const K=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let ie=N===w||!a&&N.startsWith(w)&&N.charAt(K)==="/",se=z!=null&&(z===w||!a&&z.startsWith(w)&&z.charAt(w.length)==="/"),de={isActive:ie,isPending:se,isTransitioning:b},Te=ie?o:void 0,Ce;typeof c=="function"?Ce=c(de):Ce=[c,ie?"active":null,se?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Ge=typeof f=="function"?f(de):f;return re.createElement(Hi,u1({},S,{"aria-current":Te,className:Ce,ref:l,style:Ge,to:h,unstable_viewTransition:y}),typeof v=="function"?v(de):v)});var zd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zd||(zd={}));var Jm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jm||(Jm={}));function Vg(e){let n=re.useContext(L1);return n||xn(!1),n}function Wg(e,n){let{target:l,replace:o,state:s,preventScrollReset:c,relative:a,unstable_viewTransition:f}=n===void 0?{}:n,h=gg(),y=Qs(),v=P1(e,{relative:a});return re.useCallback(S=>{if(zg(S,l)){S.preventDefault();let A=o!==void 0?o:o1(y)===o1(v);h(e,{replace:A,state:s,preventScrollReset:c,relative:a,unstable_viewTransition:f})}},[y,h,v,o,s,l,e,c,a,f])}function Qg(e,n){n===void 0&&(n={});let l=re.useContext(Fg);l==null&&xn(!1);let{basename:o}=Vg(zd.useViewTransitionState),s=P1(e,{relative:n.relative});if(!l.isTransitioning)return!1;let c=no(l.currentLocation.pathname,o)||l.currentLocation.pathname,a=no(l.nextLocation.pathname,o)||l.nextLocation.pathname;return Md(s.pathname,a)!=null||Md(s.pathname,c)!=null}const A8="/assets/coreTechWhite-01-iPey1q_-.png",N8="/assets/coreTechBlack-01-CQAuzwEF.png",Zg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgB7ZbNUcMwEIVfTAMuQR2QIzerA9MBdAAdpAToQCWEDhwqYKjAcOPmUIHZHa+D7bF+VpATfDNvJrF39bRrWTLw17iAjpJ0RbKkmvRJ+gjEG4l7RSaW1JA6Ui/i39eRvJ3EllBixLBfqJV7scm2Eu8S4k9sJ4la07XJsm6QYNrlJku+w/yxcNuDLTdYr3SsVsNe8qqUYOcxZT1AhyW9pAb2AdWR/C0SKRb/Y8/vGLhnMVRnkUGPvIpvMV+M0QVYLGYcw3iuH0TMI+kZCu4Qr7gJ5POrskcGuwRjlkUevL2eFl8BPQ76vddg6Ea9ZvyONAyGlqeaj/HM6lthkdbq6S5mEeYe89VejTc2k6BSBtO28UB6wveZa0iXGF6x5Vgb3yANdFVr5BDAntG4QoTmDKYOCRj4j8UctVB+fXS/YNpBcWJNzX9SeYsM0xGD8IeBTw0U7Q1RJUygE8Po6mU20MMDcwvHzeFNxBvIEf94+AJ8qxbNG64DmAAAAABJRU5ErkJggg==",Yg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALVSURBVHgBrVbbldpADJV5/S4lkApCKlhSwZoKoIN1B+xWELYCoAJDBbAVkFSQdLD+442ja+6Amdhj8OaeozPj8UgaaaSRREoijuNnkJRETcqjKZ9AxfVTLQqVOnInlKcPXikLKFX6rdTkt6/U43wAstf5DZ6WS7bTYs/zFjpMlcxdRkp+xtYe/0Hpiw4L5f0jnwGsNVaT5lyHN3zO5/zXUloWWZsY5VD4osNUT/5T5wGWdP5Gt3fkElwRLYxwtzp/4L62zp90/ioFloXpk4KRlrb5DWvmx+Mx3u/38W63SwhzrClGht/mTXkozFLc52ZbAChQ+thut/Fqtcok/OMBAsNHGbiCIWU/isPyAe8p4HcAgev1+h9FsBaj+YfRKDe8VDgwmWHg5Shv6YDTvYNRhWPtao/enVQqlTPpIeRwOCTrjUYj0vGbbntSmuD+bR2e7W65DpaR3mMfAl2gsrPyarUq9XodMr7TUri9qd9Tw2PnMZQiJ0PeTaFSHljglVqtlhwCPAwmKEVA4R14yLXYEuargFAtlluhVorecaIYc7Xc14PMsvbWWGHsB/8X1ux7LQKU4r5psVBGR07xkkaU92RGUgLGWguZVey/ujoNBJtan+9qS1lfTimAU3bhtrJAkMkpHfG2w4OToqgeQinSCdUJqXEvwKO8Y+ZvV2kst0Q10wBpBTctN5vNzYFmclrHL3IqJpklsmIrZFVaUggYXilI7lAakDfJY8rMRqrb+JHqOM5FAm9wUZFAIWET2Laq2oiye1mKw3T1yCmLI0dZnBeUxVa6LLrSCf3ULNUIfOh8Qm88ynUj8M63/fnkcW94cyPgOMC5nYmvWx+fr1K69Tm3SUVyb0lUWD5lsHTk8qp9lctTiLU202dMHiecDT3vrMPUAGDJJGPrTC6uf1OCh2bsUu8HA66X82/AOMj6l91fpeC0WE/clRKgpQspq7gApSqYwV/KNyl6/3NQQAAAAABJRU5ErkJggg==",Jl=re.createContext(),Gg=({children:e})=>{const[n,l]=re.useState(!1);re.useEffect(()=>{const s=document.querySelector("body");n?(s.classList.add("dark-bg"),s.classList.remove("light-bg")):(s.classList.remove("dark-bg"),s.classList.add("light-bg"))},[n]);const o=()=>{l(s=>!s)};return m.jsx(Jl.Provider,{value:{darkMode:n,toggleDarkMode:o},children:e})},T1=()=>{const{darkMode:e,toggleDarkMode:n}=re.useContext(Jl);return m.jsx("div",{className:`navbarBg sticky-top ${e?"":"navbarBgLight"}`,children:m.jsx("nav",{className:"navbar navbar-expand-md navTransparent ",children:m.jsxs("div",{className:"container-fluid",children:[m.jsx(Hi,{className:"navbar-brand",to:"/",children:m.jsx("div",{children:e?m.jsx("img",{src:A8,className:"Logo",alt:"CoreTech logo"}):m.jsx("img",{src:N8,className:"Logo",alt:"CoreTech logo"})})}),m.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:m.jsx("span",{className:"navbar-toggler-icon"})}),m.jsxs("div",{className:"collapse navbar-collapse justify-content-between text-center",id:"navbarSupportedContent",children:[m.jsxs("ul",{className:"navbar-nav mb-2 mb-lg-0 align-items-center space",children:[m.jsx("li",{className:"nav-item ",children:m.jsx(Ec,{className:`nav-link ${e?"white poppinsLight":"black"} `,to:"/",children:"Home"})}),m.jsx("li",{className:"nav-item ",children:m.jsx(Ec,{className:`nav-link ${e?"white poppinsLight":"black"} `,to:"/about",children:"About Us"})}),m.jsx("li",{className:"nav-item ",children:m.jsx(Ec,{className:`nav-link ${e?"white poppinsLight":"black"} `,to:"/portfolio",children:"Portfolio"})}),m.jsx("li",{className:"nav-item ",children:m.jsx(Ec,{className:`nav-link ${e?"white poppinsLight":"black"} `,to:"/contact",children:"Contact"})})]}),m.jsxs("div",{className:`theme ${e?"white poppinsLight":"black"} `,onClick:n,children:[e?m.jsx("img",{src:Yg,alt:""}):m.jsx("img",{src:Zg,alt:""}),e?"Light":"Dark"]})]})]})})})},Kg="/assets/AppDev-hH86Q3V-.png",Xg="/assets/about-Brt_KE3J.png",$g="/assets/simplicity-D7XV9Bg_.png",Jg="/assets/criticalthinking-C3cwehXw.png",qg="/assets/effectiveness-BJVwoqpW.png",e9="/assets/security-CDC5nuQC.png",n9="/assets/Group%2095-5VNJztX3.png",t9="/assets/Group%2096-BQQRxIWr.png",r9="/assets/Group%2097-CxKGVBjd.png",l9="/assets/Group%20100-S-FeIEXP.png",a9="/assets/Group%2099-Cnloh9g7.png",i9="/assets/Group%2098-6rv2zIAJ.png",o9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJ+SURBVHic7Zo9axRRFIafMxkScRcUIoiNEGtBxEq0ESvtA0JMm6QRFFxILMLaiSsWiswWgqCNFpbp0xnJDxAR0vuFH0nAdTc5FgaLEGbu3DuzN8HztHvmnWfevTs7MwwYhmEYhvG/Ip051Tp30OqKhGxft19SZ/hBwAqILRAbKyC2QGysgNgCsbECYgvExgqILRAbKyC2QGysgNgCsbECYgvExgqILRAbKyC2QGysgNgCsQl6Zv/oho71+vzKGem1unIoZB8huPgFrYBenyMFI+sh+aG4+AUVkAinCka+heSH4uIXVMC2cqZg5ENIfigufkEFCFzO+1zhfUh+KC5+3gV0prWhcKXA4I1vfiiuft4FSJMpoJkzooOUZd/8UFz9vApoT+qownzB2Mqdx/LZJz+UMn5eBRw+xm2UibwZUZ77ZFdBGb/SBdyf0wuiLBaMrfcTXpXNroKyfqUKuDejJ4HXwFjenEC2kMnQrwF8/NIy4SMJS8DxgtGf6YCHrrlV4evntAI6s3p+JOEtcLpoVpTFm0/lo0tuVYT45a6A9qSO7pxQFilYVjusbpzgicNcJVTht+fdYGdaG9JkSmG+6Gz6D+V7mnDuViZrTvMBVOmXtid1tDHOUbaZEOGsCpeAq6q5FxG7GZBwvY6Dr9svbYzTAyABzxfyFGGmlcmS3+b51O0X+kRoC5htZfIsMKcuCv2c/wb34AfCVF3ffAU4+fkWsJoK14ZxwvPE2a/cT0DYBO5ufuXivjx4Dz/XFbCBkgEPWl355C1YH95+eQUosKLwYkt4udAd/rV9AZX4pcBv/j69/QKsIbxTWBmkLMe6n9/FfvczDMMwDOOA8gcLH/4/UWXYNwAAAABJRU5ErkJggg==",_c="/assets/45631-BCrAOl-U.jpg",Rd="/assets/1287-BLMPM2UV.jpg",_d="/assets/18155-Do3Q7ju_.jpg",Od="/assets/27767-CSrKlmLK.jpg",Fd="/assets/6837-DSop_vRb.jpg",s9="/assets/2148767055-4mRCOMwd.jpg",Ud="/assets/21959-Cs0baGTl.jpg",Ni="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAESSURBVDiNnZI9SsRgEIafiYGAOYCVbQJ6j1RJwBO4HsRKEBQECy1SrVaiVQiDOYGo21oZa0EbESsl4GyzK2tMQta3/Gbe55s/4jjeStN0jX9qJQzDS2AvDMP1IAgeq6p6WwYgSZJsAveAD3wD12a2r6q3gwAASZKMgHEjdmNmB6qqgPUCZpAxMGrJeRCRk7quz8uy/OoERFHke543ATY6PnsRkcxxnOM8z9//AGZVLM6jSx/AmZkdquqzNKMd82jTp5llzoDETomItbUwAVZ7fL9acOevURT5wFWPuXWIPwDP805p30DvGl2AOI53gO1GbNghNfpe+pRd4AJwgMzMjlT1aYhxEbArIndFUbwuY5xrChZCeSncr5MHAAAAAElFTkSuQmCC",Li="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACZSURBVDiNpdMxDkFBFIXhR6PQ6BRqlRVYhIgd0FiHJdDp2IMt2ACJNagl5FXyKaiY583M+/v7Z86ZewvM0C9ywQklthjmCEa4e/PEAeNUydwvR0zQipXsAhI4Y4lOnaCLS4UErlihF9tHFTdsMEjpI0SJdTuqoD/JQxEeWRE0LRH7isH6b8QiMBi3SF+501f588RGxzTV4Jxfs5uxGDmWNFgAAAAASUVORK5CYII=",u9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABJwAAAScBjbzwzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGgSURBVFiF3da9Sh1REMDx36ohmEoQBVMJESM2WqVLkS5VCAha5QVSaZW8QUgTBQuxSpGXMG8gKQQb81GligSCH6kshJNij8l1cc/uDXvuBQeGLXbOzJ+ZOXMGprGJU4Qb9DT+nw4h6FpF5zcFrupmDoACvzCpWc4wFUK4bGHbWkbQ1uEEHnQZ/ArgRx/2i7cS4HjYAEPPwPc+7GdzAOwp7/lQZCSEcIxPLe23OyeI4/C15kl4gLudj+IIsNAQ/BxzWd6CnkfhSwJgNUfwKsDLmuBHKAYBMIZvNRDr2QEixEoNwAWWsgNEiP1EKcYHAfA40Yw72QEixLsExItBAIziYwJiF/dqzo7jLU7wM5b0PV7hGeYxmgSIjibwNQFxhOXKmXkctpiqfxfddHp4qNwF6xxdYAMF1vC7RfBri25zjXjSABHwuc/A/zLRqlHKTKTK8f/aulvLnkg1Zl6AntuRuqJ5ASrDqm5i5gfoAVlR/4DlB4gQY8qnPLVP1N6CIjrpRIqiWMDzqI+U8yElW50CVGBm8FS5yt/HTM/3Dj7gzR+ahWVZi384fwAAAABJRU5ErkJggg==",c9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGqSURBVFiFxdZPK0RRHMbx55DMNNiQYpZoypoSGrHwAijKG7AWCa/Dwp/kRRhsrKwloyhpSpqVFSmTBV+LuVM3zb1zzrhnPOvn3N+n2z3nHgFZ4BSoUD8V4AzIykeCh9vk3Md8A3xISlt0PyVljDFfSQLaJH1bdjsl9SY5vAZ4d+j3+QC8OfQHfABKDv1JH4AHh37eB+DOoT8BmKQBlw79dknJAowxj5LKlv1DY4zttrUPcGBxEl4DqcSHB4B8g+HvQM7L8ABggFIMYMXb8BBiPWL4rffhASADvEQgFlqF2I4APANdrQCkgMcIxJF3QICYj/kYN1qFiDoXvoDlVgDSQDEGsdlg7S7Vu+QrcA7sADNADrC71AAjRO8KgGOgu86am5g1tXwABWCwEWKc6ikYlTKwGHSXgDeL4eEUbN7EXAMEwK3j4FoqVr9WYEzSqaR+m75L2mxKxpgrSVOSikkDnEL1oNpv8nXXTbOQWeD+3wABohPYIn6r+gOEIBlgjfj7RFQqfwaEIAaYBvaAJ0vASaI33F+gIUkzkkYl5SQNS+qR1C2pQ9KFpNUfbN1D/zHyNosAAAAASUVORK5CYII=",d9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFaSURBVFiF7Zc9TsNAEIW/WA4UgLgBFIno6OAKNNDSQJuCKxBTUIDERXwEKIAqV0CigDScgJZ1ClN4kVbO/tremCJPGnnGXr331lrPrsGOMTAHyoYxlxxGJA4D58DIMcaGkeRobGCzhbgXh8tAdOgMnAE/QNahTiY5T30MHFG9tmGHBoaS89jHwErRu4FUc29Ru7bFwpD/H+wDr4CgeccLDQG8AHtI8VUJ1+OZyDO/BraAqaEWRJ7hNvAI7BjqMraBqRTNDHU5+HPRF3pvRGsDawOg/3zyCDq5Tku3GwJcAO8yv2spfKNwLiEFCmBD86yrE5GNRyTAzJMoBwaeceDJOUuACdXWWNQe1g8Pl/i34A8HV0G1E05S4As4MTi8VfI34Mk2HQW7wJVS38tYgmkRmvDtOU63prQIMXAIPASM90JII4qxCJ0GhJI3XYQqRzDGwGeAsM6I9e/6F9aW8eoXCmjvAAAAAElFTkSuQmCC",p9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF3SURBVFiF7ZcxTsMwGIU/R4UuRdwAhlZsbDAiBiQWWBESrB2YOABhYKASF+kRYKCdegUkhtKFE7CSdngMTaWqOI6T1JShb7H/+Nd7z5bz2wYHJLUkjVQeI0ktl0bkGgQugGZOjgvNlKO0gXoFcS+OPAPB8cuApHNJ35LiZYlIilPOs1wDwAHTZdtYloGUqw4c+hj4U6zcQM3ybbLQVsUko/9PIGlXUl9SUqHiFUUiqSdpx0jqAycrmn8vAo4CCtwBDSDOiI8JvNQNSc+StjJihf4Nb4HLtLXFGEkKbMKJlReitYG1gaw60A2g07UJ2U5DgCtJ72n/saL2/YzTNlgDxsCmZWxZNyIXTxIBA0+irvEEsOfJOYiANtBjuhLzWLw8XPseAMAwh2sMvALtmjHmEzi12ZP0MBe+AS+eM9sGbmaBMaYDdGyJWZswC1+eebY9ZUURA/vAU4F8LxQpRCE2Ya6BZK5fdhMmlIWmz/MPX2ELhpKcr+sfve5KLTdRIhkAAAAASUVORK5CYII=",f9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFFSURBVFiF7ZZtTsJAEIYfOYFGCN7BS5gYf+MJuAL4kSjqXeA2JELCV/y4gvEG/rD+YKYO2NKd2G5IYJJJ2+m7+77d7s4M7G3X7UCuNeAUaEbi/QBegG8NHALPQBLJJ8Cxkl8aEaPI5C2AL6AXScTUkPeEO335VLGIKVAXjlsTXwE9ViTCkt+svfsDVhFHwLhi8kwBCfBQkoiZIb/OweQO/q+IEPKNAhJ+T0cDmDvIX4ETGXtVgC2czCvizUEeJCAB7gNFLAQD0A2Zu4bPPoFzIVq3d+BCMC7zfH3b3C8Mxi57G98quP//ncSawFBcq2iXZYUrZRNu2nwqwlpHyL0nITOoOaDOMpNlYfrAmfggB2OzYHAiKisLqhclpJWHsutA1krkFqOqKmGRiOgNiYpIG5LYLZntilpEJldP+8Ktacv3trv2A7JzKIsuvNujAAAAAElFTkSuQmCC",m9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHiSURBVFiF7dY7aFRREAbgOZvEVwQLxUIw0SZgEy1EEKKVkCBYprX00cTSJoVNwE7sbBU7QRAtRCsNCAGxEAuFIIJIQBCV+I76Wdyz5rLJ3Wx0VxH3hwvnzsyZ/585cy43oosu/nek8gtGI2Kww5zPUkq3llhx0p/D8TpvraThTkTMdLj6yBzTy3pQwzG860DVH3EaPVXkkxjO6yFMt5F8GkM59zAmlxNwFQs4izVIim7M/wbxB7lq9Ob1J1ytElDHQ+zN9h24/QvkjVXfL/lWFMBiN9Za7MbbFojfKyqtoS+vPzfEtCSgjkfYl2O24VoT8psYyLF78KAiblUC4CvOY0OOHcerkv+NokMJ63AGX5rk+ymgd9krsRQ9EbE/IrZHxJOU0hXci4gL2X8ipfQiixuMiMMR0ddi7hU7MI9TikmuYQLn0F/a259tEzmuJ++pukEtH8F1i2c6jJmSbxZj+Zkt2WewO+8ZyDlWLWAOR7N9veJMGye5GRYUM7Mx5ziC560I+I5L2JxtB/F4FcSNeIqxnGtTFvWtSsAURvJ6Cy5mQe3AZWzNuUcw1WwYx/GyTcRlvFYMZq2KeKfiQ9Jp3MWuOm9ZzaGIGK1sTftwoMzzN37J5iLiRkpJh3m66OIfwQ8h6wGr+VhnJwAAAABJRU5ErkJggg==",h9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABPdJREFUSIm1lW2MHWUVx3/neZnn3rs72+3yUqCkNNHFpQapFV+yRWuiYCpoQo1iIJo2GqUETarhi4mJMQUjmpqo+MX4kn4DBWPQWKNCQ1gCvqwoLdIqgdoWadzW3e3eOzN3nhc/zN27NyH0k55kMud5ZuZ//v//OZMH/s8ho4v37fn7FhT7bPKzJsaWSQETIyYFTIrNFQd5bNY2BXSM2BRKneJcFsOBLz36oRdeU+Dm3c9/XBN+bGJ0DVgYggxBR/deP69sjJ/c++vbHhoW+Ogd81u0pHmTBuAjLMccZCphUsKkgB6yD0gdSL3qNep0ipUOcevth/e8YAAmYr1PJ+9WWeRtYedtm3nruy+jk9sLelwuVbz8+Esc/dGfiefL1eLOEPcBn20K1MWsHsjMxxSfufcdrL+sw9HHT7Hw4iKpbpgrEjo2d5USVsPU9BRX33I1V27dwDN3PUJaLhuVKW4HMAB5XUyuevnB269l/YYOD99zmLN/W3hdv3UKdCYd4fg6Fn72F972wC62fPp6Ttz/28HzuB5AAUz4kom6ZJ2vuGbHRo4fepHiyCtM+JK8LsjrktyXXDwOl0wacl+S+4rrPj/L2797K26ly8Kjz3HpTTOMhz7jvmLcVwwVTNQlOgXGckvWsawcO0Nel0PGl89exczd22lfua7x/dQiJ7/1GEsPz8Ppc5iXXiUeOYXetZV8XBGXeqAiQwV5XTQKUg2AK8oBy5Kr3rmRrfftJCz2OLH/EP/8yi+IZ1eY/satdDI4f+AQrbKHqssG0AWUqVG6XlOwzpfoGGn7ZjJa0ZP7Ch0jb/zcDRRHX+Hkpw6ivUfHyJlfznP593dzyRdu5PSTfwWJiGo+VraCrEBUWFMwVlcD3/pNgVAzXlesv8jhNk3RfeRPtOoCS4U2fYSC7s+fwW66CLuxhc4qxDSMdVagXYFxxZqC3FfoFGl5PSjg8bHCkjW/e6wQ00ckgYqICohumqhUF1yvYQ6orERcD9EjCla73oqDl7RHmT7h7AL1yQXyj1yP6XiUK9Cuh+6UjO+axZ98FXpn0K6HWlXQ6mHaK5jWypoCoypEEmIaxiiPshWiAkvf/gkXf/1OLn1gL71fPQESGbt5B/ZNm1nc/01Mq4vogM6aJptWl9RfQRm/VkDpGtEBpVTDohPRroeoSP3sHzn35QNM3HUHk/fsASCcOs3y1/YTn/sDpu0RFdCdxhJtl6G9MrTINLIGXa+6pF6Bu+YKqseaPVGBcORpFu+eQ2+YQlJFWv43ojymHRDlER2w028gFSvo8C+k3Uf0iALjeiQVEBUpDz9Fe+cO+k/+Bv+P51EqILphKd2lBnAEWCmPnr4Wc8MtxKcfwrQXwRrE6BGLXLEo2l8hylM8+EOyt0wzed9X6c/9jnDiGBIqRMXBvEdEYjNNVqE2vRm17cOksy8Tn/gOMplDZlEu+8+agvb5p0SHLaI8Epfo3bsXt2s39l03kr3nA1wwuueI8w8Sf/8DJDfgpsBZcGYOBgfO8u73zpDCs6K9k1FLtEc6GWIF0YBViDFgDGQWMc3EkVnE2QY4y8DZUhl3nbz/4PHhkdm7c9vHRNcHRXkn2jdNMgaxegBowFkks+Cykdyu5c2zUrLsE7Ltez8dKliN6oubZ8Rl+8SY7ZKZNnYVbMB4JCfLRlhbxNkCl82R7AGZuf/YhX39H8Z/AexvbkLYfn4vAAAAAElFTkSuQmCC",g9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGBSURBVEiJ1ZU/SIJBGMZ/d+pQEEZ/FApqsSwqoq2EGgta+zfWKkHOgUPg2FLUUDRkay5BtBYURRDRn0EUiUANrKWgxTC/ayiEIP3u68uhd7o77nmee9737j0BSgQmo0EEC0AHILEXBpASgpXT3blNMTQdnRdKrdsk/TGEICiFUgvVIAdQipAEfNUSADqdWMi5FILBgVbaW904pOQ++8LpZaYixKlL7nI5WA2P0t/tLa2dXz+YCeiffmKs6xs5QKFQNMVpO+jze0rjxeVDruI58m/vfyfQWF8DQLFocHyR1oVZf1TK4n5TB0uhEXp8zTQ11ALgkJLY2gQAt8knIusn9gTaWty0eOtKcyEoze/Sz2Zw8xTl8+ULmc29mgqIwNS2Vlo3IuP0+T0YSjE8s6MDAX7TOS1W2W5r/ocCSlnLUdUdaLeK/cMUN4nHite2nICBhpODo5Ql4q8wJPArpF6opAS1Wj0BueLIxPcu23qvc3z+zQ2AsMlqgEqADJ/FZrc+AE1dakTWnUHWAAAAAElFTkSuQmCC",v9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAABJAAAASQHjiblMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAblJREFUSIm11s2LTnEUB/DPo2TkvZmFEUpJhGgoCwsSSoosFEsLkpSVwj9gvJRSdjZKksXUjFlo2ChZSiMbrMizkpcpM16e8Vj8zlPjunfuPNzn1Fmc7/l1vvec3/mdc6EX9zGOZkU6jqGIbbjCwFkdqgXbXJ2RiVowteQnBjPYIuwtCfRLKsna0D8km9YpdGF36BzlZTyLdfiY4/sL+Io1uBv2FemyPhQEv4kevC7w54JP0Y23mMQuHMo59wAL4nxRdoWOC9gT9X2HJbgzxf8yB2uL4Ae24nrYt7E4sqpjJS6XBJ+WoIlRqYtGwz4SWW3BiRkELyVo4hL68F3qkuXYJrV0JQST2IHzYT/EfLyqiqCJN1iIJ2GfwXY0qiIYlh7cKnzBN2zExSoInsXXD2A/jgX+IvDn/0PwHitwLey69ADvhd2P9Zj4F4IxbMbxDD4gjYa61AA7ca5dggYOYJ/8djwqTdjWK+/G43YITmMDPhf4P0XpboR9S2qAsZkQXMUyaSRMdz8jmIfDoV04mT2XXTgNaeFswmrlMiK1bUtqOIjZU4GOrsxZeNSh4KSxolfap1X/tgxi6W91CZExFRrIjQAAAABJRU5ErkJggg==",y9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHYSURBVEiJtdbNi05hGAbw61Uy8h0LI5SSCBHKQiIxpSmysJilhZKUlcI/4LOUslA2SpLF1HwsNGMjspSabLAis/I5ZQYz42dxDt7e3pl3hnfuehbXdT/nvs65u577OUErejCseTGMbrRW0JukPTMTPRUMJ5k7QwIjFagiRpN0JanmFiVpa1DoZ5LuJOvL9Tfq9O8kWrC/XHPQ26DnZ7ABH2sT9QS+Yh3ulfiKwgjvJyh+C8vwql6yngA8xVK8wTj24UidfQ+woNxfNyYSgPM4gJ94iyW4W5V/UYeblsAP7MD1Et/BYsVXDWI1Lk9WHGpdVBsDSXYneZxkc5KOJB+SfEyyPcnNhkZt9Aa4hG34rnDJSuzE6BSenbRFv2Mce3CuxP2Yj5fNEoDXWIgnJT6NXRhrlkCv4sCtwRd8w2ZcaIbAM8Xbd6Idx0p+oOSf/4/AO6zCtRIPKg7g/RJfxEaM/IvAELbieA3fqRgNgwoD7MXZ6QqM4RAOqm/HDrT5e8qX4tF0BE5hEz5PkP+kaN2NEt9WGGBoKgJXsUIxEiaLPszD0XK14ETtptpRMVZeOFuSrG04BpK+JF+qcCXJ4SSz/xBm+MqcleThDBVPkv4obqtuzf9t6cLyX29vQy1Hn5CtAAAAAElFTkSuQmCC",x9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHzSURBVEiJ1ZW/axNhGMc/z51pjTWWSKpGA4mYWoeCDhWktuggCCou/gU6WSx1KBiEQsWCZHCooIO4iVsHEXo62IKKP0DsVEuM548UlB6xEmlaa7S510EaTe4GL2cGv9O933v4fnjvnud9BZRwzuhDZABoBzT8yQZMhFHSR64LKeMMcNVnqLuEPg0YaEg4gOKsBiQbBoCdGi7fvHNziMHe7fQkwn4B2ppap6Othef93QQDOkrB8ZsvGM/k6yfUGoeSEYIBHQAROLZrU93hroDHuQIrtqpa+5GQMlSt2ZMIc6JzC09nvzA2PecL4PgHAN3xMKWyze5oiHvZPNta13KyKwbAS2uRh+8+c3pfnPbIOoqlMuOZPLdnrL8HXDrcga4JAGPTFntjraQO7AAgV1hmfZNOpKWpUn+qK8bFSZPh+6Yjy/OxkAgHq8JXdf5g0tWv69y5MGHSNjJB/52ZihfQhf1x59x4BswVS4xMvmF+6TvXns3yceFb5V001OwfkCt8xVa/G88qlirPq/PjC6AcTf1HmLh4XgFe9f8DXAdt0MgQ3dDM8g+b1/NLFEsrpB+8RQSmPixU1V5+9J49W0MA3M1+cmQJKaNM43Zia4Bzvv+dshrIlYbFixrVeXJril7T4tfdvBFw6WZPsoFXiBoiffTGT+4gi/8tkVPOAAAAAElFTkSuQmCC",M1=()=>{const{darkMode:e}=re.useContext(Jl);return m.jsxs("div",{className:`footerParent ${e?"footerDarkBg":""}`,children:[m.jsxs("div",{className:"topContainer",children:[m.jsxs("div",{className:"footerCols leftCol",children:[m.jsx("h2",{className:e?"white":"black",children:"ABOUT CORE TECH"}),m.jsx("p",{className:e?"grayClr":"",children:"CoreTech is a leading provider of technology solutions for businesses. With a focus on delivering the highest quality products and services, we help businesses harness the power of technology to achieve their goals. Our team of experts is dedicated to driving innovation and delivering results that exceed our clients' expectations."})]}),m.jsxs("div",{className:"footerCols middleCol",children:[m.jsxs("div",{className:"footerServicesTop",children:[m.jsx("h2",{className:e?"white":"black",children:"SERVICES"}),m.jsxs("p",{children:[e?m.jsx("img",{src:Li,alt:"arrow"}):m.jsx("img",{src:Ni,alt:"arrow"}),m.jsx("span",{className:e?"grayClr":"",children:"Web Development"})]}),m.jsxs("p",{children:[e?m.jsx("img",{src:Li,alt:"arrow"}):m.jsx("img",{src:Ni,alt:"arrow"}),m.jsx("span",{className:e?"grayClr":"",children:"App Development"})]}),m.jsxs("p",{children:[e?m.jsx("img",{src:Li,alt:"arrow"}):m.jsx("img",{src:Ni,alt:"arrow"}),m.jsx("span",{className:e?"grayClr":"",children:"Business Solutions"})]}),m.jsxs("p",{children:[e?m.jsx("img",{src:Li,alt:"arrow"}):m.jsx("img",{src:Ni,alt:"arrow"}),m.jsx("span",{className:e?"grayClr":"",children:"Block Chain Technology"})]})]}),m.jsxs("div",{className:"footerQuickLinks",children:[m.jsx("h2",{className:e?"white":"black",children:"QUICK LINKS"}),m.jsxs("p",{children:[e?m.jsx("img",{src:Li,alt:"arrow"}):m.jsx("img",{src:Ni,alt:"arrow"}),m.jsx("span",{className:e?"grayClr":"",children:"Privacy Policy"})]}),m.jsxs("p",{children:[e?m.jsx("img",{src:Li,alt:"arrow"}):m.jsx("img",{src:Ni,alt:"arrow"}),m.jsx("span",{className:e?"grayClr":"",children:"Terms & Conditions"})]})]})]}),m.jsxs("div",{className:"footerCols rightCol",children:[m.jsxs("div",{className:"logoAndText",children:[e?m.jsx("img",{src:A8,alt:"logo"}):m.jsx("img",{src:N8,alt:"logo"}),m.jsx("span",{className:e?"grayClrTagline":"",children:"Driving Innovation, Delivering Results"})]}),m.jsxs("div",{className:"phoneNo",children:[e?m.jsx("img",{src:c9,alt:"phone"}):m.jsx("img",{src:u9,alt:"phone"}),m.jsx("span",{className:e?"grayClr":"",children:"+91 1234567890"})]}),m.jsxs("div",{className:"fax",children:[e?m.jsx("img",{src:p9,alt:"fax"}):m.jsx("img",{src:d9,alt:"fax"}),m.jsx("span",{className:e?"grayClr":"",children:"+91 1234567890"})]}),m.jsxs("div",{className:"email",children:[e?m.jsx("img",{src:m9,alt:"fax"}):m.jsx("img",{src:f9,alt:"fax"}),m.jsx("span",{className:e?"grayClr":"",children:"info@coretech.com"})]})]})]}),m.jsxs("div",{className:"copyrightSocialIconContainer",children:[m.jsx("div",{className:`copyright ${e?"copyrightGray":""}`,children:"Copyright @ 2014 Core Tech Services. All Rights Reserved"}),m.jsxs("div",{className:"socialIconContainer",children:[m.jsx("div",{className:"socialIcon",children:m.jsx(Hi,{className:"socialLogo",target:"_blank",to:"https://www.facebook.com/",children:m.jsx("img",{src:g9,alt:"fb"})})}),m.jsx("div",{className:"socialIcon",children:m.jsx(Hi,{className:"socialLogo",target:"_blank",to:"https://www.linkedin.com/",children:m.jsx("img",{src:x9,alt:"linkedin"})})}),m.jsx("div",{className:"socialIcon",children:m.jsx(Hi,{className:"socialLogo",target:"_blank",to:"https://twitter.com/",children:e?m.jsx("img",{src:y9,alt:"twitter"}):m.jsx("img",{src:v9,alt:"twitter"})})}),m.jsx("div",{className:"socialIcon",children:m.jsx(Hi,{className:"socialLogo",target:"_blank",to:"https://www.instagram.com/",children:m.jsx("img",{src:h9,alt:"instagram"})})})]})]})]})};var L8={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qm=_l.createContext&&_l.createContext(L8),w9=["attr","size","title"];function C9(e,n){if(e==null)return{};var l=b9(e,n),o,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)o=c[s],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}function b9(e,n){if(e==null)return{};var l={},o=Object.keys(e),s,c;for(c=0;c<o.length;c++)s=o[c],!(n.indexOf(s)>=0)&&(l[s]=e[s]);return l}function c1(){return c1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},c1.apply(this,arguments)}function eh(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),l.push.apply(l,o)}return l}function d1(e){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?eh(Object(l),!0).forEach(function(o){E9(e,o,l[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):eh(Object(l)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(l,o))})}return e}function E9(e,n,l){return n=k9(n),n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function k9(e){var n=S9(e,"string");return typeof n=="symbol"?n:String(n)}function S9(e,n){if(typeof e!="object"||e===null)return e;var l=e[Symbol.toPrimitive];if(l!==void 0){var o=l.call(e,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function j8(e){return e&&e.map((n,l)=>_l.createElement(n.tag,d1({key:l},n.attr),j8(n.child)))}function A9(e){return n=>_l.createElement(N9,c1({attr:d1({},e.attr)},n),j8(e.child))}function N9(e){var n=l=>{var{attr:o,size:s,title:c}=e,a=C9(e,w9),f=s||l.size||"1em",h;return l.className&&(h=l.className),e.className&&(h=(h?h+" ":"")+e.className),_l.createElement("svg",c1({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,o,a,{className:h,style:d1(d1({color:e.color||l.color},l.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&_l.createElement("title",null,c),e.children)};return qm!==void 0?_l.createElement(qm.Consumer,null,l=>n(l)):n(L8)}function L9(e){return A9({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"},child:[]}]})(e)}const P8=()=>{const{darkMode:e}=re.useContext(Jl),[n,l]=re.useState(!1),o=()=>{l(window.scrollY>100)},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return re.useEffect(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[]),m.jsx("div",{className:`scroll-up-button ${n?"visible":""} ${e?"":"scroll-up-button-dark"}`,onClick:s,children:m.jsx(L9,{size:25})})},j9=()=>{const{darkMode:e}=re.useContext(Jl),[n,l]=re.useState(null),o=[{id:1,name:"John Smith",company:"Awesome IT, Company",testimonial:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:_c},{id:2,name:"Alex ",company:"Awesome IT, Company",testimonial:"It looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Rd},{id:3,name:"Vipin",company:"Tech Mahindra IT, Company",testimonial:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:_d},{id:4,name:"Ellyse Perry ",company:"Sonata Software IT, Company",testimonial:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Od},{id:5,name:"Peter",company:"Wipro Limited IT, Company",testimonial:"It is a long established fact that a reader will be distract The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Fd},{id:6,name:"Allena Smith",company:"HCL Technologies IT, Company",testimonial:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:s9},{id:7,name:"Sundar",company:"Infosys IT, Company",testimonial:"that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Ud}],s=a=>{l(a)},c=()=>{l(n)};return m.jsxs("div",{className:"homeContainer",children:[m.jsx(T1,{}),m.jsx("section",{id:"landingPageContent",children:m.jsxs("div",{className:"landingPageContent",children:[m.jsxs("div",{className:"landingPageText",children:[m.jsxs("h1",{className:e?"white":"black",children:["Empower Your Business ",m.jsx("br",{})," With Core Tech"]}),m.jsx("p",{children:"Driving Innovation, Delivering Result "}),m.jsx("button",{children:m.jsx("span",{children:"Learn More"})})]}),m.jsx("div",{children:m.jsx("img",{src:Kg,alt:"landingImg"})})]})}),m.jsx("section",{id:"whoAreWeSection",children:m.jsxs("div",{className:"whoAreWeSection",children:[m.jsx("div",{className:"whoAreWeImg",children:m.jsx("img",{src:Xg,alt:""})}),m.jsxs("div",{className:"whoAreWeText",children:[m.jsx("h2",{className:e?"white":"black",children:"WHO WE ARE"}),m.jsx("h1",{children:"CORE TECH COMPANY"}),m.jsx("p",{className:e?"white poppinsLight":"black",children:"CoreTech is a leading provider of technology solutions for businesses. With a focus on delivering the highest quality products and services, we help businesses harness the power of technology to achieve their goals. Our team of experts is dedicated to driving innovation and delivering results that exceed our clients' expectations."}),m.jsx("button",{className:e?"white bgTransparent poppinsLight":"black",children:"Read More"})]})]})}),m.jsx("section",{id:"servicesSection",children:m.jsxs("div",{className:"servicesContainer",children:[m.jsxs("div",{className:"servicesHeading",children:[m.jsx("h1",{children:"CORE TECH SERVICES"}),m.jsx("p",{className:`mb-0 ${e?"white poppinsLight":"black"}`,children:"Technologies Design And Develop Mobile Apps, Web Apps, Blockchain Solutions."})]}),m.jsxs("ul",{className:"honeycomb",children:[m.jsx("li",{className:`honeycomb-cell ${e?"honeycomb-cell-dark":""}`,children:m.jsxs("div",{className:"honeycomb-cell_title",children:[m.jsxs("svg",{className:"icon",style:{top:"-46px",left:"110px"},width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M4.8 2.85233C3.91788 2.85233 3.2 2.13346 3.2 1.25012C3.2 0.95477 2.96163 0.716064 2.66669 0.716064C2.37175 0.716064 2.13331 0.95477 2.13331 1.25012C2.13331 2.13346 1.41544 2.85233 0.533312 2.85233C0.238375 2.85233 0 3.09104 0 3.38639C0 3.68173 0.238438 3.9205 0.533312 3.9205C1.41544 3.9205 2.13331 4.63937 2.13331 5.52272C2.13331 5.81807 2.37169 6.05677 2.66663 6.05677C2.96156 6.05677 3.19994 5.81807 3.19994 5.52272C3.19994 4.63937 3.91781 3.9205 4.79994 3.9205C5.09488 3.9205 5.33325 3.6818 5.33325 3.38645C5.33325 3.0911 5.09494 2.85233 4.8 2.85233ZM2.66669 3.92213C2.51469 3.71916 2.33444 3.53866 2.13175 3.38645C2.33444 3.23424 2.51469 3.05374 2.66669 2.85077C2.81869 3.05374 2.99894 3.23424 3.20162 3.38645C2.99894 3.53866 2.81869 3.71916 2.66669 3.92213Z"}),m.jsx("path",{d:"M29.8659 9.26122H29.3325V8.72717C29.3325 8.43182 29.0942 8.19312 28.7992 8.19312C28.5043 8.19312 28.2659 8.43182 28.2659 8.72717V9.26122H27.7325C27.4376 9.26122 27.1992 9.49992 27.1992 9.79527C27.1992 10.0906 27.4376 10.3293 27.7325 10.3293H28.2658V10.8634C28.2658 11.1587 28.5042 11.3974 28.7992 11.3974C29.0941 11.3974 29.3325 11.1587 29.3325 10.8634V10.3293H29.8658C30.1607 10.3293 30.3991 10.0906 30.3991 9.79527C30.3991 9.49992 30.1608 9.26122 29.8659 9.26122Z"}),m.jsx("path",{d:"M3.73253 24.7485C4.02707 24.7485 4.26584 24.5096 4.26584 24.2149C4.26584 23.9202 4.02707 23.6813 3.73253 23.6813C3.43799 23.6813 3.19922 23.9202 3.19922 24.2149C3.19922 24.5096 3.43799 24.7485 3.73253 24.7485Z"}),m.jsx("path",{d:"M1.06652 15.1351C1.36106 15.1351 1.59983 14.8962 1.59983 14.6015C1.59983 14.3068 1.36106 14.0679 1.06652 14.0679C0.771975 14.0679 0.533203 14.3068 0.533203 14.6015C0.533203 14.8962 0.771975 15.1351 1.06652 15.1351Z"}),m.jsx("path",{d:"M27.2013 20.4758C27.4958 20.4758 27.7346 20.2369 27.7346 19.9422C27.7346 19.6475 27.4958 19.4086 27.2013 19.4086C26.9067 19.4086 26.668 19.6475 26.668 19.9422C26.668 20.2369 26.9067 20.4758 27.2013 20.4758Z"}),m.jsx("path",{d:"M30.9337 31.6914C31.2282 31.6914 31.467 31.4525 31.467 31.1578C31.467 30.8631 31.2282 30.6241 30.9337 30.6241C30.6392 30.6241 30.4004 30.8631 30.4004 31.1578C30.4004 31.4525 30.6392 31.6914 30.9337 31.6914Z"}),m.jsx("path",{d:"M17.067 30.09C17.067 29.501 16.5886 29.0219 16.0003 29.0219C15.412 29.0219 14.9336 29.5009 14.9336 30.09C14.9336 30.6791 15.412 31.1582 16.0003 31.1582C16.5885 31.1582 17.067 30.6791 17.067 30.09Z"}),m.jsx("path",{d:"M22.9544 0.716064H9.04616C7.88134 0.716064 6.93359 1.66513 6.93359 2.83156V3.9205H25.0669V2.83149C25.067 1.66513 24.1192 0.716064 22.9544 0.716064ZM13.867 2.85233H13.3336C13.0392 2.85233 12.8003 2.61307 12.8003 2.31828C12.8003 2.0235 13.0392 1.78423 13.3336 1.78423H13.8669C14.1613 1.78423 14.4002 2.0235 14.4002 2.31828C14.4003 2.61307 14.1613 2.85233 13.867 2.85233ZM18.1336 2.85233H15.4669C15.1725 2.85233 14.9336 2.61307 14.9336 2.31828C14.9336 2.0235 15.1725 1.78423 15.4669 1.78423H18.1336C18.428 1.78423 18.6669 2.0235 18.6669 2.31828C18.667 2.61307 18.428 2.85233 18.1336 2.85233Z"}),m.jsx("path",{d:"M18.1336 30.09C18.1336 31.2682 17.1768 32.2263 16.0003 32.2263C14.8238 32.2263 13.867 31.2681 13.867 30.09C13.867 29.4491 14.156 28.8798 14.604 28.4878H6.93359V30.6449C6.93359 31.8113 7.88134 32.7603 9.04616 32.7603H22.9544C24.1192 32.7603 25.0669 31.8113 25.0669 30.6449V28.4878H17.3965C17.8445 28.8798 18.1336 29.4491 18.1336 30.09Z"}),m.jsx("path",{d:"M16.5335 12.4656H15.4668V13.5329H16.5335V12.4656Z"}),m.jsx("path",{d:"M12.2659 12.4656H11.1992V13.5329H12.2659V12.4656Z"}),m.jsx("path",{d:"M12.2659 8.19312H11.1992V9.26043H12.2659V8.19312Z"}),m.jsx("path",{d:"M12.2659 23.1471H11.1992V24.2144H12.2659V23.1471Z"}),m.jsx("path",{d:"M16.5335 8.19312H15.4668V9.26043H16.5335V8.19312Z"}),m.jsx("path",{d:"M20.7991 8.19312H19.7324V9.26043H20.7991V8.19312Z"}),m.jsx("path",{d:"M6.9337 5.52271C6.63933 5.52271 6.40039 5.76197 6.40039 6.05676V6.59081C6.40039 6.88559 6.63933 7.12486 6.9337 7.12486V7.65891C6.63933 7.65891 6.40039 7.89818 6.40039 8.19297V8.72702C6.40039 9.0218 6.63933 9.26107 6.9337 9.26107V9.79512C6.63933 9.79512 6.40039 10.0344 6.40039 10.3292V10.8632C6.40039 11.158 6.63933 11.3973 6.9337 11.3973V27.4195H25.067V4.9884H6.9337V5.52271ZM17.6004 24.7493C17.6004 25.0447 17.362 25.2834 17.0671 25.2834H14.9337C14.6388 25.2834 14.4004 25.0447 14.4004 24.7493V22.6131C14.4004 22.3177 14.6388 22.079 14.9337 22.079H17.067C17.362 22.079 17.6003 22.3177 17.6003 22.6131V24.7493H17.6004ZM21.8671 24.7493C21.8671 25.0447 21.6287 25.2834 21.3338 25.2834H19.2005C18.9055 25.2834 18.6671 25.0447 18.6671 24.7493V22.6131C18.6671 22.3177 18.9055 22.079 19.2005 22.079H21.3337C21.6286 22.079 21.867 22.3177 21.867 22.6131V24.7493H21.8671ZM18.6671 7.65898C18.6671 7.36363 18.9055 7.12492 19.2004 7.12492H21.3337C21.6286 7.12492 21.867 7.36363 21.867 7.65898V9.79525C21.867 10.0906 21.6286 10.3293 21.3337 10.3293H19.2004C18.9055 10.3293 18.6671 10.0906 18.6671 9.79525V7.65898ZM14.4004 7.65898C14.4004 7.36363 14.6388 7.12492 14.9337 7.12492H17.067C17.362 7.12492 17.6003 7.36363 17.6003 7.65898V9.79525C17.6003 10.0906 17.362 10.3293 17.067 10.3293H14.9337C14.6388 10.3293 14.4004 10.0906 14.4004 9.79525V7.65898ZM14.4004 11.9316C14.4004 11.6362 14.6388 11.3975 14.9337 11.3975H17.067C17.362 11.3975 17.6003 11.6362 17.6003 11.9316V14.0679C17.6003 14.3632 17.362 14.6019 17.067 14.6019H14.9337C14.6388 14.6019 14.4004 14.3632 14.4004 14.0679V11.9316ZM10.1337 7.65898C10.1337 7.36363 10.3721 7.12492 10.667 7.12492H12.8003C13.0953 7.12492 13.3336 7.36363 13.3336 7.65898V9.79525C13.3336 10.0906 13.0953 10.3293 12.8003 10.3293H10.667C10.3721 10.3293 10.1337 10.0906 10.1337 9.79525V7.65898ZM10.1337 11.9316C10.1337 11.6362 10.3721 11.3975 10.667 11.3975H12.8003C13.0953 11.3975 13.3336 11.6362 13.3336 11.9316V14.0679C13.3336 14.3632 13.0953 14.6019 12.8003 14.6019H10.667C10.3721 14.6019 10.1337 14.3632 10.1337 14.0679V11.9316ZM10.6671 16.2042H21.8671C22.162 16.2042 22.4004 16.4429 22.4004 16.7382C22.4004 17.0336 22.162 17.2723 21.8671 17.2723H10.6671C10.3721 17.2723 10.1338 17.0336 10.1338 16.7382C10.1338 16.4429 10.3721 16.2042 10.6671 16.2042ZM10.6671 19.4086H21.8671C22.162 19.4086 22.4004 19.6473 22.4004 19.9427C22.4004 20.238 22.162 20.4767 21.8671 20.4767H10.6671C10.3721 20.4767 10.1338 20.238 10.1338 19.9427C10.1338 19.6473 10.3721 19.4086 10.6671 19.4086ZM10.1337 22.6131C10.1337 22.3177 10.3721 22.079 10.667 22.079H12.8003C13.0953 22.079 13.3336 22.3177 13.3336 22.6131V24.7493C13.3336 25.0447 13.0953 25.2834 12.8003 25.2834H10.667C10.3721 25.2834 10.1337 25.0447 10.1337 24.7493V22.6131Z"}),m.jsx("path",{d:"M16.5335 23.1471H15.4668V24.2144H16.5335V23.1471Z"}),m.jsx("path",{d:"M20.7991 23.1471H19.7324V24.2144H20.7991V23.1471Z"})]}),m.jsxs("h2",{className:e?"white poppinsLight":"",children:["App ",m.jsx("br",{})," Development"]}),m.jsx("p",{className:e?"greyClr":"",children:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."})]})}),m.jsx("li",{className:`honeycomb-cell ${e?"honeycomb-cell-dark":""}`,children:m.jsxs("div",{className:"honeycomb-cell_title",children:[m.jsxs("svg",{className:"icon",style:{top:"-46px",left:"110px"},width:"38",height:"32",viewBox:"0 0 38 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M21.3703 4.84619H11.9375V7.20765H21.3703V4.84619Z"}),m.jsx("path",{d:"M24.6144 8.31458H15.1816V10.676H24.6144V8.31458Z"}),m.jsx("path",{d:"M21.3703 11.783H11.9375V14.1444H21.3703V11.783Z"}),m.jsx("path",{d:"M24.6144 15.2513H15.1816V17.6133H24.6144V15.2513Z"}),m.jsx("path",{d:"M21.3703 18.7192H11.9375V21.0807H21.3703V18.7192Z"}),m.jsx("path",{d:"M1.76866 25.3158H15.9178V29.3988H10.5382V31.7603H27.1929V29.3988H21.8133V25.3158H35.9625C36.9353 25.3158 37.7311 24.5188 37.7311 23.5447V2.4884C37.7311 1.51428 36.9353 0.717285 35.9625 0.717285H1.76866C0.795895 0.717285 0 1.51428 0 2.4884V23.5448C0 24.5188 0.795895 25.3158 1.76866 25.3158ZM2.35819 3.07875H35.3729V22.9543H2.35819V3.07875Z"})]}),m.jsxs("h2",{className:e?"white poppinsLight":"",children:["WEB ",m.jsx("br",{})," Development"]}),m.jsx("p",{className:e?"greyClr":"",children:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."})]})}),m.jsx("li",{className:`honeycomb-cell ${e?"honeycomb-cell-dark":""}`,children:m.jsxs("div",{className:"honeycomb-cell_title",children:[m.jsxs("svg",{className:"icon",style:{top:"-46px",left:"110px"},width:"31",height:"30",viewBox:"0 0 31 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.289062 24.6938V5.7839C0.289062 2.98659 2.47383 0.71875 5.16868 0.71875H25.9884C28.6832 0.71875 30.868 2.98659 30.868 5.7839V24.6938C30.868 27.4911 28.6832 29.759 25.9884 29.759H5.16868C3.87395 29.759 2.63388 29.2254 1.71781 28.2759C0.803049 27.325 0.289062 26.0378 0.289062 24.6938ZM2.24091 10.8491V24.6938C2.24091 25.5002 2.5493 26.2728 3.09842 26.8428C3.64754 27.4128 4.39184 27.7329 5.16868 27.7329H25.9884C27.6058 27.7329 28.9162 26.3727 28.9162 24.6938V10.8491H2.24091ZM14.2773 4.43319C13.559 4.43319 12.9761 5.03831 12.9761 5.7839C12.9761 6.52949 13.559 7.13461 14.2773 7.13461C14.9956 7.13461 15.5785 6.52949 15.5785 5.7839C15.5785 5.03831 14.9956 4.43319 14.2773 4.43319ZM10.3736 4.43319C9.65532 4.43319 9.07237 5.03831 9.07237 5.7839C9.07237 6.52949 9.65532 7.13461 10.3736 7.13461C11.0919 7.13461 11.6748 6.52949 11.6748 5.7839C11.6748 5.03831 11.0919 4.43319 10.3736 4.43319ZM6.46991 4.43319C5.75163 4.43319 5.16868 5.03831 5.16868 5.7839C5.16868 6.52949 5.75163 7.13461 6.46991 7.13461C7.18819 7.13461 7.77114 6.52949 7.77114 5.7839C7.77114 5.03831 7.18819 4.43319 6.46991 4.43319Z"}),m.jsx("path",{d:"M7.43063 13.4286V16.247C7.43063 16.5289 7.49997 16.7458 7.63865 16.898C7.77734 17.0501 7.98089 17.1261 8.24931 17.1261C8.51773 17.1261 8.72352 17.0501 8.86668 16.898C9.00984 16.7458 9.08142 16.5289 9.08142 16.247V13.4286H10.2289V16.2403C10.2289 16.6608 10.1394 17.0165 9.9605 17.3073C9.78155 17.5981 9.53997 17.8173 9.23576 17.9649C8.93602 18.1126 8.6005 18.1864 8.22918 18.1864C7.85786 18.1864 7.52457 18.1148 7.22931 17.9716C6.93852 17.824 6.70812 17.6048 6.53812 17.314C6.36812 17.0187 6.28312 16.6608 6.28312 16.2403V13.4286H7.43063ZM12.3835 13.4286V18.1394H11.236V13.4286H12.3835ZM15.9731 11.7644L14.1747 19.3943H13.0675L14.8659 11.7644H15.9731ZM17.7858 13.4286V16.247C17.7858 16.5289 17.8552 16.7458 17.9939 16.898C18.1325 17.0501 18.3361 17.1261 18.6045 17.1261C18.8729 17.1261 19.0787 17.0501 19.2219 16.898C19.365 16.7458 19.4366 16.5289 19.4366 16.247V13.4286H20.5841V16.2403C20.5841 16.6608 20.4947 17.0165 20.3157 17.3073C20.1368 17.5981 19.8952 17.8173 19.591 17.9649C19.2912 18.1126 18.9557 18.1864 18.5844 18.1864C18.2131 18.1864 17.8798 18.1148 17.5845 17.9716C17.2937 17.824 17.0633 17.6048 16.8933 17.314C16.7233 17.0187 16.6383 16.6608 16.6383 16.2403V13.4286H17.7858ZM24.4768 18.1394L23.5172 16.6966L22.6716 18.1394H21.3698L22.8797 15.7437L21.3362 13.4286H22.6716L23.6178 14.8512L24.4499 13.4286H25.7518L24.2553 15.8041L25.8122 18.1394H24.4768Z"})]}),m.jsxs("h2",{className:e?"white poppinsLight":"",children:["UI/UX",m.jsx("br",{})," DESIGN"]}),m.jsx("p",{className:e?"greyClr":"",children:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."})]})}),m.jsx("li",{className:`honeycomb-cell ${e?"honeycomb-cell-dark":""}`,children:m.jsxs("div",{className:"honeycomb-cell_title",children:[m.jsxs("svg",{className:"icon",style:{top:"-52px",left:"104px"},width:"47",height:"47",viewBox:"0 0 47 47",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("g",{clipPath:"url(#clip0_265_567)",children:m.jsx("path",{d:"M39.6572 21.3458C39.5743 20.112 39.2355 18.909 38.6623 17.8132C38.0891 16.7175 37.2942 15.753 36.328 14.9813C35.325 14.1203 34.155 13.4759 32.8913 13.0883C31.6276 12.7008 30.2974 12.5785 28.9843 12.7292C27.9635 10.9967 26.5219 9.54993 24.7932 8.52293C23.0644 7.49593 21.1043 6.92195 19.0947 6.85417C17.4448 6.83486 15.8105 7.17525 14.3055 7.85164C12.8005 8.52804 11.461 9.5242 10.3801 10.7708C8.34369 13.0241 7.22573 15.9588 7.24675 18.9958C5.87706 19.8964 4.71467 21.0781 3.83679 22.4624C2.95891 23.8468 2.38565 25.4021 2.15508 27.025C1.81731 28.8111 1.91698 30.6525 2.44558 32.3917C2.97417 34.131 3.91597 35.7164 5.1905 37.0125C7.51822 39.119 10.5714 40.242 13.7092 40.1458H33.7822C41.3218 40.1458 44.8468 35.1521 45.0426 30.4521C45.1236 28.5757 44.6577 26.7161 43.7017 25.0995C42.7456 23.4829 41.3405 22.1788 39.6572 21.3458ZM19.5842 24.2833V31.3333C19.5842 31.8527 19.3779 32.3508 19.0107 32.7181C18.6434 33.0854 18.1453 33.2917 17.6259 33.2917C17.1065 33.2917 16.6084 33.0854 16.2412 32.7181C15.8739 32.3508 15.6676 31.8527 15.6676 31.3333V24.2833L14.1009 25.85C13.9031 26.0641 13.66 26.2313 13.3894 26.3394C13.1188 26.4476 12.8274 26.494 12.5366 26.4752C12.2457 26.4564 11.9627 26.373 11.7082 26.231C11.4537 26.0889 11.2342 25.8919 11.0655 25.6542C10.8051 25.2391 10.7014 24.7447 10.7732 24.26C10.8451 23.7753 11.0876 23.3322 11.4572 23.0104L16.2551 18.2125C16.4294 18.0226 16.6412 17.8709 16.8772 17.7672C17.1132 17.6634 17.3681 17.6099 17.6259 17.6099C17.8837 17.6099 18.1387 17.6634 18.3746 17.7672C18.6106 17.8709 18.8225 18.0226 18.9967 18.2125L23.7947 23.0104C24.1642 23.3322 24.4068 23.7753 24.4786 24.26C24.5504 24.7447 24.4468 25.2391 24.1863 25.6542C24.0177 25.8919 23.7981 26.0889 23.5436 26.231C23.2891 26.373 23.0061 26.4564 22.7153 26.4752C22.4244 26.494 22.1331 26.4476 21.8624 26.3394C21.5918 26.2313 21.3487 26.0641 21.1509 25.85L19.5842 24.2833ZM35.5447 30.8438L30.7467 35.6417C30.5725 35.8316 30.3606 35.9833 30.1246 36.087C29.8887 36.1908 29.6337 36.2443 29.3759 36.2443C29.1181 36.2443 28.8632 36.1908 28.6272 36.087C28.3912 35.9833 28.1794 35.8316 28.0051 35.6417L23.2072 30.8438C22.8538 30.5115 22.6229 30.0698 22.5518 29.59C22.4807 29.1102 22.5736 28.6204 22.8155 28.2C22.9842 27.9623 23.2037 27.7653 23.4582 27.6232C23.7127 27.4812 23.9957 27.3977 24.2866 27.379C24.5774 27.3602 24.8688 27.4066 25.1394 27.5148C25.41 27.6229 25.6531 27.7901 25.8509 28.0042L27.4176 29.5708V22.5208C27.4176 22.0015 27.6239 21.5033 27.9912 21.1361C28.3584 20.7688 28.8565 20.5625 29.3759 20.5625C29.8953 20.5625 30.3934 20.7688 30.7607 21.1361C31.1279 21.5033 31.3342 22.0015 31.3342 22.5208V29.5708L32.9009 28.0042C33.0987 27.7901 33.3418 27.6229 33.6124 27.5148C33.8831 27.4066 34.1744 27.3602 34.4653 27.379C34.7561 27.3977 35.0391 27.4812 35.2936 27.6232C35.5481 27.7653 35.7677 27.9623 35.9363 28.2C36.1782 28.6204 36.2711 29.1102 36.2001 29.59C36.129 30.0698 35.8981 30.5115 35.5447 30.8438Z"})}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip0_265_567",children:m.jsx("rect",{width:"47",height:"47",fill:"white"})})})]}),m.jsxs("h2",{className:e?"white poppinsLight":"",children:["CLOUD",m.jsx("br",{})," SERVICES"]}),m.jsx("p",{className:e?"greyClr":"",children:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."})]})}),m.jsx("li",{className:`honeycomb-cell ${e?"honeycomb-cell-dark":""}`,children:m.jsxs("div",{className:"honeycomb-cell_title",children:[m.jsx("svg",{className:"icon",style:{top:"-52px",left:"104px"},width:"42",height:"37",viewBox:"0 0 42 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.93853 23.3799L8.38239 22.5464C10.0081 21.0852 11.7469 20.1502 13.5989 19.7412C15.4726 19.3246 17.448 19.4517 19.5252 20.1227C19.5422 20.1286 19.5598 20.1345 19.5768 20.1403C20.9031 20.7154 22.4413 21.2279 24.1915 21.6779C26.1185 22.1596 28.0694 22.5397 30.0362 22.8165C30.4084 22.8271 30.7715 22.9343 31.09 23.1275L37.7958 18.4031C38.7698 17.7165 39.7532 17.3878 40.491 17.4231C40.8508 17.4244 41.2005 17.5417 41.4885 17.7576C41.6355 17.8761 41.7563 18.0238 41.8431 18.1915C41.93 18.3592 41.9811 18.5432 41.9931 18.7317C42.0429 19.2835 41.825 20.0112 41.2348 20.9033L37.273 26.8718C37.1296 27.0904 36.961 27.2913 36.7707 27.4704C36.5817 27.6518 36.3713 27.8094 36.1443 27.9398L25.88 33.9377C25.4989 34.1616 25.0789 34.311 24.6422 34.3779C24.2063 34.436 23.7635 34.4121 23.3364 34.3075L13.4344 31.8778C13.1779 31.8123 12.9119 31.7925 12.6485 31.8191C12.3866 31.847 12.132 31.9226 11.8972 32.0422L11.48 32.2417L11.9201 33.0985C11.9544 33.1654 11.9751 33.2383 11.9811 33.3132C11.9872 33.388 11.9784 33.4633 11.9552 33.5348C11.9321 33.6062 11.895 33.6724 11.8463 33.7295C11.7975 33.7865 11.7379 33.8334 11.671 33.8673L6.49881 36.5317C6.3632 36.5996 6.20632 36.6112 6.06224 36.564C5.91816 36.5167 5.79851 36.4144 5.72929 36.2794L0.0627067 25.2285C0.0284768 25.1617 0.00778043 25.0887 0.00180724 25.0138C-0.00416595 24.9389 0.00470186 24.8636 0.0279009 24.7921C0.0510999 24.7207 0.0881727 24.6545 0.136988 24.5975C0.185803 24.5404 0.245398 24.4936 0.312347 24.4597L5.4849 21.8012C5.55151 21.7664 5.62435 21.7451 5.6992 21.7387C5.77406 21.7322 5.84944 21.7407 5.921 21.7636C5.99256 21.7866 6.05888 21.8235 6.11611 21.8722C6.17333 21.9209 6.22034 21.9806 6.25442 22.0476L6.93853 23.3799ZM32.2617 16.3667H25.7562V16.4371C25.7565 16.6747 25.8507 16.9026 26.0182 17.071C26.101 17.1548 26.1995 17.2213 26.3082 17.2666C26.4168 17.3119 26.5334 17.3352 26.6511 17.335H31.3661C31.4837 17.3352 31.6002 17.312 31.7088 17.2667C31.8173 17.2213 31.9158 17.1548 31.9984 17.071C32.0817 16.9878 32.1479 16.889 32.193 16.7803C32.2382 16.6715 32.2615 16.5549 32.2616 16.4371V16.3667H32.2617ZM32.519 18.1273C32.7946 17.9403 33.02 17.6884 33.1755 17.3936C33.3309 17.0989 33.4116 16.7704 33.4104 16.4371V14.653C33.4068 14.3887 33.4593 14.1266 33.5646 13.8842C33.673 13.6452 33.8324 13.4328 34.0316 13.2621C34.8276 12.5501 35.4649 11.6783 35.9021 10.7033C36.4167 9.55172 36.6354 8.28947 36.5384 7.03156C36.4413 5.77364 36.0315 4.56004 35.3463 3.50127C34.6611 2.44251 33.7222 1.57223 32.6153 0.96969C31.5083 0.367155 30.2684 0.0515137 29.0085 0.0515137C27.7486 0.0515137 26.5087 0.367155 25.4017 0.96969C24.2948 1.57223 23.3559 2.44251 22.6707 3.50127C21.9855 4.56004 21.5757 5.77364 21.4787 7.03156C21.3816 8.28947 21.6003 9.55172 22.1149 10.7033C22.5522 11.6783 23.1895 12.5501 23.9854 13.2621C24.1846 13.4327 24.3438 13.6451 24.4518 13.8842C24.5575 14.1266 24.6104 14.3886 24.6071 14.653V16.4371C24.6058 16.7704 24.6863 17.0989 24.8417 17.3936C24.997 17.6884 25.2224 17.9403 25.498 18.1273C25.5778 18.947 25.9595 19.7076 26.5687 20.2609C27.1779 20.8142 27.9709 21.1206 28.7934 21.1204H29.2235C30.0459 21.1206 30.839 20.8142 31.4482 20.2609C32.0574 19.7076 32.4391 18.947 32.5189 18.1273H32.519ZM22.6044 7.60459C22.6072 6.00495 23.2065 4.46402 24.2849 3.28391C25.3633 2.10379 26.843 1.36961 28.434 1.22528V3.39088C28.4337 3.48607 28.4571 3.57982 28.5021 3.66369C28.5471 3.74755 28.6122 3.8189 28.6915 3.87129C28.7709 3.92368 28.862 3.95548 28.9567 3.96381C29.0514 3.97215 29.1467 3.95676 29.234 3.91903C29.2633 3.9132 29.2972 3.90145 29.333 3.89553C29.3776 3.88853 29.4226 3.88463 29.4678 3.88387C29.6716 3.88597 29.8663 3.96851 30.0097 4.11355C30.153 4.2586 30.2334 4.45444 30.2334 4.65851C30.2334 4.86259 30.153 5.05843 30.0097 5.20347C29.8663 5.34852 29.6716 5.43106 29.4678 5.43316C29.4226 5.43241 29.3776 5.42849 29.333 5.42141C29.2882 5.41672 29.2445 5.40485 29.2035 5.38625C29.0604 5.33509 28.9028 5.34279 28.7653 5.40769C28.6278 5.47258 28.5215 5.58938 28.4698 5.73252C28.4472 5.79456 28.4357 5.86011 28.4358 5.92615H28.434V7.60459H27.4107C27.3811 7.11537 27.1661 6.65591 26.8097 6.32001C26.4533 5.9841 25.9823 5.79706 25.4928 5.79706C25.0034 5.79706 24.5324 5.9841 24.176 6.32001C23.8196 6.65591 23.6046 7.11537 23.5749 7.60459H22.6044ZM35.3121 8.75471C35.2215 9.26447 35.0686 9.76113 34.8568 10.2334C34.4871 11.0599 33.9461 11.7981 33.2697 12.399C32.9491 12.6795 32.6931 13.0262 32.5191 13.4152C32.3451 13.8042 32.2573 14.2264 32.2617 14.6526V15.2162H29.5826V12.9687H29.5809C29.5806 12.9007 29.5689 12.8332 29.5463 12.7691C29.5205 12.6985 29.4811 12.6337 29.4303 12.5784C29.3795 12.523 29.3183 12.4783 29.2502 12.4467C29.1821 12.415 29.1085 12.3972 29.0335 12.3941C28.9585 12.391 28.8836 12.4028 28.8131 12.4288C28.7763 12.4405 28.7329 12.4523 28.6837 12.4639C28.639 12.471 28.594 12.4749 28.5488 12.4757C28.3956 12.475 28.2461 12.429 28.119 12.3434C27.9919 12.2578 27.8929 12.1365 27.8345 11.9947C27.7761 11.8529 27.7609 11.697 27.7908 11.5466C27.8207 11.3961 27.8944 11.2579 28.0026 11.1493C28.149 11.007 28.3448 10.927 28.5488 10.9264C28.594 10.9271 28.639 10.931 28.6837 10.9381C28.7174 10.9424 28.7506 10.9502 28.7827 10.9615C28.87 10.9993 28.9652 11.0147 29.0599 11.0063C29.1546 10.998 29.2458 10.9662 29.3251 10.9138C29.4045 10.8614 29.4696 10.7901 29.5145 10.7062C29.5595 10.6223 29.5829 10.5286 29.5826 10.4334V8.75495H30.6053C30.635 9.24426 30.85 9.70379 31.2065 10.0398C31.5629 10.3757 32.034 10.5628 32.5235 10.5628C33.0131 10.5628 33.4841 10.3757 33.8406 10.0398C34.1971 9.70379 34.4121 9.24426 34.4417 8.75495L35.3121 8.75471ZM19.1096 26.4137C18.9589 26.3995 18.8199 26.3259 18.7234 26.209C18.6268 26.0922 18.5805 25.9417 18.5948 25.7908C18.609 25.6398 18.6825 25.5007 18.7992 25.404C18.9158 25.3073 19.0661 25.2609 19.2169 25.2752C21.7422 25.5216 25.2047 25.6978 27.542 25.821C28.7222 25.8797 29.6257 25.9266 30.059 25.9795C30.3141 25.9573 30.5515 25.8401 30.7243 25.6509C30.8997 25.4569 30.9931 25.2023 30.985 24.9407C30.9778 24.6785 30.8677 24.4297 30.6785 24.2482C30.4917 24.065 30.2409 23.9619 29.9794 23.9607C29.9525 23.9617 29.9255 23.9597 29.8991 23.9548C27.883 23.6753 25.8834 23.2874 23.9089 22.7928C22.2866 22.3875 20.6977 21.8578 19.1566 21.2083C17.2811 20.6097 15.5106 20.4923 13.845 20.8561C12.1706 21.2258 10.5885 22.0866 9.0985 23.4384C9.06974 23.4663 9.03717 23.49 9.00178 23.5088H9.00235L7.46283 24.4067L10.9569 31.2203L11.3999 31.0091C11.7548 30.8314 12.1384 30.7182 12.5328 30.6746C12.9255 30.6401 13.3212 30.6698 13.7043 30.7626L23.6052 33.1923C23.8913 33.2629 24.1882 33.2788 24.4802 33.2392C24.7699 33.193 25.0485 33.0935 25.3019 32.9457L35.5648 26.9479C35.7163 26.8606 35.8573 26.7563 35.985 26.6368C36.111 26.5175 36.2223 26.3835 36.3167 26.2378L40.2786 20.2694C40.7129 19.6122 40.8805 19.1426 40.8518 18.8374C40.8518 18.8034 40.8448 18.7697 40.8315 18.7385C40.8181 18.7072 40.7985 18.679 40.7739 18.6555C40.6754 18.5943 40.561 18.5637 40.4451 18.5674C39.9405 18.544 39.2185 18.8022 38.4549 19.3421L31.8836 23.9668C32.0507 24.285 32.1358 24.6401 32.131 24.9996C32.1262 25.3592 32.0318 25.7118 31.8563 26.0255C31.6808 26.3392 31.4298 26.6041 31.1261 26.7959C30.8224 26.9878 30.4756 27.1006 30.1173 27.1241C30.0252 27.1287 29.9333 27.1127 29.8483 27.0772C29.8254 27.0654 28.89 27.0361 27.484 26.9657C25.1433 26.8424 21.6772 26.6663 19.1097 26.414L19.1096 26.4137Z"})}),m.jsxs("h2",{className:e?"white poppinsLight":"",children:["BUSINESS",m.jsx("br",{})," SOLUTION"]}),m.jsx("p",{className:e?"greyClr":"",children:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."})]})}),m.jsx("li",{className:`honeycomb-cell ${e?"honeycomb-cell-dark":""}`,children:m.jsxs("div",{className:"honeycomb-cell_title",children:[m.jsxs("svg",{className:"icon",style:{top:"-52px",left:"110px"},width:"39",height:"36",viewBox:"0 0 39 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M13.7114 9.32654L10.3203 13.3686H12.3441V21.6177H15.0788V13.3686H17.1026L13.7114 9.32654Z"}),m.jsx("path",{d:"M7.64062 23.236L18.0465 29.6703C18.3826 29.8782 18.7775 29.9892 19.1814 29.9892C19.5853 29.9892 19.9802 29.8782 20.3163 29.6703L30.7222 23.236C30.6659 23.1323 30.5801 23.0449 30.474 22.9834C30.3679 22.9218 30.2456 22.8885 30.1206 22.887H8.24228C8.11719 22.8885 7.99494 22.9218 7.88886 22.9834C7.78277 23.0449 7.69691 23.1323 7.64062 23.236Z"}),m.jsx("path",{d:"M21.9163 8.92688V17.176H19.8926L23.2837 21.2181L26.6748 17.176H24.6511V8.92688H21.9163Z"}),m.jsx("path",{d:"M38.324 12.7342C38.3211 11.0521 37.5999 9.43966 36.3183 8.25023C35.0368 7.06081 33.2994 6.3914 31.487 6.38872C30.7158 6.3865 29.95 6.50889 29.224 6.75041C29.1365 6.77989 29.0433 6.79229 28.9504 6.78683C28.8574 6.78137 28.7667 6.75817 28.6839 6.71868C28.6013 6.68007 28.5279 6.62648 28.468 6.56109C28.4081 6.49569 28.363 6.41982 28.3352 6.33796C27.6985 4.40504 26.3706 2.73142 24.5708 1.5934C22.771 0.455392 20.6069 -0.0789705 18.4358 0.0785388C16.2646 0.236048 14.2162 1.07601 12.6288 2.45975C11.0414 3.8435 10.0098 5.68828 9.70448 7.68954C9.6905 7.78782 9.65161 7.88163 9.59099 7.96325C9.53038 8.04488 9.44978 8.112 9.3558 8.15911C9.26167 8.20587 9.15722 8.23191 9.05053 8.23521C8.94383 8.23851 8.83774 8.21898 8.74047 8.17814C7.94307 7.82977 7.07159 7.65196 6.19028 7.65782C4.60528 7.64897 3.07773 8.20812 1.92596 9.21877C0.774193 10.2294 0.0870465 11.6136 0.007718 13.0828C-0.0716105 14.5521 0.462998 15.9931 1.50014 17.1055C2.53728 18.2179 3.99694 18.916 5.57496 19.0543C5.77323 19.067 10.9762 19.0797 10.9762 19.0797V14.6378H8.92507C8.79713 14.6372 8.67189 14.6037 8.56327 14.5409C8.45464 14.4782 8.36688 14.3887 8.30974 14.2825C8.25406 14.176 8.2316 14.0571 8.24489 13.9394C8.25818 13.8217 8.30669 13.7097 8.38495 13.6162L13.1708 7.90529C13.2371 7.83226 13.3198 7.77355 13.4131 7.73328C13.5064 7.69301 13.608 7.67214 13.7109 7.67214C13.8138 7.67214 13.9155 7.69301 14.0088 7.73328C14.1021 7.77355 14.1848 7.83226 14.2511 7.90529L19.0369 13.6162C19.1152 13.7097 19.1637 13.8217 19.177 13.9394C19.1903 14.0571 19.1678 14.176 19.1121 14.2825C19.055 14.3887 18.9672 14.4782 18.8586 14.5409C18.75 14.6037 18.6247 14.6372 18.4968 14.6378H16.4457V19.0797H19.7548L17.9567 16.9286C17.8784 16.8351 17.8299 16.7231 17.8166 16.6054C17.8033 16.4876 17.8258 16.3688 17.8815 16.2623C17.9386 16.156 18.0264 16.0666 18.135 16.0039C18.2436 15.9411 18.3689 15.9076 18.4968 15.9069H20.5479V8.29236C20.5479 8.12407 20.6199 7.96267 20.7481 7.84367C20.8764 7.72467 21.0503 7.65782 21.2316 7.65782H25.3338C25.5151 7.65782 25.689 7.72467 25.8172 7.84367C25.9454 7.96267 26.0175 8.12407 26.0175 8.29236V15.9069H28.0686C28.1965 15.9076 28.3217 15.9411 28.4304 16.0039C28.539 16.0666 28.6267 16.156 28.6839 16.2623C28.7396 16.3688 28.762 16.4876 28.7487 16.6054C28.7354 16.7231 28.6869 16.8351 28.6087 16.9286L26.8106 19.0797C26.8106 19.0797 31.9041 19.067 32.1092 19.048C33.8107 18.9136 35.3952 18.1892 36.547 17.0191C37.6988 15.849 38.3332 14.3191 38.324 12.7342Z"}),m.jsx("path",{d:"M30.8048 24.708L23.2227 29.3973L30.8048 34.7783V24.708Z"}),m.jsx("path",{d:"M22.0176 30.1462L21.0741 30.7237C20.5152 31.0752 19.8555 31.2631 19.1803 31.2631C18.5051 31.2631 17.8454 31.0752 17.2864 30.7237L16.3429 30.1462L8.68555 35.578H29.675L22.0176 30.1462Z"}),m.jsx("path",{d:"M7.55859 24.708V34.7783L15.1408 29.3973L7.55859 24.708Z"})]}),m.jsxs("h2",{className:e?"white poppinsLight":"",children:["CLOUD E-MAIL",m.jsx("br",{})," MIGRATION"]}),m.jsx("p",{className:e?"greyClr":"",children:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."})]})}),m.jsx("li",{className:`honeycomb-cell ${e?"honeycomb-cell-dark":""}`,children:m.jsxs("div",{className:"honeycomb-cell_title",children:[m.jsxs("svg",{className:"icon",style:{top:"-52px",left:"110px"},width:"39",height:"36",viewBox:"0 0 39 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M13.7114 9.32654L10.3203 13.3686H12.3441V21.6177H15.0788V13.3686H17.1026L13.7114 9.32654Z"}),m.jsx("path",{d:"M7.64062 23.236L18.0465 29.6703C18.3826 29.8782 18.7775 29.9892 19.1814 29.9892C19.5853 29.9892 19.9802 29.8782 20.3163 29.6703L30.7222 23.236C30.6659 23.1323 30.5801 23.0449 30.474 22.9834C30.3679 22.9218 30.2456 22.8885 30.1206 22.887H8.24228C8.11719 22.8885 7.99494 22.9218 7.88886 22.9834C7.78277 23.0449 7.69691 23.1323 7.64062 23.236Z"}),m.jsx("path",{d:"M21.9163 8.92688V17.176H19.8926L23.2837 21.2181L26.6748 17.176H24.6511V8.92688H21.9163Z"}),m.jsx("path",{d:"M38.324 12.7342C38.3211 11.0521 37.5999 9.43966 36.3183 8.25023C35.0368 7.06081 33.2994 6.3914 31.487 6.38872C30.7158 6.3865 29.95 6.50889 29.224 6.75041C29.1365 6.77989 29.0433 6.79229 28.9504 6.78683C28.8574 6.78137 28.7667 6.75817 28.6839 6.71868C28.6013 6.68007 28.5279 6.62648 28.468 6.56109C28.4081 6.49569 28.363 6.41982 28.3352 6.33796C27.6985 4.40504 26.3706 2.73142 24.5708 1.5934C22.771 0.455392 20.6069 -0.0789705 18.4358 0.0785388C16.2646 0.236048 14.2162 1.07601 12.6288 2.45975C11.0414 3.8435 10.0098 5.68828 9.70448 7.68954C9.6905 7.78782 9.65161 7.88163 9.59099 7.96325C9.53038 8.04488 9.44978 8.112 9.3558 8.15911C9.26167 8.20587 9.15722 8.23191 9.05053 8.23521C8.94383 8.23851 8.83774 8.21898 8.74047 8.17814C7.94307 7.82977 7.07159 7.65196 6.19028 7.65782C4.60528 7.64897 3.07773 8.20812 1.92596 9.21877C0.774193 10.2294 0.0870465 11.6136 0.007718 13.0828C-0.0716105 14.5521 0.462998 15.9931 1.50014 17.1055C2.53728 18.2179 3.99694 18.916 5.57496 19.0543C5.77323 19.067 10.9762 19.0797 10.9762 19.0797V14.6378H8.92507C8.79713 14.6372 8.67189 14.6037 8.56327 14.5409C8.45464 14.4782 8.36688 14.3887 8.30974 14.2825C8.25406 14.176 8.2316 14.0571 8.24489 13.9394C8.25818 13.8217 8.30669 13.7097 8.38495 13.6162L13.1708 7.90529C13.2371 7.83226 13.3198 7.77355 13.4131 7.73328C13.5064 7.69301 13.608 7.67214 13.7109 7.67214C13.8138 7.67214 13.9155 7.69301 14.0088 7.73328C14.1021 7.77355 14.1848 7.83226 14.2511 7.90529L19.0369 13.6162C19.1152 13.7097 19.1637 13.8217 19.177 13.9394C19.1903 14.0571 19.1678 14.176 19.1121 14.2825C19.055 14.3887 18.9672 14.4782 18.8586 14.5409C18.75 14.6037 18.6247 14.6372 18.4968 14.6378H16.4457V19.0797H19.7548L17.9567 16.9286C17.8784 16.8351 17.8299 16.7231 17.8166 16.6054C17.8033 16.4876 17.8258 16.3688 17.8815 16.2623C17.9386 16.156 18.0264 16.0666 18.135 16.0039C18.2436 15.9411 18.3689 15.9076 18.4968 15.9069H20.5479V8.29236C20.5479 8.12407 20.6199 7.96267 20.7481 7.84367C20.8764 7.72467 21.0503 7.65782 21.2316 7.65782H25.3338C25.5151 7.65782 25.689 7.72467 25.8172 7.84367C25.9454 7.96267 26.0175 8.12407 26.0175 8.29236V15.9069H28.0686C28.1965 15.9076 28.3217 15.9411 28.4304 16.0039C28.539 16.0666 28.6267 16.156 28.6839 16.2623C28.7396 16.3688 28.762 16.4876 28.7487 16.6054C28.7354 16.7231 28.6869 16.8351 28.6087 16.9286L26.8106 19.0797C26.8106 19.0797 31.9041 19.067 32.1092 19.048C33.8107 18.9136 35.3952 18.1892 36.547 17.0191C37.6988 15.849 38.3332 14.3191 38.324 12.7342Z"}),m.jsx("path",{d:"M30.8048 24.708L23.2227 29.3973L30.8048 34.7783V24.708Z"}),m.jsx("path",{d:"M22.0176 30.1462L21.0741 30.7237C20.5152 31.0752 19.8555 31.2631 19.1803 31.2631C18.5051 31.2631 17.8454 31.0752 17.2864 30.7237L16.3429 30.1462L8.68555 35.578H29.675L22.0176 30.1462Z"}),m.jsx("path",{d:"M7.55859 24.708V34.7783L15.1408 29.3973L7.55859 24.708Z"})]}),m.jsxs("h2",{className:e?"white poppinsLight":"",children:["CLOUD E-MAIL",m.jsx("br",{})," MIGRATION"]}),m.jsx("p",{className:e?"greyClr":"",children:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."})]})}),m.jsx("li",{className:"honeycomb-cell honeycomb_Hidden"})]})]})}),m.jsx("section",{id:"projectSection",children:m.jsxs("div",{className:"projectContainer",children:[m.jsxs("div",{className:"projectText",children:[m.jsxs("h1",{children:["Over 400+ Projects ",m.jsx("br",{}),"Completed"]}),m.jsx("p",{className:`${e?"white poppinsLight":"black"}`,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis"})]}),m.jsxs("div",{className:"happyUserCounts",children:[m.jsx("div",{className:"projectHexagon"}),m.jsxs("div",{className:"countsUsers",children:[m.jsx("h1",{children:"2000+"}),m.jsx("p",{className:e?"white":"black",children:"HAPPY USERS"})]}),m.jsx("div",{className:"countsDownloads",children:m.jsxs("div",{className:"downloads",children:[m.jsx("h1",{className:"mb-0",children:"24+"}),m.jsx("p",{className:`mb-0 ${e?"white":"black"}`,children:"Downloads"})]})}),m.jsx("div",{className:"countsDownloads countsProducts",children:m.jsxs("div",{className:"downloads products",children:[m.jsx("h1",{className:"mb-0",children:"8+"}),m.jsx("p",{className:`mb-0 ${e?"white":"black"}`,children:"Products"})]})}),m.jsx("div",{className:"countsDownloads countsRatings",children:m.jsxs("div",{className:"downloads ratings",children:[m.jsx("h1",{className:"mb-0",children:"1M+"}),m.jsx("p",{className:`mb-0 ${e?"white":"black"}`,children:"Ratings"})]})})]})]})}),m.jsx("section",{id:"methodologySection",children:m.jsxs("div",{className:"methodologyContainer",children:[m.jsx("div",{className:"methodologyTitle",children:m.jsx("h1",{children:"METHODOLOGY"})}),m.jsxs("div",{className:"cardContainer",children:[m.jsxs("div",{className:`cards ${e?"darkModeCards":""}`,children:[m.jsx("div",{className:"cardImg",children:m.jsx("img",{src:$g,alt:"simplicityLogo"})}),m.jsx("h2",{className:e?"white poppinsLight":"black",children:"SIMPLICITY"}),m.jsx("p",{children:"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity."})]}),m.jsxs("div",{className:`cards ${e?"darkModeCards":""}`,children:[m.jsx("div",{className:"cardImg",children:m.jsx("img",{src:Jg,alt:"criticalLogo"})}),m.jsxs("h2",{className:e?"white poppinsLight":"black",children:["CRITICAL ",m.jsx("br",{}),"THINKING"]}),m.jsx("p",{children:"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity."})]}),m.jsxs("div",{className:`cards ${e?"darkModeCards":""}`,children:[m.jsx("div",{className:"cardImg",children:m.jsx("img",{src:qg,alt:"effectiveLogo"})}),m.jsxs("h2",{className:e?"white poppinsLight":"black",children:["EFFECTIVENESS ",m.jsx("br",{})," & EFFICIENCY"]}),m.jsx("p",{children:"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity."})]}),m.jsxs("div",{className:`cards ${e?"darkModeCards":""}`,children:[m.jsx("div",{className:"cardImg",children:m.jsx("img",{src:e9,alt:"securityLogo"})}),m.jsx("h2",{className:e?"white poppinsLight":"black",children:"SECURITY"}),m.jsx("p",{children:"We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity."})]})]})]})}),m.jsx("section",{id:"whyUsSection",children:m.jsxs("div",{className:"whyUsContainer",children:[m.jsxs("div",{className:"whyUsTitle",children:[m.jsx("p",{className:e?"white poppinsLight":"black",children:"WHY"}),m.jsx("h1",{children:"THE CORE TECH"})]}),m.jsxs("div",{className:"coreTechFlexParent",children:[m.jsxs("div",{className:"ddd",children:[e?m.jsx("img",{src:l9,alt:"discover"}):m.jsx("img",{src:n9,alt:"discover"}),m.jsx("h2",{className:e?"white":"black",children:"DISCOVER"}),m.jsx("p",{className:e?"textColor":"",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m"})]}),m.jsxs("div",{className:"ddd",children:[e?m.jsx("img",{src:a9,alt:"discover"}):m.jsx("img",{src:t9,alt:"discover"}),m.jsx("h2",{className:e?"white":"black",children:"DESIGN"}),m.jsx("p",{className:e?"textColor":"",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m"})]}),m.jsxs("div",{className:"ddd",children:[e?m.jsx("img",{src:i9,alt:"discover"}):m.jsx("img",{src:r9,alt:"discover"}),m.jsx("h2",{className:e?"white poppinsLight":"black",children:"DELIVER"}),m.jsx("p",{className:e?"textColor":"",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m"})]}),m.jsx("div",{className:"hrLine"})]})]})}),m.jsx("section",{id:"testimonialSection",children:m.jsxs("div",{className:"testimonialContainer",children:[m.jsxs("div",{className:"testimonialTitle",children:[m.jsx("p",{className:e?"white poppinsLight":"black",children:"CLIENTS TESTIMONIAL"}),m.jsx("h1",{children:"WHAT OUR CLIENTS ARE SAYING"})]}),m.jsx("div",{className:"clientImgsContainer",children:m.jsx("ul",{className:"honeycomb",children:o.map(a=>m.jsx("li",{className:`honeycomb-cell honeycomb-cell-client ${n===a.id?"transform":""}`,onMouseEnter:()=>s(a.id),onMouseLeave:c,children:m.jsx("img",{className:"honeycomb-cell_img",src:a.img,alt:a.name})},a.id))})}),m.jsxs("div",{className:"doubleQuotes",children:[m.jsx("img",{src:o9,alt:"doubleQuotes"}),o.map(a=>m.jsxs("div",{className:"hoveredContent",style:{display:n===a.id?"block":"none"},children:[m.jsx("p",{className:e?"white poppinsLight":"",children:a.testimonial}),m.jsx("h3",{children:a.name}),m.jsx("h5",{className:e?"white poppinsLight":"",children:a.company})]},a.id))]})]})}),m.jsx("section",{id:"getInTouchSection",children:m.jsxs("div",{className:"getInTouchCointainer",children:[m.jsx("h1",{children:"GET IN TOUCH"}),m.jsx("p",{className:e?"white poppinsLight":"",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis"}),m.jsxs("button",{className:"contactBtn",children:[m.jsxs("svg",{width:"180px",height:"60px",viewBox:"0 0 180 60",className:"border",children:[m.jsx("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"bg-line"}),m.jsx("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"hl-line"})]}),m.jsx("span",{className:e?"white poppinsLight":"",children:"CONTACT US"})]})]})}),m.jsx(M1,{}),m.jsx(P8,{})]})},R0="/assets/Polygon60-DrTHkYes.png",_0="/assets/PolygonWhite-DdwFfSp1.png",P9="/assets/About%20Us-Bri6ktGc.png",T9="/assets/innovationIcon-D7q5-nba.png",M9="/assets/Experties-D-1dnUYY.png",I9="/assets/business_585-CLGYj5BW.png",nh="/assets/client-Cveg4p_d.jpg",z9="/assets/executive-business-woman-office-k9geJrcL.jpg",R9=()=>{const{darkMode:e}=re.useContext(Jl),[n,l]=re.useState(2),o=[{id:1,name:"John Smith",designation:"CEO",details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:_d},{id:2,name:"Alexa ",designation:"Founder",details:"It looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:nh},{id:3,name:"Vipin",designation:"Software Engineer",details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:Rd},{id:4,name:"Ellyse Perry ",designation:"UI/UX Designer",details:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:Fd},{id:5,name:"Peter",designation:"Quality Assurance Analyst",details:"It is a long established fact that a reader will be distract The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters normal distribution of letters..",img:Od},{id:6,name:"Allena Smith",designation:"Web Developer",details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",img:Ud},{id:7,name:"Sundar",designation:"Systems Analyst",details:"that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:_c},{id:8,name:"Sundar",designation:"Network Engineer",details:"that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",img:_c}],s=a=>{l(a)},c=()=>{l(n)};return m.jsxs(m.Fragment,{children:[m.jsx(T1,{}),m.jsxs("div",{className:"aboutContainer",children:[m.jsxs("div",{className:"aboutUsLandingContainer",children:[m.jsx("div",{className:"aboutUsLandingImg",children:m.jsx("img",{src:P9,alt:"aboutImg"})}),m.jsxs("div",{className:"aboutUsLandingText",children:[m.jsxs("h1",{children:[m.jsx("span",{className:"borderFont",children:"Ab"}),m.jsx("span",{children:"out Us"})]}),m.jsx("p",{className:e?"darkColor poppinsLight":"",children:"CoreTech is a leading provider of technology solutions for businesses. With a focus on delivering the highest quality products and services, we help businesses harness the power of technology to achieve their goals. Our team of experts is dedicated to driving innovation and delivering results that exceed our clients' expectations."})]})]}),m.jsxs("div",{className:"priciplesContainer",children:[m.jsx("div",{className:"pricipleHeading",children:m.jsx("h1",{children:"OUR PRINCIPLES"})}),m.jsxs("div",{className:"pricipleHexagonParent",children:[m.jsxs("div",{className:"leftHexagon",children:[m.jsx("div",{className:"imgHexagon",children:e?m.jsx("img",{src:R0,alt:"hexagon"}):m.jsx("img",{src:_0,alt:"hexagon"})}),m.jsx("div",{className:"hexagonContent",children:m.jsxs("p",{className:e?"dark-mode":"",children:[m.jsx("img",{src:T9,alt:"innovation",className:"innovationLogo"}),m.jsx("h2",{className:e?"white poppinsLight":"",children:"INNOVATION"}),m.jsx("span",{className:e?"pricipletextDark poppinsLight":"",children:"We constantly strive to bring innovative IT solutions that revolutionize the way businesses operate."})]})})]}),m.jsxs("div",{className:"leftHexagon",children:[m.jsx("div",{className:"imgHexagon",children:e?m.jsx("img",{src:R0,alt:"hexagon"}):m.jsx("img",{src:_0,alt:"hexagon"})}),m.jsx("div",{className:"hexagonContent",children:m.jsxs("p",{className:e?"dark-mode":"",children:[m.jsx("img",{src:M9,alt:"innovation",className:"expertiseLogo"}),m.jsx("h2",{className:e?"white poppinsLight":"",children:"OUR EXPERTIES"}),m.jsx("span",{className:e?"pricipletextDark poppinsLight":"",children:"We specialize in web development, software development, and mobile app development. Our team of experts has extensive experience in working with various technologies such as AI, PHP, Python, C#, JavaScript, HTML, CSS and more."})]})})]}),m.jsxs("div",{className:"leftHexagon",children:[m.jsx("div",{className:"imgHexagon",children:e?m.jsx("img",{src:R0,alt:"hexagon"}):m.jsx("img",{src:_0,alt:"hexagon"})}),m.jsx("div",{className:"hexagonContent",children:m.jsxs("p",{className:e?"dark-mode":"",children:[m.jsx("img",{src:I9,alt:"innovation",className:"clientsLogo"}),m.jsx("h2",{className:e?"white poppinsLight":"",children:"OUR CLIENTS"}),m.jsx("span",{className:e?"pricipletextDark poppinsLight":"",children:"We constantly strive to bring innovative IT solutions that revolutionize the way businesses operate."})]})})]})]})]}),m.jsxs("div",{className:"ourTeamContainer",children:[m.jsx("div",{className:"ourTeamHeading",children:m.jsx("h1",{children:"MEET THE BEST TEAM EVER"})}),m.jsxs("div",{className:"teamTopImagesFlex",children:[m.jsx("div",{className:"teamMember firstMember",children:m.jsx("img",{src:_d,alt:"teamMember",onMouseEnter:()=>s(1),onMouseLeave:c,className:n===1?"imgTransform":""})}),m.jsx("div",{className:"teamMember secondMember",children:m.jsx("img",{src:nh,alt:"teamMember",onMouseEnter:()=>s(2),onMouseLeave:c,className:n===2?"imgTransform":""})}),m.jsx("div",{className:"teamMember thirdMember",children:m.jsx("img",{src:Rd,alt:"teamMember",onMouseEnter:()=>s(3),onMouseLeave:c,className:n===3?"imgTransform":""})})]}),m.jsxs("div",{className:"teamMiddleFlex",children:[m.jsx("div",{className:"teamMember eightMember",children:m.jsx("img",{src:z9,alt:"teamMember",onMouseEnter:()=>s(8),onMouseLeave:c,className:n===8?"imgTransform":""})}),o.map(a=>m.jsxs("div",{className:`aboutMember ${e?"changeShadow":""}`,style:{display:n===a.id?"block":"none"},children:[m.jsx("div",{className:"memberName",children:m.jsx("h2",{className:`mb-0 ${e?"white poppinsLight":""}`,children:a.name})}),m.jsx("h6",{className:`${e?"white poppinsLight":""}`,children:a.designation}),m.jsx("p",{className:`${e?"teamInfoDarkClr":""}`,children:a.details})]})),m.jsx("div",{className:"teamMember fourthMember",children:m.jsx("img",{src:Fd,alt:"teamMember",onMouseEnter:()=>s(4),onMouseLeave:c,className:n===4?"imgTransform":""})})]}),m.jsxs("div",{className:"teamTopImagesFlex teamBottom",children:[m.jsx("div",{className:"teamMember seventhMember",children:m.jsx("img",{src:_c,alt:"teamMember",onMouseEnter:()=>s(7),onMouseLeave:c,className:n===7?"imgTransform":""})}),m.jsx("div",{className:"teamMember sixthMember",children:m.jsx("img",{src:Ud,alt:"teamMember",onMouseEnter:()=>s(6),onMouseLeave:c,className:n===6?"imgTransform":""})}),m.jsx("div",{className:"teamMember fifthMember",children:m.jsx("img",{src:Od,alt:"teamMember",onMouseEnter:()=>s(5),onMouseLeave:c,className:n===5?"imgTransform":""})})]})]})]}),m.jsx(M1,{})]})},_9="/assets/portfolio94-ClQOSO-r.png",O9="/assets/5614091_2902106-BJLOnj0e.jpg",F9="/assets/30933344_207z_education-BXsw6kAx.jpg",U9="/assets/7349679_3639727-CNe2p_mo.jpg",B9="/assets/4011795_17272-Photoroom.png-Photoroom-Cj7-IBfk.png",H9="/assets/30933344_207z_education-Photoroom.png-Photoroom-3N-FjlEh.png",D9="/assets/9027716_4074771-Loco9HZQ.jpg",O0=[{id:"1",img:O9,category:"web",title:"Petro Website",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="world">
                    <path d="m8.2226563 20h-6.6650391c-.3535156-1.2758789-.5576172-2.6132812-.5576172-4s.2041016-2.7241211.5576172-4h6.6650391c-.140625 1.28125-.2226563 2.6152344-.2226563 4s.0820313 2.71875.2226563 4zm13.5429687-8h-11.53125c-.1464844 1.2587891-.234375 2.5908203-.234375 4s.0878906 2.7412109.234375 4h11.53125c.1464844-1.2587891.234375-2.5908203.234375-4s-.0878906-2.7412109-.234375-4zm-11.2392578 10c1.015625 5.5029297 3.3359375 9 5.4736328 9s4.4580078-3.4970703 5.4736328-9zm10.9472656-12c-1.015625-5.5029297-3.3359375-9-5.4736328-9s-4.4580078 3.4970703-5.4736328 9zm2.0214844 12c-.6025391 3.4916992-1.7177734 6.4072266-3.1669922 8.3574219 4.2226563-1.2753906 7.6601563-4.3637696 9.4111328-8.3574219zm6.9472656-2c.3535156-1.2758789.5576172-2.6132812.5576172-4s-.2041016-2.7241211-.5576172-4h-6.6650391c.1406251 1.28125.2226563 2.6152344.2226563 4s-.0820313 2.71875-.2226563 4zm-21.9375-10c.6025391-3.4916992 1.7177734-6.4072266 3.1669922-8.3574219-4.2226562 1.2753907-7.6601562 4.3637696-9.4111328 8.3574219zm0 12h-6.2441406c1.7509766 3.9936523 5.1884766 7.0820313 9.4111328 8.3574219-1.4492187-1.9501953-2.5644531-4.8657227-3.1669922-8.3574219zm14.9902344-12h6.2441406c-1.7509766-3.9936523-5.1884766-7.0820313-9.4111328-8.3574219 1.4492188 1.9501953 2.5644531 4.8657227 3.1669922 8.3574219z" />
                </g>
            </svg>
`},{id:"2",img:F9,category:"ui/ux",title:"Artix",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 299.679 299.679"
                style={{ enableBackground: "new 0 0 299.679 299.679" }}
                xmlSpace="preserve"
            >
                <g id="XMLID_197_">
                    <path
                        id="XMLID_221_"
                        d="M181.122,299.679c10.02,0,18.758-8.738,18.758-18.758v-43.808h12.525c7.516,0,12.525-5.011,12.525-12.525
		V99.466H74.749v125.123c0,7.515,5.01,12.525,12.525,12.525H99.8v43.808c0,10.02,8.736,18.758,18.758,18.758
		c10.019,0,18.756-8.738,18.756-18.758v-43.808h25.051v43.808C162.364,290.941,171.102,299.679,181.122,299.679z"
                    />
                    <path
                        id="XMLID_222_"
                        d="M256.214,224.589c10.02,0,18.756-8.737,18.756-18.758v-87.615c0-9.967-8.736-18.75-18.756-18.75
		c-10.021,0-18.758,8.783-18.758,18.75v87.615C237.456,215.851,246.192,224.589,256.214,224.589z"
                    />
                    <path
                        id="XMLID_223_"
                        d="M43.466,224.589c10.021,0,18.758-8.737,18.758-18.758v-87.615c0-9.967-8.736-18.75-18.758-18.75
		c-10.02,0-18.756,8.783-18.756,18.75v87.615C24.71,215.851,33.446,224.589,43.466,224.589z"
                    />
                    <path
                        id="XMLID_224_"
                        d="M209.899,1.89c-2.504-2.52-6.232-2.52-8.736,0l-16.799,16.743l-0.775,0.774
		c-9.961-4.988-21.129-7.479-33.566-7.503c-0.061,0-0.121-0.002-0.182-0.002h-0.002c-0.063,0-0.121,0.002-0.184,0.002
		c-12.436,0.024-23.604,2.515-33.564,7.503l-0.777-0.774L98.516,1.89c-2.506-2.52-6.232-2.52-8.736,0
		c-2.506,2.506-2.506,6.225,0,8.729l16.25,16.253c-5.236,3.496-9.984,7.774-14.113,12.667C82.032,51.256,75.727,66.505,74.86,83.027
		c-0.008,0.172-0.025,0.342-0.033,0.514c-0.053,1.125-0.078,2.256-0.078,3.391H224.93c0-1.135-0.027-2.266-0.078-3.391
		c-0.008-0.172-0.025-0.342-0.035-0.514c-0.865-16.522-7.172-31.772-17.057-43.487c-4.127-4.893-8.877-9.171-14.113-12.667
		l16.252-16.253C212.405,8.115,212.405,4.396,209.899,1.89z M118.534,65.063c-5.182,0-9.383-4.201-9.383-9.383
		c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383C127.917,60.862,123.716,65.063,118.534,65.063z M181.145,65.063
		c-5.182,0-9.383-4.201-9.383-9.383c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383
		C190.528,60.862,186.327,65.063,181.145,65.063z"
                    />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
`},{id:"3",img:U9,category:"ios",title:"Project Name",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 22.773 22.773"
                style={{ enableBackground: "new 0 0 22.773 22.773" }}
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                        <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                    </g>
                </g>
            </svg>
`},{id:"4",img:B9,category:"web",title:"Play Fit",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="world">
                    <path d="m8.2226563 20h-6.6650391c-.3535156-1.2758789-.5576172-2.6132812-.5576172-4s.2041016-2.7241211.5576172-4h6.6650391c-.140625 1.28125-.2226563 2.6152344-.2226563 4s.0820313 2.71875.2226563 4zm13.5429687-8h-11.53125c-.1464844 1.2587891-.234375 2.5908203-.234375 4s.0878906 2.7412109.234375 4h11.53125c.1464844-1.2587891.234375-2.5908203.234375-4s-.0878906-2.7412109-.234375-4zm-11.2392578 10c1.015625 5.5029297 3.3359375 9 5.4736328 9s4.4580078-3.4970703 5.4736328-9zm10.9472656-12c-1.015625-5.5029297-3.3359375-9-5.4736328-9s-4.4580078 3.4970703-5.4736328 9zm2.0214844 12c-.6025391 3.4916992-1.7177734 6.4072266-3.1669922 8.3574219 4.2226563-1.2753906 7.6601563-4.3637696 9.4111328-8.3574219zm6.9472656-2c.3535156-1.2758789.5576172-2.6132812.5576172-4s-.2041016-2.7241211-.5576172-4h-6.6650391c.1406251 1.28125.2226563 2.6152344.2226563 4s-.0820313 2.71875-.2226563 4zm-21.9375-10c.6025391-3.4916992 1.7177734-6.4072266 3.1669922-8.3574219-4.2226562 1.2753907-7.6601562 4.3637696-9.4111328 8.3574219zm0 12h-6.2441406c1.7509766 3.9936523 5.1884766 7.0820313 9.4111328 8.3574219-1.4492187-1.9501953-2.5644531-4.8657227-3.1669922-8.3574219zm14.9902344-12h6.2441406c-1.7509766-3.9936523-5.1884766-7.0820313-9.4111328-8.3574219 1.4492188 1.9501953 2.5644531 4.8657227 3.1669922 8.3574219z" />
                </g>
            </svg>
`},{id:"5",img:H9,category:"android",title:"Banking App",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 299.679 299.679"
                style={{ enableBackground: "new 0 0 299.679 299.679" }}
                xmlSpace="preserve"
            >
                <g id="XMLID_197_">
                    <path
                        id="XMLID_221_"
                        d="M181.122,299.679c10.02,0,18.758-8.738,18.758-18.758v-43.808h12.525c7.516,0,12.525-5.011,12.525-12.525
		V99.466H74.749v125.123c0,7.515,5.01,12.525,12.525,12.525H99.8v43.808c0,10.02,8.736,18.758,18.758,18.758
		c10.019,0,18.756-8.738,18.756-18.758v-43.808h25.051v43.808C162.364,290.941,171.102,299.679,181.122,299.679z"
                    />
                    <path
                        id="XMLID_222_"
                        d="M256.214,224.589c10.02,0,18.756-8.737,18.756-18.758v-87.615c0-9.967-8.736-18.75-18.756-18.75
		c-10.021,0-18.758,8.783-18.758,18.75v87.615C237.456,215.851,246.192,224.589,256.214,224.589z"
                    />
                    <path
                        id="XMLID_223_"
                        d="M43.466,224.589c10.021,0,18.758-8.737,18.758-18.758v-87.615c0-9.967-8.736-18.75-18.758-18.75
		c-10.02,0-18.756,8.783-18.756,18.75v87.615C24.71,215.851,33.446,224.589,43.466,224.589z"
                    />
                    <path
                        id="XMLID_224_"
                        d="M209.899,1.89c-2.504-2.52-6.232-2.52-8.736,0l-16.799,16.743l-0.775,0.774
		c-9.961-4.988-21.129-7.479-33.566-7.503c-0.061,0-0.121-0.002-0.182-0.002h-0.002c-0.063,0-0.121,0.002-0.184,0.002
		c-12.436,0.024-23.604,2.515-33.564,7.503l-0.777-0.774L98.516,1.89c-2.506-2.52-6.232-2.52-8.736,0
		c-2.506,2.506-2.506,6.225,0,8.729l16.25,16.253c-5.236,3.496-9.984,7.774-14.113,12.667C82.032,51.256,75.727,66.505,74.86,83.027
		c-0.008,0.172-0.025,0.342-0.033,0.514c-0.053,1.125-0.078,2.256-0.078,3.391H224.93c0-1.135-0.027-2.266-0.078-3.391
		c-0.008-0.172-0.025-0.342-0.035-0.514c-0.865-16.522-7.172-31.772-17.057-43.487c-4.127-4.893-8.877-9.171-14.113-12.667
		l16.252-16.253C212.405,8.115,212.405,4.396,209.899,1.89z M118.534,65.063c-5.182,0-9.383-4.201-9.383-9.383
		c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383C127.917,60.862,123.716,65.063,118.534,65.063z M181.145,65.063
		c-5.182,0-9.383-4.201-9.383-9.383c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383
		C190.528,60.862,186.327,65.063,181.145,65.063z"
                    />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
`},{id:"6",img:D9,category:"ios",title:"Hexa Hub",icon:`
            <svg
                className="applicationIcon"
                height="24"
                width="24"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 22.773 22.773"
                style={{ enableBackground: "new 0 0 22.773 22.773" }}
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                        <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                    </g>
                </g>
            </svg>
`}],V9=()=>{const{darkMode:e}=re.useContext(Jl),[n,l]=re.useState(O0),o=s=>{if(s==="all")l(O0);else{const c=O0.filter(a=>a.category===s);l(c)}};return m.jsxs(m.Fragment,{children:[m.jsx(T1,{}),m.jsxs("div",{className:"aboutContainer pb-5",children:[m.jsxs("div",{className:"aboutUsLandingContainer",children:[m.jsx("div",{className:"aboutUsLandingImg",children:m.jsx("img",{src:_9,alt:"aboutImg"})}),m.jsxs("div",{className:"aboutUsLandingText",children:[m.jsxs("h1",{children:[m.jsx("span",{children:"Port"}),m.jsx("span",{className:"borderFont",children:"folio"})]}),m.jsx("p",{className:e?"darkColor poppinsLight":"",children:"Our company offers a comprehensive range of services tailored to meet the diverse needs of our clients. From innovative digital solutions to traditional marketing strategies, we provide a complete suite of services designed to help businesses thrive in today's competitive landscape. Our expertise spans across areas such as web development, mobile app development, graphic design, content creation, social media management, SEO optimization, and more."})]})]}),m.jsxs("div",{className:"ourPortFolioParent",children:[m.jsx("div",{className:"pricipleHeading",children:m.jsx("h1",{children:"OUR PORTFOLIO"})}),m.jsxs("div",{className:"filterBtnsParent",children:[m.jsx("div",{className:"filterBtns ",children:m.jsx("button",{className:" filterbtn allbtn",onClick:()=>o("all"),children:"All"})}),m.jsx("div",{className:"filterBtns",children:m.jsx("button",{className:"filterbtn",onClick:()=>o("ui/ux"),children:"UI/UX Design"})}),m.jsx("div",{className:"filterBtns",children:m.jsx("button",{className:"filterbtn",onClick:()=>o("android"),children:"Android/iOS"})}),m.jsx("div",{className:"filterBtns",children:m.jsx("button",{className:"filterbtn",onClick:()=>o("web"),children:"Website/WebApp"})})]}),m.jsx("div",{className:"portfolioCardsParent",children:n.map((s,c)=>m.jsxs("div",{className:"portfolioCard",children:[m.jsx("div",{className:"portfoliocardImg",children:m.jsx("img",{src:s.img,alt:"portfolio"})}),m.jsxs("div",{className:"portfolioInfo",children:[m.jsx("p",{children:s.title}),m.jsx("div",{className:"applicationIcon",dangerouslySetInnerHTML:{__html:s.icon}})]})]},c))})]})]}),m.jsx(M1,{})]})},W9="/assets/contactus-BZaLMr1L.png",Q9="/assets/Group15-DIY613Rx.png",Z9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG5SURBVEiJtZLPSxRxGMY/zxhELh2kwOjQKQlBxKME/YAOXozCW8dOuy54kXVZwShECXcHgkLZ9hBeumqBdBMUwn9ABIkW6hREdajWvTjzdlGZ1nGm5lvPZfi+zzPPh/c7Iz9vY6FYEvQSlWjJeFaqaxoHebHlAEbOoLJQtH4ngKAnMRBw2QkA/EhJnHcFfE7J9LkC3qVkrjkBzNhOTBiDToAu2Eju56MTQN1sIVon+PteSNEJMPlEbYyVONPgQamht06Ag+eLmPL1vQtUXcqPAFN1bQBbUUPQl2ty5p8AACTmOrxLyjHjClD0UCvYK+BOZBQY3C3XtZYV4P128JgAvkZGXYKX1aINZQWoc1DL223E6w7vuxn3ys/1Jpr183bdxCJwEdgxY9PzeG/wRQHNUkO7xwAAtXGbwo79QQGG3zJmHzZo+3kqiFngVMIC87EAAL9gjw0qnXPBhxCaglsJxYf6eSIAjjZZIOYq/1SpL1YLNipYBs5lAXhpgXJda+E+Q8BqFsBfre4XbCSER4Lh/wI4VHXcbsi4D4wBZxOinzJ/PICnE3a6HXBVxk3BgEKumOg9gH6TKP4C1gSBcNLFCNoAAAAASUVORK5CYII=",Y9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIzSURBVEiJrZW/a1NRFMc/5zXpL0oHRRB0EPwbrOBgWx0cFAcXcRAiVBuVCgZfK/5AqErBWAsRmqTSLurgIIh2UmihDpUq6CzYQREqqIM20bbmHYcmmnfz7nsP8bvdc8/9fM6FmxchIqP9utcTDgO7EbYCoHxQZU6EB25BZsLOi23jxgnd7gh3VOiNmGEmIRw/m5fF2ILRU7rL83gMbIyA1/IZ5aBblPlIwUhatyVgAdgUE17LV/XoGpyQd/VFx+xKwGQDXHgC9FKigxIdnsMegWnj6AYRxkNvkE1rDzDr61AuuEUZCRo5m9aLwDUfUOk+V5S5wBvo+mvxTW6DA7gFuW7exGT4BKJ0G9PfssH/tjBmlHqsAqi+82raHV5FCbxVXhqlLWGCZBQwRlrCBJ/qF8uwI4rmNPt7BJbCBG/qF00emSgB6u9ReG0VKDwy1geqTzEwN0/qJYT9vjPqZ/h+B7kB7VxZYwloM5qmFcbaHRYAyh5dKBkTDpS9VTYPTcn3QAFAtl+nEI7Zpg6NMOnmpa++1PCpaBIuAz/+Af+zUmHYLDYIMgX5qDR+U6IikDs/Ie8jBQBS4grK27hwhcU2h6tBe4EC966UgBRQicH3EFKnx2U5tgDALco8gvWJ1qLK0GBentv2rX+ZAIpKNs19gSOWhntuUY6GMaw3WLeLlr+QUnjWsKfMtjTTF3TOz4iR3IB2rvziKcpOAIUXrUn2nbkt3/6L4I9kjYcK0prkUBw4wG+POKzwmUlUWQAAAABJRU5ErkJggg==",G9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHcSURBVEiJ7ZXNalNRFEbX3ufGSqMOdKBUQQctqDjpUKg2N9pXsXkB6dR5HqD4KhZyiwYEJxlKaQYO7J/4RyXSNPfs7SCJxDYxxcSJ+A0vm7XY3zmHC/8zJgJQXfX7KEuATolrGPWnz+W1PHvis5cS5qKRATemJHgflPQwZ1eLSt2hHZQU2JkCfCcoqUO7qNQVWDTjVdvI3SeW7Juy0jnmyIwasNjv/GYBsih0JpDsm1LmmG+akAHzMHCoDrf+VOJwMAz+i6AvSWAjEb6fVeJwoE5Z4IsmvBiEnxL0Mh8hG5DsjoNb4LN0O79zcmbUvV+IkHmBlgllYG/IzJ4Ly7HAVzFeDoP/TgBAIUfW1mVLI6XBTRwOxHm8ti5bM0dEIB/FGCXYDpB6pFit+KYEWhp/1vXBAo+SyKdqxbM8cMWVMvD2rIJmgDR3Zi2QAcsRMgm0cuFeLtw+3+ZjJ6EGlEyoaeRygBWgOU7QDFDySFGETWCu930hwpvgrCZGpZPQAO4CCFx1YcMjRVcenNxEqhX33uC7DqTBKYiQAddH1Dc0/RsVI4enHtqk8P4mJtQ4x0XLSenVpUBDlIeTwAclal2Jdg++oS1jSWBmUvhArqlRy+FCj/13fzhT4v3L+QHhcNO79P7MuwAAAABJRU5ErkJggg==",K9=()=>{const{darkMode:e}=re.useContext(Jl);return m.jsxs(m.Fragment,{children:[m.jsx(T1,{}),m.jsxs("div",{className:"contactContainer",children:[m.jsxs("div",{className:"aboutUsLandingContainer",children:[m.jsx("div",{className:"aboutUsLandingImg",children:m.jsx("img",{className:"contactImg",src:W9,alt:"contactImg"})}),m.jsxs("div",{className:"aboutUsLandingText",children:[m.jsxs("h1",{children:[m.jsx("span",{className:"borderFont",children:"Cont"}),m.jsx("span",{children:"act Us"})]}),m.jsx("p",{className:e?"darkColor poppinsLight":"",children:"Our company offers a comprehensive range of services tailored to meet the diverse needs of our clients. From innovative digital solutions to traditional marketing strategies, we provide a"})]})]}),m.jsxs("div",{className:"formMapSectionParent",children:[m.jsxs("div",{className:`formSection ${e?"containerDarkShadow":""}`,children:[m.jsxs("div",{className:"formLeftPart",children:[m.jsx("h1",{children:"Get In Touch"}),m.jsx("p",{className:e?"white poppinsLight":"",children:"We are here for you! How can we help?"}),m.jsxs("form",{action:"",children:[m.jsx("input",{type:"text",placeholder:"Enter your name"}),m.jsx("input",{type:"text",placeholder:"Enter your email address"}),m.jsx("textarea",{rows:"6",class:"custom-textarea",placeholder:"Go ahead, We are listening"}),m.jsx("button",{children:"Submit"})]})]}),m.jsxs("div",{className:"formRightPart",children:[m.jsx("img",{className:"formImg",src:Q9,alt:"contactForm"}),m.jsxs("div",{className:"contactDetails",children:[m.jsxs("div",{className:"logoDetailFlex",children:[m.jsx("div",{className:"circle",children:m.jsx("img",{src:Y9,alt:"location"})}),m.jsxs("div",{className:`details ${e?"white poppinsLight":""}`,children:["16 Plymouth Road, ",m.jsx("br",{})," Braintree, MA 02184"]})]}),m.jsxs("div",{className:"logoDetailFlex",children:[m.jsx("div",{className:"circle",children:m.jsx("img",{src:Z9,alt:"call"})}),m.jsx("div",{className:`details ${e?"white poppinsLight":""}`,children:"(978) 992 0049"})]}),m.jsxs("div",{className:"logoDetailFlex",children:[m.jsx("div",{className:"circle",children:m.jsx("img",{src:G9,alt:"email"})}),m.jsx("div",{className:`details ${e?"white poppinsLight":""}`,children:"Coretechllc@icloud.com"})]})]})]})]}),m.jsxs("div",{className:"formSocialIcons",children:[m.jsx("i",{class:"fa-brands fa-facebook-f"}),m.jsx("i",{class:"fa-brands fa-linkedin-in"}),m.jsx("i",{class:"fa-brands fa-x-twitter"})]})]}),m.jsx("div",{className:"mapSection",children:m.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.5736959315927!2d72.97113807411004!3d20.768065996683642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ee691bdc222d%3A0x8601d0112c1f6232!2sNirvana%20Tutoration!5e0!3m2!1sen!2sin!4v1700914206423!5m2!1sen!2sin",width:"100%",height:"369",style:{border:0,borderRadius:"20px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"googleMap"})})]}),m.jsx(M1,{})]})};function X9(){return m.jsxs(Bg,{children:[m.jsxs(Mg,{children:[m.jsx(cs,{path:"/",element:m.jsx(j9,{})}),m.jsx(cs,{path:"/about",element:m.jsx(R9,{})}),m.jsx(cs,{path:"/portfolio",element:m.jsx(V9,{})}),m.jsx(cs,{path:"/contact",element:m.jsx(K9,{})})]}),m.jsx(P8,{})]})}F0.createRoot(document.getElementById("root")).render(m.jsx(Gg,{children:m.jsx(X9,{})}));
