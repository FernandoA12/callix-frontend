interface Rocket {
  name: string;
  type: string;
  description: string;
  thumbnails: string[];
}

export class Launch {
  public name!: string;
  public details!: string;
  public thumbnail!: string[];
  public date!: string;
  public rocket!: Rocket;

  constructor(props: Partial<Launch>) {
    Object.assign(this, props);
  }

  toData() {
    const { toData, ...lauch } = this;

    return lauch;
  }
}
