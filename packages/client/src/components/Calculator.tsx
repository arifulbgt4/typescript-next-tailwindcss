import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { MAKE_SUM } from 'graphql/mutation/sum';

const Calculator: React.FC<any> = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState('');
  const [sum] = useMutation(MAKE_SUM);
  const [error, setError] = useState('');

  const handleCalculation = async (e) => {
    e.preventDefault();
    const { data } = await sum({
      variables: { x: x ? x : 0, y: y ? y : 0 },
    });
    if (data?.sum) {
      setError('');
      setX(0);
      setY(0);
      setResult(data?.sum);
    } else {
      setError('Invalid Coupon');
    }
  };
  function handleChangeX(e) {
    const { value } = e.currentTarget;
    setX(parseInt(value));
  }
  function handleChangeY(e) {
    const { value } = e.currentTarget;
    setY(parseInt(value));
  }

  return (
    <div className='px-5'>
      <div className='flex flex-col items-center justify-center max-w-[740px] mx-auto border p-10 rounded-[4px] custom-shadow'>
        <form
          onSubmit={handleCalculation}
          className='space-y-3 flex flex-col items-center justify-center'
        >
          <h4 className='text-base text-center text-secondary font-normal'>
            Enter the numbers
          </h4>
          <input
            className='w-[227px] py-2 px-[11px] border border-secondary rounded-sm focus:outline-none'
            type='number'
            placeholder='number 1'
            value={x}
            onChange={handleChangeX}
          />
          <input
            className='w-[227px] py-2 px-[11px] border border-secondary rounded-sm focus:outline-none'
            type='number'
            placeholder='number 2'
            value={y}
            onChange={handleChangeY}
          />
          <button className='max-w-[227px] w-full !mt-[18px] bg-primary text-white border border-primary py-2 px-[11px] rounded-sm hover:bg-transparent hover:text-primary transition'>
            Sum
          </button>
        </form>
        <div className='w-full h-[1px] bg-[#C10708] my-16' />
        <div className='space-y-3 flex flex-col items-center justify-center'>
          <h4 className='text-base text-center text-secondary font-normal'>
            Results
          </h4>
          <input
            className='w-[227px] py-2 px-[11px] border border-[#C10708] rounded-sm focus:outline-none'
            type='text'
            placeholder='0'
            readOnly
            value={result}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
