import Input from '../basic/Input'

function SearchBar(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Input 
        withIcon={true} 
        iconProps={{icon: 'search', color: 'grey'}} 
        placeholder="Search" 
        id='serach-chat'
        {...props}
    />
  )
}

export default SearchBar