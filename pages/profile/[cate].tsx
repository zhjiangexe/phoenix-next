import Image from "next/image"
import {useQuery} from 'react-query'

type Post = {
    pic: string
    likes?: number
}

export default function Cate({type}: any) {
    const {isLoading, isError, data, error} = useQuery('posts', () => {
        return fetch('http://localhost:3000/api/posts', {method: 'get'})
            .then((res) => {
                return res.json()
            })
    })

    const chunk = (array: Array<any>, chunk: number): Array<Array<any>> => {
        let result = []
        for (let i = 0; i < array.length; i += chunk) {
            result.push(array.slice(i, i + chunk))
        }
        return result
    }

    const getResult = () => {
        switch (type) {
            case undefined:
                return 'normal'
            case 'video':
                return 'video'
            case 'saved':
                return 'saved'
            case 'tagged':
                return 'tagged'
        }
    }
    const result = getResult()

    const chunk1 = data ? chunk(data, 3) : undefined
    console.log(chunk1)
    return <div>
        {
            isLoading ?
                <div>loading</div>
                : chunk1?.map((list: Array<Post>, index: number) => {
                    return <div className="chat" key={index}>
                        {
                            list.map((post: Post, j: number) => <div key={j}>
                                    {/*<Image src={post.} width="250" height="250"/>*/}
                                </div>
                            )
                        }
                    </div>
                })
        }
    </div>
}