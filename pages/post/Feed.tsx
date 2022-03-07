import Image from "next/image"
import {useQuery} from "react-query"
import styled from "styled-components"
import {FiSend} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import {RiBookmarkLine, RiChat1Line} from "react-icons/ri"
import {useTranslation, i18n} from "next-i18next"
import dayjs from "dayjs"
import FeedHeader from "@/pages/post/PostHeader"
import PostMedia from "@/pages/post/PostMedia"

const Container = styled.div`
  max-width: 614px;
`
const FeedItem = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 24px;
`
const Func = styled.div`

`
const LikeCount = styled.div`
  font-weight: 600;
  font-size: 14px;
  padding-left: 16px;
  padding-right: 16px;
`
const Comments = styled.div`
  font-size: 14px;
  padding-left: 16px;
  padding-right: 16px;
`
const ViewAllComment = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 4px;
`
const PostTime = styled.div`
  font-size: 12px;
  color: #8e8e8e;
  padding-left: 16px;
  padding-right: 16px;
`
export default function Feed() {
  i18n?.reloadResources()
  const {t} = useTranslation()
  const {isLoading, isError, data, error} = useQuery('posts', () => {
    return fetch('http://localhost:3000/api/posts', {method: 'get'})
    .then((res) => {
      return res.json()
    })
  })
  return <Container>
    {
      data?.items.map((post: any, index: number) =>
        <FeedItem key={index}>
          <FeedHeader user={post.user} id={post.id} code={post.code} location={post.location}/>
          <PostMedia post={post}/>
          <div>
            <AiOutlineHeart size="28"/>
            <RiChat1Line size="28"/>
            <FiSend size="28"/>
            <RiBookmarkLine size="28"/>
          </div>
          <Func>
            <LikeCount>
              {post.like_count} {t('countOfLike')}
            </LikeCount>
            <Comments>
              {post.caption.user.username} {post.caption.text}
            </Comments>
            <ViewAllComment>
              {t('viewAllComments', {count: post.comment_count})}
            </ViewAllComment>
            <PostTime>
              {dayjs(post.caption.created_at * 1000).format('YYYY/MM/DD HH:mm')}
            </PostTime>
            <div>
              <input type="text" placeholder={"留言"}/>
              <button>發布</button>
            </div>
          </Func>
        </FeedItem>
      )
    }
  </Container>
}