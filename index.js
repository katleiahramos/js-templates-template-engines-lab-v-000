function createPost(){
  const postTitle  = document.getElementById("postTitle").value;
  const postBody  = document.getElementById("postBody").value;
  const postAuthor = document.getElementById("postAuthor").value;

  const postTemplate = _.template(document.getElementById("post-template").innerHTML);


  const postHTML = postTemplate({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor})

  // document.getElementById('posts').innerHTML += postHTML

  

}
