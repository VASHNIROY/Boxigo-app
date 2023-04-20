import {Link} from 'react-router-dom'

import {FaSitemap} from 'react-icons/fa'
import {AiFillHome, AiOutlineArrowRight, AiFillWarning} from 'react-icons/ai'
import {GiPathDistance} from 'react-icons/gi'
import {FcCalendar} from 'react-icons/fc'
import {ImCheckboxChecked} from 'react-icons/im'

import {
  EachRowContainer,
  FromToContianer,
  IconContainer,
  ButtonElement,
  Boldheading,
} from './styledComponents'
import './index.css'

const EachMove = props => {
  const {data} = props
  const {distance, dateAndTime, requestId, from, to, propertSize, items} = data
  return (
    <>
      <EachRowContainer>
        <FromToContianer>
          <Boldheading>From</Boldheading>
          <p>{from}</p>
        </FromToContianer>
        <AiOutlineArrowRight className="right-arrow-icon" />
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
          <Link to="/MoveDetails" eachId={requestId} className="link-style">
            <ButtonElement color="#ec5541" bgColor="white">
              View Move Details
            </ButtonElement>
          </Link>
          <ButtonElement color="white" bgColor="#ec5541">
            Quotes Awaiting
          </ButtonElement>
        </IconContainer>
      </EachRowContainer>
      <EachRowContainer>
        <IconContainer>
          <AiFillWarning className="icon" />
          <p>
            <span className="disclaimar">Disclaimar:</span> Please update your
            move date before two days of updating
          </p>
        </IconContainer>
      </EachRowContainer>
      <hr />
    </>
  )
}

export default EachMove
