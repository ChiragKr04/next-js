import UserModel from "../../../models/userModel";



export default async function User({ params }: { params: any }) {

    async function fetchUser(): Promise<UserModel> {
        var res = await fetch(`https://reqres.in/api/users/${params.userId}`)
            .then(response => response.json());
        return res.data;
    }

    let userData: UserModel = await fetchUser();

    return (
        <>
            <h1>User List</h1>
            <img src={userData.avatar} alt={userData.first_name} />
            <p>{userData.first_name} {userData.last_name}</p>
        </>
    );
}