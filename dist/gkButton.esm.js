import { defineComponent, openBlock, createBlock, toDisplayString, withScopeId } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: "GkButton",
  // vue component name
  props: {
    text: {
      default: "Click Me",
      type: String
    },
    uppercase: {
      default: true,
      type: Boolean
    },
    bgColor: {
      default: "#AAA09C",
      type: String
    },
    textColor: {
      default: "#fff",
      type: String
    },
    shadow: {
      default: true,
      type: Boolean
    }
  },

  data() {
    return {
      style: {
        "--color": this.textColor,
        "--bgColor": this.bgColor,
        "--transform": this.uppercase ? "uppercase" : "",
        "--shadow": this.shadow ? "0px 8px 15px rgba(0, 0, 0, 0.3)" : ""
      }
    };
  }

});

const _withId = /*#__PURE__*/withScopeId("data-v-22667c00");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", {
    style: _ctx.style
  }, toDisplayString(_ctx.text), 5);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\nbutton[data-v-22667c00] {\n  background-color: var(--bgColor);\n  color: var(--color);\n  text-transform: var(--transform);\n  box-shadow: var(--shadow);\n  border: none;\n  font-weight: bold;\n  padding: 1rem 2rem;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 1em;\n  transition-duration: 0.4s;\n}\nbutton[data-v-22667c00]:disabled {\n  background-color: gray;\n  color: darkgray;\n}\nbutton[data-v-22667c00]:hover {\n  filter: brightness(115%);\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-22667c00";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('GkButton', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
