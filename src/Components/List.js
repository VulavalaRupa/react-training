import React from 'react';

const List = ({ formData }) => {
  return (
    <div>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default List;
