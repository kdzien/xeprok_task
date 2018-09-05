export class Holiday {
  name: string;
  surename: string;
  team: string;
  from: Date;
  to: Date;
  constructor(name, surename, team, from, to) {
    this.name = name;
    this.surename = surename;
    this.team = team;
    this.from = from;
    this.to = to;
  }
}
