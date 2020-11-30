const dbURI = 'mongodb+srv://puja:Poojja@cluster0.9lbdg.mongodb.net/montreal?retryWrites=true&w=majority'
const port = process.env.PORT || 4000
const secret = 'this is a glamper secret'

module.exports = {
  dbURI,
  port,
  secret
}