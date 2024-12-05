import mongoose from 'mongoose'

const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  visits: {
    type: Number,
    default: 0,
  },
  userId: {
    type: String,
    required: true,
  },
})

const Url = mongoose.model('Url', UrlSchema)

export { Url }