import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
});

export default mongoose.model('Todo', todoSchema);
