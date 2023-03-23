import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

@customElement('employee-data')
export class EmployeeData extends LitElement {
  @state()
  private data = [
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

  @state()
  private again = {
    id: 0,
    name: '',
    team: '',
    desg: '',
  };

  handleSubmit(e: any) {
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

  handleChange(e: any) {
    if (e.srcElement.name === 'name') this.again['name'] = e.srcElement.value;
    if (e.srcElement.name === 'desg') this.again['desg'] = e.srcElement.value;
    if (e.srcElement.name === 'team') this.again['team'] = e.srcElement.value;
    console.log();
  }

  override render() {
    return html`
      ${this.data.map(
        (item) =>
          html`
            <div>
              <h4>ID: <span>${item.id}</span></h4>
              <h4>Name: <span>${item.name}</span></h4>
              <h4>Designation: <span>${item.desg}</span></h4>
              <h4>Team: <span>${item.team}</span></h4>
              <hr />
            </div>
          `
      )}
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
}

declare global {
  interface HTMLElementTagNameMap {
    'employee-data': EmployeeData;
  }
}
