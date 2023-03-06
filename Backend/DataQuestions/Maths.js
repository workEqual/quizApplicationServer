const { v4: uuidv4 } = require('uuid');
const questionId=uuidv4().split('-')[0]


const MathsQuestions =[
    {
        category:"Mathematics",
        description:"The degree measure of 1 radian (taking π =22/7 ) is ",
        alternatives:[
            {text:" 57°16’22” (approx.)",answer:true},
            {text:"57°32’16” (approx.)",answer:false},
            {text:"57°61’22” (approx.)",answer:false},
            {text:"57°22’16” (approx.)",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:"The circular measure of the included angle formed by the hour hand and minute hand of a clock at 3 p.m. will be ",
        alternatives:[
            {text:"π/3",answer:false},
            {text:"π/4",answer:false},
            {text:" π/2",answer:true},
            {text:"5π/12",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:"The value of tan 4°.tan 43°.tan 47°.tan 86° is ",
        alternatives:[
            {text:"3",answer:false},
            {text:" 4",answer:false},
            {text:" 2",answer:false},
            {text:"1",answer:true},
        ]
    },
    {
        category:"Mathematics",
        description:"If cos x + cos y = 2, the value of sin x + sin y is",
        alternatives:[
            {text:"2",answer:false},
            {text:" 0",answer:true},
            {text:"-1",answer:false},
            {text:" 1",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:"The circular measure of an angle of an isosceles triangle is 5π/9.Circular measure of one of the other angles must be",
        alternatives:[
            {text:" 5π/9",answer:false},
            {text:"5π/18",answer:false},
            {text:"4π/9",answer:false},
            {text:"2π/9",answer:true},
        ]
    },
    {
        category:"Mathematics",
        description:"If x, y are acute angles, 0 < x +y < 90° and sin (2x – 20°) = cos (2y + 20°), then the value of tan (x + y) is : ",
        alternatives:[
            {text:" √3/2",answer:false},
            {text:" 1√3",answer:false},
            {text:"1",answer:true},
            {text:"√3",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:"What principal will amount to £15000 at 10% per annum in 5 years?",
        alternatives:[
            {text:"£10000",answer:true},
            {text:"£8700",answer:false},
            {text:"£10500",answer:false},
            {text:"£7500",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:" Rakesh borrowed £5000 from Ganesh at simple interest. If Ganesh got Rs.500 more than his capital after 5 years, then the rate of interest per annum is _______. ",
        alternatives:[
            {text:"4%",answer:false},
            {text:" 3%",answer:false},
            {text:"2%",answer:true},
            {text:"10%",answer:false},
        ]
    },
     {
        category:"Mathematics",
        description:"The rate percent per annum at which £1200 amounts to Rs.1440 in 4 years is ______.",
        alternatives:[
            {text:"5%",answer:true},
            {text:"4%",answer:false},
            {text:" 6%",answer:false},
            {text:" 20%",answer:false},
        ]
    },
     {
        category:"Mathematics",
        description:"If the simple interest on a certain sum of money for 2 years is one-fifth of the sum, then the rate of interest per annum is _____.",
        alternatives:[
            {text:" 9%",answer:false},
            {text:"10%",answer:true},
            {text:"8%",answer:false},
            {text:"None of these",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:" A sum was put at simple interest at a certain rate for 4 years. Had it been put at a 2% higher rate, it would have fetched £56 more. Find the sum.",
        alternatives:[
            {text:"£680",answer:true},
            {text:"£600",answer:false},
            {text:"£720",answer:false},
            {text:"£700",answer:false},
        ]
    },
     {
        category:"Mathematics",
        description:"What will be 80% of a number whose 200% is 90?",
        alternatives:[
            {text:"144",answer:false},
            {text:"72",answer:false},
            {text:"36",answer:true},
            {text:"54",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:"Two candidates fought an election. One got 65% of the votes and won by 300. The total number of votes polled is _____.",
        alternatives:[
            {text:"600",answer:false},
            {text:"800",answer:false},
            {text:"1000",answer:true},
            {text:"1200",answer:false},
        ]
    },
     {
        category:"Mathematics",
        description:"If 75% of the students in a school are boys and the number of girls is 420, the number of boys is ______.",
        alternatives:[
            {text:" 1176",answer:false},
            {text:" 1260",answer:true},
            {text:"1350",answer:false},
            {text:" 1125",answer:false},
        ]
    },
    {
        category:"Mathematics",
        description:"The number of colleges in a town increases by 5% annually. If it is 15435 now, the number of colleges 2 years ago was _______.",
        alternatives:[
            {text:" 14000",answer:true},
            {text:"13930",answer:false},
            {text:"13700",answer:false},
            {text:"14800",answer:false},
        ]
    },
     {
        category:"Mathematics",
        description:" The length and breadth of a square are increased by 30% and 20 % respectively. The area of the rectangle formed exceeds the area of the square by ________.",
        alternatives:[
            {text:"20%",answer:false},
            {text:"36%",answer:false},
            {text:"50%",answer:false},
            {text:"56%",answer:true},
        ]
    },
]

module.exports ={
    MathsQuestions
}