interface TableHeaderProps {
    name: string;
    className?: string;
    active?: boolean;
}

export default function TableHeader({ name, className, active }: TableHeaderProps) {
    return (
        <th className={className}>
            <div className="flex items-center">
                <p className={`text-base leading-none font-bold uppercase hover:text-red-600 transition-colors ${active === true ? 'text-red-600' : 'text-white'}`}>
                    {name}
                </p>
            </div>
        </th>
    )
}