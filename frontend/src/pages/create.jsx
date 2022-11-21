import {useState} from "react";
import {Link} from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({title, content, password});
    const headers = {"content-type": "application/json"};

    fetch('http://localhost:3000/blog/create-post' , {
      method: "POST",
      headers: headers,
      body: requestData})
    console.log(requestData);
    if (password === "password123") {
      setDone(true)
    }
  }
  if (done) {
    return (
      <div>
        <Link to="/view">Check out your blog post</Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button>Post</button>
    </form>
  );
}
