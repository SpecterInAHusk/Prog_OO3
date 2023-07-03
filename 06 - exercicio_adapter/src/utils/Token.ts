
export default class Token {

    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InRva2VuX3BhZ2FtZW50byJ9.R8zNCQqIGM6KYq0n3luOtYJ-T4Ot-Y_O3sIs85xTD1A";

    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}