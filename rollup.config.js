import babel from "rollup-plugin-babel"
import uglify from "rollup-plugin-uglify"

const isProd = process.env.NODE_ENV === "production"

const uglifyOptions = {
  mangle: isProd,
  compress: isProd,
  output: {
    beautify: true,
    indent_level: 2
  }
}

export default {
  input: "app/javascript/action_cable/index.js",
  output: {
    file: isProd ? "dist/action_cable.js": "app/assets/javascripts/action_cable.js",
    format: "umd",
    name: "ActionCable",
    intro: "var self = typeof window !== 'undefined' ? window : global;"
  },
  plugins: [
    babel(),
    uglify(uglifyOptions)
  ]
}
