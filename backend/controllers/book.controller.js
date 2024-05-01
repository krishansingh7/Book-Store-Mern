import Book from "../models/book.model.js";


export const createBook = async (req, res) => {
  try {
    const { name, price, image } = await req.body;
    const response = await Book.create({ name, price, image });
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getBook = async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(201).json({
      success: true,
      message: "Book data fetched successfully",
      data: book
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteBook = async (req, res) => {
  try {
    const {id} = await req.body;
    const response = await Book.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      data: response
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


export const updateBook = async (req, res) => {
  try {
    const {id,name,price,image} = await req.body;
    const response = await Book.findByIdAndUpdate(id,{
      name: name,
      price: price,
      image: image
    })
    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data: response
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}