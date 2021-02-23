import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";

export default function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {}

    getTimelinePhotos();
  }, [userId]);

  return { photos };
}
