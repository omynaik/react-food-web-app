import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-class">
        <h2>Name: Omkar Naik</h2>
        <h3>Software Developer living in Pune</h3>
        <h3>Age: 22</h3>
      </div>
    );
  }
}

export default UserClass;
