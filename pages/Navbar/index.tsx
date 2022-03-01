import Link from "next/link"
import {useRouter} from 'next/router'
import {RiHome2Fill, RiHome2Line} from 'react-icons/ri'
import {FiPlusSquare} from "react-icons/fi"
import {AiOutlineHeart, AiFillHeart, AiFillMessage, AiOutlineMessage} from "react-icons/ai"
import styled from "styled-components"

const NavbarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
`
const Nav = styled.nav`
  padding: 0 20px;
  height: 60px;
  width: 100%;
  max-width: 975px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const UnderNav = styled.div`
  //height: 60px;
`
const LinkList = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
`
const LinkLeft = styled.div`
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 20px;
  }
`
export default function Navbar() {
  const {pathname} = useRouter()
  return <div>
    <NavbarWrapper>
      <Nav>
        <div>
          <div>Phoenix</div>
        </div>
        <div>
          <div>
            <input type="text"/>
          </div>
        </div>
        <LinkList>
          <LinkLeft>
            <Link href="/">
              {pathname === '/' ? <RiHome2Fill/> : <RiHome2Line/>}
            </Link>
          </LinkLeft>
          <LinkLeft>
            <Link href="/chat">
              {
                pathname === '/chat' ? <AiFillMessage/> : <AiOutlineMessage/>

              }
            </Link>
          </LinkLeft>
          <LinkLeft>
            <FiPlusSquare/>
          </LinkLeft>
          <LinkLeft>
            <AiOutlineHeart/>
          </LinkLeft>
          <LinkLeft>
            <Link href="/profile">
              P
            </Link>
          </LinkLeft>
        </LinkList>
      </Nav>
    </NavbarWrapper>
    <UnderNav />
  </div>
}