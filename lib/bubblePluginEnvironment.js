
export function instance() {
    return {
        data: {},
        publishState: jest.fn((state, value) => {} )
    };
};

export function context() {
    return {
    };
};

export function reset() {
    localStorage.clear();
}