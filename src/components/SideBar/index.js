import {Link} from 'react-router-dom'
import {FaTruck} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {IoMdCalculator} from 'react-icons/io'
import {RiLogoutCircleFill} from 'react-icons/ri'
import {
  SideContainer,
  UnorderedList,
  ListElement,
  ListItem,
} from '../Home/styledComponents'
import './index.css'

const SideBarContent = [
  {
    id: 0,
    icon: <FaTruck />,
    title: 'MY MOVES',
    link: '/',
  },
  {id: 1, icon: <CgProfile />, title: 'MY PROFILE', link: 'profile'},
  {id: 2, icon: <IoMdCalculator />, title: 'GET QUOTE', link: 'quote'},
  {
    id: 3,
    icon: <RiLogoutCircleFill />,
    title: 'LOGOUT',
    link: '/logout',
  },
]

const SideBar = () => (
  <SideContainer margin={20} height={80} width={20}>
    <nav>
      <UnorderedList>
        {SideBarContent.map(eachContent => (
          <Link className="link-style" to={eachContent.link}>
            <ListElement key={eachContent.id}>
              {eachContent.icon}
              <ListItem className="sidebar-title">{eachContent.title}</ListItem>
            </ListElement>
          </Link>
        ))}
      </UnorderedList>
    </nav>
  </SideContainer>
)

export default SideBar
