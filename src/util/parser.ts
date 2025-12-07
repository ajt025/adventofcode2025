export function parseLines(text: string): string[] {
    return text
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");
}

export function parseLinesWithSplit(text: string): string[][] {
    const lines = text.split(/\r?\n/);

    const chunks = [];
    let current = [];

    for (const line of lines) {
        if (line.trim() === '') {
            // empty line = delimiter; push current chunk if not empty
            if (current.length > 0) {
                chunks.push(current);
                current = [];
            }
        } else {
            current.push(line); // or just line if you want strings
        }
    }

    // push the final chunk if any
    if (current.length > 0) {
        chunks.push(current);
    }

    return chunks;
}


export function parseGrid(text: string): string[][] {
    return text
        .split(/\r?\n/)
        .map(line => line.split(""));
}