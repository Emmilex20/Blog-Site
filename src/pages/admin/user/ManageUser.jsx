import React, { useState } from "react";
import {
  useGetUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} from "../../../redux/features/auth/authApi";
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, error, isLoading, refetch } = useGetUsersQuery();
  const navigate = useNavigate();
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users: {error.message}</div>;

  // Correctly accessing users from data
  const users = data?.users || [];

  const handleRoleChange = async (userId, currentRole) => {
    const newRole = currentRole === "user" ? "admin" : "user";
    try {
      const response = await updateUserRole({ userId, role: newRole }).unwrap();
      alert("User role updated successfully");
      console.log("Update role response:", response);
      refetch(); // Re-fetch users after updating role
    } catch (err) {
      console.error("Failed to update role:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteUser(id).unwrap();
      alert("User deleted successfully");
      refetch();
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Users
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse table-auto">
                <thead>
                  <tr>
                    <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase font-semibold text-left">
                      NO.
                    </th>
                    <th className="w-3/12 px-14 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase font-semibold text-left">
                      Email
                    </th>
                    <th className="w-2/12 px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase font-semibold text-center">
                      Role
                    </th>
                    <th className="w-3/12 px-24 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase font-semibold text-center">
                      Username
                    </th>
                    <th className="w-2/12 px-24 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase font-semibold text-center">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={user.id}>
                        <td className="w-1/12 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left text-blueGray-700">
                          {index + 1}
                        </td>
                        <td className="w-3/12 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left">
                          {user.email}
                        </td>
                        <td className="w-2/12 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                          <button
                            onClick={() => handleRoleChange(user.id, user.role)}
                            className={`px-8 py-2 rounded ${user.role === 'admin' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                          >
                            {user.role === 'admin' ? 'Revoke Admin' : 'Make Admin'}
                          </button>
                        </td>
                        <td className="w-3/12 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-center">
                          {user.username || "N/A"} {/* Display username instead of "Edit" */}
                        </td>
                        <td className="w-2/12 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-center">
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="bg-red-600 text-white px-2 py-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center p-4">No users found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ManageUser;
