import Image from "next/image";
import {useState} from 'react'
import { HomeIcon, Expense, Sent, Received, Assets } from '../icons.js'
import { CircularButton } from "@/components/Button.tsx";
export default function Default() {

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <>
            <div className="p-6 flex flex-col pb-20">
                <p>Hey! Harshit</p>
                <div className="flex flex-col items-center pt-16">
                    <p className="text-sm">Available Balance</p>
                    <h2 className="text-4xl font-semibold pt-1">₹ <span>10,000</span></h2>
                </div>
                <div className="pt-10 flex flex-wrap justify-center gap-10">
                    <CircularButton option="Assets"/>
                </div>
                <div className="pt-10">
                    <div className="flex justify-between drop-shadow-xl py-5 px-5 rounded-md my-6 bg-tertiary">
                        <p>Grocery</p>
                        <p>+ <span>₹</span>400</p>
                    </div>
                    <div className="flex justify-between drop-shadow-xl py-5 px-5 rounded-md my-6 bg-tertiary">
                        <p>Foods</p>
                        <p>+ <span>₹</span>400</p>
                    </div>
                    <div className="flex justify-between drop-shadow-xl py-5 px-5 rounded-md my-6 bg-tertiary">
                        <p>Pancake</p>
                        <p>+ <span>₹</span>400</p>
                    </div>
                    <div className="flex justify-between drop-shadow-xl py-5 px-5 rounded-md my-6 bg-tertiary">
                        <p>Pancake</p>
                        <p>+ <span>₹</span>400</p>
                    </div>
                    <div className="flex justify-between drop-shadow-xl py-5 px-5 rounded-md my-6 bg-tertiary">
                        <p>Pancake</p>
                        <p>+ <span>₹</span>400</p>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-gray-800 flex bg-primary content-center items-center drop-shadow-2xl justify-between py-6 px-6">
                <div className="text-white mr-8"><HomeIcon /></div>
                <div className="text-white mr-8"><Expense /></div>
                <div className="text-white mr-8"><Received /></div>
                <div className="text-white mr-8"><Assets /></div>
                <div className="text-white"><Sent /></div>
            </div>

        </>

    );
}

