import { Context, EventBridgeEvent } from "aws-lambda";
import { main } from "./test-handler";

describe("test-handler", () => {
  const event = {} as EventBridgeEvent<string, string>;
  const context = {} as Context;
  it("should run", async () => {
    expect(await main(event, context)).resolves;
  });
});
