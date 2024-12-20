import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left Section */}
      <div>
        <h1 className="text-lg font-bold">Team A BugCrusher </h1>
        <p className="text-sm text-gray-600 flex items-center">
          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1" />
          SMK St.Columba Miri
        </p>
      </div>

     
    </header>
  );
};

export default Header;
