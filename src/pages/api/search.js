import axios from "axios";

const axiosConfig = {
    baseURL: 'https://api.github.com/',
    auth: {
        username: process.env.GITHUB_CLIENT_ID,
        password: process.env.GITHUB_CLIENT_SECRET
    }
};


// export default function apiSearch async(req, res) => {
//   const response = await axios.get(`search/repositories?q=${query}&sort=stars&order=desc`, axiosConfig);
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) =>{
    const {q, sort, order} = req.query;
    const response = await axios.get(`search/repositories?q=${q}&sort=${sort}&order=${order}`, axiosConfig);
    res.json(response.data)
}
