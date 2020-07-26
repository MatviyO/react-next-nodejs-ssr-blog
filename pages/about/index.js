import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function About() {
    const linkCLickHandler = () => {
        Router.push('/')

    }
    return (
        <MainLayout title={'About page'}>
            <h1>About page</h1>
            <button onClick={linkCLickHandler}>GO back to home</button>
            <button onClick={() => Router.push('/posts')}>GO to posts</button>
        </MainLayout>
    )
}
