"use client";

export default function BookCard({ title, author, image, status, type, review }) {
  return (
    <div className="bg-bootstrapDark border border-black text-llBlue rounded-sm shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Book Cover */}
        <div className="md:w-1/3 w-full border-b md:border-b-0 md:border-r border-black">
          <img
            src={image}
            alt={`${title} cover`}
            className="w-full h-80 object-cover md:h-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 p-4 md:p-6">
          <h2 className="text-2xl font-bold text-yellow mb-1">{title}</h2>
          <p className="text-sm italic text-gray-300 mb-3">{author}</p>
          <p className="text-sm mb-4 leading-relaxed">{status}</p>
          <p className="text-sm mb-4 leading-relaxed">{type}</p>

          {/* Review Section */}
          <div className="border-t border-gray-700 pt-3">
            <h3 className="text-lg font-semibold text-yellow mb-2">Comments:</h3>
            
<div className="space-y-4 text-sm leading-relaxed text-gray-200">
  {Array.isArray(review)
    ? review.map((paragraph, idx) => {
        // if it's a string, optionally check for underscores
        if (typeof paragraph === "string") {
          return paragraph.startsWith("_") ? (
            <p key={idx} className="ml-4 italic">
              {paragraph.replace(/_/g, "")}
            </p>
          ) : (
            <p key={idx}>{paragraph}</p>
          );
        }

        // if it's already JSX, render it directly
        return <div key={idx}>{paragraph}</div>;
      })
    : <p>{review}</p>}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
