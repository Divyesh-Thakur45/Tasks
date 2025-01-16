import mongoose from "mongoose";

// import 'dotenv/config'

const connect = mongoose.connect(`mongodb://127.0.0.1:27017/crude`);

export default connect;
