import { Book } from "../Model/Book.js";

export const detailsBook = async (req, res) => {
  try {
    const { id } = req.params;
    const detail = await Book.findById(id);
    return res.status(200).json(detail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
