import { useState } from 'react'
import { Expense, Received, Assets, Liability, Score } from '../icons.js'
import { CircularButton } from "@/components/Button.tsx";
import ExpenseCard from "@/components/ExpenseCard.tsx";
import MenuBar from "@/components/MenuBar.tsx"
import Layout from '@/components/layout.tsx';
export default function Default() {

    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    function onButtonClick(id : number) {
        setSelectedButton(id);
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
                    <CircularButton id = {1} selected = {selectedButton === 1} option="Assets" icon=<Assets /> onButtonClick={onButtonClick} />
                    <CircularButton id = {2} selected = {selectedButton === 2} option="Received" icon=<Received /> onButtonClick={onButtonClick} />
                    <CircularButton id = {3} selected = {selectedButton === 3} option="Expenses" icon=<Expense /> onButtonClick={onButtonClick} />
                    <CircularButton id = {4} selected = {selectedButton === 4} option="Liabilities" icon=<Liability /> onButtonClick={onButtonClick} />
                    <CircularButton id = {5} selected = {selectedButton === 5} option="Score" icon=<Score /> onButtonClick={onButtonClick} />
                </div>
                <div className="pt-10">
                    <ExpenseCard amount={100} name="Fruits"/>
                    <ExpenseCard amount={-500} name="Pans"/>
                    <ExpenseCard amount={600} name="Fruits"/>
                    <ExpenseCard amount={-100} name="Cake"/>
                </div>
            </div>
        </Layout>
    );
}

