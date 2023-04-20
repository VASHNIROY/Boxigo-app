import {Component} from 'react'
import {FaArrowCircleRight, FaSitemap} from 'react-icons/fa'
import {AiFillHome, AiOutlineDown, AiFillWarning} from 'react-icons/ai'
import {GiPathDistance} from 'react-icons/gi'
import {FcCalendar} from 'react-icons/fc'
import {ImCheckboxChecked} from 'react-icons/im'

import {SideContainer, HomeContainer} from '../Home/styledComponents'
import {
  EachRowContainer,
  FromToContianer,
  IconContainer,
  ButtonElement,
  Boldheading,
} from '../EachMove/styledComponents'
import {
  BlackButtons,
  ExistingNewContainers,
  RedsideHeading,
  InventoryContainer,
} from './styledComponents'
import './index.css'

/*  const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}   */

class MoveDetails extends Component {
  state = {content: [], inventory: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'http://test.api.boxigo.in/sample-data/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const singleData = data.Customer_Estimate_Flow[0]
      console.log(singleData)
      const updatedData = {
        distance: singleData.distance,
        dateAndTime: singleData.moving_on,
        requestId: singleData.estimate_id,
        from: singleData.moving_from,
        to: singleData.moving_to,
        propertSize: singleData.property_size,
        items: singleData.total_items,
        oldFloorNo: singleData.old_floor_no,
        oldLift: singleData.old_elevator_availability,
        olddistanceFromElevator: singleData.new_parking_distance,
        newFloorNo: singleData.new_floor_no,
        newLift: singleData.new_elevator_availability,
        newdistanceFromElevator: singleData.new_parking_distance,
      }

      const InventoryData = data.Customer_Estimate_Flow[0].items.inventory.map(
        eachItem => ({
          names: eachItem.displayName,
          number: eachItem.category.length,
        }),
      )
      this.setState({
        content: updatedData,
        inventory: InventoryData,
      })
    }
  }

  render() {
    const {content, inventory} = this.state
    const {
      from,
      to,
      requestId,
      propertSize,
      items,
      distance,
      dateAndTime,
      oldFloorNo,
      oldLift,
      olddistanceFromElevator,
      newFloorNo,
      newLift,
      newdistanceFromElevator,
    } = content
    console.log(inventory)
    return (
      <HomeContainer margin={30} justifyContent="center">
        <SideContainer width={80} height={80}>
          <EachRowContainer>
            <FromToContianer>
              <Boldheading>From</Boldheading>
              <p>{from}</p>
            </FromToContianer>
            <FaArrowCircleRight />
            <FromToContianer>
              <Boldheading>To</Boldheading>
              <p>{to}</p>
            </FromToContianer>
            <FromToContianer>
              <Boldheading>Request#</Boldheading>
              <p>{requestId}</p>
            </FromToContianer>
          </EachRowContainer>
          <EachRowContainer>
            <IconContainer>
              <AiFillHome className="icon" />
              <p>{propertSize}</p>
            </IconContainer>
            <IconContainer>
              <FaSitemap className="icon" />
              <p>{items}</p>
            </IconContainer>
            <IconContainer>
              <GiPathDistance className="icon" />
              <p>{distance}</p>
            </IconContainer>
            <IconContainer>
              <FcCalendar className="icon" />
              <p>{dateAndTime}</p>
            </IconContainer>
            <IconContainer>
              <ImCheckboxChecked className="icon" />
              <p>Flexible</p>
            </IconContainer>
            <IconContainer>
              <ButtonElement color="#ec5541" bgColor="white">
                View Move Details
              </ButtonElement>
              <ButtonElement color="white" bgColor="#ec5541">
                Quotes Awaiting
              </ButtonElement>
            </IconContainer>
          </EachRowContainer>
          <IconContainer>
            <IconContainer>
              <AiFillWarning className="icon" />
              <p>
                <span className="disclaimar">Disclaimar:</span> Please update
                your move date before two days of updating
              </p>
            </IconContainer>
          </IconContainer>
          <EachRowContainer className="additional-container">
            <sideHeadings>Additional Information</sideHeadings>
            <BlackButtons>Edit Additional Info</BlackButtons>
          </EachRowContainer>
          <p>Test Data</p>
          <EachRowContainer className="additional-container">
            <sideHeadings>House Details</sideHeadings>
            <BlackButtons>Edit House Details</BlackButtons>
          </EachRowContainer>
          <ExistingNewContainers direction="column">
            <RedsideHeading>Existing House Details</RedsideHeading>
            <ExistingNewContainers>
              <ExistingNewContainers margin={250} direction="column">
                <h4>Floor No.</h4>
                <p>{oldFloorNo}</p>
              </ExistingNewContainers>
              <ExistingNewContainers margin={250} direction="column">
                <h4>Elevator</h4>
                <p>{oldLift}</p>
              </ExistingNewContainers>
              <ExistingNewContainers margin={250} direction="column">
                <h4>Distance From Elevator/Staircase to truck</h4>
                <p>{olddistanceFromElevator}</p>
              </ExistingNewContainers>
            </ExistingNewContainers>
          </ExistingNewContainers>
          <ExistingNewContainers direction="column">
            <RedsideHeading>New House Details</RedsideHeading>
            <ExistingNewContainers>
              <ExistingNewContainers margin={250} direction="column">
                <h4>Floor No.</h4>
                <p>{newFloorNo}</p>
              </ExistingNewContainers>
              <ExistingNewContainers margin={250} direction="column">
                <h4>Elevator</h4>
                <p>{newLift}</p>
              </ExistingNewContainers>
              <ExistingNewContainers margin={250} direction="column">
                <h4>Distance From Elevator/Staircase to truck</h4>
                <p>{newdistanceFromElevator}</p>
              </ExistingNewContainers>
            </ExistingNewContainers>
          </ExistingNewContainers>
          <EachRowContainer className="additional-container">
            <sideHeadings className="disclaimar">
              Inventory Details
            </sideHeadings>
            <BlackButtons>Edit Inventory</BlackButtons>
          </EachRowContainer>
          <ExistingNewContainers>
            <div>
              {inventory.map(eachOne => (
                <InventoryContainer>
                  <div className="inventory-inner-container">
                    <h2>{eachOne.names}</h2>
                    <div className="number">{eachOne.number}</div>
                  </div>
                  <AiOutlineDown className="cap-icon" />
                </InventoryContainer>
              ))}
            </div>
          </ExistingNewContainers>
        </SideContainer>
      </HomeContainer>
    )
  }
}

export default MoveDetails
