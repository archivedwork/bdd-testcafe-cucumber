
/**
 * will get called once TestController instance gets available
 * see {@link testControllerHolder#register} and {@link testControllerHolder#capture}
 */

export interface TestControllerListener {
    onTestControllerSet(tc: TestController);
}
