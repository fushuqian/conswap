export class JoystickSettings {
    static SETTINGS = Object.freeze([
        { type: "float", key: 'dzInner',              min: 0.0, max: 0.5,  def: 0.0, label: "死区 内部",                  tip: "所需圆形死区的数值。" },
        { type: "float", key: 'dzOuter',              min: 0.6, max: 1.0,  def: 1.0, label: "死区 外部",                  tip: "要限制摇杆输出的最大范围数值。" },
        { type: "float", key: 'antiDzInnerC',         min: 0.0, max: 0.5,  def: 0.0, label: "反死区 圆形",   tip: "游戏的圆形死区数值，常见大小为 0.2 到 0.25。" },
        { type: "float", key: 'antiDzInnerCYScale',   min: 0.0, max: 0.5,  def: 0.0, label: "反死区 圆形 Y轴", tip: "当死区是椭圆形时才修改此配置，修改数值后，反圆形死区将会接管高度和宽度控制" },
        { type: "float", key: 'antiDzSquare',         min: 0.0, max: 0.5,  def: 0.0, label: "反死区 方形",     tip: "游戏的方形/轴向死区数值，常见大小为 0.2 到 0.25。" },
        { type: "float", key: 'antiDzSquareYScale',   min: 0.0, max: 0.5,  def: 0.0, label: "反死区 方形 Y轴",   tip: "仅当死区为矩形时修改。修改后，反方形死区将控制宽度，此项控制高度。" },
        { type: "float", key: 'antiDzAngular',        min: 0.0, max: 0.44, def: 0.0, label: "反死区 角度",    tip: "用于抵消基于角度的轴附近对角线移动受限问题。" }, 
        { type: "float", key: 'antiDzOuter',          min: 0.5, max: 1.0,  def: 1.0, label: "反死区 外部",      tip: "达到此值后摇杆输出100%。如果摇杆无法达到最大幅度时很有用。" },
        { type: "float", key: 'axialRestrict',        min: 0.0, max: 0.49, def: 0.0, label: "轴向限制",           tip: "根据与轴的距离限制对角线移动。" }, 
        { type: "float", key: 'angularRestrict',      min: 0.0, max: 0.44, def: 0.0, label: "角度限制",         tip: "根据角度限制围绕轴的对角线移动。" }, 
        { type: "float", key: 'diagonalScaleMin',     min: 0.5, max: 1.42, def: 1.0, label: "对角线尺度 内部",     tip: "用于扭曲较低幅度的对角线数值。" }, 
        { type: "float", key: 'diagonalScaleMax',     min: 0.5, max: 1.42, def: 1.0, label: "对角线尺度 外部",     tip: "用于扭曲较高幅度的对角线数值。" }, 
        { type: "float", key: 'curve',                min: 0.3, max: 3.0,  def: 1.0, label: "曲线",                    tip: "游戏曲线的数值，用于将其抵消为线性曲线。数值越大起始移动越快。" }, 
        { type: "bool",  key: 'uncapRadius',          def: true,  label: "解锁半径", tip: "取消摇杆位置限制，使摇杆可以移出圆形范围" }, 
        { type: "bool",  key: 'invertY',              def: false, label: "翻转 Y",     tip: "翻转 Y 轴" }, 
        { type: "bool",  key: 'invertX',              def: false, label: "翻转 X",     tip: "翻转 X 轴" }, 
    ]);

    constructor() {
        this.resetAll();;
    }

    resetAll() {
        JoystickSettings.SETTINGS.forEach((setting) => {
            this[setting.key] = setting.def;
        });
    }

    getDefaultValue(key) {
        const intSetting = JoystickSettings.SETTINGS.find(s => s.key === key);
        if (intSetting !== undefined) {
            return intSetting.def;
        }
        console.warn(`无效的设置键: ${key}`);
        return null;
    }
};
