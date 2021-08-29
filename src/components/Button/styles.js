import styled from 'styled-components/native'

export const Btn = styled.TouchableOpacity ` 
  width: 80%;
  border-radius: 3px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-width: 2px;
  border-color: #3483FA;
  background-color: ${({ bgColor }) => bgColor === 'outlined' ? '#FFF' : '#3483FA'};
`

export const BtnText = styled.Text`
  color: ${({ bgColor }) => bgColor === 'outlined' ? '#3483FA' : '#FFF'};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`