import React from 'react';

interface ExpenseCardProps {
  name: string;
  amount: number;
  attribute: string;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ name, amount, attribute }) => {
  return (
    <div className="flex justify-between drop-shadow-xl py-5 px-8 rounded-2xl bg-tertiary w-96">
      <div>
        <p className='text-lg'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <p className="text-sm text-gray-600 mt-2">{attribute}</p>
      </div>
      <div>
        <p
          style={{
            color: `${amount > 0 ? 'green' : 'red'}`,
            fontWeight: 600,
          }}
        >
          {amount >= 0 ? '+ ' : '- '}
          ₹{Math.abs(amount)}
        </p>
      </div>
    </div>
  );
};

export default ExpenseCard;
