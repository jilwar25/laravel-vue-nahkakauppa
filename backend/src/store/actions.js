import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { SET_USER, SET_STATUS } from "./mutations";

export const registerUser = async ({ commit }, { email, password }) => {
  commit(SET_STATUS, 'loading');
  const auth = getAuth();
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    commit(SET_USER, userCredential.user);
    commit(SET_STATUS, 'success');
  } catch (error) {
    commit(SET_STATUS, `error: ${error.message}`);
  }
};

export const loginUser = async ({ commit }, { email, password }) => {
  commit(SET_STATUS, 'loading');
  const auth = getAuth();
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    commit(SET_USER, userCredential.user);
    commit(SET_STATUS, 'success');
  } catch (error) {
    commit(SET_STATUS, `error: ${error.message}`);
  }
};
