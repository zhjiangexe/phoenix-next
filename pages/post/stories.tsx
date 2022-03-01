import Image from "next/image"
import {useQuery} from "react-query"
import styled from "styled-components"

export default function Stories() {
    const {isLoading, isError, data, error} = useQuery('reels', () => {
        return fetch('http://localhost:3000/api/stories', {method: 'get'})
            .then((res) => {
                return res.json()
            })
    })
    return <div className="chat">
        <div className="chat">
            {
                data?.map((story: any, index: number) =>
                    <div key={story.id} className="border" onClick={() => {
                        alert("rock")
                    }}>
                        <Image src={story.profile_pic_url} height="56" width={56}/>
                        <div>
                            {story.username}
                        </div>
                    </div>
                )
            }
        </div>
        <button className="relative" disabled={true}>R</button>
        <button className="float-right">W</button>
    </div>
}
