import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TNDB_TOKEN = import.meta.env.VIT_APP_TMDB_TOKEN;
// const TNDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTg5ZGZmZWE0ZDY1N2I3MzE1ZGU1OTNjNDlhOGIxZSIsInN1YiI6IjY0M2Q1MzYxOGVjNGFiMDQ0NmFmYTg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x23-IB3dICHdf-LbeeHOUDZxsL4cPOPmkpvgiKyj8L4";
const headers = {
    Authorization : "bearer " + TNDB_TOKEN,
};
export const featchDataForApi = async(url, params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
};