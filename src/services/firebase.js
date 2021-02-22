import { firebase } from "../lib/firebase";

export const doesUsernameExist = async (username) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();
  return result.docs.map((user) => user.data().length > 0);
};
