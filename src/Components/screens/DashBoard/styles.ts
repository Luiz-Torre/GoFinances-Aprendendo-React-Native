import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;

    background-color: ${({theme }) => theme.colors.backgruound};

`;

export const Title = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.title};
`;
