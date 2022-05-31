import * as t from 'io-ts';

export const httpRegisterResponseTypeGuard = t.type({
    //TODO extend
    jwt: t.string,
    initialPassword: t.string,
});

export type HttpRegisterResponseType = t.TypeOf<typeof httpRegisterResponseTypeGuard>;
