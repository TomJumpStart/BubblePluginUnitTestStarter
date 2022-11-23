
export function instance() {
    return {
        data: {},
        publishState: jest.fn((state, value) => {} )
    };
};

export function resetInstanceMocks(oldInstance) {
    // retain the data cache but throw away old mock
    var newInstance = instance();
    oldInstance.publishState = newInstance.publishState;
}

export function context() {
    return {
    };
};

export function reset() {
    localStorage.clear();
}

export function wrapArrayAsListOfThings(array) {
    return {
        length: () => { return array.length },
        get: (start, len) => { return array.slice(start, start+len); }
    };
}