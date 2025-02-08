import { useState } from "react";
import useForm from "../hooks/useForm";

function UserForm({ addUser }) {
//   const [newUser, setNewUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     city: "",
//     phone: "",
//     company: ""
//   });

//   const handleChange = (e) => {
//     setNewUser({
//       ...newUser,
//       [e.target.name]: e.target.value
//     });
//   };

    const { form: newUser, handleChange } = useForm({
        name: "",
        username: "",
        email: "",
        city: "",
        phone: "",
        company: ""
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple.
    if (!newUser.name || !newUser.email || !newUser.city) {
      alert("Por favor, completa al menos el nombre, email y ciudad.");
      return;
    }

    addUser({
        ...newUser,
        id: Date.now(),
        address: { city: newUser.city },
        company: newUser.company ? { name: newUser.company } : { name: "Independiente" } 
      });

    setNewUser({
      name: "",
      username: "",
      email: "",
      city: "",
      phone: "",
      company: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input 
        type="text"
        name="name"
        placeholder="Nombre"
        value={newUser.name}
        onChange={handleChange}
        required
        />

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={newUser.username}
        onChange={handleChange}
        />

      <input
        type="email" 
        name="email" 
        placeholder="Email" 
        value={newUser.email} 
        onChange={handleChange}
        required
        />

      <input
        type="text"
        name="city"
        placeholder="Ciudad"
        value={newUser.city}
        onChange={handleChange}
        required
        />

      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={newUser.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="company"
        placeholder="Empresa"
        value={newUser.company}
        onChange={handleChange}
        />

      <button type="submit">Agregar Usuario</button>
    </form>
  );
}

export default UserForm;
