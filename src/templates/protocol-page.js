import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Header from "../components/Header";

export const ProtocolPageTemplate = ({
  title,
  heading,
  photo,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <header>
        <Header title={title} heading={heading} photo={photo} />
      </header>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ProtocolPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      photo={post.frontmatter.photo}
      content={post.html}
    />
  );
};

export const protocolPageQuery = graphql`
  query ProtocolPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        photo
      }
    }
  }
`;