import { FiCreditCard } from "react-icons/fi";

interface Props {
    color?: | "one" | "two" | "three" | "four" | "five",
    icon?: JSX.Element,
    title?: string,
    value?: string
}

const StatCard = ({ color = "one", icon, title = 'Card Title', value = '200k' }: Props) => {
    const statCardClasses = `stat-card-${color} w-[300px] h-[200px] rounded-2xl p-10 flex flex-col gap-5 z-[1] relative transition-all`
    const  textClasses = `text-[18px]`

    return (
        <div className={statCardClasses}>
            { !icon ? <FiCreditCard size="25"/> : icon}
            <p className={textClasses}>{title}</p>
            <p className={textClasses}>{value}</p>
        </div>
    )
}

export default StatCard
