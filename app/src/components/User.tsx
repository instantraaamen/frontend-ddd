import React from 'react';
import { useParams } from 'react-router-dom';

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>User: {id}</h1>
      <p>Details about user {id}.</p>
    </div>
  );
};
export default User;
