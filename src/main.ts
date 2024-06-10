import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dynamoose from 'dynamoose';

async function bootstrap() {

  console.log(process.env.AWS_ACCESS_KEY_ID)
  // Create new DynamoDB instance
  const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY
    },
    "region": process.env.AWS_REGION
  });

  // Set DynamoDB instance to the Dynamoose DDB instance
  dynamoose.aws.ddb.set(ddb);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
