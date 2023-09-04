import React from 'react'

type IInputProps = React.ComponentProps<'input'> & {
    label: string;
}

const generalStyle = {
    fontSize: "1rem",
    color: "var(--color-2)",
    padding: "var(--gap-s) .75rem",
    backgroundColor: "var(--color-4)",
    borderRadius: "var(--gap)",
}

const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: "var(--gap-s)",
    fontWeight: "600",
    ...generalStyle
}

const inputStyle: React.CSSProperties = {
    border: "none",
    fontFamily: "monospace",
    ...generalStyle
}

const DateInput: React.FC<IInputProps> = ({ label, ...rest }) => {

    return (
        <div>
            <label style={labelStyle} htmlFor={label}>{label}</label>
            <input style={inputStyle} id={label} name={label} type='date' {...rest} />
        </div>
    )
}

export default DateInput