import styled from "styled-components/native";

export const Container = styled.SafeAreaView ` 
  flex: 1;
`
export const TextResults = styled.Text ` 
  margin: 20px 10px;
`

export const Picture = styled.Image ` 
  width: 80px;
  height: 80px;
  margin-right: 30px;
`

export const Item = styled.TouchableOpacity ` 
  padding: 20px;
  margin: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #CDCDCD;
  flex-direction: row;
  align-items: center;
`
export const ItemText = styled.Text `
  font-size: 16px;
`

export const ItemSubdivision = styled.Text ` 
  font-size: 10px;
`

export const ItemSubDetach = styled.Text ` 
  font-size: 12px;
  color: #00a650;
`