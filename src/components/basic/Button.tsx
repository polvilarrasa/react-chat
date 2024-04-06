import React from 'react'

type ButtonProps = {
    text: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ text, ...rest }: ButtonProps) {

    return (
        <button
            {...rest}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
            title={text}>
            <span>{text}</span>
        </button>
    )
}

export default Button