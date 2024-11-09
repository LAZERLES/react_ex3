export class Project {
    id: number | undefined;
    name: string = '';
    description: string ='';
    imageUrl: string = '';
    contractTypeId: number | undefined;
    contractSingedOn: Date = new Date();
    budget: number = 0;
    isActive: boolean = false;
    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(intialiazer?: any) {
        if(!intialiazer) return;
        if(intialiazer.id) this.id = intialiazer.id;
        if(intialiazer.name) this.name = intialiazer.name;
        if(intialiazer.description) this.description = intialiazer.description;
        if(intialiazer.imageUrl) this.imageUrl = intialiazer.imageUrl;
        if(intialiazer.contractTypeId) this.contractTypeId = intialiazer.contractTypeId;
        if(intialiazer.contractSingedOn) this.contractSingedOn = intialiazer.contractSingedOn;
        if(intialiazer.budget) this.budget = intialiazer.budget;
        if(intialiazer.isActive) this.isActive = intialiazer.isActive;  
    }
}