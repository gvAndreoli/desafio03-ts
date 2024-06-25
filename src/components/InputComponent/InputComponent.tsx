import { Input } from "@chakra-ui/react"

interface IInput {
    label: string
    htmlFor: string
    type: string
    placeholder: string
    value: string
    onChange: (value: string) => void
}

export const InputComponent = ({ label, htmlFor, type, placeholder, value, onChange }: IInput) => {
    return (
        <>
            <label htmlFor={htmlFor}>
                {label}
            </label>
            <Input
                id={htmlFor}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    )
}