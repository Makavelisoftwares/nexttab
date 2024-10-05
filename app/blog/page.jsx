import React from "react";
import { Posts } from "./_components/posts";

function BlogPage() {
  return (
    <div>
      <div className="text-2xl font-bold">Blog Posts</div>
      <div className="text-sm text-muted-foreground mt-2">
        Get an overview of my day to day thoughts about certain things including
        technology, health and many more.
      </div>
      <div className="mt-3">
        <Posts />
      </div>
    </div>
  );
}

export default BlogPage;
