import {useQuery} from "react-query"
import styled from "styled-components"

const StoriesLayout = styled.div`
  //position: relative;
  //display: flex;
  //flex-direction: column;
  height: 85px;
  outline: 0;
  overflow-y: hidden;
`
const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`
const StoryTrayItem = styled.div`
  position: absolute;
  //transform: translateX(100px);
  width: 80px;
  height: 122px;
  padding: 0 4px;
  display: flex;
  top: 2px;
  flex-direction: column;
  align-items: center;
`
const Username = styled.div`
  //position: relative;
  letter-spacing: .01em;
  max-width: 74px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
`
const UserWrapper = styled.div`
  margin-top: 4px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  overflow: hidden;
`
const UserImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`
const RollLeft = styled.button`
  cursor: pointer;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: 0 0;
  border: 0;
  display: inline-block;
`
const RollRight = styled.button`
  cursor: pointer;
  position: absolute;
  padding: 0;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: 0 0;
  border: 0;
  justify-self: center;
  margin: 0;
  appearance: auto;
  -webkit-writing-mode: horizontal-tb !important;
  display: inline-block;
  box-sizing: border-box;
`
const BtnLeftImg = styled.div`
  background-repeat: no-repeat;
  background-position: -379px -128px;
  height: 45px;
  width: 45px;
  background-image: url(/image/img.png);
`
const BtnRightImg = styled.div`
  background-repeat: no-repeat;
  background-position: -244px -107px;
  height: 45px;
  width: 45px;
  background-image: url(/image/img.png);
`
const ImgCircle = styled.div`
  border-radius: 50%;
  border: 2px solid orange;
  width: 56px;
  height: 56px;
`
export default function Stories() {
  const {isLoading, isError, data, error} = useQuery('reels', () => {
    return fetch('http://localhost:3000/api/stories', {method: 'get'})
    .then((res) => {
      return res.json()
    })
  })
  return <StoriesLayout>
    <div style={{height: '100%', width: '100%'}}>
      <Row>
        {
          data?.map((story: any, index: number) =>
            <StoryTrayItem key={story.id} style={{transform: `translateX(${10+index*80}px)`}} onClick={() => {
            }}>
              <UserWrapper>
                {/*<ImgCircle/>*/}
                <UserImg src={story.profile_pic_url}/>
              </UserWrapper>
              <Username> {story.username} </Username>
            </StoryTrayItem>
          )
        }
      </Row>
    </div>
    <RollLeft>
      <BtnLeftImg/>
    </RollLeft>
    <RollRight>
      <BtnRightImg/>
    </RollRight>
  </StoriesLayout>
}
