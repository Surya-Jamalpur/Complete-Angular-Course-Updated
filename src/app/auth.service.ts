export class AuthService {
    loggedIn = false;

    onLogin(){
        this.loggedIn = true;
    }
    onLogout(){
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