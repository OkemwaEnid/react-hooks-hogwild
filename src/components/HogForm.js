import React, { useState } from "react";

function HogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: 0,
    greased: false,
    image: "",
    highestMedalAchieved: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(formData);
    setFormData({
      name: "",
      specialty: "",
      weight: 0,
      greased: false,
      image: "",
      highestMedalAchieved: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Specialty"
        value={formData.specialty}
        onChange={(e) =>
          setFormData({ ...formData, specialty: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Weight"
        value={formData.weight}
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
      />
      <label>
        Greased:
        <input
          type="checkbox"
          checked={formData.greased}
          onChange={(e) =>
            setFormData({ ...formData, greased: e.target.checked })
          }
        />
      </label>
      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
      />
      <input
        type="text"
        placeholder="Highest Medal Achieved"
        value={formData.highestMedalAchieved}
        onChange={(e) =>
          setFormData({ ...formData, highestMedalAchieved: e.target.value })
        }
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
