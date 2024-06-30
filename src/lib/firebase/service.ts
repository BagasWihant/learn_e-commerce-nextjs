import {
    addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";

const fireStore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(fireStore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(fireStore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(
  userData: {
    email: string;
    password: string;
    name: string;
    fullName: string;
    phone: string;
    role?: string;
  },
  callback: Function
) {
  const q = query(
    collection(fireStore, "users"),
    where("email", "==", userData.email)
  );

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if(data.length > 0) {
    callback(false);
  }else{
    await addDoc(collection(fireStore, "users"), userData)
        .then(() => {
          callback(true);
        })
        .catch((error) => {
          callback(false);
          console.log(error);          
        });
  }
}
