import React, { Component } from "react";
import Menu from "./Header/Menu";
import Logo from "./Images/MYtineraryLogo.png";
import Arrow from "./Images/circled-right-2.png";
import SideDrawer from "./Header/SideDrawer";
import Backdrop from "./Header/Backdrop";
import LoginRegModal from "./Header/LoginRegModal";
import Carousel from "./Carousel/Carousel";
import Slider from "./Carousel/Slider";
import "./Landing.css";

export default class Landing extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <div className="main-container-fluid" id="main-container-fluid">
          <div className="header">
            <LoginRegModal />
            <Menu drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </div>
          <div className="logo">
            <img className="logoImg" src={Logo} alt="" />
          </div>
          <div className="moto">
            <h2 className="motoTxt">
              Find your perfect trip, designed by insiders who know and love
              their cities
            </h2>
          </div>
          <div className="arrow">
            <img className="arrowImg" src={Arrow} alt="" />
          </div>
          <div className="title-gallery">
            <h3 className="titleGalleryTxt">Popular MYtineraries</h3>
          </div>
          <div className="carousel-container">
            <Carousel />
          </div>
          <div className="slide-bar">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}
