export function parseErrors(errorArray) {
    const parsed = {};
    errorArray.forEach((error) => {
        parsed[error.field] = error.message;
    });
    return parsed;
}