/**
 * 瓶子类
 */

// 枚举
enum bottleType {
    None, bottle1, bottle2, bottle3, bottle4, bottle5, bottle6
}

class Bottles extends eui.Image {
    private _isSelect: boolean; // 是否被选中
    private _type: number; // 瓶子的类型
    public constructor(type: bottleType) {
        super();
        this.source = RES.getRes(`${bottleType[type]}_png`);
        this.type = type;
    }

    public get isSelect(): boolean {
        return this._isSelect;
    }
    public set isSelect(v: boolean) {
        this._isSelect = v;
        if (this._isSelect) {
            // 如果选中了，透明度降低
            this.alpha = 0.5;
        } else {
            this.alpha = 1; // 反之亦然
        }
    }

    public get type(): number {
        return this._type;
    }
    
    public set type(v: number){
        this._type = v;
        this.source = RES.getRes(`${bottleType[v]}_png`);
    }
}