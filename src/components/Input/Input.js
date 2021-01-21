import React from 'react';
import classes from './Input.module.scss';

const Input = props => {
  const { label, rightContent, ...otherProps } = props;

  return (
    <>
      {label ? <label className={classes['input-label']}>{label}</label> : null}
      <div className={classes['input-container']}>
        <div className={classes['input-main-content']}>
          <input className={classes.input} {...otherProps} />
        </div>
        {rightContent || null}
      </div>
    </>
  );
};

export default Input;
