import { useUsers } from '../../../features/tanstack/hooks/useUsers';

const Users = () => {
    const {data:users,isLoading} = useUsers();
    return (
        <div>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <div>
                {users && users.length > 0 && (
                    users.map((user) => <b key={user.id} className='d-block'>{user.name}</b>)
                )}
                </div>
            )
            }
        </div>
    );
}

export default Users;
