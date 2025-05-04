import { useState } from 'react';

export const Cdropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-800"
      >
        メニュー
      </button>
      {open && (
        <div className="origin-top-left absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
          <ul>
            <li className="text-blue-700 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              項目1
            </li>
            <li className="text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              項目2
            </li>
            <li className="text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              項目3
            </li>
          </ul>
        </div>
      )}
    </div>
);
};
