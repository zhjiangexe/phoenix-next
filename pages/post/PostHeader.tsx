import Image from "next/image"
import styled from "styled-components"

const Header = styled.div`
  display: flex;
`
export default function PostHeader({user, location, id, code}: any) {
  return <Header>
    <div>
      <span>
        <Image src={user.profile_pic_url} width={32} height={32}/>
      </span>
      <span>
        <div>{user.username}</div>
        <div>{location?.name}</div>
      </span>
    </div>
    <div>
      <button onClick={() => {
        console.log(code)
        console.log(id)
      }}>
        ...
      </button>
    </div>
  </Header>
}