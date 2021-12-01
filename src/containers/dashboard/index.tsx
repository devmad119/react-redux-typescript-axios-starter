import React from 'react';
import requireAuth from 'hocs/require-auth';

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default requireAuth(Dashboard);
