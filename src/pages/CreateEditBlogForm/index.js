import classNames from "classnames/bind";
import styles from "./CreateEditBlogForm.module.scss";
import useCreateEditBlogForm from "~/hooks/useCreateEditBlogForm";

const cx = classNames.bind(styles);

function CreateEditBlogForm({ onSuccess }) {
  const {
    id,
    formData,
    errors,
    loading,
    previewUrl,
    handleChange,
    handleFileChange,
    handleSubmit
  } = useCreateEditBlogForm(onSuccess);

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
          disabled={!!previewUrl}
        />
        {errors.thumbnail_url && (
          <span className={cx("error")}>{errors.thumbnail_url}</span>
        )}
      </div>

      <div className={cx("form-group")}>
        <label>Or Upload Thumbnail:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

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
