import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import JoditEditor from "jodit-react";

function AddBlog() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const blogData = {
      title,
      content,
      author: user.displayName,
    };
    const result = await axios.post(
      `${import.meta.env.VITE_API_URL}/blogs`,
      blogData
    );
    if (result.status === 201) {
      toast.success("Blog created successfully");
      form.reset();
      setContent("");
    }
  };
  return (
    <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Blog Title</span>
        </label>
        <input
          type="text"
          placeholder="Blog Title"
          name="title"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        {/* <textarea
          type="textArea"
          placeholder="blog content"
          name="content"
          className="textarea textarea-bordered h-36"
          required
        /> */}
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => {
            setContent(newContent);
          }}
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Add Blog</button>
      </div>
    </form>
  );
}

export default AddBlog;
