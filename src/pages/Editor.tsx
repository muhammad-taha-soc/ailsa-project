import { useState } from 'react';

const Editor = () => {
  const [activeNav, setActiveNav] = useState('editor');
  const [text, setText] = useState('');
  const [panelMode, setPanelMode] = useState('completion');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [countType, setCountType] = useState('words');
  const [selectedText, setSelectedText] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  const sampleText = `Unspoken sea silver hearties smartly deck black privateer strike lubbers. Pay sweat privateer yawl spirits piracy. Bouncer drivers shop. Fishnet loot hoist la. Bowsprit loot heavy swab deck. Rope piracy schooner swab to to piracy privateer schooner. Rope piracy schooner swab to to piracy seven. Boat. ship to bounties poopdeck round poop.`;

  return (
    <>
      {/* <!-- ====== Editor Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default     ">
        <div className="flex h-screen bg-white">
          <div className="flex-1 flex">
            {/* Editor Area */}
            <div className="flex-1 flex flex-col">
              {/* Toolbar */}
              <div className="h-12 border-b border-gray-200 flex items-center px-4 gap-2">
                {['⟲', '⌘', '⌥', '↑', '↓', '⌫'].map((icon, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded"
                  >
                    {icon}
                  </button>
                ))}
              </div>

              {/* Editor */}
              <div className="flex-1 p-4">
                <div className="h-full border border-gray-200 rounded-lg">
                  <textarea
                    className="w-full h-full resize-none p-4 focus:outline-none rounded-lg"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Start typing here..."
                  />
                </div>
              </div>

              {/* Word Count */}
              <div className="px-4 py-2 text-sm text-gray-500">
                {wordCount} words, {charCount} characters
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-[320px] border-l border-gray-200">
              {/* {panelMode === 'completion' && ( */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-medium">Pure Completion</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    {/* <X className="h-4 w-4" /> */}
                  </button>
                </div>

                <div className="space-y-4">
                  {[1, 2].map((option) => (
                    <div
                      key={option}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">
                          Option {option}
                        </span>
                        <span className="text-sm text-gray-600">
                          42 words, 549 characters
                        </span>
                      </div>
                      <p className="text-sm text-gray-800 mb-3">{sampleText}</p>
                      <button className="inline-flex items-center gap-2 px-3 py-1 text-sm text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50">
                        {/* <Copy className="h-3 w-3" /> */}
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* )} */}

              {/* {panelMode === 'criteria' && ( */}
              <div className="p-4">
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Use General Criteria</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    We will evaluate your whole answer against general review
                    criteria.
                  </p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                    Evaluate whole answer
                  </button>
                </div>

                <div>
                  <h3 className="font-medium mb-2">
                    Use Bid-Specific Criteria
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Please select a portion of your answer for review against a
                    specific question and related section of the specification
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">
                      Update Criteria
                    </button>
                    <button className="flex-1 px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">
                      Evaluate Selection
                    </button>
                  </div>
                </div>
              </div>
              {/* )} */}

              {/* {panelMode === 'summarize' && ( */}
              <div className="p-4">
                <h2 className="font-medium mb-4">
                  Reduce word or Character count
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Transform the selected text to a specified word or character
                  limit
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="words"
                        checked={countType === 'words'}
                        onChange={() => setCountType('words')}
                        className="text-blue-600"
                      />
                      <label htmlFor="words" className="text-sm">
                        Words
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="characters"
                        checked={countType === 'characters'}
                        onChange={() => setCountType('characters')}
                        className="text-blue-600"
                      />
                      <label htmlFor="characters" className="text-sm">
                        Characters
                      </label>
                    </div>
                  </div>

                  <input
                    type="number"
                    className="w-full p-2 border border-gray-200 rounded-md"
                    placeholder={`Enter ${countType} count`}
                  />

                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                    Generate
                  </button>
                </div>
              </div>
              {/* )} */}
            </div>
          </div>

         
        </div>
      </div>
      {/* <!-- ====== Editor Section End ====== --> */}
    </>
  );
};

export default Editor;
