import { useState } from 'react';
import { CheckIcon } from '@primer/octicons-react';
import getRandomHex from '../../../utils/get-random-hex';
import type { CheckboxProps } from './types';

const Checkbox = ({
  checked,
  id,
  onChange,
  children,
  disabled,
}: CheckboxProps) => {
  const [value, setValue] = useState<boolean>(checked || false);
  const inputId = id || `checkbox-${getRandomHex(16)}`;

  const handleChange = () => {
    const newValue = !value;

    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label
      htmlFor={inputId}
      className={`
        flex items-center gap-2
        ${disabled ? 'text-gray-soft' : 'text-primary'}
      `}
    >
      <input
        type="checkbox"
        id={inputId}
        className="hidden"
        checked={value}
        onChange={handleChange}
        disabled={disabled}
      />

      <span
        className={`
          w-4 h-4 rounded-sm border flex items-center justify-center transition-all 
          ${disabled ? 'bg-gray-soft border-gray-dark-soft' : 'bg-blue-white'}
          ${!disabled && value ? 'border-soft-blue' : 'border-secondary'}
        `}
      >
        <CheckIcon
          size={12}
          className={`
            transition-all
            ${value ? 'visible' : 'invisible'} 
            ${disabled ? 'text-gray-dark-soft' : 'text-soft-blue'}
          `}
        />
      </span>

      {children}
    </label>
  );
};

export default Checkbox;
