// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

console.log("setupTests.js is running");

const matchMediaMock = () => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
});

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: matchMediaMock,
});
global.matchMedia = matchMediaMock;

console.log("Overwrote matchMedia");

class IntersectionObserverMock {
    constructor() { }
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
}

window.IntersectionObserver = IntersectionObserverMock;
global.IntersectionObserver = IntersectionObserverMock;
window.ResizeObserver = IntersectionObserverMock;
global.ResizeObserver = IntersectionObserverMock;

console.log("Overwrote IntersectionObserver");