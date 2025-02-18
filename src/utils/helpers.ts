export const formatDate = (createdAt:string)=>{
const date = new Date(createdAt)
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
const year = date.getFullYear();

let hours :string | number = date.getHours();
const minutes = String(date.getMinutes()).padStart(2, '0');
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; 
hours = String(hours).padStart(2, '0');

const formattedDate = `${day}/${month}/${year}`;
const formattedTime = `${hours}:${minutes} ${ampm}`;
return {formattedDate, formattedTime}
}