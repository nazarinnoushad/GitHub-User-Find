const Profile = ({ user }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-center mb-6">
        <img src={user.avatar_url} alt="Profile" className="w-40 h-40 rounded-lg" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-600 text-white rounded-lg p-4 flex items-center justify-between">
          <p className="font-semibold">Name:</p>
          <p className="truncate">{user.name || "N/A"}</p>
        </div>
        <div className="bg-indigo-600 text-white rounded-lg p-4 flex items-center justify-between">
          <p className="font-semibold">Bio:</p>
          <p className="truncate">{user.bio || "No bio available"}</p>
        </div>
        <div className="bg-indigo-600 text-white rounded-lg p-4 flex items-center justify-between">
          <p className="font-semibold">Location:</p>
          <p className="truncate">{user.location || "Not available"}</p>
        </div>
        <div className="bg-indigo-600 text-white rounded-lg p-4 flex items-center justify-between">
          <p className="font-semibold">Public Repos:</p>
          <p className="truncate">{user.public_repos}</p>
        </div>
        <div className="bg-indigo-600 text-white rounded-lg p-4 flex items-center justify-between">
          <p className="font-semibold">Followers:</p>
          <p className="truncate">{user.followers}</p>
        </div>
        <div className="bg-indigo-600 text-white rounded-lg p-4 flex items-center justify-between">
          <p className="font-semibold">Following:</p>
          <p className="truncate">{user.following}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;







  







