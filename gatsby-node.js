exports.onCreatePage = async({page,actions})=>{
  const {createPage}=actions;
  if (page.path.match(/^\/root-glob/)) {
    page.matchPath = "/*";
    createPage(page);
  }
  
  if (page.path.match(/^\/zapp-glob/)) {
    page.matchPath = "/app/*";
    createPage(page);
  }
}