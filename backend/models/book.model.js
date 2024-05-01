import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;