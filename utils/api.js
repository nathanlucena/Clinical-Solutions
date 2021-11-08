import axios from 'axios';

export default async function AxiosLogged(path){
  return axios.get(path);
}