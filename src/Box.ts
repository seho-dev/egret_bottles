

class Box extends eui.Component {
	/**箱子的类型 */
	private _type: number;

	/**箱子里瓶子的数量 */
	private _num: number = 0

	public constructor() {
		super();

	}
	public get type(): number {
		return this._type;
	}
	public set type(v: number) {
		this._type = v;
	}

	public get num(): number {
		return this._num;
	}
	public set num(v: number) {
		this._num = v;
		let img: eui.Image = <eui.Image>this.getChildAt(0);
		img.source = RES.getRes(`bottle${this.type}_${v}_png`);
	}

	// 添加瓶子
	public addBottle(): boolean{
		this.num++;
		if(this._num>6){
			this.package(); // 打包
			return true;
		}
		return false;
	}

	public package():void {
		this.num = 0;
	}
}