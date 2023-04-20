import styled from 'styled-components'

export const sideHeadings = styled.h3`
  font-family: 'ROBOTO';
`
export const BlackButtons = styled.button`
  color: white;
  width: 140px;
  height: 40px;
  background-color: black;
  border-radius: 6px;
`

export const ExistingNewContainers = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  line-height: 0;
  margin-right: ${props => props.margin}px;
`

export const RedsideHeading = styled.h3`
  color: red;
  font-family: 'ROBOTO';
`
export const InventoryContainer = styled.div`
  width: 455%;
  background-color: #e5e5e5;
  height: 40px;
  padding: 2px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: #ec5541;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
