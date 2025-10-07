"use client";

import BookCard from "./BookCard";

export default function BookList() {
  const books = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://covers.openlibrary.org/b/id/8101351-L.jpg",
      description:
        "A timeless fantasy adventure about courage, friendship, and finding unexpected strength in oneself.",
      review:
        "A magical journey that still feels fresh every time I read it. Tolkien’s worldbuilding is unmatched, and Bilbo’s reluctant heroism makes him unforgettable.",
      rating: 5,
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      description:
        "A chilling dystopian vision of totalitarian control, censorship, and the loss of individuality.",
      review:
        "Dark and prophetic. Orwell’s world feels disturbingly close to reality in the digital age. It’s uncomfortable, brilliant, and essential reading.",
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto mt-6 space-y-8">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
}
