import { Suspense } from "react";
import UserList from "./components/userList";



export default async function User() {
    return (
        <>
            <h1>User List</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <UserList />
            </Suspense>
        </>
    );
}