import { useState } from 'react';

import vectorDownSmall from '../../../../assets/icons/ic_vector_down_small.svg';

import style from './Dropdown.module.css';

interface DropdownProps {
  setItem: (items: string) => void;
}

export default function Dropdown({ setItem: setItem }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('이사 빠른순');

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
    setItem(option);
  };

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={style.dropdown} onClick={dropdownHandler}>
        {selectedOption} <img src={vectorDownSmall} alt='vectorDownSmall' />{' '}
      </button>
      {isOpen && (
        <div className={style.menu}>
          <div
            onClick={() => selectOption('이사 빠른순')}
            className={style.text}
          >
            이사 빠른순
          </div>
          <div
            onClick={() => selectOption('요청일 빠른순')}
            className={style.text}
          >
            요청일 빠른순
          </div>
        </div>
      )}
    </div>
  );
}
