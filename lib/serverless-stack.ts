import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class ServerlessStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "test-handler", {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: "test-handler.ts",
      code: lambda.Code.fromAsset("src/handlers"),
    });
  }
}
