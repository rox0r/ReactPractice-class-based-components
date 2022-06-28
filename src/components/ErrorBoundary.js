import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErr: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasErr: true });
  }

  render() {
    if (this.state.hasErr) {
      return <p>Something Went Wrong!</p>;
    }
    return this.props.children;
  }
}
