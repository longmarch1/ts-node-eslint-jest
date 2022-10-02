import { once, onceAndAfter, thisManyTimes, alternator } from "./example";

import { expect, describe, beforeEach, fit, it, jest } from "@jest/globals";

describe("Example", () => {
    let foo: any;
    const f1 = () => {};
    const f2 = () => {};
    let spy1: any;
    let spy2: any;

    beforeEach(() => {
        foo = {
            f1,
            f2,
        };
        spy1 = jest.spyOn(foo, "f1");
        spy2 = jest.spyOn(foo, "f2");
    });

    it("once", () => {
        const oneCall = once(foo.f1);
        oneCall();
        oneCall();

        expect(spy1).toBeCalledTimes(1);
    });

    it("onceAndAfter", () => {
        const call = onceAndAfter(foo.f1, foo.f2);
        call();
        call();
        call();
        call();

        expect(spy1).toBeCalledTimes(1);
        expect(spy2).toBeCalledTimes(3);
    });

    it("alternator", () => {
        const call = alternator(foo.f1, foo.f2);
        call();
        call();
        call();
        call();

        expect(spy1).toBeCalledTimes(2);
        expect(spy2).toBeCalledTimes(2);
    });

    it("thisManyTimes", () => {
        const call = thisManyTimes(foo.f1, 3);
        call();
        call();
        call();
        call();

        expect(spy1).toBeCalledTimes(3);
    });
});
