$(function() {
  var countryJsonList = {
    "countryTable": [
      {
        "countryID": "1",
        "country": "Afghanistan"
      },
      {
        "countryID": "2",
        "country": "Albania"
      },
      {
        "countryID": "3",
        "country": "Algeria"
      },
      {
        "countryID": "4",
        "country": "American Samoa"
      },
      {
        "countryID": "5",
        "country": "Angola"
      },
      {
        "countryID": "6",
        "country": "Anguilla"
      },
      {
        "countryID": "7",
        "country": "Antartica"
      },
      {
        "countryID": "8",
        "country": "Antigua and Barbuda"
      },
      {
        "countryID": "9",
        "country": "Argentina"
      },
      {
        "countryID": "10",
        "country": "Armenia"
      },
      {
        "countryID": "11",
        "country": "Aruba"
      },
      {
        "countryID": "12",
        "country": "Ashmore and Cartier Island"
      },
      {
        "countryID": "13",
        "country": "Australia"
      },
      {
        "countryID": "14",
        "country": "Austria"
      },
      {
        "countryID": "15",
        "country": "Azerbaijan"
      },
      {
        "countryID": "16",
        "country": "Bahamas"
      },
      {
        "countryID": "17",
        "country": "Bahrain"
      },
      {
        "countryID": "18",
        "country": "Bangladesh"
      },
      {
        "countryID": "19",
        "country": "Barbados"
      },
      {
        "countryID": "20",
        "country": "Belarus"
      },
      {
        "countryID": "21",
        "country": "Belgium"
      },
      {
        "countryID": "22",
        "country": "Belize"
      },
      {
        "countryID": "23",
        "country": "Benin"
      },
      {
        "countryID": "24",
        "country": "Bermuda"
      },
      {
        "countryID": "25",
        "country": "Bhutan"
      },
      {
        "countryID": "26",
        "country": "Bolivia"
      },
      {
        "countryID": "27",
        "country": "Bosnia and Herzegovina"
      },
      {
        "countryID": "28",
        "country": "Botswana"
      },
      {
        "countryID": "29",
        "country": "Brazil"
      },
      {
        "countryID": "30",
        "country": "British Virgin Islands"
      },
      {
        "countryID": "31",
        "country": "Brunei"
      },
      {
        "countryID": "32",
        "country": "Bulgaria"
      },
      {
        "countryID": "33",
        "country": "Burkina Faso"
      },
      {
        "countryID": "34",
        "country": "Burma"
      },
      {
        "countryID": "35",
        "country": "Burundi"
      },
      {
        "countryID": "36",
        "country": "Cambodia"
      },
      {
        "countryID": "37",
        "country": "Cameroon"
      },
      {
        "countryID": "38",
        "country": "Canada"
      },
      {
        "countryID": "39",
        "country": "Cape Verde"
      },
      {
        "countryID": "40",
        "country": "Cayman Islands"
      },
      {
        "countryID": "41",
        "country": "Central African Republic"
      },
      {
        "countryID": "42",
        "country": "Chad"
      },
      {
        "countryID": "43",
        "country": "Chile"
      },
      {
        "countryID": "44",
        "country": "China"
      },
      {
        "countryID": "45",
        "country": "Christmas Island"
      },
      {
        "countryID": "46",
        "country": "Clipperton Island"
      },
      {
        "countryID": "47",
        "country": "Cocos (Keeling) Islands"
      },
      {
        "countryID": "48",
        "country": "Colombia"
      },
      {
        "countryID": "49",
        "country": "Comoros"
      },
      {
        "countryID": "50",
        "country": "Congo, Democratic Republic of the"
      },
      {
        "countryID": "51",
        "country": "Congo, Republic of the"
      },
      {
        "countryID": "52",
        "country": "Cook Islands"
      },
      {
        "countryID": "53",
        "country": "Costa Rica"
      },
      {
        "countryID": "54",
        "country": "Cote d'Ivoire"
      },
      {
        "countryID": "55",
        "country": "Croatia"
      },
      {
        "countryID": "56",
        "country": "Cuba"
      },
      {
        "countryID": "57",
        "country": "Cyprus"
      },
      {
        "countryID": "58",
        "country": "Czeck Republic"
      },
      {
        "countryID": "59",
        "country": "Denmark"
      },
      {
        "countryID": "60",
        "country": "Djibouti"
      },
      {
        "countryID": "61",
        "country": "Dominica"
      },
      {
        "countryID": "62",
        "country": "Dominican Republic"
      },
      {
        "countryID": "63",
        "country": "Ecuador"
      },
      {
        "countryID": "64",
        "country": "Egypt"
      },
      {
        "countryID": "65",
        "country": "El Salvador"
      },
      {
        "countryID": "66",
        "country": "Equatorial Guinea"
      },
      {
        "countryID": "67",
        "country": "Eritrea"
      },
      {
        "countryID": "68",
        "country": "Estonia"
      },
      {
        "countryID": "69",
        "country": "Ethiopia"
      },
      {
        "countryID": "70",
        "country": "Europa Island"
      },
      {
        "countryID": "71",
        "country": "Falkland Islands (Islas Malvinas)"
      },
      {
        "countryID": "72",
        "country": "Faroe Islands"
      },
      {
        "countryID": "73",
        "country": "Fiji"
      },
      {
        "countryID": "74",
        "country": "Finland"
      },
      {
        "countryID": "75",
        "country": "France"
      },
      {
        "countryID": "76",
        "country": "French Guiana"
      },
      {
        "countryID": "77",
        "country": "French Polynesia"
      },
      {
        "countryID": "78",
        "country": "French Southern and Antarctic Lands"
      },
      {
        "countryID": "79",
        "country": "Gabon"
      },
      {
        "countryID": "80",
        "country": "Gambia, The"
      },
      {
        "countryID": "81",
        "country": "Gaza Strip"
      },
      {
        "countryID": "82",
        "country": "Georgia"
      },
      {
        "countryID": "83",
        "country": "Germany"
      },
      {
        "countryID": "84",
        "country": "Ghana"
      },
      {
        "countryID": "85",
        "country": "Gibraltar"
      },
      {
        "countryID": "86",
        "country": "Glorioso Islands"
      },
      {
        "countryID": "87",
        "country": "Greece"
      },
      {
        "countryID": "88",
        "country": "Greenland"
      },
      {
        "countryID": "89",
        "country": "Grenada"
      },
      {
        "countryID": "90",
        "country": "Guadeloupe"
      },
      {
        "countryID": "91",
        "country": "Guam"
      },
      {
        "countryID": "92",
        "country": "Guatemala"
      },
      {
        "countryID": "93",
        "country": "Guernsey"
      },
      {
        "countryID": "94",
        "country": "Guinea"
      },
      {
        "countryID": "95",
        "country": "Guinea-Bissau"
      },
      {
        "countryID": "96",
        "country": "Guyana"
      },
      {
        "countryID": "97",
        "country": "Haiti"
      },
      {
        "countryID": "98",
        "country": "Heard Island and McDonald Islands"
      },
      {
        "countryID": "99",
        "country": "Holy See (Vatican City)"
      },
      {
        "countryID": "100",
        "country": "Honduras"
      },
      {
        "countryID": "101",
        "country": "Hong Kong"
      },
      {
        "countryID": "102",
        "country": "Howland Island"
      },
      {
        "countryID": "103",
        "country": "Hungary"
      },
      {
        "countryID": "104",
        "country": "Iceland"
      },
      {
        "countryID": "105",
        "country": "India"
      },
      {
        "countryID": "106",
        "country": "Indonesia"
      },
      {
        "countryID": "107",
        "country": "Iran"
      },
      {
        "countryID": "108",
        "country": "Iraq"
      },
      {
        "countryID": "109",
        "country": "Ireland"
      },
      {
        "countryID": "110",
        "country": "Ireland, Northern"
      },
      {
        "countryID": "111",
        "country": "Israel"
      },
      {
        "countryID": "112",
        "country": "Italy"
      },
      {
        "countryID": "113",
        "country": "Jamaica"
      },
      {
        "countryID": "114",
        "country": "Jan Mayen"
      },
      {
        "countryID": "115",
        "country": "Japan"
      },
      {
        "countryID": "116",
        "country": "Jarvis Island"
      },
      {
        "countryID": "117",
        "country": "Jersey"
      },
      {
        "countryID": "118",
        "country": "Johnston Atoll"
      },
      {
        "countryID": "119",
        "country": "Jordan"
      },
      {
        "countryID": "120",
        "country": "Juan de Nova Island"
      },
      {
        "countryID": "121",
        "country": "Kazakhstan"
      },
      {
        "countryID": "122",
        "country": "Kenya"
      },
      {
        "countryID": "123",
        "country": "Kiribati"
      },
      {
        "countryID": "124",
        "country": "Korea, North"
      },
      {
        "countryID": "125",
        "country": "Korea, South"
      },
      {
        "countryID": "126",
        "country": "Kuwait"
      },
      {
        "countryID": "127",
        "country": "Kyrgyzstan"
      },
      {
        "countryID": "128",
        "country": "Laos"
      },
      {
        "countryID": "129",
        "country": "Latvia"
      },
      {
        "countryID": "130",
        "country": "Lebanon"
      },
      {
        "countryID": "131",
        "country": "Lesotho"
      },
      {
        "countryID": "132",
        "country": "Liberia"
      },
      {
        "countryID": "133",
        "country": "Libya"
      },
      {
        "countryID": "134",
        "country": "Liechtenstein"
      },
      {
        "countryID": "135",
        "country": "Lithuania"
      },
      {
        "countryID": "136",
        "country": "Luxembourg"
      },
      {
        "countryID": "137",
        "country": "Macau"
      },
      {
        "countryID": "138",
        "country": "Macedonia, Former Yugoslav Republic of"
      },
      {
        "countryID": "139",
        "country": "Madagascar"
      },
      {
        "countryID": "140",
        "country": "Malawi"
      },
      {
        "countryID": "141",
        "country": "Malaysia"
      },
      {
        "countryID": "142",
        "country": "Maldives"
      },
      {
        "countryID": "143",
        "country": "Mali"
      },
      {
        "countryID": "144",
        "country": "Malta"
      },
      {
        "countryID": "145",
        "country": "Man, Isle of"
      },
      {
        "countryID": "146",
        "country": "Marshall Islands"
      },
      {
        "countryID": "147",
        "country": "Martinique"
      },
      {
        "countryID": "148",
        "country": "Mauritania"
      },
      {
        "countryID": "149",
        "country": "Mauritius"
      },
      {
        "countryID": "150",
        "country": "Mayotte"
      },
      {
        "countryID": "151",
        "country": "Mexico"
      },
      {
        "countryID": "152",
        "country": "Micronesia, Federated States of"
      },
      {
        "countryID": "153",
        "country": "Midway Islands"
      },
      {
        "countryID": "154",
        "country": "Moldova"
      },
      {
        "countryID": "155",
        "country": "Monaco"
      },
      {
        "countryID": "156",
        "country": "Mongolia"
      },
      {
        "countryID": "157",
        "country": "Montserrat"
      },
      {
        "countryID": "158",
        "country": "Morocco"
      },
      {
        "countryID": "159",
        "country": "Mozambique"
      },
      {
        "countryID": "160",
        "country": "Namibia"
      },
      {
        "countryID": "161",
        "country": "Nauru"
      },
      {
        "countryID": "162",
        "country": "Nepal"
      },
      {
        "countryID": "163",
        "country": "Netherlands"
      },
      {
        "countryID": "164",
        "country": "Netherlands Antilles"
      },
      {
        "countryID": "165",
        "country": "New Caledonia"
      },
      {
        "countryID": "166",
        "country": "New Zealand"
      },
      {
        "countryID": "167",
        "country": "Nicaragua"
      },
      {
        "countryID": "168",
        "country": "Niger"
      },
      {
        "countryID": "169",
        "country": "Nigeria"
      },
      {
        "countryID": "170",
        "country": "Niue"
      },
      {
        "countryID": "171",
        "country": "Norfolk Island"
      },
      {
        "countryID": "172",
        "country": "Northern Mariana Islands"
      },
      {
        "countryID": "173",
        "country": "Norway"
      },
      {
        "countryID": "174",
        "country": "Oman"
      },
      {
        "countryID": "175",
        "country": "Pakistan"
      },
      {
        "countryID": "176",
        "country": "Palau"
      },
      {
        "countryID": "177",
        "country": "Panama"
      },
      {
        "countryID": "178",
        "country": "Papua New Guinea"
      },
      {
        "countryID": "179",
        "country": "Paraguay"
      },
      {
        "countryID": "180",
        "country": "Peru"
      },
      {
        "countryID": "181",
        "country": "Philippines"
      },
      {
        "countryID": "182",
        "country": "Pitcaim Islands"
      },
      {
        "countryID": "183",
        "country": "Poland"
      },
      {
        "countryID": "184",
        "country": "Portugal"
      },
      {
        "countryID": "185",
        "country": "Puerto Rico"
      },
      {
        "countryID": "186",
        "country": "Qatar"
      },
      {
        "countryID": "187",
        "country": "Reunion"
      },
      {
        "countryID": "188",
        "country": "Romania"
      },
      {
        "countryID": "189",
        "country": "Russia"
      },
      {
        "countryID": "190",
        "country": "Rwanda"
      },
      {
        "countryID": "191",
        "country": "Saint Helena"
      },
      {
        "countryID": "192",
        "country": "Saint Kitts and Nevis"
      },
      {
        "countryID": "193",
        "country": "Saint Lucia"
      },
      {
        "countryID": "194",
        "country": "Saint Pierre and Miquelon"
      },
      {
        "countryID": "195",
        "country": "Saint Vincent and the Grenadines"
      },
      {
        "countryID": "196",
        "country": "Samoa"
      },
      {
        "countryID": "197",
        "country": "San Marino"
      },
      {
        "countryID": "198",
        "country": "Sao Tome and Principe"
      },
      {
        "countryID": "199",
        "country": "Saudi Arabia"
      },
      {
        "countryID": "200",
        "country": "Scotland"
      },
      {
        "countryID": "201",
        "country": "Senegal"
      },
      {
        "countryID": "202",
        "country": "Seychelles"
      },
      {
        "countryID": "203",
        "country": "Sierra Leone"
      },
      {
        "countryID": "204",
        "country": "Singapore"
      },
      {
        "countryID": "205",
        "country": "Slovakia"
      },
      {
        "countryID": "206",
        "country": "Slovenia"
      },
      {
        "countryID": "207",
        "country": "Solomon Islands"
      },
      {
        "countryID": "208",
        "country": "Somalia"
      },
      {
        "countryID": "209",
        "country": "South Africa"
      },
      {
        "countryID": "210",
        "country": "South Georgia and South Sandwich Islands"
      },
      {
        "countryID": "211",
        "country": "Spain"
      },
      {
        "countryID": "212",
        "country": "Spratly Islands"
      },
      {
        "countryID": "213",
        "country": "Sri Lanka"
      },
      {
        "countryID": "214",
        "country": "Sudan"
      },
      {
        "countryID": "215",
        "country": "Suriname"
      },
      {
        "countryID": "216",
        "country": "Svalbard"
      },
      {
        "countryID": "217",
        "country": "Swaziland"
      },
      {
        "countryID": "218",
        "country": "Sweden"
      },
      {
        "countryID": "219",
        "country": "Switzerland"
      },
      {
        "countryID": "220",
        "country": "Syria"
      },
      {
        "countryID": "221",
        "country": "Taiwan"
      },
      {
        "countryID": "222",
        "country": "Tajikistan"
      },
      {
        "countryID": "223",
        "country": "Tanzania"
      },
      {
        "countryID": "224",
        "country": "Thailand"
      },
      {
        "countryID": "225",
        "country": "Tobago"
      },
      {
        "countryID": "226",
        "country": "Toga"
      },
      {
        "countryID": "227",
        "country": "Tokelau"
      },
      {
        "countryID": "228",
        "country": "Tonga"
      },
      {
        "countryID": "229",
        "country": "Trinidad"
      },
      {
        "countryID": "230",
        "country": "Tunisia"
      },
      {
        "countryID": "231",
        "country": "Turkey"
      },
      {
        "countryID": "232",
        "country": "Turkmenistan"
      },
      {
        "countryID": "233",
        "country": "Tuvalu"
      },
      {
        "countryID": "234",
        "country": "Uganda"
      },
      {
        "countryID": "235",
        "country": "Ukraine"
      },
      {
        "countryID": "236",
        "country": "United Arab Emirates"
      },
      {
        "countryID": "237",
        "country": "United Kingdom"
      },
      {
        "countryID": "238",
        "country": "Uruguay"
      },
      {
        "countryID": "239",
        "country": "USA"
      },
      {
        "countryID": "240",
        "country": "Uzbekistan"
      },
      {
        "countryID": "241",
        "country": "Vanuatu"
      },
      {
        "countryID": "242",
        "country": "Venezuela"
      },
      {
        "countryID": "243",
        "country": "Vietnam"
      },
      {
        "countryID": "244",
        "country": "Virgin Islands"
      },
      {
        "countryID": "245",
        "country": "Wales"
      },
      {
        "countryID": "246",
        "country": "Wallis and Futuna"
      },
      {
        "countryID": "247",
        "country": "West Bank"
      },
      {
        "countryID": "248",
        "country": "Western Sahara"
      },
      {
        "countryID": "249",
        "country": "Yemen"
      },
      {
        "countryID": "250",
        "country": "Yugoslavia"
      },
      {
        "countryID": "251",
        "country": "Zambia"
      },
      {
        "countryID": "252",
        "country": "Zimbabwe"
      }
    ]
  };
  var stateJsonList = {
    "Afghanistan": [
      {
        "stateID": "1",
        "state": "Badakhshan"
      },
      {
        "stateID": "2",
        "state": "Badghis"
      },
      {
        "stateID": "3",
        "state": "Baghlan"
      },
      {
        "stateID": "4",
        "state": "Balkh"
      },
      {
        "stateID": "5",
        "state": "Bamian"
      },
      {
        "stateID": "6",
        "state": "Farah"
      },
      {
        "stateID": "7",
        "state": "Faryab"
      },
      {
        "stateID": "8",
        "state": "Ghazni"
      },
      {
        "stateID": "9",
        "state": "Ghowr"
      },
      {
        "stateID": "10",
        "state": "Helmand"
      },
      {
        "stateID": "11",
        "state": "Herat"
      },
      {
        "stateID": "12",
        "state": "Jowzjan"
      },
      {
        "stateID": "13",
        "state": "Kabol"
      },
      {
        "stateID": "14",
        "state": "Kandahar"
      },
      {
        "stateID": "15",
        "state": "Kapisa"
      },
      {
        "stateID": "16",
        "state": "Konar"
      },
      {
        "stateID": "17",
        "state": "Kondoz"
      },
      {
        "stateID": "18",
        "state": "Laghman"
      },
      {
        "stateID": "19",
        "state": "Lowgar"
      },
      {
        "stateID": "20",
        "state": "Nangarhar"
      },
      {
        "stateID": "21",
        "state": "Nimruz"
      },
      {
        "stateID": "22",
        "state": "Oruzgan"
      },
      {
        "stateID": "23",
        "state": "Paktia"
      },
      {
        "stateID": "24",
        "state": "Paktika"
      },
      {
        "stateID": "25",
        "state": "Parvan"
      },
      {
        "stateID": "26",
        "state": "Samangan"
      },
      {
        "stateID": "27",
        "state": "Sar-e Pol"
      },
      {
        "stateID": "28",
        "state": "Takhar"
      },
      {
        "stateID": "29",
        "state": "Vardak"
      },
      {
        "stateID": "30",
        "state": "Zabol"
      }
    ],
    "Albania": [
      {
        "stateID": "1",
        "state": "Berat"
      },
      {
        "stateID": "2",
        "state": "Bulqize"
      },
      {
        "stateID": "3",
        "state": "Delvine"
      },
      {
        "stateID": "4",
        "state": "Devoll (Bilisht)"
      },
      {
        "stateID": "5",
        "state": "Diber (Peshkopi)"
      },
      {
        "stateID": "6",
        "state": "Durres"
      },
      {
        "stateID": "7",
        "state": "Elbasan"
      },
      {
        "stateID": "8",
        "state": "Fier"
      },
      {
        "stateID": "9",
        "state": "Gjirokaster"
      },
      {
        "stateID": "10",
        "state": "Gramsh"
      },
      {
        "stateID": "11",
        "state": "Has (Krume)"
      },
      {
        "stateID": "12",
        "state": "Kavaje"
      },
      {
        "stateID": "13",
        "state": "Kolonje (Erseke)"
      },
      {
        "stateID": "14",
        "state": "Korce"
      },
      {
        "stateID": "15",
        "state": "Kruje"
      },
      {
        "stateID": "16",
        "state": "Kucove"
      },
      {
        "stateID": "17",
        "state": "Kukes"
      },
      {
        "stateID": "18",
        "state": "Kurbin"
      },
      {
        "stateID": "19",
        "state": "Lezhe"
      },
      {
        "stateID": "20",
        "state": "Librazhd"
      },
      {
        "stateID": "21",
        "state": "Lushnje"
      },
      {
        "stateID": "22",
        "state": "Malesi e Madhe (Koplik)"
      },
      {
        "stateID": "23",
        "state": "Mallakaster (Ballsh)"
      },
      {
        "stateID": "24",
        "state": "Mat (Burrel)"
      },
      {
        "stateID": "25",
        "state": "Mirdite (Rreshen)"
      },
      {
        "stateID": "26",
        "state": "Peqin"
      },
      {
        "stateID": "27",
        "state": "Permet"
      },
      {
        "stateID": "28",
        "state": "Pogradec"
      },
      {
        "stateID": "29",
        "state": "Puke"
      },
      {
        "stateID": "30",
        "state": "Sarande"
      },
      {
        "stateID": "31",
        "state": "Shkoder"
      },
      {
        "stateID": "32",
        "state": "Skrapar (Corovode)"
      },
      {
        "stateID": "33",
        "state": "Tepelene"
      },
      {
        "stateID": "34",
        "state": "Tirane (Tirana)"
      },
      {
        "stateID": "35",
        "state": "Tirane (Tirana)"
      },
      {
        "stateID": "36",
        "state": "Tropoje (Bajram Curri)"
      },
      {
        "stateID": "37",
        "state": "Vlore"
      }
    ],
    "Algeria": [
      {
        "stateID": "1",
        "state": "Adrar"
      },
      {
        "stateID": "2",
        "state": "Ain Defla"
      },
      {
        "stateID": "3",
        "state": "Ain Temouchent"
      },
      {
        "stateID": "4",
        "state": "Alger"
      },
      {
        "stateID": "5",
        "state": "Annaba"
      },
      {
        "stateID": "6",
        "state": "Batna"
      },
      {
        "stateID": "7",
        "state": "Bechar"
      },
      {
        "stateID": "8",
        "state": "Bejaia"
      },
      {
        "stateID": "9",
        "state": "Biskra"
      },
      {
        "stateID": "10",
        "state": "Blida"
      },
      {
        "stateID": "11",
        "state": "Bordj Bou Arreridj"
      },
      {
        "stateID": "12",
        "state": "Bouira"
      },
      {
        "stateID": "13",
        "state": "Boumerdes"
      },
      {
        "stateID": "14",
        "state": "Chlef"
      },
      {
        "stateID": "15",
        "state": "Constantine"
      },
      {
        "stateID": "16",
        "state": "Djelfa"
      },
      {
        "stateID": "17",
        "state": "El Bayadh"
      },
      {
        "stateID": "18",
        "state": "El Oued"
      },
      {
        "stateID": "19",
        "state": "El Tarf"
      },
      {
        "stateID": "20",
        "state": "Ghardaia"
      },
      {
        "stateID": "21",
        "state": "Guelma"
      },
      {
        "stateID": "22",
        "state": "Illizi"
      },
      {
        "stateID": "23",
        "state": "Jijel"
      },
      {
        "stateID": "24",
        "state": "Khenchela"
      },
      {
        "stateID": "25",
        "state": "Laghouat"
      },
      {
        "stateID": "26",
        "state": "M'Sila"
      },
      {
        "stateID": "27",
        "state": "Mascara"
      },
      {
        "stateID": "28",
        "state": "Medea"
      },
      {
        "stateID": "29",
        "state": "Mila"
      },
      {
        "stateID": "30",
        "state": "Mostaganem"
      },
      {
        "stateID": "31",
        "state": "Naama"
      },
      {
        "stateID": "32",
        "state": "Oran"
      },
      {
        "stateID": "33",
        "state": "Ouargla"
      },
      {
        "stateID": "34",
        "state": "Oum el Bouaghi"
      },
      {
        "stateID": "35",
        "state": "Relizane"
      },
      {
        "stateID": "36",
        "state": "Saida"
      },
      {
        "stateID": "37",
        "state": "Setif"
      },
      {
        "stateID": "38",
        "state": "Sidi Bel Abbes"
      },
      {
        "stateID": "39",
        "state": "Skikda"
      },
      {
        "stateID": "40",
        "state": "Souk Ahras"
      },
      {
        "stateID": "41",
        "state": "Tamanghasset"
      },
      {
        "stateID": "42",
        "state": "Tebessa"
      },
      {
        "stateID": "43",
        "state": "Tiaret"
      },
      {
        "stateID": "44",
        "state": "Tindouf"
      },
      {
        "stateID": "45",
        "state": "Tipaza"
      },
      {
        "stateID": "46",
        "state": "Tissemsilt"
      },
      {
        "stateID": "47",
        "state": "Tizi Ouzou"
      },
      {
        "stateID": "48",
        "state": "Tlemcen"
      }
    ],
    "American Samoa": [
      {
        "stateID": "1",
        "state": "Eastern"
      },
      {
        "stateID": "2",
        "state": "Manu'a"
      },
      {
        "stateID": "3",
        "state": "Rose Island"
      },
      {
        "stateID": "4",
        "state": "Swains Island"
      },
      {
        "stateID": "5",
        "state": "Western"
      }
    ],
    "Angola": [
      {
        "stateID": "1",
        "state": "Andorra la Vella"
      },
      {
        "stateID": "2",
        "state": "Bengo"
      },
      {
        "stateID": "3",
        "state": "Benguela"
      },
      {
        "stateID": "4",
        "state": "Bie"
      },
      {
        "stateID": "5",
        "state": "Cabinda"
      },
      {
        "stateID": "6",
        "state": "Canillo"
      },
      {
        "stateID": "7",
        "state": "Cuando Cubango"
      },
      {
        "stateID": "8",
        "state": "Cuanza Norte"
      },
      {
        "stateID": "9",
        "state": "Cuanza Sul"
      },
      {
        "stateID": "10",
        "state": "Cunene"
      },
      {
        "stateID": "11",
        "state": "Encamp"
      },
      {
        "stateID": "12",
        "state": "Escaldes-Engordany"
      },
      {
        "stateID": "13",
        "state": "Huambo"
      },
      {
        "stateID": "14",
        "state": "Huila"
      },
      {
        "stateID": "15",
        "state": "La Massana"
      },
      {
        "stateID": "16",
        "state": "Luanda"
      },
      {
        "stateID": "17",
        "state": "Lunda Norte"
      },
      {
        "stateID": "18",
        "state": "Lunda Sul"
      },
      {
        "stateID": "19",
        "state": "Malanje"
      },
      {
        "stateID": "20",
        "state": "Moxico"
      },
      {
        "stateID": "21",
        "state": "Namibe"
      },
      {
        "stateID": "22",
        "state": "Ordino"
      },
      {
        "stateID": "23",
        "state": "Sant Julia de Loria"
      },
      {
        "stateID": "24",
        "state": "Uige"
      },
      {
        "stateID": "25",
        "state": "Zaire"
      }
    ],
    "Anguilla": [
      {
        "stateID": "1",
        "state": "Anguilla"
      }
    ],
    "Antartica": [
      {
        "stateID": "1",
        "state": "Antartica"
      }
    ],
    "Antigua and Barbuda": [
      {
        "stateID": "1",
        "state": "Barbuda"
      },
      {
        "stateID": "2",
        "state": "Redonda"
      },
      {
        "stateID": "3",
        "state": "Saint George"
      },
      {
        "stateID": "4",
        "state": "Saint John"
      },
      {
        "stateID": "5",
        "state": "Saint Mary"
      },
      {
        "stateID": "6",
        "state": "Saint Paul"
      },
      {
        "stateID": "7",
        "state": "Saint Peter"
      },
      {
        "stateID": "8",
        "state": "Saint Philip"
      }
    ],
    "Argentina": [
      {
        "stateID": "1",
        "state": "Antartica e Islas del Atlantico Sur"
      },
      {
        "stateID": "2",
        "state": "Buenos Aires"
      },
      {
        "stateID": "3",
        "state": "Buenos Aires Capital Federal"
      },
      {
        "stateID": "4",
        "state": "Catamarca"
      },
      {
        "stateID": "5",
        "state": "Chaco"
      },
      {
        "stateID": "6",
        "state": "Chubut"
      },
      {
        "stateID": "7",
        "state": "Cordoba"
      },
      {
        "stateID": "8",
        "state": "Corrientes"
      },
      {
        "stateID": "9",
        "state": "Entre Rios"
      },
      {
        "stateID": "10",
        "state": "Formosa"
      },
      {
        "stateID": "11",
        "state": "Jujuy"
      },
      {
        "stateID": "12",
        "state": "La Pampa"
      },
      {
        "stateID": "13",
        "state": "La Rioja"
      },
      {
        "stateID": "14",
        "state": "Mendoza"
      },
      {
        "stateID": "15",
        "state": "Misiones"
      },
      {
        "stateID": "16",
        "state": "Neuquen"
      },
      {
        "stateID": "17",
        "state": "Rio Negro"
      },
      {
        "stateID": "18",
        "state": "Salta"
      },
      {
        "stateID": "19",
        "state": "San Juan"
      },
      {
        "stateID": "20",
        "state": "San Luis"
      },
      {
        "stateID": "21",
        "state": "Santa Cruz"
      },
      {
        "stateID": "22",
        "state": "Santa Fe"
      },
      {
        "stateID": "23",
        "state": "Santiago del Estero"
      },
      {
        "stateID": "24",
        "state": "Tierra del Fuego"
      },
      {
        "stateID": "25",
        "state": "Tucuman"
      }
    ],
    "Armenia": [
      {
        "stateID": "1",
        "state": "Aragatsotn"
      },
      {
        "stateID": "2",
        "state": "Ararat"
      },
      {
        "stateID": "3",
        "state": "Armavir"
      },
      {
        "stateID": "4",
        "state": "Geghark'unik'"
      },
      {
        "stateID": "5",
        "state": "Kotayk'"
      },
      {
        "stateID": "6",
        "state": "Lorri"
      },
      {
        "stateID": "7",
        "state": "Shirak"
      },
      {
        "stateID": "8",
        "state": "Syunik'"
      },
      {
        "stateID": "9",
        "state": "Tavush"
      },
      {
        "stateID": "10",
        "state": "Vayots' Dzor"
      },
      {
        "stateID": "11",
        "state": "Yerevan"
      }
    ],
    "Aruba": [
      {
        "stateID": "1",
        "state": "Aruba"
      }
    ],
    "Ashmore and Cartier Island": [
      {
        "stateID": "1",
        "state": "Ashmore and Cartier Island"
      }
    ],
    "Australia": [
      {
        "stateID": "1",
        "state": "Australian Capital Territory"
      },
      {
        "stateID": "2",
        "state": "New South Wales"
      },
      {
        "stateID": "3",
        "state": "Northern Territory"
      },
      {
        "stateID": "4",
        "state": "Queensland"
      },
      {
        "stateID": "5",
        "state": "South Australia"
      },
      {
        "stateID": "6",
        "state": "Tasmania"
      },
      {
        "stateID": "7",
        "state": "Victoria"
      },
      {
        "stateID": "8",
        "state": "Western Australia"
      }
    ],
    "Austria": [
      {
        "stateID": "1",
        "state": "Burgenland"
      },
      {
        "stateID": "2",
        "state": "Kaernten"
      },
      {
        "stateID": "3",
        "state": "Niederoesterreich"
      },
      {
        "stateID": "4",
        "state": "Oberoesterreich"
      },
      {
        "stateID": "5",
        "state": "Salzburg"
      },
      {
        "stateID": "6",
        "state": "Steiermark"
      },
      {
        "stateID": "7",
        "state": "Tirol"
      },
      {
        "stateID": "8",
        "state": "Vorarlberg"
      },
      {
        "stateID": "9",
        "state": "Wien"
      }
    ],
    "Azerbaijan": [
      {
        "stateID": "1",
        "state": "Abseron Rayonu"
      },
      {
        "stateID": "2",
        "state": "Agcabadi Rayonu"
      },
      {
        "stateID": "3",
        "state": "Agdam Rayonu"
      },
      {
        "stateID": "4",
        "state": "Agdas Rayonu"
      },
      {
        "stateID": "5",
        "state": "Agstafa Rayonu"
      },
      {
        "stateID": "6",
        "state": "Agsu Rayonu"
      },
      {
        "stateID": "7",
        "state": "Ali Bayramli Sahari"
      },
      {
        "stateID": "8",
        "state": "Astara Rayonu"
      },
      {
        "stateID": "9",
        "state": "Baki Sahari"
      },
      {
        "stateID": "10",
        "state": "Balakan Rayonu"
      },
      {
        "stateID": "11",
        "state": "Barda Rayonu"
      },
      {
        "stateID": "12",
        "state": "Beylaqan Rayonu"
      },
      {
        "stateID": "13",
        "state": "Bilasuvar Rayonu"
      },
      {
        "stateID": "14",
        "state": "Cabrayil Rayonu"
      },
      {
        "stateID": "15",
        "state": "Calilabad Rayonu"
      },
      {
        "stateID": "16",
        "state": "Daskasan Rayonu"
      },
      {
        "stateID": "17",
        "state": "Davaci Rayonu"
      },
      {
        "stateID": "18",
        "state": "Fuzuli Rayonu"
      },
      {
        "stateID": "19",
        "state": "Gadabay Rayonu"
      },
      {
        "stateID": "20",
        "state": "Ganca Sahari"
      },
      {
        "stateID": "21",
        "state": "Goranboy Rayonu"
      },
      {
        "stateID": "22",
        "state": "Goycay Rayonu"
      },
      {
        "stateID": "23",
        "state": "Haciqabul Rayonu"
      },
      {
        "stateID": "24",
        "state": "Imisli Rayonu"
      },
      {
        "stateID": "25",
        "state": "Ismayilli Rayonu"
      },
      {
        "stateID": "26",
        "state": "Kalbacar Rayonu"
      },
      {
        "stateID": "27",
        "state": "Kurdamir Rayonu"
      },
      {
        "stateID": "28",
        "state": "Lacin Rayonu"
      },
      {
        "stateID": "29",
        "state": "Lankaran Rayonu"
      },
      {
        "stateID": "30",
        "state": "Lankaran Sahari"
      },
      {
        "stateID": "31",
        "state": "Lerik Rayonu"
      },
      {
        "stateID": "32",
        "state": "Masalli Rayonu"
      },
      {
        "stateID": "33",
        "state": "Mingacevir Sahari"
      },
      {
        "stateID": "34",
        "state": "Naftalan Sahari"
      },
      {
        "stateID": "35",
        "state": "Naxcivan Muxtar Respublikasi"
      },
      {
        "stateID": "36",
        "state": "Neftcala Rayonu"
      },
      {
        "stateID": "37",
        "state": "Oguz Rayonu"
      },
      {
        "stateID": "38",
        "state": "Qabala Rayonu"
      },
      {
        "stateID": "39",
        "state": "Qax Rayonu"
      },
      {
        "stateID": "40",
        "state": "Qazax Rayonu"
      },
      {
        "stateID": "41",
        "state": "Qobustan Rayonu"
      },
      {
        "stateID": "42",
        "state": "Quba Rayonu"
      },
      {
        "stateID": "43",
        "state": "Qubadli Rayonu"
      },
      {
        "stateID": "44",
        "state": "Qusar Rayonu"
      },
      {
        "stateID": "45",
        "state": "Saatli Rayonu"
      },
      {
        "stateID": "46",
        "state": "Sabirabad Rayonu"
      },
      {
        "stateID": "47",
        "state": "Saki Rayonu"
      },
      {
        "stateID": "48",
        "state": "Saki Sahari"
      },
      {
        "stateID": "49",
        "state": "Salyan Rayonu"
      },
      {
        "stateID": "50",
        "state": "Samaxi Rayonu"
      },
      {
        "stateID": "51",
        "state": "Samkir Rayonu"
      },
      {
        "stateID": "52",
        "state": "Samux Rayonu"
      },
      {
        "stateID": "53",
        "state": "Siyazan Rayonu"
      },
      {
        "stateID": "54",
        "state": "Sumqayit Sahari"
      },
      {
        "stateID": "55",
        "state": "Susa Rayonu"
      },
      {
        "stateID": "56",
        "state": "Susa Sahari"
      },
      {
        "stateID": "57",
        "state": "Tartar Rayonu"
      },
      {
        "stateID": "58",
        "state": "Tovuz Rayonu"
      },
      {
        "stateID": "59",
        "state": "Ucar Rayonu"
      },
      {
        "stateID": "60",
        "state": "Xacmaz Rayonu"
      },
      {
        "stateID": "61",
        "state": "Xankandi Sahari"
      },
      {
        "stateID": "62",
        "state": "Xanlar Rayonu"
      },
      {
        "stateID": "63",
        "state": "Xizi Rayonu"
      },
      {
        "stateID": "64",
        "state": "Xocali Rayonu"
      },
      {
        "stateID": "65",
        "state": "Xocavand Rayonu"
      },
      {
        "stateID": "66",
        "state": "Yardimli Rayonu"
      },
      {
        "stateID": "67",
        "state": "Yevlax Rayonu"
      },
      {
        "stateID": "68",
        "state": "Yevlax Sahari"
      },
      {
        "stateID": "69",
        "state": "Zangilan Rayonu"
      },
      {
        "stateID": "70",
        "state": "Zaqatala Rayonu"
      },
      {
        "stateID": "71",
        "state": "Zardab Rayonu"
      }
    ],
    "Bahamas": [
      {
        "stateID": "1",
        "state": "Acklins and Crooked Islands"
      },
      {
        "stateID": "2",
        "state": "Bimini"
      },
      {
        "stateID": "3",
        "state": "Cat Island"
      },
      {
        "stateID": "4",
        "state": "Exuma"
      },
      {
        "stateID": "5",
        "state": "Freeport"
      },
      {
        "stateID": "6",
        "state": "Fresh Creek"
      },
      {
        "stateID": "7",
        "state": "Governor's Harbour"
      },
      {
        "stateID": "8",
        "state": "Green Turtle Cay"
      },
      {
        "stateID": "9",
        "state": "Harbour Island"
      },
      {
        "stateID": "10",
        "state": "High Rock"
      },
      {
        "stateID": "11",
        "state": "Inagua"
      },
      {
        "stateID": "12",
        "state": "Kemps Bay"
      },
      {
        "stateID": "13",
        "state": "Long Island"
      },
      {
        "stateID": "14",
        "state": "Marsh Harbour"
      },
      {
        "stateID": "15",
        "state": "Mayaguana"
      },
      {
        "stateID": "16",
        "state": "New Providence"
      },
      {
        "stateID": "17",
        "state": "Nicholls Town and Berry Islands"
      },
      {
        "stateID": "18",
        "state": "Ragged Island"
      },
      {
        "stateID": "19",
        "state": "Rock Sound"
      },
      {
        "stateID": "20",
        "state": "San Salvador and Rum Cay"
      },
      {
        "stateID": "21",
        "state": "Sandy Point"
      }
    ],
    "Bahrain": [
      {
        "stateID": "1",
        "state": "Al Hadd"
      },
      {
        "stateID": "2",
        "state": "Al Manamah"
      },
      {
        "stateID": "3",
        "state": "Al Mintaqah al Gharbiyah"
      },
      {
        "stateID": "4",
        "state": "Al Mintaqah al Wusta"
      },
      {
        "stateID": "5",
        "state": "Al Mintaqah ash Shamaliyah"
      },
      {
        "stateID": "6",
        "state": "Al Muharraq"
      },
      {
        "stateID": "7",
        "state": "Ar Rifa' wa al Mintaqah al Janubiyah"
      },
      {
        "stateID": "8",
        "state": "Jidd Hafs"
      },
      {
        "stateID": "9",
        "state": "Juzur Hawar"
      },
      {
        "stateID": "10",
        "state": "Madinat 'Isa"
      },
      {
        "stateID": "11",
        "state": "Madinat Hamad"
      },
      {
        "stateID": "12",
        "state": "Sitrah"
      }
    ],
    "Bangladesh": [
      {
        "stateID": "1",
        "state": "Barguna"
      },
      {
        "stateID": "2",
        "state": "Barisal"
      },
      {
        "stateID": "3",
        "state": "Bhola"
      },
      {
        "stateID": "4",
        "state": "Jhalokati"
      },
      {
        "stateID": "5",
        "state": "Patuakhali"
      },
      {
        "stateID": "6",
        "state": "Pirojpur"
      },
      {
        "stateID": "7",
        "state": "Bandarban"
      },
      {
        "stateID": "8",
        "state": "Brahmanbaria"
      },
      {
        "stateID": "9",
        "state": "Chandpur"
      },
      {
        "stateID": "10",
        "state": "Chittagong"
      },
      {
        "stateID": "11",
        "state": "Comilla"
      },
      {
        "stateID": "12",
        "state": "Cox's Bazar"
      },
      {
        "stateID": "13",
        "state": "Feni"
      },
      {
        "stateID": "14",
        "state": "Khagrachari"
      },
      {
        "stateID": "15",
        "state": "Lakshmipur"
      },
      {
        "stateID": "16",
        "state": "Noakhali"
      },
      {
        "stateID": "17",
        "state": "Rangamati"
      },
      {
        "stateID": "18",
        "state": "Dhaka"
      },
      {
        "stateID": "19",
        "state": "Faridpur"
      },
      {
        "stateID": "20",
        "state": "Gazipur"
      },
      {
        "stateID": "21",
        "state": "Gopalganj"
      },
      {
        "stateID": "22",
        "state": "Jamalpur"
      },
      {
        "stateID": "23",
        "state": "Kishoreganj"
      },
      {
        "stateID": "24",
        "state": "Madaripur"
      },
      {
        "stateID": "25",
        "state": "Manikganj"
      },
      {
        "stateID": "26",
        "state": "Munshiganj"
      },
      {
        "stateID": "27",
        "state": "Mymensingh"
      },
      {
        "stateID": "28",
        "state": "Narayanganj"
      },
      {
        "stateID": "29",
        "state": "Narsingdi"
      },
      {
        "stateID": "30",
        "state": "Netrokona"
      },
      {
        "stateID": "31",
        "state": "Rajbari"
      },
      {
        "stateID": "32",
        "state": "Shariatpur"
      },
      {
        "stateID": "33",
        "state": "Sherpur"
      },
      {
        "stateID": "34",
        "state": "Tangail"
      },
      {
        "stateID": "35",
        "state": "Bagerhat"
      },
      {
        "stateID": "36",
        "state": "Chuadanga"
      },
      {
        "stateID": "37",
        "state": "Jessore"
      },
      {
        "stateID": "38",
        "state": "Jhenaidah"
      },
      {
        "stateID": "39",
        "state": "Khulna"
      },
      {
        "stateID": "40",
        "state": "Kushtia"
      },
      {
        "stateID": "41",
        "state": "Magura"
      },
      {
        "stateID": "42",
        "state": "Meherpur"
      },
      {
        "stateID": "43",
        "state": "Narail"
      },
      {
        "stateID": "44",
        "state": "Satkhira"
      },
      {
        "stateID": "45",
        "state": "Bogra"
      },
      {
        "stateID": "46",
        "state": "Dinajpur"
      },
      {
        "stateID": "47",
        "state": "Gaibandha"
      },
      {
        "stateID": "48",
        "state": "Jaipurhat"
      },
      {
        "stateID": "49",
        "state": "Kurigram"
      },
      {
        "stateID": "50",
        "state": "Lalmonirhat"
      },
      {
        "stateID": "51",
        "state": "Naogaon"
      },
      {
        "stateID": "52",
        "state": "Natore"
      },
      {
        "stateID": "53",
        "state": "Nawabganj"
      },
      {
        "stateID": "54",
        "state": "Nilphamari"
      },
      {
        "stateID": "55",
        "state": "Pabna"
      },
      {
        "stateID": "56",
        "state": "Panchagarh"
      },
      {
        "stateID": "57",
        "state": "Rajshahi"
      },
      {
        "stateID": "58",
        "state": "Rangpur"
      },
      {
        "stateID": "59",
        "state": "Sirajganj"
      },
      {
        "stateID": "60",
        "state": "Thakurgaon"
      },
      {
        "stateID": "61",
        "state": "Habiganj"
      },
      {
        "stateID": "62",
        "state": "Maulvi bazar"
      },
      {
        "stateID": "63",
        "state": "Sunamganj"
      },
      {
        "stateID": "64",
        "state": "Sylhet"
      }
    ],
    "Barbados": [
      {
        "stateID": "1",
        "state": "Bridgetown"
      },
      {
        "stateID": "2",
        "state": "Christ Church"
      },
      {
        "stateID": "3",
        "state": "Saint Andrew"
      },
      {
        "stateID": "4",
        "state": "Saint George"
      },
      {
        "stateID": "5",
        "state": "Saint James"
      },
      {
        "stateID": "6",
        "state": "Saint John"
      },
      {
        "stateID": "7",
        "state": "Saint Joseph"
      },
      {
        "stateID": "8",
        "state": "Saint Lucy"
      },
      {
        "stateID": "9",
        "state": "Saint Michael"
      },
      {
        "stateID": "10",
        "state": "Saint Peter"
      },
      {
        "stateID": "11",
        "state": "Saint Philip"
      },
      {
        "stateID": "12",
        "state": "Saint Thomas"
      }
    ],
    "Belarus": [
      {
        "stateID": "1",
        "state": "Brestskaya (Brest)"
      },
      {
        "stateID": "2",
        "state": "Homyel'skaya (Homyel')"
      },
      {
        "stateID": "3",
        "state": "Horad Minsk"
      },
      {
        "stateID": "4",
        "state": "Hrodzyenskaya (Hrodna)"
      },
      {
        "stateID": "5",
        "state": "Mahilyowskaya (Mahilyow)"
      },
      {
        "stateID": "6",
        "state": "Minskaya"
      },
      {
        "stateID": "7",
        "state": "Vitsyebskaya (Vitsyebsk)"
      }
    ],
    "Belgium": [
      {
        "stateID": "1",
        "state": "Antwerpen"
      },
      {
        "stateID": "2",
        "state": "Brabant Wallon"
      },
      {
        "stateID": "3",
        "state": "Brussels Capitol Region"
      },
      {
        "stateID": "4",
        "state": "Hainaut"
      },
      {
        "stateID": "5",
        "state": "Liege"
      },
      {
        "stateID": "6",
        "state": "Limburg"
      },
      {
        "stateID": "7",
        "state": "Luxembourg"
      },
      {
        "stateID": "8",
        "state": "Namur"
      },
      {
        "stateID": "9",
        "state": "Oost-Vlaanderen"
      },
      {
        "stateID": "10",
        "state": "Vlaams Brabant"
      },
      {
        "stateID": "11",
        "state": "West-Vlaanderen"
      }
    ],
    "Belize": [
      {
        "stateID": "1",
        "state": "Belize"
      },
      {
        "stateID": "2",
        "state": "Cayo"
      },
      {
        "stateID": "3",
        "state": "Corozal"
      },
      {
        "stateID": "4",
        "state": "Orange Walk"
      },
      {
        "stateID": "5",
        "state": "Stann Creek"
      },
      {
        "stateID": "6",
        "state": "Toledo"
      }
    ],
    "Benin": [
      {
        "stateID": "1",
        "state": "Alibori"
      },
      {
        "stateID": "2",
        "state": "Atakora"
      },
      {
        "stateID": "3",
        "state": "Atlantique"
      },
      {
        "stateID": "4",
        "state": "Borgou"
      },
      {
        "stateID": "5",
        "state": "Collines"
      },
      {
        "stateID": "6",
        "state": "Couffo"
      },
      {
        "stateID": "7",
        "state": "Donga"
      },
      {
        "stateID": "8",
        "state": "Littoral"
      },
      {
        "stateID": "9",
        "state": "Mono"
      },
      {
        "stateID": "10",
        "state": "Oueme"
      },
      {
        "stateID": "11",
        "state": "Plateau"
      },
      {
        "stateID": "12",
        "state": "Zou"
      }
    ],
    "Bermuda": [
      {
        "stateID": "1",
        "state": "Devonshire"
      },
      {
        "stateID": "2",
        "state": "Hamilton"
      },
      {
        "stateID": "3",
        "state": "Hamilton"
      },
      {
        "stateID": "4",
        "state": "Paget"
      },
      {
        "stateID": "5",
        "state": "Pembroke"
      },
      {
        "stateID": "6",
        "state": "Saint George"
      },
      {
        "stateID": "7",
        "state": "Saint Georges"
      },
      {
        "stateID": "8",
        "state": "Sandys"
      },
      {
        "stateID": "9",
        "state": "Smiths"
      },
      {
        "stateID": "10",
        "state": "Southampton"
      },
      {
        "stateID": "11",
        "state": "Warwick"
      }
    ],
    "Bhutan": [
      {
        "stateID": "1",
        "state": "Bumthang"
      },
      {
        "stateID": "2",
        "state": "Chhukha"
      },
      {
        "stateID": "3",
        "state": "Chirang"
      },
      {
        "stateID": "4",
        "state": "Daga"
      },
      {
        "stateID": "5",
        "state": "Geylegphug"
      },
      {
        "stateID": "6",
        "state": "Ha"
      },
      {
        "stateID": "7",
        "state": "Lhuntshi"
      },
      {
        "stateID": "8",
        "state": "Mongar"
      },
      {
        "stateID": "9",
        "state": "Paro"
      },
      {
        "stateID": "10",
        "state": "Pemagatsel"
      },
      {
        "stateID": "11",
        "state": "Punakha"
      },
      {
        "stateID": "12",
        "state": "Samchi"
      },
      {
        "stateID": "13",
        "state": "Samdrup Jongkhar"
      },
      {
        "stateID": "14",
        "state": "Shemgang"
      },
      {
        "stateID": "15",
        "state": "Tashigang"
      },
      {
        "stateID": "16",
        "state": "Thimphu"
      },
      {
        "stateID": "17",
        "state": "Tongsa"
      },
      {
        "stateID": "18",
        "state": "Wangdi Phodrang"
      }
    ],
    "Bolivia": [
      {
        "stateID": "1",
        "state": "Beni"
      },
      {
        "stateID": "2",
        "state": "Chuquisaca"
      },
      {
        "stateID": "3",
        "state": "Cochabamba"
      },
      {
        "stateID": "4",
        "state": "La Paz"
      },
      {
        "stateID": "5",
        "state": "Oruro"
      },
      {
        "stateID": "6",
        "state": "Pando"
      },
      {
        "stateID": "7",
        "state": "Potosi"
      },
      {
        "stateID": "8",
        "state": "Santa Cruz"
      },
      {
        "stateID": "9",
        "state": "Tarija"
      }
    ],
    "Bosnia and Herzegovina": [
      {
        "stateID": "1",
        "state": "Federation of Bosnia and Herzegovina"
      },
      {
        "stateID": "2",
        "state": "Republika Srpska"
      }
    ],
    "Botswana": [
      {
        "stateID": "1",
        "state": "Central"
      },
      {
        "stateID": "2",
        "state": "Chobe"
      },
      {
        "stateID": "3",
        "state": "Francistown"
      },
      {
        "stateID": "4",
        "state": "Gaborone"
      },
      {
        "stateID": "5",
        "state": "Ghanzi"
      },
      {
        "stateID": "6",
        "state": "Kgalagadi"
      },
      {
        "stateID": "7",
        "state": "Kgatleng"
      },
      {
        "stateID": "8",
        "state": "Kweneng"
      },
      {
        "stateID": "9",
        "state": "Lobatse"
      },
      {
        "stateID": "10",
        "state": "Ngamiland"
      },
      {
        "stateID": "11",
        "state": "North-East"
      },
      {
        "stateID": "12",
        "state": "Selebi-Pikwe"
      },
      {
        "stateID": "13",
        "state": "South-East"
      },
      {
        "stateID": "14",
        "state": "Southern"
      }
    ],
    "Brazil": [
      {
        "stateID": "1",
        "state": "Acre"
      },
      {
        "stateID": "2",
        "state": "Alagoas"
      },
      {
        "stateID": "3",
        "state": "Amapa"
      },
      {
        "stateID": "4",
        "state": "Amazonas"
      },
      {
        "stateID": "5",
        "state": "Bahia"
      },
      {
        "stateID": "6",
        "state": "Ceara"
      },
      {
        "stateID": "7",
        "state": "Distrito Federal"
      },
      {
        "stateID": "8",
        "state": "Espirito Santo"
      },
      {
        "stateID": "9",
        "state": "Goias"
      },
      {
        "stateID": "10",
        "state": "Maranhao"
      },
      {
        "stateID": "11",
        "state": "Mato Grosso"
      },
      {
        "stateID": "12",
        "state": "Mato Grosso do Sul"
      },
      {
        "stateID": "13",
        "state": "Minas Gerais"
      },
      {
        "stateID": "14",
        "state": "Para"
      },
      {
        "stateID": "15",
        "state": "Paraiba"
      },
      {
        "stateID": "16",
        "state": "Parana"
      },
      {
        "stateID": "17",
        "state": "Pernambuco"
      },
      {
        "stateID": "18",
        "state": "Piaui"
      },
      {
        "stateID": "19",
        "state": "Rio de Janeiro"
      },
      {
        "stateID": "20",
        "state": "Rio Grande do Norte"
      },
      {
        "stateID": "21",
        "state": "Rio Grande do Sul"
      },
      {
        "stateID": "22",
        "state": "Rondonia"
      },
      {
        "stateID": "23",
        "state": "Roraima"
      },
      {
        "stateID": "24",
        "state": "Santa Catarina"
      },
      {
        "stateID": "25",
        "state": "Sao Paulo"
      },
      {
        "stateID": "26",
        "state": "Sergipe"
      },
      {
        "stateID": "27",
        "state": "Tocantins"
      }
    ],
    "British Virgin Islands": [
      {
        "stateID": "1",
        "state": "Anegada"
      },
      {
        "stateID": "2",
        "state": "Jost Van Dyke"
      },
      {
        "stateID": "3",
        "state": "Tortola"
      },
      {
        "stateID": "4",
        "state": "Virgin Gorda"
      }
    ],
    "Brunei": [
      {
        "stateID": "1",
        "state": "Belait"
      },
      {
        "stateID": "2",
        "state": "Brunei and Muara"
      },
      {
        "stateID": "3",
        "state": "Temburong"
      },
      {
        "stateID": "4",
        "state": "Tutong"
      }
    ],
    "Bulgaria": [
      {
        "stateID": "1",
        "state": "Blagoevgrad"
      },
      {
        "stateID": "2",
        "state": "Burgas"
      },
      {
        "stateID": "3",
        "state": "Dobrich"
      },
      {
        "stateID": "4",
        "state": "Gabrovo"
      },
      {
        "stateID": "5",
        "state": "Khaskovo"
      },
      {
        "stateID": "6",
        "state": "Kurdzhali"
      },
      {
        "stateID": "7",
        "state": "Kyustendil"
      },
      {
        "stateID": "8",
        "state": "Lovech"
      },
      {
        "stateID": "9",
        "state": "Montana"
      },
      {
        "stateID": "10",
        "state": "Pazardzhik"
      },
      {
        "stateID": "11",
        "state": "Pernik"
      },
      {
        "stateID": "12",
        "state": "Pleven"
      },
      {
        "stateID": "13",
        "state": "Plovdiv"
      },
      {
        "stateID": "14",
        "state": "Razgrad"
      },
      {
        "stateID": "15",
        "state": "Ruse"
      },
      {
        "stateID": "16",
        "state": "Shumen"
      },
      {
        "stateID": "17",
        "state": "Silistra"
      },
      {
        "stateID": "18",
        "state": "Sliven"
      },
      {
        "stateID": "19",
        "state": "Smolyan"
      },
      {
        "stateID": "20",
        "state": "Sofiya"
      },
      {
        "stateID": "21",
        "state": "Sofiya-Grad"
      },
      {
        "stateID": "22",
        "state": "Stara Zagora"
      },
      {
        "stateID": "23",
        "state": "Turgovishte"
      },
      {
        "stateID": "24",
        "state": "Varna"
      },
      {
        "stateID": "25",
        "state": "Veliko Turnovo"
      },
      {
        "stateID": "26",
        "state": "Vidin"
      },
      {
        "stateID": "27",
        "state": "Vratsa"
      },
      {
        "stateID": "28",
        "state": "Yambol"
      }
    ],
    "Burkina Faso": [
      {
        "stateID": "1",
        "state": "Bale"
      },
      {
        "stateID": "2",
        "state": "Bam"
      },
      {
        "stateID": "3",
        "state": "Banwa"
      },
      {
        "stateID": "4",
        "state": "Bazega"
      },
      {
        "stateID": "5",
        "state": "Bougouriba"
      },
      {
        "stateID": "6",
        "state": "Boulgou"
      },
      {
        "stateID": "7",
        "state": "Boulkiemde"
      },
      {
        "stateID": "8",
        "state": "Comoe"
      },
      {
        "stateID": "9",
        "state": "Ganzourgou"
      },
      {
        "stateID": "10",
        "state": "Gnagna"
      },
      {
        "stateID": "11",
        "state": "Gourma"
      },
      {
        "stateID": "12",
        "state": "Houet"
      },
      {
        "stateID": "13",
        "state": "Ioba"
      },
      {
        "stateID": "14",
        "state": "Kadiogo"
      },
      {
        "stateID": "15",
        "state": "Kenedougou"
      },
      {
        "stateID": "16",
        "state": "Komandjari"
      },
      {
        "stateID": "17",
        "state": "Kompienga"
      },
      {
        "stateID": "18",
        "state": "Kossi"
      },
      {
        "stateID": "19",
        "state": "Koupelogo"
      },
      {
        "stateID": "20",
        "state": "Kouritenga"
      },
      {
        "stateID": "21",
        "state": "Kourweogo"
      },
      {
        "stateID": "22",
        "state": "Leraba"
      },
      {
        "stateID": "23",
        "state": "Loroum"
      },
      {
        "stateID": "24",
        "state": "Mouhoun"
      },
      {
        "stateID": "25",
        "state": "Nahouri"
      },
      {
        "stateID": "26",
        "state": "Namentenga"
      },
      {
        "stateID": "27",
        "state": "Naumbiel"
      },
      {
        "stateID": "28",
        "state": "Nayala"
      },
      {
        "stateID": "29",
        "state": "Oubritenga"
      },
      {
        "stateID": "30",
        "state": "Oudalan"
      },
      {
        "stateID": "31",
        "state": "Passore"
      },
      {
        "stateID": "32",
        "state": "Poni"
      },
      {
        "stateID": "33",
        "state": "Samentenga"
      },
      {
        "stateID": "34",
        "state": "Sanguie"
      },
      {
        "stateID": "35",
        "state": "Seno"
      },
      {
        "stateID": "36",
        "state": "Sissili"
      },
      {
        "stateID": "37",
        "state": "Soum"
      },
      {
        "stateID": "38",
        "state": "Sourou"
      },
      {
        "stateID": "39",
        "state": "Tapoa"
      },
      {
        "stateID": "40",
        "state": "Tuy"
      },
      {
        "stateID": "41",
        "state": "Yagha"
      },
      {
        "stateID": "42",
        "state": "Yatenga"
      },
      {
        "stateID": "43",
        "state": "Ziro"
      },
      {
        "stateID": "44",
        "state": "Zondomo"
      },
      {
        "stateID": "45",
        "state": "Zoundweogo"
      }
    ],
    "Burma": [
      {
        "stateID": "1",
        "state": "Ayeyarwady"
      },
      {
        "stateID": "2",
        "state": "Bago"
      },
      {
        "stateID": "3",
        "state": "Chin State"
      },
      {
        "stateID": "4",
        "state": "Kachin State"
      },
      {
        "stateID": "5",
        "state": "Kayah State"
      },
      {
        "stateID": "6",
        "state": "Kayin State"
      },
      {
        "stateID": "7",
        "state": "Magway"
      },
      {
        "stateID": "8",
        "state": "Mandalay"
      },
      {
        "stateID": "9",
        "state": "Mon State"
      },
      {
        "stateID": "10",
        "state": "Rakhine State"
      },
      {
        "stateID": "11",
        "state": "Sagaing"
      },
      {
        "stateID": "12",
        "state": "Shan State"
      },
      {
        "stateID": "13",
        "state": "Tanintharyi"
      },
      {
        "stateID": "14",
        "state": "Yangon"
      }
    ],
    "Burundi": [
      {
        "stateID": "1",
        "state": "Bubanza"
      },
      {
        "stateID": "2",
        "state": "Bujumbura"
      },
      {
        "stateID": "3",
        "state": "Bururi"
      },
      {
        "stateID": "4",
        "state": "Cankuzo"
      },
      {
        "stateID": "5",
        "state": "Cibitoke"
      },
      {
        "stateID": "6",
        "state": "Gitega"
      },
      {
        "stateID": "7",
        "state": "Karuzi"
      },
      {
        "stateID": "8",
        "state": "Kayanza"
      },
      {
        "stateID": "9",
        "state": "Kirundo"
      },
      {
        "stateID": "10",
        "state": "Makamba"
      },
      {
        "stateID": "11",
        "state": "Muramvya"
      },
      {
        "stateID": "12",
        "state": "Muyinga"
      },
      {
        "stateID": "13",
        "state": "Mwaro"
      },
      {
        "stateID": "14",
        "state": "Ngozi"
      },
      {
        "stateID": "15",
        "state": "Rutana"
      },
      {
        "stateID": "16",
        "state": "Ruyigi"
      }
    ],
    "Cambodia": [
      {
        "stateID": "1",
        "state": "Banteay Mean Cheay"
      },
      {
        "stateID": "2",
        "state": "Batdambang"
      },
      {
        "stateID": "3",
        "state": "Kampong Cham"
      },
      {
        "stateID": "4",
        "state": "Kampong Chhnang"
      },
      {
        "stateID": "5",
        "state": "Kampong Spoe"
      },
      {
        "stateID": "6",
        "state": "Kampong Thum"
      },
      {
        "stateID": "7",
        "state": "Kampot"
      },
      {
        "stateID": "8",
        "state": "Kandal"
      },
      {
        "stateID": "9",
        "state": "Kaoh Kong"
      },
      {
        "stateID": "10",
        "state": "Keb"
      },
      {
        "stateID": "11",
        "state": "Kracheh"
      },
      {
        "stateID": "12",
        "state": "Mondol Kiri"
      },
      {
        "stateID": "13",
        "state": "Otdar Mean Cheay"
      },
      {
        "stateID": "14",
        "state": "Pailin"
      },
      {
        "stateID": "15",
        "state": "Phnum Penh"
      },
      {
        "stateID": "16",
        "state": "Pouthisat"
      },
      {
        "stateID": "17",
        "state": "Preah Seihanu (Sihanoukville)"
      },
      {
        "stateID": "18",
        "state": "Preah Vihear"
      },
      {
        "stateID": "19",
        "state": "Prey Veng"
      },
      {
        "stateID": "20",
        "state": "Rotanah Kiri"
      },
      {
        "stateID": "21",
        "state": "Siem Reab"
      },
      {
        "stateID": "22",
        "state": "Stoeng Treng"
      },
      {
        "stateID": "23",
        "state": "Svay Rieng"
      },
      {
        "stateID": "24",
        "state": "Takev"
      }
    ],
    "Cameroon": [
      {
        "stateID": "1",
        "state": "Adamaoua"
      },
      {
        "stateID": "2",
        "state": "Centre"
      },
      {
        "stateID": "3",
        "state": "Est"
      },
      {
        "stateID": "4",
        "state": "Extreme-Nord"
      },
      {
        "stateID": "5",
        "state": "Littoral"
      },
      {
        "stateID": "6",
        "state": "Nord"
      },
      {
        "stateID": "7",
        "state": "Nord-Ouest"
      },
      {
        "stateID": "8",
        "state": "Ouest"
      },
      {
        "stateID": "9",
        "state": "Sud"
      },
      {
        "stateID": "10",
        "state": "Sud-Ouest"
      }
    ],
    "Canada": [
      {
        "stateID": "1",
        "state": "Alberta"
      },
      {
        "stateID": "2",
        "state": "British Columbia"
      },
      {
        "stateID": "3",
        "state": "Manitoba"
      },
      {
        "stateID": "4",
        "state": "New Brunswick"
      },
      {
        "stateID": "5",
        "state": "Newfoundland"
      },
      {
        "stateID": "6",
        "state": "Northwest Territories"
      },
      {
        "stateID": "7",
        "state": "Nova Scotia"
      },
      {
        "stateID": "8",
        "state": "Nunavut"
      },
      {
        "stateID": "9",
        "state": "Ontario"
      },
      {
        "stateID": "10",
        "state": "Prince Edward Island"
      },
      {
        "stateID": "11",
        "state": "Quebec"
      },
      {
        "stateID": "12",
        "state": "Saskatchewan"
      },
      {
        "stateID": "13",
        "state": "Yukon Territory"
      }
    ],
    "Cape Verde": [
      {
        "stateID": "1",
        "state": "Boa Vista"
      },
      {
        "stateID": "2",
        "state": "Brava"
      },
      {
        "stateID": "3",
        "state": "Maio"
      },
      {
        "stateID": "4",
        "state": "Mosteiros"
      },
      {
        "stateID": "5",
        "state": "Paul"
      },
      {
        "stateID": "6",
        "state": "Porto Novo"
      },
      {
        "stateID": "7",
        "state": "Praia"
      },
      {
        "stateID": "8",
        "state": "Ribeira Grande"
      },
      {
        "stateID": "9",
        "state": "Sal"
      },
      {
        "stateID": "10",
        "state": "Santa Catarina"
      },
      {
        "stateID": "11",
        "state": "Santa Cruz"
      },
      {
        "stateID": "12",
        "state": "Sao Domingos"
      },
      {
        "stateID": "13",
        "state": "Sao Filipe"
      },
      {
        "stateID": "14",
        "state": "Sao Nicolau"
      },
      {
        "stateID": "15",
        "state": "Sao Vicente"
      },
      {
        "stateID": "16",
        "state": "Tarrafal"
      }
    ],
    "Cayman Islands": [
      {
        "stateID": "1",
        "state": "Creek"
      },
      {
        "stateID": "2",
        "state": "Eastern"
      },
      {
        "stateID": "3",
        "state": "Midland"
      },
      {
        "stateID": "4",
        "state": "South Town"
      },
      {
        "stateID": "5",
        "state": "Spot Bay"
      },
      {
        "stateID": "6",
        "state": "Stake Bay"
      },
      {
        "stateID": "7",
        "state": "West End"
      },
      {
        "stateID": "8",
        "state": "Western"
      }
    ],
    "Central African Republic": [
      {
        "stateID": "1",
        "state": "Bamingui-Bangoran"
      },
      {
        "stateID": "2",
        "state": "Bangui"
      },
      {
        "stateID": "3",
        "state": "Basse-Kotto"
      },
      {
        "stateID": "4",
        "state": "Gribingui"
      },
      {
        "stateID": "5",
        "state": "Haut-Mbomou"
      },
      {
        "stateID": "6",
        "state": "Haute-Kotto"
      },
      {
        "stateID": "7",
        "state": "Haute-Sangha"
      },
      {
        "stateID": "8",
        "state": "Kemo-Gribingui"
      },
      {
        "stateID": "9",
        "state": "Lobaye"
      },
      {
        "stateID": "10",
        "state": "Mbomou"
      },
      {
        "stateID": "11",
        "state": "Nana-Mambere"
      },
      {
        "stateID": "12",
        "state": "Ombella-Mpoko"
      },
      {
        "stateID": "13",
        "state": "Ouaka"
      },
      {
        "stateID": "14",
        "state": "Ouham"
      },
      {
        "stateID": "15",
        "state": "Ouham-Pende"
      },
      {
        "stateID": "16",
        "state": "Sangha"
      },
      {
        "stateID": "17",
        "state": "Vakaga"
      }
    ],
    "Chad": [
      {
        "stateID": "1",
        "state": "Batha"
      },
      {
        "stateID": "2",
        "state": "Biltine"
      },
      {
        "stateID": "3",
        "state": "Borkou-Ennedi-Tibesti"
      },
      {
        "stateID": "4",
        "state": "Chari-Baguirmi"
      },
      {
        "stateID": "5",
        "state": "Guera"
      },
      {
        "stateID": "6",
        "state": "Kanem"
      },
      {
        "stateID": "7",
        "state": "Lac"
      },
      {
        "stateID": "8",
        "state": "Logone Occidental"
      },
      {
        "stateID": "9",
        "state": "Logone Oriental"
      },
      {
        "stateID": "10",
        "state": "Mayo-Kebbi"
      },
      {
        "stateID": "11",
        "state": "Moyen-Chari"
      },
      {
        "stateID": "12",
        "state": "Ouaddai"
      },
      {
        "stateID": "13",
        "state": "Salamat"
      },
      {
        "stateID": "14",
        "state": "Tandjile"
      }
    ],
    "Chile": [
      {
        "stateID": "1",
        "state": "Aisen del General Carlos Ibanez del Campo"
      },
      {
        "stateID": "2",
        "state": "Antofagasta"
      },
      {
        "stateID": "3",
        "state": "Araucania"
      },
      {
        "stateID": "4",
        "state": "Atacama"
      },
      {
        "stateID": "5",
        "state": "Bio-Bio"
      },
      {
        "stateID": "6",
        "state": "Coquimbo"
      },
      {
        "stateID": "7",
        "state": "Libertador General Bernardo O'Higgins"
      },
      {
        "stateID": "8",
        "state": "Los Lagos"
      },
      {
        "stateID": "9",
        "state": "Magallanes y de la Antartica Chilena"
      },
      {
        "stateID": "10",
        "state": "Maule"
      },
      {
        "stateID": "11",
        "state": "Region Metropolitana (Santiago)"
      },
      {
        "stateID": "12",
        "state": "Tarapaca"
      },
      {
        "stateID": "13",
        "state": "Valparaiso"
      }
    ],
    "China": [
      {
        "stateID": "1",
        "state": "Anhui"
      },
      {
        "stateID": "2",
        "state": "Beijing"
      },
      {
        "stateID": "3",
        "state": "Chongqing"
      },
      {
        "stateID": "4",
        "state": "Fujian"
      },
      {
        "stateID": "5",
        "state": "Gansu"
      },
      {
        "stateID": "6",
        "state": "Guangdong"
      },
      {
        "stateID": "7",
        "state": "Guangxi"
      },
      {
        "stateID": "8",
        "state": "Guizhou"
      },
      {
        "stateID": "9",
        "state": "Hainan"
      },
      {
        "stateID": "10",
        "state": "Hebei"
      },
      {
        "stateID": "11",
        "state": "Heilongjiang"
      },
      {
        "stateID": "12",
        "state": "Henan"
      },
      {
        "stateID": "13",
        "state": "Hubei"
      },
      {
        "stateID": "14",
        "state": "Hunan"
      },
      {
        "stateID": "15",
        "state": "Jiangsu"
      },
      {
        "stateID": "16",
        "state": "Jiangxi"
      },
      {
        "stateID": "17",
        "state": "Jilin"
      },
      {
        "stateID": "18",
        "state": "Liaoning"
      },
      {
        "stateID": "19",
        "state": "Nei Mongol"
      },
      {
        "stateID": "20",
        "state": "Ningxia"
      },
      {
        "stateID": "21",
        "state": "Qinghai"
      },
      {
        "stateID": "22",
        "state": "Shaanxi"
      },
      {
        "stateID": "23",
        "state": "Shandong"
      },
      {
        "stateID": "24",
        "state": "Shanghai"
      },
      {
        "stateID": "25",
        "state": "Shanxi"
      },
      {
        "stateID": "26",
        "state": "Sichuan"
      },
      {
        "stateID": "27",
        "state": "Tianjin"
      },
      {
        "stateID": "28",
        "state": "Xinjiang"
      },
      {
        "stateID": "29",
        "state": "Xizang (Tibet)"
      },
      {
        "stateID": "30",
        "state": "Yunnan"
      },
      {
        "stateID": "31",
        "state": "Zhejiang"
      }
    ],
    "Christmas Island": [
      {
        "stateID": "1",
        "state": "Christmas Island"
      }
    ],
    "Clipperton Island": [
      {
        "stateID": "1",
        "state": "Clipperton Island"
      }
    ],
    "Cocos (Keeling) Islands": [
      {
        "stateID": "1",
        "state": "Direction Island"
      },
      {
        "stateID": "2",
        "state": "Home Island"
      },
      {
        "stateID": "3",
        "state": "Horsburgh Island"
      },
      {
        "stateID": "4",
        "state": "North Keeling Island"
      },
      {
        "stateID": "5",
        "state": "South Island"
      },
      {
        "stateID": "6",
        "state": "West Island"
      }
    ],
    "Colombia": [
      {
        "stateID": "1",
        "state": "Amazonas"
      },
      {
        "stateID": "2",
        "state": "Antioquia"
      },
      {
        "stateID": "3",
        "state": "Arauca"
      },
      {
        "stateID": "4",
        "state": "Atlantico"
      },
      {
        "stateID": "5",
        "state": "Bolivar"
      },
      {
        "stateID": "6",
        "state": "Boyaca"
      },
      {
        "stateID": "7",
        "state": "Caldas"
      },
      {
        "stateID": "8",
        "state": "Caqueta"
      },
      {
        "stateID": "9",
        "state": "Casanare"
      },
      {
        "stateID": "10",
        "state": "Cauca"
      },
      {
        "stateID": "11",
        "state": "Cesar"
      },
      {
        "stateID": "12",
        "state": "Choco"
      },
      {
        "stateID": "13",
        "state": "Cordoba"
      },
      {
        "stateID": "14",
        "state": "Cundinamarca"
      },
      {
        "stateID": "15",
        "state": "Distrito Capital de Santa Fe de Bogota"
      },
      {
        "stateID": "16",
        "state": "Guainia"
      },
      {
        "stateID": "17",
        "state": "Guaviare"
      },
      {
        "stateID": "18",
        "state": "Huila"
      },
      {
        "stateID": "19",
        "state": "La Guajira"
      },
      {
        "stateID": "20",
        "state": "Magdalena"
      },
      {
        "stateID": "21",
        "state": "Meta"
      },
      {
        "stateID": "22",
        "state": "Narino"
      },
      {
        "stateID": "23",
        "state": "Norte de Santander"
      },
      {
        "stateID": "24",
        "state": "Putumayo"
      },
      {
        "stateID": "25",
        "state": "Quindio"
      },
      {
        "stateID": "26",
        "state": "Risaralda"
      },
      {
        "stateID": "27",
        "state": "San Andres y Providencia"
      },
      {
        "stateID": "28",
        "state": "Santander"
      },
      {
        "stateID": "29",
        "state": "Sucre"
      },
      {
        "stateID": "30",
        "state": "Tolima"
      },
      {
        "stateID": "31",
        "state": "Valle del Cauca"
      },
      {
        "stateID": "32",
        "state": "Vaupes"
      },
      {
        "stateID": "33",
        "state": "Vichada"
      }
    ],
    "Comoros": [
      {
        "stateID": "1",
        "state": "Anjouan (Nzwani)"
      },
      {
        "stateID": "2",
        "state": "Domoni"
      },
      {
        "stateID": "3",
        "state": "Fomboni"
      },
      {
        "stateID": "4",
        "state": "Grande Comore (Njazidja)"
      },
      {
        "stateID": "5",
        "state": "Moheli (Mwali)"
      },
      {
        "stateID": "6",
        "state": "Moroni"
      },
      {
        "stateID": "7",
        "state": "Moutsamoudou"
      }
    ],
    "Congo, Democratic Republic of the": [
      {
        "stateID": "1",
        "state": "Bandundu"
      },
      {
        "stateID": "2",
        "state": "Bas-Congo"
      },
      {
        "stateID": "3",
        "state": "Equateur"
      },
      {
        "stateID": "4",
        "state": "Kasai-Occidental"
      },
      {
        "stateID": "5",
        "state": "Kasai-Oriental"
      },
      {
        "stateID": "6",
        "state": "Katanga"
      },
      {
        "stateID": "7",
        "state": "Kinshasa"
      },
      {
        "stateID": "8",
        "state": "Maniema"
      },
      {
        "stateID": "9",
        "state": "Nord-Kivu"
      },
      {
        "stateID": "10",
        "state": "Orientale"
      },
      {
        "stateID": "11",
        "state": "Sud-Kivu"
      }
    ],
    "Congo, Republic of the": [
      {
        "stateID": "1",
        "state": "Bouenza"
      },
      {
        "stateID": "2",
        "state": "Brazzaville"
      },
      {
        "stateID": "3",
        "state": "Cuvette"
      },
      {
        "stateID": "4",
        "state": "Kouilou"
      },
      {
        "stateID": "5",
        "state": "Lekoumou"
      },
      {
        "stateID": "6",
        "state": "Likouala"
      },
      {
        "stateID": "7",
        "state": "Niari"
      },
      {
        "stateID": "8",
        "state": "Plateaux"
      },
      {
        "stateID": "9",
        "state": "Pool"
      },
      {
        "stateID": "10",
        "state": "Sangha"
      }
    ],
    "Cook Islands": [
      {
        "stateID": "1",
        "state": "Aitutaki"
      },
      {
        "stateID": "2",
        "state": "Atiu"
      },
      {
        "stateID": "3",
        "state": "Avarua"
      },
      {
        "stateID": "4",
        "state": "Mangaia"
      },
      {
        "stateID": "5",
        "state": "Manihiki"
      },
      {
        "stateID": "6",
        "state": "Manuae"
      },
      {
        "stateID": "7",
        "state": "Mauke"
      },
      {
        "stateID": "8",
        "state": "Mitiaro"
      },
      {
        "stateID": "9",
        "state": "Nassau Island"
      },
      {
        "stateID": "10",
        "state": "Palmerston"
      },
      {
        "stateID": "11",
        "state": "Penrhyn"
      },
      {
        "stateID": "12",
        "state": "Pukapuka"
      },
      {
        "stateID": "13",
        "state": "Rakahanga"
      },
      {
        "stateID": "14",
        "state": "Rarotonga"
      },
      {
        "stateID": "15",
        "state": "Suwarrow"
      },
      {
        "stateID": "16",
        "state": "Takutea"
      }
    ],
    "Costa Rica": [
      {
        "stateID": "1",
        "state": "Alajuela"
      },
      {
        "stateID": "2",
        "state": "Cartago"
      },
      {
        "stateID": "3",
        "state": "Guanacaste"
      },
      {
        "stateID": "4",
        "state": "Heredia"
      },
      {
        "stateID": "5",
        "state": "Limon"
      },
      {
        "stateID": "6",
        "state": "Puntarenas"
      },
      {
        "stateID": "7",
        "state": "San Jose"
      }
    ],
    "Cote d'Ivoire": [
      {
        "stateID": "1",
        "state": "Abengourou"
      },
      {
        "stateID": "2",
        "state": "Abidjan"
      },
      {
        "stateID": "3",
        "state": "Aboisso"
      },
      {
        "stateID": "4",
        "state": "Adiake'"
      },
      {
        "stateID": "5",
        "state": "Adzope"
      },
      {
        "stateID": "6",
        "state": "Agboville"
      },
      {
        "stateID": "7",
        "state": "Agnibilekrou"
      },
      {
        "stateID": "8",
        "state": "Ale'pe'"
      },
      {
        "stateID": "9",
        "state": "Bangolo"
      },
      {
        "stateID": "10",
        "state": "Beoumi"
      },
      {
        "stateID": "11",
        "state": "Biankouma"
      },
      {
        "stateID": "12",
        "state": "Bocanda"
      },
      {
        "stateID": "13",
        "state": "Bondoukou"
      },
      {
        "stateID": "14",
        "state": "Bongouanou"
      },
      {
        "stateID": "15",
        "state": "Bouafle"
      },
      {
        "stateID": "16",
        "state": "Bouake"
      },
      {
        "stateID": "17",
        "state": "Bouna"
      },
      {
        "stateID": "18",
        "state": "Boundiali"
      },
      {
        "stateID": "19",
        "state": "Dabakala"
      },
      {
        "stateID": "20",
        "state": "Dabon"
      },
      {
        "stateID": "21",
        "state": "Daloa"
      },
      {
        "stateID": "22",
        "state": "Danane"
      },
      {
        "stateID": "23",
        "state": "Daoukro"
      },
      {
        "stateID": "24",
        "state": "Dimbokro"
      },
      {
        "stateID": "25",
        "state": "Divo"
      },
      {
        "stateID": "26",
        "state": "Duekoue"
      },
      {
        "stateID": "27",
        "state": "Ferkessedougou"
      },
      {
        "stateID": "28",
        "state": "Gagnoa"
      },
      {
        "stateID": "29",
        "state": "Grand Bassam"
      },
      {
        "stateID": "30",
        "state": "Grand-Lahou"
      },
      {
        "stateID": "31",
        "state": "Guiglo"
      },
      {
        "stateID": "32",
        "state": "Issia"
      },
      {
        "stateID": "33",
        "state": "Jacqueville"
      },
      {
        "stateID": "34",
        "state": "Katiola"
      },
      {
        "stateID": "35",
        "state": "Korhogo"
      },
      {
        "stateID": "36",
        "state": "Lakota"
      },
      {
        "stateID": "37",
        "state": "Man"
      },
      {
        "stateID": "38",
        "state": "Mankono"
      },
      {
        "stateID": "39",
        "state": "Mbahiakro"
      },
      {
        "stateID": "40",
        "state": "Odienne"
      },
      {
        "stateID": "41",
        "state": "Oume"
      },
      {
        "stateID": "42",
        "state": "Sakassou"
      },
      {
        "stateID": "43",
        "state": "San-Pedro"
      },
      {
        "stateID": "44",
        "state": "Sassandra"
      },
      {
        "stateID": "45",
        "state": "Seguela"
      },
      {
        "stateID": "46",
        "state": "Sinfra"
      },
      {
        "stateID": "47",
        "state": "Soubre"
      },
      {
        "stateID": "48",
        "state": "Tabou"
      },
      {
        "stateID": "49",
        "state": "Tanda"
      },
      {
        "stateID": "50",
        "state": "Tiassale"
      },
      {
        "stateID": "51",
        "state": "Tiebissou"
      },
      {
        "stateID": "52",
        "state": "Tingrela"
      },
      {
        "stateID": "53",
        "state": "Touba"
      },
      {
        "stateID": "54",
        "state": "Toulepleu"
      },
      {
        "stateID": "55",
        "state": "Toumodi"
      },
      {
        "stateID": "56",
        "state": "Vavoua"
      },
      {
        "stateID": "57",
        "state": "Yamoussoukro"
      },
      {
        "stateID": "58",
        "state": "Zuenoula"
      }
    ],
    "Croatia": [
      {
        "stateID": "1",
        "state": "Bjelovarsko-Bilogorska Zupanija"
      },
      {
        "stateID": "2",
        "state": "Brodsko-Posavska Zupanija"
      },
      {
        "stateID": "3",
        "state": "Dubrovacko-Neretvanska Zupanija"
      },
      {
        "stateID": "4",
        "state": "Istarska Zupanija"
      },
      {
        "stateID": "5",
        "state": "Karlovacka Zupanija"
      },
      {
        "stateID": "6",
        "state": "Koprivnicko-Krizevacka Zupanija"
      },
      {
        "stateID": "7",
        "state": "Krapinsko-Zagorska Zupanija"
      },
      {
        "stateID": "8",
        "state": "Licko-Senjska Zupanija"
      },
      {
        "stateID": "9",
        "state": "Medimurska Zupanija"
      },
      {
        "stateID": "10",
        "state": "Osjecko-Baranjska Zupanija"
      },
      {
        "stateID": "11",
        "state": "Pozesko-Slavonska Zupanija"
      },
      {
        "stateID": "12",
        "state": "Primorsko-Goranska Zupanija"
      },
      {
        "stateID": "13",
        "state": "Sibensko-Kninska Zupanija"
      },
      {
        "stateID": "14",
        "state": "Sisacko-Moslavacka Zupanija"
      },
      {
        "stateID": "15",
        "state": "Splitsko-Dalmatinska Zupanija"
      },
      {
        "stateID": "16",
        "state": "Varazdinska Zupanija"
      },
      {
        "stateID": "17",
        "state": "Viroviticko-Podravska Zupanija"
      },
      {
        "stateID": "18",
        "state": "Vukovarsko-Srijemska Zupanija"
      },
      {
        "stateID": "19",
        "state": "Zadarska Zupanija"
      },
      {
        "stateID": "20",
        "state": "Zagreb"
      },
      {
        "stateID": "21",
        "state": "Zagrebacka Zupanija"
      }
    ],
    "Cuba": [
      {
        "stateID": "1",
        "state": "Camaguey"
      },
      {
        "stateID": "2",
        "state": "Ciego de Avila"
      },
      {
        "stateID": "3",
        "state": "Cienfuegos"
      },
      {
        "stateID": "4",
        "state": "Ciudad de La Habana"
      },
      {
        "stateID": "5",
        "state": "Granma"
      },
      {
        "stateID": "6",
        "state": "Guantanamo"
      },
      {
        "stateID": "7",
        "state": "Holguin"
      },
      {
        "stateID": "8",
        "state": "Isla de la Juventud"
      },
      {
        "stateID": "9",
        "state": "La Habana"
      },
      {
        "stateID": "10",
        "state": "Las Tunas"
      },
      {
        "stateID": "11",
        "state": "Matanzas"
      },
      {
        "stateID": "12",
        "state": "Pinar del Rio"
      },
      {
        "stateID": "13",
        "state": "Sancti Spiritus"
      },
      {
        "stateID": "14",
        "state": "Santiago de Cuba"
      },
      {
        "stateID": "15",
        "state": "Villa Clara"
      }
    ],
    "Cyprus": [
      {
        "stateID": "1",
        "state": "Famagusta"
      },
      {
        "stateID": "2",
        "state": "Kyrenia"
      },
      {
        "stateID": "3",
        "state": "Larnaca"
      },
      {
        "stateID": "4",
        "state": "Limassol"
      },
      {
        "stateID": "5",
        "state": "Nicosia"
      },
      {
        "stateID": "6",
        "state": "Paphos"
      }
    ],
    "Czeck Republic": [
      {
        "stateID": "1",
        "state": "Brnensky"
      },
      {
        "stateID": "2",
        "state": "Budejovicky"
      },
      {
        "stateID": "3",
        "state": "Jihlavsky"
      },
      {
        "stateID": "4",
        "state": "Karlovarsky"
      },
      {
        "stateID": "5",
        "state": "Kralovehradecky"
      },
      {
        "stateID": "6",
        "state": "Liberecky"
      },
      {
        "stateID": "7",
        "state": "Olomoucky"
      },
      {
        "stateID": "8",
        "state": "Ostravsky"
      },
      {
        "stateID": "9",
        "state": "Pardubicky"
      },
      {
        "stateID": "10",
        "state": "Plzensky"
      },
      {
        "stateID": "11",
        "state": "Praha"
      },
      {
        "stateID": "12",
        "state": "Stredocesky"
      },
      {
        "stateID": "13",
        "state": "Ustecky"
      },
      {
        "stateID": "14",
        "state": "Zlinsky"
      }
    ],
    "Denmark": [
      {
        "stateID": "1",
        "state": "Arhus"
      },
      {
        "stateID": "2",
        "state": "Bornholm"
      },
      {
        "stateID": "3",
        "state": "Fredericksberg"
      },
      {
        "stateID": "4",
        "state": "Frederiksborg"
      },
      {
        "stateID": "5",
        "state": "Fyn"
      },
      {
        "stateID": "6",
        "state": "Kobenhavn"
      },
      {
        "stateID": "7",
        "state": "Kobenhavns"
      },
      {
        "stateID": "8",
        "state": "Nordjylland"
      },
      {
        "stateID": "9",
        "state": "Ribe"
      },
      {
        "stateID": "10",
        "state": "Ringkobing"
      },
      {
        "stateID": "11",
        "state": "Roskilde"
      },
      {
        "stateID": "12",
        "state": "Sonderjylland"
      },
      {
        "stateID": "13",
        "state": "Storstrom"
      },
      {
        "stateID": "14",
        "state": "Vejle"
      },
      {
        "stateID": "15",
        "state": "Vestsjalland"
      },
      {
        "stateID": "16",
        "state": "Viborg"
      }
    ],
    "Djibouti": [
      {
        "stateID": "1",
        "state": "'Ali Sabih"
      },
      {
        "stateID": "2",
        "state": "Dikhil"
      },
      {
        "stateID": "3",
        "state": "Djibouti"
      },
      {
        "stateID": "4",
        "state": "Obock"
      },
      {
        "stateID": "5",
        "state": "Tadjoura"
      }
    ],
    "Dominica": [
      {
        "stateID": "1",
        "state": "Saint Andrew"
      },
      {
        "stateID": "2",
        "state": "Saint David"
      },
      {
        "stateID": "3",
        "state": "Saint George"
      },
      {
        "stateID": "4",
        "state": "Saint John"
      },
      {
        "stateID": "5",
        "state": "Saint Joseph"
      },
      {
        "stateID": "6",
        "state": "Saint Luke"
      },
      {
        "stateID": "7",
        "state": "Saint Mark"
      },
      {
        "stateID": "8",
        "state": "Saint Patrick"
      },
      {
        "stateID": "9",
        "state": "Saint Paul"
      },
      {
        "stateID": "10",
        "state": "Saint Peter"
      }
    ],
    "Dominican Republic": [
      {
        "stateID": "1",
        "state": "Azua"
      },
      {
        "stateID": "2",
        "state": "Baoruco"
      },
      {
        "stateID": "3",
        "state": "Barahona"
      },
      {
        "stateID": "4",
        "state": "Dajabon"
      },
      {
        "stateID": "5",
        "state": "Distrito Nacional"
      },
      {
        "stateID": "6",
        "state": "Duarte"
      },
      {
        "stateID": "7",
        "state": "El Seibo"
      },
      {
        "stateID": "8",
        "state": "Elias Pina"
      },
      {
        "stateID": "9",
        "state": "Espaillat"
      },
      {
        "stateID": "10",
        "state": "Hato Mayor"
      },
      {
        "stateID": "11",
        "state": "Independencia"
      },
      {
        "stateID": "12",
        "state": "La Altagracia"
      },
      {
        "stateID": "13",
        "state": "La Romana"
      },
      {
        "stateID": "14",
        "state": "La Vega"
      },
      {
        "stateID": "15",
        "state": "Maria Trinidad Sanchez"
      },
      {
        "stateID": "16",
        "state": "Monsenor Nouel"
      },
      {
        "stateID": "17",
        "state": "Monte Cristi"
      },
      {
        "stateID": "18",
        "state": "Monte Plata"
      },
      {
        "stateID": "19",
        "state": "Pedernales"
      },
      {
        "stateID": "20",
        "state": "Peravia"
      },
      {
        "stateID": "21",
        "state": "Puerto Plata"
      },
      {
        "stateID": "22",
        "state": "Salcedo"
      },
      {
        "stateID": "23",
        "state": "Samana"
      },
      {
        "stateID": "24",
        "state": "San Cristobal"
      },
      {
        "stateID": "25",
        "state": "San Juan"
      },
      {
        "stateID": "26",
        "state": "San Pedro de Macoris"
      },
      {
        "stateID": "27",
        "state": "Sanchez Ramirez"
      },
      {
        "stateID": "28",
        "state": "Santiago"
      },
      {
        "stateID": "29",
        "state": "Santiago Rodriguez"
      },
      {
        "stateID": "30",
        "state": "Valverde"
      }
    ],
    "Ecuador": [
      {
        "stateID": "1",
        "state": "Azuay"
      },
      {
        "stateID": "2",
        "state": "Bolivar"
      },
      {
        "stateID": "3",
        "state": "Canar"
      },
      {
        "stateID": "4",
        "state": "Carchi"
      },
      {
        "stateID": "5",
        "state": "Chimborazo"
      },
      {
        "stateID": "6",
        "state": "Cotopaxi"
      },
      {
        "stateID": "7",
        "state": "El Oro"
      },
      {
        "stateID": "8",
        "state": "Esmeraldas"
      },
      {
        "stateID": "9",
        "state": "Galapagos"
      },
      {
        "stateID": "10",
        "state": "Guayas"
      },
      {
        "stateID": "11",
        "state": "Imbabura"
      },
      {
        "stateID": "12",
        "state": "Loja"
      },
      {
        "stateID": "13",
        "state": "Los Rios"
      },
      {
        "stateID": "14",
        "state": "Manabi"
      },
      {
        "stateID": "15",
        "state": "Morona-Santiago"
      },
      {
        "stateID": "16",
        "state": "Napo"
      },
      {
        "stateID": "17",
        "state": "Orellana"
      },
      {
        "stateID": "18",
        "state": "Pastaza"
      },
      {
        "stateID": "19",
        "state": "Pichincha"
      },
      {
        "stateID": "20",
        "state": "Sucumbios"
      },
      {
        "stateID": "21",
        "state": "Tungurahua"
      },
      {
        "stateID": "22",
        "state": "Zamora-Chinchipe"
      }
    ],
    "Egypt": [
      {
        "stateID": "1",
        "state": "Ad Daqahliyah"
      },
      {
        "stateID": "2",
        "state": "Al Bahr al Ahmar"
      },
      {
        "stateID": "3",
        "state": "Al Buhayrah"
      },
      {
        "stateID": "4",
        "state": "Al Fayyum"
      },
      {
        "stateID": "5",
        "state": "Al Gharbiyah"
      },
      {
        "stateID": "6",
        "state": "Al Iskandariyah"
      },
      {
        "stateID": "7",
        "state": "Al Isma'iliyah"
      },
      {
        "stateID": "8",
        "state": "Al Jizah"
      },
      {
        "stateID": "9",
        "state": "Al Minufiyah"
      },
      {
        "stateID": "10",
        "state": "Al Minya"
      },
      {
        "stateID": "11",
        "state": "Al Qahirah"
      },
      {
        "stateID": "12",
        "state": "Al Qalyubiyah"
      },
      {
        "stateID": "13",
        "state": "Al Wadi al Jadid"
      },
      {
        "stateID": "14",
        "state": "As Suways"
      },
      {
        "stateID": "15",
        "state": "Ash Sharqiyah"
      },
      {
        "stateID": "16",
        "state": "Aswan"
      },
      {
        "stateID": "17",
        "state": "Asyut"
      },
      {
        "stateID": "18",
        "state": "Bani Suwayf"
      },
      {
        "stateID": "19",
        "state": "Bur Sa'id"
      },
      {
        "stateID": "20",
        "state": "Dumyat"
      },
      {
        "stateID": "21",
        "state": "Janub Sina'"
      },
      {
        "stateID": "22",
        "state": "Kafr ash Shaykh"
      },
      {
        "stateID": "23",
        "state": "Matruh"
      },
      {
        "stateID": "24",
        "state": "Qina"
      },
      {
        "stateID": "25",
        "state": "Shamal Sina'"
      },
      {
        "stateID": "26",
        "state": "Suhaj"
      }
    ],
    "El Salvador": [
      {
        "stateID": "1",
        "state": "Ahuachapan"
      },
      {
        "stateID": "2",
        "state": "Cabanas"
      },
      {
        "stateID": "3",
        "state": "Chalatenango"
      },
      {
        "stateID": "4",
        "state": "Cuscatlan"
      },
      {
        "stateID": "5",
        "state": "La Libertad"
      },
      {
        "stateID": "6",
        "state": "La Paz"
      },
      {
        "stateID": "7",
        "state": "La Union"
      },
      {
        "stateID": "8",
        "state": "Morazan"
      },
      {
        "stateID": "9",
        "state": "San Miguel"
      },
      {
        "stateID": "10",
        "state": "San Salvador"
      },
      {
        "stateID": "11",
        "state": "San Vicente"
      },
      {
        "stateID": "12",
        "state": "Santa Ana"
      },
      {
        "stateID": "13",
        "state": "Sonsonate"
      },
      {
        "stateID": "14",
        "state": "Usulutan"
      }
    ],
    "Equatorial Guinea": [
      {
        "stateID": "1",
        "state": "Annobon"
      },
      {
        "stateID": "2",
        "state": "Bioko Norte"
      },
      {
        "stateID": "3",
        "state": "Bioko Sur"
      },
      {
        "stateID": "4",
        "state": "Centro Sur"
      },
      {
        "stateID": "5",
        "state": "Kie-Ntem"
      },
      {
        "stateID": "6",
        "state": "Litoral"
      },
      {
        "stateID": "7",
        "state": "Wele-Nzas"
      }
    ],
    "Eritrea": [
      {
        "stateID": "1",
        "state": "Akale Guzay"
      },
      {
        "stateID": "2",
        "state": "Barka"
      },
      {
        "stateID": "3",
        "state": "Denkel"
      },
      {
        "stateID": "4",
        "state": "Hamasen"
      },
      {
        "stateID": "5",
        "state": "Sahil"
      },
      {
        "stateID": "6",
        "state": "Semhar"
      },
      {
        "stateID": "7",
        "state": "Senhit"
      },
      {
        "stateID": "8",
        "state": "Seraye"
      }
    ],
    "Estonia": [
      {
        "stateID": "1",
        "state": "Harjumaa (Tallinn)"
      },
      {
        "stateID": "2",
        "state": "Hiiumaa (Kardla)"
      },
      {
        "stateID": "3",
        "state": "Ida-Virumaa (Johvi)"
      },
      {
        "stateID": "4",
        "state": "Jarvamaa (Paide)"
      },
      {
        "stateID": "5",
        "state": "Jogevamaa (Jogeva)"
      },
      {
        "stateID": "6",
        "state": "Laane-Virumaa (Rakvere)"
      },
      {
        "stateID": "7",
        "state": "Laanemaa (Haapsalu)"
      },
      {
        "stateID": "8",
        "state": "Parnumaa (Parnu)"
      },
      {
        "stateID": "9",
        "state": "Polvamaa (Polva)"
      },
      {
        "stateID": "10",
        "state": "Raplamaa (Rapla)"
      },
      {
        "stateID": "11",
        "state": "Saaremaa (Kuessaare)"
      },
      {
        "stateID": "12",
        "state": "Tartumaa (Tartu)"
      },
      {
        "stateID": "13",
        "state": "Valgamaa (Valga)"
      },
      {
        "stateID": "14",
        "state": "Viljandimaa (Viljandi)"
      },
      {
        "stateID": "15",
        "state": "Vorumaa (Voru)"
      }
    ],
    "Ethiopia": [
      {
        "stateID": "1",
        "state": "Adis Abeba (Addis Ababa)"
      },
      {
        "stateID": "2",
        "state": "Afar"
      },
      {
        "stateID": "3",
        "state": "Amara"
      },
      {
        "stateID": "4",
        "state": "Dire Dawa"
      },
      {
        "stateID": "5",
        "state": "Gambela Hizboch"
      },
      {
        "stateID": "6",
        "state": "Hareri Hizb"
      },
      {
        "stateID": "7",
        "state": "Oromiya"
      },
      {
        "stateID": "8",
        "state": "Sumale"
      },
      {
        "stateID": "9",
        "state": "Tigray"
      },
      {
        "stateID": "10",
        "state": "YeDebub Biheroch Bihereseboch na Hizboch"
      }
    ],
    "Europa Island": [
      {
        "stateID": "1",
        "state": "Europa Island"
      }
    ],
    "Falkland Islands (Islas Malvinas)": [
      {
        "stateID": "1",
        "state": "Falkland Islands (Islas Malvinas)"
      }
    ],
    "Faroe Islands": [
      {
        "stateID": "1",
        "state": "Bordoy"
      },
      {
        "stateID": "2",
        "state": "Eysturoy"
      },
      {
        "stateID": "3",
        "state": "Mykines"
      },
      {
        "stateID": "4",
        "state": "Sandoy"
      },
      {
        "stateID": "5",
        "state": "Skuvoy"
      },
      {
        "stateID": "6",
        "state": "Streymoy"
      },
      {
        "stateID": "7",
        "state": "Suduroy"
      },
      {
        "stateID": "8",
        "state": "Tvoroyri"
      },
      {
        "stateID": "9",
        "state": "Vagar"
      }
    ],
    "Fiji": [
      {
        "stateID": "1",
        "state": "Central"
      },
      {
        "stateID": "2",
        "state": "Eastern"
      },
      {
        "stateID": "3",
        "state": "Northern"
      },
      {
        "stateID": "4",
        "state": "Rotuma"
      },
      {
        "stateID": "5",
        "state": "Western"
      }
    ],
    "Finland": [
      {
        "stateID": "1",
        "state": "Aland"
      },
      {
        "stateID": "2",
        "state": "Etela-Suomen Laani"
      },
      {
        "stateID": "3",
        "state": "Ita-Suomen Laani"
      },
      {
        "stateID": "4",
        "state": "Lansi-Suomen Laani"
      },
      {
        "stateID": "5",
        "state": "Lappi"
      },
      {
        "stateID": "6",
        "state": "Oulun Laani"
      }
    ],
    "France": [
      {
        "stateID": "1",
        "state": "Alsace"
      },
      {
        "stateID": "2",
        "state": "Aquitaine"
      },
      {
        "stateID": "3",
        "state": "Auvergne"
      },
      {
        "stateID": "4",
        "state": "Basse-Normandie"
      },
      {
        "stateID": "5",
        "state": "Bourgogne"
      },
      {
        "stateID": "6",
        "state": "Bretagne"
      },
      {
        "stateID": "7",
        "state": "Centre"
      },
      {
        "stateID": "8",
        "state": "Champagne-Ardenne"
      },
      {
        "stateID": "9",
        "state": "Corse"
      },
      {
        "stateID": "10",
        "state": "Franche-Comte"
      },
      {
        "stateID": "11",
        "state": "Haute-Normandie"
      },
      {
        "stateID": "12",
        "state": "Ile-de-France"
      },
      {
        "stateID": "13",
        "state": "Languedoc-Roussillon"
      },
      {
        "stateID": "14",
        "state": "Limousin"
      },
      {
        "stateID": "15",
        "state": "Lorraine"
      },
      {
        "stateID": "16",
        "state": "Midi-Pyrenees"
      },
      {
        "stateID": "17",
        "state": "Nord-Pas-de-Calais"
      },
      {
        "stateID": "18",
        "state": "Pays de la Loire"
      },
      {
        "stateID": "19",
        "state": "Picardie"
      },
      {
        "stateID": "20",
        "state": "Poitou-Charentes"
      },
      {
        "stateID": "21",
        "state": "Provence-Alpes-Cote d'Azur"
      },
      {
        "stateID": "22",
        "state": "Rhone-Alpes"
      }
    ],
    "French Guiana": [
      {
        "stateID": "1",
        "state": "French Guiana"
      }
    ],
    "French Polynesia": [
      {
        "stateID": "1",
        "state": "Archipel des Marquises"
      },
      {
        "stateID": "2",
        "state": "Archipel des Tuamotu"
      },
      {
        "stateID": "3",
        "state": "Archipel des Tubuai"
      },
      {
        "stateID": "4",
        "state": "Iles du Vent"
      },
      {
        "stateID": "5",
        "state": "Iles Sous-le-Vent"
      }
    ],
    "French Southern and Antarctic Lands": [
      {
        "stateID": "1",
        "state": "Adelie Land"
      },
      {
        "stateID": "2",
        "state": "Ile Crozet"
      },
      {
        "stateID": "3",
        "state": "Iles Kerguelen"
      },
      {
        "stateID": "4",
        "state": "Iles Saint-Paul et Amsterdam"
      }
    ],
    "Gabon": [
      {
        "stateID": "1",
        "state": "Estuaire"
      },
      {
        "stateID": "2",
        "state": "Haut-Ogooue"
      },
      {
        "stateID": "3",
        "state": "Moyen-Ogooue"
      },
      {
        "stateID": "4",
        "state": "Ngounie"
      },
      {
        "stateID": "5",
        "state": "Nyanga"
      },
      {
        "stateID": "6",
        "state": "Ogooue-Ivindo"
      },
      {
        "stateID": "7",
        "state": "Ogooue-Lolo"
      },
      {
        "stateID": "8",
        "state": "Ogooue-Maritime"
      },
      {
        "stateID": "9",
        "state": "Woleu-Ntem"
      }
    ],
    "Gambia, The": [
      {
        "stateID": "1",
        "state": "Banjul"
      },
      {
        "stateID": "2",
        "state": "Central River"
      },
      {
        "stateID": "3",
        "state": "Lower River"
      },
      {
        "stateID": "4",
        "state": "North Bank"
      },
      {
        "stateID": "5",
        "state": "Upper River"
      },
      {
        "stateID": "6",
        "state": "Western"
      }
    ],
    "Gaza Strip": [
      {
        "stateID": "1",
        "state": "Gaza Strip"
      }
    ],
    "Georgia": [
      {
        "stateID": "1",
        "state": "Abashis"
      },
      {
        "stateID": "2",
        "state": "Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)"
      },
      {
        "stateID": "3",
        "state": "Adigenis"
      },
      {
        "stateID": "4",
        "state": "Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)"
      },
      {
        "stateID": "5",
        "state": "Akhalgoris"
      },
      {
        "stateID": "6",
        "state": "Akhalk'alak'is"
      },
      {
        "stateID": "7",
        "state": "Akhalts'ikhis"
      },
      {
        "stateID": "8",
        "state": "Akhmetis"
      },
      {
        "stateID": "9",
        "state": "Ambrolauris"
      },
      {
        "stateID": "10",
        "state": "Aspindzis"
      },
      {
        "stateID": "11",
        "state": "Baghdat'is"
      },
      {
        "stateID": "12",
        "state": "Bolnisis"
      },
      {
        "stateID": "13",
        "state": "Borjomis"
      },
      {
        "stateID": "14",
        "state": "Ch'khorotsqus"
      },
      {
        "stateID": "15",
        "state": "Ch'okhatauris"
      },
      {
        "stateID": "16",
        "state": "Chiat'ura"
      },
      {
        "stateID": "17",
        "state": "Dedop'listsqaros"
      },
      {
        "stateID": "18",
        "state": "Dmanisis"
      },
      {
        "stateID": "19",
        "state": "Dushet'is"
      },
      {
        "stateID": "20",
        "state": "Gardabanis"
      },
      {
        "stateID": "21",
        "state": "Gori"
      },
      {
        "stateID": "22",
        "state": "Goris"
      },
      {
        "stateID": "23",
        "state": "Gurjaanis"
      },
      {
        "stateID": "24",
        "state": "Javis"
      },
      {
        "stateID": "25",
        "state": "K'arelis"
      },
      {
        "stateID": "26",
        "state": "K'ut'aisi"
      },
      {
        "stateID": "27",
        "state": "Kaspis"
      },
      {
        "stateID": "28",
        "state": "Kharagaulis"
      },
      {
        "stateID": "29",
        "state": "Khashuris"
      },
      {
        "stateID": "30",
        "state": "Khobis"
      },
      {
        "stateID": "31",
        "state": "Khonis"
      },
      {
        "stateID": "32",
        "state": "Lagodekhis"
      },
      {
        "stateID": "33",
        "state": "Lanch'khut'is"
      },
      {
        "stateID": "34",
        "state": "Lentekhis"
      },
      {
        "stateID": "35",
        "state": "Marneulis"
      },
      {
        "stateID": "36",
        "state": "Martvilis"
      },
      {
        "stateID": "37",
        "state": "Mestiis"
      },
      {
        "stateID": "38",
        "state": "Mts'khet'is"
      },
      {
        "stateID": "39",
        "state": "Ninotsmindis"
      },
      {
        "stateID": "40",
        "state": "Onis"
      },
      {
        "stateID": "41",
        "state": "Ozurget'is"
      },
      {
        "stateID": "42",
        "state": "P'ot'i"
      },
      {
        "stateID": "43",
        "state": "Qazbegis"
      },
      {
        "stateID": "44",
        "state": "Qvarlis"
      },
      {
        "stateID": "45",
        "state": "Rust'avi"
      },
      {
        "stateID": "46",
        "state": "Sach'kheris"
      },
      {
        "stateID": "47",
        "state": "Sagarejos"
      },
      {
        "stateID": "48",
        "state": "Samtrediis"
      },
      {
        "stateID": "49",
        "state": "Senakis"
      },
      {
        "stateID": "50",
        "state": "Sighnaghis"
      },
      {
        "stateID": "51",
        "state": "T'bilisi"
      },
      {
        "stateID": "52",
        "state": "T'elavis"
      },
      {
        "stateID": "53",
        "state": "T'erjolis"
      },
      {
        "stateID": "54",
        "state": "T'et'ritsqaros"
      },
      {
        "stateID": "55",
        "state": "T'ianet'is"
      },
      {
        "stateID": "56",
        "state": "Tqibuli"
      },
      {
        "stateID": "57",
        "state": "Ts'ageris"
      },
      {
        "stateID": "58",
        "state": "Tsalenjikhis"
      },
      {
        "stateID": "59",
        "state": "Tsalkis"
      },
      {
        "stateID": "60",
        "state": "Tsqaltubo"
      },
      {
        "stateID": "61",
        "state": "Vanis"
      },
      {
        "stateID": "62",
        "state": "Zestap'onis"
      },
      {
        "stateID": "63",
        "state": "Zugdidi"
      },
      {
        "stateID": "64",
        "state": "Zugdidis"
      }
    ],
    "Germany": [
      {
        "stateID": "1",
        "state": "Baden-Wuerttemberg"
      },
      {
        "stateID": "2",
        "state": "Bayern"
      },
      {
        "stateID": "3",
        "state": "Berlin"
      },
      {
        "stateID": "4",
        "state": "Brandenburg"
      },
      {
        "stateID": "5",
        "state": "Bremen"
      },
      {
        "stateID": "6",
        "state": "Hamburg"
      },
      {
        "stateID": "7",
        "state": "Hessen"
      },
      {
        "stateID": "8",
        "state": "Mecklenburg-Vorpommern"
      },
      {
        "stateID": "9",
        "state": "Niedersachsen"
      },
      {
        "stateID": "10",
        "state": "Nordrhein-Westfalen"
      },
      {
        "stateID": "11",
        "state": "Rheinland-Pfalz"
      },
      {
        "stateID": "12",
        "state": "Saarland"
      },
      {
        "stateID": "13",
        "state": "Sachsen"
      },
      {
        "stateID": "14",
        "state": "Sachsen-Anhalt"
      },
      {
        "stateID": "15",
        "state": "Schleswig-Holstein"
      },
      {
        "stateID": "16",
        "state": "Thueringen"
      }
    ],
    "Ghana": [
      {
        "stateID": "1",
        "state": "Ashanti"
      },
      {
        "stateID": "2",
        "state": "Brong-Ahafo"
      },
      {
        "stateID": "3",
        "state": "Central"
      },
      {
        "stateID": "4",
        "state": "Eastern"
      },
      {
        "stateID": "5",
        "state": "Greater Accra"
      },
      {
        "stateID": "6",
        "state": "Northern"
      },
      {
        "stateID": "7",
        "state": "Upper East"
      },
      {
        "stateID": "8",
        "state": "Upper West"
      },
      {
        "stateID": "9",
        "state": "Volta"
      },
      {
        "stateID": "10",
        "state": "Western"
      }
    ],
    "Gibraltar": [
      {
        "stateID": "1",
        "state": "Gibraltar"
      }
    ],
    "Glorioso Islands": [
      {
        "stateID": "1",
        "state": "Ile du Lys"
      },
      {
        "stateID": "2",
        "state": "Ile Glorieuse"
      }
    ],
    "Greece": [
      {
        "stateID": "1",
        "state": "Aitolia kai Akarnania"
      },
      {
        "stateID": "2",
        "state": "Akhaia"
      },
      {
        "stateID": "3",
        "state": "Argolis"
      },
      {
        "stateID": "4",
        "state": "Arkadhia"
      },
      {
        "stateID": "5",
        "state": "Arta"
      },
      {
        "stateID": "6",
        "state": "Attiki"
      },
      {
        "stateID": "7",
        "state": "Ayion Oros (Mt. Athos)"
      },
      {
        "stateID": "8",
        "state": "Dhodhekanisos"
      },
      {
        "stateID": "9",
        "state": "Drama"
      },
      {
        "stateID": "10",
        "state": "Evritania"
      },
      {
        "stateID": "11",
        "state": "Evros"
      },
      {
        "stateID": "12",
        "state": "Evvoia"
      },
      {
        "stateID": "13",
        "state": "Florina"
      },
      {
        "stateID": "14",
        "state": "Fokis"
      },
      {
        "stateID": "15",
        "state": "Fthiotis"
      },
      {
        "stateID": "16",
        "state": "Grevena"
      },
      {
        "stateID": "17",
        "state": "Ilia"
      },
      {
        "stateID": "18",
        "state": "Imathia"
      },
      {
        "stateID": "19",
        "state": "Ioannina"
      },
      {
        "stateID": "20",
        "state": "Irakleion"
      },
      {
        "stateID": "21",
        "state": "Kardhitsa"
      },
      {
        "stateID": "22",
        "state": "Kastoria"
      },
      {
        "stateID": "23",
        "state": "Kavala"
      },
      {
        "stateID": "24",
        "state": "Kefallinia"
      },
      {
        "stateID": "25",
        "state": "Kerkyra"
      },
      {
        "stateID": "26",
        "state": "Khalkidhiki"
      },
      {
        "stateID": "27",
        "state": "Khania"
      },
      {
        "stateID": "28",
        "state": "Khios"
      },
      {
        "stateID": "29",
        "state": "Kikladhes"
      },
      {
        "stateID": "30",
        "state": "Kilkis"
      },
      {
        "stateID": "31",
        "state": "Korinthia"
      },
      {
        "stateID": "32",
        "state": "Kozani"
      },
      {
        "stateID": "33",
        "state": "Lakonia"
      },
      {
        "stateID": "34",
        "state": "Larisa"
      },
      {
        "stateID": "35",
        "state": "Lasithi"
      },
      {
        "stateID": "36",
        "state": "Lesvos"
      },
      {
        "stateID": "37",
        "state": "Levkas"
      },
      {
        "stateID": "38",
        "state": "Magnisia"
      },
      {
        "stateID": "39",
        "state": "Messinia"
      },
      {
        "stateID": "40",
        "state": "Pella"
      },
      {
        "stateID": "41",
        "state": "Pieria"
      },
      {
        "stateID": "42",
        "state": "Preveza"
      },
      {
        "stateID": "43",
        "state": "Rethimni"
      },
      {
        "stateID": "44",
        "state": "Rodhopi"
      },
      {
        "stateID": "45",
        "state": "Samos"
      },
      {
        "stateID": "46",
        "state": "Serrai"
      },
      {
        "stateID": "47",
        "state": "Thesprotia"
      },
      {
        "stateID": "48",
        "state": "Thessaloniki"
      },
      {
        "stateID": "49",
        "state": "Trikala"
      },
      {
        "stateID": "50",
        "state": "Voiotia"
      },
      {
        "stateID": "51",
        "state": "Xanthi"
      },
      {
        "stateID": "52",
        "state": "Zakinthos"
      }
    ],
    "Greenland": [
      {
        "stateID": "1",
        "state": "Avannaa (Nordgronland)"
      },
      {
        "stateID": "2",
        "state": "Kitaa (Vestgronland)"
      },
      {
        "stateID": "3",
        "state": "Tunu (Ostgronland)"
      }
    ],
    "Grenada": [
      {
        "stateID": "1",
        "state": "Carriacou and Petit Martinique"
      },
      {
        "stateID": "2",
        "state": "Saint Andrew"
      },
      {
        "stateID": "3",
        "state": "Saint David"
      },
      {
        "stateID": "4",
        "state": "Saint George"
      },
      {
        "stateID": "5",
        "state": "Saint John"
      },
      {
        "stateID": "6",
        "state": "Saint Mark"
      },
      {
        "stateID": "7",
        "state": "Saint Patrick"
      }
    ],
    "Guadeloupe": [
      {
        "stateID": "1",
        "state": "Basse-Terre"
      },
      {
        "stateID": "2",
        "state": "Grande-Terre"
      },
      {
        "stateID": "3",
        "state": "Iles de la Petite Terre"
      },
      {
        "stateID": "4",
        "state": "Iles des Saintes"
      },
      {
        "stateID": "5",
        "state": "Marie-Galante"
      }
    ],
    "Guam": [
      {
        "stateID": "1",
        "state": "Guam"
      }
    ],
    "Guatemala": [
      {
        "stateID": "1",
        "state": "Alta Verapaz"
      },
      {
        "stateID": "2",
        "state": "Baja Verapaz"
      },
      {
        "stateID": "3",
        "state": "Chimaltenango"
      },
      {
        "stateID": "4",
        "state": "Chiquimula"
      },
      {
        "stateID": "5",
        "state": "El Progreso"
      },
      {
        "stateID": "6",
        "state": "Escuintla"
      },
      {
        "stateID": "7",
        "state": "Guatemala"
      },
      {
        "stateID": "8",
        "state": "Huehuetenango"
      },
      {
        "stateID": "9",
        "state": "Izabal"
      },
      {
        "stateID": "10",
        "state": "Jalapa"
      },
      {
        "stateID": "11",
        "state": "Jutiapa"
      },
      {
        "stateID": "12",
        "state": "Peten"
      },
      {
        "stateID": "13",
        "state": "Quetzaltenango"
      },
      {
        "stateID": "14",
        "state": "Quiche"
      },
      {
        "stateID": "15",
        "state": "Retalhuleu"
      },
      {
        "stateID": "16",
        "state": "Sacatepequez"
      },
      {
        "stateID": "17",
        "state": "San Marcos"
      },
      {
        "stateID": "18",
        "state": "Santa Rosa"
      },
      {
        "stateID": "19",
        "state": "Solola"
      },
      {
        "stateID": "20",
        "state": "Suchitepequez"
      },
      {
        "stateID": "21",
        "state": "Totonicapan"
      },
      {
        "stateID": "22",
        "state": "Zacapa"
      }
    ],
    "Guernsey": [
      {
        "stateID": "1",
        "state": "Castel"
      },
      {
        "stateID": "2",
        "state": "Forest"
      },
      {
        "stateID": "3",
        "state": "St. Andrew"
      },
      {
        "stateID": "4",
        "state": "St. Martin"
      },
      {
        "stateID": "5",
        "state": "St. Peter Port"
      },
      {
        "stateID": "6",
        "state": "St. Pierre du Bois"
      },
      {
        "stateID": "7",
        "state": "St. Sampson"
      },
      {
        "stateID": "8",
        "state": "St. Saviour"
      },
      {
        "stateID": "9",
        "state": "Torteval"
      },
      {
        "stateID": "10",
        "state": "Vale"
      }
    ],
    "Guinea": [
      {
        "stateID": "1",
        "state": "Beyla"
      },
      {
        "stateID": "2",
        "state": "Boffa"
      },
      {
        "stateID": "3",
        "state": "Boke"
      },
      {
        "stateID": "4",
        "state": "Conakry"
      },
      {
        "stateID": "5",
        "state": "Coyah"
      },
      {
        "stateID": "6",
        "state": "Dabola"
      },
      {
        "stateID": "7",
        "state": "Dalaba"
      },
      {
        "stateID": "8",
        "state": "Dinguiraye"
      },
      {
        "stateID": "9",
        "state": "Dubreka"
      },
      {
        "stateID": "10",
        "state": "Faranah"
      },
      {
        "stateID": "11",
        "state": "Forecariah"
      },
      {
        "stateID": "12",
        "state": "Fria"
      },
      {
        "stateID": "13",
        "state": "Gaoual"
      },
      {
        "stateID": "14",
        "state": "Gueckedou"
      },
      {
        "stateID": "15",
        "state": "Kankan"
      },
      {
        "stateID": "16",
        "state": "Kerouane"
      },
      {
        "stateID": "17",
        "state": "Kindia"
      },
      {
        "stateID": "18",
        "state": "Kissidougou"
      },
      {
        "stateID": "19",
        "state": "Koubia"
      },
      {
        "stateID": "20",
        "state": "Koundara"
      },
      {
        "stateID": "21",
        "state": "Kouroussa"
      },
      {
        "stateID": "22",
        "state": "Labe"
      },
      {
        "stateID": "23",
        "state": "Lelouma"
      },
      {
        "stateID": "24",
        "state": "Lola"
      },
      {
        "stateID": "25",
        "state": "Macenta"
      },
      {
        "stateID": "26",
        "state": "Mali"
      },
      {
        "stateID": "27",
        "state": "Mamou"
      },
      {
        "stateID": "28",
        "state": "Mandiana"
      },
      {
        "stateID": "29",
        "state": "Nzerekore"
      },
      {
        "stateID": "30",
        "state": "Pita"
      },
      {
        "stateID": "31",
        "state": "Siguiri"
      },
      {
        "stateID": "32",
        "state": "Telimele"
      },
      {
        "stateID": "33",
        "state": "Tougue"
      },
      {
        "stateID": "34",
        "state": "Yomou"
      }
    ],
    "Guinea-Bissau": [
      {
        "stateID": "1",
        "state": "Bafata"
      },
      {
        "stateID": "2",
        "state": "Biombo"
      },
      {
        "stateID": "3",
        "state": "Bissau"
      },
      {
        "stateID": "4",
        "state": "Bolama-Bijagos"
      },
      {
        "stateID": "5",
        "state": "Cacheu"
      },
      {
        "stateID": "6",
        "state": "Gabu"
      },
      {
        "stateID": "7",
        "state": "Oio"
      },
      {
        "stateID": "8",
        "state": "Quinara"
      },
      {
        "stateID": "9",
        "state": "Tombali"
      }
    ],
    "Guyana": [
      {
        "stateID": "1",
        "state": "Barima-Waini"
      },
      {
        "stateID": "2",
        "state": "Cuyuni-Mazaruni"
      },
      {
        "stateID": "3",
        "state": "Demerara-Mahaica"
      },
      {
        "stateID": "4",
        "state": "East Berbice-Corentyne"
      },
      {
        "stateID": "5",
        "state": "Essequibo Islands-West Demerara"
      },
      {
        "stateID": "6",
        "state": "Mahaica-Berbice"
      },
      {
        "stateID": "7",
        "state": "Pomeroon-Supenaam"
      },
      {
        "stateID": "8",
        "state": "Potaro-Siparuni"
      },
      {
        "stateID": "9",
        "state": "Upper Demerara-Berbice"
      },
      {
        "stateID": "10",
        "state": "Upper Takutu-Upper Essequibo"
      }
    ],
    "Haiti": [
      {
        "stateID": "1",
        "state": "Artibonite"
      },
      {
        "stateID": "2",
        "state": "Centre"
      },
      {
        "stateID": "3",
        "state": "Grand'Anse"
      },
      {
        "stateID": "4",
        "state": "Nord"
      },
      {
        "stateID": "5",
        "state": "Nord-Est"
      },
      {
        "stateID": "6",
        "state": "Nord-Ouest"
      },
      {
        "stateID": "7",
        "state": "Ouest"
      },
      {
        "stateID": "8",
        "state": "Sud"
      },
      {
        "stateID": "9",
        "state": "Sud-Est"
      }
    ],
    "Heard Island and McDonald Islands": [
      {
        "stateID": "1",
        "state": "Heard Island and McDonald Islands"
      }
    ],
    "Holy See (Vatican City)": [
      {
        "stateID": "1",
        "state": "Holy See (Vatican City)"
      }
    ],
    "Honduras": [
      {
        "stateID": "1",
        "state": "Atlantida"
      },
      {
        "stateID": "2",
        "state": "Choluteca"
      },
      {
        "stateID": "3",
        "state": "Colon"
      },
      {
        "stateID": "4",
        "state": "Comayagua"
      },
      {
        "stateID": "5",
        "state": "Copan"
      },
      {
        "stateID": "6",
        "state": "Cortes"
      },
      {
        "stateID": "7",
        "state": "El Paraiso"
      },
      {
        "stateID": "8",
        "state": "Francisco Morazan"
      },
      {
        "stateID": "9",
        "state": "Gracias a Dios"
      },
      {
        "stateID": "10",
        "state": "Intibuca"
      },
      {
        "stateID": "11",
        "state": "Islas de la Bahia"
      },
      {
        "stateID": "12",
        "state": "La Paz"
      },
      {
        "stateID": "13",
        "state": "Lempira"
      },
      {
        "stateID": "14",
        "state": "Ocotepeque"
      },
      {
        "stateID": "15",
        "state": "Olancho"
      },
      {
        "stateID": "16",
        "state": "Santa Barbara"
      },
      {
        "stateID": "17",
        "state": "Valle"
      },
      {
        "stateID": "18",
        "state": "Yoro"
      }
    ],
    "Hong Kong": [
      {
        "stateID": "1",
        "state": "Hong Kong"
      }
    ],
    "Howland Island": [
      {
        "stateID": "1",
        "state": "Howland Island"
      }
    ],
    "Hungary": [
      {
        "stateID": "1",
        "state": "Bacs-Kiskun"
      },
      {
        "stateID": "2",
        "state": "Baranya"
      },
      {
        "stateID": "3",
        "state": "Bekes"
      },
      {
        "stateID": "4",
        "state": "Bekescsaba"
      },
      {
        "stateID": "5",
        "state": "Borsod-Abauj-Zemplen"
      },
      {
        "stateID": "6",
        "state": "Budapest"
      },
      {
        "stateID": "7",
        "state": "Csongrad"
      },
      {
        "stateID": "8",
        "state": "Debrecen"
      },
      {
        "stateID": "9",
        "state": "Dunaujvaros"
      },
      {
        "stateID": "10",
        "state": "Eger"
      },
      {
        "stateID": "11",
        "state": "Fejer"
      },
      {
        "stateID": "12",
        "state": "Gyor"
      },
      {
        "stateID": "13",
        "state": "Gyor-Moson-Sopron"
      },
      {
        "stateID": "14",
        "state": "Hajdu-Bihar"
      },
      {
        "stateID": "15",
        "state": "Heves"
      },
      {
        "stateID": "16",
        "state": "Hodmezovasarhely"
      },
      {
        "stateID": "17",
        "state": "Jasz-Nagykun-Szolnok"
      },
      {
        "stateID": "18",
        "state": "Kaposvar"
      },
      {
        "stateID": "19",
        "state": "Kecskemet"
      },
      {
        "stateID": "20",
        "state": "Komarom-Esztergom"
      },
      {
        "stateID": "21",
        "state": "Miskolc"
      },
      {
        "stateID": "22",
        "state": "Nagykanizsa"
      },
      {
        "stateID": "23",
        "state": "Nograd"
      },
      {
        "stateID": "24",
        "state": "Nyiregyhaza"
      },
      {
        "stateID": "25",
        "state": "Pecs"
      },
      {
        "stateID": "26",
        "state": "Pest"
      },
      {
        "stateID": "27",
        "state": "Somogy"
      },
      {
        "stateID": "28",
        "state": "Sopron"
      },
      {
        "stateID": "29",
        "state": "Szabolcs-Szatmar-Bereg"
      },
      {
        "stateID": "30",
        "state": "Szeged"
      },
      {
        "stateID": "31",
        "state": "Szekesfehervar"
      },
      {
        "stateID": "32",
        "state": "Szolnok"
      },
      {
        "stateID": "33",
        "state": "Szombathely"
      },
      {
        "stateID": "34",
        "state": "Tatabanya"
      },
      {
        "stateID": "35",
        "state": "Tolna"
      },
      {
        "stateID": "36",
        "state": "Vas"
      },
      {
        "stateID": "37",
        "state": "Veszprem"
      },
      {
        "stateID": "38",
        "state": "Veszprem"
      },
      {
        "stateID": "39",
        "state": "Zala"
      },
      {
        "stateID": "40",
        "state": "Zalaegerszeg"
      }
    ],
    "Iceland": [
      {
        "stateID": "1",
        "state": "Akranes"
      },
      {
        "stateID": "2",
        "state": "Akureyri"
      },
      {
        "stateID": "3",
        "state": "Arnessysla"
      },
      {
        "stateID": "4",
        "state": "Austur-Bardhastrandarsysla"
      },
      {
        "stateID": "5",
        "state": "Austur-Hunavatnssysla"
      },
      {
        "stateID": "6",
        "state": "Austur-Skaftafellssysla"
      },
      {
        "stateID": "7",
        "state": "Borgarfjardharsysla"
      },
      {
        "stateID": "8",
        "state": "Dalasysla"
      },
      {
        "stateID": "9",
        "state": "Eyjafjardharsysla"
      },
      {
        "stateID": "10",
        "state": "Gullbringusysla"
      },
      {
        "stateID": "11",
        "state": "Hafnarfjordhur"
      },
      {
        "stateID": "12",
        "state": "Husavik"
      },
      {
        "stateID": "13",
        "state": "Isafjordhur"
      },
      {
        "stateID": "14",
        "state": "Keflavik"
      },
      {
        "stateID": "15",
        "state": "Kjosarsysla"
      },
      {
        "stateID": "16",
        "state": "Kopavogur"
      },
      {
        "stateID": "17",
        "state": "Myrasysla"
      },
      {
        "stateID": "18",
        "state": "Neskaupstadhur"
      },
      {
        "stateID": "19",
        "state": "Nordhur-Isafjardharsysla"
      },
      {
        "stateID": "20",
        "state": "Nordhur-Mulasys-la"
      },
      {
        "stateID": "21",
        "state": "Nordhur-Thingeyjarsysla"
      },
      {
        "stateID": "22",
        "state": "Olafsfjordhur"
      },
      {
        "stateID": "23",
        "state": "Rangarvallasysla"
      },
      {
        "stateID": "24",
        "state": "Reykjavik"
      },
      {
        "stateID": "25",
        "state": "Saudharkrokur"
      },
      {
        "stateID": "26",
        "state": "Seydhisfjordhur"
      },
      {
        "stateID": "27",
        "state": "Siglufjordhur"
      },
      {
        "stateID": "28",
        "state": "Skagafjardharsysla"
      },
      {
        "stateID": "29",
        "state": "Snaefellsnes-og Hnappadalssysla"
      },
      {
        "stateID": "30",
        "state": "Strandasysla"
      },
      {
        "stateID": "31",
        "state": "Sudhur-Mulasysla"
      },
      {
        "stateID": "32",
        "state": "Sudhur-Thingeyjarsysla"
      },
      {
        "stateID": "33",
        "state": "Vesttmannaeyjar"
      },
      {
        "stateID": "34",
        "state": "Vestur-Bardhastrandarsysla"
      },
      {
        "stateID": "35",
        "state": "Vestur-Hunavatnssysla"
      },
      {
        "stateID": "36",
        "state": "Vestur-Isafjardharsysla"
      },
      {
        "stateID": "37",
        "state": "Vestur-Skaftafellssysla"
      }
    ],
    "India": [
      {
        "stateID": "1",
        "state": "Andaman and Nicobar Islands"
      },
      {
        "stateID": "2",
        "state": "Andhra Pradesh"
      },
      {
        "stateID": "3",
        "state": "Arunachal Pradesh"
      },
      {
        "stateID": "4",
        "state": "Assam"
      },
      {
        "stateID": "5",
        "state": "Bihar"
      },
      {
        "stateID": "6",
        "state": "Chandigarh"
      },
      {
        "stateID": "7",
        "state": "Chhattisgarh"
      },
      {
        "stateID": "8",
        "state": "Dadra and Nagar Haveli"
      },
      {
        "stateID": "9",
        "state": "Daman and Diu"
      },
      {
        "stateID": "10",
        "state": "Delhi"
      },
      {
        "stateID": "11",
        "state": "Goa"
      },
      {
        "stateID": "12",
        "state": "Gujarat"
      },
      {
        "stateID": "13",
        "state": "Haryana"
      },
      {
        "stateID": "14",
        "state": "Himachal Pradesh"
      },
      {
        "stateID": "15",
        "state": "Jammu and Kashmir"
      },
      {
        "stateID": "16",
        "state": "Jharkhand"
      },
      {
        "stateID": "17",
        "state": "Karnataka"
      },
      {
        "stateID": "18",
        "state": "Kerala"
      },
      {
        "stateID": "19",
        "state": "Lakshadweep"
      },
      {
        "stateID": "20",
        "state": "Madhya Pradesh"
      },
      {
        "stateID": "21",
        "state": "Maharashtra"
      },
      {
        "stateID": "22",
        "state": "Manipur"
      },
      {
        "stateID": "23",
        "state": "Meghalaya"
      },
      {
        "stateID": "24",
        "state": "Mizoram"
      },
      {
        "stateID": "25",
        "state": "Nagaland"
      },
      {
        "stateID": "26",
        "state": "Orissa"
      },
      {
        "stateID": "27",
        "state": "Pondicherry"
      },
      {
        "stateID": "28",
        "state": "Punjab"
      },
      {
        "stateID": "29",
        "state": "Rajasthan"
      },
      {
        "stateID": "30",
        "state": "Sikkim"
      },
      {
        "stateID": "31",
        "state": "Tamil Nadu"
      },
      {
        "stateID": "32",
        "state": "Tripura"
      },
      {
        "stateID": "33",
        "state": "Uttar Pradesh"
      },
      {
        "stateID": "34",
        "state": "Uttaranchal"
      },
      {
        "stateID": "35",
        "state": "West Bengal"
      }
    ],
    "Indonesia": [
      {
        "stateID": "1",
        "state": "Aceh"
      },
      {
        "stateID": "2",
        "state": "Bali"
      },
      {
        "stateID": "3",
        "state": "Banten"
      },
      {
        "stateID": "4",
        "state": "Bengkulu"
      },
      {
        "stateID": "5",
        "state": "East Timor"
      },
      {
        "stateID": "6",
        "state": "Gorontalo"
      },
      {
        "stateID": "7",
        "state": "Irian Jaya"
      },
      {
        "stateID": "8",
        "state": "Jakarta Raya"
      },
      {
        "stateID": "9",
        "state": "Jambi"
      },
      {
        "stateID": "10",
        "state": "Jawa Barat"
      },
      {
        "stateID": "11",
        "state": "Jawa Tengah"
      },
      {
        "stateID": "12",
        "state": "Jawa Timur"
      },
      {
        "stateID": "13",
        "state": "Kalimantan Barat"
      },
      {
        "stateID": "14",
        "state": "Kalimantan Selatan"
      },
      {
        "stateID": "15",
        "state": "Kalimantan Tengah"
      },
      {
        "stateID": "16",
        "state": "Kalimantan Timur"
      },
      {
        "stateID": "17",
        "state": "Kepulauan Bangka Belitung"
      },
      {
        "stateID": "18",
        "state": "Lampung"
      },
      {
        "stateID": "19",
        "state": "Maluku"
      },
      {
        "stateID": "20",
        "state": "Maluku Utara"
      },
      {
        "stateID": "21",
        "state": "Nusa Tenggara Barat"
      },
      {
        "stateID": "22",
        "state": "Nusa Tenggara Timur"
      },
      {
        "stateID": "23",
        "state": "Riau"
      },
      {
        "stateID": "24",
        "state": "Sulawesi Selatan"
      },
      {
        "stateID": "25",
        "state": "Sulawesi Tengah"
      },
      {
        "stateID": "26",
        "state": "Sulawesi Tenggara"
      },
      {
        "stateID": "27",
        "state": "Sulawesi Utara"
      },
      {
        "stateID": "28",
        "state": "Sumatera Barat"
      },
      {
        "stateID": "29",
        "state": "Sumatera Selatan"
      },
      {
        "stateID": "30",
        "state": "Sumatera Utara"
      },
      {
        "stateID": "31",
        "state": "Yogyakarta"
      }
    ],
    "Iran": [
      {
        "stateID": "1",
        "state": "Ardabil"
      },
      {
        "stateID": "2",
        "state": "Azarbayjan-e Gharbi"
      },
      {
        "stateID": "3",
        "state": "Azarbayjan-e Sharqi"
      },
      {
        "stateID": "4",
        "state": "Bushehr"
      },
      {
        "stateID": "5",
        "state": "Chahar Mahall va Bakhtiari"
      },
      {
        "stateID": "6",
        "state": "Esfahan"
      },
      {
        "stateID": "7",
        "state": "Fars"
      },
      {
        "stateID": "8",
        "state": "Gilan"
      },
      {
        "stateID": "9",
        "state": "Golestan"
      },
      {
        "stateID": "10",
        "state": "Hamadan"
      },
      {
        "stateID": "11",
        "state": "Hormozgan"
      },
      {
        "stateID": "12",
        "state": "Ilam"
      },
      {
        "stateID": "13",
        "state": "Kerman"
      },
      {
        "stateID": "14",
        "state": "Kermanshah"
      },
      {
        "stateID": "15",
        "state": "Khorasan"
      },
      {
        "stateID": "16",
        "state": "Khuzestan"
      },
      {
        "stateID": "17",
        "state": "Kohgiluyeh va Buyer Ahmad"
      },
      {
        "stateID": "18",
        "state": "Kordestan"
      },
      {
        "stateID": "19",
        "state": "Lorestan"
      },
      {
        "stateID": "20",
        "state": "Markazi"
      },
      {
        "stateID": "21",
        "state": "Mazandaran"
      },
      {
        "stateID": "22",
        "state": "Qazvin"
      },
      {
        "stateID": "23",
        "state": "Qom"
      },
      {
        "stateID": "24",
        "state": "Semnan"
      },
      {
        "stateID": "25",
        "state": "Sistan va Baluchestan"
      },
      {
        "stateID": "26",
        "state": "Tehran"
      },
      {
        "stateID": "27",
        "state": "Yazd"
      },
      {
        "stateID": "28",
        "state": "Zanjan"
      }
    ],
    "Iraq": [
      {
        "stateID": "1",
        "state": "Al Anbar"
      },
      {
        "stateID": "2",
        "state": "Al Basrah"
      },
      {
        "stateID": "3",
        "state": "Al Muthanna"
      },
      {
        "stateID": "4",
        "state": "Al Qadisiyah"
      },
      {
        "stateID": "5",
        "state": "An Najaf"
      },
      {
        "stateID": "6",
        "state": "Arbil"
      },
      {
        "stateID": "7",
        "state": "As Sulaymaniyah"
      },
      {
        "stateID": "8",
        "state": "At Ta'mim"
      },
      {
        "stateID": "9",
        "state": "Babil"
      },
      {
        "stateID": "10",
        "state": "Baghdad"
      },
      {
        "stateID": "11",
        "state": "Dahuk"
      },
      {
        "stateID": "12",
        "state": "Dhi Qar"
      },
      {
        "stateID": "13",
        "state": "Diyala"
      },
      {
        "stateID": "14",
        "state": "Karbala'"
      },
      {
        "stateID": "15",
        "state": "Maysan"
      },
      {
        "stateID": "16",
        "state": "Ninawa"
      },
      {
        "stateID": "17",
        "state": "Salah ad Din"
      },
      {
        "stateID": "18",
        "state": "Wasit"
      }
    ],
    "Ireland": [
      {
        "stateID": "1",
        "state": "Carlow"
      },
      {
        "stateID": "2",
        "state": "Cavan"
      },
      {
        "stateID": "3",
        "state": "Clare"
      },
      {
        "stateID": "4",
        "state": "Cork"
      },
      {
        "stateID": "5",
        "state": "Donegal"
      },
      {
        "stateID": "6",
        "state": "Dublin"
      },
      {
        "stateID": "7",
        "state": "Galway"
      },
      {
        "stateID": "8",
        "state": "Kerry"
      },
      {
        "stateID": "9",
        "state": "Kildare"
      },
      {
        "stateID": "10",
        "state": "Kilkenny"
      },
      {
        "stateID": "11",
        "state": "Laois"
      },
      {
        "stateID": "12",
        "state": "Leitrim"
      },
      {
        "stateID": "13",
        "state": "Limerick"
      },
      {
        "stateID": "14",
        "state": "Longford"
      },
      {
        "stateID": "15",
        "state": "Louth"
      },
      {
        "stateID": "16",
        "state": "Mayo"
      },
      {
        "stateID": "17",
        "state": "Meath"
      },
      {
        "stateID": "18",
        "state": "Monaghan"
      },
      {
        "stateID": "19",
        "state": "Offaly"
      },
      {
        "stateID": "20",
        "state": "Roscommon"
      },
      {
        "stateID": "21",
        "state": "Sligo"
      },
      {
        "stateID": "22",
        "state": "Tipperary"
      },
      {
        "stateID": "23",
        "state": "Waterford"
      },
      {
        "stateID": "24",
        "state": "Westmeath"
      },
      {
        "stateID": "25",
        "state": "Wexford"
      },
      {
        "stateID": "26",
        "state": "Wicklow"
      }
    ],
    "Ireland, Northern": [
      {
        "stateID": "1",
        "state": "Antrim"
      },
      {
        "stateID": "2",
        "state": "Ards"
      },
      {
        "stateID": "3",
        "state": "Armagh"
      },
      {
        "stateID": "4",
        "state": "Ballymena"
      },
      {
        "stateID": "5",
        "state": "Ballymoney"
      },
      {
        "stateID": "6",
        "state": "Banbridge"
      },
      {
        "stateID": "7",
        "state": "Belfast"
      },
      {
        "stateID": "8",
        "state": "Carrickfergus"
      },
      {
        "stateID": "9",
        "state": "Castlereagh"
      },
      {
        "stateID": "10",
        "state": "Coleraine"
      },
      {
        "stateID": "11",
        "state": "Cookstown"
      },
      {
        "stateID": "12",
        "state": "Craigavon"
      },
      {
        "stateID": "13",
        "state": "Derry"
      },
      {
        "stateID": "14",
        "state": "Down"
      },
      {
        "stateID": "15",
        "state": "Dungannon"
      },
      {
        "stateID": "16",
        "state": "Fermanagh"
      },
      {
        "stateID": "17",
        "state": "Larne"
      },
      {
        "stateID": "18",
        "state": "Limavady"
      },
      {
        "stateID": "19",
        "state": "Lisburn"
      },
      {
        "stateID": "20",
        "state": "Magherafelt"
      },
      {
        "stateID": "21",
        "state": "Moyle"
      },
      {
        "stateID": "22",
        "state": "Newry and Mourne"
      },
      {
        "stateID": "23",
        "state": "Newtownabbey"
      },
      {
        "stateID": "24",
        "state": "North Down"
      },
      {
        "stateID": "25",
        "state": "Omagh"
      },
      {
        "stateID": "26",
        "state": "Strabane"
      }
    ],
    "Israel": [
      {
        "stateID": "1",
        "state": "Central"
      },
      {
        "stateID": "2",
        "state": "Haifa"
      },
      {
        "stateID": "3",
        "state": "Jerusalem"
      },
      {
        "stateID": "4",
        "state": "Northern"
      },
      {
        "stateID": "5",
        "state": "Southern"
      },
      {
        "stateID": "6",
        "state": "Tel Aviv"
      }
    ],
    "Italy": [
      {
        "stateID": "1",
        "state": "Abruzzo"
      },
      {
        "stateID": "2",
        "state": "Basilicata"
      },
      {
        "stateID": "3",
        "state": "Calabria"
      },
      {
        "stateID": "4",
        "state": "Campania"
      },
      {
        "stateID": "5",
        "state": "Emilia-Romagna"
      },
      {
        "stateID": "6",
        "state": "Friuli-Venezia Giulia"
      },
      {
        "stateID": "7",
        "state": "Lazio"
      },
      {
        "stateID": "8",
        "state": "Liguria"
      },
      {
        "stateID": "9",
        "state": "Lombardia"
      },
      {
        "stateID": "10",
        "state": "Marche"
      },
      {
        "stateID": "11",
        "state": "Molise"
      },
      {
        "stateID": "12",
        "state": "Piemonte"
      },
      {
        "stateID": "13",
        "state": "Puglia"
      },
      {
        "stateID": "14",
        "state": "Sardegna"
      },
      {
        "stateID": "15",
        "state": "Sicilia"
      },
      {
        "stateID": "16",
        "state": "Toscana"
      },
      {
        "stateID": "17",
        "state": "Trentino-Alto Adige"
      },
      {
        "stateID": "18",
        "state": "Umbria"
      },
      {
        "stateID": "19",
        "state": "Valle d'Aosta"
      },
      {
        "stateID": "20",
        "state": "Veneto"
      }
    ],
    "Jamaica": [
      {
        "stateID": "1",
        "state": "Clarendon"
      },
      {
        "stateID": "2",
        "state": "Hanover"
      },
      {
        "stateID": "3",
        "state": "Kingston"
      },
      {
        "stateID": "4",
        "state": "Manchester"
      },
      {
        "stateID": "5",
        "state": "Portland"
      },
      {
        "stateID": "6",
        "state": "Saint Andrew"
      },
      {
        "stateID": "7",
        "state": "Saint Ann"
      },
      {
        "stateID": "8",
        "state": "Saint Catherine"
      },
      {
        "stateID": "9",
        "state": "Saint Elizabeth"
      },
      {
        "stateID": "10",
        "state": "Saint James"
      },
      {
        "stateID": "11",
        "state": "Saint Mary"
      },
      {
        "stateID": "12",
        "state": "Saint Thomas"
      },
      {
        "stateID": "13",
        "state": "Trelawny"
      },
      {
        "stateID": "14",
        "state": "Westmoreland"
      }
    ],
    "Jan Mayen": [
      {
        "stateID": "1",
        "state": "Jan Mayen"
      }
    ],
    "Japan": [
      {
        "stateID": "1",
        "state": "Aichi"
      },
      {
        "stateID": "2",
        "state": "Akita"
      },
      {
        "stateID": "3",
        "state": "Aomori"
      },
      {
        "stateID": "4",
        "state": "Chiba"
      },
      {
        "stateID": "5",
        "state": "Ehime"
      },
      {
        "stateID": "6",
        "state": "Fukui"
      },
      {
        "stateID": "7",
        "state": "Fukuoka"
      },
      {
        "stateID": "8",
        "state": "Fukushima"
      },
      {
        "stateID": "9",
        "state": "Gifu"
      },
      {
        "stateID": "10",
        "state": "Gumma"
      },
      {
        "stateID": "11",
        "state": "Hiroshima"
      },
      {
        "stateID": "12",
        "state": "Hokkaido"
      },
      {
        "stateID": "13",
        "state": "Hyogo"
      },
      {
        "stateID": "14",
        "state": "Ibaraki"
      },
      {
        "stateID": "15",
        "state": "Ishikawa"
      },
      {
        "stateID": "16",
        "state": "Iwate"
      },
      {
        "stateID": "17",
        "state": "Kagawa"
      },
      {
        "stateID": "18",
        "state": "Kagoshima"
      },
      {
        "stateID": "19",
        "state": "Kanagawa"
      },
      {
        "stateID": "20",
        "state": "Kochi"
      },
      {
        "stateID": "21",
        "state": "Kumamoto"
      },
      {
        "stateID": "22",
        "state": "Kyoto"
      },
      {
        "stateID": "23",
        "state": "Mie"
      },
      {
        "stateID": "24",
        "state": "Miyagi"
      },
      {
        "stateID": "25",
        "state": "Miyazaki"
      },
      {
        "stateID": "26",
        "state": "Nagano"
      },
      {
        "stateID": "27",
        "state": "Nagasaki"
      },
      {
        "stateID": "28",
        "state": "Nara"
      },
      {
        "stateID": "29",
        "state": "Niigata"
      },
      {
        "stateID": "30",
        "state": "Oita"
      },
      {
        "stateID": "31",
        "state": "Okayama"
      },
      {
        "stateID": "32",
        "state": "Okinawa"
      },
      {
        "stateID": "33",
        "state": "Osaka"
      },
      {
        "stateID": "34",
        "state": "Saga"
      },
      {
        "stateID": "35",
        "state": "Saitama"
      },
      {
        "stateID": "36",
        "state": "Shiga"
      },
      {
        "stateID": "37",
        "state": "Shimane"
      },
      {
        "stateID": "38",
        "state": "Shizuoka"
      },
      {
        "stateID": "39",
        "state": "Tochigi"
      },
      {
        "stateID": "40",
        "state": "Tokushima"
      },
      {
        "stateID": "41",
        "state": "Tokyo"
      },
      {
        "stateID": "42",
        "state": "Tottori"
      },
      {
        "stateID": "43",
        "state": "Toyama"
      },
      {
        "stateID": "44",
        "state": "Wakayama"
      },
      {
        "stateID": "45",
        "state": "Yamagata"
      },
      {
        "stateID": "46",
        "state": "Yamaguchi"
      },
      {
        "stateID": "47",
        "state": "Yamanashi"
      }
    ],
    "Jarvis Island": [
      {
        "stateID": "1",
        "state": "Jarvis Island"
      }
    ],
    "Jersey": [
      {
        "stateID": "1",
        "state": "Jersey"
      }
    ],
    "Johnston Atoll": [
      {
        "stateID": "1",
        "state": "Johnston Atoll"
      }
    ],
    "Jordan": [
      {
        "stateID": "1",
        "state": "'Amman"
      },
      {
        "stateID": "2",
        "state": "Ajlun"
      },
      {
        "stateID": "3",
        "state": "Al 'Aqabah"
      },
      {
        "stateID": "4",
        "state": "Al Balqa'"
      },
      {
        "stateID": "5",
        "state": "Al Karak"
      },
      {
        "stateID": "6",
        "state": "Al Mafraq"
      },
      {
        "stateID": "7",
        "state": "At Tafilah"
      },
      {
        "stateID": "8",
        "state": "Az Zarqa'"
      },
      {
        "stateID": "9",
        "state": "Irbid"
      },
      {
        "stateID": "10",
        "state": "Jarash"
      },
      {
        "stateID": "11",
        "state": "Ma'an"
      },
      {
        "stateID": "12",
        "state": "Madaba"
      }
    ],
    "Juan de Nova Island": [
      {
        "stateID": "1",
        "state": "Juan de Nova Island"
      }
    ],
    "Kazakhstan": [
      {
        "stateID": "1",
        "state": "Almaty"
      },
      {
        "stateID": "2",
        "state": "Aqmola"
      },
      {
        "stateID": "3",
        "state": "Aqtobe"
      },
      {
        "stateID": "4",
        "state": "Astana"
      },
      {
        "stateID": "5",
        "state": "Atyrau"
      },
      {
        "stateID": "6",
        "state": "Batys Qazaqstan"
      },
      {
        "stateID": "7",
        "state": "Bayqongyr"
      },
      {
        "stateID": "8",
        "state": "Mangghystau"
      },
      {
        "stateID": "9",
        "state": "Ongtustik Qazaqstan"
      },
      {
        "stateID": "10",
        "state": "Pavlodar"
      },
      {
        "stateID": "11",
        "state": "Qaraghandy"
      },
      {
        "stateID": "12",
        "state": "Qostanay"
      },
      {
        "stateID": "13",
        "state": "Qyzylorda"
      },
      {
        "stateID": "14",
        "state": "Shyghys Qazaqstan"
      },
      {
        "stateID": "15",
        "state": "Soltustik Qazaqstan"
      },
      {
        "stateID": "16",
        "state": "Zhambyl"
      }
    ],
    "Kenya": [
      {
        "stateID": "1",
        "state": "Central"
      },
      {
        "stateID": "2",
        "state": "Coast"
      },
      {
        "stateID": "3",
        "state": "Eastern"
      },
      {
        "stateID": "4",
        "state": "Nairobi Area"
      },
      {
        "stateID": "5",
        "state": "North Eastern"
      },
      {
        "stateID": "6",
        "state": "Nyanza"
      },
      {
        "stateID": "7",
        "state": "Rift Valley"
      },
      {
        "stateID": "8",
        "state": "Western"
      }
    ],
    "Kiribati": [
      {
        "stateID": "1",
        "state": "Abaiang"
      },
      {
        "stateID": "2",
        "state": "Abemama"
      },
      {
        "stateID": "3",
        "state": "Aranuka"
      },
      {
        "stateID": "4",
        "state": "Arorae"
      },
      {
        "stateID": "5",
        "state": "Banaba"
      },
      {
        "stateID": "6",
        "state": "Banaba"
      },
      {
        "stateID": "7",
        "state": "Beru"
      },
      {
        "stateID": "8",
        "state": "Butaritari"
      },
      {
        "stateID": "9",
        "state": "Central Gilberts"
      },
      {
        "stateID": "10",
        "state": "Gilbert Islands"
      },
      {
        "stateID": "11",
        "state": "Kanton"
      },
      {
        "stateID": "12",
        "state": "Kiritimati"
      },
      {
        "stateID": "13",
        "state": "Kuria"
      },
      {
        "stateID": "14",
        "state": "Line Islands"
      },
      {
        "stateID": "15",
        "state": "Line Islands"
      },
      {
        "stateID": "16",
        "state": "Maiana"
      },
      {
        "stateID": "17",
        "state": "Makin"
      },
      {
        "stateID": "18",
        "state": "Marakei"
      },
      {
        "stateID": "19",
        "state": "Nikunau"
      },
      {
        "stateID": "20",
        "state": "Nonouti"
      },
      {
        "stateID": "21",
        "state": "Northern Gilberts"
      },
      {
        "stateID": "22",
        "state": "Onotoa"
      },
      {
        "stateID": "23",
        "state": "Phoenix Islands"
      },
      {
        "stateID": "24",
        "state": "Southern Gilberts"
      },
      {
        "stateID": "25",
        "state": "Tabiteuea"
      },
      {
        "stateID": "26",
        "state": "Tabuaeran"
      },
      {
        "stateID": "27",
        "state": "Tamana"
      },
      {
        "stateID": "28",
        "state": "Tarawa"
      },
      {
        "stateID": "29",
        "state": "Tarawa"
      },
      {
        "stateID": "30",
        "state": "Teraina"
      }
    ],
    "Korea, North": [
      {
        "stateID": "1",
        "state": "Chagang-do (Chagang Province)"
      },
      {
        "stateID": "2",
        "state": "Hamgyong-bukto (North Hamgyong Province)"
      },
      {
        "stateID": "3",
        "state": "Hamgyong-namdo (South Hamgyong Province)"
      },
      {
        "stateID": "4",
        "state": "Hwanghae-bukto (North Hwanghae Province)"
      },
      {
        "stateID": "5",
        "state": "Hwanghae-namdo (South Hwanghae Province)"
      },
      {
        "stateID": "6",
        "state": "Kaesong-si (Kaesong City)"
      },
      {
        "stateID": "7",
        "state": "Kangwon-do (Kangwon Province)"
      },
      {
        "stateID": "8",
        "state": "Namp'o-si (Namp'o City)"
      },
      {
        "stateID": "9",
        "state": "P'yongan-bukto (North P'yongan Province)"
      },
      {
        "stateID": "10",
        "state": "P'yongan-namdo (South P'yongan Province)"
      },
      {
        "stateID": "11",
        "state": "P'yongyang-si (P'yongyang City)"
      },
      {
        "stateID": "12",
        "state": "Yanggang-do (Yanggang Province)"
      }
    ],
    "Korea, South": [
      {
        "stateID": "1",
        "state": "Ch'ungch'ong-bukto"
      },
      {
        "stateID": "2",
        "state": "Ch'ungch'ong-namdo"
      },
      {
        "stateID": "3",
        "state": "Cheju-do"
      },
      {
        "stateID": "4",
        "state": "Cholla-bukto"
      },
      {
        "stateID": "5",
        "state": "Cholla-namdo"
      },
      {
        "stateID": "6",
        "state": "Inch'on-gwangyoksi"
      },
      {
        "stateID": "7",
        "state": "Kangwon-do"
      },
      {
        "stateID": "8",
        "state": "Kwangju-gwangyoksi"
      },
      {
        "stateID": "9",
        "state": "Kyonggi-do"
      },
      {
        "stateID": "10",
        "state": "Kyongsang-bukto"
      },
      {
        "stateID": "11",
        "state": "Kyongsang-namdo"
      },
      {
        "stateID": "12",
        "state": "Pusan-gwangyoksi"
      },
      {
        "stateID": "13",
        "state": "Soul-t'ukpyolsi"
      },
      {
        "stateID": "14",
        "state": "Taegu-gwangyoksi"
      },
      {
        "stateID": "15",
        "state": "Taejon-gwangyoksi"
      },
      {
        "stateID": "16",
        "state": "Ulsan-gwangyoksi"
      }
    ],
    "Kuwait": [
      {
        "stateID": "1",
        "state": "Al 'Asimah"
      },
      {
        "stateID": "2",
        "state": "Al Ahmadi"
      },
      {
        "stateID": "3",
        "state": "Al Farwaniyah"
      },
      {
        "stateID": "4",
        "state": "Al Jahra'"
      },
      {
        "stateID": "5",
        "state": "Hawalli"
      }
    ],
    "Kyrgyzstan": [
      {
        "stateID": "1",
        "state": "Batken Oblasty"
      },
      {
        "stateID": "2",
        "state": "Bishkek Shaary"
      },
      {
        "stateID": "3",
        "state": "Chuy Oblasty (Bishkek)"
      },
      {
        "stateID": "4",
        "state": "Jalal-Abad Oblasty"
      },
      {
        "stateID": "5",
        "state": "Naryn Oblasty"
      },
      {
        "stateID": "6",
        "state": "Osh Oblasty"
      },
      {
        "stateID": "7",
        "state": "Talas Oblasty"
      },
      {
        "stateID": "8",
        "state": "Ysyk-Kol Oblasty (Karakol)"
      }
    ],
    "Laos": [
      {
        "stateID": "1",
        "state": "Attapu"
      },
      {
        "stateID": "2",
        "state": "Bokeo"
      },
      {
        "stateID": "3",
        "state": "Bolikhamxai"
      },
      {
        "stateID": "4",
        "state": "Champasak"
      },
      {
        "stateID": "5",
        "state": "Houaphan"
      },
      {
        "stateID": "6",
        "state": "Khammouan"
      },
      {
        "stateID": "7",
        "state": "Louangnamtha"
      },
      {
        "stateID": "8",
        "state": "Louangphabang"
      },
      {
        "stateID": "9",
        "state": "Oudomxai"
      },
      {
        "stateID": "10",
        "state": "Phongsali"
      },
      {
        "stateID": "11",
        "state": "Salavan"
      },
      {
        "stateID": "12",
        "state": "Savannakhet"
      },
      {
        "stateID": "13",
        "state": "Viangchan"
      },
      {
        "stateID": "14",
        "state": "Viangchan"
      },
      {
        "stateID": "15",
        "state": "Xaignabouli"
      },
      {
        "stateID": "16",
        "state": "Xaisomboun"
      },
      {
        "stateID": "17",
        "state": "Xekong"
      },
      {
        "stateID": "18",
        "state": "Xiangkhoang"
      }
    ],
    "Latvia": [
      {
        "stateID": "1",
        "state": "Aizkraukles Rajons"
      },
      {
        "stateID": "2",
        "state": "Aluksnes Rajons"
      },
      {
        "stateID": "3",
        "state": "Balvu Rajons"
      },
      {
        "stateID": "4",
        "state": "Bauskas Rajons"
      },
      {
        "stateID": "5",
        "state": "Cesu Rajons"
      },
      {
        "stateID": "6",
        "state": "Daugavpils"
      },
      {
        "stateID": "7",
        "state": "Daugavpils Rajons"
      },
      {
        "stateID": "8",
        "state": "Dobeles Rajons"
      },
      {
        "stateID": "9",
        "state": "Gulbenes Rajons"
      },
      {
        "stateID": "10",
        "state": "Jekabpils Rajons"
      },
      {
        "stateID": "11",
        "state": "Jelgava"
      },
      {
        "stateID": "12",
        "state": "Jelgavas Rajons"
      },
      {
        "stateID": "13",
        "state": "Jurmala"
      },
      {
        "stateID": "14",
        "state": "Kraslavas Rajons"
      },
      {
        "stateID": "15",
        "state": "Kuldigas Rajons"
      },
      {
        "stateID": "16",
        "state": "Leipaja"
      },
      {
        "stateID": "17",
        "state": "Liepajas Rajons"
      },
      {
        "stateID": "18",
        "state": "Limbazu Rajons"
      },
      {
        "stateID": "19",
        "state": "Ludzas Rajons"
      },
      {
        "stateID": "20",
        "state": "Madonas Rajons"
      },
      {
        "stateID": "21",
        "state": "Ogres Rajons"
      },
      {
        "stateID": "22",
        "state": "Preilu Rajons"
      },
      {
        "stateID": "23",
        "state": "Rezekne"
      },
      {
        "stateID": "24",
        "state": "Rezeknes Rajons"
      },
      {
        "stateID": "25",
        "state": "Riga"
      },
      {
        "stateID": "26",
        "state": "Rigas Rajons"
      },
      {
        "stateID": "27",
        "state": "Saldus Rajons"
      },
      {
        "stateID": "28",
        "state": "Talsu Rajons"
      },
      {
        "stateID": "29",
        "state": "Tukuma Rajons"
      },
      {
        "stateID": "30",
        "state": "Valkas Rajons"
      },
      {
        "stateID": "31",
        "state": "Valmieras Rajons"
      },
      {
        "stateID": "32",
        "state": "Ventspils"
      },
      {
        "stateID": "33",
        "state": "Ventspils Rajons"
      }
    ],
    "Lebanon": [
      {
        "stateID": "1",
        "state": "Beyrouth"
      },
      {
        "stateID": "2",
        "state": "Ech Chimal"
      },
      {
        "stateID": "3",
        "state": "Ej Jnoub"
      },
      {
        "stateID": "4",
        "state": "El Bekaa"
      },
      {
        "stateID": "5",
        "state": "Jabal Loubnane"
      }
    ],
    "Lesotho": [
      {
        "stateID": "1",
        "state": "Berea"
      },
      {
        "stateID": "2",
        "state": "Butha-Buthe"
      },
      {
        "stateID": "3",
        "state": "Leribe"
      },
      {
        "stateID": "4",
        "state": "Mafeteng"
      },
      {
        "stateID": "5",
        "state": "Maseru"
      },
      {
        "stateID": "6",
        "state": "Mohales Hoek"
      },
      {
        "stateID": "7",
        "state": "Mokhotlong"
      },
      {
        "stateID": "8",
        "state": "Qacha's Nek"
      },
      {
        "stateID": "9",
        "state": "Quthing"
      },
      {
        "stateID": "10",
        "state": "Thaba-Tseka"
      }
    ],
    "Liberia": [
      {
        "stateID": "1",
        "state": "Bomi"
      },
      {
        "stateID": "2",
        "state": "Bong"
      },
      {
        "stateID": "3",
        "state": "Grand Bassa"
      },
      {
        "stateID": "4",
        "state": "Grand Cape Mount"
      },
      {
        "stateID": "5",
        "state": "Grand Gedeh"
      },
      {
        "stateID": "6",
        "state": "Grand Kru"
      },
      {
        "stateID": "7",
        "state": "Lofa"
      },
      {
        "stateID": "8",
        "state": "Margibi"
      },
      {
        "stateID": "9",
        "state": "Maryland"
      },
      {
        "stateID": "10",
        "state": "Montserrado"
      },
      {
        "stateID": "11",
        "state": "Nimba"
      },
      {
        "stateID": "12",
        "state": "River Cess"
      },
      {
        "stateID": "13",
        "state": "Sinoe"
      }
    ],
    "Libya": [
      {
        "stateID": "1",
        "state": "Ajdabiya"
      },
      {
        "stateID": "2",
        "state": "Al 'Aziziyah"
      },
      {
        "stateID": "3",
        "state": "Al Fatih"
      },
      {
        "stateID": "4",
        "state": "Al Jabal al Akhdar"
      },
      {
        "stateID": "5",
        "state": "Al Jufrah"
      },
      {
        "stateID": "6",
        "state": "Al Khums"
      },
      {
        "stateID": "7",
        "state": "Al Kufrah"
      },
      {
        "stateID": "8",
        "state": "An Nuqat al Khams"
      },
      {
        "stateID": "9",
        "state": "Ash Shati'"
      },
      {
        "stateID": "10",
        "state": "Awbari"
      },
      {
        "stateID": "11",
        "state": "Az Zawiyah"
      },
      {
        "stateID": "12",
        "state": "Banghazi"
      },
      {
        "stateID": "13",
        "state": "Darnah"
      },
      {
        "stateID": "14",
        "state": "Ghadamis"
      },
      {
        "stateID": "15",
        "state": "Gharyan"
      },
      {
        "stateID": "16",
        "state": "Misratah"
      },
      {
        "stateID": "17",
        "state": "Murzuq"
      },
      {
        "stateID": "18",
        "state": "Sabha"
      },
      {
        "stateID": "19",
        "state": "Sawfajjin"
      },
      {
        "stateID": "20",
        "state": "Surt"
      },
      {
        "stateID": "21",
        "state": "Tarabulus"
      },
      {
        "stateID": "22",
        "state": "Tarhunah"
      },
      {
        "stateID": "23",
        "state": "Tubruq"
      },
      {
        "stateID": "24",
        "state": "Yafran"
      },
      {
        "stateID": "25",
        "state": "Zlitan"
      }
    ],
    "Liechtenstein": [
      {
        "stateID": "1",
        "state": "Balzers"
      },
      {
        "stateID": "2",
        "state": "Eschen"
      },
      {
        "stateID": "3",
        "state": "Gamprin"
      },
      {
        "stateID": "4",
        "state": "Mauren"
      },
      {
        "stateID": "5",
        "state": "Planken"
      },
      {
        "stateID": "6",
        "state": "Ruggell"
      },
      {
        "stateID": "7",
        "state": "Schaan"
      },
      {
        "stateID": "8",
        "state": "Schellenberg"
      },
      {
        "stateID": "9",
        "state": "Triesen"
      },
      {
        "stateID": "10",
        "state": "Triesenberg"
      },
      {
        "stateID": "11",
        "state": "Vaduz"
      }
    ],
    "Lithuania": [
      {
        "stateID": "1",
        "state": "Akmenes Rajonas"
      },
      {
        "stateID": "2",
        "state": "Alytaus Rajonas"
      },
      {
        "stateID": "3",
        "state": "Alytus"
      },
      {
        "stateID": "4",
        "state": "Anyksciu Rajonas"
      },
      {
        "stateID": "5",
        "state": "Birstonas"
      },
      {
        "stateID": "6",
        "state": "Birzu Rajonas"
      },
      {
        "stateID": "7",
        "state": "Druskininkai"
      },
      {
        "stateID": "8",
        "state": "Ignalinos Rajonas"
      },
      {
        "stateID": "9",
        "state": "Jonavos Rajonas"
      },
      {
        "stateID": "10",
        "state": "Joniskio Rajonas"
      },
      {
        "stateID": "11",
        "state": "Jurbarko Rajonas"
      },
      {
        "stateID": "12",
        "state": "Kaisiadoriu Rajonas"
      },
      {
        "stateID": "13",
        "state": "Kaunas"
      },
      {
        "stateID": "14",
        "state": "Kauno Rajonas"
      },
      {
        "stateID": "15",
        "state": "Kedainiu Rajonas"
      },
      {
        "stateID": "16",
        "state": "Kelmes Rajonas"
      },
      {
        "stateID": "17",
        "state": "Klaipeda"
      },
      {
        "stateID": "18",
        "state": "Klaipedos Rajonas"
      },
      {
        "stateID": "19",
        "state": "Kretingos Rajonas"
      },
      {
        "stateID": "20",
        "state": "Kupiskio Rajonas"
      },
      {
        "stateID": "21",
        "state": "Lazdiju Rajonas"
      },
      {
        "stateID": "22",
        "state": "Marijampole"
      },
      {
        "stateID": "23",
        "state": "Marijampoles Rajonas"
      },
      {
        "stateID": "24",
        "state": "Mazeikiu Rajonas"
      },
      {
        "stateID": "25",
        "state": "Moletu Rajonas"
      },
      {
        "stateID": "26",
        "state": "Neringa Pakruojo Rajonas"
      },
      {
        "stateID": "27",
        "state": "Palanga"
      },
      {
        "stateID": "28",
        "state": "Panevezio Rajonas"
      },
      {
        "stateID": "29",
        "state": "Panevezys"
      },
      {
        "stateID": "30",
        "state": "Pasvalio Rajonas"
      },
      {
        "stateID": "31",
        "state": "Plunges Rajonas"
      },
      {
        "stateID": "32",
        "state": "Prienu Rajonas"
      },
      {
        "stateID": "33",
        "state": "Radviliskio Rajonas"
      },
      {
        "stateID": "34",
        "state": "Raseiniu Rajonas"
      },
      {
        "stateID": "35",
        "state": "Rokiskio Rajonas"
      },
      {
        "stateID": "36",
        "state": "Sakiu Rajonas"
      },
      {
        "stateID": "37",
        "state": "Salcininku Rajonas"
      },
      {
        "stateID": "38",
        "state": "Siauliai"
      },
      {
        "stateID": "39",
        "state": "Siauliu Rajonas"
      },
      {
        "stateID": "40",
        "state": "Silales Rajonas"
      },
      {
        "stateID": "41",
        "state": "Silutes Rajonas"
      },
      {
        "stateID": "42",
        "state": "Sirvintu Rajonas"
      },
      {
        "stateID": "43",
        "state": "Skuodo Rajonas"
      },
      {
        "stateID": "44",
        "state": "Svencioniu Rajonas"
      },
      {
        "stateID": "45",
        "state": "Taurages Rajonas"
      },
      {
        "stateID": "46",
        "state": "Telsiu Rajonas"
      },
      {
        "stateID": "47",
        "state": "Traku Rajonas"
      },
      {
        "stateID": "48",
        "state": "Ukmerges Rajonas"
      },
      {
        "stateID": "49",
        "state": "Utenos Rajonas"
      },
      {
        "stateID": "50",
        "state": "Varenos Rajonas"
      },
      {
        "stateID": "51",
        "state": "Vilkaviskio Rajonas"
      },
      {
        "stateID": "52",
        "state": "Vilniaus Rajonas"
      },
      {
        "stateID": "53",
        "state": "Vilnius"
      },
      {
        "stateID": "54",
        "state": "Zarasu Rajonas"
      }
    ],
    "Luxembourg": [
      {
        "stateID": "1",
        "state": "Diekirch"
      },
      {
        "stateID": "2",
        "state": "Grevenmacher"
      },
      {
        "stateID": "3",
        "state": "Luxembourg"
      }
    ],
    "Macau": [
      {
        "stateID": "1",
        "state": "Macau"
      }
    ],
    "Macedonia, Former Yugoslav Republic of": [
      {
        "stateID": "1",
        "state": "Aracinovo"
      },
      {
        "stateID": "2",
        "state": "Bac"
      },
      {
        "stateID": "3",
        "state": "Belcista"
      },
      {
        "stateID": "4",
        "state": "Berovo"
      },
      {
        "stateID": "5",
        "state": "Bistrica"
      },
      {
        "stateID": "6",
        "state": "Bitola"
      },
      {
        "stateID": "7",
        "state": "Blatec"
      },
      {
        "stateID": "8",
        "state": "Bogdanci"
      },
      {
        "stateID": "9",
        "state": "Bogomila"
      },
      {
        "stateID": "10",
        "state": "Bogovinje"
      },
      {
        "stateID": "11",
        "state": "Bosilovo"
      },
      {
        "stateID": "12",
        "state": "Brvenica"
      },
      {
        "stateID": "13",
        "state": "Cair (Skopje)"
      },
      {
        "stateID": "14",
        "state": "Capari"
      },
      {
        "stateID": "15",
        "state": "Caska"
      },
      {
        "stateID": "16",
        "state": "Cegrane"
      },
      {
        "stateID": "17",
        "state": "Centar (Skopje)"
      },
      {
        "stateID": "18",
        "state": "Centar Zupa"
      },
      {
        "stateID": "19",
        "state": "Cesinovo"
      },
      {
        "stateID": "20",
        "state": "Cucer-Sandevo"
      },
      {
        "stateID": "21",
        "state": "Debar"
      },
      {
        "stateID": "22",
        "state": "Delcevo"
      },
      {
        "stateID": "23",
        "state": "Delogozdi"
      },
      {
        "stateID": "24",
        "state": "Demir Hisar"
      },
      {
        "stateID": "25",
        "state": "Demir Kapija"
      },
      {
        "stateID": "26",
        "state": "Dobrusevo"
      },
      {
        "stateID": "27",
        "state": "Dolna Banjica"
      },
      {
        "stateID": "28",
        "state": "Dolneni"
      },
      {
        "stateID": "29",
        "state": "Dorce Petrov (Skopje)"
      },
      {
        "stateID": "30",
        "state": "Drugovo"
      },
      {
        "stateID": "31",
        "state": "Dzepciste"
      },
      {
        "stateID": "32",
        "state": "Gazi Baba (Skopje)"
      },
      {
        "stateID": "33",
        "state": "Gevgelija"
      },
      {
        "stateID": "34",
        "state": "Gostivar"
      },
      {
        "stateID": "35",
        "state": "Gradsko"
      },
      {
        "stateID": "36",
        "state": "Ilinden"
      },
      {
        "stateID": "37",
        "state": "Izvor"
      },
      {
        "stateID": "38",
        "state": "Jegunovce"
      },
      {
        "stateID": "39",
        "state": "Kamenjane"
      },
      {
        "stateID": "40",
        "state": "Karbinci"
      },
      {
        "stateID": "41",
        "state": "Karpos (Skopje)"
      },
      {
        "stateID": "42",
        "state": "Kavadarci"
      },
      {
        "stateID": "43",
        "state": "Kicevo"
      },
      {
        "stateID": "44",
        "state": "Kisela Voda (Skopje)"
      },
      {
        "stateID": "45",
        "state": "Klecevce"
      },
      {
        "stateID": "46",
        "state": "Kocani"
      },
      {
        "stateID": "47",
        "state": "Konce"
      },
      {
        "stateID": "48",
        "state": "Kondovo"
      },
      {
        "stateID": "49",
        "state": "Konopiste"
      },
      {
        "stateID": "50",
        "state": "Kosel"
      },
      {
        "stateID": "51",
        "state": "Kratovo"
      },
      {
        "stateID": "52",
        "state": "Kriva Palanka"
      },
      {
        "stateID": "53",
        "state": "Krivogastani"
      },
      {
        "stateID": "54",
        "state": "Krusevo"
      },
      {
        "stateID": "55",
        "state": "Kuklis"
      },
      {
        "stateID": "56",
        "state": "Kukurecani"
      },
      {
        "stateID": "57",
        "state": "Kumanovo"
      },
      {
        "stateID": "58",
        "state": "Labunista"
      },
      {
        "stateID": "59",
        "state": "Lipkovo"
      },
      {
        "stateID": "60",
        "state": "Lozovo"
      },
      {
        "stateID": "61",
        "state": "Lukovo"
      },
      {
        "stateID": "62",
        "state": "Makedonska Kamenica"
      },
      {
        "stateID": "63",
        "state": "Makedonski Brod"
      },
      {
        "stateID": "64",
        "state": "Mavrovi Anovi"
      },
      {
        "stateID": "65",
        "state": "Meseista"
      },
      {
        "stateID": "66",
        "state": "Miravci"
      },
      {
        "stateID": "67",
        "state": "Mogila"
      },
      {
        "stateID": "68",
        "state": "Murtino"
      },
      {
        "stateID": "69",
        "state": "Negotino"
      },
      {
        "stateID": "70",
        "state": "Negotino-Poloska"
      },
      {
        "stateID": "71",
        "state": "Novaci"
      },
      {
        "stateID": "72",
        "state": "Novo Selo"
      },
      {
        "stateID": "73",
        "state": "Oblesevo"
      },
      {
        "stateID": "74",
        "state": "Ohrid"
      },
      {
        "stateID": "75",
        "state": "Orasac"
      },
      {
        "stateID": "76",
        "state": "Orizari"
      },
      {
        "stateID": "77",
        "state": "Oslomej"
      },
      {
        "stateID": "78",
        "state": "Pehcevo"
      },
      {
        "stateID": "79",
        "state": "Petrovec"
      },
      {
        "stateID": "80",
        "state": "Plasnia"
      },
      {
        "stateID": "81",
        "state": "Podares"
      },
      {
        "stateID": "82",
        "state": "Prilep"
      },
      {
        "stateID": "83",
        "state": "Probistip"
      },
      {
        "stateID": "84",
        "state": "Radovis"
      },
      {
        "stateID": "85",
        "state": "Rankovce"
      },
      {
        "stateID": "86",
        "state": "Resen"
      },
      {
        "stateID": "87",
        "state": "Rosoman"
      },
      {
        "stateID": "88",
        "state": "Rostusa"
      },
      {
        "stateID": "89",
        "state": "Samokov"
      },
      {
        "stateID": "90",
        "state": "Saraj"
      },
      {
        "stateID": "91",
        "state": "Sipkovica"
      },
      {
        "stateID": "92",
        "state": "Sopiste"
      },
      {
        "stateID": "93",
        "state": "Sopotnika"
      },
      {
        "stateID": "94",
        "state": "Srbinovo"
      },
      {
        "stateID": "95",
        "state": "Star Dojran"
      },
      {
        "stateID": "96",
        "state": "Staravina"
      },
      {
        "stateID": "97",
        "state": "Staro Nagoricane"
      },
      {
        "stateID": "98",
        "state": "Stip"
      },
      {
        "stateID": "99",
        "state": "Struga"
      },
      {
        "stateID": "100",
        "state": "Strumica"
      },
      {
        "stateID": "101",
        "state": "Studenicani"
      },
      {
        "stateID": "102",
        "state": "Suto Orizari (Skopje)"
      },
      {
        "stateID": "103",
        "state": "Sveti Nikole"
      },
      {
        "stateID": "104",
        "state": "Tearce"
      },
      {
        "stateID": "105",
        "state": "Tetovo"
      },
      {
        "stateID": "106",
        "state": "Topolcani"
      },
      {
        "stateID": "107",
        "state": "Valandovo"
      },
      {
        "stateID": "108",
        "state": "Vasilevo"
      },
      {
        "stateID": "109",
        "state": "Veles"
      },
      {
        "stateID": "110",
        "state": "Velesta"
      },
      {
        "stateID": "111",
        "state": "Vevcani"
      },
      {
        "stateID": "112",
        "state": "Vinica"
      },
      {
        "stateID": "113",
        "state": "Vitoliste"
      },
      {
        "stateID": "114",
        "state": "Vranestica"
      },
      {
        "stateID": "115",
        "state": "Vrapciste"
      },
      {
        "stateID": "116",
        "state": "Vratnica"
      },
      {
        "stateID": "117",
        "state": "Vrutok"
      },
      {
        "stateID": "118",
        "state": "Zajas"
      },
      {
        "stateID": "119",
        "state": "Zelenikovo"
      },
      {
        "stateID": "120",
        "state": "Zileno"
      },
      {
        "stateID": "121",
        "state": "Zitose"
      },
      {
        "stateID": "122",
        "state": "Zletovo"
      },
      {
        "stateID": "123",
        "state": "Zrnovci"
      }
    ],
    "Madagascar": [
      {
        "stateID": "1",
        "state": "Antananarivo"
      },
      {
        "stateID": "2",
        "state": "Antsiranana"
      },
      {
        "stateID": "3",
        "state": "Fianarantsoa"
      },
      {
        "stateID": "4",
        "state": "Mahajanga"
      },
      {
        "stateID": "5",
        "state": "Toamasina"
      },
      {
        "stateID": "6",
        "state": "Toliara"
      }
    ],
    "Malawi": [
      {
        "stateID": "1",
        "state": "Balaka"
      },
      {
        "stateID": "2",
        "state": "Blantyre"
      },
      {
        "stateID": "3",
        "state": "Chikwawa"
      },
      {
        "stateID": "4",
        "state": "Chiradzulu"
      },
      {
        "stateID": "5",
        "state": "Chitipa"
      },
      {
        "stateID": "6",
        "state": "Dedza"
      },
      {
        "stateID": "7",
        "state": "Dowa"
      },
      {
        "stateID": "8",
        "state": "Karonga"
      },
      {
        "stateID": "9",
        "state": "Kasungu"
      },
      {
        "stateID": "10",
        "state": "Likoma"
      },
      {
        "stateID": "11",
        "state": "Lilongwe"
      },
      {
        "stateID": "12",
        "state": "Machinga (Kasupe)"
      },
      {
        "stateID": "13",
        "state": "Mangochi"
      },
      {
        "stateID": "14",
        "state": "Mchinji"
      },
      {
        "stateID": "15",
        "state": "Mulanje"
      },
      {
        "stateID": "16",
        "state": "Mwanza"
      },
      {
        "stateID": "17",
        "state": "Mzimba"
      },
      {
        "stateID": "18",
        "state": "Nkhata Bay"
      },
      {
        "stateID": "19",
        "state": "Nkhotakota"
      },
      {
        "stateID": "20",
        "state": "Nsanje"
      },
      {
        "stateID": "21",
        "state": "Ntcheu"
      },
      {
        "stateID": "22",
        "state": "Ntchisi"
      },
      {
        "stateID": "23",
        "state": "Phalombe"
      },
      {
        "stateID": "24",
        "state": "Rumphi"
      },
      {
        "stateID": "25",
        "state": "Salima"
      },
      {
        "stateID": "26",
        "state": "Thyolo"
      },
      {
        "stateID": "27",
        "state": "Zomba"
      }
    ],
    "Malaysia": [
      {
        "stateID": "1",
        "state": "Johor"
      },
      {
        "stateID": "2",
        "state": "Kedah"
      },
      {
        "stateID": "3",
        "state": "Kelantan"
      },
      {
        "stateID": "4",
        "state": "Labuan"
      },
      {
        "stateID": "5",
        "state": "Melaka"
      },
      {
        "stateID": "6",
        "state": "Negeri Sembilan"
      },
      {
        "stateID": "7",
        "state": "Pahang"
      },
      {
        "stateID": "8",
        "state": "Perak"
      },
      {
        "stateID": "9",
        "state": "Perlis"
      },
      {
        "stateID": "10",
        "state": "Pulau Pinang"
      },
      {
        "stateID": "11",
        "state": "Sabah"
      },
      {
        "stateID": "12",
        "state": "Sarawak"
      },
      {
        "stateID": "13",
        "state": "Selangor"
      },
      {
        "stateID": "14",
        "state": "Terengganu"
      },
      {
        "stateID": "15",
        "state": "Wilayah Persekutuan"
      }
    ],
    "Maldives": [
      {
        "stateID": "1",
        "state": "Alifu"
      },
      {
        "stateID": "2",
        "state": "Baa"
      },
      {
        "stateID": "3",
        "state": "Dhaalu"
      },
      {
        "stateID": "4",
        "state": "Faafu"
      },
      {
        "stateID": "5",
        "state": "Gaafu Alifu"
      },
      {
        "stateID": "6",
        "state": "Gaafu Dhaalu"
      },
      {
        "stateID": "7",
        "state": "Gnaviyani"
      },
      {
        "stateID": "8",
        "state": "Haa Alifu"
      },
      {
        "stateID": "9",
        "state": "Haa Dhaalu"
      },
      {
        "stateID": "10",
        "state": "Kaafu"
      },
      {
        "stateID": "11",
        "state": "Laamu"
      },
      {
        "stateID": "12",
        "state": "Lhaviyani"
      },
      {
        "stateID": "13",
        "state": "Maale"
      },
      {
        "stateID": "14",
        "state": "Meemu"
      },
      {
        "stateID": "15",
        "state": "Noonu"
      },
      {
        "stateID": "16",
        "state": "Raa"
      },
      {
        "stateID": "17",
        "state": "Seenu"
      },
      {
        "stateID": "18",
        "state": "Shaviyani"
      },
      {
        "stateID": "19",
        "state": "Thaa"
      },
      {
        "stateID": "20",
        "state": "Vaavu"
      }
    ],
    "Mali": [
      {
        "stateID": "1",
        "state": "Gao"
      },
      {
        "stateID": "2",
        "state": "Kayes"
      },
      {
        "stateID": "3",
        "state": "Kidal"
      },
      {
        "stateID": "4",
        "state": "Koulikoro"
      },
      {
        "stateID": "5",
        "state": "Mopti"
      },
      {
        "stateID": "6",
        "state": "Segou"
      },
      {
        "stateID": "7",
        "state": "Sikasso"
      },
      {
        "stateID": "8",
        "state": "Tombouctou"
      }
    ],
    "Malta": [
      {
        "stateID": "1",
        "state": "Valletta"
      }
    ],
    "Man, Isle of": [
      {
        "stateID": "1",
        "state": "Man, Isle of"
      }
    ],
    "Marshall Islands": [
      {
        "stateID": "1",
        "state": "Ailinginae"
      },
      {
        "stateID": "2",
        "state": "Ailinglaplap"
      },
      {
        "stateID": "3",
        "state": "Ailuk"
      },
      {
        "stateID": "4",
        "state": "Arno"
      },
      {
        "stateID": "5",
        "state": "Aur"
      },
      {
        "stateID": "6",
        "state": "Bikar"
      },
      {
        "stateID": "7",
        "state": "Bikini"
      },
      {
        "stateID": "8",
        "state": "Bokak"
      },
      {
        "stateID": "9",
        "state": "Ebon"
      },
      {
        "stateID": "10",
        "state": "Enewetak"
      },
      {
        "stateID": "11",
        "state": "Erikub"
      },
      {
        "stateID": "12",
        "state": "Jabat"
      },
      {
        "stateID": "13",
        "state": "Jaluit"
      },
      {
        "stateID": "14",
        "state": "Jemo"
      },
      {
        "stateID": "15",
        "state": "Kili"
      },
      {
        "stateID": "16",
        "state": "Kwajalein"
      },
      {
        "stateID": "17",
        "state": "Lae"
      },
      {
        "stateID": "18",
        "state": "Lib"
      },
      {
        "stateID": "19",
        "state": "Likiep"
      },
      {
        "stateID": "20",
        "state": "Majuro"
      },
      {
        "stateID": "21",
        "state": "Maloelap"
      },
      {
        "stateID": "22",
        "state": "Mejit"
      },
      {
        "stateID": "23",
        "state": "Mili"
      },
      {
        "stateID": "24",
        "state": "Namorik"
      },
      {
        "stateID": "25",
        "state": "Namu"
      },
      {
        "stateID": "26",
        "state": "Rongelap"
      },
      {
        "stateID": "27",
        "state": "Rongrik"
      },
      {
        "stateID": "28",
        "state": "Toke"
      },
      {
        "stateID": "29",
        "state": "Ujae"
      },
      {
        "stateID": "30",
        "state": "Ujelang"
      },
      {
        "stateID": "31",
        "state": "Utirik"
      },
      {
        "stateID": "32",
        "state": "Wotho"
      },
      {
        "stateID": "33",
        "state": "Wotje"
      }
    ],
    "Martinique": [
      {
        "stateID": "1",
        "state": "Martinique"
      }
    ],
    "Mauritania": [
      {
        "stateID": "1",
        "state": "Adrar"
      },
      {
        "stateID": "2",
        "state": "Assaba"
      },
      {
        "stateID": "3",
        "state": "Brakna"
      },
      {
        "stateID": "4",
        "state": "Dakhlet Nouadhibou"
      },
      {
        "stateID": "5",
        "state": "Gorgol"
      },
      {
        "stateID": "6",
        "state": "Guidimaka"
      },
      {
        "stateID": "7",
        "state": "Hodh Ech Chargui"
      },
      {
        "stateID": "8",
        "state": "Hodh El Gharbi"
      },
      {
        "stateID": "9",
        "state": "Inchiri"
      },
      {
        "stateID": "10",
        "state": "Nouakchott"
      },
      {
        "stateID": "11",
        "state": "Tagant"
      },
      {
        "stateID": "12",
        "state": "Tiris Zemmour"
      },
      {
        "stateID": "13",
        "state": "Trarza"
      }
    ],
    "Mauritius": [
      {
        "stateID": "1",
        "state": "Agalega Islands"
      },
      {
        "stateID": "2",
        "state": "Black River"
      },
      {
        "stateID": "3",
        "state": "Cargados Carajos Shoals"
      },
      {
        "stateID": "4",
        "state": "Flacq"
      },
      {
        "stateID": "5",
        "state": "Grand Port"
      },
      {
        "stateID": "6",
        "state": "Moka"
      },
      {
        "stateID": "7",
        "state": "Pamplemousses"
      },
      {
        "stateID": "8",
        "state": "Plaines Wilhems"
      },
      {
        "stateID": "9",
        "state": "Port Louis"
      },
      {
        "stateID": "10",
        "state": "Riviere du Rempart"
      },
      {
        "stateID": "11",
        "state": "Rodrigues"
      },
      {
        "stateID": "12",
        "state": "Savanne"
      }
    ],
    "Mayotte": [
      {
        "stateID": "1",
        "state": "Mayotte"
      }
    ],
    "Mexico": [
      {
        "stateID": "1",
        "state": "Aguascalientes"
      },
      {
        "stateID": "2",
        "state": "Baja California"
      },
      {
        "stateID": "3",
        "state": "Baja California Sur"
      },
      {
        "stateID": "4",
        "state": "Campeche"
      },
      {
        "stateID": "5",
        "state": "Chiapas"
      },
      {
        "stateID": "6",
        "state": "Chihuahua"
      },
      {
        "stateID": "7",
        "state": "Coahuila de Zaragoza"
      },
      {
        "stateID": "8",
        "state": "Colima"
      },
      {
        "stateID": "9",
        "state": "Distrito Federal"
      },
      {
        "stateID": "10",
        "state": "Durango"
      },
      {
        "stateID": "11",
        "state": "Guanajuato"
      },
      {
        "stateID": "12",
        "state": "Guerrero"
      },
      {
        "stateID": "13",
        "state": "Hidalgo"
      },
      {
        "stateID": "14",
        "state": "Jalisco"
      },
      {
        "stateID": "15",
        "state": "Mexico"
      },
      {
        "stateID": "16",
        "state": "Michoacan de Ocampo"
      },
      {
        "stateID": "17",
        "state": "Morelos"
      },
      {
        "stateID": "18",
        "state": "Nayarit"
      },
      {
        "stateID": "19",
        "state": "Nuevo Leon"
      },
      {
        "stateID": "20",
        "state": "Oaxaca"
      },
      {
        "stateID": "21",
        "state": "Puebla"
      },
      {
        "stateID": "22",
        "state": "Queretaro de Arteaga"
      },
      {
        "stateID": "23",
        "state": "Quintana Roo"
      },
      {
        "stateID": "24",
        "state": "San Luis Potosi"
      },
      {
        "stateID": "25",
        "state": "Sinaloa"
      },
      {
        "stateID": "26",
        "state": "Sonora"
      },
      {
        "stateID": "27",
        "state": "Tabasco"
      },
      {
        "stateID": "28",
        "state": "Tamaulipas"
      },
      {
        "stateID": "29",
        "state": "Tlaxcala"
      },
      {
        "stateID": "30",
        "state": "Veracruz-Llave"
      },
      {
        "stateID": "31",
        "state": "Yucatan"
      },
      {
        "stateID": "32",
        "state": "Zacatecas"
      }
    ],
    "Micronesia, Federated States of": [
      {
        "stateID": "1",
        "state": "Chuuk (Truk)"
      },
      {
        "stateID": "2",
        "state": "Kosrae"
      },
      {
        "stateID": "3",
        "state": "Pohnpei"
      },
      {
        "stateID": "4",
        "state": "Yap"
      }
    ],
    "Midway Islands": [
      {
        "stateID": "1",
        "state": "Midway Islands"
      }
    ],
    "Moldova": [
      {
        "stateID": "1",
        "state": "Balti"
      },
      {
        "stateID": "2",
        "state": "Cahul"
      },
      {
        "stateID": "3",
        "state": "Chisinau"
      },
      {
        "stateID": "4",
        "state": "Chisinau"
      },
      {
        "stateID": "5",
        "state": "Dubasari"
      },
      {
        "stateID": "6",
        "state": "Edinet"
      },
      {
        "stateID": "7",
        "state": "Gagauzia"
      },
      {
        "stateID": "8",
        "state": "Lapusna"
      },
      {
        "stateID": "9",
        "state": "Orhei"
      },
      {
        "stateID": "10",
        "state": "Soroca"
      },
      {
        "stateID": "11",
        "state": "Tighina"
      },
      {
        "stateID": "12",
        "state": "Ungheni"
      }
    ],
    "Monaco": [
      {
        "stateID": "1",
        "state": "Fontvieille"
      },
      {
        "stateID": "2",
        "state": "La Condamine"
      },
      {
        "stateID": "3",
        "state": "Monaco-Ville"
      },
      {
        "stateID": "4",
        "state": "Monte-Carlo"
      }
    ],
    "Mongolia": [
      {
        "stateID": "1",
        "state": "Arhangay"
      },
      {
        "stateID": "2",
        "state": "Bayan-Olgiy"
      },
      {
        "stateID": "3",
        "state": "Bayanhongor"
      },
      {
        "stateID": "4",
        "state": "Bulgan"
      },
      {
        "stateID": "5",
        "state": "Darhan"
      },
      {
        "stateID": "6",
        "state": "Dornod"
      },
      {
        "stateID": "7",
        "state": "Dornogovi"
      },
      {
        "stateID": "8",
        "state": "Dundgovi"
      },
      {
        "stateID": "9",
        "state": "Dzavhan"
      },
      {
        "stateID": "10",
        "state": "Erdenet"
      },
      {
        "stateID": "11",
        "state": "Govi-Altay"
      },
      {
        "stateID": "12",
        "state": "Hentiy"
      },
      {
        "stateID": "13",
        "state": "Hovd"
      },
      {
        "stateID": "14",
        "state": "Hovsgol"
      },
      {
        "stateID": "15",
        "state": "Omnogovi"
      },
      {
        "stateID": "16",
        "state": "Ovorhangay"
      },
      {
        "stateID": "17",
        "state": "Selenge"
      },
      {
        "stateID": "18",
        "state": "Suhbaatar"
      },
      {
        "stateID": "19",
        "state": "Tov"
      },
      {
        "stateID": "20",
        "state": "Ulaanbaatar"
      },
      {
        "stateID": "21",
        "state": "Uvs"
      }
    ],
    "Montserrat": [
      {
        "stateID": "1",
        "state": "Saint Anthony"
      },
      {
        "stateID": "2",
        "state": "Saint Georges"
      },
      {
        "stateID": "3",
        "state": "Saint Peter's"
      }
    ],
    "Morocco": [
      {
        "stateID": "1",
        "state": "Agadir"
      },
      {
        "stateID": "2",
        "state": "Al Hoceima"
      },
      {
        "stateID": "3",
        "state": "Azilal"
      },
      {
        "stateID": "4",
        "state": "Ben Slimane"
      },
      {
        "stateID": "5",
        "state": "Beni Mellal"
      },
      {
        "stateID": "6",
        "state": "Boulemane"
      },
      {
        "stateID": "7",
        "state": "Casablanca"
      },
      {
        "stateID": "8",
        "state": "Chaouen"
      },
      {
        "stateID": "9",
        "state": "El Jadida"
      },
      {
        "stateID": "10",
        "state": "El Kelaa des Srarhna"
      },
      {
        "stateID": "11",
        "state": "Er Rachidia"
      },
      {
        "stateID": "12",
        "state": "Essaouira"
      },
      {
        "stateID": "13",
        "state": "Fes"
      },
      {
        "stateID": "14",
        "state": "Figuig"
      },
      {
        "stateID": "15",
        "state": "Guelmim"
      },
      {
        "stateID": "16",
        "state": "Ifrane"
      },
      {
        "stateID": "17",
        "state": "Kenitra"
      },
      {
        "stateID": "18",
        "state": "Khemisset"
      },
      {
        "stateID": "19",
        "state": "Khenifra"
      },
      {
        "stateID": "20",
        "state": "Khouribga"
      },
      {
        "stateID": "21",
        "state": "Laayoune"
      },
      {
        "stateID": "22",
        "state": "Larache"
      },
      {
        "stateID": "23",
        "state": "Marrakech"
      },
      {
        "stateID": "24",
        "state": "Meknes"
      },
      {
        "stateID": "25",
        "state": "Nador"
      },
      {
        "stateID": "26",
        "state": "Ouarzazate"
      },
      {
        "stateID": "27",
        "state": "Oujda"
      },
      {
        "stateID": "28",
        "state": "Rabat-Sale"
      },
      {
        "stateID": "29",
        "state": "Safi"
      },
      {
        "stateID": "30",
        "state": "Settat"
      },
      {
        "stateID": "31",
        "state": "Sidi Kacem"
      },
      {
        "stateID": "32",
        "state": "Tan-Tan"
      },
      {
        "stateID": "33",
        "state": "Tanger"
      },
      {
        "stateID": "34",
        "state": "Taounate"
      },
      {
        "stateID": "35",
        "state": "Taroudannt"
      },
      {
        "stateID": "36",
        "state": "Tata"
      },
      {
        "stateID": "37",
        "state": "Taza"
      },
      {
        "stateID": "38",
        "state": "Tetouan"
      },
      {
        "stateID": "39",
        "state": "Tiznit"
      }
    ],
    "Mozambique": [
      {
        "stateID": "1",
        "state": "Cabo Delgado"
      },
      {
        "stateID": "2",
        "state": "Gaza"
      },
      {
        "stateID": "3",
        "state": "Inhambane"
      },
      {
        "stateID": "4",
        "state": "Manica"
      },
      {
        "stateID": "5",
        "state": "Maputo"
      },
      {
        "stateID": "6",
        "state": "Nampula"
      },
      {
        "stateID": "7",
        "state": "Niassa"
      },
      {
        "stateID": "8",
        "state": "Sofala"
      },
      {
        "stateID": "9",
        "state": "Tete"
      },
      {
        "stateID": "10",
        "state": "Zambezia"
      }
    ],
    "Namibia": [
      {
        "stateID": "1",
        "state": "Caprivi"
      },
      {
        "stateID": "2",
        "state": "Erongo"
      },
      {
        "stateID": "3",
        "state": "Hardap"
      },
      {
        "stateID": "4",
        "state": "Karas"
      },
      {
        "stateID": "5",
        "state": "Khomas"
      },
      {
        "stateID": "6",
        "state": "Kunene"
      },
      {
        "stateID": "7",
        "state": "Ohangwena"
      },
      {
        "stateID": "8",
        "state": "Okavango"
      },
      {
        "stateID": "9",
        "state": "Omaheke"
      },
      {
        "stateID": "10",
        "state": "Omusati"
      },
      {
        "stateID": "11",
        "state": "Oshana"
      },
      {
        "stateID": "12",
        "state": "Oshikoto"
      },
      {
        "stateID": "13",
        "state": "Otjozondjupa"
      }
    ],
    "Nauru": [
      {
        "stateID": "1",
        "state": "Aiwo"
      },
      {
        "stateID": "2",
        "state": "Anabar"
      },
      {
        "stateID": "3",
        "state": "Anetan"
      },
      {
        "stateID": "4",
        "state": "Anibare"
      },
      {
        "stateID": "5",
        "state": "Baiti"
      },
      {
        "stateID": "6",
        "state": "Boe"
      },
      {
        "stateID": "7",
        "state": "Buada"
      },
      {
        "stateID": "8",
        "state": "Denigomodu"
      },
      {
        "stateID": "9",
        "state": "Ewa"
      },
      {
        "stateID": "10",
        "state": "Ijuw"
      },
      {
        "stateID": "11",
        "state": "Meneng"
      },
      {
        "stateID": "12",
        "state": "Nibok"
      },
      {
        "stateID": "13",
        "state": "Uaboe"
      },
      {
        "stateID": "14",
        "state": "Yaren"
      }
    ],
    "Nepal": [
      {
        "stateID": "1",
        "state": "Bagmati"
      },
      {
        "stateID": "2",
        "state": "Bheri"
      },
      {
        "stateID": "3",
        "state": "Dhawalagiri"
      },
      {
        "stateID": "4",
        "state": "Gandaki"
      },
      {
        "stateID": "5",
        "state": "Janakpur"
      },
      {
        "stateID": "6",
        "state": "Karnali"
      },
      {
        "stateID": "7",
        "state": "Kosi"
      },
      {
        "stateID": "8",
        "state": "Lumbini"
      },
      {
        "stateID": "9",
        "state": "Mahakali"
      },
      {
        "stateID": "10",
        "state": "Mechi"
      },
      {
        "stateID": "11",
        "state": "Narayani"
      },
      {
        "stateID": "12",
        "state": "Rapti"
      },
      {
        "stateID": "13",
        "state": "Sagarmatha"
      },
      {
        "stateID": "14",
        "state": "Seti"
      }
    ],
    "Netherlands": [
      {
        "stateID": "1",
        "state": "Drenthe"
      },
      {
        "stateID": "2",
        "state": "Flevoland"
      },
      {
        "stateID": "3",
        "state": "Friesland"
      },
      {
        "stateID": "4",
        "state": "Gelderland"
      },
      {
        "stateID": "5",
        "state": "Groningen"
      },
      {
        "stateID": "6",
        "state": "Limburg"
      },
      {
        "stateID": "7",
        "state": "Noord-Brabant"
      },
      {
        "stateID": "8",
        "state": "Noord-Holland"
      },
      {
        "stateID": "9",
        "state": "Overijssel"
      },
      {
        "stateID": "10",
        "state": "Utrecht"
      },
      {
        "stateID": "11",
        "state": "Zeeland"
      },
      {
        "stateID": "12",
        "state": "Zuid-Holland"
      }
    ],
    "Netherlands Antilles": [
      {
        "stateID": "1",
        "state": "Netherlands Antilles"
      }
    ],
    "New Caledonia": [
      {
        "stateID": "1",
        "state": "Iles Loyaute"
      },
      {
        "stateID": "2",
        "state": "Nord"
      },
      {
        "stateID": "3",
        "state": "Sud"
      }
    ],
    "New Zealand": [
      {
        "stateID": "1",
        "state": "Akaroa"
      },
      {
        "stateID": "2",
        "state": "Amuri"
      },
      {
        "stateID": "3",
        "state": "Ashburton"
      },
      {
        "stateID": "4",
        "state": "Bay of Islands"
      },
      {
        "stateID": "5",
        "state": "Bruce"
      },
      {
        "stateID": "6",
        "state": "Buller"
      },
      {
        "stateID": "7",
        "state": "Chatham Islands"
      },
      {
        "stateID": "8",
        "state": "Cheviot"
      },
      {
        "stateID": "9",
        "state": "Clifton"
      },
      {
        "stateID": "10",
        "state": "Clutha"
      },
      {
        "stateID": "11",
        "state": "Cook"
      },
      {
        "stateID": "12",
        "state": "Dannevirke"
      },
      {
        "stateID": "13",
        "state": "Egmont"
      },
      {
        "stateID": "14",
        "state": "Eketahuna"
      },
      {
        "stateID": "15",
        "state": "Ellesmere"
      },
      {
        "stateID": "16",
        "state": "Eltham"
      },
      {
        "stateID": "17",
        "state": "Eyre"
      },
      {
        "stateID": "18",
        "state": "Featherston"
      },
      {
        "stateID": "19",
        "state": "Franklin"
      },
      {
        "stateID": "20",
        "state": "Golden Bay"
      },
      {
        "stateID": "21",
        "state": "Great Barrier Island"
      },
      {
        "stateID": "22",
        "state": "Grey"
      },
      {
        "stateID": "23",
        "state": "Hauraki Plains"
      },
      {
        "stateID": "24",
        "state": "Hawera"
      },
      {
        "stateID": "25",
        "state": "Hawke's Bay"
      },
      {
        "stateID": "26",
        "state": "Heathcote"
      },
      {
        "stateID": "27",
        "state": "Hikurangi"
      },
      {
        "stateID": "28",
        "state": "Hobson"
      },
      {
        "stateID": "29",
        "state": "Hokianga"
      },
      {
        "stateID": "30",
        "state": "Horowhenua"
      },
      {
        "stateID": "31",
        "state": "Hurunui"
      },
      {
        "stateID": "32",
        "state": "Hutt"
      },
      {
        "stateID": "33",
        "state": "Inangahua"
      },
      {
        "stateID": "34",
        "state": "Inglewood"
      },
      {
        "stateID": "35",
        "state": "Kaikoura"
      },
      {
        "stateID": "36",
        "state": "Kairanga"
      },
      {
        "stateID": "37",
        "state": "Kiwitea"
      },
      {
        "stateID": "38",
        "state": "Lake"
      },
      {
        "stateID": "39",
        "state": "Mackenzie"
      },
      {
        "stateID": "40",
        "state": "Malvern"
      },
      {
        "stateID": "41",
        "state": "Manaia"
      },
      {
        "stateID": "42",
        "state": "Manawatu"
      },
      {
        "stateID": "43",
        "state": "Mangonui"
      },
      {
        "stateID": "44",
        "state": "Maniototo"
      },
      {
        "stateID": "45",
        "state": "Marlborough"
      },
      {
        "stateID": "46",
        "state": "Masterton"
      },
      {
        "stateID": "47",
        "state": "Matamata"
      },
      {
        "stateID": "48",
        "state": "Mount Herbert"
      },
      {
        "stateID": "49",
        "state": "Ohinemuri"
      },
      {
        "stateID": "50",
        "state": "Opotiki"
      },
      {
        "stateID": "51",
        "state": "Oroua"
      },
      {
        "stateID": "52",
        "state": "Otamatea"
      },
      {
        "stateID": "53",
        "state": "Otorohanga"
      },
      {
        "stateID": "54",
        "state": "Oxford"
      },
      {
        "stateID": "55",
        "state": "Pahiatua"
      },
      {
        "stateID": "56",
        "state": "Paparua"
      },
      {
        "stateID": "57",
        "state": "Patea"
      },
      {
        "stateID": "58",
        "state": "Piako"
      },
      {
        "stateID": "59",
        "state": "Pohangina"
      },
      {
        "stateID": "60",
        "state": "Raglan"
      },
      {
        "stateID": "61",
        "state": "Rangiora"
      },
      {
        "stateID": "62",
        "state": "Rangitikei"
      },
      {
        "stateID": "63",
        "state": "Rodney"
      },
      {
        "stateID": "64",
        "state": "Rotorua"
      },
      {
        "stateID": "65",
        "state": "Runanga"
      },
      {
        "stateID": "66",
        "state": "Saint Kilda"
      },
      {
        "stateID": "67",
        "state": "Silverpeaks"
      },
      {
        "stateID": "68",
        "state": "Southland"
      },
      {
        "stateID": "69",
        "state": "Stewart Island"
      },
      {
        "stateID": "70",
        "state": "Stratford"
      },
      {
        "stateID": "71",
        "state": "Strathallan"
      },
      {
        "stateID": "72",
        "state": "Taranaki"
      },
      {
        "stateID": "73",
        "state": "Taumarunui"
      },
      {
        "stateID": "74",
        "state": "Taupo"
      },
      {
        "stateID": "75",
        "state": "Tauranga"
      },
      {
        "stateID": "76",
        "state": "Thames-Coromandel"
      },
      {
        "stateID": "77",
        "state": "Tuapeka"
      },
      {
        "stateID": "78",
        "state": "Vincent"
      },
      {
        "stateID": "79",
        "state": "Waiapu"
      },
      {
        "stateID": "80",
        "state": "Waiheke"
      },
      {
        "stateID": "81",
        "state": "Waihemo"
      },
      {
        "stateID": "82",
        "state": "Waikato"
      },
      {
        "stateID": "83",
        "state": "Waikohu"
      },
      {
        "stateID": "84",
        "state": "Waimairi"
      },
      {
        "stateID": "85",
        "state": "Waimarino"
      },
      {
        "stateID": "86",
        "state": "Waimate"
      },
      {
        "stateID": "87",
        "state": "Waimate West"
      },
      {
        "stateID": "88",
        "state": "Waimea"
      },
      {
        "stateID": "89",
        "state": "Waipa"
      },
      {
        "stateID": "90",
        "state": "Waipawa"
      },
      {
        "stateID": "91",
        "state": "Waipukurau"
      },
      {
        "stateID": "92",
        "state": "Wairarapa South"
      },
      {
        "stateID": "93",
        "state": "Wairewa"
      },
      {
        "stateID": "94",
        "state": "Wairoa"
      },
      {
        "stateID": "95",
        "state": "Waitaki"
      },
      {
        "stateID": "96",
        "state": "Waitomo"
      },
      {
        "stateID": "97",
        "state": "Waitotara"
      },
      {
        "stateID": "98",
        "state": "Wallace"
      },
      {
        "stateID": "99",
        "state": "Wanganui"
      },
      {
        "stateID": "100",
        "state": "Waverley"
      },
      {
        "stateID": "101",
        "state": "Westland"
      },
      {
        "stateID": "102",
        "state": "Whakatane"
      },
      {
        "stateID": "103",
        "state": "Whangarei"
      },
      {
        "stateID": "104",
        "state": "Whangaroa"
      },
      {
        "stateID": "105",
        "state": "Woodville"
      }
    ],
    "Nicaragua": [
      {
        "stateID": "1",
        "state": "Atlantico Norte"
      },
      {
        "stateID": "2",
        "state": "Atlantico Sur"
      },
      {
        "stateID": "3",
        "state": "Boaco"
      },
      {
        "stateID": "4",
        "state": "Carazo"
      },
      {
        "stateID": "5",
        "state": "Chinandega"
      },
      {
        "stateID": "6",
        "state": "Chontales"
      },
      {
        "stateID": "7",
        "state": "Esteli"
      },
      {
        "stateID": "8",
        "state": "Granada"
      },
      {
        "stateID": "9",
        "state": "Jinotega"
      },
      {
        "stateID": "10",
        "state": "Leon"
      },
      {
        "stateID": "11",
        "state": "Madriz"
      },
      {
        "stateID": "12",
        "state": "Managua"
      },
      {
        "stateID": "13",
        "state": "Masaya"
      },
      {
        "stateID": "14",
        "state": "Matagalpa"
      },
      {
        "stateID": "15",
        "state": "Nueva Segovia"
      },
      {
        "stateID": "16",
        "state": "Rio San Juan"
      },
      {
        "stateID": "17",
        "state": "Rivas"
      }
    ],
    "Niger": [
      {
        "stateID": "1",
        "state": "Agadez"
      },
      {
        "stateID": "2",
        "state": "Diffa"
      },
      {
        "stateID": "3",
        "state": "Dosso"
      },
      {
        "stateID": "4",
        "state": "Maradi"
      },
      {
        "stateID": "5",
        "state": "Niamey"
      },
      {
        "stateID": "6",
        "state": "Tahoua"
      },
      {
        "stateID": "7",
        "state": "Tillaberi"
      },
      {
        "stateID": "8",
        "state": "Zinder"
      }
    ],
    "Nigeria": [
      {
        "stateID": "1",
        "state": "Abia"
      },
      {
        "stateID": "2",
        "state": "Abuja Federal Capital Territory"
      },
      {
        "stateID": "3",
        "state": "Adamawa"
      },
      {
        "stateID": "4",
        "state": "Akwa Ibom"
      },
      {
        "stateID": "5",
        "state": "Anambra"
      },
      {
        "stateID": "6",
        "state": "Bauchi"
      },
      {
        "stateID": "7",
        "state": "Bayelsa"
      },
      {
        "stateID": "8",
        "state": "Benue"
      },
      {
        "stateID": "9",
        "state": "Borno"
      },
      {
        "stateID": "10",
        "state": "Cross River"
      },
      {
        "stateID": "11",
        "state": "Delta"
      },
      {
        "stateID": "12",
        "state": "Ebonyi"
      },
      {
        "stateID": "13",
        "state": "Edo"
      },
      {
        "stateID": "14",
        "state": "Ekiti"
      },
      {
        "stateID": "15",
        "state": "Enugu"
      },
      {
        "stateID": "16",
        "state": "Gombe"
      },
      {
        "stateID": "17",
        "state": "Imo"
      },
      {
        "stateID": "18",
        "state": "Jigawa"
      },
      {
        "stateID": "19",
        "state": "Kaduna"
      },
      {
        "stateID": "20",
        "state": "Kano"
      },
      {
        "stateID": "21",
        "state": "Katsina"
      },
      {
        "stateID": "22",
        "state": "Kebbi"
      },
      {
        "stateID": "23",
        "state": "Kogi"
      },
      {
        "stateID": "24",
        "state": "Kwara"
      },
      {
        "stateID": "25",
        "state": "Lagos"
      },
      {
        "stateID": "26",
        "state": "Nassarawa"
      },
      {
        "stateID": "27",
        "state": "Niger"
      },
      {
        "stateID": "28",
        "state": "Ogun"
      },
      {
        "stateID": "29",
        "state": "Ondo"
      },
      {
        "stateID": "30",
        "state": "Osun"
      },
      {
        "stateID": "31",
        "state": "Oyo"
      },
      {
        "stateID": "32",
        "state": "Plateau"
      },
      {
        "stateID": "33",
        "state": "Rivers"
      },
      {
        "stateID": "34",
        "state": "Sokoto"
      },
      {
        "stateID": "35",
        "state": "Taraba"
      },
      {
        "stateID": "36",
        "state": "Yobe"
      },
      {
        "stateID": "37",
        "state": "Zamfara"
      }
    ],
    "Niue": [
      {
        "stateID": "1",
        "state": "Niue"
      }
    ],
    "Norfolk Island": [
      {
        "stateID": "1",
        "state": "Norfolk Island"
      }
    ],
    "Northern Mariana Islands": [
      {
        "stateID": "1",
        "state": "Northern Islands"
      },
      {
        "stateID": "2",
        "state": "Rota"
      },
      {
        "stateID": "3",
        "state": "Saipan"
      },
      {
        "stateID": "4",
        "state": "Tinian"
      }
    ],
    "Norway": [
      {
        "stateID": "1",
        "state": "Akershus"
      },
      {
        "stateID": "2",
        "state": "Aust-Agder"
      },
      {
        "stateID": "3",
        "state": "Buskerud"
      },
      {
        "stateID": "4",
        "state": "Finnmark"
      },
      {
        "stateID": "5",
        "state": "Hedmark"
      },
      {
        "stateID": "6",
        "state": "Hordaland"
      },
      {
        "stateID": "7",
        "state": "More og Romsdal"
      },
      {
        "stateID": "8",
        "state": "Nord-Trondelag"
      },
      {
        "stateID": "9",
        "state": "Nordland"
      },
      {
        "stateID": "10",
        "state": "Oppland"
      },
      {
        "stateID": "11",
        "state": "Oslo"
      },
      {
        "stateID": "12",
        "state": "Ostfold"
      },
      {
        "stateID": "13",
        "state": "Rogaland"
      },
      {
        "stateID": "14",
        "state": "Sogn og Fjordane"
      },
      {
        "stateID": "15",
        "state": "Sor-Trondelag"
      },
      {
        "stateID": "16",
        "state": "Telemark"
      },
      {
        "stateID": "17",
        "state": "Troms"
      },
      {
        "stateID": "18",
        "state": "Vest-Agder"
      },
      {
        "stateID": "19",
        "state": "Vestfold"
      }
    ],
    "Oman": [
      {
        "stateID": "1",
        "state": "Ad Dakhiliyah"
      },
      {
        "stateID": "2",
        "state": "Al Batinah"
      },
      {
        "stateID": "3",
        "state": "Al Wusta"
      },
      {
        "stateID": "4",
        "state": "Ash Sharqiyah"
      },
      {
        "stateID": "5",
        "state": "Az Zahirah"
      },
      {
        "stateID": "6",
        "state": "Masqat"
      },
      {
        "stateID": "7",
        "state": "Musandam"
      },
      {
        "stateID": "8",
        "state": "Zufar"
      }
    ],
    "Pakistan": [
      {
        "stateID": "1",
        "state": "Balochistan"
      },
      {
        "stateID": "2",
        "state": "Federally Administered Tribal Areas"
      },
      {
        "stateID": "3",
        "state": "Islamabad Capital Territory"
      },
      {
        "stateID": "4",
        "state": "North-West Frontier Province"
      },
      {
        "stateID": "5",
        "state": "Punjab"
      },
      {
        "stateID": "6",
        "state": "Sindh"
      }
    ],
    "Palau": [
      {
        "stateID": "1",
        "state": "Aimeliik"
      },
      {
        "stateID": "2",
        "state": "Airai"
      },
      {
        "stateID": "3",
        "state": "Angaur"
      },
      {
        "stateID": "4",
        "state": "Hatobohei"
      },
      {
        "stateID": "5",
        "state": "Kayangel"
      },
      {
        "stateID": "6",
        "state": "Koror"
      },
      {
        "stateID": "7",
        "state": "Melekeok"
      },
      {
        "stateID": "8",
        "state": "Ngaraard"
      },
      {
        "stateID": "9",
        "state": "Ngarchelong"
      },
      {
        "stateID": "10",
        "state": "Ngardmau"
      },
      {
        "stateID": "11",
        "state": "Ngatpang"
      },
      {
        "stateID": "12",
        "state": "Ngchesar"
      },
      {
        "stateID": "13",
        "state": "Ngeremlengui"
      },
      {
        "stateID": "14",
        "state": "Ngiwal"
      },
      {
        "stateID": "15",
        "state": "Palau Island"
      },
      {
        "stateID": "16",
        "state": "Peleliu"
      },
      {
        "stateID": "17",
        "state": "Sonsoral"
      },
      {
        "stateID": "18",
        "state": "Tobi"
      }
    ],
    "Panama": [
      {
        "stateID": "1",
        "state": "Bocas del Toro"
      },
      {
        "stateID": "2",
        "state": "Chiriqui"
      },
      {
        "stateID": "3",
        "state": "Cocle"
      },
      {
        "stateID": "4",
        "state": "Colon"
      },
      {
        "stateID": "5",
        "state": "Darien"
      },
      {
        "stateID": "6",
        "state": "Herrera"
      },
      {
        "stateID": "7",
        "state": "Los Santos"
      },
      {
        "stateID": "8",
        "state": "Panama"
      },
      {
        "stateID": "9",
        "state": "San Blas"
      },
      {
        "stateID": "10",
        "state": "Veraguas"
      }
    ],
    "Papua New Guinea": [
      {
        "stateID": "1",
        "state": "Bougainville"
      },
      {
        "stateID": "2",
        "state": "Central"
      },
      {
        "stateID": "3",
        "state": "Chimbu"
      },
      {
        "stateID": "4",
        "state": "East New Britain"
      },
      {
        "stateID": "5",
        "state": "East Sepik"
      },
      {
        "stateID": "6",
        "state": "Eastern Highlands"
      },
      {
        "stateID": "7",
        "state": "Enga"
      },
      {
        "stateID": "8",
        "state": "Gulf"
      },
      {
        "stateID": "9",
        "state": "Madang"
      },
      {
        "stateID": "10",
        "state": "Manus"
      },
      {
        "stateID": "11",
        "state": "Milne Bay"
      },
      {
        "stateID": "12",
        "state": "Morobe"
      },
      {
        "stateID": "13",
        "state": "National Capital"
      },
      {
        "stateID": "14",
        "state": "New Ireland"
      },
      {
        "stateID": "15",
        "state": "Northern"
      },
      {
        "stateID": "16",
        "state": "Sandaun"
      },
      {
        "stateID": "17",
        "state": "Southern Highlands"
      },
      {
        "stateID": "18",
        "state": "West New Britain"
      },
      {
        "stateID": "19",
        "state": "Western"
      },
      {
        "stateID": "20",
        "state": "Western Highlands"
      }
    ],
    "Paraguay": [
      {
        "stateID": "1",
        "state": "Alto Paraguay"
      },
      {
        "stateID": "2",
        "state": "Alto Parana"
      },
      {
        "stateID": "3",
        "state": "Amambay"
      },
      {
        "stateID": "4",
        "state": "Asuncion (city)"
      },
      {
        "stateID": "5",
        "state": "Boqueron"
      },
      {
        "stateID": "6",
        "state": "Caaguazu"
      },
      {
        "stateID": "7",
        "state": "Caazapa"
      },
      {
        "stateID": "8",
        "state": "Canindeyu"
      },
      {
        "stateID": "9",
        "state": "Central"
      },
      {
        "stateID": "10",
        "state": "Concepcion"
      },
      {
        "stateID": "11",
        "state": "Cordillera"
      },
      {
        "stateID": "12",
        "state": "Guaira"
      },
      {
        "stateID": "13",
        "state": "Itapua"
      },
      {
        "stateID": "14",
        "state": "Misiones"
      },
      {
        "stateID": "15",
        "state": "Neembucu"
      },
      {
        "stateID": "16",
        "state": "Paraguari"
      },
      {
        "stateID": "17",
        "state": "Presidente Hayes"
      },
      {
        "stateID": "18",
        "state": "San Pedro"
      }
    ],
    "Peru": [
      {
        "stateID": "1",
        "state": "Amazonas"
      },
      {
        "stateID": "2",
        "state": "Ancash"
      },
      {
        "stateID": "3",
        "state": "Apurimac"
      },
      {
        "stateID": "4",
        "state": "Arequipa"
      },
      {
        "stateID": "5",
        "state": "Ayacucho"
      },
      {
        "stateID": "6",
        "state": "Cajamarca"
      },
      {
        "stateID": "7",
        "state": "Callao"
      },
      {
        "stateID": "8",
        "state": "Cusco"
      },
      {
        "stateID": "9",
        "state": "Huancavelica"
      },
      {
        "stateID": "10",
        "state": "Huanuco"
      },
      {
        "stateID": "11",
        "state": "Ica"
      },
      {
        "stateID": "12",
        "state": "Junin"
      },
      {
        "stateID": "13",
        "state": "La Libertad"
      },
      {
        "stateID": "14",
        "state": "Lambayeque"
      },
      {
        "stateID": "15",
        "state": "Lima"
      },
      {
        "stateID": "16",
        "state": "Loreto"
      },
      {
        "stateID": "17",
        "state": "Madre de Dios"
      },
      {
        "stateID": "18",
        "state": "Moquegua"
      },
      {
        "stateID": "19",
        "state": "Pasco"
      },
      {
        "stateID": "20",
        "state": "Piura"
      },
      {
        "stateID": "21",
        "state": "Puno"
      },
      {
        "stateID": "22",
        "state": "San Martin"
      },
      {
        "stateID": "23",
        "state": "Tacna"
      },
      {
        "stateID": "24",
        "state": "Tumbes"
      },
      {
        "stateID": "25",
        "state": "Ucayali"
      }
    ],
    "Philippines": [
      {
        "stateID": "1",
        "state": "Abra"
      },
      {
        "stateID": "2",
        "state": "Agusan del Norte"
      },
      {
        "stateID": "3",
        "state": "Agusan del Sur"
      },
      {
        "stateID": "4",
        "state": "Aklan"
      },
      {
        "stateID": "5",
        "state": "Albay"
      },
      {
        "stateID": "6",
        "state": "Angeles"
      },
      {
        "stateID": "7",
        "state": "Antique"
      },
      {
        "stateID": "8",
        "state": "Aurora"
      },
      {
        "stateID": "9",
        "state": "Bacolod"
      },
      {
        "stateID": "10",
        "state": "Bago"
      },
      {
        "stateID": "11",
        "state": "Baguio"
      },
      {
        "stateID": "12",
        "state": "Bais"
      },
      {
        "stateID": "13",
        "state": "Basilan"
      },
      {
        "stateID": "14",
        "state": "Basilan City"
      },
      {
        "stateID": "15",
        "state": "Bataan"
      },
      {
        "stateID": "16",
        "state": "Batanes"
      },
      {
        "stateID": "17",
        "state": "Batangas"
      },
      {
        "stateID": "18",
        "state": "Batangas City"
      },
      {
        "stateID": "19",
        "state": "Benguet"
      },
      {
        "stateID": "20",
        "state": "Bohol"
      },
      {
        "stateID": "21",
        "state": "Bukidnon"
      },
      {
        "stateID": "22",
        "state": "Bulacan"
      },
      {
        "stateID": "23",
        "state": "Butuan"
      },
      {
        "stateID": "24",
        "state": "Cabanatuan"
      },
      {
        "stateID": "25",
        "state": "Cadiz"
      },
      {
        "stateID": "26",
        "state": "Cagayan"
      },
      {
        "stateID": "27",
        "state": "Cagayan de Oro"
      },
      {
        "stateID": "28",
        "state": "Calbayog"
      },
      {
        "stateID": "29",
        "state": "Caloocan"
      },
      {
        "stateID": "30",
        "state": "Camarines Norte"
      },
      {
        "stateID": "31",
        "state": "Camarines Sur"
      },
      {
        "stateID": "32",
        "state": "Camiguin"
      },
      {
        "stateID": "33",
        "state": "Canlaon"
      },
      {
        "stateID": "34",
        "state": "Capiz"
      },
      {
        "stateID": "35",
        "state": "Catanduanes"
      },
      {
        "stateID": "36",
        "state": "Cavite"
      },
      {
        "stateID": "37",
        "state": "Cavite City"
      },
      {
        "stateID": "38",
        "state": "Cebu"
      },
      {
        "stateID": "39",
        "state": "Cebu City"
      },
      {
        "stateID": "40",
        "state": "Cotabato"
      },
      {
        "stateID": "41",
        "state": "Dagupan"
      },
      {
        "stateID": "42",
        "state": "Danao"
      },
      {
        "stateID": "43",
        "state": "Dapitan"
      },
      {
        "stateID": "44",
        "state": "Davao City Davao"
      },
      {
        "stateID": "45",
        "state": "Davao del Sur"
      },
      {
        "stateID": "46",
        "state": "Davao Oriental"
      },
      {
        "stateID": "47",
        "state": "Dipolog"
      },
      {
        "stateID": "48",
        "state": "Dumaguete"
      },
      {
        "stateID": "49",
        "state": "Eastern Samar"
      },
      {
        "stateID": "50",
        "state": "General Santos"
      },
      {
        "stateID": "51",
        "state": "Gingoog"
      },
      {
        "stateID": "52",
        "state": "Ifugao"
      },
      {
        "stateID": "53",
        "state": "Iligan"
      },
      {
        "stateID": "54",
        "state": "Ilocos Norte"
      },
      {
        "stateID": "55",
        "state": "Ilocos Sur"
      },
      {
        "stateID": "56",
        "state": "Iloilo"
      },
      {
        "stateID": "57",
        "state": "Iloilo City"
      },
      {
        "stateID": "58",
        "state": "Iriga"
      },
      {
        "stateID": "59",
        "state": "Isabela"
      },
      {
        "stateID": "60",
        "state": "Kalinga-Apayao"
      },
      {
        "stateID": "61",
        "state": "La Carlota"
      },
      {
        "stateID": "62",
        "state": "La Union"
      },
      {
        "stateID": "63",
        "state": "Laguna"
      },
      {
        "stateID": "64",
        "state": "Lanao del Norte"
      },
      {
        "stateID": "65",
        "state": "Lanao del Sur"
      },
      {
        "stateID": "66",
        "state": "Laoag"
      },
      {
        "stateID": "67",
        "state": "Lapu-Lapu"
      },
      {
        "stateID": "68",
        "state": "Legaspi"
      },
      {
        "stateID": "69",
        "state": "Leyte"
      },
      {
        "stateID": "70",
        "state": "Lipa"
      },
      {
        "stateID": "71",
        "state": "Lucena"
      },
      {
        "stateID": "72",
        "state": "Maguindanao"
      },
      {
        "stateID": "73",
        "state": "Mandaue"
      },
      {
        "stateID": "74",
        "state": "Manila"
      },
      {
        "stateID": "75",
        "state": "Marawi"
      },
      {
        "stateID": "76",
        "state": "Marinduque"
      },
      {
        "stateID": "77",
        "state": "Masbate"
      },
      {
        "stateID": "78",
        "state": "Mindoro Occidental"
      },
      {
        "stateID": "79",
        "state": "Mindoro Oriental"
      },
      {
        "stateID": "80",
        "state": "Misamis Occidental"
      },
      {
        "stateID": "81",
        "state": "Misamis Oriental"
      },
      {
        "stateID": "82",
        "state": "Mountain"
      },
      {
        "stateID": "83",
        "state": "Naga"
      },
      {
        "stateID": "84",
        "state": "Negros Occidental"
      },
      {
        "stateID": "85",
        "state": "Negros Oriental"
      },
      {
        "stateID": "86",
        "state": "North Cotabato"
      },
      {
        "stateID": "87",
        "state": "Northern Samar"
      },
      {
        "stateID": "88",
        "state": "Nueva Ecija"
      },
      {
        "stateID": "89",
        "state": "Nueva Vizcaya"
      },
      {
        "stateID": "90",
        "state": "Olongapo"
      },
      {
        "stateID": "91",
        "state": "Ormoc"
      },
      {
        "stateID": "92",
        "state": "Oroquieta"
      },
      {
        "stateID": "93",
        "state": "Ozamis"
      },
      {
        "stateID": "94",
        "state": "Pagadian"
      },
      {
        "stateID": "95",
        "state": "Palawan"
      },
      {
        "stateID": "96",
        "state": "Palayan"
      },
      {
        "stateID": "97",
        "state": "Pampanga"
      },
      {
        "stateID": "98",
        "state": "Pangasinan"
      },
      {
        "stateID": "99",
        "state": "Pasay"
      },
      {
        "stateID": "100",
        "state": "Puerto Princesa"
      },
      {
        "stateID": "101",
        "state": "Quezon"
      },
      {
        "stateID": "102",
        "state": "Quezon City"
      },
      {
        "stateID": "103",
        "state": "Quirino"
      },
      {
        "stateID": "104",
        "state": "Rizal"
      },
      {
        "stateID": "105",
        "state": "Romblon"
      },
      {
        "stateID": "106",
        "state": "Roxas"
      },
      {
        "stateID": "107",
        "state": "Samar"
      },
      {
        "stateID": "108",
        "state": "San Carlos (in Negros Occidental)"
      },
      {
        "stateID": "109",
        "state": "San Carlos (in Pangasinan)"
      },
      {
        "stateID": "110",
        "state": "San Jose"
      },
      {
        "stateID": "111",
        "state": "San Pablo"
      },
      {
        "stateID": "112",
        "state": "Silay"
      },
      {
        "stateID": "113",
        "state": "Siquijor"
      },
      {
        "stateID": "114",
        "state": "Sorsogon"
      },
      {
        "stateID": "115",
        "state": "South Cotabato"
      },
      {
        "stateID": "116",
        "state": "Southern Leyte"
      },
      {
        "stateID": "117",
        "state": "Sultan Kudarat"
      },
      {
        "stateID": "118",
        "state": "Sulu"
      },
      {
        "stateID": "119",
        "state": "Surigao"
      },
      {
        "stateID": "120",
        "state": "Surigao del Norte"
      },
      {
        "stateID": "121",
        "state": "Surigao del Sur"
      },
      {
        "stateID": "122",
        "state": "Tacloban"
      },
      {
        "stateID": "123",
        "state": "Tagaytay"
      },
      {
        "stateID": "124",
        "state": "Tagbilaran"
      },
      {
        "stateID": "125",
        "state": "Tangub"
      },
      {
        "stateID": "126",
        "state": "Tarlac"
      },
      {
        "stateID": "127",
        "state": "Tawitawi"
      },
      {
        "stateID": "128",
        "state": "Toledo"
      },
      {
        "stateID": "129",
        "state": "Trece Martires"
      },
      {
        "stateID": "130",
        "state": "Zambales"
      },
      {
        "stateID": "131",
        "state": "Zamboanga"
      },
      {
        "stateID": "132",
        "state": "Zamboanga del Norte"
      },
      {
        "stateID": "133",
        "state": "Zamboanga del Sur"
      }
    ],
    "Pitcaim Islands": [
      {
        "stateID": "1",
        "state": "Pitcaim Islands"
      }
    ],
    "Poland": [
      {
        "stateID": "1",
        "state": "Dolnoslaskie"
      },
      {
        "stateID": "2",
        "state": "Kujawsko-Pomorskie"
      },
      {
        "stateID": "3",
        "state": "Lodzkie"
      },
      {
        "stateID": "4",
        "state": "Lubelskie"
      },
      {
        "stateID": "5",
        "state": "Lubuskie"
      },
      {
        "stateID": "6",
        "state": "Malopolskie"
      },
      {
        "stateID": "7",
        "state": "Mazowieckie"
      },
      {
        "stateID": "8",
        "state": "Opolskie"
      },
      {
        "stateID": "9",
        "state": "Podkarpackie"
      },
      {
        "stateID": "10",
        "state": "Podlaskie"
      },
      {
        "stateID": "11",
        "state": "Pomorskie"
      },
      {
        "stateID": "12",
        "state": "Slaskie"
      },
      {
        "stateID": "13",
        "state": "Swietokrzyskie"
      },
      {
        "stateID": "14",
        "state": "Warminsko-Mazurskie"
      },
      {
        "stateID": "15",
        "state": "Wielkopolskie"
      },
      {
        "stateID": "16",
        "state": "Zachodniopomorskie"
      }
    ],
    "Portugal": [
      {
        "stateID": "1",
        "state": "Acores (Azores)"
      },
      {
        "stateID": "2",
        "state": "Aveiro"
      },
      {
        "stateID": "3",
        "state": "Beja"
      },
      {
        "stateID": "4",
        "state": "Braga"
      },
      {
        "stateID": "5",
        "state": "Braganca"
      },
      {
        "stateID": "6",
        "state": "Castelo Branco"
      },
      {
        "stateID": "7",
        "state": "Coimbra"
      },
      {
        "stateID": "8",
        "state": "Evora"
      },
      {
        "stateID": "9",
        "state": "Faro"
      },
      {
        "stateID": "10",
        "state": "Guarda"
      },
      {
        "stateID": "11",
        "state": "Leiria"
      },
      {
        "stateID": "12",
        "state": "Lisboa"
      },
      {
        "stateID": "13",
        "state": "Madeira"
      },
      {
        "stateID": "14",
        "state": "Portalegre"
      },
      {
        "stateID": "15",
        "state": "Porto"
      },
      {
        "stateID": "16",
        "state": "Santarem"
      },
      {
        "stateID": "17",
        "state": "Setubal"
      },
      {
        "stateID": "18",
        "state": "Viana do Castelo"
      },
      {
        "stateID": "19",
        "state": "Vila Real"
      },
      {
        "stateID": "20",
        "state": "Viseu"
      }
    ],
    "Puerto Rico": [
      {
        "stateID": "1",
        "state": "Adjuntas"
      },
      {
        "stateID": "2",
        "state": "Aguada"
      },
      {
        "stateID": "3",
        "state": "Aguadilla"
      },
      {
        "stateID": "4",
        "state": "Aguas Buenas"
      },
      {
        "stateID": "5",
        "state": "Aibonito"
      },
      {
        "stateID": "6",
        "state": "Anasco"
      },
      {
        "stateID": "7",
        "state": "Arecibo"
      },
      {
        "stateID": "8",
        "state": "Arroyo"
      },
      {
        "stateID": "9",
        "state": "Barceloneta"
      },
      {
        "stateID": "10",
        "state": "Barranquitas"
      },
      {
        "stateID": "11",
        "state": "Bayamon"
      },
      {
        "stateID": "12",
        "state": "Cabo Rojo"
      },
      {
        "stateID": "13",
        "state": "Caguas"
      },
      {
        "stateID": "14",
        "state": "Camuy"
      },
      {
        "stateID": "15",
        "state": "Canovanas"
      },
      {
        "stateID": "16",
        "state": "Carolina"
      },
      {
        "stateID": "17",
        "state": "Catano"
      },
      {
        "stateID": "18",
        "state": "Cayey"
      },
      {
        "stateID": "19",
        "state": "Ceiba"
      },
      {
        "stateID": "20",
        "state": "Ciales"
      },
      {
        "stateID": "21",
        "state": "Cidra"
      },
      {
        "stateID": "22",
        "state": "Coamo"
      },
      {
        "stateID": "23",
        "state": "Comerio"
      },
      {
        "stateID": "24",
        "state": "Corozal"
      },
      {
        "stateID": "25",
        "state": "Culebra"
      },
      {
        "stateID": "26",
        "state": "Dorado"
      },
      {
        "stateID": "27",
        "state": "Fajardo"
      },
      {
        "stateID": "28",
        "state": "Florida"
      },
      {
        "stateID": "29",
        "state": "Guanica"
      },
      {
        "stateID": "30",
        "state": "Guayama"
      },
      {
        "stateID": "31",
        "state": "Guayanilla"
      },
      {
        "stateID": "32",
        "state": "Guaynabo"
      },
      {
        "stateID": "33",
        "state": "Gurabo"
      },
      {
        "stateID": "34",
        "state": "Hatillo"
      },
      {
        "stateID": "35",
        "state": "Hormigueros"
      },
      {
        "stateID": "36",
        "state": "Humacao"
      },
      {
        "stateID": "37",
        "state": "Isabela"
      },
      {
        "stateID": "38",
        "state": "Jayuya"
      },
      {
        "stateID": "39",
        "state": "Juana Diaz"
      },
      {
        "stateID": "40",
        "state": "Juncos"
      },
      {
        "stateID": "41",
        "state": "Lajas"
      },
      {
        "stateID": "42",
        "state": "Lares"
      },
      {
        "stateID": "43",
        "state": "Las Marias"
      },
      {
        "stateID": "44",
        "state": "Las Piedras"
      },
      {
        "stateID": "45",
        "state": "Loiza"
      },
      {
        "stateID": "46",
        "state": "Luquillo"
      },
      {
        "stateID": "47",
        "state": "Manati"
      },
      {
        "stateID": "48",
        "state": "Maricao"
      },
      {
        "stateID": "49",
        "state": "Maunabo"
      },
      {
        "stateID": "50",
        "state": "Mayaguez"
      },
      {
        "stateID": "51",
        "state": "Moca"
      },
      {
        "stateID": "52",
        "state": "Morovis"
      },
      {
        "stateID": "53",
        "state": "Naguabo"
      },
      {
        "stateID": "54",
        "state": "Naranjito"
      },
      {
        "stateID": "55",
        "state": "Orocovis"
      },
      {
        "stateID": "56",
        "state": "Patillas"
      },
      {
        "stateID": "57",
        "state": "Penuelas"
      },
      {
        "stateID": "58",
        "state": "Ponce"
      },
      {
        "stateID": "59",
        "state": "Quebradillas"
      },
      {
        "stateID": "60",
        "state": "Rincon"
      },
      {
        "stateID": "61",
        "state": "Rio Grande"
      },
      {
        "stateID": "62",
        "state": "Sabana Grande"
      },
      {
        "stateID": "63",
        "state": "Salinas"
      },
      {
        "stateID": "64",
        "state": "San German"
      },
      {
        "stateID": "65",
        "state": "San Juan"
      },
      {
        "stateID": "66",
        "state": "San Lorenzo"
      },
      {
        "stateID": "67",
        "state": "San Sebastian"
      },
      {
        "stateID": "68",
        "state": "Santa Isabel"
      },
      {
        "stateID": "69",
        "state": "Toa Alta"
      },
      {
        "stateID": "70",
        "state": "Toa Baja"
      },
      {
        "stateID": "71",
        "state": "Trujillo Alto"
      },
      {
        "stateID": "72",
        "state": "Utuado"
      },
      {
        "stateID": "73",
        "state": "Vega Alta"
      },
      {
        "stateID": "74",
        "state": "Vega Baja"
      },
      {
        "stateID": "75",
        "state": "Vieques"
      },
      {
        "stateID": "76",
        "state": "Villalba"
      },
      {
        "stateID": "77",
        "state": "Yabucoa"
      },
      {
        "stateID": "78",
        "state": "Yauco"
      }
    ],
    "Qatar": [
      {
        "stateID": "1",
        "state": "Ad Dawhah"
      },
      {
        "stateID": "2",
        "state": "Al Ghuwayriyah"
      },
      {
        "stateID": "3",
        "state": "Al Jumayliyah"
      },
      {
        "stateID": "4",
        "state": "Al Khawr"
      },
      {
        "stateID": "5",
        "state": "Al Wakrah"
      },
      {
        "stateID": "6",
        "state": "Ar Rayyan"
      },
      {
        "stateID": "7",
        "state": "Jarayan al Batinah"
      },
      {
        "stateID": "8",
        "state": "Madinat ash Shamal"
      },
      {
        "stateID": "9",
        "state": "Umm Salal"
      }
    ],
    "Reunion": [
      {
        "stateID": "1",
        "state": "Reunion"
      }
    ],
    "Romania": [
      {
        "stateID": "1",
        "state": "Alba"
      },
      {
        "stateID": "2",
        "state": "Arad"
      },
      {
        "stateID": "3",
        "state": "Arges"
      },
      {
        "stateID": "4",
        "state": "Bacau"
      },
      {
        "stateID": "5",
        "state": "Bihor"
      },
      {
        "stateID": "6",
        "state": "Bistrita-Nasaud"
      },
      {
        "stateID": "7",
        "state": "Botosani"
      },
      {
        "stateID": "8",
        "state": "Braila"
      },
      {
        "stateID": "9",
        "state": "Brasov"
      },
      {
        "stateID": "10",
        "state": "Bucuresti"
      },
      {
        "stateID": "11",
        "state": "Buzau"
      },
      {
        "stateID": "12",
        "state": "Calarasi"
      },
      {
        "stateID": "13",
        "state": "Caras-Severin"
      },
      {
        "stateID": "14",
        "state": "Cluj"
      },
      {
        "stateID": "15",
        "state": "Constanta"
      },
      {
        "stateID": "16",
        "state": "Covasna"
      },
      {
        "stateID": "17",
        "state": "Dimbovita"
      },
      {
        "stateID": "18",
        "state": "Dolj"
      },
      {
        "stateID": "19",
        "state": "Galati"
      },
      {
        "stateID": "20",
        "state": "Giurgiu"
      },
      {
        "stateID": "21",
        "state": "Gorj"
      },
      {
        "stateID": "22",
        "state": "Harghita"
      },
      {
        "stateID": "23",
        "state": "Hunedoara"
      },
      {
        "stateID": "24",
        "state": "Ialomita"
      },
      {
        "stateID": "25",
        "state": "Iasi"
      },
      {
        "stateID": "26",
        "state": "Maramures"
      },
      {
        "stateID": "27",
        "state": "Mehedinti"
      },
      {
        "stateID": "28",
        "state": "Mures"
      },
      {
        "stateID": "29",
        "state": "Neamt"
      },
      {
        "stateID": "30",
        "state": "Olt"
      },
      {
        "stateID": "31",
        "state": "Prahova"
      },
      {
        "stateID": "32",
        "state": "Salaj"
      },
      {
        "stateID": "33",
        "state": "Satu Mare"
      },
      {
        "stateID": "34",
        "state": "Sibiu"
      },
      {
        "stateID": "35",
        "state": "Suceava"
      },
      {
        "stateID": "36",
        "state": "Teleorman"
      },
      {
        "stateID": "37",
        "state": "Timis"
      },
      {
        "stateID": "38",
        "state": "Tulcea"
      },
      {
        "stateID": "39",
        "state": "Vaslui"
      },
      {
        "stateID": "40",
        "state": "Vilcea"
      },
      {
        "stateID": "41",
        "state": "Vrancea"
      }
    ],
    "Russia": [
      {
        "stateID": "1",
        "state": "Adygeya (Maykop)"
      },
      {
        "stateID": "2",
        "state": "Aginskiy Buryatskiy (Aginskoye)"
      },
      {
        "stateID": "3",
        "state": "Altay (Gorno-Altaysk)"
      },
      {
        "stateID": "4",
        "state": "Altayskiy (Barnaul)"
      },
      {
        "stateID": "5",
        "state": "Amurskaya (Blagoveshchensk)"
      },
      {
        "stateID": "6",
        "state": "Arkhangel'skaya"
      },
      {
        "stateID": "7",
        "state": "Astrakhanskaya"
      },
      {
        "stateID": "8",
        "state": "Bashkortostan (Ufa)"
      },
      {
        "stateID": "9",
        "state": "Belgorodskaya"
      },
      {
        "stateID": "10",
        "state": "Bryanskaya"
      },
      {
        "stateID": "11",
        "state": "Buryatiya (Ulan-Ude)"
      },
      {
        "stateID": "12",
        "state": "Chechnya (Groznyy)"
      },
      {
        "stateID": "13",
        "state": "Chelyabinskaya"
      },
      {
        "stateID": "14",
        "state": "Chitinskaya"
      },
      {
        "stateID": "15",
        "state": "Chukotskiy (Anadyr')"
      },
      {
        "stateID": "16",
        "state": "Chuvashiya (Cheboksary)"
      },
      {
        "stateID": "17",
        "state": "Dagestan (Makhachkala)"
      },
      {
        "stateID": "18",
        "state": "Evenkiyskiy (Tura)"
      },
      {
        "stateID": "19",
        "state": "Ingushetiya (Nazran')"
      },
      {
        "stateID": "20",
        "state": "Irkutskaya"
      },
      {
        "stateID": "21",
        "state": "Ivanovskaya"
      },
      {
        "stateID": "22",
        "state": "Kabardino-Balkariya (Nal'chik)"
      },
      {
        "stateID": "23",
        "state": "Kaliningradskaya"
      },
      {
        "stateID": "24",
        "state": "Kalmykiya (Elista)"
      },
      {
        "stateID": "25",
        "state": "Kaluzhskaya"
      },
      {
        "stateID": "26",
        "state": "Kamchatskaya (Petropavlovsk-Kamchatskiy)"
      },
      {
        "stateID": "27",
        "state": "Karachayevo-Cherkesiya (Cherkessk)"
      },
      {
        "stateID": "28",
        "state": "Kareliya (Petrozavodsk)"
      },
      {
        "stateID": "29",
        "state": "Kemerovskaya"
      },
      {
        "stateID": "30",
        "state": "Khabarovskiy"
      },
      {
        "stateID": "31",
        "state": "Khakasiya (Abakan)"
      },
      {
        "stateID": "32",
        "state": "Khanty-Mansiyskiy (Khanty-Mansiysk)"
      },
      {
        "stateID": "33",
        "state": "Kirovskaya"
      },
      {
        "stateID": "34",
        "state": "Komi (Syktyvkar)"
      },
      {
        "stateID": "35",
        "state": "Komi-Permyatskiy (Kudymkar)"
      },
      {
        "stateID": "36",
        "state": "Koryakskiy (Palana)"
      },
      {
        "stateID": "37",
        "state": "Kostromskaya"
      },
      {
        "stateID": "38",
        "state": "Krasnodarskiy"
      },
      {
        "stateID": "39",
        "state": "Krasnoyarskiy"
      },
      {
        "stateID": "40",
        "state": "Kurganskaya"
      },
      {
        "stateID": "41",
        "state": "Kurskaya"
      },
      {
        "stateID": "42",
        "state": "Leningradskaya"
      },
      {
        "stateID": "43",
        "state": "Lipetskaya"
      },
      {
        "stateID": "44",
        "state": "Magadanskaya"
      },
      {
        "stateID": "45",
        "state": "Mariy-El (Yoshkar-Ola)"
      },
      {
        "stateID": "46",
        "state": "Mordoviya (Saransk)"
      },
      {
        "stateID": "47",
        "state": "Moskovskaya"
      },
      {
        "stateID": "48",
        "state": "Moskva (Moscow)"
      },
      {
        "stateID": "49",
        "state": "Murmanskaya"
      },
      {
        "stateID": "50",
        "state": "Nenetskiy (Nar'yan-Mar)"
      },
      {
        "stateID": "51",
        "state": "Nizhegorodskaya"
      },
      {
        "stateID": "52",
        "state": "Novgorodskaya"
      },
      {
        "stateID": "53",
        "state": "Novosibirskaya"
      },
      {
        "stateID": "54",
        "state": "Omskaya"
      },
      {
        "stateID": "55",
        "state": "Orenburgskaya"
      },
      {
        "stateID": "56",
        "state": "Orlovskaya (Orel)"
      },
      {
        "stateID": "57",
        "state": "Penzenskaya"
      },
      {
        "stateID": "58",
        "state": "Permskaya"
      },
      {
        "stateID": "59",
        "state": "Primorskiy (Vladivostok)"
      },
      {
        "stateID": "60",
        "state": "Pskovskaya"
      },
      {
        "stateID": "61",
        "state": "Rostovskaya"
      },
      {
        "stateID": "62",
        "state": "Ryazanskaya"
      },
      {
        "stateID": "63",
        "state": "Sakha (Yakutsk)"
      },
      {
        "stateID": "64",
        "state": "Sakhalinskaya (Yuzhno-Sakhalinsk)"
      },
      {
        "stateID": "65",
        "state": "Samarskaya"
      },
      {
        "stateID": "66",
        "state": "Sankt-Peterburg (Saint Petersburg)"
      },
      {
        "stateID": "67",
        "state": "Saratovskaya"
      },
      {
        "stateID": "68",
        "state": "Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)"
      },
      {
        "stateID": "69",
        "state": "Smolenskaya"
      },
      {
        "stateID": "70",
        "state": "Stavropol'skiy"
      },
      {
        "stateID": "71",
        "state": "Sverdlovskaya (Yekaterinburg)"
      },
      {
        "stateID": "72",
        "state": "Tambovskaya"
      },
      {
        "stateID": "73",
        "state": "Tatarstan (Kazan')"
      },
      {
        "stateID": "74",
        "state": "Taymyrskiy (Dudinka)"
      },
      {
        "stateID": "75",
        "state": "Tomskaya"
      },
      {
        "stateID": "76",
        "state": "Tul'skaya"
      },
      {
        "stateID": "77",
        "state": "Tverskaya"
      },
      {
        "stateID": "78",
        "state": "Tyumenskaya"
      },
      {
        "stateID": "79",
        "state": "Tyva (Kyzyl)"
      },
      {
        "stateID": "80",
        "state": "Udmurtiya (Izhevsk)"
      },
      {
        "stateID": "81",
        "state": "Ul'yanovskaya"
      },
      {
        "stateID": "82",
        "state": "Ust'-Ordynskiy Buryatskiy (Ust'-Ordynskiy)"
      },
      {
        "stateID": "83",
        "state": "Vladimirskaya"
      },
      {
        "stateID": "84",
        "state": "Volgogradskaya"
      },
      {
        "stateID": "85",
        "state": "Vologodskaya"
      },
      {
        "stateID": "86",
        "state": "Voronezhskaya"
      },
      {
        "stateID": "87",
        "state": "Yamalo-Nenetskiy (Salekhard)"
      },
      {
        "stateID": "88",
        "state": "Yaroslavskaya"
      },
      {
        "stateID": "89",
        "state": "Yevreyskaya"
      }
    ],
    "Rwanda": [
      {
        "stateID": "1",
        "state": "Butare"
      },
      {
        "stateID": "2",
        "state": "Byumba"
      },
      {
        "stateID": "3",
        "state": "Cyangugu"
      },
      {
        "stateID": "4",
        "state": "Gikongoro"
      },
      {
        "stateID": "5",
        "state": "Gisenyi"
      },
      {
        "stateID": "6",
        "state": "Gitarama"
      },
      {
        "stateID": "7",
        "state": "Kibungo"
      },
      {
        "stateID": "8",
        "state": "Kibuye"
      },
      {
        "stateID": "9",
        "state": "Kigali Rurale"
      },
      {
        "stateID": "10",
        "state": "Kigali-ville"
      },
      {
        "stateID": "11",
        "state": "Ruhengeri"
      },
      {
        "stateID": "12",
        "state": "Umutara"
      }
    ],
    "Saint Helena": [
      {
        "stateID": "1",
        "state": "Ascension"
      },
      {
        "stateID": "2",
        "state": "Saint Helena"
      },
      {
        "stateID": "3",
        "state": "Tristan da Cunha"
      }
    ],
    "Saint Kitts and Nevis": [
      {
        "stateID": "1",
        "state": "Christ Church Nichola Town"
      },
      {
        "stateID": "2",
        "state": "Saint Anne Sandy Point"
      },
      {
        "stateID": "3",
        "state": "Saint George Basseterre"
      },
      {
        "stateID": "4",
        "state": "Saint George Gingerland"
      },
      {
        "stateID": "5",
        "state": "Saint James Windward"
      },
      {
        "stateID": "6",
        "state": "Saint John Capisterre"
      },
      {
        "stateID": "7",
        "state": "Saint John Figtree"
      },
      {
        "stateID": "8",
        "state": "Saint Mary Cayon"
      },
      {
        "stateID": "9",
        "state": "Saint Paul Capisterre"
      },
      {
        "stateID": "10",
        "state": "Saint Paul Charlestown"
      },
      {
        "stateID": "11",
        "state": "Saint Peter Basseterre"
      },
      {
        "stateID": "12",
        "state": "Saint Thomas Lowland"
      },
      {
        "stateID": "13",
        "state": "Saint Thomas Middle Island"
      },
      {
        "stateID": "14",
        "state": "Trinity Palmetto Point"
      }
    ],
    "Saint Lucia": [
      {
        "stateID": "1",
        "state": "Anse-la-Raye"
      },
      {
        "stateID": "2",
        "state": "Castries"
      },
      {
        "stateID": "3",
        "state": "Choiseul"
      },
      {
        "stateID": "4",
        "state": "Dauphin"
      },
      {
        "stateID": "5",
        "state": "Dennery"
      },
      {
        "stateID": "6",
        "state": "Gros Islet"
      },
      {
        "stateID": "7",
        "state": "Laborie"
      },
      {
        "stateID": "8",
        "state": "Micoud"
      },
      {
        "stateID": "9",
        "state": "Praslin"
      },
      {
        "stateID": "10",
        "state": "Soufriere"
      },
      {
        "stateID": "11",
        "state": "Vieux Fort"
      }
    ],
    "Saint Pierre and Miquelon": [
      {
        "stateID": "1",
        "state": "Miquelon"
      },
      {
        "stateID": "2",
        "state": "Saint Pierre"
      }
    ],
    "Saint Vincent and the Grenadines": [
      {
        "stateID": "1",
        "state": "Charlotte"
      },
      {
        "stateID": "2",
        "state": "Grenadines"
      },
      {
        "stateID": "3",
        "state": "Saint Andrew"
      },
      {
        "stateID": "4",
        "state": "Saint David"
      },
      {
        "stateID": "5",
        "state": "Saint George"
      },
      {
        "stateID": "6",
        "state": "Saint Patrick"
      }
    ],
    "Samoa": [
      {
        "stateID": "1",
        "state": "A'ana"
      },
      {
        "stateID": "2",
        "state": "Aiga-i-le-Tai"
      },
      {
        "stateID": "3",
        "state": "Atua"
      },
      {
        "stateID": "4",
        "state": "Fa'asaleleaga"
      },
      {
        "stateID": "5",
        "state": "Gaga'emauga"
      },
      {
        "stateID": "6",
        "state": "Gagaifomauga"
      },
      {
        "stateID": "7",
        "state": "Palauli"
      },
      {
        "stateID": "8",
        "state": "Satupa'itea"
      },
      {
        "stateID": "9",
        "state": "Tuamasaga"
      },
      {
        "stateID": "10",
        "state": "Va'a-o-Fonoti"
      },
      {
        "stateID": "11",
        "state": "Vaisigano"
      }
    ],
    "San Marino": [
      {
        "stateID": "1",
        "state": "Acquaviva"
      },
      {
        "stateID": "2",
        "state": "Borgo Maggiore"
      },
      {
        "stateID": "3",
        "state": "Chiesanuova"
      },
      {
        "stateID": "4",
        "state": "Domagnano"
      },
      {
        "stateID": "5",
        "state": "Faetano"
      },
      {
        "stateID": "6",
        "state": "Fiorentino"
      },
      {
        "stateID": "7",
        "state": "Monte Giardino"
      },
      {
        "stateID": "8",
        "state": "San Marino"
      },
      {
        "stateID": "9",
        "state": "Serravalle"
      }
    ],
    "Sao Tome and Principe": [
      {
        "stateID": "1",
        "state": "Principe"
      },
      {
        "stateID": "2",
        "state": "Sao Tome"
      }
    ],
    "Saudi Arabia": [
      {
        "stateID": "1",
        "state": "'Asir"
      },
      {
        "stateID": "2",
        "state": "Al Bahah"
      },
      {
        "stateID": "3",
        "state": "Al Hudud ash Shamaliyah"
      },
      {
        "stateID": "4",
        "state": "Al Jawf"
      },
      {
        "stateID": "5",
        "state": "Al Madinah"
      },
      {
        "stateID": "6",
        "state": "Al Qasim"
      },
      {
        "stateID": "7",
        "state": "Ar Riyad"
      },
      {
        "stateID": "8",
        "state": "Ash Sharqiyah (Eastern Province)"
      },
      {
        "stateID": "9",
        "state": "Ha'il"
      },
      {
        "stateID": "10",
        "state": "Jizan"
      },
      {
        "stateID": "11",
        "state": "Makkah"
      },
      {
        "stateID": "12",
        "state": "Najran"
      },
      {
        "stateID": "13",
        "state": "Tabuk"
      }
    ],
    "Scotland": [
      {
        "stateID": "1",
        "state": "Aberdeen City"
      },
      {
        "stateID": "2",
        "state": "Aberdeenshire"
      },
      {
        "stateID": "3",
        "state": "Angus"
      },
      {
        "stateID": "4",
        "state": "Argyll and Bute"
      },
      {
        "stateID": "5",
        "state": "City of Edinburgh"
      },
      {
        "stateID": "6",
        "state": "Clackmannanshire"
      },
      {
        "stateID": "7",
        "state": "Dumfries and Galloway"
      },
      {
        "stateID": "8",
        "state": "Dundee City"
      },
      {
        "stateID": "9",
        "state": "East Ayrshire"
      },
      {
        "stateID": "10",
        "state": "East Dunbartonshire"
      },
      {
        "stateID": "11",
        "state": "East Lothian"
      },
      {
        "stateID": "12",
        "state": "East Renfrewshire"
      },
      {
        "stateID": "13",
        "state": "Eilean Siar (Western Isles)"
      },
      {
        "stateID": "14",
        "state": "Falkirk"
      },
      {
        "stateID": "15",
        "state": "Fife"
      },
      {
        "stateID": "16",
        "state": "Glasgow City"
      },
      {
        "stateID": "17",
        "state": "Highland"
      },
      {
        "stateID": "18",
        "state": "Inverclyde"
      },
      {
        "stateID": "19",
        "state": "Midlothian"
      },
      {
        "stateID": "20",
        "state": "Moray"
      },
      {
        "stateID": "21",
        "state": "North Ayrshire"
      },
      {
        "stateID": "22",
        "state": "North Lanarkshire"
      },
      {
        "stateID": "23",
        "state": "Orkney Islands"
      },
      {
        "stateID": "24",
        "state": "Perth and Kinross"
      },
      {
        "stateID": "25",
        "state": "Renfrewshire"
      },
      {
        "stateID": "26",
        "state": "Shetland Islands"
      },
      {
        "stateID": "27",
        "state": "South Ayrshire"
      },
      {
        "stateID": "28",
        "state": "South Lanarkshire"
      },
      {
        "stateID": "29",
        "state": "Stirling"
      },
      {
        "stateID": "30",
        "state": "The Scottish Borders"
      },
      {
        "stateID": "31",
        "state": "West Dunbartonshire"
      },
      {
        "stateID": "32",
        "state": "West Lothian"
      }
    ],
    "Senegal": [
      {
        "stateID": "1",
        "state": "Dakar"
      },
      {
        "stateID": "2",
        "state": "Diourbel"
      },
      {
        "stateID": "3",
        "state": "Fatick"
      },
      {
        "stateID": "4",
        "state": "Kaolack"
      },
      {
        "stateID": "5",
        "state": "Kolda"
      },
      {
        "stateID": "6",
        "state": "Louga"
      },
      {
        "stateID": "7",
        "state": "Saint-Louis"
      },
      {
        "stateID": "8",
        "state": "Tambacounda"
      },
      {
        "stateID": "9",
        "state": "Thies"
      },
      {
        "stateID": "10",
        "state": "Ziguinchor"
      }
    ],
    "Seychelles": [
      {
        "stateID": "1",
        "state": "Anse aux Pins"
      },
      {
        "stateID": "2",
        "state": "Anse Boileau"
      },
      {
        "stateID": "3",
        "state": "Anse Etoile"
      },
      {
        "stateID": "4",
        "state": "Anse Louis"
      },
      {
        "stateID": "5",
        "state": "Anse Royale"
      },
      {
        "stateID": "6",
        "state": "Baie Lazare"
      },
      {
        "stateID": "7",
        "state": "Baie Sainte Anne"
      },
      {
        "stateID": "8",
        "state": "Beau Vallon"
      },
      {
        "stateID": "9",
        "state": "Bel Air"
      },
      {
        "stateID": "10",
        "state": "Bel Ombre"
      },
      {
        "stateID": "11",
        "state": "Cascade"
      },
      {
        "stateID": "12",
        "state": "Glacis"
      },
      {
        "stateID": "13",
        "state": "Grand' Anse (on Mahe)"
      },
      {
        "stateID": "14",
        "state": "Grand' Anse (on Praslin)"
      },
      {
        "stateID": "15",
        "state": "La Digue"
      },
      {
        "stateID": "16",
        "state": "La Riviere Anglaise"
      },
      {
        "stateID": "17",
        "state": "Mont Buxton"
      },
      {
        "stateID": "18",
        "state": "Mont Fleuri"
      },
      {
        "stateID": "19",
        "state": "Plaisance"
      },
      {
        "stateID": "20",
        "state": "Pointe La Rue"
      },
      {
        "stateID": "21",
        "state": "Port Glaud"
      },
      {
        "stateID": "22",
        "state": "Saint Louis"
      },
      {
        "stateID": "23",
        "state": "Takamaka"
      }
    ],
    "Sierra Leone": [
      {
        "stateID": "1",
        "state": "Eastern"
      },
      {
        "stateID": "2",
        "state": "Northern"
      },
      {
        "stateID": "3",
        "state": "Southern"
      },
      {
        "stateID": "4",
        "state": "Western"
      }
    ],
    "Singapore": [
      {
        "stateID": "1",
        "state": "Singapore"
      }
    ],
    "Slovakia": [
      {
        "stateID": "1",
        "state": "Banskobystricky"
      },
      {
        "stateID": "2",
        "state": "Bratislavsky"
      },
      {
        "stateID": "3",
        "state": "Kosicky"
      },
      {
        "stateID": "4",
        "state": "Nitriansky"
      },
      {
        "stateID": "5",
        "state": "Presovsky"
      },
      {
        "stateID": "6",
        "state": "Trenciansky"
      },
      {
        "stateID": "7",
        "state": "Trnavsky"
      },
      {
        "stateID": "8",
        "state": "Zilinsky"
      }
    ],
    "Slovenia": [
      {
        "stateID": "1",
        "state": "Ajdovscina"
      },
      {
        "stateID": "2",
        "state": "Beltinci"
      },
      {
        "stateID": "3",
        "state": "Bled"
      },
      {
        "stateID": "4",
        "state": "Bohinj"
      },
      {
        "stateID": "5",
        "state": "Borovnica"
      },
      {
        "stateID": "6",
        "state": "Bovec"
      },
      {
        "stateID": "7",
        "state": "Brda"
      },
      {
        "stateID": "8",
        "state": "Brezice"
      },
      {
        "stateID": "9",
        "state": "Brezovica"
      },
      {
        "stateID": "10",
        "state": "Cankova-Tisina"
      },
      {
        "stateID": "11",
        "state": "Celje"
      },
      {
        "stateID": "12",
        "state": "Cerklje na Gorenjskem"
      },
      {
        "stateID": "13",
        "state": "Cerknica"
      },
      {
        "stateID": "14",
        "state": "Cerkno"
      },
      {
        "stateID": "15",
        "state": "Crensovci"
      },
      {
        "stateID": "16",
        "state": "Crna na Koroskem"
      },
      {
        "stateID": "17",
        "state": "Crnomelj"
      },
      {
        "stateID": "18",
        "state": "Destrnik-Trnovska Vas"
      },
      {
        "stateID": "19",
        "state": "Divaca"
      },
      {
        "stateID": "20",
        "state": "Dobrepolje"
      },
      {
        "stateID": "21",
        "state": "Dobrova-Horjul-Polhov Gradec"
      },
      {
        "stateID": "22",
        "state": "Dol pri Ljubljani"
      },
      {
        "stateID": "23",
        "state": "Domzale"
      },
      {
        "stateID": "24",
        "state": "Dornava"
      },
      {
        "stateID": "25",
        "state": "Dravograd"
      },
      {
        "stateID": "26",
        "state": "Duplek"
      },
      {
        "stateID": "27",
        "state": "Gorenja Vas-Poljane"
      },
      {
        "stateID": "28",
        "state": "Gorisnica"
      },
      {
        "stateID": "29",
        "state": "Gornja Radgona"
      },
      {
        "stateID": "30",
        "state": "Gornji Grad"
      },
      {
        "stateID": "31",
        "state": "Gornji Petrovci"
      },
      {
        "stateID": "32",
        "state": "Grosuplje"
      },
      {
        "stateID": "33",
        "state": "Hodos Salovci"
      },
      {
        "stateID": "34",
        "state": "Hrastnik"
      },
      {
        "stateID": "35",
        "state": "Hrpelje-Kozina"
      },
      {
        "stateID": "36",
        "state": "Idrija"
      },
      {
        "stateID": "37",
        "state": "Ig"
      },
      {
        "stateID": "38",
        "state": "Ilirska Bistrica"
      },
      {
        "stateID": "39",
        "state": "Ivancna Gorica"
      },
      {
        "stateID": "40",
        "state": "Izola"
      },
      {
        "stateID": "41",
        "state": "Jesenice"
      },
      {
        "stateID": "42",
        "state": "Jursinci"
      },
      {
        "stateID": "43",
        "state": "Kamnik"
      },
      {
        "stateID": "44",
        "state": "Kanal"
      },
      {
        "stateID": "45",
        "state": "Kidricevo"
      },
      {
        "stateID": "46",
        "state": "Kobarid"
      },
      {
        "stateID": "47",
        "state": "Kobilje"
      },
      {
        "stateID": "48",
        "state": "Kocevje"
      },
      {
        "stateID": "49",
        "state": "Komen"
      },
      {
        "stateID": "50",
        "state": "Koper"
      },
      {
        "stateID": "51",
        "state": "Kozje"
      },
      {
        "stateID": "52",
        "state": "Kranj"
      },
      {
        "stateID": "53",
        "state": "Kranjska Gora"
      },
      {
        "stateID": "54",
        "state": "Krsko"
      },
      {
        "stateID": "55",
        "state": "Kungota"
      },
      {
        "stateID": "56",
        "state": "Kuzma"
      },
      {
        "stateID": "57",
        "state": "Lasko"
      },
      {
        "stateID": "58",
        "state": "Lenart"
      },
      {
        "stateID": "59",
        "state": "Lendava"
      },
      {
        "stateID": "60",
        "state": "Litija"
      },
      {
        "stateID": "61",
        "state": "Ljubljana"
      },
      {
        "stateID": "62",
        "state": "Ljubno"
      },
      {
        "stateID": "63",
        "state": "Ljutomer"
      },
      {
        "stateID": "64",
        "state": "Logatec"
      },
      {
        "stateID": "65",
        "state": "Loska Dolina"
      },
      {
        "stateID": "66",
        "state": "Loski Potok"
      },
      {
        "stateID": "67",
        "state": "Luce"
      },
      {
        "stateID": "68",
        "state": "Lukovica"
      },
      {
        "stateID": "69",
        "state": "Majsperk"
      },
      {
        "stateID": "70",
        "state": "Maribor"
      },
      {
        "stateID": "71",
        "state": "Medvode"
      },
      {
        "stateID": "72",
        "state": "Menges"
      },
      {
        "stateID": "73",
        "state": "Metlika"
      },
      {
        "stateID": "74",
        "state": "Mezica"
      },
      {
        "stateID": "75",
        "state": "Miren-Kostanjevica"
      },
      {
        "stateID": "76",
        "state": "Mislinja"
      },
      {
        "stateID": "77",
        "state": "Moravce"
      },
      {
        "stateID": "78",
        "state": "Moravske Toplice"
      },
      {
        "stateID": "79",
        "state": "Mozirje"
      },
      {
        "stateID": "80",
        "state": "Murska Sobota"
      },
      {
        "stateID": "81",
        "state": "Muta"
      },
      {
        "stateID": "82",
        "state": "Naklo"
      },
      {
        "stateID": "83",
        "state": "Nazarje"
      },
      {
        "stateID": "84",
        "state": "Nova Gorica"
      },
      {
        "stateID": "85",
        "state": "Novo Mesto"
      },
      {
        "stateID": "86",
        "state": "Odranci"
      },
      {
        "stateID": "87",
        "state": "Ormoz"
      },
      {
        "stateID": "88",
        "state": "Osilnica"
      },
      {
        "stateID": "89",
        "state": "Pesnica"
      },
      {
        "stateID": "90",
        "state": "Piran"
      },
      {
        "stateID": "91",
        "state": "Pivka"
      },
      {
        "stateID": "92",
        "state": "Podcetrtek"
      },
      {
        "stateID": "93",
        "state": "Podvelka-Ribnica"
      },
      {
        "stateID": "94",
        "state": "Postojna"
      },
      {
        "stateID": "95",
        "state": "Preddvor"
      },
      {
        "stateID": "96",
        "state": "Ptuj"
      },
      {
        "stateID": "97",
        "state": "Puconci"
      },
      {
        "stateID": "98",
        "state": "Race-Fram"
      },
      {
        "stateID": "99",
        "state": "Radece"
      },
      {
        "stateID": "100",
        "state": "Radenci"
      },
      {
        "stateID": "101",
        "state": "Radlje ob Dravi"
      },
      {
        "stateID": "102",
        "state": "Radovljica"
      },
      {
        "stateID": "103",
        "state": "Ravne-Prevalje"
      },
      {
        "stateID": "104",
        "state": "Ribnica"
      },
      {
        "stateID": "105",
        "state": "Rogasevci"
      },
      {
        "stateID": "106",
        "state": "Rogaska Slatina"
      },
      {
        "stateID": "107",
        "state": "Rogatec"
      },
      {
        "stateID": "108",
        "state": "Ruse"
      },
      {
        "stateID": "109",
        "state": "Semic"
      },
      {
        "stateID": "110",
        "state": "Sencur"
      },
      {
        "stateID": "111",
        "state": "Sentilj"
      },
      {
        "stateID": "112",
        "state": "Sentjernej"
      },
      {
        "stateID": "113",
        "state": "Sentjur pri Celju"
      },
      {
        "stateID": "114",
        "state": "Sevnica"
      },
      {
        "stateID": "115",
        "state": "Sezana"
      },
      {
        "stateID": "116",
        "state": "Skocjan"
      },
      {
        "stateID": "117",
        "state": "Skofja Loka"
      },
      {
        "stateID": "118",
        "state": "Skofljica"
      },
      {
        "stateID": "119",
        "state": "Slovenj Gradec"
      },
      {
        "stateID": "120",
        "state": "Slovenska Bistrica"
      },
      {
        "stateID": "121",
        "state": "Slovenske Konjice"
      },
      {
        "stateID": "122",
        "state": "Smarje pri Jelsah"
      },
      {
        "stateID": "123",
        "state": "Smartno ob Paki"
      },
      {
        "stateID": "124",
        "state": "Sostanj"
      },
      {
        "stateID": "125",
        "state": "Starse"
      },
      {
        "stateID": "126",
        "state": "Store"
      },
      {
        "stateID": "127",
        "state": "Sveti Jurij"
      },
      {
        "stateID": "128",
        "state": "Tolmin"
      },
      {
        "stateID": "129",
        "state": "Trbovlje"
      },
      {
        "stateID": "130",
        "state": "Trebnje"
      },
      {
        "stateID": "131",
        "state": "Trzic"
      },
      {
        "stateID": "132",
        "state": "Turnisce"
      },
      {
        "stateID": "133",
        "state": "Velenje"
      },
      {
        "stateID": "134",
        "state": "Velike Lasce"
      },
      {
        "stateID": "135",
        "state": "Videm"
      },
      {
        "stateID": "136",
        "state": "Vipava"
      },
      {
        "stateID": "137",
        "state": "Vitanje"
      },
      {
        "stateID": "138",
        "state": "Vodice"
      },
      {
        "stateID": "139",
        "state": "Vojnik"
      },
      {
        "stateID": "140",
        "state": "Vrhnika"
      },
      {
        "stateID": "141",
        "state": "Vuzenica"
      },
      {
        "stateID": "142",
        "state": "Zagorje ob Savi"
      },
      {
        "stateID": "143",
        "state": "Zalec"
      },
      {
        "stateID": "144",
        "state": "Zavrc"
      },
      {
        "stateID": "145",
        "state": "Zelezniki"
      },
      {
        "stateID": "146",
        "state": "Ziri"
      },
      {
        "stateID": "147",
        "state": "Zrece"
      }
    ],
    "Solomon Islands": [
      {
        "stateID": "1",
        "state": "Bellona"
      },
      {
        "stateID": "2",
        "state": "Central"
      },
      {
        "stateID": "3",
        "state": "Choiseul (Lauru)"
      },
      {
        "stateID": "4",
        "state": "Guadalcanal"
      },
      {
        "stateID": "5",
        "state": "Honiara"
      },
      {
        "stateID": "6",
        "state": "Isabel"
      },
      {
        "stateID": "7",
        "state": "Makira"
      },
      {
        "stateID": "8",
        "state": "Malaita"
      },
      {
        "stateID": "9",
        "state": "Rennell"
      },
      {
        "stateID": "10",
        "state": "Temotu"
      },
      {
        "stateID": "11",
        "state": "Western"
      }
    ],
    "Somalia": [
      {
        "stateID": "1",
        "state": "Awdal"
      },
      {
        "stateID": "2",
        "state": "Bakool"
      },
      {
        "stateID": "3",
        "state": "Banaadir"
      },
      {
        "stateID": "4",
        "state": "Bari"
      },
      {
        "stateID": "5",
        "state": "Bay"
      },
      {
        "stateID": "6",
        "state": "Galguduud"
      },
      {
        "stateID": "7",
        "state": "Gedo"
      },
      {
        "stateID": "8",
        "state": "Hiiraan"
      },
      {
        "stateID": "9",
        "state": "Jubbada Dhexe"
      },
      {
        "stateID": "10",
        "state": "Jubbada Hoose"
      },
      {
        "stateID": "11",
        "state": "Mudug"
      },
      {
        "stateID": "12",
        "state": "Nugaal"
      },
      {
        "stateID": "13",
        "state": "Sanaag"
      },
      {
        "stateID": "14",
        "state": "Shabeellaha Dhexe"
      },
      {
        "stateID": "15",
        "state": "Shabeellaha Hoose"
      },
      {
        "stateID": "16",
        "state": "Sool"
      },
      {
        "stateID": "17",
        "state": "Togdheer"
      },
      {
        "stateID": "18",
        "state": "Woqooyi Galbeed"
      }
    ],
    "South Africa": [
      {
        "stateID": "1",
        "state": "Eastern Cape"
      },
      {
        "stateID": "2",
        "state": "Free State"
      },
      {
        "stateID": "3",
        "state": "Gauteng"
      },
      {
        "stateID": "4",
        "state": "KwaZulu-Natal"
      },
      {
        "stateID": "5",
        "state": "Mpumalanga"
      },
      {
        "stateID": "6",
        "state": "North-West"
      },
      {
        "stateID": "7",
        "state": "Northern Cape"
      },
      {
        "stateID": "8",
        "state": "Northern Province"
      },
      {
        "stateID": "9",
        "state": "Western Cape"
      }
    ],
    "South Georgia and South Sandwich Islands": [
      {
        "stateID": "1",
        "state": "Bird Island"
      },
      {
        "stateID": "2",
        "state": "Bristol Island"
      },
      {
        "stateID": "3",
        "state": "Clerke Rocks"
      },
      {
        "stateID": "4",
        "state": "Montagu Island"
      },
      {
        "stateID": "5",
        "state": "Saunders Island"
      },
      {
        "stateID": "6",
        "state": "South Georgia"
      },
      {
        "stateID": "7",
        "state": "Southern Thule"
      },
      {
        "stateID": "8",
        "state": "Traversay Islands"
      }
    ],
    "Spain": [
      {
        "stateID": "1",
        "state": "Andalucia"
      },
      {
        "stateID": "2",
        "state": "Aragon"
      },
      {
        "stateID": "3",
        "state": "Asturias"
      },
      {
        "stateID": "4",
        "state": "Baleares (Balearic Islands)"
      },
      {
        "stateID": "5",
        "state": "Canarias (Canary Islands)"
      },
      {
        "stateID": "6",
        "state": "Cantabria"
      },
      {
        "stateID": "7",
        "state": "Castilla y Leon"
      },
      {
        "stateID": "8",
        "state": "Castilla-La Mancha"
      },
      {
        "stateID": "9",
        "state": "Cataluna"
      },
      {
        "stateID": "10",
        "state": "Ceuta"
      },
      {
        "stateID": "11",
        "state": "Communidad Valencian"
      },
      {
        "stateID": "12",
        "state": "Extremadura"
      },
      {
        "stateID": "13",
        "state": "Galicia"
      },
      {
        "stateID": "14",
        "state": "Islas Chafarinas"
      },
      {
        "stateID": "15",
        "state": "La Rioja"
      },
      {
        "stateID": "16",
        "state": "Madrid"
      },
      {
        "stateID": "17",
        "state": "Melilla"
      },
      {
        "stateID": "18",
        "state": "Murcia"
      },
      {
        "stateID": "19",
        "state": "Navarra"
      },
      {
        "stateID": "20",
        "state": "Pais Vasco (Basque Country)"
      },
      {
        "stateID": "21",
        "state": "Penon de Alhucemas"
      },
      {
        "stateID": "22",
        "state": "Penon de Velez de la Gomera"
      }
    ],
    "Spratly Islands": [
      {
        "stateID": "1",
        "state": "Spratly Islands"
      }
    ],
    "Sri Lanka": [
      {
        "stateID": "1",
        "state": "Central"
      },
      {
        "stateID": "2",
        "state": "Eastern"
      },
      {
        "stateID": "3",
        "state": "North Central"
      },
      {
        "stateID": "4",
        "state": "North Eastern"
      },
      {
        "stateID": "5",
        "state": "North Western"
      },
      {
        "stateID": "6",
        "state": "Northern"
      },
      {
        "stateID": "7",
        "state": "Sabaragamuwa"
      },
      {
        "stateID": "8",
        "state": "Southern"
      },
      {
        "stateID": "9",
        "state": "Uva"
      },
      {
        "stateID": "10",
        "state": "Western"
      }
    ],
    "Sudan": [
      {
        "stateID": "1",
        "state": "A'ali an Nil"
      },
      {
        "stateID": "2",
        "state": "Al Bahr al Ahmar"
      },
      {
        "stateID": "3",
        "state": "Al Buhayrat"
      },
      {
        "stateID": "4",
        "state": "Al Jazirah"
      },
      {
        "stateID": "5",
        "state": "Al Khartum"
      },
      {
        "stateID": "6",
        "state": "Al Qadarif"
      },
      {
        "stateID": "7",
        "state": "Al Wahdah"
      },
      {
        "stateID": "8",
        "state": "An Nil al Abyad"
      },
      {
        "stateID": "9",
        "state": "An Nil al Azraq"
      },
      {
        "stateID": "10",
        "state": "Ash Shamaliyah"
      },
      {
        "stateID": "11",
        "state": "Bahr al Jabal"
      },
      {
        "stateID": "12",
        "state": "Gharb al Istiwa'iyah"
      },
      {
        "stateID": "13",
        "state": "Gharb Bahr al Ghazal"
      },
      {
        "stateID": "14",
        "state": "Gharb Darfur"
      },
      {
        "stateID": "15",
        "state": "Gharb Kurdufan"
      },
      {
        "stateID": "16",
        "state": "Janub Darfur"
      },
      {
        "stateID": "17",
        "state": "Janub Kurdufan"
      },
      {
        "stateID": "18",
        "state": "Junqali"
      },
      {
        "stateID": "19",
        "state": "Kassala"
      },
      {
        "stateID": "20",
        "state": "Nahr an Nil"
      },
      {
        "stateID": "21",
        "state": "Shamal Bahr al Ghazal"
      },
      {
        "stateID": "22",
        "state": "Shamal Darfur"
      },
      {
        "stateID": "23",
        "state": "Shamal Kurdufan"
      },
      {
        "stateID": "24",
        "state": "Sharq al Istiwa'iyah"
      },
      {
        "stateID": "25",
        "state": "Sinnar"
      },
      {
        "stateID": "26",
        "state": "Warab"
      }
    ],
    "Suriname": [
      {
        "stateID": "1",
        "state": "Brokopondo"
      },
      {
        "stateID": "2",
        "state": "Commewijne"
      },
      {
        "stateID": "3",
        "state": "Coronie"
      },
      {
        "stateID": "4",
        "state": "Marowijne"
      },
      {
        "stateID": "5",
        "state": "Nickerie"
      },
      {
        "stateID": "6",
        "state": "Para"
      },
      {
        "stateID": "7",
        "state": "Paramaribo"
      },
      {
        "stateID": "8",
        "state": "Saramacca"
      },
      {
        "stateID": "9",
        "state": "Sipaliwini"
      },
      {
        "stateID": "10",
        "state": "Wanica"
      }
    ],
    "Svalbard": [
      {
        "stateID": "1",
        "state": "Barentsoya"
      },
      {
        "stateID": "2",
        "state": "Bjornoya"
      },
      {
        "stateID": "3",
        "state": "Edgeoya"
      },
      {
        "stateID": "4",
        "state": "Hopen"
      },
      {
        "stateID": "5",
        "state": "Kvitoya"
      },
      {
        "stateID": "6",
        "state": "Nordaustandet"
      },
      {
        "stateID": "7",
        "state": "Prins Karls Forland"
      },
      {
        "stateID": "8",
        "state": "Spitsbergen"
      }
    ],
    "Swaziland": [
      {
        "stateID": "1",
        "state": "Hhohho"
      },
      {
        "stateID": "2",
        "state": "Lubombo"
      },
      {
        "stateID": "3",
        "state": "Manzini"
      },
      {
        "stateID": "4",
        "state": "Shiselweni"
      }
    ],
    "Sweden": [
      {
        "stateID": "1",
        "state": "Blekinge"
      },
      {
        "stateID": "2",
        "state": "Dalarnas"
      },
      {
        "stateID": "3",
        "state": "Gavleborgs"
      },
      {
        "stateID": "4",
        "state": "Gotlands"
      },
      {
        "stateID": "5",
        "state": "Hallands"
      },
      {
        "stateID": "6",
        "state": "Jamtlands"
      },
      {
        "stateID": "7",
        "state": "Jonkopings"
      },
      {
        "stateID": "8",
        "state": "Kalmar"
      },
      {
        "stateID": "9",
        "state": "Kronobergs"
      },
      {
        "stateID": "10",
        "state": "Norrbottens"
      },
      {
        "stateID": "11",
        "state": "Orebro"
      },
      {
        "stateID": "12",
        "state": "Ostergotlands"
      },
      {
        "stateID": "13",
        "state": "Skane"
      },
      {
        "stateID": "14",
        "state": "Sodermanlands"
      },
      {
        "stateID": "15",
        "state": "Stockholms"
      },
      {
        "stateID": "16",
        "state": "Uppsala"
      },
      {
        "stateID": "17",
        "state": "Varmlands"
      },
      {
        "stateID": "18",
        "state": "Vasterbottens"
      },
      {
        "stateID": "19",
        "state": "Vasternorrlands"
      },
      {
        "stateID": "20",
        "state": "Vastmanlands"
      },
      {
        "stateID": "21",
        "state": "Vastra Gotalands"
      }
    ],
    "Switzerland": [
      {
        "stateID": "1",
        "state": "Aargau"
      },
      {
        "stateID": "2",
        "state": "Ausser-Rhoden"
      },
      {
        "stateID": "3",
        "state": "Basel-Landschaft"
      },
      {
        "stateID": "4",
        "state": "Basel-Stadt"
      },
      {
        "stateID": "5",
        "state": "Bern"
      },
      {
        "stateID": "6",
        "state": "Fribourg"
      },
      {
        "stateID": "7",
        "state": "Geneve"
      },
      {
        "stateID": "8",
        "state": "Glarus"
      },
      {
        "stateID": "9",
        "state": "Graubunden"
      },
      {
        "stateID": "10",
        "state": "Inner-Rhoden"
      },
      {
        "stateID": "11",
        "state": "Jura"
      },
      {
        "stateID": "12",
        "state": "Luzern"
      },
      {
        "stateID": "13",
        "state": "Neuchatel"
      },
      {
        "stateID": "14",
        "state": "Nidwalden"
      },
      {
        "stateID": "15",
        "state": "Obwalden"
      },
      {
        "stateID": "16",
        "state": "Sankt Gallen"
      },
      {
        "stateID": "17",
        "state": "Schaffhausen"
      },
      {
        "stateID": "18",
        "state": "Schwyz"
      },
      {
        "stateID": "19",
        "state": "Solothurn"
      },
      {
        "stateID": "20",
        "state": "Thurgau"
      },
      {
        "stateID": "21",
        "state": "Ticino"
      },
      {
        "stateID": "22",
        "state": "Uri"
      },
      {
        "stateID": "23",
        "state": "Valais"
      },
      {
        "stateID": "24",
        "state": "Vaud"
      },
      {
        "stateID": "25",
        "state": "Zug"
      },
      {
        "stateID": "26",
        "state": "Zurich"
      }
    ],
    "Syria": [
      {
        "stateID": "1",
        "state": "Al Hasakah"
      },
      {
        "stateID": "2",
        "state": "Al Ladhiqiyah"
      },
      {
        "stateID": "3",
        "state": "Al Qunaytirah"
      },
      {
        "stateID": "4",
        "state": "Ar Raqqah"
      },
      {
        "stateID": "5",
        "state": "As Suwayda'"
      },
      {
        "stateID": "6",
        "state": "Dar'a"
      },
      {
        "stateID": "7",
        "state": "Dayr az Zawr"
      },
      {
        "stateID": "8",
        "state": "Dimashq"
      },
      {
        "stateID": "9",
        "state": "Halab"
      },
      {
        "stateID": "10",
        "state": "Hamah"
      },
      {
        "stateID": "11",
        "state": "Hims"
      },
      {
        "stateID": "12",
        "state": "Idlib"
      },
      {
        "stateID": "13",
        "state": "Rif Dimashq"
      },
      {
        "stateID": "14",
        "state": "Tartus"
      }
    ],
    "Taiwan": [
      {
        "stateID": "1",
        "state": "Chang-hua"
      },
      {
        "stateID": "2",
        "state": "Chi-lung"
      },
      {
        "stateID": "3",
        "state": "Chia-i"
      },
      {
        "stateID": "4",
        "state": "Chia-i"
      },
      {
        "stateID": "5",
        "state": "Chung-hsing-hsin-ts'un"
      },
      {
        "stateID": "6",
        "state": "Hsin-chu"
      },
      {
        "stateID": "7",
        "state": "Hsin-chu"
      },
      {
        "stateID": "8",
        "state": "Hua-lien"
      },
      {
        "stateID": "9",
        "state": "I-lan"
      },
      {
        "stateID": "10",
        "state": "Kao-hsiung"
      },
      {
        "stateID": "11",
        "state": "Kao-hsiung"
      },
      {
        "stateID": "12",
        "state": "Miao-li"
      },
      {
        "stateID": "13",
        "state": "Nan-t'ou"
      },
      {
        "stateID": "14",
        "state": "P'eng-hu"
      },
      {
        "stateID": "15",
        "state": "P'ing-tung"
      },
      {
        "stateID": "16",
        "state": "T'ai-chung"
      },
      {
        "stateID": "17",
        "state": "T'ai-chung"
      },
      {
        "stateID": "18",
        "state": "T'ai-nan"
      },
      {
        "stateID": "19",
        "state": "T'ai-nan"
      },
      {
        "stateID": "20",
        "state": "T'ai-pei"
      },
      {
        "stateID": "21",
        "state": "T'ai-pei"
      },
      {
        "stateID": "22",
        "state": "T'ai-tung"
      },
      {
        "stateID": "23",
        "state": "T'ao-yuan"
      },
      {
        "stateID": "24",
        "state": "Yun-lin"
      }
    ],
    "Tajikistan": [
      {
        "stateID": "1",
        "state": "Viloyati Khatlon"
      },
      {
        "stateID": "2",
        "state": "Viloyati Leninobod"
      },
      {
        "stateID": "3",
        "state": "Viloyati Mukhtori Kuhistoni Badakhshon"
      }
    ],
    "Tanzania": [
      {
        "stateID": "1",
        "state": "Arusha"
      },
      {
        "stateID": "2",
        "state": "Dar es Salaam"
      },
      {
        "stateID": "3",
        "state": "Dodoma"
      },
      {
        "stateID": "4",
        "state": "Iringa"
      },
      {
        "stateID": "5",
        "state": "Kagera"
      },
      {
        "stateID": "6",
        "state": "Kigoma"
      },
      {
        "stateID": "7",
        "state": "Kilimanjaro"
      },
      {
        "stateID": "8",
        "state": "Lindi"
      },
      {
        "stateID": "9",
        "state": "Mara"
      },
      {
        "stateID": "10",
        "state": "Mbeya"
      },
      {
        "stateID": "11",
        "state": "Morogoro"
      },
      {
        "stateID": "12",
        "state": "Mtwara"
      },
      {
        "stateID": "13",
        "state": "Mwanza"
      },
      {
        "stateID": "14",
        "state": "Pemba North"
      },
      {
        "stateID": "15",
        "state": "Pemba South"
      },
      {
        "stateID": "16",
        "state": "Pwani"
      },
      {
        "stateID": "17",
        "state": "Rukwa"
      },
      {
        "stateID": "18",
        "state": "Ruvuma"
      },
      {
        "stateID": "19",
        "state": "Shinyanga"
      },
      {
        "stateID": "20",
        "state": "Singida"
      },
      {
        "stateID": "21",
        "state": "Tabora"
      },
      {
        "stateID": "22",
        "state": "Tanga"
      },
      {
        "stateID": "23",
        "state": "Zanzibar Central/South"
      },
      {
        "stateID": "24",
        "state": "Zanzibar North"
      },
      {
        "stateID": "25",
        "state": "Zanzibar Urban/West"
      }
    ],
    "Thailand": [
      {
        "stateID": "1",
        "state": "Amnat Charoen"
      },
      {
        "stateID": "2",
        "state": "Ang Thong"
      },
      {
        "stateID": "3",
        "state": "Buriram"
      },
      {
        "stateID": "4",
        "state": "Chachoengsao"
      },
      {
        "stateID": "5",
        "state": "Chai Nat"
      },
      {
        "stateID": "6",
        "state": "Chaiyaphum"
      },
      {
        "stateID": "7",
        "state": "Chanthaburi"
      },
      {
        "stateID": "8",
        "state": "Chiang Mai"
      },
      {
        "stateID": "9",
        "state": "Chiang Rai"
      },
      {
        "stateID": "10",
        "state": "Chon Buri"
      },
      {
        "stateID": "11",
        "state": "Chumphon"
      },
      {
        "stateID": "12",
        "state": "Kalasin"
      },
      {
        "stateID": "13",
        "state": "Kamphaeng Phet"
      },
      {
        "stateID": "14",
        "state": "Kanchanaburi"
      },
      {
        "stateID": "15",
        "state": "Khon Kaen"
      },
      {
        "stateID": "16",
        "state": "Krabi"
      },
      {
        "stateID": "17",
        "state": "Krung Thep Mahanakhon (Bangkok)"
      },
      {
        "stateID": "18",
        "state": "Lampang"
      },
      {
        "stateID": "19",
        "state": "Lamphun"
      },
      {
        "stateID": "20",
        "state": "Loei"
      },
      {
        "stateID": "21",
        "state": "Lop Buri"
      },
      {
        "stateID": "22",
        "state": "Mae Hong Son"
      },
      {
        "stateID": "23",
        "state": "Maha Sarakham"
      },
      {
        "stateID": "24",
        "state": "Mukdahan"
      },
      {
        "stateID": "25",
        "state": "Nakhon Nayok"
      },
      {
        "stateID": "26",
        "state": "Nakhon Pathom"
      },
      {
        "stateID": "27",
        "state": "Nakhon Phanom"
      },
      {
        "stateID": "28",
        "state": "Nakhon Ratchasima"
      },
      {
        "stateID": "29",
        "state": "Nakhon Sawan"
      },
      {
        "stateID": "30",
        "state": "Nakhon Si Thammarat"
      },
      {
        "stateID": "31",
        "state": "Nan"
      },
      {
        "stateID": "32",
        "state": "Narathiwat"
      },
      {
        "stateID": "33",
        "state": "Nong Bua Lamphu"
      },
      {
        "stateID": "34",
        "state": "Nong Khai"
      },
      {
        "stateID": "35",
        "state": "Nonthaburi"
      },
      {
        "stateID": "36",
        "state": "Pathum Thani"
      },
      {
        "stateID": "37",
        "state": "Pattani"
      },
      {
        "stateID": "38",
        "state": "Phangnga"
      },
      {
        "stateID": "39",
        "state": "Phatthalung"
      },
      {
        "stateID": "40",
        "state": "Phayao"
      },
      {
        "stateID": "41",
        "state": "Phetchabun"
      },
      {
        "stateID": "42",
        "state": "Phetchaburi"
      },
      {
        "stateID": "43",
        "state": "Phichit"
      },
      {
        "stateID": "44",
        "state": "Phitsanulok"
      },
      {
        "stateID": "45",
        "state": "Phra Nakhon Si Ayutthaya"
      },
      {
        "stateID": "46",
        "state": "Phrae"
      },
      {
        "stateID": "47",
        "state": "Phuket"
      },
      {
        "stateID": "48",
        "state": "Prachin Buri"
      },
      {
        "stateID": "49",
        "state": "Prachuap Khiri Khan"
      },
      {
        "stateID": "50",
        "state": "Ranong"
      },
      {
        "stateID": "51",
        "state": "Ratchaburi"
      },
      {
        "stateID": "52",
        "state": "Rayong"
      },
      {
        "stateID": "53",
        "state": "Roi Et"
      },
      {
        "stateID": "54",
        "state": "Sa Kaeo"
      },
      {
        "stateID": "55",
        "state": "Sakon Nakhon"
      },
      {
        "stateID": "56",
        "state": "Samut Prakan"
      },
      {
        "stateID": "57",
        "state": "Samut Sakhon"
      },
      {
        "stateID": "58",
        "state": "Samut Songkhram"
      },
      {
        "stateID": "59",
        "state": "Sara Buri"
      },
      {
        "stateID": "60",
        "state": "Satun"
      },
      {
        "stateID": "61",
        "state": "Sing Buri"
      },
      {
        "stateID": "62",
        "state": "Sisaket"
      },
      {
        "stateID": "63",
        "state": "Songkhla"
      },
      {
        "stateID": "64",
        "state": "Sukhothai"
      },
      {
        "stateID": "65",
        "state": "Suphan Buri"
      },
      {
        "stateID": "66",
        "state": "Surat Thani"
      },
      {
        "stateID": "67",
        "state": "Surin"
      },
      {
        "stateID": "68",
        "state": "Tak"
      },
      {
        "stateID": "69",
        "state": "Trang"
      },
      {
        "stateID": "70",
        "state": "Trat"
      },
      {
        "stateID": "71",
        "state": "Ubon Ratchathani"
      },
      {
        "stateID": "72",
        "state": "Udon Thani"
      },
      {
        "stateID": "73",
        "state": "Uthai Thani"
      },
      {
        "stateID": "74",
        "state": "Uttaradit"
      },
      {
        "stateID": "75",
        "state": "Yala"
      },
      {
        "stateID": "76",
        "state": "Yasothon"
      }
    ],
    "Tobago": [
      {
        "stateID": "1",
        "state": "Tobago"
      }
    ],
    "Toga": [
      {
        "stateID": "1",
        "state": "De La Kara"
      },
      {
        "stateID": "2",
        "state": "Des Plateaux"
      },
      {
        "stateID": "3",
        "state": "Des Savanes"
      },
      {
        "stateID": "4",
        "state": "Du Centre"
      },
      {
        "stateID": "5",
        "state": "Maritime"
      }
    ],
    "Tokelau": [
      {
        "stateID": "1",
        "state": "Atafu"
      },
      {
        "stateID": "2",
        "state": "Fakaofo"
      },
      {
        "stateID": "3",
        "state": "Nukunonu"
      }
    ],
    "Tonga": [
      {
        "stateID": "1",
        "state": "Ha'apai"
      },
      {
        "stateID": "2",
        "state": "Tongatapu"
      },
      {
        "stateID": "3",
        "state": "Vava'u"
      }
    ],
    "Trinidad": [
      {
        "stateID": "1",
        "state": "Arima"
      },
      {
        "stateID": "2",
        "state": "Caroni"
      },
      {
        "stateID": "3",
        "state": "Mayaro"
      },
      {
        "stateID": "4",
        "state": "Nariva"
      },
      {
        "stateID": "5",
        "state": "Port-of-Spain"
      },
      {
        "stateID": "6",
        "state": "Saint Andrew"
      },
      {
        "stateID": "7",
        "state": "Saint David"
      },
      {
        "stateID": "8",
        "state": "Saint George"
      },
      {
        "stateID": "9",
        "state": "Saint Patrick"
      },
      {
        "stateID": "10",
        "state": "San Fernando"
      },
      {
        "stateID": "11",
        "state": "Victoria"
      }
    ],
    "Tunisia": [
      {
        "stateID": "1",
        "state": "Ariana"
      },
      {
        "stateID": "2",
        "state": "Beja"
      },
      {
        "stateID": "3",
        "state": "Ben Arous"
      },
      {
        "stateID": "4",
        "state": "Bizerte"
      },
      {
        "stateID": "5",
        "state": "El Kef"
      },
      {
        "stateID": "6",
        "state": "Gabes"
      },
      {
        "stateID": "7",
        "state": "Gafsa"
      },
      {
        "stateID": "8",
        "state": "Jendouba"
      },
      {
        "stateID": "9",
        "state": "Kairouan"
      },
      {
        "stateID": "10",
        "state": "Kasserine"
      },
      {
        "stateID": "11",
        "state": "Kebili"
      },
      {
        "stateID": "12",
        "state": "Mahdia"
      },
      {
        "stateID": "13",
        "state": "Medenine"
      },
      {
        "stateID": "14",
        "state": "Monastir"
      },
      {
        "stateID": "15",
        "state": "Nabeul"
      },
      {
        "stateID": "16",
        "state": "Sfax"
      },
      {
        "stateID": "17",
        "state": "Sidi Bou Zid"
      },
      {
        "stateID": "18",
        "state": "Siliana"
      },
      {
        "stateID": "19",
        "state": "Sousse"
      },
      {
        "stateID": "20",
        "state": "Tataouine"
      },
      {
        "stateID": "21",
        "state": "Tozeur"
      },
      {
        "stateID": "22",
        "state": "Tunis"
      },
      {
        "stateID": "23",
        "state": "Zaghouan"
      }
    ],
    "Turkey": [
      {
        "stateID": "1",
        "state": "Adana"
      },
      {
        "stateID": "2",
        "state": "Adiyaman"
      },
      {
        "stateID": "3",
        "state": "Afyon"
      },
      {
        "stateID": "4",
        "state": "Agri"
      },
      {
        "stateID": "5",
        "state": "Aksaray"
      },
      {
        "stateID": "6",
        "state": "Amasya"
      },
      {
        "stateID": "7",
        "state": "Ankara"
      },
      {
        "stateID": "8",
        "state": "Antalya"
      },
      {
        "stateID": "9",
        "state": "Ardahan"
      },
      {
        "stateID": "10",
        "state": "Artvin"
      },
      {
        "stateID": "11",
        "state": "Aydin"
      },
      {
        "stateID": "12",
        "state": "Balikesir"
      },
      {
        "stateID": "13",
        "state": "Bartin"
      },
      {
        "stateID": "14",
        "state": "Batman"
      },
      {
        "stateID": "15",
        "state": "Bayburt"
      },
      {
        "stateID": "16",
        "state": "Bilecik"
      },
      {
        "stateID": "17",
        "state": "Bingol"
      },
      {
        "stateID": "18",
        "state": "Bitlis"
      },
      {
        "stateID": "19",
        "state": "Bolu"
      },
      {
        "stateID": "20",
        "state": "Burdur"
      },
      {
        "stateID": "21",
        "state": "Bursa"
      },
      {
        "stateID": "22",
        "state": "Canakkale"
      },
      {
        "stateID": "23",
        "state": "Cankiri"
      },
      {
        "stateID": "24",
        "state": "Corum"
      },
      {
        "stateID": "25",
        "state": "Denizli"
      },
      {
        "stateID": "26",
        "state": "Diyarbakir"
      },
      {
        "stateID": "27",
        "state": "Duzce"
      },
      {
        "stateID": "28",
        "state": "Edirne"
      },
      {
        "stateID": "29",
        "state": "Elazig"
      },
      {
        "stateID": "30",
        "state": "Erzincan"
      },
      {
        "stateID": "31",
        "state": "Erzurum"
      },
      {
        "stateID": "32",
        "state": "Eskisehir"
      },
      {
        "stateID": "33",
        "state": "Gaziantep"
      },
      {
        "stateID": "34",
        "state": "Giresun"
      },
      {
        "stateID": "35",
        "state": "Gumushane"
      },
      {
        "stateID": "36",
        "state": "Hakkari"
      },
      {
        "stateID": "37",
        "state": "Hatay"
      },
      {
        "stateID": "38",
        "state": "Icel"
      },
      {
        "stateID": "39",
        "state": "Igdir"
      },
      {
        "stateID": "40",
        "state": "Isparta"
      },
      {
        "stateID": "41",
        "state": "Istanbul"
      },
      {
        "stateID": "42",
        "state": "Izmir"
      },
      {
        "stateID": "43",
        "state": "Kahramanmaras"
      },
      {
        "stateID": "44",
        "state": "Karabuk"
      },
      {
        "stateID": "45",
        "state": "Karaman"
      },
      {
        "stateID": "46",
        "state": "Kars"
      },
      {
        "stateID": "47",
        "state": "Kastamonu"
      },
      {
        "stateID": "48",
        "state": "Kayseri"
      },
      {
        "stateID": "49",
        "state": "Kilis"
      },
      {
        "stateID": "50",
        "state": "Kirikkale"
      },
      {
        "stateID": "51",
        "state": "Kirklareli"
      },
      {
        "stateID": "52",
        "state": "Kirsehir"
      },
      {
        "stateID": "53",
        "state": "Kocaeli"
      },
      {
        "stateID": "54",
        "state": "Konya"
      },
      {
        "stateID": "55",
        "state": "Kutahya"
      },
      {
        "stateID": "56",
        "state": "Malatya"
      },
      {
        "stateID": "57",
        "state": "Manisa"
      },
      {
        "stateID": "58",
        "state": "Mardin"
      },
      {
        "stateID": "59",
        "state": "Mugla"
      },
      {
        "stateID": "60",
        "state": "Mus"
      },
      {
        "stateID": "61",
        "state": "Nevsehir"
      },
      {
        "stateID": "62",
        "state": "Nigde"
      },
      {
        "stateID": "63",
        "state": "Ordu"
      },
      {
        "stateID": "64",
        "state": "Osmaniye"
      },
      {
        "stateID": "65",
        "state": "Rize"
      },
      {
        "stateID": "66",
        "state": "Sakarya"
      },
      {
        "stateID": "67",
        "state": "Samsun"
      },
      {
        "stateID": "68",
        "state": "Sanliurfa"
      },
      {
        "stateID": "69",
        "state": "Siirt"
      },
      {
        "stateID": "70",
        "state": "Sinop"
      },
      {
        "stateID": "71",
        "state": "Sirnak"
      },
      {
        "stateID": "72",
        "state": "Sivas"
      },
      {
        "stateID": "73",
        "state": "Tekirdag"
      },
      {
        "stateID": "74",
        "state": "Tokat"
      },
      {
        "stateID": "75",
        "state": "Trabzon"
      },
      {
        "stateID": "76",
        "state": "Tunceli"
      },
      {
        "stateID": "77",
        "state": "Usak"
      },
      {
        "stateID": "78",
        "state": "Van"
      },
      {
        "stateID": "79",
        "state": "Yalova"
      },
      {
        "stateID": "80",
        "state": "Yozgat"
      },
      {
        "stateID": "81",
        "state": "Zonguldak"
      }
    ],
    "Turkmenistan": [
      {
        "stateID": "1",
        "state": "Ahal Welayaty"
      },
      {
        "stateID": "2",
        "state": "Balkan Welayaty"
      },
      {
        "stateID": "3",
        "state": "Dashhowuz Welayaty"
      },
      {
        "stateID": "4",
        "state": "Lebap Welayaty"
      },
      {
        "stateID": "5",
        "state": "Mary Welayaty"
      }
    ],
    "Tuvalu": [
      {
        "stateID": "1",
        "state": "Tuvalu"
      }
    ],
    "Uganda": [
      {
        "stateID": "1",
        "state": "Adjumani"
      },
      {
        "stateID": "2",
        "state": "Apac"
      },
      {
        "stateID": "3",
        "state": "Arua"
      },
      {
        "stateID": "4",
        "state": "Bugiri"
      },
      {
        "stateID": "5",
        "state": "Bundibugyo"
      },
      {
        "stateID": "6",
        "state": "Bushenyi"
      },
      {
        "stateID": "7",
        "state": "Busia"
      },
      {
        "stateID": "8",
        "state": "Gulu"
      },
      {
        "stateID": "9",
        "state": "Hoima"
      },
      {
        "stateID": "10",
        "state": "Iganga"
      },
      {
        "stateID": "11",
        "state": "Jinja"
      },
      {
        "stateID": "12",
        "state": "Kabale"
      },
      {
        "stateID": "13",
        "state": "Kabarole"
      },
      {
        "stateID": "14",
        "state": "Kalangala"
      },
      {
        "stateID": "15",
        "state": "Kampala"
      },
      {
        "stateID": "16",
        "state": "Kamuli"
      },
      {
        "stateID": "17",
        "state": "Kapchorwa"
      },
      {
        "stateID": "18",
        "state": "Kasese"
      },
      {
        "stateID": "19",
        "state": "Katakwi"
      },
      {
        "stateID": "20",
        "state": "Kibale"
      },
      {
        "stateID": "21",
        "state": "Kiboga"
      },
      {
        "stateID": "22",
        "state": "Kisoro"
      },
      {
        "stateID": "23",
        "state": "Kitgum"
      },
      {
        "stateID": "24",
        "state": "Kotido"
      },
      {
        "stateID": "25",
        "state": "Kumi"
      },
      {
        "stateID": "26",
        "state": "Lira"
      },
      {
        "stateID": "27",
        "state": "Luwero"
      },
      {
        "stateID": "28",
        "state": "Masaka"
      },
      {
        "stateID": "29",
        "state": "Masindi"
      },
      {
        "stateID": "30",
        "state": "Mbale"
      },
      {
        "stateID": "31",
        "state": "Mbarara"
      },
      {
        "stateID": "32",
        "state": "Moroto"
      },
      {
        "stateID": "33",
        "state": "Moyo"
      },
      {
        "stateID": "34",
        "state": "Mpigi"
      },
      {
        "stateID": "35",
        "state": "Mubende"
      },
      {
        "stateID": "36",
        "state": "Mukono"
      },
      {
        "stateID": "37",
        "state": "Nakasongola"
      },
      {
        "stateID": "38",
        "state": "Nebbi"
      },
      {
        "stateID": "39",
        "state": "Ntungamo"
      },
      {
        "stateID": "40",
        "state": "Pallisa"
      },
      {
        "stateID": "41",
        "state": "Rakai"
      },
      {
        "stateID": "42",
        "state": "Rukungiri"
      },
      {
        "stateID": "43",
        "state": "Sembabule"
      },
      {
        "stateID": "44",
        "state": "Soroti"
      },
      {
        "stateID": "45",
        "state": "Tororo"
      }
    ],
    "Ukraine": [
      {
        "stateID": "1",
        "state": "Avtonomna Respublika Krym (Simferopol')"
      },
      {
        "stateID": "2",
        "state": "Cherkas'ka (Cherkasy)"
      },
      {
        "stateID": "3",
        "state": "Chernihivs'ka (Chernihiv)"
      },
      {
        "stateID": "4",
        "state": "Chernivets'ka (Chernivtsi)"
      },
      {
        "stateID": "5",
        "state": "Dnipropetrovs'ka (Dnipropetrovs'k)"
      },
      {
        "stateID": "6",
        "state": "Donets'ka (Donets'k)"
      },
      {
        "stateID": "7",
        "state": "Ivano-Frankivs'ka (Ivano-Frankivs'k)"
      },
      {
        "stateID": "8",
        "state": "Kharkivs'ka (Kharkiv)"
      },
      {
        "stateID": "9",
        "state": "Khersons'ka (Kherson)"
      },
      {
        "stateID": "10",
        "state": "Khmel'nyts'ka (Khmel'nyts'kyy)"
      },
      {
        "stateID": "11",
        "state": "Kirovohrads'ka (Kirovohrad)"
      },
      {
        "stateID": "12",
        "state": "Kyyiv"
      },
      {
        "stateID": "13",
        "state": "Kyyivs'ka (Kiev)"
      },
      {
        "stateID": "14",
        "state": "L'vivs'ka (L'viv)"
      },
      {
        "stateID": "15",
        "state": "Luhans'ka (Luhans'k)"
      },
      {
        "stateID": "16",
        "state": "Mykolayivs'ka (Mykolayiv)"
      },
      {
        "stateID": "17",
        "state": "Odes'ka (Odesa)"
      },
      {
        "stateID": "18",
        "state": "Poltavs'ka (Poltava)"
      },
      {
        "stateID": "19",
        "state": "Rivnens'ka (Rivne)"
      },
      {
        "stateID": "20",
        "state": "Sevastopol'"
      },
      {
        "stateID": "21",
        "state": "Sums'ka (Sumy)"
      },
      {
        "stateID": "22",
        "state": "Ternopil's'ka (Ternopil')"
      },
      {
        "stateID": "23",
        "state": "Vinnyts'ka (Vinnytsya)"
      },
      {
        "stateID": "24",
        "state": "Volyns'ka (Luts'k)"
      },
      {
        "stateID": "25",
        "state": "Zakarpats'ka (Uzhhorod)"
      },
      {
        "stateID": "26",
        "state": "Zaporiz'ka (Zaporizhzhya)"
      },
      {
        "stateID": "27",
        "state": "Zhytomyrs'ka (Zhytomyr)"
      }
    ],
    "United Arab Emirates": [
      {
        "stateID": "1",
        "state": "'Ajman"
      },
      {
        "stateID": "2",
        "state": "Abu Zaby (Abu Dhabi)"
      },
      {
        "stateID": "3",
        "state": "Al Fujayrah"
      },
      {
        "stateID": "4",
        "state": "Ash Shariqah (Sharjah)"
      },
      {
        "stateID": "5",
        "state": "Dubayy (Dubai)"
      },
      {
        "stateID": "6",
        "state": "Ra's al Khaymah"
      },
      {
        "stateID": "7",
        "state": "Umm al Qaywayn"
      }
    ],
    "United Kingdom": [
      {
        "stateID": "1",
        "state": "Barking and Dagenham"
      },
      {
        "stateID": "2",
        "state": "Barnet"
      },
      {
        "stateID": "3",
        "state": "Barnsley"
      },
      {
        "stateID": "4",
        "state": "Bath and North East Somerset"
      },
      {
        "stateID": "5",
        "state": "Bedfordshire"
      },
      {
        "stateID": "6",
        "state": "Bexley"
      },
      {
        "stateID": "7",
        "state": "Birmingham"
      },
      {
        "stateID": "8",
        "state": "Blackburn with Darwen"
      },
      {
        "stateID": "9",
        "state": "Blackpool"
      },
      {
        "stateID": "10",
        "state": "Bolton"
      },
      {
        "stateID": "11",
        "state": "Bournemouth"
      },
      {
        "stateID": "12",
        "state": "Bracknell Forest"
      },
      {
        "stateID": "13",
        "state": "Bradford"
      },
      {
        "stateID": "14",
        "state": "Brent"
      },
      {
        "stateID": "15",
        "state": "Brighton and Hove"
      },
      {
        "stateID": "16",
        "state": "Bromley"
      },
      {
        "stateID": "17",
        "state": "Buckinghamshire"
      },
      {
        "stateID": "18",
        "state": "Bury"
      },
      {
        "stateID": "19",
        "state": "Calderdale"
      },
      {
        "stateID": "20",
        "state": "Cambridgeshire"
      },
      {
        "stateID": "21",
        "state": "Camden"
      },
      {
        "stateID": "22",
        "state": "Cheshire"
      },
      {
        "stateID": "23",
        "state": "City of Bristol"
      },
      {
        "stateID": "24",
        "state": "City of Kingston upon Hull"
      },
      {
        "stateID": "25",
        "state": "City of London"
      },
      {
        "stateID": "26",
        "state": "Cornwall"
      },
      {
        "stateID": "27",
        "state": "Coventry"
      },
      {
        "stateID": "28",
        "state": "Croydon"
      },
      {
        "stateID": "29",
        "state": "Cumbria"
      },
      {
        "stateID": "30",
        "state": "Darlington"
      },
      {
        "stateID": "31",
        "state": "Derby"
      },
      {
        "stateID": "32",
        "state": "Derbyshire"
      },
      {
        "stateID": "33",
        "state": "Devon"
      },
      {
        "stateID": "34",
        "state": "Doncaster"
      },
      {
        "stateID": "35",
        "state": "Dorset"
      },
      {
        "stateID": "36",
        "state": "Dudley"
      },
      {
        "stateID": "37",
        "state": "Durham"
      },
      {
        "stateID": "38",
        "state": "Ealing"
      },
      {
        "stateID": "39",
        "state": "East Riding of Yorkshire"
      },
      {
        "stateID": "40",
        "state": "East Sussex"
      },
      {
        "stateID": "41",
        "state": "Enfield"
      },
      {
        "stateID": "42",
        "state": "Essex"
      },
      {
        "stateID": "43",
        "state": "Gateshead"
      },
      {
        "stateID": "44",
        "state": "Gloucestershire"
      },
      {
        "stateID": "45",
        "state": "Greenwich"
      },
      {
        "stateID": "46",
        "state": "Hackney"
      },
      {
        "stateID": "47",
        "state": "Halton"
      },
      {
        "stateID": "48",
        "state": "Hammersmith and Fulham"
      },
      {
        "stateID": "49",
        "state": "Hampshire"
      },
      {
        "stateID": "50",
        "state": "Haringey"
      },
      {
        "stateID": "51",
        "state": "Harrow"
      },
      {
        "stateID": "52",
        "state": "Hartlepool"
      },
      {
        "stateID": "53",
        "state": "Havering"
      },
      {
        "stateID": "54",
        "state": "Herefordshire"
      },
      {
        "stateID": "55",
        "state": "Hertfordshire"
      },
      {
        "stateID": "56",
        "state": "Hillingdon"
      },
      {
        "stateID": "57",
        "state": "Hounslow"
      },
      {
        "stateID": "58",
        "state": "Isle of Wight"
      },
      {
        "stateID": "59",
        "state": "Islington"
      },
      {
        "stateID": "60",
        "state": "Kensington and Chelsea"
      },
      {
        "stateID": "61",
        "state": "Kent"
      },
      {
        "stateID": "62",
        "state": "Kingston upon Thames"
      },
      {
        "stateID": "63",
        "state": "Kirklees"
      },
      {
        "stateID": "64",
        "state": "Knowsley"
      },
      {
        "stateID": "65",
        "state": "Lambeth"
      },
      {
        "stateID": "66",
        "state": "Lancashire"
      },
      {
        "stateID": "67",
        "state": "Leeds"
      },
      {
        "stateID": "68",
        "state": "Leicester"
      },
      {
        "stateID": "69",
        "state": "Leicestershire"
      },
      {
        "stateID": "70",
        "state": "Lewisham"
      },
      {
        "stateID": "71",
        "state": "Lincolnshire"
      },
      {
        "stateID": "72",
        "state": "Liverpool"
      },
      {
        "stateID": "73",
        "state": "Luton"
      },
      {
        "stateID": "74",
        "state": "Manchester"
      },
      {
        "stateID": "75",
        "state": "Medway"
      },
      {
        "stateID": "76",
        "state": "Merton"
      },
      {
        "stateID": "77",
        "state": "Middlesbrough"
      },
      {
        "stateID": "78",
        "state": "Milton Keynes"
      },
      {
        "stateID": "79",
        "state": "Newcastle upon Tyne"
      },
      {
        "stateID": "80",
        "state": "Newham"
      },
      {
        "stateID": "81",
        "state": "Norfolk"
      },
      {
        "stateID": "82",
        "state": "North East Lincolnshire"
      },
      {
        "stateID": "83",
        "state": "North Lincolnshire"
      },
      {
        "stateID": "84",
        "state": "North Somerset"
      },
      {
        "stateID": "85",
        "state": "North Tyneside"
      },
      {
        "stateID": "86",
        "state": "North Yorkshire"
      },
      {
        "stateID": "87",
        "state": "Northamptonshire"
      },
      {
        "stateID": "88",
        "state": "Northumberland"
      },
      {
        "stateID": "89",
        "state": "Nottingham"
      },
      {
        "stateID": "90",
        "state": "Nottinghamshire"
      },
      {
        "stateID": "91",
        "state": "Oldham"
      },
      {
        "stateID": "92",
        "state": "Oxfordshire"
      },
      {
        "stateID": "93",
        "state": "Peterborough"
      },
      {
        "stateID": "94",
        "state": "Plymouth"
      },
      {
        "stateID": "95",
        "state": "Poole"
      },
      {
        "stateID": "96",
        "state": "Portsmouth"
      },
      {
        "stateID": "97",
        "state": "Reading"
      },
      {
        "stateID": "98",
        "state": "Redbridge"
      },
      {
        "stateID": "99",
        "state": "Redcar and Cleveland"
      },
      {
        "stateID": "100",
        "state": "Richmond upon Thames"
      },
      {
        "stateID": "101",
        "state": "Rochdale"
      },
      {
        "stateID": "102",
        "state": "Rotherham"
      },
      {
        "stateID": "103",
        "state": "Rutland"
      },
      {
        "stateID": "104",
        "state": "Salford"
      },
      {
        "stateID": "105",
        "state": "Sandwell"
      },
      {
        "stateID": "106",
        "state": "Sefton"
      },
      {
        "stateID": "107",
        "state": "Sheffield"
      },
      {
        "stateID": "108",
        "state": "Shropshire"
      },
      {
        "stateID": "109",
        "state": "Slough"
      },
      {
        "stateID": "110",
        "state": "Solihull"
      },
      {
        "stateID": "111",
        "state": "Somerset"
      },
      {
        "stateID": "112",
        "state": "South Gloucestershire"
      },
      {
        "stateID": "113",
        "state": "South Tyneside"
      },
      {
        "stateID": "114",
        "state": "Southampton"
      },
      {
        "stateID": "115",
        "state": "Southend-on-Sea"
      },
      {
        "stateID": "116",
        "state": "Southwark"
      },
      {
        "stateID": "117",
        "state": "St. Helens"
      },
      {
        "stateID": "118",
        "state": "Staffordshire"
      },
      {
        "stateID": "119",
        "state": "Stockport"
      },
      {
        "stateID": "120",
        "state": "Stockton-on-Tees"
      },
      {
        "stateID": "121",
        "state": "Stoke-on-Trent"
      },
      {
        "stateID": "122",
        "state": "Suffolk"
      },
      {
        "stateID": "123",
        "state": "Sunderland"
      },
      {
        "stateID": "124",
        "state": "Surrey"
      },
      {
        "stateID": "125",
        "state": "Sutton"
      },
      {
        "stateID": "126",
        "state": "Swindon"
      },
      {
        "stateID": "127",
        "state": "Tameside"
      },
      {
        "stateID": "128",
        "state": "Telford and Wrekin"
      },
      {
        "stateID": "129",
        "state": "Thurrock"
      },
      {
        "stateID": "130",
        "state": "Torbay"
      },
      {
        "stateID": "131",
        "state": "Tower Hamlets"
      },
      {
        "stateID": "132",
        "state": "Trafford"
      },
      {
        "stateID": "133",
        "state": "Wakefield"
      },
      {
        "stateID": "134",
        "state": "Walsall"
      },
      {
        "stateID": "135",
        "state": "Waltham Forest"
      },
      {
        "stateID": "136",
        "state": "Wandsworth"
      },
      {
        "stateID": "137",
        "state": "Warrington"
      },
      {
        "stateID": "138",
        "state": "Warwickshire"
      },
      {
        "stateID": "139",
        "state": "West Berkshire"
      },
      {
        "stateID": "140",
        "state": "West Sussex"
      },
      {
        "stateID": "141",
        "state": "Westminster"
      },
      {
        "stateID": "142",
        "state": "Wigan"
      },
      {
        "stateID": "143",
        "state": "Wiltshire"
      },
      {
        "stateID": "144",
        "state": "Windsor and Maidenhead"
      },
      {
        "stateID": "145",
        "state": "Wirral"
      },
      {
        "stateID": "146",
        "state": "Wokingham"
      },
      {
        "stateID": "147",
        "state": "Wolverhampton"
      },
      {
        "stateID": "148",
        "state": "Worcestershire"
      },
      {
        "stateID": "149",
        "state": "York"
      }
    ],
    "Uruguay": [
      {
        "stateID": "1",
        "state": "Artigas"
      },
      {
        "stateID": "2",
        "state": "Canelones"
      },
      {
        "stateID": "3",
        "state": "Cerro Largo"
      },
      {
        "stateID": "4",
        "state": "Colonia"
      },
      {
        "stateID": "5",
        "state": "Durazno"
      },
      {
        "stateID": "6",
        "state": "Flores"
      },
      {
        "stateID": "7",
        "state": "Florida"
      },
      {
        "stateID": "8",
        "state": "Lavalleja"
      },
      {
        "stateID": "9",
        "state": "Maldonado"
      },
      {
        "stateID": "10",
        "state": "Montevideo"
      },
      {
        "stateID": "11",
        "state": "Paysandu"
      },
      {
        "stateID": "12",
        "state": "Rio Negro"
      },
      {
        "stateID": "13",
        "state": "Rivera"
      },
      {
        "stateID": "14",
        "state": "Rocha"
      },
      {
        "stateID": "15",
        "state": "Salto"
      },
      {
        "stateID": "16",
        "state": "San Jose"
      },
      {
        "stateID": "17",
        "state": "Soriano"
      },
      {
        "stateID": "18",
        "state": "Tacuarembo"
      },
      {
        "stateID": "19",
        "state": "Treinta y Tres"
      }
    ],
    "United States of America": [
      {
        "stateID": "1",
        "state": "Alabama"
      },
      {
        "stateID": "2",
        "state": "Alaska"
      },
      {
        "stateID": "3",
        "state": "Arizona"
      },
      {
        "stateID": "4",
        "state": "Arkansas"
      },
      {
        "stateID": "5",
        "state": "California"
      },
      {
        "stateID": "6",
        "state": "Colorado"
      },
      {
        "stateID": "7",
        "state": "Connecticut"
      },
      {
        "stateID": "8",
        "state": "Delaware"
      },
      {
        "stateID": "9",
        "state": "District of Columbia"
      },
      {
        "stateID": "10",
        "state": "Florida"
      },
      {
        "stateID": "11",
        "state": "Georgia"
      },
      {
        "stateID": "12",
        "state": "Hawaii"
      },
      {
        "stateID": "13",
        "state": "Idaho"
      },
      {
        "stateID": "14",
        "state": "Illinois"
      },
      {
        "stateID": "15",
        "state": "Indiana"
      },
      {
        "stateID": "16",
        "state": "Iowa"
      },
      {
        "stateID": "17",
        "state": "Kansas"
      },
      {
        "stateID": "18",
        "state": "Kentucky"
      },
      {
        "stateID": "19",
        "state": "Louisiana"
      },
      {
        "stateID": "20",
        "state": "Maine"
      },
      {
        "stateID": "21",
        "state": "Maryland"
      },
      {
        "stateID": "22",
        "state": "Massachusetts"
      },
      {
        "stateID": "23",
        "state": "Michigan"
      },
      {
        "stateID": "24",
        "state": "Minnesota"
      },
      {
        "stateID": "25",
        "state": "Mississippi"
      },
      {
        "stateID": "26",
        "state": "Missouri"
      },
      {
        "stateID": "27",
        "state": "Montana"
      },
      {
        "stateID": "28",
        "state": "Nebraska"
      },
      {
        "stateID": "29",
        "state": "Nevada"
      },
      {
        "stateID": "30",
        "state": "New Hampshire"
      },
      {
        "stateID": "31",
        "state": "New Jersey"
      },
      {
        "stateID": "32",
        "state": "New Mexico"
      },
      {
        "stateID": "33",
        "state": "New York"
      },
      {
        "stateID": "34",
        "state": "North Carolina"
      },
      {
        "stateID": "35",
        "state": "North Dakota"
      },
      {
        "stateID": "36",
        "state": "Ohio"
      },
      {
        "stateID": "37",
        "state": "Oklahoma"
      },
      {
        "stateID": "38",
        "state": "Oregon"
      },
      {
        "stateID": "39",
        "state": "Pennsylvania"
      },
      {
        "stateID": "40",
        "state": "Rhode Island"
      },
      {
        "stateID": "41",
        "state": "South Carolina"
      },
      {
        "stateID": "42",
        "state": "South Dakota"
      },
      {
        "stateID": "43",
        "state": "Tennessee"
      },
      {
        "stateID": "44",
        "state": "Texas"
      },
      {
        "stateID": "45",
        "state": "Utah"
      },
      {
        "stateID": "46",
        "state": "Vermont"
      },
      {
        "stateID": "47",
        "state": "Virginia"
      },
      {
        "stateID": "48",
        "state": "Washington"
      },
      {
        "stateID": "49",
        "state": "West Virginia"
      },
      {
        "stateID": "50",
        "state": "Wisconsin"
      },
      {
        "stateID": "51",
        "state": "Wyoming"
      }
    ],
    "Uzbekistan": [
      {
        "stateID": "1",
        "state": "Andijon Wiloyati"
      },
      {
        "stateID": "2",
        "state": "Bukhoro Wiloyati"
      },
      {
        "stateID": "3",
        "state": "Farghona Wiloyati"
      },
      {
        "stateID": "4",
        "state": "Jizzakh Wiloyati"
      },
      {
        "stateID": "5",
        "state": "Khorazm Wiloyati (Urganch)"
      },
      {
        "stateID": "6",
        "state": "Namangan Wiloyati"
      },
      {
        "stateID": "7",
        "state": "Nawoiy Wiloyati"
      },
      {
        "stateID": "8",
        "state": "Qashqadaryo Wiloyati (Qarshi)"
      },
      {
        "stateID": "9",
        "state": "Qoraqalpoghiston (Nukus)"
      },
      {
        "stateID": "10",
        "state": "Samarqand Wiloyati"
      },
      {
        "stateID": "11",
        "state": "Sirdaryo Wiloyati (Guliston)"
      },
      {
        "stateID": "12",
        "state": "Surkhondaryo Wiloyati (Termiz)"
      },
      {
        "stateID": "13",
        "state": "Toshkent Shahri"
      },
      {
        "stateID": "14",
        "state": "Toshkent Wiloyati"
      }
    ],
    "Vanuatu": [
      {
        "stateID": "1",
        "state": "Malampa"
      },
      {
        "stateID": "2",
        "state": "Penama"
      },
      {
        "stateID": "3",
        "state": "Sanma"
      },
      {
        "stateID": "4",
        "state": "Shefa"
      },
      {
        "stateID": "5",
        "state": "Tafea"
      },
      {
        "stateID": "6",
        "state": "Torba"
      }
    ],
    "Venezuela": [
      {
        "stateID": "1",
        "state": "Amazonas"
      },
      {
        "stateID": "2",
        "state": "Anzoategui"
      },
      {
        "stateID": "3",
        "state": "Apure"
      },
      {
        "stateID": "4",
        "state": "Aragua"
      },
      {
        "stateID": "5",
        "state": "Barinas"
      },
      {
        "stateID": "6",
        "state": "Bolivar"
      },
      {
        "stateID": "7",
        "state": "Carabobo"
      },
      {
        "stateID": "8",
        "state": "Cojedes"
      },
      {
        "stateID": "9",
        "state": "Delta Amacuro"
      },
      {
        "stateID": "10",
        "state": "Dependencias Federales"
      },
      {
        "stateID": "11",
        "state": "Distrito Federal"
      },
      {
        "stateID": "12",
        "state": "Falcon"
      },
      {
        "stateID": "13",
        "state": "Guarico"
      },
      {
        "stateID": "14",
        "state": "Lara"
      },
      {
        "stateID": "15",
        "state": "Merida"
      },
      {
        "stateID": "16",
        "state": "Miranda"
      },
      {
        "stateID": "17",
        "state": "Monagas"
      },
      {
        "stateID": "18",
        "state": "Nueva Esparta"
      },
      {
        "stateID": "19",
        "state": "Portuguesa"
      },
      {
        "stateID": "20",
        "state": "Sucre"
      },
      {
        "stateID": "21",
        "state": "Tachira"
      },
      {
        "stateID": "22",
        "state": "Trujillo"
      },
      {
        "stateID": "23",
        "state": "Vargas"
      },
      {
        "stateID": "24",
        "state": "Yaracuy"
      },
      {
        "stateID": "25",
        "state": "Zulia"
      }
    ],
    "Vietnam": [
      {
        "stateID": "1",
        "state": "An Giang"
      },
      {
        "stateID": "2",
        "state": "Ba Ria-Vung Tau"
      },
      {
        "stateID": "3",
        "state": "Bac Giang"
      },
      {
        "stateID": "4",
        "state": "Bac Kan"
      },
      {
        "stateID": "5",
        "state": "Bac Lieu"
      },
      {
        "stateID": "6",
        "state": "Bac Ninh"
      },
      {
        "stateID": "7",
        "state": "Ben Tre"
      },
      {
        "stateID": "8",
        "state": "Binh Dinh"
      },
      {
        "stateID": "9",
        "state": "Binh Duong"
      },
      {
        "stateID": "10",
        "state": "Binh Phuoc"
      },
      {
        "stateID": "11",
        "state": "Binh Thuan"
      },
      {
        "stateID": "12",
        "state": "Ca Mau"
      },
      {
        "stateID": "13",
        "state": "Can Tho"
      },
      {
        "stateID": "14",
        "state": "Cao Bang"
      },
      {
        "stateID": "15",
        "state": "Da Nang"
      },
      {
        "stateID": "16",
        "state": "Dac Lak"
      },
      {
        "stateID": "17",
        "state": "Dong Nai"
      },
      {
        "stateID": "18",
        "state": "Dong Thap"
      },
      {
        "stateID": "19",
        "state": "Gia Lai"
      },
      {
        "stateID": "20",
        "state": "Ha Giang"
      },
      {
        "stateID": "21",
        "state": "Ha Nam"
      },
      {
        "stateID": "22",
        "state": "Ha Noi"
      },
      {
        "stateID": "23",
        "state": "Ha Tay"
      },
      {
        "stateID": "24",
        "state": "Ha Tinh"
      },
      {
        "stateID": "25",
        "state": "Hai Duong"
      },
      {
        "stateID": "26",
        "state": "Hai Phong"
      },
      {
        "stateID": "27",
        "state": "Ho Chi Minh"
      },
      {
        "stateID": "28",
        "state": "Hoa Binh"
      },
      {
        "stateID": "29",
        "state": "Hung Yen"
      },
      {
        "stateID": "30",
        "state": "Khanh Hoa"
      },
      {
        "stateID": "31",
        "state": "Kien Giang"
      },
      {
        "stateID": "32",
        "state": "Kon Tum"
      },
      {
        "stateID": "33",
        "state": "Lai Chau"
      },
      {
        "stateID": "34",
        "state": "Lam Dong"
      },
      {
        "stateID": "35",
        "state": "Lang Son"
      },
      {
        "stateID": "36",
        "state": "Lao Cai"
      },
      {
        "stateID": "37",
        "state": "Long An"
      },
      {
        "stateID": "38",
        "state": "Nam Dinh"
      },
      {
        "stateID": "39",
        "state": "Nghe An"
      },
      {
        "stateID": "40",
        "state": "Ninh Binh"
      },
      {
        "stateID": "41",
        "state": "Ninh Thuan"
      },
      {
        "stateID": "42",
        "state": "Phu Tho"
      },
      {
        "stateID": "43",
        "state": "Phu Yen"
      },
      {
        "stateID": "44",
        "state": "Quang Binh"
      },
      {
        "stateID": "45",
        "state": "Quang Nam"
      },
      {
        "stateID": "46",
        "state": "Quang Ngai"
      },
      {
        "stateID": "47",
        "state": "Quang Ninh"
      },
      {
        "stateID": "48",
        "state": "Quang Tri"
      },
      {
        "stateID": "49",
        "state": "Soc Trang"
      },
      {
        "stateID": "50",
        "state": "Son La"
      },
      {
        "stateID": "51",
        "state": "Tay Ninh"
      },
      {
        "stateID": "52",
        "state": "Thai Binh"
      },
      {
        "stateID": "53",
        "state": "Thai Nguyen"
      },
      {
        "stateID": "54",
        "state": "Thanh Hoa"
      },
      {
        "stateID": "55",
        "state": "Thua Thien-Hue"
      },
      {
        "stateID": "56",
        "state": "Tien Giang"
      },
      {
        "stateID": "57",
        "state": "Tra Vinh"
      },
      {
        "stateID": "58",
        "state": "Tuyen Quang"
      },
      {
        "stateID": "59",
        "state": "Vinh Long"
      },
      {
        "stateID": "60",
        "state": "Vinh Phuc"
      },
      {
        "stateID": "61",
        "state": "Yen Bai"
      }
    ],
    "Virgin Islands": [
      {
        "stateID": "1",
        "state": "Saint Croix"
      },
      {
        "stateID": "2",
        "state": "Saint John"
      },
      {
        "stateID": "3",
        "state": "Saint Thomas"
      }
    ],
    "Wales": [
      {
        "stateID": "1",
        "state": "Blaenau Gwent"
      },
      {
        "stateID": "2",
        "state": "Bridgend"
      },
      {
        "stateID": "3",
        "state": "Caerphilly"
      },
      {
        "stateID": "4",
        "state": "Cardiff"
      },
      {
        "stateID": "5",
        "state": "Carmarthenshire"
      },
      {
        "stateID": "6",
        "state": "Ceredigion"
      },
      {
        "stateID": "7",
        "state": "Conwy"
      },
      {
        "stateID": "8",
        "state": "Denbighshire"
      },
      {
        "stateID": "9",
        "state": "Flintshire"
      },
      {
        "stateID": "10",
        "state": "Gwynedd"
      },
      {
        "stateID": "11",
        "state": "Isle of Anglesey"
      },
      {
        "stateID": "12",
        "state": "Merthyr Tydfil"
      },
      {
        "stateID": "13",
        "state": "Monmouthshire"
      },
      {
        "stateID": "14",
        "state": "Neath Port Talbot"
      },
      {
        "stateID": "15",
        "state": "Newport"
      },
      {
        "stateID": "16",
        "state": "Pembrokeshire"
      },
      {
        "stateID": "17",
        "state": "Powys"
      },
      {
        "stateID": "18",
        "state": "Rhondda Cynon Taff"
      },
      {
        "stateID": "19",
        "state": "Swansea"
      },
      {
        "stateID": "20",
        "state": "The Vale of Glamorgan"
      },
      {
        "stateID": "21",
        "state": "Torfaen"
      },
      {
        "stateID": "22",
        "state": "Wrexham"
      }
    ],
    "Wallis and Futuna": [
      {
        "stateID": "1",
        "state": "Alo"
      },
      {
        "stateID": "2",
        "state": "Sigave"
      },
      {
        "stateID": "3",
        "state": "Wallis"
      }
    ],
    "West Bank": [
      {
        "stateID": "1",
        "state": "West Bank"
      }
    ],
    "Western Sahara": [
      {
        "stateID": "1",
        "state": "Western Sahara"
      }
    ],
    "Yemen": [
      {
        "stateID": "1",
        "state": "'Adan"
      },
      {
        "stateID": "2",
        "state": "'Ataq"
      },
      {
        "stateID": "3",
        "state": "Abyan"
      },
      {
        "stateID": "4",
        "state": "Al Bayda'"
      },
      {
        "stateID": "5",
        "state": "Al Hudaydah"
      },
      {
        "stateID": "6",
        "state": "Al Jawf"
      },
      {
        "stateID": "7",
        "state": "Al Mahrah"
      },
      {
        "stateID": "8",
        "state": "Al Mahwit"
      },
      {
        "stateID": "9",
        "state": "Dhamar"
      },
      {
        "stateID": "10",
        "state": "Hadhramawt"
      },
      {
        "stateID": "11",
        "state": "Hajjah"
      },
      {
        "stateID": "12",
        "state": "Ibb"
      },
      {
        "stateID": "13",
        "state": "Lahij"
      },
      {
        "stateID": "14",
        "state": "Ma'rib"
      },
      {
        "stateID": "15",
        "state": "Sa'dah"
      },
      {
        "stateID": "16",
        "state": "San'a'"
      },
      {
        "stateID": "17",
        "state": "Ta'izz"
      }
    ],
    "Yugoslavia": [
      {
        "stateID": "1",
        "state": "Kosovo"
      },
      {
        "stateID": "2",
        "state": "Montenegro"
      },
      {
        "stateID": "3",
        "state": "Serbia"
      },
      {
        "stateID": "4",
        "state": "Vojvodina"
      }
    ],
    "Zambia": [
      {
        "stateID": "1",
        "state": "Central"
      },
      {
        "stateID": "2",
        "state": "Copperbelt"
      },
      {
        "stateID": "3",
        "state": "Eastern"
      },
      {
        "stateID": "4",
        "state": "Luapula"
      },
      {
        "stateID": "5",
        "state": "Lusaka"
      },
      {
        "stateID": "6",
        "state": "North-Western"
      },
      {
        "stateID": "7",
        "state": "Northern"
      },
      {
        "stateID": "8",
        "state": "Southern"
      },
      {
        "stateID": "9",
        "state": "Western"
      }
    ],
    "Zimbabwe": [
      {
        "stateID": "1",
        "state": "Bulawayo"
      },
      {
        "stateID": "2",
        "state": "Harare"
      },
      {
        "stateID": "3",
        "state": "ManicalandMashonaland Central"
      },
      {
        "stateID": "4",
        "state": "Mashonaland East"
      },
      {
        "stateID": "5",
        "state": "Mashonaland West"
      },
      {
        "stateID": "6",
        "state": "Masvingo"
      },
      {
        "stateID": "7",
        "state": "Matabeleland North"
      },
      {
        "stateID": "8",
        "state": "Matabeleland South"
      },
      {
        "stateID": "9",
        "state": "Midlands"
      }
    ]
  };
  var CountryListItems= "";

  for (var i = 0; i < countryJsonList.countryTable.length; i++){
    CountryListItems+= "<option value='" + countryJsonList.countryTable[i].countryID + "'>" +
      countryJsonList.countryTable[i].country + "</option>";
  }
  $("#select_country").html(CountryListItems);

  var updateSelectStateBox = function(state) {
    var listItems= "";
    for (var i = 0; i < stateJsonList[state].length; i++){
      listItems+= "<option value='" + stateJsonList[state][i].stateTypeID + "'>" + stateJsonList[state][i].state + "</option>";
    }
    $("select#select_state").html(listItems);
  }
  $("select#select_country").on('change',function(){
    var selectedState = $('#select_country option:selected').text();
    updateSelectStateBox(selectedState);
  });
});
