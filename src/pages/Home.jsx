import React from "react";
import { connect } from "react-redux";
import { changeInput, getUserRepo } from "../store/action/githubAction";
import Result from "../components/Result";
class Home extends React.Component {
  componentDidMount = async () => {
    this.props.getUserRepo();
    console.log("home", this.props.users);
  };
  getUser = async () => {
    this.props.getUserRepo();
    console.log("get user", this.props.users);
  };
  render() {
    console.warn("alalalalala");
    return (
      <div className="">
        <div className="bg-blue-300 text-gray-700 text-2xl font-bold text-left pl-10 py-5">
          Cari GitHub
        </div>

        {/* search bar */}
        <div className="mx-10">
          <form
            onSubmit={(element) => element.preventDefault()}
            className="form"
          >
            <input
              type="text"
              name={this.props.keyword}
              placeholder="Search Users"
              className="border px-3 rounded-lg w-full my-5 py-2"
              value={this.props.keyword}
              onChange={(el) => this.props.changeInput(el)}
            />
          </form>
        </div>

        {/* result */}
        <div className="lg:grid lg:grid-cols-3 gap-5 mx-10 my-10">
          {this.props.users.map((user, index) => (
            <div
              key={index}
              className={`text-center border rounded-lg  ${
                user.owner.login === "undefined" ? "hidden" : "inline"
              }`}
            >
              <Result
                image={user.owner.avatar_url}
                user={user.owner.login}
                repo={user.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.github.users,
    keyword: state.github.keyword,
  };
};
const mapDispatchToProps = {
  changeInput: (el) => changeInput(el),
  getUserRepo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
