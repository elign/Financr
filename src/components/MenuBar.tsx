import Link from 'next/link';
import { HomeIcon, Expense, Sent, Received, Assets } from '../icons.js'


const ExpenseCard = () => {
    return (
        <div className="fixed bottom-0 w-full bg-gray-800 flex bg-primary content-center items-center drop-shadow-2xl justify-evenly py-6">
            <Link className="text-white mr-8" href="/dashboard"><HomeIcon /></Link>
            <Link className="text-white mr-8" href="/expenses"><Expense /></Link>
            <Link className="text-white mr-8" href="/income"><Received /></Link>
            <Link className="text-white mr-8" href="/investment"><Assets /></Link>
            <Link className="text-white mr-8" href="/liabilities"><Sent /></Link>
        </div>
    )
}

export default ExpenseCard;