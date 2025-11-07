import { use } from "react"
import CommentList from "./commentList";

export default function Comments({useComments}){
    const useComment = use(useComments);
    return(
        <div className="card">
            <h2 style={{
                color: '#c51fdfff'
            }}>User Comments Show: {useComment.length}</h2>

            {
                useComment.map(comment => <CommentList comment = {comment}></CommentList>)
            }
        </div>
    )
}