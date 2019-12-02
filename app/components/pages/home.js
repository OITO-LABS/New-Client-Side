import React from "react";
import {FLIP_LOADER,GOTO_URL,APP_INFO,EMPLOYEE_LISTING,EMPLOYEE_REG} from "utils/constants";
import Profile from "../pages/profile";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.appInfo = this.appInfo.bind(this);
    // this.upperClick = this.upperClick.bind(this);
  }
  appInfo() {
    app.events.trigger(GOTO_URL, { routerKey: APP_INFO });
  }

  componentDidMount() {
    app.events.trigger(FLIP_LOADER, { status: false, reset: true });
  }



  render() {
    //console.log('HomePage---------- render');
    return (
      <div className="home-page">
       
        {/* <a href="#" onClick={this.appInfo}>
          App Info
        </a>
        <a href="#" onClick={this.upperClick}>
          upper bar
        </a> */}
        <Profile/>
      </div>
    );
  }
}

export default HomePage;
