import { CommentShape } from "../types"
import UserIcon from "./UserIcon"

const Commentary = ({by, content}:CommentShape) => {
  
    return (
        <div className="mt-3 border-2 border-neutral-100 rounded-lg p-2">
            
            <div className="flex gap-1">
                <UserIcon username={by?.username} />

                <div className="text-sm">
                  <p className="font-semibold">{by.firstName+by.otherName}</p>
                  <p className="font-medium text-[#9C9C9C]  -mt-[5px]">
                    @{by?.firstName}
                  </p>
                </div>
              </div>
            <p>{content}</p>
        </div>
    )
}

export default Commentary
