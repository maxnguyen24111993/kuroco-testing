import axios from "axios"
import parse from "html-react-parser"
import Image from "next/image"

// posts will be populated at build time by getStaticProps()
export default function Blog({ data }: { data: any }) {
  console.log(data)
  return (
    <ul>
      {data.map((post: any) => (
        <li key={post.topics_id}>
          <p>{post.subject}</p>
          <div>{parse(post.ext_col_02)}</div>
          <figure>
            <Image src={post.ext_col_01.url} width="400" height="300" alt="" />
          </figure>
        </li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.get(
    "https://bita-global-dining.g3.kuroco.app/rcms-api/1/blog"
  )
  const data = res.data

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: data.list,
    },
  }
}
