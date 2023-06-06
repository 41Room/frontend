import React, { useState } from 'react';

function InputText(props) {
  /* Router */
  /* State */
  const {
    Name,
    essential = true,
    divCN,
    labelCN = 'block text-sm font-medium mb-1',
    inputName,
    inputCN = 'form-input w-full',
    inputType = 'text',
    signupValue,
  } = props;

  const { signupInfo, setSignupInfo } = signupValue;
  const [checkPwd, setCheckPwd] = useState(true);
  /* Hooks */

  /* Functions */
  const handleValue = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };
  const handlePwdCheck = (e) => {
    e.target.value !== signupInfo.pwd ? setCheckPwd(false) : setCheckPwd(true);
  };
  /* Render */
  return (
    <div className={divCN}>
      <label className={labelCN} htmlFor="name">
        {Name}
        {essential && <span className="text-rose-500"> *</span>}
        {!checkPwd && (
          <span className="text-rose-500">비밀번호가 다릅니다.</span>
        )}
      </label>
      <input
        id={inputName}
        className={inputCN}
        type={inputType}
        name={inputName}
        onBlur={inputName === 'checkpwd' ? handlePwdCheck : handleValue}
      />
    </div>
  );
}

export default InputText;
