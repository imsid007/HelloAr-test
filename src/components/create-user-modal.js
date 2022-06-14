import React, { useState } from "react";

export default function CreateUserModal({ isShowModal, setIsShowModal }) {
  // local states
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({
    email: null,
    role: "Owner",
  });

  // method to to add user
  const addUser = () => {
    if (userData.email.split("@").length < 2) {
      setError(true);
    } else {
      const retrievedObject = localStorage.getItem("userListObject");
      const id = retrievedObject ? retrievedObject.length + 1 : 1;
      let useList = [];
      if (retrievedObject) {
        useList = JSON.parse(retrievedObject);
      }
      let newUserListObject = [
        ...useList,
        {
          id: id,
          email: userData.email,
          role: userData.role,
          lastActive: `${Math.floor(Math.random() * 10 + 1)} Hour Ago`,
        },
      ];

      localStorage.setItem("userListObject", JSON.stringify(newUserListObject));
      setIsShowModal(false);
    }
  };

  return (
    <div>
      {isShowModal ? (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-body">
              <div className="create-user-icon-container">
                <img
                  className="create-user-icon"
                  alt="create user icon"
                  src="/images/icons/add-user.svg"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="create-user-form-container">
                <h3>User Information</h3>
                <div>Email Id of User</div>
                <input
                  className="email-input"
                  onChange={(e) => {
                    setError(false);
                    setUserData({ ...userData, email: e.target.value });
                  }}
                  type="email"
                  required
                />
                {error ? (
                  <div className="error-message">Please enter valid email</div>
                ) : null}
                <div>Role</div>
                <select
                  className="role-type"
                  onChange={(e) => {
                    setUserData({ ...userData, role: e.target.value });
                  }}
                >
                  <option value="Owner">Owner</option>
                  <option value="Admin">Admin</option>
                  <option value="Sales">Sales</option>
                </select>
                <div className="modal-btns-container">
                  <button
                    className="cancel-btn"
                    onClick={() => setIsShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button className="add-btn" onClick={addUser}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
