import styled from 'styled-components/native/';

export const Container = styled.View`
    flex: 1;
    background-color: #FCEEC9;
    padding: 16px;
    padding-top: 64px;
    gap: 12px;
`;

export const TopContainer = styled.View`
    margin: 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-auto-flow: 0px;

`;

export const TopButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    
`;

export const TopLeftText = styled.Text`
    color: #007AFF;
    font-size: 16px;

    
`;

export const TopCenterText = styled.Text`
    color: #000;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    justify-content: center;
    flex-shrink: 0;

    
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const TextAddTask = styled.Text`
    color: #3C3C43;
    opacity: 0.6;
    font-size: 13px;
    letter-spacing: 0px;
`;

export const TitlesArea = styled.View`
    flex-direction: column;
    gap: 2px;
`;

export const TitleContainer = styled.View`
    flex-direction: row;
    width: 350px;
    height: 44px;
    background-color: #FFF;
    border-radius: 4px;
    align-items: center;
   

`;

export const TitleLabel = styled.Text`
    color: #000;
    font-size: 17px;
    font-weight: 500;
    margin-left: 16px;

`;

export const TitlesInput = styled.TextInput`
    flex: 1;
    padding-left: 16px;
    font-size: 17px;
    line-height: 22px;
    border-left: 1px solid #007AFF;
`;

export const StatusContainer = styled.View`
    flex-direction: row;
`;

export const StatusCard = styled.View`
    background-color: #304163;
    border-radius: 4px;
    flex-direction: row;
    gap: 16px;
    flex: 1;
`;

export const StatusIcon = styled.View`
    background-color: #c88a1a;
    border-radius: 4px;
    padding: 16px;

`;

export const StatusTextContainer = styled.View`
    padding: 16px;
`;

export const StatusText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const StatusButtonDel = styled.TouchableOpacity`
    background-color: #F22424;
    border-radius: 4px;
    padding: 16px;
`;