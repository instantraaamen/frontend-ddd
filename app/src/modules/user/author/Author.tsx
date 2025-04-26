import React from 'react';

type Author = {
  name: string;
};

const Author: React.FC<Author> = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

export default Author;
