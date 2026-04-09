import { create } from "zustand";
import axios from "../lib/axios";


export const adminInfo = create((set)=>({
    loading: false,
    data : {
        topSellingProducts: []
    },
    getData: async()=>{
        const response = await axios.get("/admin");
        try {
            set({data: response.data})
        } catch (error) {
            console.log("error getting admin data", error.message)
        }
    }
    

}));