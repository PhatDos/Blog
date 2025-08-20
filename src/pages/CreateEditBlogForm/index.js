import { useState, useEffect, use } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CreateEditBlogForm.module.scss";

const cx = classNames.bind(styles);

function CreateEditBlogForm({ onSuccess }) {
  const navigate = useNavigate();
  const { id } = useParams(); // lấy id từ URL
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    summary: "",
    thumbnail_url: "",
    status: "DRAFT"
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // fetch initialData nếu có id
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts/${id}`
        );
        const result = await res.json();
        if (res.ok && result.data) {
          setFormData({
            title: result.data.title || "",
            slug: result.data.slug || "",
            content: result.data.content || "",
            summary: result.data.summary || "",
            thumbnail_url: result.data.thumbnail_url || "",
            status: result.data.status || "DRAFT"
          });
        } else {
          alert(result.message || "Failed to fetch blog data");
        }
      } catch (err) {
        console.error(err);
        alert("Error fetching blog data");
      }
    };

    fetchData();
  }, [id]);

  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.slug.trim()) newErrors.slug = "Slug is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!file && !formData.thumbnail_url.trim()) {
      newErrors.thumbnail_url = "Thumbnail file or URL is required";
    }
    if (!["DRAFT", "PUBLISHED", "ARCHIVED"].includes(formData.status)) {
      newErrors.status = "Invalid status";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
      setFormData((prev) => ({ ...prev, thumbnail_url: "" }));
    } else {
      setPreviewUrl(null);
    }
  };

  // cleanup avoid memory leaks by preview pic
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("title", formData.title);
      formDataObj.append("slug", formData.slug);
      formDataObj.append("content", formData.content);
      formDataObj.append("summary", formData.summary);
      formDataObj.append("status", formData.status);

      if (file) {
        formDataObj.append("file", file); // API field name: "file"
      } else {
        formDataObj.append("thumbnail_url", formData.thumbnail_url);
      }

      const url = id
        ? `https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts/${id}`
        : "https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts";

      const method = id ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        body: formDataObj
      });

      const result = await res.json();
      console.log("formData submit:", {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        summary: formData.summary,
        status: formData.status,
        file,
        thumbnail_url: formData.thumbnail_url
      });

      if (res.ok) {
        alert(id ? "Blog updated successfully!" : "Blog created successfully!");
        if (onSuccess) onSuccess(result.data);
        navigate("/");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={cx("blog-form")} onSubmit={handleSubmit}>
      <h2>{id ? "Edit Blog" : "Create Blog"}</h2>

      <div className={cx("form-group")}>
        <label>Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className={cx("error")}>{errors.title}</span>}
      </div>

      <div className={cx("form-group")}>
        <label>Slug *</label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
        />
        {errors.slug && <span className={cx("error")}>{errors.slug}</span>}
      </div>

      <div className={cx("form-group")}>
        <label>Summary</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>

      <div className={cx("form-group")}>
        <label>Content *</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={6}
        />
        {errors.content && (
          <span className={cx("error")}>{errors.content}</span>
        )}
      </div>

      <div className={cx("form-group")}>
        <label>Thumbnail URL:</label>
        <input
          type="url"
          name="thumbnail_url"
          value={formData.thumbnail_url}
          onChange={handleChange}
          disabled={!!file}
        />
        {errors.thumbnail_url && (
          <span className={cx("error")}>{errors.thumbnail_url}</span>
        )}
      </div>

      <div className={cx("form-group")}>
        <label>Or Upload Thumbnail:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {/* Preview ảnh */}
      {(previewUrl || formData.thumbnail_url) && (
        <div className={cx("preview")}>
          <p>Preview:</p>
          <img
            src={previewUrl || formData.thumbnail_url}
            alt="Thumbnail preview"
            style={{
              maxWidth: "300px",
              borderRadius: "8px",
              marginTop: "10px"
            }}
          />
        </div>
      )}

      <div className={cx("form-group")}>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
          <option value="ARCHIVED">Archived</option>
        </select>
        {errors.status && <span className={cx("error")}>{errors.status}</span>}
      </div>

      <button type="submit" disabled={loading} style={{ marginTop: "30px" }}>
        {loading ? "Saving..." : id ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default CreateEditBlogForm;
