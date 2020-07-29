import React from "react";
import { connect } from "react-redux";

function AlgorithmInfo({ color }) {
  return (
    <>
      <h2 style={{ color }}>About the Algorithm:</h2>
      <p>Here is info</p>
    </>
  );
}
const mapStateToProps = ({ color: { color }, props }) => ({ ...props, color });
export default connect(mapStateToProps, null)(AlgorithmInfo);
