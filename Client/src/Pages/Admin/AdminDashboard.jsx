import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
const API_BASE_URL = import.meta.env.VITE_API_URL;
export const AdminDashboard = () => {
  const [active, setActive] = useState("pricing");

  return (
    <div className="admin-container">
      {/* ===== SIDEBAR (DESKTOP) ===== */}
      <div className="sidebar">
        <h2>Admin</h2>

        <button
          className={active === "pricing" ? "active" : ""}
          onClick={() => setActive("pricing")}
        >
          Pricing
        </button>

        <button
          className={active === "applied" ? "active" : ""}
          onClick={() => setActive("applied")}
        >
          Applied
        </button>

        <button
          className={active === "gallery" ? "active" : ""}
          onClick={() => setActive("gallery")}
        >
          Gallery
        </button>

        <button
          className={active === "manageGallery" ? "active" : ""}
          onClick={() => setActive("manageGallery")}
        >
          Manage Gallery
        </button>
        <button
          className={active === "contact" ? "active" : ""}
          onClick={() => setActive("contact")}
        >
          Contacted
        </button>
      </div>

      {/* ===== MOBILE TABS ===== */}
      <div className="mobile-tabs">
        <button
          className={active === "pricing" ? "active" : ""}
          onClick={() => setActive("pricing")}
        >
          Pricing
        </button>

        <button
          className={active === "applied" ? "active" : ""}
          onClick={() => setActive("applied")}
        >
          Applied
        </button>

        <button
          className={active === "gallery" ? "active" : ""}
          onClick={() => setActive("gallery")}
        >
          Gallery
        </button>
        <button
          className={active === "manageGallery" ? "active" : ""}
          onClick={() => setActive("manageGallery")}
        >
          Manage Gallery
        </button>

        <button
          className={active === "contact" ? "active" : ""}
          onClick={() => setActive("contact")}
        >
          Contacted
        </button>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="content">
        {active === "pricing" && <PricingForm />}
        {active === "applied" && <AppliedList />}
        {active === "gallery" && <GalleryUpload />}
        {active === "manageGallery" && <ManageGallery />}
        {active === "contact" && <ContactList />}
      </div>
    </div>
  );
};

/* ================= PRICING FORM ================= */

const PricingForm = () => {
  const serviceMap = {
    Construction: ["Concreting", "Brick Work", "Steel Work", "Plastering"],
    Renovation: [
      "Breaking",
      "Civil Work",
      "Tiling",
      "Water Proofing",
      "Grouting",
    ],
    Interior: ["Carpenter Work", "Ceiling Work", "Colouring", "Decorating"],
    Maintenance: ["Seepage", "Water Proofing", "Grouting", "Crack Work"],
  };

  const materials = ["Basic", "Premium", "Luxury"];

  const [form, setForm] = useState({
    category: "Construction",
    service: "Concreting",
    material: "Basic",
    pricePerSqft: "",
    multiplier: "",
    gst: "",
  });

  const handleCategoryChange = (value) => {
    setForm({
      ...form,
      category: value,
      service: serviceMap[value][0],
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/pricing/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error");

      alert("Saved Successfully ✅");
    } catch (err) {
      alert("Error saving ❌");
      console.error(err);
    }
  };

  return (
    <div className="form-card">
      <h2>Add Pricing</h2>

      <div className="form-grid">
        {/* CATEGORY */}
        <div>
          <label>Category</label>
          <select
            value={form.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {Object.keys(serviceMap).map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* SERVICE */}
        <div>
          <label>Service</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            {serviceMap[form.category].map((srv) => (
              <option key={srv}>{srv}</option>
            ))}
          </select>
        </div>

        {/* MATERIAL */}
        <div>
          <label>Material</label>
          <select
            value={form.material}
            onChange={(e) => setForm({ ...form, material: e.target.value })}
          >
            {materials.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* PRICE */}
        <div>
          <label>Price / Sqft</label>
          <input
            type="number"
            value={form.pricePerSqft}
            onChange={(e) => setForm({ ...form, pricePerSqft: e.target.value })}
          />
        </div>

        {/* MULTIPLIER */}
        <div>
          <label>Multiplier</label>
          <input
            type="number"
            value={form.multiplier}
            onChange={(e) => setForm({ ...form, multiplier: e.target.value })}
          />
        </div>

        {/* GST */}
        <div>
          <label>GST (%)</label>
          <input
            type="number"
            value={form.gst}
            onChange={(e) => setForm({ ...form, gst: e.target.value })}
          />
        </div>
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        Save Pricing
      </button>
    </div>
  );
};

const AppliedList = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const token = localStorage.getItem("token");

    fetch(`${API_BASE_URL}/api/careers/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/careers/delete/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (!res.ok) throw new Error("Delete failed");

      alert("Deleted Successfully ✅");

      // 🔥 REFRESH LIST
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Error deleting ❌");
    }
  };

  return (
    <div className="applied-table">
      <h2>Applications</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Action</th> {/* 🔥 NEW */}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.college}</td>

              <td>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const GalleryUpload = () => {
  const [category, setCategory] = useState("Construction");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select file");

    const formData = new FormData();
    formData.append("category", category);
    formData.append("file", file);

    try {
      const res = await fetch(`${API_BASE_URL}/api/gallery/upload`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData,
      });

      if (!res.ok) throw new Error();

      alert("Uploaded ✅");
    } catch (err) {
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="form-card">
      <h2>Upload Gallery Image</h2>

      <select
        onChange={(e) => setCategory(e.target.value)}
        style={{ height: "30px", width: "150px", borderRadius: "7px" }}
      >
        <option>Construction</option>
        <option>Renovation</option>
        <option>Interior</option>
        <option>Maintenance</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginLeft: "30px", height: "30px" }}
      />

      <button className="save-btn" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

const ManageGallery = () => {
  const [category, setCategory] = useState("Construction");
  const [images, setImages] = useState([]);

  const fetchImages = async (cat) => {
    const res = await fetch(`${API_BASE_URL}/api/gallery/${cat}`);
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages(category);
  }, [category]);

  // // 🔥 DELETE
  // const handleDelete = async (id) => {
  //   if (!window.confirm("Delete this image?")) return;

  //   try {
  //     const res = await fetch(
  //       `http://localhost:8089/api/gallery/delete/${id}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       },
  //     );

  //     if (!res.ok) throw new Error();

  //     alert("Deleted ✅");

  //     // 🔥 refresh
  //     fetchImages(category);
  //   } catch {
  //     alert("Delete failed ❌");
  //   }
  // };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/gallery/delete/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      );

      if (!res.ok) throw new Error();

      alert("Deleted ✅");

      // 🔥 INSTANT UI UPDATE
      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch {
      alert("Delete failed ❌");
    }
  };

  return (
    <div className="form-card">
      <h2>Manage Gallery</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px" }}
      >
        <option>Construction</option>
        <option>Renovation</option>
        <option>Interior</option>
        <option>Maintenance</option>
      </select>

      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="gallery-card">
            <img src={img.imageUrl} alt="" />

            <button onClick={() => handleDelete(img.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactList = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`${API_BASE_URL}/api/contact/all`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then(setData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete?")) return;

    await fetch(`${API_BASE_URL}/api/contact/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    fetchData(); // 🔥 refresh
  };

  return (
    <div className="applied-table">
      <h2>Contact Messages</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>

              <td>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
