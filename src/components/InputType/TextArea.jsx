import React from 'react';

function TextArea(props) {
  /* Router */

  /* State */
  const {
    Name,
    essential = true,
    divCN = 'flex-1',
    labelCN = 'block text-sm font-medium mb-1',
    inputName,
    inputCN = 'form-input w-full',
    rows = 10,
    placeholder,
    stateValue,
    setStateValue,
  } = props;

  /* Hooks */

  /* Functions */
  const handleValue = (e) => {
    setStateValue({ ...stateValue, [e.target.name]: e.target.value });
  };

  /* Render */
  return (
    <div className={divCN}>
      <label className={labelCN} htmlFor="card-state">
        {Name}
        {essential && <span className="text-rose-500"> *</span>}
      </label>
      <textarea
        id={inputName}
        name={inputName}
        className={inputCN}
        rows={rows}
        style={{ resize: 'none' }}
        placeholder={placeholder}
        onBlur={handleValue}
      />
    </div>
  );
}

export default TextArea;
