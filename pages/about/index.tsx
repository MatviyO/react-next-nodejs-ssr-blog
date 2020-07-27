import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function About({title}) {
    const linkCLickHandler = () => {
        Router.push('/')

    }
    return (
        <MainLayout title={'About page'}>
            <h1>{title}</h1>
            <button onClick={linkCLickHandler}>GO back to home</button>
            <button onClick={() => Router.push('/posts')}>GO to posts</button>
        </MainLayout>
    )
}
About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data = await response.json();
    return {
        title: data.title
    }

}
