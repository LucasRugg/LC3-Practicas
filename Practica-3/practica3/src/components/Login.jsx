import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.includes("o") || value.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const handleRegister = () => {
    if (username === "" || username.includes("o") || username.includes("O")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Ingrese su nombre de usuario"
      />
      <br />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
}

export default Login;
