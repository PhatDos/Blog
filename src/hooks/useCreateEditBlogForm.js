import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import config from "~/config";
import blogService from "~/apiServices/blogService";

function useCreateEditBlogForm(onSuccess) {
  const { getBlogById, createBlog, updateBlog } = blogService;
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    summary: "",
    thumbnail_url: "",
    status: "DRAFT"
  });
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // fetch nếu có id
  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await getBlogById(id);
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          content: data.content || "",
          summary: data.summary || "",
          thumbnail_url: data.thumbnail_url || "",
          status: data.status || "DRAFT"
        });
      } catch (err) {
        alert(err.message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // cleanup preview pic
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.slug.trim()) newErrors.slug = "Slug is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!file && !formData.thumbnail_url.trim())
      newErrors.thumbnail_url = "Thumbnail file or URL is required";
    if (!["DRAFT", "PUBLISHED", "ARCHIVED"].includes(formData.status))
      newErrors.status = "Invalid status";
    return newErrors;
  };

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
        formDataObj.append("file", file);
      } else {
        formDataObj.append("thumbnail_url", formData.thumbnail_url);
      }

      let data;
      if (id) {
        if (file) {
          // Nếu có file thì gửi FormData
          data = await updateBlog(id, formDataObj);
        } else {
          // Nếu không có file thì gửi JSON
          data = await updateBlog(id, formData);
        }
        alert("Blog updated successfully!");
      } else {
        if (file) {
          data = await createBlog(formDataObj);
        } else {
          data = await createBlog(formData);
        }
        alert("Blog created successfully!");
      }
      console.log("Submit data:", [...formDataObj.entries()]);

      if (onSuccess) onSuccess(data);
      navigate(config.routes.home);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    id,
    formData,
    errors,
    loading,
    previewUrl,
    handleChange,
    handleFileChange,
    handleSubmit
  };
}
export default useCreateEditBlogForm;
