export default function DisplayList({ listUser }) {
  return (
    <div
      style={{
        textAlign: "left",
      }}
      className="card"
    >
      <p>Name: {listUser.name}</p>
      <p>Company Name: {listUser.company.name}</p>
      <p>City: {listUser.address.city}</p>
    </div>
  );
}
