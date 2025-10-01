//const mongoose = require('mongoose');
import {config} from 'dotenv'
import {connect} from "mongoose";

const url:string='mongodb://localhost:27017/studentsDB'
export const dbConnect = async () => {
    try {
       await  connect('mongodb://localhost:27017/studentsDB').then(()=>{
        console.log('DB connected successfully');
       })
        
    } catch (error) {
        console.log('Database Error:', error);
    }
}

 
