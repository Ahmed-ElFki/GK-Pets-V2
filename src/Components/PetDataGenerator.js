import React from "react";

function PetDataGenerator({ data, dataIcon }) {
  return (
    <span>
      {dataIcon} {data}
    </span>
  );
}

export default PetDataGenerator;
