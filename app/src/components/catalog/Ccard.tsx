type Props = {
  title: string;
  description: string;
  imageUrl?: string;
};

export const Card: React.FC<Props> = ({ title, description, imageUrl }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    {imageUrl && <img className="w-full" src={imageUrl} alt={title} />}
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        詳細を見る
      </button>
    </div>
  </div>
);

