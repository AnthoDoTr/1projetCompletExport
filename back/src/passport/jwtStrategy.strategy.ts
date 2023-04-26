import { Injectable } from '@nestjs/common';
import { PassportStrategy} from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from 'src/authentification/auth.service';
import { jwtConstants } from '../authentification/constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authServe: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return { pseudo: payload.pseudo, id: payload.sub}; 
    }
}