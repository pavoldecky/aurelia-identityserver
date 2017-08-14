import {AuthService} from 'aurelia-authentication';
import {inject} from 'aurelia-framework';

@inject(AuthService )

export class Login{
    auth:AuthService;
	constructor(auth){
		this.auth = auth;
	};

	heading = 'Login';
		
	authenticate(name){
		return this.auth.authenticate('openiddict', '/#')
		.then((response)=>{
			console.log("auth response " + response);
		});

	}
}