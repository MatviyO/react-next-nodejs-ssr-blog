import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import {IPost} from "../../interfaces/post";

interface PostPageProps {
    post: IPost
}

export default function Post({post: serverPost}: PostPageProps) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()
    useEffect(() => {
       async function load() {
           const response = await fetch(`${process.env.API_URL}/post/${router.query.id}`)
           const data = await response.json()
           setPost(data)
       }
       if(!serverPost) {
           load()
       }
    }, [])
    if (!post) {
        return <MainLayout><p>Loading...</p></MainLayout>
    }
    return (
        <MainLayout>
            <h1>Post {post.title}</h1>
            <hr/>
            <p>post.body</p>
            <Link href={'/posts'}><a >Back to posts</a></Link>
        </MainLayout>
    )
}
interface PostNExtPageContext {
    query: {
        id: string
    }
}
export async function getServerSideProps({query, req}: NextPageContext) {
    if (!req) {
        return {post: null}
    }
    const response = await fetch(`http://localhost:4200/post/${query.id}`)
    const post: IPost = await response.json()
    return { props: {post} }
}
