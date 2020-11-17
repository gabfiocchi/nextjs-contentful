import Link from 'next/link';

const Location = () => {
    return (
        <ul>
            {/* {posts.map((post) => (
                <li>{post.title}</li>
            ))} */}
            <li>
                <Link href="/about-you/name">
                    <a>Name</a>
                </Link>
            </li>
        </ul>
    )
};

export default Location;
