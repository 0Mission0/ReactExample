export const saveStorage = (savedText) => {
    try {
        localStorage.setItem('LocalStorageTest', savedText);
    }
    catch (err) {
        return undefined;
    }
};

export const loadStorage = () => {
    try {
        const savedText = localStorage.getItem('LocalStorageTest');
        if (savedText === null) {
            return undefined;
        }
        return savedText;
    }
    catch (err) {
        return undefined;
    }
};