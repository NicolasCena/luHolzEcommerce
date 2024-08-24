import React, { FormEvent, useState } from "react";

const UploadProductstsx = () => {
  const [errorForm, setErrorForm] = useState(true);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <button type="submit" disabled={errorForm}></button>
      </form>
    </div>
  );
};

export default UploadProductstsx;
