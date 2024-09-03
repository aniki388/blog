var posts=["posts/12345678.html","posts/9308608.html","posts/e85e42a5.html","posts/44ed1e9b.html","posts/7551a3d3.html","posts/84f3211d.html","posts/4a17b156.html","posts/bdae0d9b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };