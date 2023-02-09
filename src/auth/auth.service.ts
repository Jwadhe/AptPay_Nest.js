import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {

    signup() {
        return 'Hello I am a Signup'
    }

    signin() {
        return 'Hello I am signin'
    }
}
