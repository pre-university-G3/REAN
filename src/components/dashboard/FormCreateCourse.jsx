import React, { useEffect, useState } from "react";
import getCategory from "../../api/getCategory";

export default function FormCreateCourse({ onClose }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getCategory();
      setCategory(data || []);
    };

    fetchCategory();
  });

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div class="flex justify-between items-center py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
          <h3
            id="hs-scale-animation-modal-label"
            class="font-bold text-gray-800 dark:text-white"
          >
            Create Course
          </h3>
          <button
            onClick={onClose}
            type="button"
            class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
            aria-label="Close"
            data-hs-overlay="#hs-scale-animation-modal"
          >
            <span class="sr-only">Close</span>
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4 overflow-y-auto">
          <div class="max-w-sm space-y-3">
            <input
              type="text"
              class="py-2.5 sm:py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-body-text-small focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Title"
            />
          </div>

          <div class="max-w-sm space-y-3">
            <input
              readOnly={true}
              type="text"
              class="py-2.5 sm:py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-body-text-small focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Instructor"
            />
          </div>

          <div class="max-w-sm space-y-3">
            <input
              readOnly={true}
              type="text"
              class="py-2.5 sm:py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-body-text-small focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Category"
            />
          </div>

          <div class="max-w-sm space-y-3">
            <textarea
              class="py-2 px-3 h-[20vh] resize-none sm:py-3 sm:px-4 block w-full border-2 border-gray-200 rounded-lg text-body-text-small focus:outline-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <div class="flex justify-end items-center gap-x-2 py-3 border-t border-gray-200 dark:border-neutral-700">
            <button
              onClick={onClose}
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              data-hs-overlay="#hs-scale-animation-modal"
            >
              Close
            </button>
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
