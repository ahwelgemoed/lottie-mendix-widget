export const transformStringToJsonConfig = (string: string | undefined): any => {
    if (string) {
        try {
            return JSON.parse(string);
        } catch (error) {
            console.error(`Invalid JSON, ${error.message}`);
        }
    }
};
