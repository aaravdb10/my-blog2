import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import blogs from "../data/blogs";

const PageContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
`;

const BlogItem = styled.li`
  margin-bottom: 2rem;
  list-style: none;
`;

export default function BlogList() {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title="Blogs" description="List of generic blogs placeholder" />
      <h1>Blog Posts</h1>
      <ul style={{ padding: 0 }}>
        {blogs.map((blog) => (
          <BlogItem key={blog.id}>
            <h2>
              <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {blog.title}
              </Link>
            </h2>
            <p>{blog.description}</p>
            <small>{blog.date}</small>
          </BlogItem>
        ))}
      </ul>
    </PageContainer>
  );
}
