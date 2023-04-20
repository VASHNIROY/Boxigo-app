import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: ${prop => prop.alignItems};
  justify-content: ${prop => prop.justifyContent};
  margin: ${props => props.margin}px;
`
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: ${props => props.height}vh;
  width: ${props => props.width}vw;
  position: sticky;
  margin: ${props => props.margin}px;
`
export const UnorderedList = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
`
export const ListElement = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-left: 20px;
`
export const ListItem = styled.p`
  margin-left: 20px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
