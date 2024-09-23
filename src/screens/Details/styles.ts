import styled from 'styled-components/native/';

export const Container = styled.View`
    flex: 1;
    background-color: #FCEEC9;
    padding: 16px;
    padding-top: 64px;
    gap: 16px;
`;

export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const TopButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex: 0;
`;

export const TopLeftText = styled.Text`
    color: #007AFF;
    font-size: 16px;
  
`;

export const TopCenterText = styled.Text`
    color: #000;
    font-size: 17px;
    font-weight: 600;
    flex: 1;
    text-align: center;
    
`;

export const TitleContainer = styled.View`
    background-color: #304163;
    border-radius: 4px;
    padding: 8px 16px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const TextStatus = styled.Text`
    color: #000;
    font-size: 16px;
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