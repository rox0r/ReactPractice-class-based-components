import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
      otherStates: "", // just for demo purpose
    };
  }

  toggleUsersHandler() {
    //Access prevValue like func comps
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }
  render() {
    //Helper code/func just like func comps
    const usersList = (
      <ul>
        {this.props.users.map((user) => {
          return <User key={user.id} name={user.name} />;
        })}
      </ul>
    );

    // Return code will get rendered
    return (
      <div className={classes.users}>
        {/* this.toggleUsersHandler needs bind(this) because else the first "this"
      will refer to the parent i.e the button and not the class. So we need
      the bind method */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
export default Users;
