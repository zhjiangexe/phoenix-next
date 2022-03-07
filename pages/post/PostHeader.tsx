import Image from "next/image"
import styled from "styled-components"

const Header = styled.div`
  display: flex;
`
export default function PostHeader({user, location}: any) {
  return <Header>
    <div>
      <span>
        <Image src={user?.profile_pic_url} width={32} height={32}/>
      </span>
      <span>
        <div>{user?.username}</div>
        <div>{location?.name}</div>
      </span>
    </div>
    <div>
      <button onClick={() => {
      }}>
        ...
      </button>
    </div>
  </Header>
}