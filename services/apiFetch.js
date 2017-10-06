import axios from 'axios';

export default axios({
  url: 'https://api.dribbble.com/v1/shots',
  method: 'get',
  headers: { 
    'Authorization': 'Bearer 982131599f824e6cac5ff4a258222e2da32f618b78baeab96b2e76f39f6d2afd',
    'Content-Type': 'application/json',
  }
});
