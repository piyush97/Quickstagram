import React, { useEffect, useReducer } from "react";
import {
  getUserByUsername,
  getUserPhotosByUsername,
} from "../../services/firebase";
import Header from "./header";
import Photos from "./photos";

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: null,
  followerCount: 0,
};

export default function Profile({ username }) {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const [{ ...user }] = await getUserByUsername(username);
      const photos = await getUserPhotosByUsername(username);

      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
        username={username}
      />
      <Photos photos={photosCollection} />
    </>
  );
}
