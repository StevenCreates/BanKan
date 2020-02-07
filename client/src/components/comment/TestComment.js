// import React, { Component } from "react";
import React, { Component, useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./Comment.css";

class Zapp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h6>Say something about React</h6>
          <div>
            <CommentForm addComment={this.addComment} />
          </div>

          <div>
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:5000")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
}

export default Zapp;
