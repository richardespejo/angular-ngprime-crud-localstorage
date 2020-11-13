export namespace InterfaceBodyItems {

    export interface result {
        format : string;
        result: items[];
    }

    export interface items {
        _about: string;
        accessURL: string;
        title: string;
    }

    

    export interface response{
        format: string,
        result : {
            items: [
                {
                    _about: string;
                    accessURL: string;
                    title: string;
                }
            ]
        }
    }


    
}