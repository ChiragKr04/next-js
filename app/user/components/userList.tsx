import UserModel from "@/models/userModel";
import Link from "next/link";
import { Suspense } from "react";

export default async function UserList() {
  async function fetchUserList(): Promise<UserModel[]> {
    var res = await fetch('https://reqres.in/api/users?page=1&per_page=10')
      .then(response => response.json());
    return res.data;
  }

  function goToUserDetails() {
    console.log('User details clicked');
  }

  let userData: UserModel[] = await fetchUserList();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {userData.map((user) => (
            <Link href={`user/${user.id}`} key={user.id}>
              <li>
                <img src={user.avatar} alt={user.first_name} />
                <p>{user.first_name} {user.last_name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </Suspense>
    </>
  );
}