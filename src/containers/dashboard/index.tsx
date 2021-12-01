import React from 'react';
import requireAuth from 'hocs/require-auth';

const Dashboard: React.FC = () => {
  return <div>DASHBOARD</div>;
};

export default requireAuth(Dashboard);
