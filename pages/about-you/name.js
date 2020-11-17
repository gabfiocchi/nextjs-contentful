import Link from 'next/link';

const Contact = () => {
    return (
        <ul>
            {/* {posts.map((post) => (
                <li>{post.title}</li>
            ))} */}
            <li>
                <Link href="/about-you/contact">
                    <a>Contacto</a>
                </Link>
            </li>
        </ul>
    )
}

export default Contact;