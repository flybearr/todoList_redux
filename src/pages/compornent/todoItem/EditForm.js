import { useState } from 'react';
import styled from 'styled-components';

function EditForm({ id, updateText, text }) {
  const [inputEditingValue, setInputEditingValue] = useState(text);
  return (
    <>
      <input
        type="text"
        value={inputEditingValue}
        size='20'
        onChange={(e) => {
          setInputEditingValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            updateText(id, {
              text: inputEditingValue,
              editing: false,
            });
          }
        }}
      />
      <button
        onClick={() => {
          updateText(id, {
            text: inputEditingValue,
            editing: false,
          });
        }}
      >
        儲存
      </button>
    
    </>
  );
}

export default EditForm;
