// function parse(string) {
//     const date = string.slice(0, string.indexOf('T'));
//     const dateArr = date.split('-')
//     dateArr[0] = dateArr[0].slice(2);
//     return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`
//   }

  const months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
  }


  function parse(string){
    const dateArray = string.split(' ');
    const newDate = [];
    const day = dateArray[2];
    const month = months[dateArray[1]];
    const year = dateArray[3];
    // newDate.push(year);
    // newDate.push(month);
    // newDate.push(day);
    return(year+'-'+month+'-'+day);
  }
  
  // console.log(parse('2022-11-01T07:00:00.000Z'))
  console.log(parse('Tue Nov 22 2022 00:00:00 GMT-0800 (Pacific Standard Time)'))
// YYYY-MM-DD

export { parse as dateParse };