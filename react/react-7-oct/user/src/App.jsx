import { useState } from "react";
import axios from "axios";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState({}); // Initialize as an array

  const submit = () => {
    axios({
      url: "http://localhost:3000/add/user",
      method: "POST",
      data: { firstName, lastName, email, mobile, password },
    })
      .then((data) => {
        console.log("Server response:", data.data); // Log the entire response

        if (data.data.success) {
          alert("Data saved successfully");
          const usersData = data.data.users;
          setUsers(usersData); // Ensure users is always an array
        } else {
          console.error("Error: Success status is false");
        }
      })
      .catch((error) => {
        console.error("Error in submission:", error);
        alert("Something went wrong");
      });
  };

  return (
    <>
      <div>
        <h3>Sign Up</h3>
        <table>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>
                <input 
                  type="text" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input 
                  type="text" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input 
                  type="text" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <td>
                <input 
                  type="text" 
                  value={mobile} 
                  onChange={(e) => setMobile(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input onClick={submit} type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>Users List</h3>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id}>
              <h4>Name: {user.firstName} {user.lastName}</h4>
              <p>Email: {user.email}</p>
              <p>Mobile: {user.mobile}</p>
            </div>
          ))
        ) : (
          <p>No users to display.</p>
        )}
      </div>
    </>
  );
}

export default App;
