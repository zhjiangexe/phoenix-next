import Stories from "./stories"
import Feed from "./Feed"
import styled from 'styled-components'

const Page = styled.div`
  padding-top: 30px;
  margin: 0 auto;
  max-width: 614px;
  width: 100%;
`
const StoryTray = styled.div`
  margin-bottom: 24px;
  padding: 16px 0;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  border-radius: 3px;
`

export default function PostPage() {
  return <Page>
    <StoryTray>
      <Stories/>
    </StoryTray>
    <Feed/>
  </Page>
}
