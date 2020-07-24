import Link from "next/link";

export function MainLayout({children}) {
    return (
        <>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>Abount</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>

            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                       nav {
                       position: fix;
                       height: 60px;
                       left: 0;
                       top: 0;
                       right: 0;
                       background: darkblue;
                       display: flex;
                       justify-content: space-around;
                       align-items: center
                       
                        }
                        nav a {
                            color: #fff;
                            text-decoration: none;
                         }
                        main {
                            margin-top: 60px;
                        }
                `}
            </style>
        </>
    )
}
