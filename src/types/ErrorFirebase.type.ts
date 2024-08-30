export type ErrorFirebase = {
    error: Error;
};

type Error = {
    code: number;
    message: string;
    errors: {message: string, domain: string, reason: string}[]
};