  import http from 'k6/http';
  import { check } from 'k6';

  export let options = {
    stages: [
      { duration: '10s', target: 10 }, // 10 users for 10 seconds
      { duration: '30s', target: 0 }, // ramp down to 0 users
     
    ]
  };

  export default function () {
    let res = http.get('https://iamops.io/');
    res = http.get('https://iamops.io/our-story/');
    res = http.get('https://iamops.io/lean-mean-devops/');
    check(res, {
      'status is 200': (r) => r.status === 200,
    });
  }
