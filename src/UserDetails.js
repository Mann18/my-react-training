import React, { Component } from "react";
import "./UserDetails.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: JSON.parse(localStorage.getItem("userDetails")) || [],
      name: "",
      gender: "",
      age: "",
      editingIndex: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addUser = () => {
    const { name, gender, age, userDetails, editingIndex } = this.state;

    if (editingIndex !== null) {
      userDetails[editingIndex] = { name, gender, age };
    } else {
      userDetails.push({ name, gender, age });
    }

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    this.setState({
      userDetails,
      name: "",
      gender: "",
      age: "",
      editingIndex: null,
    });
  };

  editUser = (index) => {
    const { userDetails } = this.state;
    const { name, gender, age } = userDetails[index];

    this.setState({ name, gender, age, editingIndex: index });
  };

  deleteUser = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      const { userDetails } = this.state;
      userDetails.splice(index, 1);

      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      this.setState({
        userDetails,
        name: "",
        gender: "",
        age: "",
        editingIndex: null,
      });
    }
  };

  render() {
    const { name, gender, age, userDetails } = this.state;

    return (
      <>
        <Navigation />
        <div className="user-details-container">
          <h2>User Details</h2>
          <form className="user-form">
            <table>
              <tr>
                <td>
                  <label htmlFor="name">Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="input"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender:</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={this.handleChange}
                    required
                  />

                  <label htmlFor="gender">Male</label>

                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={this.handleChange}
                    required
                  />

                  <label htmlFor="gender">Female</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="age">Age:</label>
                </td>
                <td>
                  <input
                    type="number"
                    className="input"
                    id="age"
                    value={age}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
            </table>
            <button type="button" onClick={this.addUser}>
              {this.state.editingIndex !== null ? "Update User" : "Add User"}
            </button>
          </form>
          <br />
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => this.editUser(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => this.deleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </>
    );
  }
}

export default UserDetails;
