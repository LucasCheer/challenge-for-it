const UserCard = ({ user }) => (
    <div className="card">
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Ciudad:</strong> {user.address ? user.address.city : "No disponible"}</p>
      <p><strong>Teléfono:</strong> {user.phone || "No disponible"}</p>
      <p><strong>Empresa:</strong> {user.company?.name}</p>

    </div>
  );
  
  export default UserCard;
  