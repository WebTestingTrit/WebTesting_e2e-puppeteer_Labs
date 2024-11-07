import request from 'supertest';
import { given, then, when } from '../lib/bit.tester.js';

export default async function () {
  await getHello();
  await postProject();
}
async function getHello() {
  const inputHostUrl = `https://jsonplaceholder.typicode.com`;
  await given(`the API url ${inputHostUrl}`, async () => {
    const inputEndPoint = `/todos`;
    await when(`we call the ${inputEndPoint} endPoint`, async () => {
      const response = await request(inputHostUrl).get(inputEndPoint);
      const actual = response.status;
      const expected = 200;
      then(`respond with status code 200`, actual, expected);
    });
  });
}

async function postProject() {
  const inputHostUrl = `https://jsonplaceholder.typicode.com`;
  await given(`the API url ${inputHostUrl}`, async () => {
    const inputEndPoint = `/todos`;
    await when(`we post to the ${inputEndPoint} endPoint`, async () => {
      const inputToDo = { title: 'start testing', body: 'this is a test' };
      const response = await request(inputHostUrl).post(inputEndPoint).send(inputToDo);
      const actual = response.body.title;
      const expected = 'start testing';
      then(`respond with the same object`, actual, expected);
      const expectedStatus = 201;
      then(`respond with status code 201`, response.status, expectedStatus);
    });
  });
}
