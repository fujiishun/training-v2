import { useEffect, useState } from "react";
import { getUserList } from "../../api/user/User";
import { User } from "../../types/user/User";
import "./UserList.css";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUserList()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }, []);

  return (
    <div className="user-list">
      <div className="title">
        <p>ユーザー一覧</p>
      </div>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-details">
            <div className="user-name">
              <p className="name">
                {user.family_name} {user.given_name}
              </p>
              <p className="name-kana">
                {user.family_name_kana} {user.given_name_kana}
              </p>
            </div>
            <p className="user-description">備考欄：{user.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
