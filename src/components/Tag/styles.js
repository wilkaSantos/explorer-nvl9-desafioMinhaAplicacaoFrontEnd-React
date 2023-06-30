import styled from "styled-components";
import themeStyles from "../../styles/themeStyles";

export const ContainerTag = styled.div`
    margin-top: 15px;
    padding: 5px 15px;
    border-radius: 8px;

    font-size: 12px;
    text-align: center;

    color: ${themeStyles.colors.white};
    background-color: ${themeStyles.colors.black};
`;