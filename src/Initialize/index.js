import React from 'react';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import LogIn from '../pages/LogIn';
import Routes from '../routes';
import { useAuth } from '../utils/context/authContext';

function Initialize() {
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="background">
        {user ? (
          <>
            <div className="mainContainer">
              <NavBar />
              <Routes user={user} />
            </div>
          </>
        ) : (
          <LogIn />
        )}
      </div>
    </>
  );
}

export default Initialize;
