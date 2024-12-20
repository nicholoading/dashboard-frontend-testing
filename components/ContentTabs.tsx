const ContentTabs = () => {
    const tabs = ["SUMMARY", "APPLICANTS", "JOB BOARD"];
  
    return (
      <div className="flex border-b bg-white">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm ${
              tab === "JOB BOARD"
                ? "border-b-2 border-blue-500 text-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default ContentTabs;
  