import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import config from "~/config";
import blogService from "~/services/blogService";

// ==== Types ====
interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  summary: string;
  thumbnail_url: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
}

interface FormErrors {
  title?: string;
  slug?: string;
  content?: string;
  thumbnail_url?: string;
  status?: string;
}

interface UseCreateEditBlogFormProps {
  onSuccess?: (data: any) => void;
}

function useCreateEditBlogForm({ onSuccess }: UseCreateEditBlogFormProps) {
  const { getBlogById, createBlog, updateBlog } = blogService;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    slug: "",
    content: "",
    summary: "",
    thumbnail_url: "",
    status: "DRAFT",
  });
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // Fetch blog if editing
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);
        const data = res.data; // blogService.getBlogById trả về { data: Blog }
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          content: data.content || "",
          summary: data.summary || "",
          thumbnail_url: data.thumbnail_url || "",
          status: data.status || "DRAFT",
        });
      } catch (err: any) {
        alert(err.message);
      }
    };

    fetchBlog();
  }, [id, getBlogById]);

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
      setFormData((prev) => ({ ...prev, thumbnail_url: "" }));
    } else {
      setPreviewUrl(null);
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.slug.trim()) newErrors.slug = "Slug is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!file && !formData.thumbnail_url.trim())
      newErrors.thumbnail_url = "Thumbnail file or URL is required";
    if (!["DRAFT", "PUBLISHED", "ARCHIVED"].includes(formData.status))
      newErrors.status = "Invalid status";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

      let resData;
      if (id) {
        resData = file
          ? await updateBlog(id, formDataObj)
          : await updateBlog(id, formData);
        alert("Blog updated successfully!");
      } else {
        resData = file ? await createBlog(formDataObj) : await createBlog(formData);
        alert("Blog created successfully!");
      }

      console.log("Submit data:", file ? [...formDataObj.entries()] : formData);

      if (onSuccess) onSuccess(resData);
      navigate(config.routes.home);
    } catch (err: any) {
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
    handleSubmit,
  };
}

export default useCreateEditBlogForm;
