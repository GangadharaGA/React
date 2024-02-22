import axios from 'axios';

const Rest_Api = "http://localhost:8080/getall";

export  const listofemps=()=>axios.get(Rest_Api);

