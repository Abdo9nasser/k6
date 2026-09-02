import http from 'k6/http';

export const options = {
  vus: Number(__ENV.VUS || 1),
  duration: __ENV.DURATION || '10s',

  tags: {
    testid: __ENV.TEST_ID || 'manual-test',
  },
};

export default function () {
  const res = http.get(__ENV.TARGET_URL);

  console.log(
    `TEST_ID: ${__ENV.TEST_ID} | URL: ${__ENV.TARGET_URL} | Status: ${res.status}`
  );
}
