import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>back to home</a>
                </Link>
            </h2>
        </>
    )
}