export type LoggedInUser = {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	emailVerified: boolean;
	created: Date;
}