import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import type { RootState } from "../redux/store";
import { logOut } from "../Auth/slice";

export default function Sidebar() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
<aside className="bg-gray-900 w-64 h-full flex flex-col justify-between shadow-lg text-white">
  {/* Top section */}
  <div className="p-4 flex flex-col flex-1 overflow-y-auto">
    <h2 className="text-xl font-bold mb-8 text-indigo-400">Admin Panel</h2>

    <nav className="flex flex-col gap-3">
      {[
        { path: "/admin/users", label: "Users" },
        { path: "/admin/packageGroups", label: "Product Groups" },
        { path: "/admin/packages", label: "Products" },
        { path: "/admin/inquiries", label: "Inquiries" },
        { path: "/admin/review", label: "Review" },
      ].map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-800 text-white" // force white text
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </div>

  {/* Bottom section */}
  <div className="pb-20 px-3 border-t border-gray-700">
    <span className="block text-sm text-gray-400 mb-2 truncate">
      Hi, {user?.email}
    </span>
    <button
      onClick={handleLogout}
      className="bg-red-600 w-full px-3 py-2 rounded hover:bg-red-700 transition text-white"
    >
      Logout
    </button>
  </div>
</aside>

  );
}
