
function Auditlog(obj: any) {
    console.log(JSON.stringify(obj))
    return function (target: any) {
        console.log("Class Decorator Called !!");
    }
}


@Auditlog({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class Rate {
    originalValue = 199;
    constructor() {
        console.log("Class Constructor Called !!");
        console.log(this.getRate());
    }
    getRate() {
        return 0.5 * 0.1 * this.originalValue;
    }
}
new Rate();