export namespace ClassBody {

    export class DataApi {
        id: number;
        name: string;
        email: string;

        constructor( dataResponse: any) {
            this.id = dataResponse.id;
            this.name = dataResponse.name;
            this.email = dataResponse.email;
        }
    }
}