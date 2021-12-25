import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://shreyas:shreyasshettigar@shreyasecom.wsxpp.mongodb.net/mernecommerce?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB connected: ${con.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
