import styled from 'styled-components'

export const EachRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0px;
`
export const FromToContianer = styled.div`
  width: 300px;
  margin-right: 0px;
`
export const IconContainer = styled.div`
  display: flex;
`
export const ButtonElement = styled.button`
  border: solid 2px #ec5541;
  color: ${props => props.color};
  border-radius: 6px;
  background-color: ${props => props.bgColor};
  height: 30px;
  margin-right: 10px;
`
export const Boldheading = styled.p`
  font-weight: bold;
`
