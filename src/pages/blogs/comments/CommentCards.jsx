import React from "react";
import commentorIcon from "../../../assets/commentor.png";
import { formatDate } from "../../../utils/formatDate";
import PostAComment from "./PostAComment";
import { useSelector } from "react-redux";

const CommentCards = ({ comments }) => {
  console.log(comments);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="my-6 bg-white p-8">
      <div>
        {comments?.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium">All Comments</h3>
            <div>
              {comments.map((comment, index) => (
                <div key={index} className="mt-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={commentorIcon}
                      alt={comment?.user?.username || "Commentor"}
                      className="h-14"
                    />
                    <div>
                      <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
                        {comment?.user?.username || "Anonymous"}
                      </p>
                      <p className="text-[12px] italic">{formatDate(comment.createdAt)}</p>
                    </div>
                  </div>
                  <div className="text-gray-600 mt-5 border p-8">
                    <p className="md:w-4/5">{comment?.comment || "No comment text available"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-lg font-medium">No comments yet.</div>
        )}
      </div>

      {/* Add comments here */}
      <PostAComment />
    </div>
  );
};

export default CommentCards;
