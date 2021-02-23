import React from "react";
import useUser from "../../hooks/useUser";

export default function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();

  return (
    <div className="p-4">
      <p>{userId}</p>
    </div>
  );
}
