"use client"
export const TextInput = ({
    placeholder,
    onChange,
    label
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
}) => {
    return (
        <div className="pt-2">
            <label className="block mb-2 text-sm font-medium ">{label}</label>
            <input onChange={(e) => onChange(e.target.value)}
                type="text"
                id="first_name"
                className="w-full p-2.5 border border-slate-700 rounded-lg bg-slate-800 text-slate-200"
                placeholder={placeholder}
            />
        </div>
    )
}