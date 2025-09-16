import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name} ({username})</h2>
      </div>
      <p className="text-gray-600">{email}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Address</h3>
        <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Company</h3>
        <p>{company.name}</p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;