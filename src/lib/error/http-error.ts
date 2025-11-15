export class HttpError extends Error {
	statusCode: number;
	error: string;

	constructor(message: string, statusCode: number, error?: string) {
		super(message);
		this.name = "HttpError";
		this.statusCode = statusCode;
		this.error = error || message;
	}
}
