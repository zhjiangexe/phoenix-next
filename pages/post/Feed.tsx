import Image from "next/image"
import {useQuery} from "react-query"
import styled from "styled-components"
import {FiSend} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import {RiBookmarkLine, RiChat1Line} from "react-icons/ri"
import {useTranslation, i18n} from "next-i18next"
import dayjs from "dayjs"
import FeedHeader from "@/pages/post/PostHeader"

const Container = styled.div`
  max-width: 614px;
  border: 1px solid gray;
`
const Header = styled.div`
  display: flex;
`
const Media = styled.div`
  height: 100%;
  position: relative;
`
const Func = styled.div`

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
        <div key={index} style={{border: "1px solid gray"}}>
          <FeedHeader user={post.user} id={post.id} code={post.code} location={post.location}/>
          <Media>
            {
              post.media_type === 1
                ? <Image src={post.image_versions2.candidates[0].url}
                         height="640w"
                         width="640w"
                         layout="responsive"
                />
                : post.media_type
            }
          </Media>
          <Func>
            <div>
              <AiOutlineHeart/>
              <RiChat1Line/>
              <FiSend/>
              <RiBookmarkLine/>
            </div>
            <div>
              {post.like_count} {t('countOfLike')}
            </div>
            <div>{post.caption.user.username} {post.caption.text}</div>
            <div>{t('viewAllComments', {count: post.comment_count})}</div>
            <div>{dayjs(post.caption.created_at * 1000).format('YYYY/MM/DD HH:mm')}</div>
            <div>
              <input type="text" placeholder={"留言"}/>
              <button>發布</button>
            </div>
          </Func>
        </div>
      )
    }
  </Container>
}