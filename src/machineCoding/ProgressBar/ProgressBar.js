import React from "react";
import styled from "styled-components";

const ProgressBar = ({ precenatge = 71 }) => {
  const BarConatiner = styled.div`
    background-color: white;
    color: black;
    padding: 10px;
    border: 1px solid black;
    border-radius: 100px;
  `;

  const LabelStyel = styled.label`
    display: flex;
    width: ${precenatge}%;
    min-width: 20px;
    justify-content: center;
    background-color: green;
    border-radius: 100px;
    text-align: center;
  `;

  return (
    <>
      <BarConatiner>
        <LabelStyel>{precenatge} %</LabelStyel>
      </BarConatiner>
    </>
  );
};

export default ProgressBar;
