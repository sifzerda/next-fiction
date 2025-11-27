"use client";
import { useState } from "react";

export default function BookCard({ title, author, image, status, type, review }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-bootstrapDark border border-black text-llBlue rounded-sm shadow-sm overflow-hidden ">
      <div className="flex flex-col md:flex-row">
        {/* Book Cover */}
        <div className="md:w-1/3 w-full border-b md:border-b-0 md:border-r border-black">
          <img
            src={image}
            alt={`${title} cover`}
            className="w-full h-80 object-cover md:h-full" /* half height */
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 p-4 md:p-6"> {/* half padding */}
          <h2 className="text-2xl font-bold text-yellow mb-1">{title}</h2>
          <p className="text-sm italic text-gray-300 mb-2">{author}</p>
          <p className="text-xs mb-2 leading-relaxed">{status}</p>
          <p className="text-xs mb-2 leading-relaxed">{type}</p>

          {/* Review Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-2 px-2 py-1 bg-yellow text-black text-xs font-semibold rounded hover:bg-yellow-500 transition"
          >
            {open ? "Hide Comments" : "Show Comments"}
          </button>

          {/* Collapsible Review Section */}
          {open && (
            <div className="border-t border-gray-700 mt-2 pt-2 text-xs leading-relaxed text-gray-200 space-y-2">
              {Array.isArray(review)
                ? review.map((paragraph, idx) => {
                    if (typeof paragraph === "string") {
                      return paragraph.startsWith("_") ? (
                        <p key={idx} className="ml-4 italic">
                          {paragraph.replace(/_/g, "")}
                        </p>
                      ) : (
                        <p key={idx}>{paragraph}</p>
                      );
                    }
                    return <div key={idx}>{paragraph}</div>;
                  })
                : <p>{review}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
