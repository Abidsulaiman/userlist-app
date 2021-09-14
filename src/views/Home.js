import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../features/authSlice";
import "./Home.scss";

function Home() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFiltered] = useState([]);
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  const userList = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    const result = userList?.filter(({ user }) => {
      return user.email.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    setFiltered(result);
  }, [search]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="home container">
      <h3>
        Welcome <span className="userName">{user?.username}</span>
      </h3>

      <input
        type="text"
        className="form-control"
        placeholder="Search user..."
        onChange={handleSearch}
      />

      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            <>
              {filteredUsers?.map(({ user }) => (
                <tr key={user.email}>
                  <td>{user.gender}</td>
                  <td>
                    {user.name.first} {user.name.last}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob}</td>
                </tr>
              ))}
            </>
          ) : (
            "No datas found"
          )}
        </tbody>
      </table>

      <button className="btn primaryBtn" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}

export default Home;
