import request from 'supertest';
import { given, then, when } from '../lib/bit.tester.js';

const inputHostUrl = `https://jsonplaceholder.typicode.com`;

export default async function () {
  await getHello();
  await postProject();
}

/**
 * gets the 200 ok base response
 */
async function getHello() {
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

/**
 * posts to the project endPoint and checks the response
 */
async function postProject() {
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
