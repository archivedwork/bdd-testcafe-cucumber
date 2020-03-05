import { TestControllerListener } from "./test-controller-listener";

export interface TestControllerHolder {
    capture(t: TestController): Promise<void>;
    register(listener: TestControllerListener): void;
    destroy(): void;
    get(): Promise<TestController>;
}
class TestControllerHolderImp implements TestControllerHolder {
    private static instance: TestControllerHolder;

    private static testController: TestController | undefined = undefined;
    private static testControllerListener: TestControllerListener[] | undefined = [];
    private static captureResolver: any;
    private static getResolver: any;

    public static getInstance(): TestControllerHolder{
        if(!TestControllerHolderImp.instance){
            TestControllerHolderImp.instance = new TestControllerHolderImp();
        }
        return TestControllerHolderImp.instance;
    }

    capture(t: TestController): Promise<any> {
        TestControllerHolderImp.testController = t;
        if(TestControllerHolderImp.testControllerListener){
            TestControllerHolderImp.testControllerListener.forEach((l) => l.onTestControllerSet(t));
        }

        if(TestControllerHolderImp.getResolver){
            TestControllerHolderImp.getResolver(t);
        }

        return new Promise((resolve) => (TestControllerHolderImp.captureResolver = resolve));
    }

    destroy(): void {
    }

    get(): Promise<TestController> {
        return undefined;
    }

    register(listener: TestControllerListener): void {
    }
}
