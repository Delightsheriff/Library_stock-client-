import { useState } from "react";
import { useBooks } from "../../contexts/BookContext";
import styles from "./AddBook.module.css";

function AddBook() {
  const { addBook } = useBooks();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    publisher: "",
    publication_date: "",
    description: "",
    category: "",
    quantity: 1,
    location: "", // Added location to formData
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.author) newErrors.author = "Author is required.";
    if (!formData.ISBN) newErrors.ISBN = "ISBN is required.";
    if (!formData.publisher) newErrors.publisher = "Publisher is required.";
    if (!formData.publication_date)
      newErrors.publication_date = "Publication date is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.quantity || formData.quantity < 1)
      newErrors.quantity = "Quantity must be greater than 0.";
    if (!formData.location) newErrors.location = "Location is required."; // Added validation for location

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addBook(formData);
    // Optionally, clear the form after submission
    setFormData({
      title: "",
      author: "",
      ISBN: "",
      publisher: "",
      publication_date: "",
      description: "",
      category: "",
      quantity: 1,
      location: "", // Reset location after submission
    });
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Book</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className={styles.input}
            required
          />
          {errors.title && <p className={styles.error}>{errors.title}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="author" className={styles.label}>
            Author
          </label>
          <input
            id="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className={styles.input}
            required
          />
          {errors.author && <p className={styles.error}>{errors.author}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="ISBN" className={styles.label}>
            ISBN
          </label>
          <input
            id="ISBN"
            value={formData.ISBN}
            onChange={handleChange}
            placeholder="Enter ISBN"
            className={styles.input}
            required
          />
          {errors.ISBN && <p className={styles.error}>{errors.ISBN}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="publisher" className={styles.label}>
            Publisher
          </label>
          <input
            id="publisher"
            value={formData.publisher}
            onChange={handleChange}
            placeholder="Enter publisher name"
            className={styles.input}
            required
          />
          {errors.publisher && (
            <p className={styles.error}>{errors.publisher}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="publication_date" className={styles.label}>
            Publication Date
          </label>
          <input
            id="publication_date"
            type="date"
            value={formData.publication_date}
            onChange={handleChange}
            className={styles.input}
            required
          />
          {errors.publication_date && (
            <p className={styles.error}>{errors.publication_date}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter book description"
            className={styles.textarea}
            required
          />
          {errors.description && (
            <p className={styles.error}>{errors.description}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="category" className={styles.label}>
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Programming_Languages">Programming Languages</option>
            <option value="Software_Development">Software Development</option>
            <option value="Computer_Science">Computer Science</option>
            <option value="Web_Development">Web Development</option>
            <option value="Database_Management">Database Management</option>
            <option value="Artificial_Intelligence">
              Artificial Intelligence
            </option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Computer_Graphics">Computer Graphics</option>
            <option value="Networking">Networking</option>
            <option value="Operating_Systems">Operating Systems</option>
          </select>
          {errors.category && <p className={styles.error}>{errors.category}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="quantity" className={styles.label}>
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            className={styles.input}
            required
          />
          {errors.quantity && <p className={styles.error}>{errors.quantity}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="location" className={styles.label}>
            Location
          </label>
          <input
            id="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className={styles.input}
            required
          />
          {errors.location && <p className={styles.error}>{errors.location}</p>}
        </div>
        <div className={styles.actions}>
          <button type="submit" className={styles.button}>
            Save Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
