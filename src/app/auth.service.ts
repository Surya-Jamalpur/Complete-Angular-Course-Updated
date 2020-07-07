export class AuthService {
    loggedIn = false;

    login(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                resolve(this.loggedIn);
            }
        );
        return promise;
    }
}