type ButtonProps = {
  label: string;
  onClick?: () => void;
};



// bg-blue-500：背景色
// hover:bg-blue-700：ホバー時の背景色（疑似クラス）
// py-2 px-4：パディング
// rounded：角丸


export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="
      bg-blue-500 
      hover:bg-blue-700 
      text-white 
      font-bold 
      py-2 
      px-4 
      rounded
    "
  >
    {label}
  </button>
);
