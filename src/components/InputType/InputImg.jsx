import React, { useEffect, useState } from 'react';

function InputImg(props) {
  /* Router */
  /* State */
  const {
    Name,
    essential = true,
    accept = 'image/*',
    divCN,
    labelCN = 'block text-sm font-medium mb-1',
    inputName,
    inputCN = 'form-input w-full',
    inputType = 'file',
    stateValue,
    setStateValue,
  } = props;

  /* Hooks */

  /* Functions */
  const handleValue = (e) => {
    console.log('file');
    console.log(e.target.value);
    setStateValue({ ...stateValue, [e.target.name]: e.target.value });

    console.log('Register');
    console.log(stateValue);
  };

  /* Render */
  return (
    <div className={divCN}>
      <label className={labelCN} htmlFor="name">
        {Name}
        {essential && <span className="text-rose-500"> *</span>}
      </label>
      <input
        accept={accept}
        id={inputName}
        className={inputCN}
        type={inputType}
        name={inputName}
        onChange={handleValue}
      />
    </div>
  );
}

export default InputImg;