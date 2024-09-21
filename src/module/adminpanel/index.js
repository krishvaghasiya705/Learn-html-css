import React from 'react';
import { useUserContext } from '../../components/usercontext/UserContext';

function AdminPanel() {
    const { users } = useUserContext();
    const adminEmail = "admin@example.com";

    return (
        <div>
            <h2>User Profiles</h2>
            <ul>
                {users.filter(user => user.email !== adminEmail).map(user => (
                    <li key={user.email}>
                        {user.firstName} {user.lastName} - {user.userType}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminPanel;
