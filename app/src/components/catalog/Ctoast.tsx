type Props = { message: string; onClose: () => void; };

export const Toast: React.FC<Props> = ({ message, onClose }) => (
  <div className="fixed bottom-4 right-4 bg-white border-l-4 border-blue-500 shadow-lg p-4 flex items-start space-x-2">
    <div className="flex-1">{message}</div>
    <button onClick={onClose} className="font-bold">×</button>
  </div>
);
