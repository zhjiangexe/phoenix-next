import styled from "styled-components"
import Image from "next/image"

const Media = styled.div`
  height: 100%;
  position: relative;
`
export default function PostMedia({post}: any) {
  return <Media>
    {
      post?.media_type === 1
        ? <Image src={post.image_versions2.candidates[0].url}
                 height="640 "
                 width="640w"
                 layout="responsive"
        />
        : post?.media_type
    }
  </Media>
}
