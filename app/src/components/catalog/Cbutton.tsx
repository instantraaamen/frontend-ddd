const Cbutton: React.FC = () => (
  <div>
    <h1>Cbutton</h1>

    <button className="
        bg-blue-500
        hover:bg-blue-700 
        text-white 
        font-bold 
        py-2 px-4 m-4
        rounded-full"
        onClick={() => alert("Pill Button Clicked")}
        >
        Pill Button
    </button>

    <button className="
        bg-transparent 
        hover:bg-blue-500 
        text-blue-700 
        font-semibold 
        hover:text-white 
        py-2 px-4 m-4
        border 
        border-blue-500 
        hover:border-transparent 
        rounded"
        onClick={() => alert("Outline Button Clicked")}
    >
        Outline Button
    </button>

    <button className="
        bg-blue-500 
        text-white 
        font-bold 
        py-2 px-4 
        rounded 
        opacity-50 
        cursor-not-allowed" 
        disabled
        onClick={() => alert("Disabled Button Clicked")}
    >
      Disabled Button
    </button>

    <button
    className={`
        bg-blue-500 
        hover:bg-blue-400 
        text-white 
        font-bold 
        py-2 px-4 m-4
        border-b-4 border-blue-700 
        rounded 
        transform           /* トランスフォームを有効化 */ 
        transition-all      /* 全プロパティを滑らかにアニメーション */ 
        duration-200        /* 200ms */ 
        ease-in-out         /* イージング */ 
        shadow-md           /* 標準の影 */ 
        hover:shadow-xl     /* ホバー時により大きい影 */ 
        hover:-translate-y-2/* ホバー時に上へ0.5rem */ 
        active:translate-y-1/* クリック時に下へ0.25rem */ 
    `}
    onClick={() => alert("3D Button Clicked")}
    >
    3D Button
    </button>
        
    <button className="
        bg-indigo-600 
        text-white 
        font-bold 
        py-2 px-4 m-4
        rounded 
        transition 
        duration-300 
        ease-in-out 
        hover:scale-110 
        hover:-translate-y-1"
        onClick={() => alert("Animated Button Clicked")}
    >
        Animated Button
    </button>

    <button className="
        bg-green-500 
        hover:bg-green-600 
        text-white 
        font-bold 
        py-2 px-4 m-4
        rounded 
        inline-flex 
        items-center
        space-x-2"
        onClick={() => alert("Icon Button Clicked")}
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <span>Icon Button</span>

    </button>




  </div>
);
export default Cbutton;
