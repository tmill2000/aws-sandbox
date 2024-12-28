import { Context, EventBridgeEvent } from "aws-lambda";

export async function main(
  event: EventBridgeEvent<string, string>,
  context: Context
) {
  console.log(event, context);
}
