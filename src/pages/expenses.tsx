import { useState } from 'react';
import Image from 'next/image';
import { General, Gift, Unexpected } from '../icons';
import { CircularButton } from '@/components/Button';
import ExpenseCard from '@/components/ExpenseCard';
import Layout from '@/components/layout';
import { user } from '../data';

export default function Expenses(): JSX.Element {
  const [selectedAttribute, setSelectedAttribute] = useState<string>("");

  function onButtonClick(option: string) {
    setSelectedAttribute(option);
  }


  const filteredData = selectedAttribute
    ? user.march23.Expenses.filter((item) => item.attribute === selectedAttribute)
    : user.march23.Expenses;

  return (
    <Layout>
      <div className="p-6 flex flex-col pb-28">
        <div className="flex flex-col items-center pt-8">
          <p className="text-sm">Total Expenses</p>
          <h2 className="text-4xl font-semibold pt-1">
            -₹ <span className=''>10,000</span>
          </h2>
        </div>
        <div className="pt-10 flex flex-wrap justify-evenly gap-10">
          <CircularButton
            id={1}
            selected={selectedAttribute === 'general'}
            option="general"
            icon={<General />}
            onButtonClick={onButtonClick}
          />
          <CircularButton
            id={2}
            selected={selectedAttribute === 'gifts'}
            option="gifts"
            icon={<Gift />}
            onButtonClick={onButtonClick}
          />
          <CircularButton
            id={3}
            selected={selectedAttribute === 'unexpected'}
            option="unexpected"
            icon={<Unexpected />}
            onButtonClick={onButtonClick}
          />
        </div>

        <div className="flex gap-7 flex-wrap justify-center mt-10">
          {filteredData.length !== 0 ? (
            filteredData.map((item, index) => (
              <ExpenseCard
                key={index}
                amount={item.amount}
                name={item.name}
                attribute={item.attribute}
              />
            ))
          ) : (
            <Image src="/images/nothing.jpeg" width={500} height={500} alt="Picture of the author" />
          )}
        </div>
      </div>
    </Layout>
  );
}
