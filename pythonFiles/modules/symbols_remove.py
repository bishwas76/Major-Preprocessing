def replaceCharacters(text):
    chars = "\\`*\'\",/_{}[];:()>#‘–’+-.!$"
    for c in chars:
        text = text.replace(c, " ")
    text = text.replace(u'\xa0', u' ').replace(u'\u200d','').replace('  ', ' ')
    return text