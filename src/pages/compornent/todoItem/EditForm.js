import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateText } from "../../../store/todolistSlice";

function EditForm({ id, text }) {
  const [inputEditingValue, setInputEditingValue] = useState(text);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        value={inputEditingValue}
        size="20"
        onChange={(e) => {
          setInputEditingValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(
              updateText({
                id: id,
                objValue: {
                  text: inputEditingValue,
                  editing: false,
                },
              })
            );
          }
        }}
      />
      <button
        onClick={() => {
          dispatch(
            updateText({
              id: id,
              objValue: {
                text: inputEditingValue,
                editing: false,
              },
            })
          );
        }}
      >
        儲存
      </button>
    </>
  );
}

export default EditForm;
