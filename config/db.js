const mongoose = require('mongoose')

const connectDB = async () => {
    const mongoAltasUri = 'mongodb+srv://Clannis:clannis@clanniscluster.tmut2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    try {
        const conn = await mongoose.connect(
            'mongodb+srv://Clannis:clannis@clanniscluster.tmut2.mongodb.net/test?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        )

        console.log('MongoDB Connected')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB