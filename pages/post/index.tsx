import Stories from "./stories"
import Feed from "./Feed"
import styled from 'styled-components'

const Index = styled.div`
    margin: 0 auto;
    max-width: 614px;
    width: 100%;
`
const StoryTray = styled.div`
  margin-bottom: 50px;
  padding: 10px;
  border: 1px solid red;
`

export default function PostIndex() {
    return <Index>
        <StoryTray>
            <Stories/>
        </StoryTray>
        <Feed/>
    </Index>
}
