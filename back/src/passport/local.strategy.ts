import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "src/authentification/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authServe : AuthService) {
        super();
    }

    async validate(userPseudo: string, password: string): Promise<any> {
        const user = await this.authServe.signIn(userPseudo, password);
        if(!user) {
            throw new Error('Invalid credentials');
        }
        return user;
    }
}