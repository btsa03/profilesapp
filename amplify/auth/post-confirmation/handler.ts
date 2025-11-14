import type { PostConfirmationTriggerHandler } from "aws-lambda";

export const handler: PostConfirmationTriggerHandler = async (event) => {
  // Simply return the event - the Lambda is configured but doesn't need to do anything
  // for this basic tutorial. The user profile will be managed by the frontend.
  return event;
};
