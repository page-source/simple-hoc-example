import React from "react";
import "./styles.css";

/** myHoc capitalises the name prop */
function myHoc(MyComponent) {
  class WrappedComponent extends React.Component {
    render() {
      const name = this.props.name.toUpperCase();

      return <MyComponent name={name} />;
    }
  }
  return WrappedComponent;
}

const Hello = ({ name }) => {
  return <h2 className="center">I am {name}</h2>;
};

const WrappedHello = myHoc(Hello);

export default function App() {
  return (
    <>
      <Hello name="not Wrapped With Hoc" />
      <WrappedHello name="wrapped with hoc" />
    </>
  );
}
