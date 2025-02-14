import { CommentShape } from "../types"

const Commentary = ({by, content}:CommentShape) => {
  
    return (
        <div>
            <p>{by.regNo}</p>
            <p>{by.username}</p>
            <p>{content}</p>
        </div>
    )
}

export default Commentary
