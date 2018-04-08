class Replacer {
    static replace(text: string, oldValue: string, newValue: string): string {

        if (oldValue == newValue) {
            return text
        }

        if (!newValue.includes(oldValue)) {
            return text.replace(new RegExp(oldValue, "g"), newValue)
        }

        let startIndex = newValue.indexOf(oldValue)

        let start = newValue.substring(0, startIndex)
        let end = newValue.substring(startIndex + oldValue.length, newValue.length)

        let startRegex: string

        if (start != "") {
            startRegex = `(?!<${start})`
        } else {
            startRegex = ""
        }

        let endRegex: string

        if (end != "") {
            endRegex = `(?!${end})`
        } else {
            endRegex = ""
        }

        let fullRegex = RegExp(startRegex + oldValue + endRegex, "g")

        return text.replace(fullRegex, newValue)
    }
}

export default Replacer