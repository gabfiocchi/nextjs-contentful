import Link from 'next/link';

const Contact = () => {
    return (
        <ul>
            {/* {posts.map((post) => (
                <li>{post.title}</li>
            ))} */}
            <li>
                <Link href="/price">
                    <a>Price</a>
                </Link>
            </li>
        </ul>
    )
}
export default Contact;
