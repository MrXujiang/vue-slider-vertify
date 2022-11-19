interface VertifyType {
    spliced: boolean;
    verified: boolean;
    left: number;
    destX: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    visible: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    refreshIcon: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    l: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    r: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    imgUrl: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    onDraw: {
        type: FunctionConstructor;
        required: false;
    };
    onCustomVertify: {
        type: FunctionConstructor;
        required: false;
    };
    onBeforeRefresh: {
        type: FunctionConstructor;
        required: false;
    };
    onSuccess: {
        type: null;
        required: false;
    };
    onFail: {
        type: null;
        required: false;
    };
    onRefresh: {
        type: null;
        required: false;
    };
}, {
    props: {
        width: number;
        visible: boolean;
        height: number;
        refreshIcon: string;
        l: number;
        r: number;
        imgUrl: string;
        text: string;
        onDraw?: ((l: number) => {}) | undefined;
        onCustomVertify?: ((arg: VertifyType) => VertifyType) | undefined;
        onBeforeRefresh?: (() => void) | undefined;
        onSuccess?: VoidFunction | undefined;
        onFail?: VoidFunction | undefined;
        onRefresh?: VoidFunction | undefined;
    };
    text: string;
    l: number;
    r: number;
    imgUrl: string;
    width: number;
    height: number;
    visible: boolean;
    onBeforeRefresh: (() => void) | undefined;
    onRefresh: VoidFunction | undefined;
    onFail: VoidFunction | undefined;
    onSuccess: VoidFunction | undefined;
    onCustomVertify: ((arg: VertifyType) => VertifyType) | undefined;
    onDraw: ((l: number) => {}) | undefined;
    isLoading: import("vue").Ref<boolean>;
    sliderLeft: import("vue").Ref<number>;
    sliderClass: import("vue").Ref<string>;
    textTip: import("vue").Ref<string>;
    canvasRef: any;
    blockRef: any;
    imgRef: any;
    isMouseDownRef: import("vue").Ref<boolean>;
    trailRef: import("vue").Ref<number[]>;
    originXRef: import("vue").Ref<number>;
    originYRef: import("vue").Ref<number>;
    xRef: import("vue").Ref<number>;
    yRef: import("vue").Ref<number>;
    PI: number;
    L: number;
    drawPath: (ctx: any, x: number, y: number, operation: "fill" | "clip") => void;
    getRandomImgSrc: () => string;
    createImg: (onload: VoidFunction) => HTMLImageElement;
    draw: (img: HTMLImageElement) => void;
    initImg: () => void;
    reset: () => void;
    handleRefresh: () => void;
    verify: () => {
        spliced: boolean;
        verified: boolean;
        left: number;
        destX: number;
    };
    handleDragStart: (e: any) => void;
    handleDragMove: (e: any) => false | undefined;
    handleDragEnd: (e: any) => false | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    width?: unknown;
    visible?: unknown;
    height?: unknown;
    refreshIcon?: unknown;
    l?: unknown;
    r?: unknown;
    imgUrl?: unknown;
    text?: unknown;
    onDraw?: unknown;
    onCustomVertify?: unknown;
    onBeforeRefresh?: unknown;
    onSuccess?: unknown;
    onFail?: unknown;
    onRefresh?: unknown;
} & {
    width: number;
    visible: boolean;
    height: number;
    refreshIcon: string;
    l: number;
    r: number;
    imgUrl: string;
    text: string;
} & {
    onDraw?: Function | undefined;
    onCustomVertify?: Function | undefined;
    onBeforeRefresh?: Function | undefined;
    onSuccess?: any;
    onFail?: any;
    onRefresh?: any;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    width: number;
    visible: boolean;
    height: number;
    refreshIcon: string;
    l: number;
    r: number;
    imgUrl: string;
    text: string;
}>;
export default _sfc_main;
