import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { wasm } from '@rollup/plugin-wasm';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.js",
    output: [
        {
            format: "cjs",
            name: "ezhash",
            file: "dist/ezhash.cjs.js",
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
        {
            format: "cjs",
            name: "ezhash",
            file: "dist/ezhash.cjs.min.js",
            plugins: [terser()],
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
        {
            format: "umd",
            name: "ezhash",
            file: "dist/ezhash.umd.js",
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
        {
            format: "umd",
            name: "ezhash",
            file: "dist/ezhash.umd.min.js",
            plugins: [terser()],
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
        {
            format: "iife",
            name: "ezhash",
            file: "dist/ezhash.iife.js",
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
        {
            format: "iife",
            name: "ezhash",
            file: "dist/ezhash.iife.min.js",
            plugins: [terser()],
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
        {
            format: "es",
            name: "ezhash",
            file: "dist/ezhash.esm.js",
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
        {
            format: "es",
            name: "ezhash",
            file: "dist/ezhash.esm.min.js",
            plugins: [terser()],
            globals: {
                "argon2-browser": "argon2",
                "path": "path",
                "fs": "fs",
            }
        },
    ],
    plugins: [
        commonjs(),
        nodePolyfills(),
        nodeResolve({
            preferBuiltins: true,
            browser: true,
            dedupe: [
                "node_modules",
            ],
            // pass custom options to the resolve plugin
            moduleDirectories: [
                "node_modules"
            ],
            extensions: [".js", ".ts", ".wasm"]
        }),
        wasm(),
    ],
};