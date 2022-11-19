import { defineComponent, ref, onMounted, watch, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, toDisplayString, pushScopeId, popScopeId } from "vue";
function getRandomNumberByRange(start, end) {
  return Math.round(Math.random() * (end - start) + start);
}
function sum(x, y) {
  return x + y;
}
function square(x) {
  return x * x;
}
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-3d8a32f9"), n = n(), popScopeId(), n);
const _hoisted_1 = { className: "canvasArea" };
const _hoisted_2 = ["width", "height"];
const _hoisted_3 = ["width", "height"];
const _hoisted_4 = ["className"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { className: "sliderIcon" }, "\u2192", -1));
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = { className: "sliderText" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { className: "loadingIcon" }, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, "\u52A0\u8F7D\u4E2D...", -1));
const _hoisted_10 = [
  _hoisted_8,
  _hoisted_9
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    width: { default: 320 },
    visible: { type: Boolean, default: true },
    height: { default: 160 },
    refreshIcon: { default: "http://cdn.dooring.cn/dr/icon12.png" },
    l: { default: 42 },
    r: { default: 9 },
    imgUrl: { default: "" },
    text: { default: "" },
    onDraw: null,
    onCustomVertify: null,
    onBeforeRefresh: null,
    onSuccess: null,
    onFail: null,
    onRefresh: null
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const {
      text,
      l,
      r,
      imgUrl,
      width,
      height,
      visible,
      onBeforeRefresh,
      onRefresh,
      onFail,
      onSuccess,
      onCustomVertify,
      onDraw
    } = props;
    const isLoading = ref(false);
    const sliderLeft = ref(0);
    const sliderClass = ref("sliderContainer");
    const textTip = ref(text);
    const canvasRef = ref(null);
    const blockRef = ref(null);
    const imgRef = ref(null);
    const isMouseDownRef = ref(false);
    const trailRef = ref([]);
    const originXRef = ref(0);
    const originYRef = ref(0);
    const xRef = ref(0);
    const yRef = ref(0);
    const PI = Math.PI;
    const L = l + r * 2 + 3;
    const drawPath = (ctx, x, y, operation) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
      ctx.lineTo(x + l, y);
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
      ctx.lineTo(x + l, y + l);
      ctx.lineTo(x, y + l);
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
      ctx.lineTo(x, y);
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.stroke();
      ctx.globalCompositeOperation = "destination-over";
      operation === "fill" ? ctx.fill() : ctx.clip();
    };
    const getRandomImgSrc = () => {
      return imgUrl || `https://picsum.photos/id/${getRandomNumberByRange(0, 1084)}/${width}/${height}`;
    };
    const createImg = (onload) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = onload;
      img.onerror = () => {
        img.setSrc(getRandomImgSrc());
      };
      img.setSrc = (src) => {
        const isIE = window.navigator.userAgent.indexOf("Trident") > -1;
        if (isIE) {
          const xhr = new XMLHttpRequest();
          xhr.onloadend = function(e) {
            const file = new FileReader();
            file.readAsDataURL(e.target.response);
            file.onloadend = function(e2) {
              var _a;
              img.src = (_a = e2 == null ? void 0 : e2.target) == null ? void 0 : _a.result;
            };
          };
          xhr.open("GET", src);
          xhr.responseType = "blob";
          xhr.send();
        } else
          img.src = src;
      };
      img.setSrc(getRandomImgSrc());
      return img;
    };
    const draw = (img) => {
      const canvasCtx = canvasRef.value.getContext("2d");
      const blockCtx = blockRef.value.getContext("2d");
      xRef.value = getRandomNumberByRange(L + 10, width - (L + 10));
      yRef.value = getRandomNumberByRange(10 + r * 2, height - (L + 10));
      drawPath(canvasCtx, xRef.value, yRef.value, "fill");
      drawPath(blockCtx, xRef.value, yRef.value, "clip");
      canvasCtx.drawImage(img, 0, 0, width, height);
      blockCtx.drawImage(img, 0, 0, width, height);
      const y1 = yRef.value - r * 2 - 1;
      const ImageData = blockCtx.getImageData(xRef.value - 3, y1, L, L);
      blockRef.value.width = L;
      blockCtx.putImageData(ImageData, 0, y1);
    };
    const initImg = () => {
      const img = createImg(() => {
        isLoading.value = false;
        draw(img);
      });
      imgRef.value = img;
    };
    const reset = () => {
      const canvasCtx = canvasRef.value.getContext("2d");
      const blockCtx = blockRef.value.getContext("2d");
      sliderLeft.value = 0;
      sliderClass.value = "sliderContainer";
      blockRef.value.width = width;
      blockRef.value.style.left = 0 + "px";
      canvasCtx.clearRect(0, 0, width, height);
      blockCtx.clearRect(0, 0, width, height);
      onBeforeRefresh && onBeforeRefresh();
      isLoading.value = true;
      imgRef.value.setSrc(getRandomImgSrc());
    };
    const handleRefresh = () => {
      reset();
      typeof onRefresh === "function" && onRefresh();
    };
    const verify = () => {
      const arr = trailRef.value;
      const average = arr.reduce(sum) / arr.length;
      const deviations = arr.map((x) => x - average);
      const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
      const left = parseInt(blockRef.value.style.left);
      return {
        spliced: Math.abs(left - xRef.value) < 10,
        verified: stddev !== 0,
        left,
        destX: xRef.value
      };
    };
    const handleDragStart = function(e) {
      originXRef.value = e.clientX || e.touches[0].clientX;
      originYRef.value = e.clientY || e.touches[0].clientY;
      isMouseDownRef.value = true;
    };
    const handleDragMove = (e) => {
      if (!isMouseDownRef.value)
        return false;
      e.preventDefault();
      const eventX = e.clientX || e.touches[0].clientX;
      const eventY = e.clientY || e.touches[0].clientY;
      const moveX = eventX - originXRef.value;
      const moveY = eventY - originYRef.value;
      if (moveX < 0 || moveX + 38 >= width)
        return false;
      sliderLeft.value = moveX;
      const blockLeft = (width - 40 - 20) / (width - 40) * moveX;
      blockRef.value.style.left = blockLeft + "px";
      sliderClass.value = "sliderContainer sliderContainer_active";
      trailRef.value.push(moveY);
      onDraw && onDraw(blockLeft);
    };
    const handleDragEnd = (e) => {
      if (!isMouseDownRef.value)
        return false;
      isMouseDownRef.value = false;
      const eventX = e.clientX || e.changedTouches[0].clientX;
      if (eventX === originXRef.value)
        return false;
      sliderClass.value = "sliderContainer";
      const { spliced, verified } = onCustomVertify ? onCustomVertify(verify()) : verify();
      if (spliced) {
        if (verified) {
          sliderClass.value = "sliderContainer sliderContainer_success";
          typeof onSuccess === "function" && onSuccess();
        } else {
          sliderClass.value = "sliderContainer sliderContainer_fail";
          textTip.value = "\u8BF7\u518D\u8BD5\u4E00\u6B21";
          reset();
        }
      } else {
        sliderClass.value = "sliderContainer sliderContainer_fail";
        typeof onFail === "function" && onFail();
        setTimeout(reset.bind(this), 1e3);
      }
    };
    onMounted(() => {
      initImg();
    });
    watch(() => visible, () => {
      if (visible) {
        imgRef.value ? reset() : initImg();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        className: "vertifyWrap",
        style: normalizeStyle({
          width: unref(width) + "px",
          margin: "0 auto",
          display: unref(visible) ? "" : "none"
        }),
        onMousemove: handleDragMove,
        onMouseup: handleDragEnd,
        onTouchmove: handleDragMove,
        onTouchend: handleDragEnd
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("canvas", {
            ref: (_value, _refs) => {
              _refs["canvasRef"] = _value;
              canvasRef.value = _value;
            },
            width: unref(width),
            height: unref(height)
          }, null, 8, _hoisted_2),
          createElementVNode("canvas", {
            ref: (_value, _refs) => {
              _refs["blockRef"] = _value;
              blockRef.value = _value;
            },
            className: "block",
            width: unref(width),
            height: unref(height),
            onMousedown: handleDragStart,
            onTouchstart: handleDragStart
          }, null, 40, _hoisted_3)
        ]),
        createElementVNode("div", {
          className: sliderClass.value,
          style: normalizeStyle({
            pointerEvents: isLoading.value ? "none" : "auto",
            width: unref(width) + "px"
          })
        }, [
          createElementVNode("div", {
            className: "sliderMask",
            style: normalizeStyle({ width: sliderLeft.value + "px" })
          }, [
            createElementVNode("div", {
              className: "slider",
              style: normalizeStyle({ left: sliderLeft.value + "px" }),
              onMousedown: handleDragStart,
              onTouchstart: handleDragStart
            }, _hoisted_6, 36)
          ], 4),
          createElementVNode("div", _hoisted_7, toDisplayString(textTip.value), 1)
        ], 12, _hoisted_4),
        createElementVNode("div", {
          className: "refreshIcon",
          onClick: handleRefresh,
          style: normalizeStyle({ backgroundImage: `url(${__props.refreshIcon})` })
        }, null, 4),
        createElementVNode("div", {
          className: "loadingContainer",
          style: normalizeStyle({
            width: unref(width) + "px",
            height: unref(height) + "px",
            display: isLoading.value ? "" : "none"
          })
        }, _hoisted_10, 4)
      ], 36);
    };
  }
});
var Vertify = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d8a32f9"]]);
const VertifyPlugin = {
  install(app) {
    app.component("vertify", Vertify);
  }
};
const XiPlugin = {
  install(app) {
    var _a;
    (_a = VertifyPlugin.install) == null ? void 0 : _a.call(VertifyPlugin, app);
  }
};
export { Vertify, VertifyPlugin, XiPlugin as default };
