export const Cnavbar: React.FC = () => (
  <nav className="
    bg-white 
    border-b 
    px-4 py-2 
    flex 
    justify-between 
    items-center
    ">
    <div className="font-bold text-xl">ロゴ</div>
    <ul className="flex space-x-4">
      <li><a href="#" className="hover:text-blue-500">ホーム</a></li>
      <li><a href="#" className="hover:text-blue-500">機能</a></li>
      <li><a href="#" className="hover:text-blue-500">お問い合わせ</a></li>
    </ul>
  </nav>
);
