const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Provided code
// const titleCased = () => {
//   return tutorials
// }

// const titleCased = tutorials.map(caseTheJoint);


// const titleCased = (array) => {
//     array.map(caseTheJoint (title) {
//         return tutorials;
//     });
// }

          // case the joint rev1
      // function caseTheJoint (array) {
      //   console.log(array.length)
      //   let combinedTitles = [];
      //   for (let i = 0; i < array.length; i++) {
      //   const splitFirstTitle = array[i].split(" ");
      //   // console.log(splitFirstTitle);

      //     for (let j = 0; j < splitFirstTitle.length; j++) {
      //       // It's something with this substring
      //       splitFirstTitle[j] = splitFirstTitle[j][0].toUpperCase() + splitFirstTitle[j].substr(1);
      //     }

      //     // console.log(splitFirstTitle);
          
      //     combinedTitles.push(splitFirstTitle.join(" "));
          


      //     return combinedTitles;
      //   }
      // }


      // case the joint rev2
      function caseTheJoint (array) {
      const splitFirstTitle = array.split(" ");
      // console.log(splitFirstTitle);

          for (let i = 0; i < splitFirstTitle.length; i++) {
            splitFirstTitle[i] = splitFirstTitle[i][0].toUpperCase() + splitFirstTitle[i].substr(1);
          }

          // console.log(splitFirstTitle);
          
          let combinedTitles = [];
          combinedTitles.push(splitFirstTitle.join(" "));


          // for (let j = 0; j )
          // let doubleCombinedTitles = [];
          // doubleCombinedTitles.push(combinedTitles.join(","))
          // console.log(doubleCombinedTitles);
          
          // console.log(combinedTitles);
          return combinedTitles;
          // return doubleCombinedTitles;

          // return splitFirstTitle;
        }


        const titleCased = () => {
          let toBeJoined = tutorials.map(caseTheJoint);
          console.log(toBeJoined);
          let finalArray = [];
          for (let i = 0; i < toBeJoined.length; i++) {
            finalArray.unshift(toBeJoined[i].toString());
          }
          console.log(finalArray);
          return(finalArray);
          // return tutorials.map(caseTheJoint);
          // return toBeJoined;
        }

      // const titleCased = () => {
      //   // let toBeJoined = [];
      //   // toBeJoined = 
      //   console.log(tutorials.map(caseTheJoint));
      //   return tutorials.map(caseTheJoint);
      //   // return toBeJoined;
      // }

      titleCased();
      // const titleCased = (array) => {}
      // console.log(titleCased);

// const titleCased = (array) => {
//   array.map(caseTheJoint);
// }

// // This titlecases the first item
//       const splitFirstTitle = tutorials[0].split(" ");
//       console.log(splitFirstTitle);

//           for (let i = 0; i < splitFirstTitle.length; i++) {
//             splitFirstTitle[i] = splitFirstTitle[i][0].toUpperCase() + splitFirstTitle[i].substr(1);
//           }

//           console.log(splitFirstTitle);
          
//           let combinedTitles = [];
//           combinedTitles.push(splitFirstTitle.join(" "));
          

//           console.log(combinedTitles);












// Creates an array of objects with each character in the string as an indexed value
// const tutorialsByChar = tutorials.map( guide => {
//   return Object.assign({}, guide)
// })
// console.log(tutorialsByChar);

// // Uppercases the indexed values
// const tutorialsByCharUpper = tutorials.map( guide => {
//   return Object.assign({}, guide.toUpperCase())
// })
// console.log(tutorialsByCharUpper);






    // function tCase(array) {
    //   const firstTitleCase = [];
    //   for (let i = 0; i < array.length; i++) {
    //     firstTitleCase[0] = splitFirstTitle[0].toUpperCase();
    //     for (let j = 1; i < array.length; j++) {
    //       firstTitleCase[i][j] = splitFirstTitle[i][j];
    //     }
    //   }
    //   console.log(firstTitleCase);
    // }

// console.log(splitFirstTitle);



    // NESTED LOOPS
    // const upperTutorials = function (array) {
    //   const newArray = [];
    //   for (let i = 0; i < array.length; i++) {

    //     for (let j = 0; j < array[i].length, j++){
            
    //     }
    //   }
    //   tutorials.toUpperCase();


// function titleCase(array) {
//   // array[0] = array.charAt(0).toUpperCase();
//     for (let i = 0; i < array.length; i++){

//       // }
//       console.log(array);
//       // return array;
//   }

//   titleCase('what does the this keyword mean?');