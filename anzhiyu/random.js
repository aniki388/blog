var posts=["posts/44ed1e9b.html","posts/12345678.html","posts/bdae0d9b.html","posts/4a17b156.html","posts/84f3211d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };