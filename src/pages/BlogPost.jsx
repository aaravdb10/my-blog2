import React from "react";
import { useParams, Link } from "react-router-dom";
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

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <PageContainer>
        <h1>Post Not Found</h1>
        <Link to="/blogs">Back to Blogs</Link>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title={blog.title} description={blog.description} />
      <Link to="/blogs">← Back to Blogs</Link>
      <h1 style={{ marginTop: "2rem" }}>{blog.title}</h1>
      <p style={{ color: "#666" }}>{blog.date}</p>
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover", margin: "2rem 0" }}
        />
      )}
      <div style={{ lineLength: "1.6" }}>
        {blog.contentSections?.map((section, idx) => (
          <div key={idx} style={{ marginBottom: "2rem" }}>
            {section.title && <h2>{section.title}</h2>}
            {section.body && <p>{section.body}</p>}
          </div>
        ))}
        {blog.contentOutro && <p style={{ marginTop: "2rem", fontStyle: "italic" }}>{blog.contentOutro}</p>}
      </div>
    </PageContainer>
  );
}
