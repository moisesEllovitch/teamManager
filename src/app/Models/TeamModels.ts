// export class Teams{
//     teams : Team[];
// }


export class Team {
    id: number;
    name : string;
    country: string;
    money: number;
    titles: number;
    division: number;
    // players: Player[];

    constructor(_id:number,_name:string, _country:string, _money:number, _titles:number, _division: number)
    {
        this.id = _id;
        this.name =_name;
        this.country = _country;
        this.money = _money;
        this.titles = _titles;
        this.division = _division;
    }
}

export class Country{
    value : number;
    viewValue: string;
    flagUrl: string;
}

// export class Player {
//     id: number;
//     name: string;
//     positionCode: number;
//     positionDesc: string;
// }
