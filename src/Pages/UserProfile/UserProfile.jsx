import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function UserProfile() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { displayName, email, photoURL } = user;
  return (
    <div className="relative flex flex-col items-center justify-center mt-32 border-2 rounded-xl max-w-sm lg:max-w-xl mx-auto font-semibold text-xl p-4 ">
      <img
        src={photoURL}
        alt=""
        className="absolute rounded-full border-spacing-4 border-4 border-job -top-2/3"
      />
      <h2 className="mt-6 mb-4">{displayName}</h2>
      <h3>{email}</h3>
    </div>
  );
}

export default UserProfile;
