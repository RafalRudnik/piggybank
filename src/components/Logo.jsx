function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[50px] text-4xl text-indigo-600">
        {/* <img src="../src/img/Logo.png" alt="logo"></img> */}
        <i className="ti ti-pig-money"></i>
      </div>
      <div>
        <p className="font-semibold">Piggy Bank</p>
        <p className="text-xs tracking-wide text-stone-400">Life is easy</p>
      </div>
    </div>
  );
}

export default Logo;
