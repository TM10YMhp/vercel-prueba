import React,{useState} from 'react';

export default function SearchBar(props){
  const [input,setInput] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.onSearch(input);
    }}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type='submit'
        value='buscar'
      />
    </form>
  )
}
