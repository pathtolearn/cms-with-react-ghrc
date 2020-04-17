import React, { useState, useContext, useEffect } from "react";

import { AppContext } from "../../utilities/context";
import PostComment from "./PostComment";

import { BlogPostCommentsRequest } from "../../CMSService_pb";
import { blogPostServiceClient } from "../../utilities/rpcClients";

const CommentList = ({ bpId }) => {
  const { state } = useContext(AppContext);
  // read the blog post id
  const { user, userType } = state;
  const [comments, setComments] = useState([]);

  const fetchAllBlogPostComments = () => {
    const req = new BlogPostCommentsRequest();
    req.setBpId(bpId);

    blogPostServiceClient.getAllCommentsByBlogPostId(
      req,
      {},
      (err, response) => {
        if (err) console.log("error fetching blog post comments", err);
        else {
          const data = response.toObject();
          const { bpcList } = data;
          setComments(bpcList);
        }
      }
    );
  };

  useEffect(() => {
    // code to run on component mount
    // rpc comments list
    fetchAllBlogPostComments();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <hr />
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>

        {comments.map((c) => (
          <div key={c.bpcr.bpComId} className="comment">
            <a className="avatar">
              <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
            </a>
            <div className="content">
              <a className="author">{c.name}</a>
              <div className="metadata">
                <span className="date">{c.createdTime}</span>
              </div>
              <div className="text">{c.bpcr.comment}</div>
              {/* <div className="actions">
                <a className="reply">Reply</a>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {userType === "USER" && (
        <PostComment
          bpId={bpId}
          userIdentity={user.sub}
          fetchAllBlogPostComments={fetchAllBlogPostComments}
        />
      )}
    </div>
  );
};
export default CommentList;
