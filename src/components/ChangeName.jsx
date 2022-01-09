import { useState } from "react";
import { changeName } from "../utils/wallet";

export default function ChangeName(props) {
  const [name, setName] = useState("");

  return (
    <div className="flex">
      <input
        type="text"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button
        onClick={() => {
          changeName(name);
        }}
        className="bg-red-500 px-6 py-2 rounded-sm text-xs font-semibold uppercase text-white cursor-pointer"
      >
        Set Name
      </button>
    </div>
  );
}
