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
            lng
            path
            birthPlace
            name
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
        path: node.frontmatter.path,
        component: postTemplate,
      });
    });
  });
};
