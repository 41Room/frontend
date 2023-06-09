import React from 'react';

function InputSelect(props) {
  /* Router */

  /* State */
  const { Name, divCN, inputName, optionList, stateValue, setStateValue } =
    props;

  /* Hooks */

  /* Functions */
  const handleSelect = (e) => {
    setStateValue({ ...stateValue, [e.target.name]: e.target.value });
  };

  /* Render */
  return (
    <div className={divCN}>
      <label className="block text-sm font-medium mb-1" htmlFor="country">
        {Name} <span className="text-rose-500">*</span>
      </label>
      <select
        className="form-select w-full"
        name={inputName}
        onChange={handleSelect}
      >
        {optionList &&
          optionList.map((item, index) => {
            return (
              <option key={index} value={item.building_id}>
                {item.building_title}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default InputSelect;
