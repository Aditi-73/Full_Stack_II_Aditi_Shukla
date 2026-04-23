import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", course: "" });
  const [editingId, setEditingId] = useState(null);

  const API_URL = "http://localhost:8080/api/students";

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_URL}/get-all`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const resetForm = () => {
    setForm({ id: "", name: "", course: "" });
    setEditingId(null);
  };

  // Add or update student
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEditing = editingId !== null;

    try {
      await fetch(isEditing ? `${API_URL}/${editingId}` : `${API_URL}/add-student`, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(form.id),
          name: form.name,
          course: form.course,
        }),
      });

      resetForm();
      fetchStudents();
    } catch (err) {
      console.error(isEditing ? "Error updating student:" : "Error adding student:", err);
    }
  };

  const handleEdit = (student) => {
    setForm({
      id: String(student.id),
      name: student.name,
      course: student.course,
    });
    setEditingId(student.id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      resetForm();
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  const isEditing = editingId !== null;

  return (
    <div className="cyber-shell">
      <div className="bg-gradient" />
      <div className="bg-grid" />
      <div className="scanline" />

      <header className="hero-panel reveal rise-1">
        <h1>
          Student <span>Management</span> System
        </h1>
        <p className="tagline">Track identities and courses in a high-contrast cyber dashboard.</p>
      </header>

      <main className="content-grid">
        <section className="panel reveal rise-2">
          <h2>{isEditing ? "Update Student" : "Add Student"}</h2>
          <form onSubmit={handleSubmit} className="student-form">
            <label>
              <span>ID</span>
              <input
                type="number"
                placeholder="e.g. 101"
                value={form.id}
                onChange={(e) => setForm({ ...form, id: e.target.value })}
                required
              />
            </label>

            <label>
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>

            <label>
              <span>Course</span>
              <input
                type="text"
                placeholder="Enter course"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                required
              />
            </label>

            <div className="form-actions">
              <button type="submit">{isEditing ? "Update Student" : "Inject Student Record"}</button>
              {isEditing ? (
                <button type="button" className="secondary-button" onClick={resetForm}>
                  Cancel Edit
                </button>
              ) : null}
            </div>
          </form>
        </section>

        <section className="panel reveal rise-3">
          <div className="list-head">
            <h2>Student Feed</h2>
            <p>{students.length} entries</p>
          </div>

          {students.length === 0 ? (
            <p className="empty">No records detected. Add your first student.</p>
          ) : (
            <div className="student-grid">
              {students.map((s, index) => (
                <article
                  key={s.id}
                  className="student-card"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="student-name">{s.name}</p>
                  <p className="meta">ID #{s.id}</p>
                  <p className="course">{s.course}</p>

                  <div className="card-actions">
                    <button type="button" className="edit-button" onClick={() => handleEdit(s)}>
                      Edit
                    </button>
                    <button type="button" className="delete-button" onClick={() => handleDelete(s.id)}>
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}