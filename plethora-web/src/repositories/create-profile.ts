import { apolloClient } from './authentication/appolo-client';
import { gql } from '@apollo/client'
import { login } from './authentication/login';

const CREATE_PROFILE = `
  mutation($request: CreateProfileRequest!) { 
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
            __typename
    }
 }
`

const createProfileRequest = (createProfileRequest: {
    handle: string;
    profilePictureUri?: string;
    followNFTURI?: string;
}) => {
    return apolloClient.mutate({
        mutation: gql(CREATE_PROFILE),
        variables: {
            request: createProfileRequest,
        },
    });
};

export const createProfile = async (nickname: string, address: string) => {
    console.log('create profile: ', nickname);

    await login(address);

    const createProfileResult = await createProfileRequest({
        handle: nickname, // change it to user nickname
    });

    return createProfileResult;
};
