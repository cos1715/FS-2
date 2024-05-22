class PostService {
  allPost = null;
  post = null;
  searchPost = null;
  newPost = null;
  updatedPost = null;
  deletePost = null;
  getAllPosts = async () => {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    this.allPost = data;
    return this;
  };
  getPost = async (id) => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await res.json();
    this.post = data;
    return this;
  };
  searchPost = async (limit = 10, skip = 0) => {
    const url = new URL("https://dummyjson.com/posts");
    url.searchParams.set("limit", limit);
    url.searchParams.set("skip", skip);
    url.searchParams.set("select", "title,body");
    const res = await fetch(url.toString());
    const data = await res.json();
    this.searchPost = data;
    return this;
  };
  createPost = async (postData) => {
    const res = await fetch("https://dummyjson.com/posts/add", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    this.newPost = data;
    return this;
  };
  updatePost = async (id, postData) => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    this.updatedPost = data;
    return this;
  };
  deletePost = async (id) => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
      method: "delete",
    });
    const data = await res.json();
    this.deletePost = data;
    return this;
  };
}

const render = (...posts) => {
  posts.forEach((item) => {
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const text = document.createElement("p");

    title.innerText = item.title;
    text.innerText = item.body;

    card.append(title, text);
    document.body.append(card);
  });
};

const postService = new PostService();
