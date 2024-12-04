import Filter from "./Filter";
import Card from "./Card";
import { posts } from "../data/posts";

const tagsList = [];
posts.map((post, i) => {
  post.tags.map((tag) => {
    if (!tagsList.includes(tag)) tagsList.push(tag);
  });
});
console.log(tagsList);

export default function Main() {
  return (
    <>
      <main>
        <Filter tagsList={tagsList} />
        <div className="card-container">
          {posts
            .filter((post) => post.published)
            .map((post) => (
              <Card
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                tags={post.tags}
              />
            ))}
        </div>
      </main>
    </>
  );
}
