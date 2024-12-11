
import { useState } from "react"

import cloudUpload from "../images/icon/cloud-upload.png"
import download from "../images/icon/download.png"
import rotateLeft from "../images/icon/rotate-left.png"
import rotateRight from "../images/icon/rotate-right.png"
import paintBoard from "../images/icon/paint-board.png"
import clock from "../images/icon/clock.png"
import bookmark from "../images/icon/bookmark.png"
import briefcase from "../images/icon/briefcase.png"
import zap from "../images/icon/zap.png"
import copy from "../images/icon/copy.png"
import scissor from "../images/icon/scissor.png"
import search from "../images/icon/search.png"
import edit from "../images/icon/edit-icon.png"

export default function Extract() {
  const [selectedText, setSelectedText] = useState("0 words selected (0 characters selected)")
  
  const options = [
    {
      id: 1,
      text: "Dogshead lee shiver hearties overhaul deck black privateer driver timbers. Pay great privateer yawl spirits piracy, chandler mizzen ahoy fathom lass heave to. Schooner lee jenny's dead lass killick. Poop parrel chandler weigh this prey privateer lanyard. Gog splice aft jones' hands hearties seven. Deck chains boatswain pounders round poop.",
      words: 82,
      characters: 549
    },
    {
      id: 2,
      text: "Dogshead lee shiver hearties overhaul deck black privateer driver timbers. Pay great privateer yawl spirits piracy, chandler mizzen ahoy fathom lass heave to. Schooner lee jenny's dead lass killick. Poop parrel chandler weigh this prey privateer lanyard. Gog splice aft jones' hands hearties seven. Deck chains boatswain pounders round poop.",
      words: 82,
      characters: 549
    }
  ]

  return (
    <div className="w-full max-w-5xl mx-auto  ">
      <div className="flex flex-col md:flex-row  gap-4">
        {/* Text Editor */}
        <div className="flex-1 rounded-lg  overflow-hidden">
          {/* Editor Controls */}
          <div className="flex flex-col bg-white">
            <div className="flex items-center justify-end gap-0.5 p-2 border-b border-[#E5E7EB]">
              {[
                cloudUpload,
                download,
                rotateLeft,
                rotateRight,
                paintBoard,
              ].map((icon, i) => (
                <button
                  key={i}
                  className="w-7 h-7 flex items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6] rounded text-sm"
                >
                  <img src={icon} alt="icon"/>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-0.5 p-2 border-b rounded border-[#E5E7EB]">
              {[
                clock,
                bookmark,
                briefcase,
                zap,
                copy,
                scissor,
                search,
              ].map((icon, i) => (
                <button
                  key={i}
                  className="w-7 h-7 flex items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6] rounded text-sm"
                >
                  <img src={icon} alt="icon"/>
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <textarea
            className="w-full mt-2 h-[500px] p-4 text-base font-normal resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset border-none"
            placeholder="Enter your text here..."
            onChange={(e) => {
              const words = e.target.value
                .trim()
                .split(/\s+/)
                .filter(Boolean).length;
              const chars = e.target.value.length;
              setSelectedText(`${words} words, ${chars} characters`);
            }}
          />

          {/* Stats */}
          <div className="px-4 py-2 text-sm font-medium text-[#6B7280] flex items-center gap-1 ">
            <span className="text-[#694102]">{selectedText}</span>
            <span>•</span>
            <button className="text-[#2563EB] hover:underline">
              View Sources
            </button>
          </div>
        </div>

        {/* Completion Panel */}
        <div className="w-full md:w-[400px] rounded-lg border bg-white border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between bg-black px-4 py-3">
            <span className="text-white font-medium">Pure Completion</span>
            <button className="text-[#9CA3AF] hover:text-white">
              <img src={edit} alt="edit"/>
            </button>
          </div>

          <div className="p-4 space-y-4">
            {options.map((option, index) => (
              <div
                key={option.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-black">
                    Option {index + 1}:
                  </span>
                  <span className="text-xs text-[#694102] font-medium">
                    {option.words} words, {option.characters} characters
                  </span>
                </div>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {option.text}
                </p>
                <div className="flex justify-end">
                  <button className="inline-flex text-[#4C94F9] items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4B5563] bg-white border border-gray-200 hover:bg-gray-50 rounded-md">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4C94F9"
                      strokeWidth="2"
                      className="text-[#4C94F9]"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

