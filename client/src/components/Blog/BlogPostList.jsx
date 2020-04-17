import React, { useEffect, useState } from "react";

import BlogPostCard from "./BlogPostCard";
import { GetAllBlogPostsRequest } from "../../CMSService_pb";
import { blogPostServiceClient } from "../../utilities/rpcClients";

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchAllBlogPosts = () => {
    const req = new GetAllBlogPostsRequest();
    req.setType("");
    const call = blogPostServiceClient.getAllBlogPosts(
      req,
      {},
      (err, response) => {
        if (err) console.log(err);
        else {
          const data = response.toObject();
          const { bpList } = data;
          setBlogPosts(bpList);
        }
      }
    );

    // need to check this one later
    call.on("status", (status) => {
      console.log(status.code);
      console.log(status.details);
      console.log(status.metadata);
    });
  };

  useEffect(() => {
    // componentDidMount
    fetchAllBlogPosts();
  }, []);

  return (
    <div>
      {blogPosts.map((e) => (
        <BlogPostCard key={e.bpr.bpId} {...e} />
      ))}
    </div>
  );
};
export default BlogPostList;
