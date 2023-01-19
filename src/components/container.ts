import { defineComponent, h } from "vue";

export let Container = defineComponent({
  name: "Container",
  setup() {
    return h("div");
  },
});

// <div
//         dangerouslySetInnerHTML={{
//           __html: `<!--[if mso | IE]>
//             <table role="presentation" width="100%" align="center" style="${inlineStyle}"><tr><td></td><td style="width:37.5em;background:#ffffff">
//           <![endif]-->`,
//         }}
//       />
//       <div ref={forwardedRef} style={styles} {...props}>
//         {children}
//       </div>
//       <div
//         dangerouslySetInnerHTML={{
//           __html: `<!--[if mso | IE]>
//           </td><td></td></tr></table>
//           <![endif]-->`,
//         }}
//       />
