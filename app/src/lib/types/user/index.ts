export type UserLoginDto = {
    email: string;
    password: string;
}

export type UserCreateDto = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

export type UserRo = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
};

export type UserAuthRo = UserRo & {
    token: string;
};
