import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>Title: {post.title}</h2>
            <p>ID: {post.id}</p>
            <p>Body: {post.body}</p>
            <p>User ID: {post.userId}</p>
          </li>
        ))}
      </ul>
      <Link href="/">На главную</Link>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;