const Review = () => {
  return (
    <>
      {/* <!-- ====== Review Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default     ">
        <div className="flex h-screen bg-white">
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Toolbar */}
            <div className="h-12 border-b border-gray-200 flex items-center px-4 space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 border border-gray-400"></div>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 border border-gray-400"></div>
              </button>
            </div>

            {/* Editor Area */}
            <div className="flex-1 p-4">
              <div className="border border-gray-200 rounded-lg p-4 h-full">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Completion Options */}
          <div className="w-80 border-l border-gray-200">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Pure Completion</h2>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <div className="w-4 h-4 border border-gray-400"></div>
                </button>
              </div>

              {/* Completion Options */}
              <div className="space-y-4">
                {[1, 2].map((option) => (
                  <div
                    key={option}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Option {option}
                      </span>
                      <span className="text-sm text-gray-600">
                        42 words, 549 characters
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="text-sm text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-full border border-blue-200 flex items-center gap-2">
                      <span>Copy</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Review Section End ====== --> */}
    </>
  );
};

export default Review;
