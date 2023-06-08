import React from 'react';

const nonCheck = 'w-3 h-3 rounded-full bg-white border-2 border-slate-400';
const Check = 'w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-500';

function InputRate(props) {
  /* Router */

  /* State */
  const {
    leftText = '개선이 필요해요',
    rightText = '뼈를 묻고싶어요',
    stateValue,
    setStateValue,
  } = props;

  /* Hooks */

  /* Functions */
  const handleStar = (e) => {
    e.preventDefault();
    setStateValue({ ...stateValue, [e.target.name]: parseInt(e.target.id) });
  };

  /* Render */
  return (
    <div className="w-full max-w-xl">
      <div className="relative">
        <div
          className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200"
          aria-hidden="true"
        ></div>
        <ul className="relative flex justify-between w-full">
          <li className="flex">
            <button
              id={1}
              name="star"
              onClick={handleStar}
              className={stateValue.star === 1 ? Check : nonCheck}
            >
              <span className="sr-only">1</span>
            </button>
          </li>
          <li className="flex">
            <button
              id={2}
              name="star"
              onClick={handleStar}
              className={stateValue.star === 2 ? Check : nonCheck}
            >
              <span className="sr-only">2</span>
            </button>
          </li>
          <li className="flex">
            <button
              id={3}
              name="star"
              onClick={handleStar}
              className={stateValue.star === 3 ? Check : nonCheck}
            >
              <span className="sr-only">3</span>
            </button>
          </li>
          <li className="flex">
            <button
              id={4}
              name="star"
              onClick={handleStar}
              className={stateValue.star === 4 ? Check : nonCheck}
            >
              <span className="sr-only">4</span>
            </button>
          </li>
          <li className="flex">
            <button
              id={5}
              name="star"
              onClick={handleStar}
              className={stateValue.star === 5 ? Check : nonCheck}
            >
              <span className="sr-only">5</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between text-sm text-slate-500 italic mt-3">
        <div>{leftText}</div>
        <div>{rightText}</div>
      </div>
    </div>
  );
}

export default InputRate;
