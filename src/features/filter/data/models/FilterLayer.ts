export class FilterLayer {
    filterLayerId: string = '';
    name: string = '';
    lifeTime: number = 0; 
    efficiency: number = 0;

    constructor(
        filterLayerId: string, 
        name: string, 
        lifeTime: number, 
        efficiency: number
    ) {
        this.filterLayerId = filterLayerId;
        this.name = name;
        this.lifeTime = lifeTime;
        this.efficiency = efficiency;
    }
}