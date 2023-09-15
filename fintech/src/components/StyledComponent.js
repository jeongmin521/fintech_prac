import React from "react";
import styled from "styled-components";

const BodyBlock = styled.div`
    font-size: 30px;
    color: red;
    color: rgb(255, 255, 0);
    background-color: rgb(247, 158, 113);
    text-shadow: rgb: (255, 244, 0) 4px 3px 0px;
    padding: 30px;
    maring: 10px;
    `;

const StyledComponent = () => {
    return (
        <div>
        <BodyBlock>StyledComponent</BodyBlock>
        </div>
    );
};

export default StyledComponent;