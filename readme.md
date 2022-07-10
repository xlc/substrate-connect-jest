```bash
$ yarn ts-node src/index.ts        
yarn run v1.22.17
warning package.json: No license field
$ /Users/xiliangchen/projects/acala/sc-test/node_modules/.bin/ts-node src/index.ts
/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/index.js:842
            return old(m, filename);
                   ^
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/xiliangchen/projects/acala/sc-test/node_modules/@substrate/connect/dist/index.js from /Users/xiliangchen/projects/acala/sc-test/node_modules/@polkadot/rpc-provider/cjs/substrate-connect/ScProvider.js not supported.
Instead change the require of index.js in /Users/xiliangchen/projects/acala/sc-test/node_modules/@polkadot/rpc-provider/cjs/substrate-connect/ScProvider.js to a dynamic import() which is available in all CommonJS modules.
    at Object.require.extensions.<computed> [as .js] (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/index.js:842:20)
    at Object.<anonymous> (/Users/xiliangchen/projects/acala/sc-test/node_modules/@polkadot/rpc-provider/cjs/substrate-connect/ScProvider.js:16:16)
    at Object.require.extensions.<computed> [as .js] (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/index.js:842:20)
    at Object.<anonymous> (/Users/xiliangchen/projects/acala/sc-test/node_modules/@polkadot/rpc-provider/cjs/substrate-connect/index.js:7:19)
    at Object.require.extensions.<computed> [as .js] (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/index.js:842:20)
    at Object.<anonymous> (/Users/xiliangchen/projects/acala/sc-test/src/index.ts:3:29)
    at Module.m._compile (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/index.js:848:29)
    at Object.require.extensions.<computed> [as .ts] (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/index.js:850:16)
    at phase4 (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/bin.js:414:16)
    at bootstrap (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/bin.js:49:12)
    at main (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/bin.js:32:12)
    at Object.<anonymous> (/Users/xiliangchen/projects/acala/sc-test/node_modules/ts-node/dist/bin.js:526:5) {
  code: 'ERR_REQUIRE_ESM'
}
error Command failed with exit code 1.
```

```bash
$ yarn jest
yarn run v1.22.17
warning package.json: No license field
$ /Users/xiliangchen/projects/acala/sc-test/node_modules/.bin/jest

 RUNS  src/test.ts
error Command failed with signal "SIGSEGV".
```