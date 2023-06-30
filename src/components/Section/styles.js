import styled from "styled-components";
import themeStyles from "../../styles/themeStyles";

export const ContainerSection = styled.section`
    width: 100%;
    padding: 32px;
    
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;

    border-radius: 16px;
    background-color: rgba(255, 133, 155, 0.05);

    > h2{
        color: ${themeStyles.colors.white};
        font-size: 24px;
    }

    > div{
        svg{ 
            color: ${themeStyles.colors.pink};
        }
    }

    > p{
        font-size: 16px;
        text-align: justify;
        
        color: ${themeStyles.colors.background_700};
    }

    .wrappedTags{
        display: flex;
        gap: 8px;
    }
`;