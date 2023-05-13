interface expenseCardProps {
    name: string;
    amount: number;
}

const ExpenseCard: React.FC<expenseCardProps> = ({ name, amount }) => {
    return (
        <div className="flex justify-between drop-shadow-xl py-5 px-5 rounded-md my-6 bg-tertiary">
            <p>{name}</p>
            <p style={{ "color": `${amount > 0 ? "green" : "red"}`, "font-weight": "600" }}>
                {amount >= 0 ? "+ " : "- "}
                ₹{amount >= 0 ? amount : -amount}
            </p>
        </div>
    )
}

export default ExpenseCard;