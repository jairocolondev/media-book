import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
  return () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
		console.log(token)
        const user = result.user;
		console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
		alert(errorCode)
        const errorMessage = error.message;
		alert(errorMessage)
        const email = error.customData.email;
		alert(email)
        const credential = GoogleAuthProvider.credentialFromError(error);
		alert(credential)
      });
  };
};
