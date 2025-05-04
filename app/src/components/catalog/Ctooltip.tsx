type Props = { text: string; tooltip: string; };

export const Tooltip: React.FC<Props> = ({ text, tooltip }) => (
  <div className="relative inline-block">
    <span className="underline cursor-help">{text}</span>
    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
      {tooltip}
    </div>
  </div>
);
