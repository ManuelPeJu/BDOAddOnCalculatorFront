// import { createSlice } from "@reduxjs/toolkit";

// const [classes, setClasses] = useState([])

// const initialState = [
//     classes = [],
// ];

// export const classesSlice = createSlice({
//     classes: [],
//     initialState,
//     reducers: {
//         getClasses : async (state, action) => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/classes");
//                 if(!response.ok) {
//                     throw new Error("Hubo problemas para obtener las clases :(")
//                 };
//                 const data = await response.json();
//                 setClasses(data)
//                 console.log(data)
//             } catch (error) {
//                 console.log("Hubo problemas al obtener los datos", error)
//             }
//         }
//     }
// })


