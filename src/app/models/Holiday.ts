export class Holiday {
  _id?: {$oid: string};
  name: string;
  surename: string;
  team: string;
  from: Date;
  to: Date;
  constructor(name, surename, team, from, to, _id?) {
    this.name = name;
    this.surename = surename;
    this.team = team;
    this.from = from;
    this.to = to;
    this._id = _id;
  }
}


