import React from 'react'
import Icons, {IconProps} from './Icons'

type InputProps = {
    withIcon?: boolean
    iconProps?: IconProps
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({ withIcon, iconProps, ...rest }: InputProps) {

    return (
        <div className="flex justify-center mb-10 relative">
            {withIcon ? 
                <div className="absolute left-3 py-2">
                    <Icons icon={iconProps?.icon} color={iconProps?.color} />
                </div>
                : null
            }
            <input {...rest} 
                className={`shadow appearance-none border rounded w-full py-2 px-3 ${withIcon ? 'pl-10' : ''} leading-tight focus:outline-none focus:shadow-outline`}
                />
        </div>
    )
}

export default Input