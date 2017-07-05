

export class Movie {
  private _thumbnail : string;
  private _file : string;

  public get thumbnail() {
    return this._thumbnail;
  }

  public set thumbnail(thumbnail : string) {
    this.thumbnail = thumbnail;
  }

  public get file() {
    return this._file;
  }

  public set file(file : string) {
    this._file = file;
  }
}
