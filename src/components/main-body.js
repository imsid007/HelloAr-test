import React, { useEffect, useState } from "react";
import CreateUserModal from "./create-user-modal";

export default function MainBody() {
  // local states
  const [isShowModal, setIsShowModal] = useState(false);
  const [userList, setUserList] = useState([]);

  // method to delete user
  const deleteUser = (id) => {
    const result = userList.filter((user) => user.id != id);
    setUserList(result);
    localStorage.setItem("userListObject", JSON.stringify(result));
  };

  // side effect to fetch user list
  useEffect(() => {
    var retrievedObject = localStorage.getItem("userListObject");
    if (retrievedObject) {
      setUserList(JSON.parse(retrievedObject));
    }
  }, [isShowModal]);

  return (
    <div className="form-container">
      <button onClick={() => setIsShowModal(true)} className="add-user-btn">
        ADD USER
      </button>
      {/* create user modal  */}
      <CreateUserModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
      {/* user table  */}
      {userList.length > 0 ? (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Last Signed In</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {userList.map((data, index) => {
              return (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.email}</td>
                  <td>{data.lastActive}</td>
                  <td>{data.role}</td>
                  <td>
                    <img
                      onClick={() => deleteUser(data.id)}
                      className="delete-icon"
                      alt="delete icon"
                      src="/images/icons/delete.svg"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>No Users found!</h3>
      )}
    </div>
  );
}
