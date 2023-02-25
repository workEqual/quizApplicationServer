const ChemistryQuestions = [
      {
        category:"Chemistry",
        description:"A carbon with atom 6 protons,6 electrons and 6 neutrons would have a mass number of",
        alternatives:[
            {text:"6",answer:false},
            {text:"18",answer:false},
            {text:"12",answer:true},
            {text:"15",answer:false},
        ]
    },
     {
        category:"Chemistry",
        description:"if an isotope of uranium, uranium-235 has 92 protons,how many protons does the isotope uranium 238 have ? ",
        alternatives:[
            {text:"92",answer:true},
            {text:"95",answer:false},
            {text:"143",answer:false},
            {text:"146",answer:false},
        ]
    },
    {
        category:"Chemistry",
        description:"The propeties of element in a horizontal row of the periodic table follow",
        alternatives:[
            {text:"a nonrepeating pattern",answer:false},
            {text:"a periodic pattern",answer:true},
            {text:"no pattern",answer:false},
            {text:"an unpredictable pattern",answer:false}
        ]
    }
]

module.exports={
    ChemistryQuestions
}