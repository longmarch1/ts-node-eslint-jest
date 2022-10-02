# ts-node-eslint-jest

Script to add config with ts, node, eslint and jest

Set up repo config is time-consuming and this script will set up a TypeScript project repo.

The following files are included:

-   add `.editorconfig`
-   add `.gitignore`
-   add `.eslintrc`
-   add `example.ts` and `example.test.ts`
-   add `sum.ts` and `sum.test.ts`

-   install typescript
-   install eslint
-   install jest, ts-jest

## Instruction

-   copy `gen-config.sh` to your local repo
-   run `./gen-config.sh`
-   run `npm test` to see test result

```
$ npm test

> ts-node-eslint-jest@1.0.0 test
> jest

 PASS  ./sum.test.ts
  sum module
    √ adds 1 + 2 to equal 3 (2 ms)

  Example
    √ once (6 ms)
    √ onceAndAfter (1 ms)
    √ alternator (1 ms)
    √ thisManyTimes (5 ms)

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        4.334 s
Ran all test suites.
```
