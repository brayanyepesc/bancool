interface Props {
    title: string;
    description: string;
}

export const BankHeader = ({ title, description }: Props) => {
    return (
        <>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-5xl font-bold">Bancool</h2>
            <p className="text-xl font-bold text-gray-600">{title}</p>
            <p className="text-gray-500">{description}</p>
        </>
    )
}