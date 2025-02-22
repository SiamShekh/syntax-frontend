import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

interface type {
    label: string
    type: HTMLInputTypeAttribute | undefined
    placeHolder: string
    isRequired?: boolean,
    className?: string,
    id: string,
    isDisabled?: boolean
}

const SyntaxInput = ({ label, type, isDisabled, placeHolder, id, isRequired, className }: type) => {
    const { register } = useFormContext();

    return (
        <div className="flex flex-col gap-2 col-span-1">
            <label className="text-xs font-medium text-white/60">{label}<span className="text-white">{isRequired && ' *'}</span></label>
            <input disabled={isDisabled} type={type} placeholder={placeHolder} {...register(id)} required={isRequired ? isRequired : false} className={`${className} bg-white/10 p-2 rounded-lg border border-white/20 outline-none text-white placeholder:text-sm placeholder:capitalize`} />
        </div>
    );
};

export default SyntaxInput;