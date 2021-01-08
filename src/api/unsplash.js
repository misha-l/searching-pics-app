import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
     Authorization: 'Client-ID dZqvFk0ccRKC9rv4fx2fgaP5NB-DPsZwD-WP8x17WwI'
  }
});
