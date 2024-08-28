"use client"
export const Select = ({ options, onSelect }: {
    onSelect: (value: string) => void;
    options: {
        key: string;
        value: string;
    }[];
}) => {
    return (
        <select onChange={(e) => { onSelect(e.target.value) }}
            className="bg-slate-800 border border-slate-700 text-slate-400  rounded-lg w-full p-2.5">
            {options.map((option, index) => <option key={index} value={option.key}>{option.value}</option>)}
        </select>
    )
}
