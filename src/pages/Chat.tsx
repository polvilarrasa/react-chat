import Avatar from '../components/chat/Avatar'
import ChatItem from '../components/chat/ChatItem';
import SearchBar from '../components/chat/SearchBar'

function Chat() {

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    const onClickChatItem = (index: number) => {
        console.log("Chat item clicked: ", index);
    }

    return (
        <div className="bg-slate-100 w-100 h-screen">
            <div className="container mx-auto py-11 flex">
                {/* Profile and list container */}
                <div className="flex justify-start flex-col rounded-lg shadow-lg p-5 min-w-80 min-h-80 bg-white">
                    <Avatar />
                    <SearchBar onChange={onSearchChange} />
                    <div className="max-h-80 overflow-scroll">
                        <p className="font-bold font-mono mb-3">Chats</p>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                            <ChatItem key={index} 
                                index={index} 
                                name="Martin Gurley" 
                                img="https://themesdesign.in/webadmin/layouts/assets/images/users/avatar-3.jpg" 
                                lastMessage="Hola bon dia?Hola bon diakljasdjklfadsjklñdas"
                                time="10:00 PM" 
                                unread={index % 2 == 0}
                                active={index == 1} 
                                onClick={() => onClickChatItem(index)} 
                            />
                        ))}
                    </div>
                </div>
                {/* Chat container */}
                <div className="flex justify-start flex-col rounded-lg ml-6 shadow-lg p-5 w-3/4 min-h-80 bg-white">
                    <div>Header</div>
                    <div>Chat</div>
                    <div>Footer</div>
                </div>
            </div>
        </div>
    )
}

export default Chat