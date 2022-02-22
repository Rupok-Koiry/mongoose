import "./App.css";
import React from "react";
function App() {
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const authorRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const author = authorRef.current.value;

    const formData = { title, description, author };

    console.log(formData);

    await fetch("http://localhost:8000/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Blog Created");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" ref={titleRef} />
        <input
          type="text"
          name="description"
          placeholder="Description"
          ref={descriptionRef}
        />
        <input type="text" name="author" placeholder="Author" ref={authorRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
