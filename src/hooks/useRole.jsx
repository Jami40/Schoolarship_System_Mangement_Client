import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

export const useUserRole = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setUserRole(data?.role || 'user');
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching user role:', err);
          setUserRole('user');
          setLoading(false);
        });
    } else {
      setUserRole(null);
      setLoading(false);
    }
  }, [user]);

  return { userRole, loading };
};

export const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users/admin/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setIsAdmin(data.admin);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error checking admin status:', err);
          setIsAdmin(false);
          setLoading(false);
        });
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, [user]);

  return { isAdmin, loading };
};

export const useModerator = () => {
  const { user } = useContext(AuthContext);
  const [isModerator, setIsModerator] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users/moderator/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setIsModerator(data.moderator);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error checking moderator status:', err);
          setIsModerator(false);
          setLoading(false);
        });
    } else {
      setIsModerator(false);
      setLoading(false);
    }
  }, [user]);

  return { isModerator, loading };
};
