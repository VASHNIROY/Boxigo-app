import {Component} from 'react'
import Loader from 'react-loader-spinner'

import SideBar from '../SideBar'
import EachMove from '../EachMove'
import {SideContainer, HomeContainer, LoaderContainer} from './styledComponents'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {content: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = 'http://test.api.boxigo.in/sample-data/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = data.Customer_Estimate_Flow.map(eachItem => ({
        distance: eachItem.distance,
        dateAndTime: eachItem.moving_on,
        requestId: eachItem.estimate_id,
        from: eachItem.moving_from,
        to: eachItem.moving_to,
        propertSize: eachItem.property_size,
        items: eachItem.total_items,
      }))
      console.log(updatedData)
      this.setState({
        content: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.inProgress})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccess = () => {
    const {content} = this.state
    document.title = 'Boxigo App'
    return (
      <>
        {content.map(eachOne => (
          <EachMove key={eachOne.requestId} data={eachOne} />
        ))}
      </>
    )
  }

  renderApiData = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccess()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeContainer>
        <SideBar />
        <SideContainer margin={10} height={80} width={80}>
          <h1>MY MOVES</h1>
          {this.renderApiData()}
        </SideContainer>
      </HomeContainer>
    )
  }
}

export default Home
