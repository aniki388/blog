var posts=["posts/44ed1e9b.html","posts/4a17b156.html","posts/bdae0d9b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };