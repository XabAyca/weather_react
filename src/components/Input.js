import React from 'react';

const Input = () => {
  const [value, setValue] = React.useState("")

  const upperCase = (e) => {
    e.target.value = (e.target.value).toLowerCase();
  }

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onInput={upperCase}>
      </input>
    </form>
  )
};

export default Input