import React from 'react';

const BookCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {books.map((book) => {
        return (
          <div key={book.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold text-gray-800 mb-2">{book.name}</h1>
              <h3 className="text-gray-600 text-sm mb-2">{book.genre}</h3>
              <h3 className="text-gray-600 text-sm">{book.author}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCard;
