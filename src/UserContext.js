import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);

    const setUserRoleValue = (userRole) => {
        setUserRole(userRole);
    };

    return (
        <UserContext.Provider value={{ userRole, setUserRole: setUserRoleValue }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
