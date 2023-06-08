import { useState } from "react";
import Image from "next/image";
import { Expense, Received, Assets, Liability, Score } from "../icons";
import { CircularButton } from "@/components/Button";
import ExpenseCard from "@/components/ExpenseCard";
import Layout from "@/components/layout";
import { user } from "../data";

export default function Dashboard(): JSX.Element {
<<<<<<< Updated upstream
  const [selectedButton, setSelectedButton] = useState<string>('received');
=======
  const [selectedButton, setSelectedButton] = useState<string>("");
>>>>>>> Stashed changes

  function onButtonClick(option: string): void {
    setSelectedButton(option);
  }

<<<<<<< Updated upstream
  type UserData = {
    [key: string]: { amount: number; name: string; attribute: string }[];
  };
  
  const filteredData: { amount: number; name: string; attribute: string }[] =
    (user?.march23 as UserData)?.[selectedButton] || [];
    
=======
  const filteredData: { amount: number; name: string; attribute: string }[] =
    user.march23[selectedButton] || [];

>>>>>>> Stashed changes
  return (
    <Layout>
      <div className="p-6 flex flex-col pb-28">
        <div className="flex flex-col items-center pt-16">
          <p className="text-sm">Available Balance</p>
          <h2 className="text-4xl font-semibold pt-1">
            ₹ <span>10,000</span>
          </h2>
        </div>
        <div className="pt-10 flex flex-wrap justify-evenly gap-10">
          <CircularButton
            id={1}
            selected={selectedButton === "Assets"}
            option="Assets"
            icon={<Assets />}
            onButtonClick={onButtonClick}
          />
          <CircularButton
            id={2}
            selected={selectedButton === "Received"}
            option="Received"
            icon={<Received />}
            onButtonClick={onButtonClick}
          />
          <CircularButton
            id={3}
            selected={selectedButton === "Expenses"}
            option="Expenses"
            icon={<Expense />}
            onButtonClick={onButtonClick}
          />
          <CircularButton
            id={4}
            selected={selectedButton === "Liabilities"}
            option="Liabilities"
            icon={<Liability />}
            onButtonClick={onButtonClick}
          />
          <CircularButton
            id={5}
            selected={selectedButton === "Score"}
            option="Score"
            icon={<Score />}
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
            <Image
              src="/images/nothing.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
