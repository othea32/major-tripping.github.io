import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
   bl_latitude: '11.847676',
   bl_longitude: '108.473209',
   tr_longitude: '109.149359',
   tr_latitude: '12.838442',
  
 },
 headers: {
   'X-RapidAPI-Key': 'b3bba30511msh80ffed710a78756p1d1e47jsn96720ac6ff3d',
   'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
 }
};


export const getPlacesData = async (sw, ne) => {
 try {
  const { data: { data }} = await axios.get(URL, {
   params: {
    bl_latitude: sw.lat,
    bl_longitude: ne.lat,
    tr_longitude: sw.lng,
    tr_latitude: ne.lng,
   
  },
  headers: {
    'X-RapidAPI-Key': 'b3bba30511msh80ffed710a78756p1d1e47jsn96720ac6ff3d',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
 });

  return data;

 } catch (error) {
  console.log(error);
 }

};