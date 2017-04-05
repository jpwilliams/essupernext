const INDEXES = {
  RAW: 0,
  SINGLE_STRING: 1,
  DOUBLE_STRING: 2,
  CONST: 3,
  FUNCTION: 4,
  VAR: 5,
  LET: 6,
  MATH: 7,
  CONSOLE: 8,
  RETURN: 9,
  MODULE: 10,
  BUFFER: 11,
  ERROR: 12,
  DOT: 13,
  BREAK: 14,
  PLAIN: 15
}

function essupernext (data) {
  const re = /('.+?[^\\]')|(".+[^\\]")|(const)|(function)|(var)|(let)|(Math)|(console)|(return)|(module)|(Buffer)|(Error)|([=\(\)\[\]\{\}\;\,\>\<])|(\n)|(.)/gm

  let match
  let ret = ''

  while ((match = re.exec(data)) !== null) {
    if (match.index === re.lastIndex) {
      re.lastIndex++
    }

    switch (true) {
      case !!match[INDEXES.PLAIN]:
        ret += match[INDEXES.PLAIN]
        break

      case !!match[INDEXES.SINGLE_STRING]:
        ret += match[INDEXES.SINGLE_STRING]
        break

      case !!match[INDEXES.DOUBLE_STRING]:
        ret += match[INDEXES.DOUBLE_STRING]
        break

      case !!match[INDEXES.CONST]:
        ret += 'c'
        break

      case !!match[INDEXES.FUNCTION]:
        ret += 'f'
        break

      case !!match[INDEXES.VAR]:
        ret += 'v'
        break

      case !!match[INDEXES.LET]:
        ret += 'l'
        break

      case !!match[INDEXES.MATH]:
        ret += 'M'
        break

      case !!match[INDEXES.CONSOLE]:
        ret += 'c'
        break

      case !!match[INDEXES.RETURN]:
        ret += 'r'
        break

      case !!match[INDEXES.MODULE]:
        ret += 'm'
        break

      case !!match[INDEXES.BUFFER]:
        ret += 'B'
        break

      case !!match[INDEXES.ERROR]:
        ret += 'E'
        break

      case !!match[INDEXES.DOT]:
        ret += '.'
        break

      case !!match[INDEXES.BREAK]:
        ret += '\n'
        break
    }
  }

  return ret
}

module.exports = essupernext
