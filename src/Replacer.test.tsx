import Replacer from "./Replacer";

it('oldValue equals newValue', () => {

    let string = "asdf"
    let text = `dsajkl${string}asdasd`

    expect(Replacer.replace(text, string, string)).toBe(text)

});

it('oldValue doesn\'t include newValue test', () => {

    let text = `
                abcedfg

                qwerty

                abcqwe
            `

    let expected = `
                xyzedfg

                qwerty

                xyzqwe
            `

    let actual = Replacer.replace(text, "abc", "xyz")

    expect(actual).toBe(expected)

})

it('newValue is extension of oldValue', () => {

    let oldValue = "abc"
    let newValue = "0abcde"

    let text = `

                11abc11

                110abcde11

            `

    let expected = `

                110abcde11

                110abcde11

            `

    let actual = Replacer.replace(text, oldValue, newValue)

    expect(actual).toBe(expected)


});