export default function CommentList({ comment }) {
  return (
    <div
      style={{
        textAlign: "left",
      }}
      className="card"
    >
      <p>{" "}<span style={{color: "yellowgreen",font: "bold",fontSize: "20px",}}>Username:</span>{" "}{comment.name}</p>


      <p><span style={{color: "Blue", font: "bold", fontSize: "20px",}}>Email:</span>{" "}{comment.email}</p>


      <p><span style={{color: "Red", font: "bold", fontSize: "20px",}}>Comment:</span>{" "}{comment.body}</p>


     
    </div>
  );
}
