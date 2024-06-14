import { Suspense } from "react";
import UserList from "./components/userList";



export default async function User() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UserList />
      </Suspense>
    </>
  );
}