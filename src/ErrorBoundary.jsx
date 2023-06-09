import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error occured", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was some error <Link to="/">Click here to go to home</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

//error boundaryyyyyyyyy
