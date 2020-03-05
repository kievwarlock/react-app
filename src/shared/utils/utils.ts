export const classes = (...classes: (string | [string, boolean])[]) => {
    const classesArray: string[] = [];
    for (const itemClass of [...classes]) {
        if (Array.isArray(itemClass)) {
            const [className, isCan] = itemClass;
            if (isCan) {
                classesArray.push(className);
            }
        } else {
            classesArray.push(itemClass);
        }
    }

    return classesArray.join(" ");
};

export const generateUuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}