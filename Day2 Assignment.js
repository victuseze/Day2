// Question1
let challenge = '30 Days Of JavaScript';
// Question2
console.log(challenge)
// Question3
console.log(challenge.length);
// Question4
console.log(challenge.toUpperCase())
// Question5
console.log(challenge.toLocaleLowerCase())
// Question6
console.log(challenge.substring(0,2))
// Question7
console.log(challenge.substring(2, 7))
// Question8
console.log(challenge.includes('Script'))
// Question9
console.log(challenge.split());
// Question10
console.log(challenge.split(' '));
// Question11
let split = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(split.split(', '))
// Question12
console.log(challenge.replace('JavaScript', 'Python'))
// Question13
console.log(challenge.charAt(15))
// Question14
console.log(challenge.charCodeAt(11))
// Question15
console.log(challenge.indexOf('a'))
// Question16
console.log(challenge.lastIndexOf('a'))
// Question17
let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf('because'))
// Question18
console.log(sentence.lastIndexOf('because'))
// Question19
console.log(sentence.search('because'))
// Question20
console.log(challenge.trim())
// Question21
console.log(challenge.startsWith(''))
// Question22
console.log(challenge.endsWith(''))
// Question23
console.log(challenge.match('a'))
// Question24
let days = '30 Days of'
console.log(days.concat('JavaScript'))
// Question25
console.log(challenge.repeat(2))



// Exercise: Level 2
// Question1
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote)

// Question2
let mother = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(mother)

// Question3
console.log(typeof '10')
let ten = parseInt(10)
console.log(ten)

// Question4
let parse = parseFloat('9.81')
console.log(parse)
console.log(Math.round(parse))

// Question5
let Python = 'python'
let jargon = 'jargon'
console.log(Python.includes('on'))
console.log(jargon.includes('on'))

// Question6
let hope = 'I hope this course is not full of jargon'
console.log(hope.includes('jargon'))

// Question7
console.log(Math.floor(Math.random()*101))

// Question8
console.log(Math.floor(Math.random()*51) + 50)

// Question9
console.log(Math.floor(Math.random()*256))

// Queestion10
let random = (Math.random.toString(9).substring(0, 9))
console.log(random)