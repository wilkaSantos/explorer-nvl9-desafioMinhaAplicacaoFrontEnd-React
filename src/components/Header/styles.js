import styled from 'styled-components';
import themeStyles from '../../styles/themeStyles';

export const ContainerHeader = styled.div`
    width: 100%;
    padding: 24px 123px;

    display: flex;
    align-items: center;
    gap: 64px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme })=> themeStyles.colors.background_gray_300};

    > h1{
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme })=> themeStyles.colors.pink};
    }

    > section{
        width: 198px;
        height: 68px;

        display: flex;
        align-items: center;
        gap: 9px;
        

        img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div{
            width: 125px;

            display: flex;
            flex-direction: column;
            align-items: flex-end;

            h2{
                font-size: 14px;
                color: ${({ theme })=> themeStyles.colors.white}
            }

            a{
                font-size: 14px;
                color: ${({ theme })=> themeStyles.colors.background_gray};
            }
        }
    }
`;