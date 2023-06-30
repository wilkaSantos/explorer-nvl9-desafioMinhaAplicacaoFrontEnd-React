import styled from "styled-components";
import themeStyles from "../../styles/themeStyles";

export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;

    background-color: ${({theme, isNew})=> isNew ? "transparent" : themeStyles.colors.background_800};
    color: ${({ theme })=> themeStyles.colors.background_gray_300};

    border: ${({ theme, isNew })=> isNew ? `1px dashed ${themeStyles.colors.background_gray}` : 'none'};

    > button {
        border: none;
        background: none;
    }

    .button-active{
        color: ${({ theme })=> themeStyles.colors.pink};
    }

    .button-desabled{
        color: ${({ theme })=> themeStyles.colors.pink};
    }

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        border: none;

        color: ${({ theme })=> themeStyles.colors.white};
        background: transparent;

        &::placeholder{
            color: ${({ theme })=> themeStyles.colors.background_gray_300};
        }
    }
`;