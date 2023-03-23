var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let EmployeeData = class EmployeeData extends LitElement {
    constructor() {
        super(...arguments);
        this.data = [
            {
                id: 1,
                name: 'Harsh Jaiswal',
                desg: 'Associate Software Engineer',
                team: 'IDFY',
            },
            {
                id: 2,
                name: 'Vishal Tripathi',
                desg: 'Associate Software Engineer',
                team: 'BV',
            },
        ];
        this.again = {
            id: 0,
            name: '',
            team: '',
            desg: '',
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        this.again['id'] = this.data[this.data.length - 1].id + 1;
        this.data = [...this.data, this.again];
        this.again = {
            id: 0,
            name: '',
            team: '',
            desg: '',
        };
    }
    handleChange(e) {
        if (e.srcElement.name === 'name')
            this.again['name'] = e.srcElement.value;
        if (e.srcElement.name === 'desg')
            this.again['desg'] = e.srcElement.value;
        if (e.srcElement.name === 'team')
            this.again['team'] = e.srcElement.value;
        console.log();
    }
    render() {
        return html `
      ${this.data.map((item) => html `
            <div>
              <h4>ID: <span>${item.id}</span></h4>
              <h4>Name: <span>${item.name}</span></h4>
              <h4>Designation: <span>${item.desg}</span></h4>
              <h4>Team: <span>${item.team}</span></h4>
              <hr />
            </div>
          `)}
      <form>
        Enter Name:
        <input type="text" id="name" name="name" @change=${this.handleChange} />
        Enter Designation:
        <input type="text" id="desg" name="desg" @change=${this.handleChange} />
        Enter Team:
        <input type="text" id="team" name="team" @change=${this.handleChange} />
        <button @click=${this.handleSubmit}>Add</button>
      </form>
    `;
    }
};
__decorate([
    state()
], EmployeeData.prototype, "data", void 0);
__decorate([
    state()
], EmployeeData.prototype, "again", void 0);
EmployeeData = __decorate([
    customElement('employee-data')
], EmployeeData);
export { EmployeeData };
//# sourceMappingURL=employee-data.js.map