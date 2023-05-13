import { useState } from 'react'
import { Expense, Received, Assets, Liability, Score } from '../icons.js'
import { CircularButton } from "@/components/Button";
import ExpenseCard from "@/components/ExpenseCard";
import Layout from '@/components/layout.tsx';
import { user } from '../data.js'
const data = user.march23;
console.log(data)

export default function Dashboard() {

    const [selectedButton, setSelectedButton] = useState<string>("Received");

    function onButtonClick(option: string) {
        setSelectedButton(option);
    }

    return (
        <Layout>
            <div className="p-6 flex flex-col pb-20">
                <p>Hey! Harshit</p>
                <div className="flex flex-col items-center pt-16">
                    <p className="text-sm">Available Balance</p>
                    <h2 className="text-4xl font-semibold pt-1">₹ <span>10,000</span></h2>
                </div>
                <div className="pt-10 flex flex-wrap justify-center gap-10">
                    <CircularButton id={1} selected={selectedButton === "Assets"} option="Assets" icon=<Assets /> onButtonClick={onButtonClick} />
                    <CircularButton id={2} selected={selectedButton === "Received"} option="Received" icon=<Received /> onButtonClick={onButtonClick} />
                    <CircularButton id={3} selected={selectedButton === "Expenses"} option="Expenses" icon=<Expense /> onButtonClick={onButtonClick} />
                    <CircularButton id={4} selected={selectedButton === "Liabilities"} option="Liabilities" icon=<Liability /> onButtonClick={onButtonClick} />
                    {/* <CircularButton id={5} selected={selectedButton === "Score"} option="Score" icon=<Score /> onButtonClick={onButtonClick} /> */}
                </div>
                <div className="pt-10">
                    <ExpenseCard amount={100} name="Fruits" />
                    <ExpenseCard amount={-500} name="Pans" />
                    <ExpenseCard amount={600} name="Fruits" />
                    <ExpenseCard amount={-100} name="Cake" />
                    {selectedButton &&
                        console.log(data);
                        (data.[selectedButton].map((item, index) => (
                            <ExpenseCard amount={item.amount} name={item.name} />
                        )))
                    }
                </div>
            </div>
        </Layout>
    );
}

