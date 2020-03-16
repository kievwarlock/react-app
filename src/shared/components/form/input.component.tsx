import "./input.component.scss"
import * as React from "react";
import {CommonProps} from "@/shared/types/types";
import {classes} from "@/shared/utils/utils";

export type InputType = CommonProps & {
    value?: number | string;
    placeholder?: string;
    onClick?: () => void;
    onChange?: (newValue: string ) => void;
}

export const Input: React.FC<InputType> = (
    {
        value,
        placeholder,
        onClick,
        onChange,
        ...CommonProps
    }) => {

    const classNames = classes("input-text", CommonProps.className);

    return (
        <div className={classNames}>
            <input
                type="text"
                className="input-text__input"
                value={value}
                placeholder={placeholder}
                onClick={onClick}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
};
