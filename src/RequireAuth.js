import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./AuthContext";

export default function RequireAuth() {
    const { currentUser, loading } = useAuth();
    if (!currentUser && !loading) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}
