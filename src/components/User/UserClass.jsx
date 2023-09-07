import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default",
        location: "Default",
        avatar_url: "https://Dummy.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nishisurti2608");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
