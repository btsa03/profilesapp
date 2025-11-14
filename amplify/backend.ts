import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// Grant the Lambda function access to the data
backend.data.resources.graphqlApi.grantMutation(backend.auth.resources.authenticatedUserIamRole);
backend.data.resources.graphqlApi.grantQuery(backend.auth.resources.authenticatedUserIamRole);
