export function createQuery(inputText: string): void {

    //separate out the string into individual query Items
    let rawQueryItems = separateBySemis(inputText);

    //check each item for reference + AND/NOT intent
    let parsedQueryItems = rawQueryItems.map((item) => {
        let parsedContent = parseQueryItems(item);

        return parsedContent;
    })

    console.log(parsedQueryItems);
    //build Dataloge query based on parsed values
    //paste query into contents.md file and show in right panel
}

function separateBySemis(initialString: string) {
    //separate entered string into separate items by semicolons
    let semicolonSeparated = initialString.split(";");

    //remove unnecessary spaces at the start or end of each item
    let semiTrimmed = semicolonSeparated.map((item) => {
        let trimmedItem = item.trim();
        return trimmedItem;
    });

    return semiTrimmed;
}

function parseQueryItems(queryItem: string) {
    //check if item is intended for AND or NOT usage in query
    const isNOTItem = queryItem[0] === "-" ? true : false;

    //remove "-" if present for further parsing
    let parsedContentNOT = isNOTItem ? queryItem.substring(1) : queryItem;

    //check for brackets indicating a reference
    const bracketRegex = /^\[\[.*\]\]$/;
    const isReference = bracketRegex.test(parsedContentNOT);

    //check if a job number hasn't been converted to a string;
    let isNum = typeof parsedContentNOT === "number" ? true : false;

    let parsedContentRef = isNum ? parsedContentNOT.toString() : parsedContentNOT;

    //if it is a reference, remove the brackets
    if (isReference) {
        let noBracketContent = parsedContentRef.substring(2, parsedContentRef.length - 2);
        parsedContentRef = noBracketContent;
    }

    let parsedContent = parsedContentRef;

    console.log(queryItem, parsedContentNOT, parsedContentRef, parsedContent);
    return {
        content: parsedContent,
        isReference: isReference,
        isNOTItem: isNOTItem
    }
}

