import * as AWS from 'aws-sdk';

let options = {};

if (process.env.IS_OFFLINE) {
  options = {
  }
}

const dynamo = new AWS.DynamoDB.DocumentClient(options);

export { dynamo };