function parse(string) {
    const date = string.slice(0, string.indexOf('T'));
    const dateArr = date.split('-')
    dateArr[0] = dateArr[0].slice(2);
    return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`
  }
  
  console.log(parse('2022-11-01T07:00:00.000Z'))