export default function PostDetails({ post }) {
  const { title, body } = post;
  return (
    <div
      className="card"
      style={{
        textAlign: "left",
      }}
    >
      <h3
        style={{
          color: "#747bff",
        }}
      >
        Post Title: {title}
      </h3>
      <p>Post: {body}</p>
    </div>
  );
}
