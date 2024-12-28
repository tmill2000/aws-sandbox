import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class ServerlessStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsSandboxQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    new lambda.Function(this, "test-handler", {
      runtime: lambda.Runtime.NODEJS_LATEST,
      handler: "test-handler.ts",
      code: lambda.Code.fromAsset("src/handlers"),
    });
  }
}
