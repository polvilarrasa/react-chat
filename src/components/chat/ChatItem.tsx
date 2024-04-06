
type ChatItemProps = {
    index: number
    name: string
    img: string
    lastMessage: string
    time: string
    unread: boolean
    active: boolean
    onClick: () => void
}

function ChatItem(props: ChatItemProps) {

    const containerCssClass = props.active ? 'bg-blue-700 shadow-md' : 'bg-white hover:bg-slate-200'
    const textColor = props.active ? 'text-white' : 'text-black'

    return (
        <div key={props.index} 
            onClick={props.onClick}
            className={`flex justify-between items-center my-3 p-2 cursor-pointer rounded-lg ${containerCssClass}`}>
            <div className="flex items-center">
                <img className='w-10 h-10 rounded-full mr-2'
                    src={props.img} alt="" />
                <div className="flex flex-col items-stretch justify-between h-10 max-w-36">
                    <p className={`text-sm font-bold ${textColor}`}>{props.name}</p>
                    <p className={`text-xs line-clamp-1 ${textColor}`}>{props.lastMessage}</p>
                </div>
            </div>
            <div className={`flex flex-col items-stretch h-10 ${props.unread ? 'justify-between' : 'justify-end'}`}>
                {props.unread ? 
                    <span className="p-1 rounded-full text-xs font-medium bg-blue-800 self-end"></span>
                : null}
                <p className={`text-xs ${textColor}`}>{props.time}</p>
            </div>
        </div>
    )
}

export default ChatItem