const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/template/author-page.jsx');
  return graphql(`
  {
    allJavascriptFrontmatter {
      edges {
        node {
          id
          frontmatter {
            en {
              path
            }
          }
        }
      }
    }
  }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.en.path,
        component: postTemplate,
      });
    });
  });
};
