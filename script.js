import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://github.com/grafana/k6');
  sleep(1);
}

