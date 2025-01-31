import dotenv from "dotenv";

dotenv.config();

const apiConnection = {
	url: process.env.REACT_APP_BASE_URL,
};

export default apiConnection;
