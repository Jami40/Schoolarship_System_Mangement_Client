import React from 'react';
import { useUserRole } from '../../hooks/useRole';
import UserDashboard from './UserDashboard';
import ModeratorDashboard from './ModeratorDashboard';
import AdminDashboard from './AdminDashboard';

export default function Dashboard() {
  const { userRole, loading } = useUserRole();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-xl text-gray-700 font-semibold">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  // Route to appropriate dashboard based on role
  if (userRole === 'admin') {
    return <AdminDashboard />;
  } else if (userRole === 'moderator') {
    return <ModeratorDashboard />;
  } else {
    return <UserDashboard />;
  }
}
